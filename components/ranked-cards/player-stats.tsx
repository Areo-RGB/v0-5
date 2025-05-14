"use client"

import { cn } from "@/lib/utils"
import { FullscreenCard } from "@/components/fullscreen-card"

export function PlayerStats() {
  return (
    <FullscreenCard
      id="player-stats"
      title="Player Performance"
      headerClassName="border-b bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="space-y-4">
        {players.map((player, index) => (
          <div key={player.id} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div
                  className={cn(
                    "flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white",
                    index === 0 && "bg-gradient-to-br from-yellow-400 to-yellow-600",
                    index === 1 && "bg-gradient-to-br from-gray-300 to-gray-500",
                    index === 2 && "bg-gradient-to-br from-amber-600 to-amber-800",
                    index > 2 && "bg-gradient-to-br from-blue-400 to-blue-600",
                  )}
                >
                  {index + 1}
                </div>
                <div>
                  <p className="text-sm font-medium leading-none">{player.name}</p>
                  <p className="text-xs text-muted-foreground">{player.position}</p>
                </div>
              </div>
              <div className="text-sm font-medium">{player.rating}</div>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
              <div
                className={cn(
                  "h-full rounded-full",
                  index === 0 && "bg-gradient-to-r from-yellow-400 to-yellow-500",
                  index === 1 && "bg-gradient-to-r from-gray-400 to-gray-500",
                  index === 2 && "bg-gradient-to-r from-amber-600 to-amber-700",
                  index > 2 && "bg-gradient-to-r from-blue-400 to-blue-500",
                )}
                style={{ width: `${player.rating}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </FullscreenCard>
  )
}

const players = [
  { id: 1, name: "Kevin Durant", position: "SF", rating: 96 },
  { id: 2, name: "Giannis Antetokounmpo", position: "PF", rating: 94 },
  { id: 3, name: "Stephen Curry", position: "PG", rating: 93 },
  { id: 4, name: "Nikola Jokić", position: "C", rating: 91 },
  { id: 5, name: "Joel Embiid", position: "C", rating: 89 },
  { id: 6, name: "Luka Dončić", position: "PG", rating: 87 },
  { id: 7, name: "Kawhi Leonard", position: "SF", rating: 85 },
  { id: 8, name: "Jayson Tatum", position: "SF", rating: 83 },
  { id: 9, name: "Damian Lillard", position: "PG", rating: 81 },
  { id: 10, name: "Anthony Davis", position: "PF", rating: 79 },
]
