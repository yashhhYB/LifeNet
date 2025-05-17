import { EmergencyModuleLayout } from "@/components/emergency-module-layout";
import { waterPurificationContent } from "@/lib/emergency-data";
import { Droplets } from "lucide-react";

export default function WaterPurificationPage() {
  return (
    <EmergencyModuleLayout 
      content={waterPurificationContent}
      icon={<Droplets className="h-10 w-10 text-primary" />}
    />
  );
}
