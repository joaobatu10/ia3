import { Avatar, AvatarFallback } from "./ui/avatar";
import { Card } from "./ui/card";
import { Bot, User } from "lucide-react";
import { cn } from "./ui/utils";

interface ChatMessageProps {
  message: {
    id: string;
    content: string;
    sender: 'user' | 'ai';
    timestamp: string;
  };
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isAI = message.sender === 'ai';

  return (
    <div className={cn(
      "flex gap-3 mb-6",
      !isAI && "flex-row-reverse"
    )}>
      <Avatar className="h-8 w-8 flex-shrink-0">
        <AvatarFallback className={cn(
          isAI ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
        )}>
          {isAI ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
        </AvatarFallback>
      </Avatar>

      <div className={cn(
        "flex flex-col max-w-[80%]",
        !isAI && "items-end"
      )}>
        <div className={cn(
          "mb-1 text-xs text-muted-foreground",
          !isAI && "text-right"
        )}>
          {isAI ? "AssistentIA" : "Você"} • {message.timestamp}
        </div>
        
        <Card className={cn(
          "p-4",
          isAI 
            ? "bg-muted/50 border-muted" 
            : "bg-primary text-primary-foreground border-primary"
        )}>
          <div className="text-sm leading-relaxed whitespace-pre-wrap">
            {message.content}
          </div>
        </Card>
      </div>
    </div>
  );
}