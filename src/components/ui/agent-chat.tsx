'use client';

import React from 'react';
import { SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowUpIcon } from '@radix-ui/react-icons';
import { Message, useAssistant } from '@ai-sdk/react';

export const AgentChat = () => {
  // useAssistant handles input state, submission, and streaming responses.
  const { status, messages, input, submitMessage, handleInputChange } =
    useAssistant({ api: '/api/agent-chat' });

  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Chat with my agent</SheetTitle>
      </SheetHeader>
      <div className="flex flex-col h-full">
        {/* Message area */}
        <div className="flex-grow overflow-auto p-4 space-y-4">
          {messages.map((m: Message) => (
            <div
              key={m.id}
              className={`message mt-5 ${
                m.role === 'user' ? 'text-right' : 'text-left'
              }`}
            >
              <div
                className={`inline-block p-2 rounded-lg ${
                  m.role === 'user' ? 'bg-blue-100' : 'bg-gray-200'
                }`}
              >
                {m.role !== 'data' && m.content}
                {m.role === 'data' && (
                  <>
                    {(m.data as any)?.description}
                    <br />
                    <pre className="bg-gray-200 p-2 rounded">
                      {JSON.stringify(m.data, null, 2)}
                    </pre>
                  </>
                )}
              </div>
            </div>
          ))}
          {status === 'in_progress' && (
            <div className="text-left italic text-gray-500">
              Assistant is thinking…
            </div>
          )}
        </div>
        {/* Input area */}
        <form
          onSubmit={submitMessage}
          className="p-4 flex items-center space-x-2"
        >
          <Input
            value={input}
            onChange={handleInputChange}
            placeholder="Type your message..."
            className="flex-grow"
            disabled={status !== 'awaiting_message'}
          />
          <Button
            type="submit"
            className="flex items-center justify-center"
            disabled={status !== 'awaiting_message'}
          >
            <ArrowUpIcon />
          </Button>
        </form>
      </div>
    </SheetContent>
  );
};

export default AgentChat;