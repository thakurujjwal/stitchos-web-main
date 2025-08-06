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
  CheckCircle,
  ArrowRight,
  BookOpen,
  FileText,
  Download,
  Video,
  Users,
  MessageSquare,
  Globe,
  Lightbulb,
  Mail,
  Phone,
} from "lucide-react";

export default function Resources() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/10">
        <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
        <div className="container mx-auto px-4 py-24 sm:py-32 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="mb-4">
                <BookOpen className="w-3 h-3 mr-1" />
                Knowledge Center
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                Resources &{" "}
                <span className="text-primary bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  Support Center
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Access comprehensive blogs, learning materials, case studies,
                and expert support to maximize your StitchOS implementation and
                manufacturing excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Categories */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline">Resource Categories</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Everything You Need to{" "}
              <span className="text-primary">Succeed</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive resources to help you implement, optimize, and get
              the most out of your StitchOS platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
            {[
              {
                icon: FileText,
                title: "Blogs",
                description:
                  "Industry insights, trends, and manufacturing best practices",
                count: "50+",
                href: "/blogs",
              },
              {
                icon: BookOpen,
                title: "Learning Materials",
                description:
                  "Training resources, tutorials, and educational content",
                count: "30+",
                href: "/learning",
              },
              {
                icon: Users,
                title: "Case Studies",
                description:
                  "Real-world success stories from leading manufacturers",
                count: "25+",
                href: "/case-studies",
              },
              {
                icon: Video,
                title: "Video Tutorials",
                description: "Step-by-step video guides and training materials",
                count: "40+",
                href: "/tutorials",
              },
              {
                icon: Download,
                title: "Downloads",
                description:
                  "White papers, templates, and implementation guides",
                count: "15+",
                href: "/downloads",
              },
            ].map((category, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => (window.location.href = category.href)}
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <category.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">
                        {category.title}
                      </CardTitle>
                      <Badge variant="secondary">{category.count}</Badge>
                    </div>
                    <CardDescription className="text-center">
                      {category.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="group-hover:text-primary"
                  >
                    Explore <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Query Form Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline">Get Expert Help</Badge>
                <h2 className="text-3xl lg:text-4xl font-bold">
                  Have Questions?{" "}
                  <span className="text-primary">We're Here to Help</span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  Our team of manufacturing experts is ready to assist you with
                  technical questions, implementation guidance, and best
                  practices.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: MessageSquare,
                    title: "Technical Support",
                    description:
                      "Get help with implementation, configuration, and troubleshooting",
                  },
                  {
                    icon: Lightbulb,
                    title: "Best Practices",
                    description:
                      "Learn from our experts about optimizing your manufacturing processes",
                  },
                  {
                    icon: Globe,
                    title: "Industry Insights",
                    description:
                      "Stay updated with the latest trends and innovations in manufacturing",
                  },
                ].map((support, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <support.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        {support.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {support.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">+91 9810264278</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">
                    anupam@stitchos.com
                  </span>
                </div>
              </div>
            </div>

            <Card className="bg-card border rounded-3xl p-8 shadow-lg">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl">Submit Your Query</CardTitle>
                <CardDescription>
                  Fill out the form below and our experts will get back to you
                  within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" placeholder="Enter your first name" />
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
                  <Label htmlFor="queryType">Query Type *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select query type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technical">
                        Technical Support
                      </SelectItem>
                      <SelectItem value="implementation">
                        Implementation Guidance
                      </SelectItem>
                      <SelectItem value="training">
                        Training & Best Practices
                      </SelectItem>
                      <SelectItem value="sales">Sales Inquiry</SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
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
                      <SelectItem value="low">Low - General inquiry</SelectItem>
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
                    placeholder="Please describe your query in detail..."
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
        </div>
      </section>

      {/* Popular Resources */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline">Popular Resources</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Most <span className="text-primary">Accessed Resources</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                type: "Guide",
                title: "StitchOS Implementation Guide",
                description:
                  "Complete step-by-step guide for implementing StitchOS in your manufacturing facility.",
                downloads: "2,340",
                readTime: "15 min",
              },
              {
                type: "Case Study",
                title: "40% Efficiency Improvement at ABC Textiles",
                description:
                  "Learn how ABC Textiles achieved remarkable efficiency gains using StitchOS quality control.",
                downloads: "1,890",
                readTime: "8 min",
              },
              {
                type: "White Paper",
                title: "The Future of Manufacturing Compliance",
                description:
                  "Industry insights on compliance trends and how digital solutions are transforming audits.",
                downloads: "1,560",
                readTime: "12 min",
              },
            ].map((resource, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary">{resource.type}</Badge>
                    <span className="text-sm text-muted-foreground">
                      {resource.readTime}
                    </span>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {resource.title}
                  </CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {resource.downloads} downloads
                    </span>
                    <Button variant="ghost" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
