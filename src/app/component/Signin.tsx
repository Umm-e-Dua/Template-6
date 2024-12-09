"use client"
import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/app/component/ui/card"
import { Label } from "@/app/component/ui/label"
import { Input } from "@/app/component/ui/input"
import { Button } from "@/app/component/ui/button"


const Signin = () => {
    return (
        <Card className="mx-auto max-w-sm">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Login</CardTitle>
            <CardDescription>Enter your email and password to login to your account</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </div>
          </CardContent>
        </Card>
      )
}

export default Signin