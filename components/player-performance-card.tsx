"use client"

import { usePlayerData } from "@/context/player-data-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowDown, ArrowUp, Info } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface PlayerPerformanceCardProps {
  playerName: string
  testName: string
  className?: string
}

export function PlayerPerformanceCard({ playerName, testName, className }: PlayerPerformanceCardProps) {
  const { getPlayerData, getPlayerPercentile, calculateAverage, isLowerBetter } = usePlayerData()

  const playerTests = getPlayerData(playerName).filter((item) => item.testName === testName)

  if (playerTests.length === 0) {
    return (
      <Card className={className}>
        <CardHeader>
          <CardTitle>No Data Available</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            No data found for {playerName} in {testName}
          </p>
        </CardContent>
      </Card>
    )
  }

  const playerTest = playerTests[0]
  const percentile = getPlayerPercentile(playerName, testName)
  const average = calculateAverage(testName, false) // Get DFB reference average
  const lowerIsBetter = isLowerBetter(testName)

  // Determine if player result is good compared to average
  const playerResult = Number(playerTest.playerResult)
  const avgResult = average || 0
  const isGood = lowerIsBetter ? playerResult < avgResult : playerResult > avgResult
  const difference = lowerIsBetter ? avgResult - playerResult : playerResult - avgResult

  // Determine percentile badge color
  let badgeColor = ""
  if (percentile !== null) {
    if (percentile > 80) badgeColor = "bg-green-500"
    else if (percentile > 50) badgeColor = "bg-blue-500"
    else if (percentile > 30) badgeColor = "bg-yellow-500"
    else badgeColor = "bg-red-500"
  }

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <div className="flex items-center">
            {testName}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Info className="h-4 w-4 ml-1 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{lowerIsBetter ? "Lower is better" : "Higher is better"}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          {percentile !== null && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Badge className={badgeColor}>{percentile}%</Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p>
                    {playerName} is better than {percentile}% of the DFB reference data
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Result:</span>
            <span className="text-lg font-bold">
              {playerTest.playerResult} {playerTest.testUnits}
            </span>
          </div>

          {average !== null && (
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">DFB Benchmark:</span>
              <span className="text-sm font-medium">
                {average.toFixed(2)} {playerTest.testUnits}
              </span>
            </div>
          )}

          {average !== null && (
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Difference:</span>
              <div className="flex items-center">
                <span className={`text-sm font-medium ${isGood ? "text-green-500" : "text-red-500"}`}>
                  {isGood ? "+" : "-"}
                  {Math.abs(difference).toFixed(2)} {playerTest.testUnits}
                </span>
                {isGood ? (
                  <ArrowUp className="h-4 w-4 ml-1 text-green-500" />
                ) : (
                  <ArrowDown className="h-4 w-4 ml-1 text-red-500" />
                )}
              </div>
            </div>
          )}

          <div className="text-sm text-muted-foreground mt-2">{playerTest.testCategory}</div>
        </div>
      </CardContent>
    </Card>
  )
}
