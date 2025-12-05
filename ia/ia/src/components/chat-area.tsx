import { ScrollArea } from "./ui/scroll-area";
import { ChatMessage } from "./chat-message";
import { Button } from "./ui/button";
import { RefreshCw } from "lucide-react";

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: string;
}

interface ChatAreaProps {
  messages: Message[];
  isLoading?: boolean;
}

const welcomeMessage: Message = {
  id: "welcome",
  content: "Olá! Sou sua AssistentIA Empresarial. Estou aqui para ajudar com análises, relatórios, estratégias e muito mais. Como posso auxiliá-lo hoje?",
  sender: "ai",
  timestamp: "Agora"
};

export function ChatArea({ messages, isLoading }: ChatAreaProps) {
  const allMessages = messages.length === 0 ? [welcomeMessage] : messages;

  return (
    <div className="flex-1 flex flex-col">
      <ScrollArea className="flex-1 p-4">
        <div className="max-w-4xl mx-auto">
          {allMessages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
          
          {isLoading && (
            <div className="flex gap-3 mb-6">
              <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center">
                <RefreshCw className="h-4 w-4 text-primary-foreground animate-spin" />
              </div>
              <div className="flex flex-col max-w-[80%]">
                <div className="mb-1 text-xs text-muted-foreground">
                  AssistentIA está digitando...
                </div>
                <div className="bg-muted/50 border border-muted rounded-lg p-4">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>
    </div>
  );
}