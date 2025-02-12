import { AssistantResponse } from 'ai';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
});

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  // Parse the incoming JSON body
  const input: { threadId: string | null; message: string } = await req.json();

  // Create a new thread if one wasn’t provided
  const threadId =
    input.threadId ?? (await openai.beta.threads.create({})).id;

  // Add the user's message to the thread
  const createdMessage = await openai.beta.threads.messages.create(threadId, {
    role: 'user',
    content: input.message,
  });

  return AssistantResponse(
    { threadId, messageId: createdMessage.id },
    async ({ forwardStream, sendDataMessage }) => {
      // Stream the run for the assistant. The assistant_id must be set in your environment.
      const runStream = openai.beta.threads.runs.stream(threadId, {
        assistant_id:
          process.env.OPENAI_ASSISTANT_ID ??
          (() => {
            throw new Error('OPENAI_ASSISTANT_ID is not set');
          })(),
      });

      // Forward run status events (e.g. message deltas) to the client
      let runResult = await forwardStream(runStream);

      // If the run requires a tool action, process it and forward the response
      while (
        runResult?.status === 'requires_action' &&
        runResult.required_action?.type === 'submit_tool_outputs'
      ) {
        const tool_outputs = runResult.required_action.submit_tool_outputs.tool_calls.map(
          (toolCall: any) => {
            const parameters = JSON.parse(toolCall.function.arguments);
            // Add any tool-specific handling here. For now, we throw on unknown functions.
            switch (toolCall.function.name) {
              default:
                throw new Error(
                  `Unknown tool call function: ${toolCall.function.name}`
                );
            }
          }
        );

        runResult = await forwardStream(
          openai.beta.threads.runs.submitToolOutputsStream(
            threadId,
            runResult.id,
            { tool_outputs }
          )
        );
      }
    }
  );
}