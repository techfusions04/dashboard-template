"use client";

import { cn } from "@/lib/utils";

import * as React from "react";
import {
  BookOpen,
  Bot,
  Settings2,
  SquareTerminal,
  GalleryVerticalEnd,
  UserCog,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

const menuItems = [
  {
    title: "Dashboard",
    url: "#",
    icon: SquareTerminal,
  },
  {
    title: "Models",
    url: "#",
    icon: UserCog,
  },
  {
    title: "Documentation",
    url: "#",
    icon: BookOpen,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings2,
  },
];

const mes = [
  {
    title: "Playground",
    url: "#",
    icon: SquareTerminal,
  },
];

export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent group-data-[collapsible=icon]:justify-center"
            >
              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <GalleryVerticalEnd className="size-5" />
              </div>

              <div className="flex flex-col overflow-hidden leading-tight group-data-[collapsible=icon]:hidden">
                <span className="truncate font-semibold">Acme Inc</span>

                <span className="truncate text-sm text-muted-foreground">
                  Enterprise
                </span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Platform</SidebarGroupLabel>

          <SidebarMenu>
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton>
                  <item.icon className="size-4" />
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>

        {/*  */}

        <SidebarGroup>
          <SidebarGroupLabel className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
            Platform
          </SidebarGroupLabel>

          <SidebarMenu className="space-y-1 px-2">
            {mes.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  tooltip={item.title}
                  className={cn(
                    "flex h-11 items-center gap-3 rounded-xl px-3",
                    "text-sm font-medium text-black",
                    "transition-all duration-200",
                    "hover:bg-blue-500/10 hover:text-blue-600",
                    "focus-visible:ring-2 focus-visible:ring-blue-500/40",
                    "data-[active=true]:bg-blue-500/15",
                    "data-[active=true]:text-blue-600",
                    "data-[active=true]:shadow-sm",
                  )}
                >
                  <item.icon
                    className={cn(
                      "h-6 w-6",
                      "shrink-0",
                      "text-black",
                      "stroke-[2.5]",
                      "transition-colors duration-200",
                      "group-hover:text-blue-600",
                    )}
                  />

                  <span className="truncate font-medium text-black">
                    {item.title}
                  </span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>

        {/*  */}
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  );
}
