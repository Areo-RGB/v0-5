"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"
import type { PlayerData, PlayerDataContextType } from "@/types/player-data"

// Initial raw data
const initialData: PlayerData[] = [
  {
    isPlayer: false,
    playerName: "DFB-3",
    playerResult: 2.39,
    testCategory: "Schnelligkeit",
    testName: "10m Sprint",
    testUnits: "s",
  },
  {
    isPlayer: false,
    playerName: "DFB-10",
    playerResult: 2.33,
    testCategory: "Schnelligkeit",
    testName: "10m Sprint",
    testUnits: "s",
  },
  {
    isPlayer: false,
    playerName: "DFB-20",
    playerResult: 2.28,
    testCategory: "Schnelligkeit",
    testName: "10m Sprint",
    testUnits: "s",
  },
  {
    isPlayer: false,
    playerName: "DFB-30",
    playerResult: 2.24,
    testCategory: "Schnelligkeit",
    testName: "10m Sprint",
    testUnits: "s",
  },
  {
    isPlayer: false,
    playerName: "DFB-40",
    playerResult: 2.21,
    testCategory: "Schnelligkeit",
    testName: "10m Sprint",
    testUnits: "s",
  },
  {
    isPlayer: false,
    playerName: "DFB-50",
    playerResult: 2.18,
    testCategory: "Schnelligkeit",
    testName: "10m Sprint",
    testUnits: "s",
  },
  {
    isPlayer: false,
    playerName: "DFB-60",
    playerResult: 2.16,
    testCategory: "Schnelligkeit",
    testName: "10m Sprint",
    testUnits: "s",
  },
  {
    isPlayer: false,
    playerName: "DFB-70",
    playerResult: 2.13,
    testCategory: "Schnelligkeit",
    testName: "10m Sprint",
    testUnits: "s",
  },
  {
    isPlayer: false,
    playerName: "DFB-80",
    playerResult: 2.1,
    testCategory: "Schnelligkeit",
    testName: "10m Sprint",
    testUnits: "s",
  },
  {
    isPlayer: false,
    playerName: "DFB-90",
    playerResult: 2.05,
    testCategory: "Schnelligkeit",
    testName: "10m Sprint",
    testUnits: "s",
  },
  {
    isPlayer: false,
    playerName: "DFB-97",
    playerResult: 1.99,
    testCategory: "Schnelligkeit",
    testName: "10m Sprint",
    testUnits: "s",
  },
  {
    isPlayer: false,
    playerName: "DFB-3",
    playerResult: 4.14,
    testCategory: "Schnelligkeit",
    testName: "20m Sprint",
    testUnits: "s",
  },
  {
    isPlayer: false,
    playerName: "DFB-10",
    playerResult: 4.01,
    testCategory: "Schnelligkeit",
    testName: "20m Sprint",
    testUnits: "s",
  },
  {
    isPlayer: false,
    playerName: "DFB-20",
    playerResult: "3.93*",
    testCategory: "Schnelligkeit",
    testName: "20m Sprint",
    testUnits: "s",
  },
  {
    isPlayer: false,
    playerName: "DFB-30",
    playerResult: 3.87,
    testCategory: "Schnelligkeit",
    testName: "20m Sprint",
    testUnits: "s",
  },
  {
    isPlayer: false,
    playerName: "DFB-40",
    playerResult: 3.82,
    testCategory: "Schnelligkeit",
    testName: "20m Sprint",
    testUnits: "s",
  },
  {
    isPlayer: false,
    playerName: "DFB-50",
    playerResult: 3.78,
    testCategory: "Schnelligkeit",
    testName: "20m Sprint",
    testUnits: "s",
  },
  {
    isPlayer: false,
    playerName: "DFB-60",
    playerResult: 3.74,
    testCategory: "Schnelligkeit",
    testName: "20m Sprint",
    testUnits: "s",
  },
  {
    isPlayer: false,
    playerName: "DFB-70",
    playerResult: 3.69,
    testCategory: "Schnelligkeit",
    testName: "20m Sprint",
    testUnits: "s",
  },
  {
    isPlayer: false,
    playerName: "DFB-80",
    playerResult: 3.64,
    testCategory: "Schnelligkeit",
    testName: "20m Sprint",
    testUnits: "s",
  },
  {
    isPlayer: false,
    playerName: "DFB-90",
    playerResult: 3.57,
    testCategory: "Schnelligkeit",
    testName: "20m Sprint",
    testUnits: "s",
  },
  {
    isPlayer: false,
    playerName: "DFB-97",
    playerResult: 3.47,
    testCategory: "Schnelligkeit",
    testName: "20m Sprint",
    testUnits: "s",
  },
  {
    isPlayer: false,
    playerName: "DFB-3",
    playerResult: 9.66,
    testCategory: "Beweglichkeit",
    testName: "Gewandtheit",
    testUnits: "s",
  },
  {
    isPlayer: false,
    playerName: "DFB-10",
    playerResult: 9.33,
    testCategory: "Beweglichkeit",
    testName: "Gewandtheit",
    testUnits: "s",
  },
  {
    isPlayer: false,
    playerName: "DFB-20",
    playerResult: 9.07,
    testCategory: "Beweglichkeit",
    testName: "Gewandtheit",
    testUnits: "s",
  },
  {
    isPlayer: false,
    playerName: "DFB-30",
    playerResult: 8.9,
    testCategory: "Beweglichkeit",
    testName: "Gewandtheit",
    testUnits: "s",
  },
  {
    isPlayer: false,
    playerName: "DFB-40",
    playerResult: 8.77,
    testCategory: "Beweglichkeit",
    testName: "Gewandtheit",
    testUnits: "s",
  },
  {
    isPlayer: false,
    playerName: "DFB-50",
    playerResult: 8.66,
    testCategory: "Beweglichkeit",
    testName: "Gewandtheit",
    testUnits: "s",
  },
  {
    isPlayer: false,
    playerName: "DFB-60",
    playerResult: 8.54,
    testCategory: "Beweglichkeit",
    testName: "Gewandtheit",
    testUnits: "s",
  },
  {
    isPlayer: false,
    playerName: "DFB-70",
    playerResult: 8.42,
    testCategory: "Beweglichkeit",
    testName: "Gewandtheit",
    testUnits: "s",
  },
  {
    isPlayer: false,
    playerName: "DFB-80",
    playerResult: 8.28,
    testCategory: "Beweglichkeit",
    testName: "Gewandtheit",
    testUnits: "s",
  },
  {
    isPlayer: false,
    playerName: "DFB-90",
    playerResult: 8.11,
    testCategory: "Beweglichkeit",
    testName: "Gewandtheit",
    testUnits: "s",
  },
  {
    isPlayer: false,
    playerName: "DFB-97",
    playerResult: 7.91,
    testCategory: "Beweglichkeit",
    testName: "Gewandtheit",
    testUnits: "s",
  },
  {
    isPlayer: false,
    playerName: "DFB-3",
    playerResult: 14.37,
    testCategory: "Technik",
    testName: "Dribbling",
    testUnits: "s",
  },
  {
    isPlayer: false,
    playerName: "DFB-10",
    playerResult: 13.42,
    testCategory: "Technik",
    testName: "Dribbling",
    testUnits: "s",
  },
  {
    isPlayer: false,
    playerName: "DFB-20",
    playerResult: 12.84,
    testCategory: "Technik",
    testName: "Dribbling",
    testUnits: "s",
  },
  {
    isPlayer: false,
    playerName: "DFB-30",
    playerResult: 12.5,
    testCategory: "Technik",
    testName: "Dribbling",
    testUnits: "s",
  },
  {
    isPlayer: false,
    playerName: "DFB-40",
    playerResult: 12.15,
    testCategory: "Technik",
    testName: "Dribbling",
    testUnits: "s",
  },
  {
    isPlayer: false,
    playerName: "DFB-50",
    playerResult: 11.9,
    testCategory: "Technik",
    testName: "Dribbling",
    testUnits: "s",
  },
  {
    isPlayer: false,
    playerName: "DFB-60",
    playerResult: 11.68,
    testCategory: "Technik",
    testName: "Dribbling",
    testUnits: "s",
  },
  {
    isPlayer: false,
    playerName: "DFB-70",
    playerResult: 11.44,
    testCategory: "Technik",
    testName: "Dribbling",
    testUnits: "s",
  },
  {
    isPlayer: false,
    playerName: "DFB-80",
    playerResult: 11.16,
    testCategory: "Technik",
    testName: "Dribbling",
    testUnits: "s",
  },
  {
    isPlayer: false,
    playerName: "DFB-90",
    playerResult: 10.84,
    testCategory: "Technik",
    testName: "Dribbling",
    testUnits: "s",
  },
  {
    isPlayer: false,
    playerName: "DFB-97",
    playerResult: 10.43,
    testCategory: "Technik",
    testName: "Dribbling",
    testUnits: "s",
  },
  {
    isPlayer: false,
    playerName: "DFB-3",
    playerResult: 15.29,
    testCategory: "Technik",
    testName: "Ballkontrolle",
    testUnits: "s",
  },
  {
    isPlayer: false,
    playerName: "DFB-10",
    playerResult: 13.81,
    testCategory: "Technik",
    testName: "Ballkontrolle",
    testUnits: "s",
  },
  {
    isPlayer: false,
    playerName: "DFB-20",
    playerResult: 12.86,
    testCategory: "Technik",
    testName: "Ballkontrolle",
    testUnits: "s",
  },
  {
    isPlayer: false,
    playerName: "DFB-30",
    playerResult: 12.28,
    testCategory: "Technik",
    testName: "Ballkontrolle",
    testUnits: "s",
  },
  {
    isPlayer: false,
    playerName: "DFB-40",
    playerResult: 11.78,
    testCategory: "Technik",
    testName: "Ballkontrolle",
    testUnits: "s",
  },
  {
    isPlayer: false,
    playerName: "DFB-50",
    playerResult: 11.36,
    testCategory: "Technik",
    testName: "Ballkontrolle",
    testUnits: "s",
  },
  {
    isPlayer: false,
    playerName: "DFB-60",
    playerResult: 10.99,
    testCategory: "Technik",
    testName: "Ballkontrolle",
    testUnits: "s",
  },
  {
    isPlayer: false,
    playerName: "DFB-70",
    playerResult: 10.59,
    testCategory: "Technik",
    testName: "Ballkontrolle",
    testUnits: "s",
  },
  {
    isPlayer: false,
    playerName: "DFB-80",
    playerResult: 10.18,
    testCategory: "Technik",
    testName: "Ballkontrolle",
    testUnits: "s",
  },
  {
    isPlayer: false,
    playerName: "DFB-90",
    playerResult: 9.66,
    testCategory: "Technik",
    testName: "Ballkontrolle",
    testUnits: "s",
  },
  {
    isPlayer: false,
    playerName: "DFB-97",
    playerResult: 9.0,
    testCategory: "Technik",
    testName: "Ballkontrolle",
    testUnits: "s",
  },
  {
    isPlayer: false,
    playerName: "DFB",
    playerResult: 1,
    testCategory: "Technik",
    testName: "Balljonglieren",
    testUnits: "Punkte",
  },
  {
    isPlayer: false,
    playerName: "DFB",
    playerResult: 1,
    testCategory: "Technik",
    testName: "Balljonglieren",
    testUnits: "Punkte",
  },
  {
    isPlayer: false,
    playerName: "DFB",
    playerResult: 1,
    testCategory: "Technik",
    testName: "Balljonglieren",
    testUnits: "Punkte",
  },
  {
    isPlayer: false,
    playerName: "DFB",
    playerResult: 1,
    testCategory: "Technik",
    testName: "Balljonglieren",
    testUnits: "Punkte",
  },
  {
    isPlayer: false,
    playerName: "DFB-80",
    playerResult: 2,
    testCategory: "Technik",
    testName: "Balljonglieren",
    testUnits: "Punkte",
  },
  {
    isPlayer: false,
    playerName: "DFB-90",
    playerResult: 3,
    testCategory: "Technik",
    testName: "Balljonglieren",
    testUnits: "Punkte",
  },
  {
    isPlayer: false,
    playerName: "DFB-97",
    playerResult: 6,
    testCategory: "Technik",
    testName: "Balljonglieren",
    testUnits: "Punkte",
  },
  {
    isPlayer: true,
    playerName: "Finley",
    playerResult: 1.99,
    testCategory: "Schnelligkeit",
    testName: "10m Sprint",
    testUnits: "s",
  },
  {
    isPlayer: true,
    playerName: "Finley",
    playerResult: 3.59,
    testCategory: "Schnelligkeit",
    testName: "20m Sprint",
    testUnits: "s",
  },
  {
    isPlayer: true,
    playerName: "Finley",
    playerResult: 7.81,
    testCategory: "Beweglichkeit",
    testName: "Gewandtheit",
    testUnits: "s",
  },
  {
    isPlayer: true,
    playerName: "Finley",
    playerResult: 10.27,
    testCategory: "Technik",
    testName: "Dribbling",
    testUnits: "s",
  },
  {
    isPlayer: true,
    playerName: "Finley",
    playerResult: 0.0,
    testCategory: "Technik",
    testName: "Balljonglieren",
    testUnits: "Punkte",
  },
  {
    isPlayer: true,
    playerName: "Finley",
    playerResult: 10.82,
    testCategory: "Technik",
    testName: "Ballkontrolle",
    testUnits: "s",
  },
  {
    isPlayer: true,
    playerName: "Alex",
    playerResult: 7.39,
    testCategory: "Beweglichkeit",
    testName: "Gewandtheit",
    testUnits: "s",
  },
  {
    isPlayer: true,
    playerName: "Alex",
    playerResult: 10.0,
    testCategory: "Technik",
    testName: "Dribbling",
    testUnits: "s",
  },
  {
    isPlayer: true,
    playerName: "Alex",
    playerResult: 2.16,
    testCategory: "Schnelligkeit",
    testName: "10m Sprint",
    testUnits: "s",
  },
  {
    isPlayer: true,
    playerName: "Alex",
    playerResult: 3.78,
    testCategory: "Schnelligkeit",
    testName: "20m Sprint",
    testUnits: "s",
  },
  {
    isPlayer: true,
    playerName: "Bent",
    playerResult: 2.19,
    testCategory: "Schnelligkeit",
    testName: "10m Sprint",
    testUnits: "s",
  },
  {
    isPlayer: true,
    playerName: "Bent",
    playerResult: 3.82,
    testCategory: "Schnelligkeit",
    testName: "20m Sprint",
    testUnits: "s",
  },
  {
    isPlayer: true,
    playerName: "Bent",
    playerResult: 8.14,
    testCategory: "Beweglichkeit",
    testName: "Gewandtheit",
    testUnits: "s",
  },
  {
    isPlayer: true,
    playerName: "Bent",
    playerResult: 8.95,
    testCategory: "Technik",
    testName: "Ballkontrolle",
    testUnits: "s",
  },
  {
    isPlayer: true,
    playerName: "Bent",
    playerResult: 3,
    testCategory: "Technik",
    testName: "Balljonglieren",
    testUnits: "Punkte",
  },
  {
    isPlayer: true,
    playerName: "Bent",
    playerResult: 10.28,
    testCategory: "Gewandtheit",
    testName: "Dribbling",
    testUnits: "s",
  },
]

// Create the context
const PlayerDataContext = createContext<PlayerDataContextType | undefined>(undefined)

// Helper function to normalize data
const normalizeData = (data: PlayerData[]): PlayerData[] => {
  return data.map((item) => ({
    ...item,
    playerResult:
      typeof item.playerResult === "string" && !isNaN(Number.parseFloat(item.playerResult.replace("*", "")))
        ? Number.parseFloat(item.playerResult.replace("*", ""))
        : item.playerResult,
  }))
}

// Helper to determine if lower is better for a test
const isLowerBetter = (testName: string): boolean => {
  // For all tests except Balljonglieren, lower is better
  return testName !== "Balljonglieren"
}

export const PlayerDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<PlayerData[]>(normalizeData(initialData))

  // Get player data
  const getPlayerData = (playerName?: string): PlayerData[] => {
    const playerData = data.filter((item) => item.isPlayer)
    if (playerName) {
      return playerData.filter((item) => item.playerName === playerName)
    }
    return playerData
  }

  // Get reference data
  const getReferenceData = (): PlayerData[] => {
    return data.filter((item) => !item.isPlayer)
  }

  // Get all test categories
  const getTestCategories = (): string[] => {
    return Array.from(new Set(data.map((item) => item.testCategory)))
  }

  // Get all test names, optionally filtered by category
  const getTestNames = (category?: string): string[] => {
    let filteredData = data
    if (category) {
      filteredData = data.filter((item) => item.testCategory === category)
    }
    return Array.from(new Set(filteredData.map((item) => item.testName)))
  }

  // Get all player names
  const getPlayerNames = (): string[] => {
    const playerData = data.filter((item) => item.isPlayer)
    return Array.from(new Set(playerData.map((item) => item.playerName)))
  }

  // Calculate percentile for a player's result in a specific test
  const getPlayerPercentile = (playerName: string, testName: string): number | null => {
    const playerTests = data.filter(
      (item) => item.isPlayer && item.playerName === playerName && item.testName === testName,
    )

    if (playerTests.length === 0) return null

    const playerResult = Number(playerTests[0].playerResult)
    if (isNaN(playerResult)) return null

    const lowerIsBetter = isLowerBetter(testName)

    // Get reference data for this test
    const referenceData = data
      .filter((item) => !item.isPlayer && item.testName === testName)
      .map((item) => Number(item.playerResult))
      .filter((val) => !isNaN(val))
      .sort((a, b) => (lowerIsBetter ? a - b : b - a)) // Sort appropriately based on whether lower is better

    if (referenceData.length === 0) return null

    // Find where the player's result fits in the reference data
    let position
    if (lowerIsBetter) {
      // For time-based tests (lower is better)
      // Count how many reference values the player's result is better than
      position = referenceData.filter((val) => playerResult <= val).length
    } else {
      // For point-based tests (higher is better)
      // Count how many reference values the player's result is better than
      position = referenceData.filter((val) => playerResult >= val).length
    }

    // Calculate percentile (0-100)
    return Math.round((position / referenceData.length) * 100)
  }

  // Sort data by a specific field
  const sortDataBy = (field: keyof PlayerData, ascending = true): PlayerData[] => {
    const sortedData = [...data].sort((a, b) => {
      if (a[field] < b[field]) return ascending ? -1 : 1
      if (a[field] > b[field]) return ascending ? 1 : -1
      return 0
    })
    return sortedData
  }

  // Filter data based on partial match
  const filterData = (filters: Partial<PlayerData>): PlayerData[] => {
    return data.filter((item) => {
      return Object.keys(filters).every((key) => {
        const filterKey = key as keyof PlayerData
        return filters[filterKey] === undefined || item[filterKey] === filters[filterKey]
      })
    })
  }

  // Calculate average for a specific test
  const calculateAverage = (testName: string, isPlayer?: boolean): number | null => {
    let filteredData = data.filter((item) => item.testName === testName)

    if (isPlayer !== undefined) {
      filteredData = filteredData.filter((item) => item.isPlayer === isPlayer)
    }

    const numericResults = filteredData.map((item) => Number(item.playerResult)).filter((val) => !isNaN(val))

    if (numericResults.length === 0) return null

    const sum = numericResults.reduce((acc, val) => acc + val, 0)
    return sum / numericResults.length
  }

  // Calculate median for a specific test
  const calculateMedian = (testName: string, isPlayer?: boolean): number | null => {
    let filteredData = data.filter((item) => item.testName === testName)

    if (isPlayer !== undefined) {
      filteredData = filteredData.filter((item) => item.isPlayer === isPlayer)
    }

    const numericResults = filteredData
      .map((item) => Number(item.playerResult))
      .filter((val) => !isNaN(val))
      .sort((a, b) => a - b)

    if (numericResults.length === 0) return null

    const mid = Math.floor(numericResults.length / 2)

    if (numericResults.length % 2 === 0) {
      return (numericResults[mid - 1] + numericResults[mid]) / 2
    }

    return numericResults[mid]
  }

  // Get player ranking for a specific test
  const getPlayerRanking = (playerName: string, testName: string): number | null => {
    const playerTests = data.filter((item) => item.isPlayer && item.testName === testName)

    if (playerTests.length === 0) return null

    const lowerIsBetter = isLowerBetter(testName)

    // Sort players by their results
    const sortedPlayers = [...playerTests].sort((a, b) => {
      const aResult = Number(a.playerResult)
      const bResult = Number(b.playerResult)

      if (isNaN(aResult) || isNaN(bResult)) return 0

      // Sort based on whether lower is better
      return lowerIsBetter ? aResult - bResult : bResult - aResult
    })

    // Find the player's position in the sorted list
    const playerIndex = sortedPlayers.findIndex((item) => item.playerName === playerName)

    if (playerIndex === -1) return null

    return playerIndex + 1
  }

  const value = {
    data,
    getPlayerData,
    getReferenceData,
    getTestCategories,
    getTestNames,
    getPlayerNames,
    getPlayerPercentile,
    sortDataBy,
    filterData,
    calculateAverage,
    calculateMedian,
    getPlayerRanking,
    isLowerBetter,
  }

  return <PlayerDataContext.Provider value={value}>{children}</PlayerDataContext.Provider>
}

// Custom hook to use the player data context
export const usePlayerData = (): PlayerDataContextType => {
  const context = useContext(PlayerDataContext)
  if (context === undefined) {
    throw new Error("usePlayerData must be used within a PlayerDataProvider")
  }
  return context
}
