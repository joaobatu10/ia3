import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";
import { MessageSquare, Plus, Settings, History } from "lucide-react";

interface ChatSession {
  id: string;
  title: string;
  timestamp: string;
}

const mockSessions: ChatSession[] = [
  { id: "1", title: "Análise de dados Q1", timestamp: "Hoje" },
  { id: "2", title: "Estratégia de marketing", timestamp: "Ontem" },
  { id: "3", title: "Relatório financeiro", timestamp: "2 dias atrás" },
  { id: "4", title: "Planejamento de recursos", timestamp: "3 dias atrás" },
  { id: "5", title: "Otimização de processos", timestamp: "1 semana atrás" },
];

export function ChatSidebar() {
  return (
    <div className="w-64 bg-card border-r border-border flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b border-border">
        <Button className="w-full justify-start gap-2" variant="default">
          <Plus className="h-4 w-4" />
          Nova Conversa
        </Button>
      </div>

      {/* Chat History */}
      <div className="flex-1 overflow-hidden">
        <div className="p-4">
          <div className="flex items-center gap-2 mb-3">
            <History className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Histórico</span>
          </div>
        </div>
        
        <ScrollArea className="h-[calc(100vh-200px)] px-2">
          <div className="space-y-1">
            {mockSessions.map((session) => (
              <Button
                key={session.id}
                variant="ghost"
                className="w-full justify-start h-auto p-3 text-left"
              >
                <div className="flex items-start gap-2 w-full">
                  <MessageSquare className="h-4 w-4 mt-0.5 text-muted-foreground flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="truncate text-sm">{session.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {session.timestamp}
                    </p>
                  </div>
                </div>
              </Button>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-border">
        <Button variant="ghost" className="w-full justify-start gap-2">
          <Settings className="h-4 w-4" />
          Configurações
        </Button>
      </div>
    </div>
  );
}