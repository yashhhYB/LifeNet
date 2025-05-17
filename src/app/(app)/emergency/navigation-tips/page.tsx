import { EmergencyModuleLayout } from "@/components/emergency-module-layout";
import { navigationTipsContent } from "@/lib/emergency-data";
import { Compass } from "lucide-react";

export default function NavigationTipsPage() {
  return (
    <EmergencyModuleLayout 
      content={navigationTipsContent}
      icon={<Compass className="h-10 w-10 text-primary" />}
    />
  );
}
