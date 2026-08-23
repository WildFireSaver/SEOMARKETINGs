import { Building2, Mail, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-lime-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-lg bg-primary flex items-center justify-center">
                <Building2 className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-slate-900">Contact Consult&Build™</h1>
                <p className="text-slate-600">Get in touch with our team</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    Email Us
                  </CardTitle>
                  <CardDescription>Send us a message and we'll respond within 24 hours</CardDescription>
                </CardHeader>
                <CardContent>
                  <a
                    href="mailto:info@consultbuildca.com"
                    className="text-lg font-semibold text-primary hover:text-primary/80 transition-colors"
                  >
                    info@consultbuildca.com
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Service Area
                  </CardTitle>
                  <CardDescription>We serve homeowners throughout California</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700">
                    Statewide California Service
                    <br />
                    Licensed Landscaping &amp; Hardscaping Network
                    <br />
                    All Major Cities & Counties
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    Response Time
                  </CardTitle>
                  <CardDescription>When you can expect to hear from us</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700">
                    Email responses: Within 24 hours
                    <br />
                    Consultation scheduling: Same day
                    <br />
                    Crew matching: 24-48 hours
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you soon</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Your first name" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Your last name" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="info@consultbuildca.com" />
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="What's this about?" />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Tell us how we can help you..." className="min-h-[120px]" />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">About Our Service</h3>
                <p className="text-slate-600 max-w-2xl mx-auto">
                  Consult &amp; Build CA is California&apos;s premier landscaping and hardscaping matching service. We
                  connect homeowners with pre-screened, licensed outdoor crews and provide free, no-obligation
                  consultations. Our goal is to make backyard and outdoor projects stress-free from design to build.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
