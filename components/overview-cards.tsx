import type React from "react"
import { ArrowUpRight, Users, CreditCard, Activity, BarChart3 } from "lucide-react"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export function OverviewCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <MetricCard
        title="Total Revenue"
        value="$45,231.89"
        description="+20.1% from last month"
        icon={CreditCard}
        trend="up"
        className="bg-gradient-to-br from-background to-gray-50 dark:from-background dark:to-gray-900"
      />
      <MetricCard
        title="Subscriptions"
        value="2,350"
        description="+180.1% from last month"
        icon={Users}
        trend="up"
        className="bg-gradient-to-br from-background to-gray-50 dark:from-background dark:to-gray-900"
      />
      <MetricCard
        title="Active Users"
        value="1,893"
        description="+19.4% from last month"
        icon={Activity}
        trend="up"
        className="bg-gradient-to-br from-background to-gray-50 dark:from-background dark:to-gray-900"
      />
      <MetricCard
        title="Conversion Rate"
        value="12.5%"
        description="+4.3% from last month"
        icon={BarChart3}
        trend="up"
        className="bg-gradient-to-br from-background to-gray-50 dark:from-background dark:to-gray-900"
      />
    </div>
  )
}

interface MetricCardProps {
  title: string
  value: string
  description: string
  icon: React.ElementType
  trend: "up" | "down" | "neutral"
  className?: string
}

function MetricCard({ title, value, description, icon: Icon, trend, className }: MetricCardProps) {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="p-2">
        <div
          className={cn(
            "flex items-center text-xs",
            trend === "up" ? "text-blue-500" : trend === "down" ? "text-red-500" : "text-gray-500",
          )}
        >
          {trend === "up" && <ArrowUpRight className="mr-1 h-3 w-3" />}
          {trend === "down" && <ArrowUpRight className="mr-1 h-3 w-3 rotate-180" />}
          <span>View more</span>
        </div>
      </CardFooter>
    </Card>
  )
}
