"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import {
  Bell,
  Mail,
  Shield,
  Smartphone,
  Globe,
  Moon,
  Sun,
  User,
} from "lucide-react"

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(false)
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [smsNotifications, setSmsNotifications] = useState(false)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-muted-foreground">Manage your account settings and preferences</p>
      </div>

      {/* Profile Settings */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Profile Information</h2>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" defaultValue="Rahul Mehta" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" defaultValue="rahul.mehta@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" defaultValue="+91 98765 43210" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="pan">PAN Number</Label>
              <Input id="pan" defaultValue="ABCDE1234F" />
            </div>
          </div>
          <Button>Update Profile</Button>
        </div>
      </Card>

      {/* Notification Settings */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Notification Preferences</h2>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-muted-foreground" />
              <div>
                <Label>Email Notifications</Label>
                <p className="text-sm text-muted-foreground">
                  Receive updates about your investments via email
                </p>
              </div>
            </div>
            <Switch
              checked={emailNotifications}
              onCheckedChange={setEmailNotifications}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Smartphone className="h-5 w-5 text-muted-foreground" />
              <div>
                <Label>SMS Notifications</Label>
                <p className="text-sm text-muted-foreground">
                  Get important alerts via SMS
                </p>
              </div>
            </div>
            <Switch
              checked={smsNotifications}
              onCheckedChange={setSmsNotifications}
            />
          </div>

          <div className="pt-4 border-t">
            <h3 className="font-medium mb-3">Notification Types</h3>
            <div className="space-y-3">
              {[
                "Portfolio Updates",
                "Market Alerts",
                "Transaction Confirmations",
                "Document Updates",
                "Meeting Reminders",
              ].map((item) => (
                <div key={item} className="flex items-center space-x-2">
                  <Switch id={item} defaultChecked />
                  <Label htmlFor={item}>{item}</Label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* Security Settings */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Security Settings</h2>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-muted-foreground" />
              <div>
                <Label>Two-Factor Authentication</Label>
                <p className="text-sm text-muted-foreground">
                  Add an extra layer of security to your account
                </p>
              </div>
            </div>
            <Button variant="outline">Enable</Button>
          </div>

          <div className="pt-4 border-t">
            <Button variant="outline" className="w-full">Change Password</Button>
          </div>
        </div>
      </Card>

      {/* Preferences */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Preferences</h2>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-muted-foreground" />
              <div>
                <Label>Language</Label>
                <p className="text-sm text-muted-foreground">
                  Choose your preferred language
                </p>
              </div>
            </div>
            <Select defaultValue="en">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="hi">Hindi</SelectItem>
                <SelectItem value="gu">Gujarati</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {darkMode ? (
                <Moon className="h-5 w-5 text-muted-foreground" />
              ) : (
                <Sun className="h-5 w-5 text-muted-foreground" />
              )}
              <div>
                <Label>Theme</Label>
                <p className="text-sm text-muted-foreground">
                  Choose your preferred theme
                </p>
              </div>
            </div>
            <Switch
              checked={darkMode}
              onCheckedChange={setDarkMode}
            />
          </div>
        </div>
      </Card>
    </div>
  )
} 