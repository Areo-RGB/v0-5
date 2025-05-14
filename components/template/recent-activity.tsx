"use client"

import type React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import { FullscreenCard } from "@/components/fullscreen-card"

interface RecentActivityProps extends React.HTMLAttributes<HTMLDivElement> {}

export function RecentActivity({ className, ...props }: RecentActivityProps) {
  return (
    <FullscreenCard id="recent-activity" title="Recent Activity" className={cn("col-span-3", className)}>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-center">
            <Avatar className="h-9 w-9">
              <AvatarImage src={activity.avatar || "/placeholder.svg"} alt="Avatar" />
              <AvatarFallback>{activity.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">{activity.name}</p>
              <p className="text-sm text-muted-foreground">{activity.action}</p>
            </div>
            <div className="ml-auto text-xs text-muted-foreground">{activity.time}</div>
          </div>
        ))}
      </div>
    </FullscreenCard>
  )
}

const activities = [
  {
    name: "Alex Thompson",
    action: "Created a new project",
    time: "2h ago",
    avatar: "/diverse-avatars.png",
  },
  {
    name: "Sarah Parker",
    action: "Updated dashboard settings",
    time: "3h ago",
    avatar: "/diverse-avatars.png",
  },
  {
    name: "David Wilson",
    action: "Uploaded new documents",
    time: "5h ago",
    avatar: "/diverse-avatars.png",
  },
  {
    name: "Emily Chen",
    action: "Commented on analytics report",
    time: "8h ago",
    avatar: "/diverse-avatars.png",
  },
  {
    name: "Michael Brown",
    action: "Invited 3 new team members",
    time: "1d ago",
    avatar: "/diverse-avatars.png",
  },
]
