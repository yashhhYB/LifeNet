"use client";

import { useState, useRef, useEffect, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Bot, User, Loader2 } from "lucide-react";
import { answerSurvivalQuestion, type AnswerSurvivalQuestionOutput } from "@/ai/flows/answer-survival-questions";
import { Card, CardContent } from "./ui/card";

interface Message {
  id: string;
  text: string;
  sender: "user" | "ai";
}

export function ChatbotClient() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaViewportRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (scrollAreaViewportRef.current) {
      scrollAreaViewportRef.current.scrollTop = scrollAreaViewportRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  // Add an initial greeting message from the AI
  useEffect(() => {
    setMessages([
      {
        id: 'initial-greeting',
        text: "Hello! I'm your AI Survival Assistant. How can I help you survive today? Ask me anything like 'How to purify water?' or 'Treat a snake bite'.",
        sender: 'ai'
      }
    ]);
  }, []);


  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
    };
    setMessages((prev) => [...prev, userMessage]);
    const currentInput = input;
    setInput("");
    setIsLoading(true);

    try {
      const aiResponse: AnswerSurvivalQuestionOutput = await answerSurvivalQuestion({ question: currentInput });
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponse.answer,
        sender: "ai",
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error getting AI response:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Sorry, I encountered an error processing your request. Please check your connection or try again later.",
        sender: "ai",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-12rem)]"> {/* Adjusted height */}
      <ScrollArea className="flex-grow p-4 rounded-md border mb-4 bg-background/50" viewportRef={scrollAreaViewportRef}>
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-end gap-2 ${
                message.sender === "user" ? "justify-end" : ""
              }`}
            >
              {message.sender === "ai" && (
                <Avatar className="h-8 w-8">
                  <AvatarFallback><Bot className="h-5 w-5 text-primary"/></AvatarFallback>
                </Avatar>
              )}
              <Card className={`max-w-[80%] p-3 rounded-lg shadow-md ${message.sender === 'user' ? 'bg-primary text-primary-foreground' : 'bg-card text-card-foreground'}`}>
                <CardContent className="p-0 text-sm prose prose-sm dark:prose-invert max-w-none"
                 dangerouslySetInnerHTML={{ __html: message.text.replace(/\n/g, "<br />") }} // Render newlines as <br>
                />
              </Card>
              {message.sender === "user" && (
                 <Avatar className="h-8 w-8">
                  <AvatarFallback><User className="h-5 w-5"/></AvatarFallback>
                </Avatar>
              )}
            </div>
          ))}
          {isLoading && (
            <div className="flex items-end gap-2">
              <Avatar className="h-8 w-8">
                <AvatarFallback><Bot className="h-5 w-5 text-primary"/></AvatarFallback>
              </Avatar>
              <Card className="max-w-[70%] p-3 rounded-lg shadow-md bg-card text-card-foreground">
                <CardContent className="p-0 text-sm flex items-center">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Thinking...
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </ScrollArea>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a survival question..."
          className="flex-grow"
          disabled={isLoading}
          aria-label="Survival question input"
        />
        <Button type="submit" disabled={isLoading || !input.trim()} className="bg-accent hover:bg-accent/90 text-accent-foreground">
          {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Send"}
        </Button>
      </form>
    </div>
  );
}
