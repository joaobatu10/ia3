import { useState } from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Send, Paperclip } from "lucide-react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

export function ChatInput({ onSendMessage, disabled }: ChatInputProps) {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSendMessage(message.trim());
      setMessage("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="border-t border-border bg-background p-4">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <div className="flex-1 relative">
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Digite sua mensagem aqui..."
            disabled={disabled}
            className="min-h-[60px] resize-none pr-12 py-3"
            rows={2}
          />
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute right-2 top-2 h-8 w-8"
            disabled={disabled}
          >
            <Paperclip className="h-4 w-4" />
          </Button>
        </div>
        
        <Button
          type="submit"
          disabled={!message.trim() || disabled}
          className="self-end h-[60px] px-6"
        >
          <Send className="h-4 w-4" />
        </Button>
      </form>
      
      <div className="flex items-center justify-between mt-2 text-xs text-muted-foreground">
        <span>Pressione Enter para enviar, Shift + Enter para nova linha</span>
        <span>{message.length}/2000</span>
      </div>
    </div>
  );
}