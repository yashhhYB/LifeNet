"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  MessageCircle,
  TriangleAlert,
  HeartPulse,
  Flame,
  Droplets,
  Compass,
  RadioTower,
  ChevronDown,
  LifeBuoy,
} from "lucide-react";
import React from "react";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/chatbot", label: "AI Chatbot", icon: MessageCircle },
  {
    label: "Emergency Modules",
    icon: TriangleAlert,
    isGroup: true,
    subItems: [
      { href: "/emergency/first-aid", label: "First Aid", icon: HeartPulse },
      { href: "/emergency/fire-starter", label: "Fire Starter", icon: Flame },
      { href: "/emergency/water-purification", label: "Water Purification", icon: Droplets },
      { href: "/emergency/navigation-tips", label: "Navigation Tips", icon: Compass },
    ],
  },
  { href: "/sos", label: "SOS Beacon", icon: RadioTower },
];

export function AppSidebar() {
  const pathname = usePathname();
  const [openModules, setOpenModules] = React.useState(true); // Keep emergency modules open by default

  const isActive = (href: string, isParent = false) => {
    if (isParent) return pathname.startsWith(href);
    return pathname === href;
  };

  return (
    <Sidebar collapsible="icon" variant="sidebar" side="left">
      <SidebarHeader className="border-b">
        <div className="flex items-center gap-2 p-2">
          <LifeBuoy className="h-8 w-8 text-primary" />
          <span className="text-lg font-semibold group-data-[collapsible=icon]:hidden">
            LifeNet
          </span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navItems.map((item) =>
            item.isGroup && item.subItems ? (
              <SidebarGroup key={item.label}>
                <SidebarMenuButton
                  onClick={() => setOpenModules(!openModules)}
                  className="justify-between"
                  isActive={isActive("/emergency", true)}
                >
                  <div className="flex items-center gap-2">
                    <item.icon />
                    <span>{item.label}</span>
                  </div>
                  <ChevronDown
                    className={`transform transition-transform ${
                      openModules ? "rotate-180" : ""
                    }`}
                  />
                </SidebarMenuButton>
                {openModules && (
                  <SidebarMenuSub>
                    {item.subItems.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.href}>
                        <Link href={subItem.href} passHref legacyBehavior>
                          <SidebarMenuSubButton
                            isActive={isActive(subItem.href)}
                          >
                            <subItem.icon className="text-muted-foreground" />
                            <span>{subItem.label}</span>
                          </SidebarMenuSubButton>
                        </Link>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                )}
              </SidebarGroup>
            ) : (
              <SidebarMenuItem key={item.href}>
                <Link href={item.href!} passHref legacyBehavior>
                  <SidebarMenuButton
                    isActive={isActive(item.href!)}
                    tooltip={item.label}
                  >
                    <item.icon />
                    <span>{item.label}</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            )
          )}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
