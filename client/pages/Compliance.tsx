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
  Shield,
  FileCheck,
  Users,
  Award,
  Factory,
  Clipboard,
  Search,
  BookOpen,
  AlertTriangle,
  CheckSquare,
  FileText,
  Clock,
  Scale,
  Target,
} from "lucide-react";

export default function Compliance() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/10">
        <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
        <div className="container mx-auto px-4 py-24 sm:py-32 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="mb-4">
                <Shield className="w-3 h-3 mr-1" />
                Compliance & Audit Management
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                Factory{" "}
                <span className="text-primary bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  Technical Compliance
                </span>{" "}
                & Social Audits
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive factory technical compliance management with QMS
                audits by brands and social compliance auditing to ensure the
                highest standards across all manufacturing operations.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group">
                Start Compliance Audit
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Compliance Areas */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline">Core Compliance Areas</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Comprehensive{" "}
              <span className="text-primary">Audit Management</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized audit management covering factory technical
              compliance, Quality Management System (QMS) audits by brands, and
              social compliance requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur">
              <CardHeader className="pb-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Factory className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl mb-3">
                  Factory Technical Compliance / QMS Audit by Brand
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Comprehensive technical compliance auditing including Quality
                  Management System (QMS) audits conducted by brands to ensure
                  manufacturing excellence and adherence to technical standards.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <h4 className="font-semibold mb-3">Key Areas Covered:</h4>
                  <ul className="space-y-3">
                    {[
                      "Production process validation and control",
                      "Quality Management System (QMS) assessment",
                      "Technical specification compliance",
                      "Manufacturing capability evaluation",
                      "Process documentation and control",
                      "Equipment calibration and maintenance",
                      "Product quality consistency checks",
                      "Corrective and preventive actions (CAPA)",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur">
              <CardHeader className="pb-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl mb-3">Social Audit</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Comprehensive social compliance auditing to ensure ethical
                  manufacturing practices, worker welfare, and adherence to
                  international labor standards and regulations.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <h4 className="font-semibold mb-3">Key Areas Covered:</h4>
                  <ul className="space-y-3">
                    {[
                      "Worker rights and labor law compliance",
                      "Workplace safety and health standards",
                      "Working hours and overtime regulations",
                      "Wage and benefit compliance",
                      "Child labor and forced labor prevention",
                      "Discrimination and harassment policies",
                      "Freedom of association rights",
                      "Environmental and sustainability practices",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Audit Process Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline">Audit Process</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Systematic <span className="text-primary">Audit Workflow</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Follow our comprehensive audit process from initial assessment to
              compliance certification and continuous improvement.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Pre-Audit Assessment",
                description:
                  "Comprehensive evaluation of factory readiness including documentation review and preliminary compliance check.",
                icon: Clipboard,
                metrics: ["Documentation review", "Readiness assessment"],
              },
              {
                step: "02",
                title: "On-Site Audit",
                description:
                  "Detailed on-site inspection covering technical processes, social compliance, and QMS implementation.",
                icon: Search,
                metrics: ["Physical inspection", "Process evaluation"],
              },
              {
                step: "03",
                title: "Findings & Analysis",
                description:
                  "Comprehensive analysis of audit findings with detailed reporting and classification of non-conformances.",
                icon: FileText,
                metrics: ["Finding classification", "Risk assessment"],
              },
              {
                step: "04",
                title: "Corrective Actions",
                description:
                  "Implementation of corrective action plans with timeline monitoring and follow-up audits.",
                icon: Target,
                metrics: ["Action planning", "Progress tracking"],
              },
            ].map((process, index) => (
              <div key={index} className="relative">
                <div className="text-center space-y-4">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <process.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center">
                      {process.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold">{process.title}</h3>
                  <p className="text-muted-foreground">{process.description}</p>
                  <div className="space-y-1">
                    {process.metrics.map((metric, idx) => (
                      <Badge key={idx} variant="secondary" className="mr-2">
                        {metric}
                      </Badge>
                    ))}
                  </div>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent transform translate-x-4 -translate-y-4" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit Features Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline">Audit Features</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Advanced{" "}
              <span className="text-primary">Audit Management Tools</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Streamline your audit processes with digital tools, automated
              reporting, and comprehensive tracking systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FileCheck,
                title: "Digital Audit Checklists",
                description:
                  "Comprehensive digital checklists for both technical and social audits with real-time data capture.",
                features: [
                  "Customizable checklists",
                  "Real-time data entry",
                  "Photo documentation",
                  "GPS location tracking",
                ],
              },
              {
                icon: Scale,
                title: "Compliance Scoring",
                description:
                  "Automated compliance scoring system with weighted criteria and benchmark comparisons.",
                features: [
                  "Weighted scoring matrix",
                  "Benchmark comparisons",
                  "Historical tracking",
                  "Performance analytics",
                ],
              },
              {
                icon: BookOpen,
                title: "Audit Documentation",
                description:
                  "Centralized audit documentation management with version control and access management.",
                features: [
                  "Document management",
                  "Version control",
                  "Access permissions",
                  "Audit trail logging",
                ],
              },
              {
                icon: AlertTriangle,
                title: "Non-Conformance Management",
                description:
                  "Systematic tracking and management of non-conformances with corrective action planning.",
                features: [
                  "Issue classification",
                  "Root cause analysis",
                  "Action planning",
                  "Timeline tracking",
                ],
              },
              {
                icon: Clock,
                title: "Audit Scheduling",
                description:
                  "Automated audit scheduling with calendar integration and notification systems.",
                features: [
                  "Calendar integration",
                  "Automated reminders",
                  "Resource allocation",
                  "Conflict management",
                ],
              },
              {
                icon: Award,
                title: "Certification Tracking",
                description:
                  "Track and manage certifications, renewals, and compliance status across all facilities.",
                features: [
                  "Certification database",
                  "Renewal tracking",
                  "Status monitoring",
                  "Compliance reporting",
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

      {/* Compliance Benefits Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline">Audit Benefits</Badge>
                <h2 className="text-3xl lg:text-4xl font-bold">
                  Achieve <span className="text-primary">Audit Excellence</span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  Maintain the highest standards of compliance while reducing
                  audit overhead and ensuring continuous improvement across
                  technical and social aspects.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Shield,
                    title: "98.5% Audit Success Rate",
                    description:
                      "Consistently high audit success rates across technical and social compliance audits",
                  },
                  {
                    icon: CheckSquare,
                    title: "Proactive Compliance Management",
                    description:
                      "Identify and address compliance gaps before they become audit findings",
                  },
                  {
                    icon: Users,
                    title: "Enhanced Worker Welfare",
                    description:
                      "Improved workplace conditions and worker satisfaction through systematic social auditing",
                  },
                ].map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {benefit.description}
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
                    <h3 className="text-xl font-semibold">Audit Dashboard</h3>
                    <Badge variant="secondary">Live Status</Badge>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        Overall Audit Score
                      </span>
                      <span className="text-2xl font-bold text-primary">
                        98.5%
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full"
                        style={{ width: "98.5%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      {
                        label: "Active Audits",
                        value: "5",
                        change: "In Progress",
                      },
                      {
                        label: "Technical Score",
                        value: "99.1%",
                        change: "+1.2%",
                      },
                      {
                        label: "Social Score",
                        value: "97.8%",
                        change: "+0.8%",
                      },
                      {
                        label: "Pending Actions",
                        value: "2",
                        change: "On Track",
                      },
                    ].map((metric, idx) => (
                      <div key={idx} className="space-y-1">
                        <p className="text-xs text-muted-foreground">
                          {metric.label}
                        </p>
                        <p className="text-lg font-bold">{metric.value}</p>
                        <p className="text-xs text-success-700">
                          {metric.change}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Ready to Streamline Your Audit Process?
            </h2>
            <p className="text-xl text-blue-100">
              Transform your compliance management with comprehensive technical
              and social audit tools. Ensure excellence across all aspects of
              your manufacturing operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="group">
                Start Audit Management
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Schedule Audit Demo
              </Button>
            </div>
            <div className="flex items-center justify-center gap-6 pt-4">
              <span className="text-blue-100 text-sm">✓ 14-day free trial</span>
              <span className="text-blue-100 text-sm">
                ✓ Complete audit suite
              </span>
              <span className="text-blue-100 text-sm">
                ✓ Expert audit support
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
