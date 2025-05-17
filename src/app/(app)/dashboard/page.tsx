
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { MessageCircle, TriangleAlert, RadioTower, LifeBuoy, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function DashboardPage() {
  const features = [
    {
      title: "AI Survival Chatbot",
      description: "Ask questions and get instant survival advice from our offline AI.",
      icon: <MessageCircle className="h-8 w-8 text-primary" />,
      href: "/chatbot",
      cta: "Ask AI",
    },
    {
      title: "Emergency Modules",
      description: "Step-by-step guides for first aid, fire starting, water, and navigation.",
      icon: <TriangleAlert className="h-8 w-8 text-primary" />,
      href: "/emergency/first-aid", 
      cta: "View Modules",
    },
    {
      title: "SOS Beacon",
      description: "Activate a visual and audible signal for emergencies.",
      icon: <RadioTower className="h-8 w-8 text-primary" />,
      href: "/sos",
      cta: "Activate Beacon",
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      <Card className="shadow-lg">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-3">
            <LifeBuoy className="h-10 w-10 text-accent" />
            <div>
              <CardTitle className="text-3xl">Welcome to LifeNet Survivalist</CardTitle>
              <CardDescription className="text-lg">
                Your offline AI-powered assistant for emergency situations.
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            LifeNet is designed to provide crucial information and decision-making support when you're off-grid or facing an emergency, all without needing an internet connection. Stay prepared, stay safe.
          </p>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title} className="flex flex-col shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-4">
                {feature.icon}
                <CardTitle>{feature.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground mb-4">{feature.description}</p>
            </CardContent>
            <CardFooter>
               <Link href={feature.href} passHref className="w-full">
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  {feature.cta}
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Card className="shadow-md">
        <CardHeader>
            <div className="flex items-center gap-3">
                <ShieldCheck className="h-8 w-8 text-primary" />
                <CardTitle>Key Principles</CardTitle>
            </div>
        </CardHeader>
        <CardContent className="space-y-2">
            <p><strong className="text-primary-foreground">Offline First:</strong> All core functionalities work without internet.</p>
            <p><strong className="text-primary-foreground">Battery Optimized:</strong> Designed for low power consumption.</p>
            <p><strong className="text-primary-foreground">Intuitive UI:</strong> Easy to use, even under stress.</p>
        </CardContent>
      </Card>
    </div>
  );
}
