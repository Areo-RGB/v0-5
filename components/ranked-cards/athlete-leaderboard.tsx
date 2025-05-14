"use client"

import type React from "react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Medal } from "lucide-react"
import { FullscreenCard } from "@/components/fullscreen-card"

interface AthleteLeaderboardProps {
  className?: string
}

export function AthleteLeaderboard({ className }: AthleteLeaderboardProps) {
  return (
    <FullscreenCard
      id="athlete-leaderboard"
      title="Top Athletes"
      headerClassName="bg-gradient-to-r from-blue-600 to-blue-400 text-white"
      className={className}
    >
      <div className="space-y-0 divide-y">
        {athletes.map((athlete, index) => (
          <div key={athlete.id} className="flex items-center gap-3 p-3 hover:bg-muted/50 transition-colors">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full">
              {index < 3 ? (
                <Medal
                  className={`h-5 w-5 ${
                    index === 0 ? "text-yellow-500" : index === 1 ? "text-gray-400" : "text-amber-700"
                  }`}
                />
              ) : (
                <span className="text-sm font-medium text-muted-foreground">{index + 1}</span>
              )}
            </div>
            <Avatar className="h-9 w-9 border-2 border-background">
              <AvatarImage
                src={`/abstract-geometric-shapes.png?height=32&width=32&query=${athlete.name}`}
                alt={athlete.name}
              />
              <AvatarFallback>{athlete.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium leading-none truncate">{athlete.name}</p>
              <p className="text-xs text-muted-foreground">{athlete.team}</p>
            </div>
            <div className="text-sm font-medium">{athlete.score}</div>
          </div>
        ))}
      </div>
    </FullscreenCard>
  )
}

const Trophy = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
  </svg>
)

const athletes = [
  { id: 1, name: "Michael Jordan", team: "Chicago Bulls", score: "98.7" },
  { id: 2, name: "LeBron James", team: "LA Lakers", score: "97.2" },
  { id: 3, name: "Serena Williams", team: "Tennis", score: "96.5" },
  { id: 4, name: "Usain Bolt", team: "Track & Field", score: "95.8" },
  { id: 5, name: "Tom Brady", team: "Tampa Bay", score: "94.3" },
  { id: 6, name: "Simone Biles", team: "Gymnastics", score: "93.9" },
  { id: 7, name: "Cristiano Ronaldo", team: "Al Nassr", score: "93.1" },
  { id: 8, name: "Lionel Messi", team: "Inter Miami", score: "92.7" },
  { id: 9, name: "Lewis Hamilton", team: "Mercedes", score: "91.5" },
  { id: 10, name: "Rafael Nadal", team: "Tennis", score: "90.8" },
]
