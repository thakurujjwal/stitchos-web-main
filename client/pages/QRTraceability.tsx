import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
  QrCode,
  Package,
  Eye,
  Shield,
  Smartphone,
  Globe,
  Zap,
  Truck,
  Factory,
  Users,
  FileText,
  Camera,
  Link,
  Search,
  Database,
  Clock,
  MapPin,
  Scan,
} from "lucide-react";

export default function QRTraceability() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/10">
        <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
        <div className="container mx-auto px-4 py-24 sm:py-32 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="mb-4">
                <QrCode className="w-3 h-3 mr-1" />
                QR Traceability Module
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                Individual{" "}
                <span className="text-primary bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  Garment Tracking
                </span>{" "}
                with QR Codes
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Transform your supply chain transparency with our QR Unique
                Traceability system. Assign unique QR codes to each garment for
                comprehensive tracking from raw materials to final delivery, in
                accordance with Digital Passport standards.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group">
                Start QR Tracking
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* QR System Overview */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline">QR Traceability System</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Complete{" "}
              <span className="text-primary">Supply Chain Visibility</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our QR Unique Traceability system assigns a unique QR code to each
              garment, enabling comprehensive tracking throughout the supply
              chain and ensuring transparency and accountability.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">
                  Digital Passport for Every Garment
                </h3>
                <p className="text-lg text-muted-foreground">
                  Each garment receives a unique QR code that serves as its
                  digital passport, containing all relevant information about
                  its journey through the manufacturing process.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: QrCode,
                    title: "Unique QR Code Generation",
                    description:
                      "Generate unique QR codes for each individual garment with encrypted data",
                  },
                  {
                    icon: Eye,
                    title: "Real-Time Tracking",
                    description:
                      "Track garments in real-time through every stage of production and delivery",
                  },
                  {
                    icon: Shield,
                    title: "Digital Passport Compliance",
                    description:
                      "Fully compliant with Digital Passport standards for textile transparency",
                  },
                ].map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-600/20 rounded-3xl blur-3xl" />
              <Card className="relative bg-card border rounded-3xl p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">QR Code Example</h3>
                    <Badge variant="secondary">Live Scan</Badge>
                  </div>
                  <div className="flex flex-col items-center space-y-4">
                    <div className="w-48 h-48 bg-white rounded-xl border-2 border-dashed border-primary/30 flex items-center justify-center">
                      <QrCode className="w-32 h-32 text-primary/40" />
                    </div>
                    <div className="text-center space-y-2">
                      <p className="text-sm font-medium">
                        Garment ID: STX-2024-001247
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Scan to view complete garment history
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-lg font-bold text-primary">47</p>
                      <p className="text-xs text-muted-foreground">
                        Tracking Points
                      </p>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-primary">12</p>
                      <p className="text-xs text-muted-foreground">
                        Supply Chain Steps
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Traceability Journey */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline">Traceability Journey</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">
              From Raw Materials to{" "}
              <span className="text-primary">Final Delivery</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Track every step of your garment's journey with complete
              transparency and real-time updates.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {[
              {
                step: "01",
                title: "Raw Materials",
                description:
                  "Track fabric sourcing, material composition, and supplier information",
                icon: Package,
                details: [
                  "Fabric origin",
                  "Material composition",
                  "Supplier data",
                ],
              },
              {
                step: "02",
                title: "Cutting & Preparation",
                description:
                  "QR code assignment during cutting phase with pattern and batch tracking",
                icon: Camera,
                details: [
                  "QR code generation",
                  "Pattern tracking",
                  "Batch assignment",
                ],
              },
              {
                step: "03",
                title: "Production Line",
                description:
                  "Real-time tracking through sewing, assembly, and quality checkpoints",
                icon: Factory,
                details: [
                  "Sewing stages",
                  "Quality checks",
                  "Production line data",
                ],
              },
              {
                step: "04",
                title: "Quality & Finishing",
                description:
                  "Final quality inspections, finishing processes, and compliance verification",
                icon: Shield,
                details: [
                  "Final inspection",
                  "Finishing details",
                  "Compliance verification",
                ],
              },
              {
                step: "05",
                title: "Shipping & Delivery",
                description:
                  "Track shipping, logistics, and final delivery to end customer",
                icon: Truck,
                details: [
                  "Shipping tracking",
                  "Logistics data",
                  "Delivery confirmation",
                ],
              },
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center space-y-4">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                  <div className="space-y-1">
                    {step.details.map((detail, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="text-xs mr-1"
                      >
                        {detail}
                      </Badge>
                    ))}
                  </div>
                </div>
                {index < 4 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent transform translate-x-4 -translate-y-4" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline">Key Features</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Advanced{" "}
              <span className="text-primary">QR Traceability Features</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive features designed to provide complete supply chain
              transparency and traceability compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Smartphone,
                title: "Mobile Scanning",
                description:
                  "Easy mobile app scanning for instant access to garment information anywhere in the supply chain.",
                features: [
                  "Mobile app integration",
                  "Instant data access",
                  "Offline scanning capability",
                  "Multi-platform support",
                ],
              },
              {
                icon: Database,
                title: "Comprehensive Data Storage",
                description:
                  "Secure cloud storage of all garment data with real-time updates and complete history tracking.",
                features: [
                  "Cloud-based storage",
                  "Real-time updates",
                  "Complete history log",
                  "Data encryption",
                ],
              },
              {
                icon: Globe,
                title: "Global Compliance",
                description:
                  "Full compliance with international standards including Digital Passport and EU regulations.",
                features: [
                  "Digital Passport standard",
                  "EU regulation compliance",
                  "International standards",
                  "Audit trail support",
                ],
              },
              {
                icon: Link,
                title: "Supply Chain Integration",
                description:
                  "Seamless integration with suppliers, manufacturers, and retailers for complete visibility.",
                features: [
                  "Supplier integration",
                  "Retailer connectivity",
                  "API endpoints",
                  "Real-time sync",
                ],
              },
              {
                icon: Search,
                title: "Advanced Analytics",
                description:
                  "Powerful analytics and reporting tools for supply chain optimization and insights.",
                features: [
                  "Supply chain analytics",
                  "Performance metrics",
                  "Custom reports",
                  "Trend analysis",
                ],
              },
              {
                icon: Users,
                title: "Stakeholder Access",
                description:
                  "Role-based access control for different stakeholders including brands, suppliers, and customers.",
                features: [
                  "Role-based access",
                  "Customer transparency",
                  "Brand verification",
                  "Supplier tracking",
                ],
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline">Implementation</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Easy{" "}
              <span className="text-primary">QR Implementation Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get started with QR traceability in just a few simple steps with
              our guided implementation process.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  phase: "Setup Phase",
                  duration: "1-2 Weeks",
                  steps: [
                    "System configuration and integration",
                    "QR code format customization",
                    "User account setup and training",
                    "Mobile app deployment",
                  ],
                },
                {
                  phase: "Testing Phase",
                  duration: "1 Week",
                  steps: [
                    "Pilot batch QR code generation",
                    "Scanning functionality testing",
                    "Data flow verification",
                    "Staff training completion",
                  ],
                },
                {
                  phase: "Launch Phase",
                  duration: "Ongoing",
                  steps: [
                    "Full production deployment",
                    "Real-time monitoring activation",
                    "Stakeholder access provision",
                    "Continuous support and optimization",
                  ],
                },
                {
                  phase: "Optimization",
                  duration: "Continuous",
                  steps: [
                    "Performance monitoring and analytics",
                    "Process refinement and improvement",
                    "Feature updates and enhancements",
                    "Compliance verification and reporting",
                  ],
                },
              ].map((phase, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{phase.phase}</h3>
                      <p className="text-sm text-muted-foreground">
                        {phase.duration}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {phase.steps.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        {step}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline">Business Benefits</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Why Choose <span className="text-primary">QR Traceability?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Eye,
                number: "100%",
                label: "Supply Chain Visibility",
                sublabel:
                  "Complete transparency from raw materials to delivery",
              },
              {
                icon: Clock,
                number: "75%",
                label: "Faster Issue Resolution",
                sublabel:
                  "Quick identification and resolution of quality issues",
              },
              {
                icon: Shield,
                number: "99.9%",
                label: "Compliance Accuracy",
                sublabel: "Digital Passport and regulatory compliance",
              },
              {
                icon: Zap,
                number: "60%",
                label: "Efficiency Improvement",
                sublabel: "Streamlined tracking and reduced manual processes",
              },
            ].map((benefit, index) => (
              <Card key={index} className="text-center p-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {benefit.number}
                </div>
                <div className="text-lg font-semibold mb-1">
                  {benefit.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {benefit.sublabel}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Ready to Implement QR Traceability?
            </h2>
            <p className="text-xl text-blue-100">
              Transform your supply chain with individual garment tracking and
              Digital Passport compliance. Start your QR traceability journey
              today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="group">
                Start QR Implementation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Schedule QR Demo
              </Button>
            </div>
            <div className="flex items-center justify-center gap-6 pt-4">
              <span className="text-blue-100 text-sm">
                ✓ Digital Passport compliant
              </span>
              <span className="text-blue-100 text-sm">
                ✓ Individual garment tracking
              </span>
              <span className="text-blue-100 text-sm">
                ✓ Complete supply chain visibility
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
