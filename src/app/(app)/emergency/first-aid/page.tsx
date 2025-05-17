import { EmergencyModuleLayout } from "@/components/emergency-module-layout";
import { firstAidContent } from "@/lib/emergency-data";
import { HeartPulse } from "lucide-react";

export default function FirstAidPage() {
  return (
    <EmergencyModuleLayout 
      content={firstAidContent}
      icon={<HeartPulse className="h-10 w-10 text-primary" />}
    />
  );
}
