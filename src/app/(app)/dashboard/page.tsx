
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Bot, Flame, HeartPulse, Compass, Droplets, RadioTower } from "lucide-react";
import Image from "next/image";

export default function DashboardPage() {
  const features = [
    {
      title: "AI Survival Chatbot",
      description: "Get instant survival advice. Works offline.",
      icon: <Bot className="h-8 w-8 text-primary" />,
      href: "/chatbot",
      image: "https://images.hdqwalls.com/download/chat-bot-ss-1440x900.jpg",
      imageHint: "AI chatbot",
    },
    {
      title: "First Aid Guide",
      description: "Step-by-step emergency medical procedures.",
      icon: <HeartPulse className="h-8 w-8 text-primary" />,
      href: "/emergency/first-aid",
      image: "https://placehold.co/300x200.png",
      imageHint: "first aid",
    },
    {
      title: "Fire Starting",
      description: "Learn essential techniques to create fire.",
      icon: <Flame className="h-8 w-8 text-primary" />,
      href: "/emergency/fire-starter",
      image: "https://placehold.co/300x200.png",
      imageHint: "campfire",
    },
    {
      title: "Water Purification",
      description: "Methods to make water safe for drinking.",
      icon: <Droplets className="h-8 w-8 text-primary" />,
      href: "/emergency/water-purification",
      image: "https://placehold.co/300x200.png",
      imageHint: "water filter",
    },
    {
      title: "Navigation Tips",
      description: "Navigate without GPS using natural signs.",
      icon: <Compass className="h-8 w-8 text-primary" />,
      href: "/emergency/navigation-tips",
      image: "https://placehold.co/300x200.png",
      imageHint: "compass map",
    },
    {
      title: "SOS Beacon",
      description: "Visual and audible signal for emergencies.",
      icon: <RadioTower className="h-8 w-8 text-primary" />,
      href: "/sos",
      image: "https://placehold.co/300x200.png",
      imageHint: "SOS beacon",
    },
  ];

  return (
    <div className="flex flex-col items-center p-4 md:p-8 space-y-8">
      <Card className="w-full max-w-4xl shadow-xl overflow-hidden">
        <div className="relative h-48 md:h-64">
          <Image
            src="https://placehold.co/1200x400.png"
            alt="Survival scenario"
            layout="fill"
            objectFit="cover"
            data-ai-hint="survival forest"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent p-6 flex flex-col justify-end">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">LifeNet Survivalist</h1>
            <p className="text-lg text-foreground/90">
              Your essential offline companion for wilderness and urban survival.
            </p>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
        {features.map((feature) => (
          <Card key={feature.title} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            {feature.image && (
              <div className="relative h-40">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint={feature.imageHint}
                />
              </div>
            )}
            <CardHeader className="pb-3">
              <div className="flex items-start gap-3">
                {feature.icon}
                <div className="flex-1">
                  <CardTitle className="text-xl mb-1">{feature.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">{feature.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-grow flex items-end">
              <Link href={feature.href} passHref className="w-full">
                <Button variant="outline" className="w-full mt-2 border-primary text-primary hover:bg-primary/10">
                  Open Module <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="w-full max-w-4xl shadow-md bg-accent/10 border-accent">
        <CardHeader>
          <CardTitle className="text-accent text-xl">Stay Prepared, Stay Safe</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-accent-foreground/90">
            LifeNet provides critical information for unexpected situations. Always prioritize safety and seek professional help when available.
            Battery optimization techniques are used throughout the app to ensure longevity in critical moments.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
