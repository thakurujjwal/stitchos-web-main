import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Menu,
  X,
  ChevronDown,
  Play,
  Factory,
  Shield,
  TrendingUp,
  Users,
  Globe,
  BookOpen,
  Phone,
  MessageSquare,
  Scissors,
  FileCheck,
  Activity,
  Timer,
  Package,
  Search,
  FileText,
  BarChart3,
  AlertTriangle,
  Thermometer,
  Settings,
  Calendar,
  QrCode,
  CheckCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

const solutions = [
  {
    title: "Cutting & Spreading Audit",
    description: "Real-time KPI tracking for cutting processes",
    icon: Scissors,
    href: "/solutions/quality",
  },
  {
    title: "Fabric 4-Point Inspection",
    description: "Industry-standard fabric quality control",
    icon: FileCheck,
    href: "/solutions/quality",
  },
  {
    title: "Sewing Production & Quality",
    description: "Live production monitoring with QR traceability",
    icon: Activity,
    href: "/solutions/quality",
  },
  {
    title: "Sewing Non-Performance Time",
    description: "Downtime tracking and analysis",
    icon: Timer,
    href: "/solutions/quality",
  },
  {
    title: "Finishing Production & Quality",
    description: "End-to-end finishing operations visibility",
    icon: Package,
    href: "/solutions/quality",
  },
  {
    title: "Inline/Midline/Final/PPM Inspection",
    description: "Comprehensive inspection stages",
    icon: Search,
    href: "/solutions/quality",
  },
  {
    title: "Order Completion Report",
    description: "End-to-end order execution tracking",
    icon: FileText,
    href: "/solutions/quality",
  },
  {
    title: "Daily Production Report",
    description: "Real-time production progress monitoring",
    icon: BarChart3,
    href: "/solutions/quality",
  },
  {
    title: "TSL Smart Flagging System",
    description: "Roving QC traffic light system",
    icon: AlertTriangle,
    href: "/solutions/quality",
  },
  {
    title: "Metal Detection & Calibration",
    description: "Product safety monitoring",
    icon: Shield,
    href: "/solutions/quality",
  },
  {
    title: "IoT Temperature & Humidity Monitoring",
    description: "Environmental tracking",
    icon: Thermometer,
    href: "/solutions/quality",
  },
  {
    title: "Factory QMS Compliance",
    description: "Centralized compliance auditing",
    icon: Factory,
    href: "/solutions/compliance",
  },
  {
    title: "AQL Inspection – Sewing & Finishing",
    description: "Buyer-standard quality control",
    icon: CheckCircle,
    href: "/solutions/quality",
  },
  {
    title: "Automated TNA (Time and Action)",
    description: "Production milestone planning",
    icon: Calendar,
    href: "/solutions/quality",
  },
  {
    title: "Machine Maintenance & Breakdown",
    description: "Real-time machine management",
    icon: Settings,
    href: "/solutions/quality",
  },
  {
    title: "Digital Product Passport & QR Traceability",
    description: "Full lifecycle traceability",
    icon: QrCode,
    href: "/solutions/qr-traceability",
  },
];

const resources = [
  {
    title: "Blogs",
    description: "Industry insights and updates",
    icon: BookOpen,
    href: "/blogs",
  },
  {
    title: "Learning Materials",
    description: "Tutorials and training resources",
    icon: MessageSquare,
    href: "/learning",
  },
  {
    title: "Case Studies",
    description: "Success stories from our customers",
    icon: Globe,
    href: "/case-studies",
  },
  {
    title: "Support Center",
    description: "Get help and support",
    icon: MessageSquare,
    href: "/support",
  },
];

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fa640d3428824492894149a9c3f5371a9%2F5d1034ba8c644670a346dba8eebdab01?format=webp&width=800"
              alt="StitchOS Logo"
              className="w-8 h-8"
            />
            <span className="text-xl font-bold">
              <h1>
                <span style={{ color: "rgb(84, 151, 247)" }}>StitchOS</span>
              </h1>
            </span>
            <Badge variant="secondary" className="hidden sm:inline-flex">
              v2.0
            </Badge>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/"
                  className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
                  )}
                >
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem >
                <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                  <NavigationMenuContent className="absolute left-0 max-h-[80vh] overflow-auto">
                      <div className="grid w-[750px] gap-3 p-6 md:grid-cols-3">

                    {solutions.map((solution) => (
                      <NavigationMenuLink
                        key={solution.title}
                        href={solution.href}
                        className={cn(
                          "block select-none rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        )}
                      >
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <solution.icon className="w-5 h-5 text-primary" />
                            <div className="text-sm font-medium leading-tight">
                              {solution.title}
                            </div>
                          </div>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {solution.description}
                          </p>
                        </div>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/contact"
                  className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
                  )}
                >
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
               <NavigationMenuItem>
                <NavigationMenuLink
                  href="/about"
                  className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
                  )}
                >
                  About Us
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-3">
            {/* <Button variant="ghost" size="sm">
              <a href="#login">Log in</a>
            </Button>
            <Button variant="outline" size="sm">
              <a href="#subscription">Subscribe</a>
            </Button> */}
            <Button size="sm" className="group">
              <a
                href="mailto:admin@stitchos.com?subject=Try%20Demo"
                className="flex items-center"
              >
                <Play className="w-3 h-3 mr-1" />
                Try Demo
              </a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="flex items-center space-x-2 text-left">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fa640d3428824492894149a9c3f5371a9%2F5d1034ba8c644670a346dba8eebdab01?format=webp&width=800"
                    alt="StitchOS Logo"
                    className="w-6 h-6"
                  />
                  <span>StitchOS</span>
                </SheetTitle>
              </SheetHeader>
              <div className="grid gap-6 py-6">
                <div className="space-y-3">
                  <h4 className="font-medium">Solutions</h4>
                  <div className="grid gap-2" >
                    {solutions.map((solution) => (
                      <a
                        key={solution.title}
                        href={solution.href}
                        className="flex items-center space-x-3 p-2 rounded-md hover:bg-accent"
                      >
                        <solution.icon className="w-4 h-4 text-primary" />
                        <span className="text-sm">{solution.title}</span>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <a
                    href="/"
                    className="block p-2 rounded-md hover:bg-accent text-sm font-medium"
                  >
                    Home
                  </a>
                  <a
                    href="/pricing"
                    className="block p-2 rounded-md hover:bg-accent text-sm font-medium"
                  >
                    Pricing
                  </a>
                  <a
                    href="/contact"
                    className="block p-2 rounded-md hover:bg-accent text-sm font-medium"
                  >
                    Contact
                  </a>
                </div>

                <div className="space-y-3 pt-6 border-t">
                  <Button variant="outline" className="w-full">
                    <a href="#login">Log in</a>
                  </Button>
                  <Button variant="outline" className="w-full">
                    <a href="#subscription">Subscribe</a>
                  </Button>
                  <Button className="w-full">
                    <a
                      href="mailto:admin@stitchos.com?subject=Try%20Demo"
                      className="flex items-center justify-center"
                    >
                      <Play className="w-3 h-3 mr-1" />
                      Try Demo
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
