export interface PlayerData {
  isPlayer: boolean
  playerName: string
  playerResult: number | string
  testCategory: string
  testName: string
  testUnits: string
}

export interface PlayerDataContextType {
  data: PlayerData[]
  getPlayerData: (playerName?: string) => PlayerData[]
  getReferenceData: () => PlayerData[]
  getTestCategories: () => string[]
  getTestNames: (category?: string) => string[]
  getPlayerNames: () => string[]
  getPlayerPercentile: (playerName: string, testName: string) => number | null
  sortDataBy: (field: keyof PlayerData, ascending?: boolean) => PlayerData[]
  filterData: (filters: Partial<PlayerData>) => PlayerData[]
  calculateAverage: (testName: string, isPlayer?: boolean) => number | null
  calculateMedian: (testName: string, isPlayer?: boolean) => number | null
  getPlayerRanking: (playerName: string, testName: string) => number | null
  isLowerBetter: (testName: string) => boolean
}
