import { ChatbotClient } from "@/components/chatbot-client";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot } from "lucide-react";

export default function ChatbotPage() {
  return (
    <div className="flex flex-col h-full">
       <Card className="mb-4 shadow-md">
        <CardHeader>
          <div className="flex items-center gap-3">
            <Bot className="h-8 w-8 text-primary" />
            <div>
              <CardTitle className="text-2xl">AI Survival Chatbot</CardTitle>
              <CardDescription>
                Ask any survival-related questions. The AI will provide guidance based on its knowledge. This works offline.
              </CardDescription>
            </div>
          </div>
        </CardHeader>
      </Card>
      <ChatbotClient />
    </div>
  );
}
