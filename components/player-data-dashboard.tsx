"use client"

import { useState } from "react"
import { usePlayerData } from "@/context/player-data-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { ArrowDown, ArrowUp, Info } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// Make sure the component is properly exported
export default function PlayerDataDashboard() {
  const {
    getPlayerNames,
    getTestCategories,
    getTestNames,
    getPlayerData,
    getPlayerPercentile,
    calculateAverage,
    getPlayerRanking,
    isLowerBetter,
  } = usePlayerData()

  const [selectedPlayer, setSelectedPlayer] = useState<string>("")
  const [selectedCategory, setSelectedCategory] = useState<string>("")
  const [selectedTest, setSelectedTest] = useState<string>("")

  const playerNames = getPlayerNames()
  const categories = getTestCategories()
  const testNames = getTestNames(selectedCategory)

  // Get filtered test names when a category is selected
  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value)
    setSelectedTest("") // Reset test selection
  }

  // Get player data for the selected player
  const playerData = selectedPlayer ? getPlayerData(selectedPlayer) : []

  // Get all player data for comparison
  const allPlayerData = getPlayerData()

  // Helper function to render percentile badge with appropriate color
  const renderPercentileBadge = (percentile: number | null, testName: string) => {
    if (percentile === null) return "N/A"

    // Determine color based on percentile
    let bgColor = ""
    if (percentile > 80) bgColor = "bg-green-500"
    else if (percentile > 50) bgColor = "bg-blue-500"
    else if (percentile > 30) bgColor = "bg-yellow-500"
    else bgColor = "bg-red-500"

    return <Badge className={bgColor}>{percentile}%</Badge>
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Player Performance Database</span>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Info className="h-4 w-4 mr-1" />
                  <span>Percentile Info</span>
                </div>
              </TooltipTrigger>
              <TooltipContent className="max-w-sm">
                <p className="font-medium mb-2">How to interpret percentiles:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <strong>For most tests (time-based):</strong> Lower values are better. A percentile of 90% means the
                    player is better than 90% of the reference data.
                  </li>
                  <li>
                    <strong>For Balljonglieren:</strong> Higher values are better. A percentile of 90% means the player
                    is better than 90% of the reference data.
                  </li>
                  <li>
                    <strong>Color coding:</strong> Green ({">"}80%), Blue ({">"}50%), Yellow ({">"}30%), Red (&lt;30%)
                  </li>
                </ul>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="player-analysis" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="player-analysis">Player Analysis</TabsTrigger>
            <TabsTrigger value="test-comparison">Test Comparison</TabsTrigger>
            <TabsTrigger value="data-explorer">Data Explorer</TabsTrigger>
          </TabsList>

          <TabsContent value="player-analysis" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="text-sm font-medium mb-2 block">Select Player</label>
                <Select value={selectedPlayer} onValueChange={setSelectedPlayer}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a player" />
                  </SelectTrigger>
                  <SelectContent>
                    {playerNames.map((name) => (
                      <SelectItem key={name} value={name}>
                        {name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {selectedPlayer && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold">Performance Summary for {selectedPlayer}</h3>

                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Test Category</TableHead>
                      <TableHead>Test Name</TableHead>
                      <TableHead>Result</TableHead>
                      <TableHead>Units</TableHead>
                      <TableHead>
                        <div className="flex items-center">
                          Percentile
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Info className="h-4 w-4 ml-1 text-muted-foreground" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Higher percentile is always better, regardless of the test type.</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                      </TableHead>
                      <TableHead>Ranking</TableHead>
                      <TableHead>Benchmark</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {playerData.map((item, index) => {
                      const percentile = getPlayerPercentile(selectedPlayer, item.testName)
                      const ranking = getPlayerRanking(selectedPlayer, item.testName)
                      const lowerIsBetter = isLowerBetter(item.testName)
                      const average = calculateAverage(item.testName, false)
                      const playerResult = Number(item.playerResult)
                      const isBetterThanAvg = lowerIsBetter
                        ? playerResult < (average || 0)
                        : playerResult > (average || 0)

                      return (
                        <TableRow key={index}>
                          <TableCell>{item.testCategory}</TableCell>
                          <TableCell>
                            <div className="flex items-center">
                              {item.testName}
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
                          </TableCell>
                          <TableCell>{item.playerResult}</TableCell>
                          <TableCell>{item.testUnits}</TableCell>
                          <TableCell>{renderPercentileBadge(percentile, item.testName)}</TableCell>
                          <TableCell>{ranking !== null ? `${ranking} of ${getPlayerNames().length}` : "N/A"}</TableCell>
                          <TableCell>
                            {average !== null && (
                              <div className="flex items-center">
                                <span className={isBetterThanAvg ? "text-green-500" : "text-red-500"}>
                                  {average.toFixed(2)}
                                </span>
                                {isBetterThanAvg ? (
                                  <ArrowUp className="h-4 w-4 ml-1 text-green-500" />
                                ) : (
                                  <ArrowDown className="h-4 w-4 ml-1 text-red-500" />
                                )}
                              </div>
                            )}
                          </TableCell>
                        </TableRow>
                      )
                    })}
                  </TableBody>
                </Table>
              </div>
            )}
          </TabsContent>

          <TabsContent value="test-comparison" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="text-sm font-medium mb-2 block">Select Category</label>
                <Select value={selectedCategory} onValueChange={handleCategoryChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Select Test</label>
                <Select value={selectedTest} onValueChange={setSelectedTest} disabled={!selectedCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder={selectedCategory ? "Select a test" : "Select a category first"} />
                  </SelectTrigger>
                  <SelectContent>
                    {testNames.map((test) => (
                      <SelectItem key={test} value={test}>
                        {test}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {selectedTest && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold flex items-center">
                  Comparison for {selectedTest}
                  <Badge variant="outline" className="ml-2">
                    {isLowerBetter(selectedTest) ? "Lower is better" : "Higher is better"}
                  </Badge>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">Average Player Result</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-bold">{calculateAverage(selectedTest, true)?.toFixed(2) || "N/A"}</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">DFB Reference Average</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-bold">{calculateAverage(selectedTest, false)?.toFixed(2) || "N/A"}</p>
                    </CardContent>
                  </Card>
                </div>

                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Player</TableHead>
                      <TableHead>Result</TableHead>
                      <TableHead>Units</TableHead>
                      <TableHead>Percentile</TableHead>
                      <TableHead>vs. DFB Benchmark</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {allPlayerData
                      .filter((item) => item.testName === selectedTest)
                      .sort((a, b) => {
                        // Sort by result (lower is better for time-based tests)
                        const aResult = Number(a.playerResult)
                        const bResult = Number(b.playerResult)
                        if (isNaN(aResult) || isNaN(bResult)) return 0

                        return isLowerBetter(selectedTest) ? aResult - bResult : bResult - aResult
                      })
                      .map((item, index) => {
                        const percentile = getPlayerPercentile(item.playerName, selectedTest)
                        const average = calculateAverage(selectedTest, false)
                        const playerResult = Number(item.playerResult)
                        const lowerIsBetter = isLowerBetter(selectedTest)
                        const isBetterThanAvg = lowerIsBetter
                          ? playerResult < (average || 0)
                          : playerResult > (average || 0)
                        const difference = lowerIsBetter ? (average || 0) - playerResult : playerResult - (average || 0)

                        return (
                          <TableRow key={index}>
                            <TableCell>{item.playerName}</TableCell>
                            <TableCell>{item.playerResult}</TableCell>
                            <TableCell>{item.testUnits}</TableCell>
                            <TableCell>{renderPercentileBadge(percentile, selectedTest)}</TableCell>
                            <TableCell>
                              {average !== null && (
                                <div className="flex items-center">
                                  <span className={isBetterThanAvg ? "text-green-500" : "text-red-500"}>
                                    {isBetterThanAvg ? "+" : "-"}
                                    {Math.abs(difference).toFixed(2)}
                                  </span>
                                  {isBetterThanAvg ? (
                                    <ArrowUp className="h-4 w-4 ml-1 text-green-500" />
                                  ) : (
                                    <ArrowDown className="h-4 w-4 ml-1 text-red-500" />
                                  )}
                                </div>
                              )}
                            </TableCell>
                          </TableRow>
                        )
                      })}
                  </TableBody>
                </Table>
              </div>
            )}
          </TabsContent>

          <TabsContent value="data-explorer" className="space-y-4">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Type</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Test</TableHead>
                    <TableHead>Result</TableHead>
                    <TableHead>Units</TableHead>
                    <TableHead>Better is</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {getPlayerData().map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <Badge variant={item.isPlayer ? "default" : "outline"}>
                          {item.isPlayer ? "Player" : "Reference"}
                        </Badge>
                      </TableCell>
                      <TableCell>{item.playerName}</TableCell>
                      <TableCell>{item.testCategory}</TableCell>
                      <TableCell>{item.testName}</TableCell>
                      <TableCell>{item.playerResult}</TableCell>
                      <TableCell>{item.testUnits}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{isLowerBetter(item.testName) ? "Lower" : "Higher"}</Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
