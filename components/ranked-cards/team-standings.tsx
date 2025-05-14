"use client"

import { cn } from "@/lib/utils"
import { ArrowDown, ArrowUp, Minus } from "lucide-react"
import { FullscreenCard } from "@/components/fullscreen-card"

export function TeamStandings() {
  return (
    <FullscreenCard id="team-standings" title="Team Standings" headerClassName="bg-gray-100 dark:bg-gray-800 pb-3">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b bg-muted/50">
              <th className="px-3 py-2 text-left font-medium">Rank</th>
              <th className="px-3 py-2 text-left font-medium">Team</th>
              <th className="px-3 py-2 text-center font-medium">W</th>
              <th className="px-3 py-2 text-center font-medium">L</th>
              <th className="px-3 py-2 text-center font-medium">Pts</th>
              <th className="px-3 py-2 text-center font-medium">Trend</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team, index) => (
              <tr
                key={team.id}
                className={cn(
                  "border-b transition-colors hover:bg-muted/50",
                  index < 3 && "bg-blue-50 dark:bg-blue-950/20",
                )}
              >
                <td className="px-3 py-2 text-left">
                  <div className="flex items-center gap-1.5">
                    <span
                      className={cn(
                        "flex h-5 w-5 items-center justify-center rounded-full text-xs font-medium",
                        index === 0 && "bg-yellow-100 text-yellow-700",
                        index === 1 && "bg-gray-100 text-gray-700",
                        index === 2 && "bg-amber-100 text-amber-700",
                      )}
                    >
                      {index + 1}
                    </span>
                  </div>
                </td>
                <td className="px-3 py-2 text-left font-medium">{team.name}</td>
                <td className="px-3 py-2 text-center">{team.wins}</td>
                <td className="px-3 py-2 text-center">{team.losses}</td>
                <td className="px-3 py-2 text-center font-medium">{team.points}</td>
                <td className="px-3 py-2">
                  <div className="flex justify-center">
                    {team.trend === "up" ? (
                      <ArrowUp className="h-4 w-4 text-green-500" />
                    ) : team.trend === "down" ? (
                      <ArrowDown className="h-4 w-4 text-red-500" />
                    ) : (
                      <Minus className="h-4 w-4 text-gray-500" />
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </FullscreenCard>
  )
}

const teams = [
  { id: 1, name: "Golden State", wins: 42, losses: 12, points: 96, trend: "up" },
  { id: 2, name: "Boston", wins: 40, losses: 14, points: 94, trend: "up" },
  { id: 3, name: "Phoenix", wins: 38, losses: 16, points: 92, trend: "down" },
  { id: 4, name: "Milwaukee", wins: 37, losses: 17, points: 91, trend: "up" },
  { id: 5, name: "Miami", wins: 35, losses: 19, points: 89, trend: "down" },
  { id: 6, name: "Philadelphia", wins: 34, losses: 20, points: 88, trend: "up" },
  { id: 7, name: "Memphis", wins: 33, losses: 21, points: 87, trend: "same" },
  { id: 8, name: "Dallas", wins: 32, losses: 22, points: 86, trend: "up" },
  { id: 9, name: "Denver", wins: 31, losses: 23, points: 85, trend: "down" },
  { id: 10, name: "Cleveland", wins: 30, losses: 24, points: 84, trend: "same" },
]
