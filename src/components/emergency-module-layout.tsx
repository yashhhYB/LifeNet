import type { EmergencyModuleContent } from "@/lib/emergency-data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { AlertTriangle } from "lucide-react";

interface EmergencyModuleLayoutProps {
  content: EmergencyModuleContent;
  icon: React.ReactNode;
}

export function EmergencyModuleLayout({ content, icon }: EmergencyModuleLayoutProps) {
  return (
    <div className="space-y-8">
      <Card className="shadow-lg">
        <CardHeader>
          <div className="flex items-center gap-4">
            {icon}
            <div>
              <CardTitle className="text-3xl">{content.pageTitle}</CardTitle>
              <CardDescription className="text-lg">{content.overallIntroduction}</CardDescription>
            </div>
          </div>
        </CardHeader>
        {content.mainImage && (
          <CardContent>
            <div className="overflow-hidden rounded-md">
              <Image
                src={content.mainImage}
                alt={content.pageTitle}
                width={600}
                height={300}
                className="object-cover w-full max-h-[300px] hover:scale-105 transition-transform duration-300"
                data-ai-hint={content.mainImageHint || "survival outdoors"}
              />
            </div>
          </CardContent>
        )}
      </Card>

      {content.sections.map((section, index) => (
        <Card key={index} className="shadow-md">
          <CardHeader>
            <CardTitle className="text-xl text-primary">{section.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {section.content.map((paragraph, pIndex) => (
              <p key={pIndex} className="text-foreground/90 leading-relaxed">{paragraph}</p>
            ))}
            {section.image && (
              <div className="mt-4 overflow-hidden rounded-md">
                <Image
                  src={section.image}
                  alt={section.title}
                  width={400}
                  height={250}
                  className="object-cover mx-auto hover:scale-105 transition-transform duration-300"
                  data-ai-hint={section.imageHint || "survival technique"}
                />
              </div>
            )}
          </CardContent>
        </Card>
      ))}
       <Card className="mt-8 border-accent shadow-md bg-accent/10">
        <CardHeader>
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-6 w-6 text-accent" />
            <CardTitle className="text-accent text-lg">Important Disclaimer</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-accent-foreground/90">
            The information provided in LifeNet Survivalist is for guidance only and not a substitute for professional training or real-time expert advice. Survival situations are inherently dangerous. Always prioritize your safety and make decisions based on your specific environment and capabilities. Use this information at your own risk.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
