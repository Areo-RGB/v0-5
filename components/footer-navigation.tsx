"use client"

import type React from "react"

import { Home, BarChart2, Settings, Bell, User } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"

export function FooterNavigation() {
  const [activeItem, setActiveItem] = useState("home")

  return (
    <div className="fixed bottom-0 left-0 right-0 z-10 border-t bg-background/80 backdrop-blur-md">
      <div className="grid h-16 grid-cols-5">
        <FooterNavItem
          icon={Home}
          label="Home"
          value="home"
          isActive={activeItem === "home"}
          onClick={() => setActiveItem("home")}
        />
        <FooterNavItem
          icon={BarChart2}
          label="Analytics"
          value="analytics"
          isActive={activeItem === "analytics"}
          onClick={() => setActiveItem("analytics")}
        />
        <FooterNavItem
          icon={Bell}
          label="Notifications"
          value="notifications"
          isActive={activeItem === "notifications"}
          onClick={() => setActiveItem("notifications")}
        />
        <FooterNavItem
          icon={Settings}
          label="Settings"
          value="settings"
          isActive={activeItem === "settings"}
          onClick={() => setActiveItem("settings")}
        />
        <FooterNavItem
          icon={User}
          label="Profile"
          value="profile"
          isActive={activeItem === "profile"}
          onClick={() => setActiveItem("profile")}
        />
      </div>
    </div>
  )
}

interface FooterNavItemProps {
  icon: React.ElementType
  label: string
  value: string
  isActive?: boolean
  onClick?: () => void
}

function FooterNavItem({ icon: Icon, label, value, isActive, onClick }: FooterNavItemProps) {
  return (
    <button
      className={cn(
        "flex flex-col items-center justify-center gap-1 p-1 text-xs transition-colors",
        isActive ? "text-blue-500" : "text-muted-foreground hover:text-foreground",
      )}
      onClick={onClick}
    >
      <Icon className={cn("h-5 w-5", isActive && "text-blue-500")} />
      <span>{label}</span>
      {isActive && <span className="absolute bottom-0 h-0.5 w-6 rounded-t-full bg-blue-500" />}
    </button>
  )
}
