import { SOSBeaconClient } from "@/components/sos-beacon-client";

export default function SOSPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)]"> {/* Ensure content is centered if page is short */}
      <SOSBeaconClient />
    </div>
  );
}
