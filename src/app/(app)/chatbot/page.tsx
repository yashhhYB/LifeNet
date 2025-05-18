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
 <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/fd/2c/2f/fd2c2f90-b3fe-af4b-e2fc-ad3c29cdfec0/AppIcon-0-0-1x_U007epad-0-0-85-220.jpeg/512x512bb.jpg" alt="Chatbot image" width="200" height="200" />
              </CardDescription>
            </div>
          </div>
        </CardHeader>
      </Card>
      <ChatbotClient />
    </div>
  );
}
