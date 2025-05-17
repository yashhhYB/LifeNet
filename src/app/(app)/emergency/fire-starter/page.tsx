import { EmergencyModuleLayout } from "@/components/emergency-module-layout";
import { fireStarterContent } from "@/lib/emergency-data";
import { Flame } from "lucide-react";

export default function FireStarterPage() {
  return (
    <EmergencyModuleLayout 
      content={fireStarterContent}
      icon={<Flame className="h-10 w-10 text-primary" />}
    />
  );
}
