
import { SidebarTrigger } from "@/components/ui/sidebar";
import { LifeBuoy } from "lucide-react";

export function AppHeader() {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur md:px-6">
      <SidebarTrigger className="md:hidden" />
      <div className="flex items-center gap-2">
        <LifeBuoy className="h-7 w-7 text-primary" />
        <h1 className="text-xl font-semibold text-foreground">
          LifeNet Survivalist
        </h1>
      </div>
      {/* Add User/Settings Dropdown here if needed in future */}
    </header>
  );
}
