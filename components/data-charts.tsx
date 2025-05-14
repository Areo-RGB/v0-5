"use client"

import type React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"
import { LineChart } from "@/components/charts/line-chart"
import { BarChart } from "@/components/charts/bar-chart"
import { FullscreenCard } from "@/components/fullscreen-card"

interface DataChartsProps extends React.HTMLAttributes<HTMLDivElement> {}

export function DataCharts({ className, ...props }: DataChartsProps) {
  return (
    <FullscreenCard id="data-charts" title="Performance Analytics" className={cn(className)}>
      <Tabs defaultValue="revenue">
        <TabsList className="mb-4">
          <TabsTrigger value="revenue">Revenue</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="conversion">Conversion</TabsTrigger>
        </TabsList>
        <TabsContent value="revenue" className="h-[300px]">
          <LineChart />
        </TabsContent>
        <TabsContent value="users" className="h-[300px]">
          <BarChart />
        </TabsContent>
        <TabsContent value="conversion" className="h-[300px]">
          <LineChart />
        </TabsContent>
      </Tabs>
    </FullscreenCard>
  )
}
