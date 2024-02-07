import { OpenAI } from 'openai';

export async function POST(request: Request) {
  const body = await request.json();
  const userInput = body.userInput;

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  try {
    const thread = await openai.beta.threads.create();
    await openai.beta.threads.messages.create(thread.id, {
      role: "user",
      content: userInput
    });

    const runCreationResponse = await openai.beta.threads.runs.create(thread.id, {
      assistant_id: process.env.OPENAI_ASSISTANT_ID!,
    });

    let runStatus = runCreationResponse.status;
    while (runStatus !== "completed") {
      const runStatusResponse = await openai.beta.threads.runs.retrieve(thread.id, runCreationResponse.id);
      runStatus = runStatusResponse.status;

      if (runStatus === "completed") {
        break;
      }

      // Wait before polling again to avoid hitting the rate limit
      await new Promise(resolve => setTimeout(resolve, 3000)); // 3 second delay
    }

    const messages = await openai.beta.threads.messages.list(thread.id);
    const latestAssistantMessage = messages.data.filter(msg => msg.role === "assistant").pop();

    if (!latestAssistantMessage || !latestAssistantMessage.content.length) {
      return new Response("No response from assistant.", { status: 200 });
    }

    // Extract the text from the latest message
    const latestTextContent = latestAssistantMessage.content.find(content => content.type === 'text') as OpenAI.Beta.Threads.Messages.MessageContentText;

    return new Response(JSON.stringify({ response: latestTextContent ? latestTextContent.text.value : "No text response found." }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error("Error calling OpenAI Assistants API:", error);
    return new Response("I'm sorry, but I couldn't fetch a response. Please try again.", { status: 500 });
  }
}