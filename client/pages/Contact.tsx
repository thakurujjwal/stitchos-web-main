import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  Headphones,
  Calendar,
  Globe,
  Send,
  User,
  Building,
  MessageCircle
} from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/10">
        <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
        <div className="container mx-auto px-4 py-24 sm:py-32 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="mb-4">
                <MessageSquare className="w-3 h-3 mr-1" />
                Get in Touch
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                Contact{" "}
                <span className="text-primary bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  StitchOS
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Ready to transform your manufacturing operations? Get in touch
                with our team of experts for personalized consultation and
                support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline">Contact Information</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Multiple Ways to <span className="text-primary">Reach Us</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the best way to connect with our team based on your needs
              and preferences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: Phone,
                title: "Phone Support",
                subtitle: "Call us directly",
                info: "+91 9069599599",
                description: "Available Mon-Fri, 9 AM - 6 PM IST",
                action: "Call Now",
                href: "tel:+919069599599",
              },
              {
                icon: Mail,
                title: "Email Support",
                subtitle: "Send us an email",
                info: "admin@stitchos.com",
                description: "We respond within 24 hours",
                action: "Send Email",
                href: "mailto:admin@stitchos.com",
              },
              {
                icon: Calendar,
                title: "Email Us",
                subtitle: "Send us a message",
                info: "admin@stitchos.com",
                description: "We respond within 24 hours",
                action: "Send Email",
                href: "mailto:admin@stitchos.com?subject=Meeting%20Request",
              },
              {
                icon: MessageCircle,
                title: "WhatsApp Now",
                subtitle: "Instant support",
                info: "Chat with Expert",
                description: "Available during business hours",
                action: "Start Chat",
                href: "https://wa.me/919069599599",
              },
            ].map((contact, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 text-center"
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <contact.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{contact.title}</CardTitle>
                  <CardDescription>{contact.subtitle}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-semibold text-primary">{contact.info}</p>
                    <p className="text-sm text-muted-foreground">
                      {contact.description}
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full group-hover:border-primary group-hover:text-primary"
                   
  onClick={() => window.open(contact.href, '_blank')}
                  >
                    {contact.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Office Info */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Query Form */}
            <div>
              <div className="space-y-4 mb-8">
                <Badge variant="outline">Send Message</Badge>
                <h2 className="text-3xl lg:text-4xl font-bold">
                  Submit Your <span className="text-primary">Query</span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as
                  possible with detailed information and answers to your
                  questions.
                </p>
              </div>

              <Card className="bg-card border rounded-3xl p-8 shadow-lg">
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Send className="w-6 h-6 text-primary" />
                    Contact Query Form
                  </CardTitle>
                  <CardDescription>
                    Our team will respond to your query within 24 hours with
                    detailed information and next steps.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 p-0">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name *</Label>
                    <Input id="company" placeholder="Enter your company name" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="demo">
                          Request Product Demo
                        </SelectItem>
                        <SelectItem value="pricing">Pricing Inquiry</SelectItem>
                        <SelectItem value="technical">
                          Technical Support
                        </SelectItem>
                        <SelectItem value="partnership">
                          Partnership Opportunity
                        </SelectItem>
                        <SelectItem value="implementation">
                          Implementation Consultation
                        </SelectItem>
                        <SelectItem value="sales">Sales Inquiry</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company-size">Company Size</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select company size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="startup">
                          Startup (1-10 employees)
                        </SelectItem>
                        <SelectItem value="small">
                          Small (11-50 employees)
                        </SelectItem>
                        <SelectItem value="medium">
                          Medium (51-200 employees)
                        </SelectItem>
                        <SelectItem value="large">
                          Large (201-1000 employees)
                        </SelectItem>
                        <SelectItem value="enterprise">
                          Enterprise (1000+ employees)
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="priority">Priority Level</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select priority" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">
                          Low - General inquiry
                        </SelectItem>
                        <SelectItem value="medium">
                          Medium - Implementation help
                        </SelectItem>
                        <SelectItem value="high">
                          High - Technical issue
                        </SelectItem>
                        <SelectItem value="urgent">
                          Urgent - Production impact
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Please describe your requirements, questions, or how we can help you..."
                      className="min-h-[120px]"
                    />
                  </div>

                  <Button className="w-full" size="lg">
                    Submit Query
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to our Privacy Policy and
                    Terms of Service. We'll respond within 24 hours.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Office Information */}
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline">Office Location</Badge>
                <h2 className="text-3xl lg:text-4xl font-bold">
                  Visit Our <span className="text-primary">Office</span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  We're located in the heart of Faridabad, India. Schedule a
                  visit to see StitchOS in action.
                </p>
              </div>

              <Card className="bg-card border rounded-3xl p-8 shadow-lg">
                <CardContent className="space-y-6 p-0">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        Head Office
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        F401, Ibiza Town
                        <br />
                        Surajkund Road
                        <br />
                        Faridabad, Haryana, India 121010
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        Business Hours
                      </h3>
                      <div className="space-y-1 text-muted-foreground">
                        <p>Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                        <p>Saturday: 10:00 AM - 4:00 PM IST</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Globe className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        Global Presence
                      </h3>
                      <p className="text-muted-foreground">
                        Serving apparel manufacturers across 25+ countries with
                        local support and expertise.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-primary to-blue-600 text-white rounded-3xl p-8">
                <CardContent className="p-0 text-center space-y-4">
                  <h3 className="text-2xl font-bold">Ready to Get Started?</h3>
                  <p className="text-blue-100">
                    Schedule a personalized demo to see how StitchOS can
                    transform your manufacturing operations.
                  </p>
                  <Button
                    size="lg"
                    variant="secondary"
                    className="bg-white text-primary hover:bg-blue-50"
                  >
                    Schedule Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Contact Cards */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Sales Team</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Get pricing and product information
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Contact Sales
                  </Button>
                </Card>

                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Headphones className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Support Team</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Technical support and assistance
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Get Support
                  </Button>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
