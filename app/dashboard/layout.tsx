"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import {
  LayoutDashboard,
  LineChart,
  Search,
  Settings,
  LogOut,
  Bell,
  User,
} from "lucide-react"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  const navigation = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Fund Finder",
      href: "/dashboard/funds",
      icon: Search,
    },
    {
      name: "Performance",
      href: "/dashboard/performance",
      icon: LineChart,
    },
    {
      name: "Settings",
      href: "/dashboard/settings",
      icon: Settings,
    },
  ]

  return (
    <div className="min-h-screen bg-muted/50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 md:h-16 items-center justify-between">
          <Link href="/dashboard" className="flex items-center -ml-3">
            <Logo />
          </Link>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="/login">
                <LogOut className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="container py-6 md:py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Navigation */}
          <aside className="md:w-64">
            <nav className="space-y-2">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-2 text-sm font-medium rounded-lg hover:bg-muted transition-colors ${
                      isActive
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : ""
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.name}
                  </Link>
                )
              })}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1">{children}</main>
        </div>
      </div>
    </div>
  )
} 