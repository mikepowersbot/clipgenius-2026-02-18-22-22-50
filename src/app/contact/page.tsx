"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 p-8">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">Contact Us</CardTitle>
          <p className="text-muted-foreground text-center mt-2">
            Have questions or feedback? We'd love to hear from you.
          </p>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="John" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Doe" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="john.doe@example.com"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                placeholder="How can we help you?"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Your message here..."
                rows={6}
                required
              />
            </div>

            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>

          <div className="mt-8 pt-6 border-t">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground">contact@clipgenius.com</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-muted-foreground">San Francisco, CA</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}