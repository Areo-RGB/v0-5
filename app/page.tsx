"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { OverviewCards } from "@/components/overview-cards"
import { DataCharts } from "@/components/data-charts"
import { FooterNavigation } from "@/components/footer-navigation"
import { AthleteLeaderboard } from "@/components/ranked-cards/athlete-leaderboard"
import { TeamStandings } from "@/components/ranked-cards/team-standings"
import { PlayerStats } from "@/components/ranked-cards/player-stats"
import { FullscreenProvider } from "@/components/fullscreen-provider"
import { PlayerDataProvider } from "@/context/player-data-context"
import PlayerDataDashboard from "@/components/player-data-dashboard"
import { PlayerPerformanceCard } from "@/components/player-performance-card"

export default function DashboardPage() {
  return (
    <PlayerDataProvider>
      <FullscreenProvider>
        <div className="flex min-h-screen flex-col bg-background">
          <DashboardShell>
            <DashboardHeader heading="Dashboard" text="Your analytics overview and recent activity." />
            <Tabs defaultValue="overview" className="space-y-4">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="reports">Reports</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="space-y-4">
                <OverviewCards />

                {/* Top Athletes card moved here, right after the KPI section */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                  <AthleteLeaderboard className="md:col-span-1 lg:col-span-2" />
                  <DataCharts className="md:col-span-1 lg:col-span-5" />
                </div>
              </TabsContent>
              <TabsContent value="analytics" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                  <DataCharts className="lg:col-span-7" />
                </div>
              </TabsContent>
              <TabsContent value="reports" className="space-y-4">
                <div className="grid gap-4">
                  <DataCharts className="lg:col-span-7" />
                </div>
              </TabsContent>
            </Tabs>

            {/* Sports Performance Ranked Cards - now without AthleteLeaderboard */}
            <div className="mt-8">
              <h2 className="text-xl font-bold mb-4">Sports Performance Rankings</h2>
              <div className="grid gap-4 md:grid-cols-2">
                <TeamStandings />
                <PlayerStats />
              </div>
            </div>

            {/* Player Data Dashboard */}
            <div className="mt-8">
              <h2 className="text-xl font-bold mb-4">Player Performance Database</h2>
              <PlayerDataDashboard />
            </div>

            {/* Example of using the PlayerPerformanceCard component */}
            <div className="mt-8">
              <h2 className="text-xl font-bold mb-4">Performance Highlights</h2>
              <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
                <PlayerPerformanceCard playerName="Finley" testName="10m Sprint" />
                <PlayerPerformanceCard playerName="Alex" testName="Gewandtheit" />
                <PlayerPerformanceCard playerName="Bent" testName="Ballkontrolle" />
                <PlayerPerformanceCard playerName="Finley" testName="Dribbling" />
              </div>
            </div>
          </DashboardShell>
          <div className="mt-auto">
            <FooterNavigation />
          </div>
        </div>
      </FullscreenProvider>
    </PlayerDataProvider>
  )
}
