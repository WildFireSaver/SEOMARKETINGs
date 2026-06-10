import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Send } from "lucide-react"

export function FormspreeContactForm() {
  return (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle>Contact Us</CardTitle>
        <CardDescription>Send us a message using the form below. This form is powered by Formspree.</CardDescription>
      </CardHeader>
      <form action="https://formspree.io/f/xkgbowvn" method="POST">
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Your Email</Label>
            <Input id="email" type="email" name="email" placeholder="you@example.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Your Message</Label>
            <Textarea id="message" name="message" placeholder="Enter your message here..." required rows={5} />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">
            <Send className="mr-2 h-4 w-4" /> Send Message
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
