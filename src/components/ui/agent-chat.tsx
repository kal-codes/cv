'use client'

import React, { useState } from 'react';
import { SheetContent, SheetHeader, SheetTitle, SheetFooter, SheetClose } from '@/components/ui/sheet';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowUpIcon } from '@radix-ui/react-icons';
import { OpenAI } from "openai";

interface IMessage {
  text: string;
  fromUser: boolean;
}

export const AgentChat = () => {
  const [isAssistantThinking, setIsAssistantThinking] = useState(false);
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [userInput, setUserInput] = useState<string>('');

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
  });

  const sendMessage = async () => {
    if (!userInput.trim()) return;
    
    setIsAssistantThinking(true);

    const userMessage: IMessage = { text: userInput, fromUser: true };
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setUserInput('');

    const agentResponse = await getAgentResponse(userInput);

    setIsAssistantThinking(false);
    setMessages(prevMessages => [...prevMessages, { text: agentResponse, fromUser: false }]);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const getAgentResponse = async (userInput: string): Promise<string> => {
    try {
      // Create a thread for the conversation (this could be moved outside this function if you manage threads at a higher level)
      const thread = await openai.beta.threads.create();
      // Add the user's message to the thread
      await openai.beta.threads.messages.create(thread.id, {
        role: "user",
        content: userInput
      });

      const runCreationResponse = await openai.beta.threads.runs.create(thread.id, {
        assistant_id: process.env.OPENAI_ASSISTANT_ID!,
      });
  
      // Initial check for the run status
      let runStatus = runCreationResponse.status;
  
      // Polling for run status
      while (runStatus !== "completed") {
        const runStatusResponse = await openai.beta.threads.runs.retrieve(
          thread.id,
          runCreationResponse.id
        );
        runStatus = runStatusResponse.status;
        
        if (runStatus === "completed") {
          break;
        }
  
        // Wait before polling again to avoid hitting the rate limit
        await new Promise(resolve => setTimeout(resolve, 3000)); // 3 second delay
      }
  
      // Assuming immediate completion, retrieve the messages added by the assistant
      const messages = await openai.beta.threads.messages.list(thread.id);
  
      // Assuming we only deal with the latest message and it could be of type text
    const latestAssistantMessage = messages.data.filter(msg => msg.role === "assistant").pop();

    console.log('messages', messages);

    if (!latestAssistantMessage || !latestAssistantMessage.content.length) {
      return "No response from assistant.";
    }

    // Extract the text from the latest message
    const latestTextContent = latestAssistantMessage.content.find(content => content.type === 'text') as OpenAI.Beta.Threads.Messages.MessageContentText;

    // Return the text part of the message
    return latestTextContent ? latestTextContent.text.value : "No text response found.";
    } catch (error) {
      console.error("Error calling OpenAI Assistants API:", error);
      return "I'm sorry, but I couldn't fetch a response. Please try again.";
    }
  };
  

  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Chat with my agent</SheetTitle>
      </SheetHeader>
      <div className="flex flex-col h-full">
        <div className="flex-grow overflow-auto p-4">
          {messages.map((message, index) => (
            <div key={index} className={`message mt-5 ${message.fromUser ? 'text-right' : 'text-left'}`}>
              <div className={`inline-block p-2 rounded-lg ${message.fromUser ? 'bg-blue-100' : 'bg-gray-200'}`}>
                {message.text}
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 flex">
            <Input
                value={userInput}
                onChange={handleInputChange}
                placeholder="Type your message..."
                className="flex-grow mr-2"
                disabled={isAssistantThinking}
            />
            <Button onClick={sendMessage} className="flex items-center justify-center" disabled={isAssistantThinking}>
                <ArrowUpIcon />
            </Button>
            </div>
      </div>
    </SheetContent>
  );
};