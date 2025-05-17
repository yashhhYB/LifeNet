// import { AppHeader } from "@/components/layout/app-header";
// import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
// import { AppSidebar } from "@/components/layout/app-sidebar";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <div className="flex flex-col w-full"> */}
      {/* <AppHeader /> */}
      {/* <main className="flex-1 p-4 md:p-6 lg:p-8"> */}
      {children}
      {/* </main> */}
      {/* </div> */}
    </>
  );
}
