import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  Award,
  FileCheck,
  Users,
  Target,
  TrendingUp,
  Clock,
  BookOpen,
  Settings,
  Globe,
  Clipboard,
  Zap,
  Building,
  ChevronRight,
  Star,
  Calendar,
  BriefcaseIcon,
  GraduationCap,
  Network,
  Search,
  HandHeart,
  BarChart3,
  CheckSquare,
} from "lucide-react";

export default function QMSConsultancy() {
  return (
    <div className="bg-background">
      {/* Tabs Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="qms" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-lg mx-auto mb-12">
              <TabsTrigger value="qms" className="text-base">
                QMS Consultancy
              </TabsTrigger>
              <TabsTrigger value="placement" className="text-base">
                Placement Consultancy
              </TabsTrigger>
            </TabsList>

            {/* QMS Consultancy Tab */}
            <TabsContent value="qms"></TabsContent>

            {/* Placement Consultancy Tab */}
            <TabsContent value="placement">
              {/* Placement Services Overview */}
              <section className="py-16 bg-muted/30">
                <div className="container mx-auto px-4">
                  <div className="text-center space-y-4 mb-16">
                    <Badge variant="outline">Placement Services</Badge>
                    <h2 className="text-3xl lg:text-4xl font-bold">
                      Professional{" "}
                      <span className="text-primary">
                        Placement Consultancy
                      </span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                      Expert career guidance and placement services for
                      manufacturing, quality, and technical professionals in the
                      textile and apparel industry.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                      {
                        icon: BriefcaseIcon,
                        title: "Executive Placement",
                        description:
                          "Senior leadership and management positions in manufacturing.",
                        specialties: [
                          "Plant Managers",
                          "Quality Directors",
                          "Operations Heads",
                          "General Managers",
                        ],
                      },
                      {
                        icon: Users,
                        title: "Technical Positions",
                        description:
                          "Specialized technical roles in quality, production, and engineering.",
                        specialties: [
                          "Quality Engineers",
                          "Production Managers",
                          "Technical Specialists",
                          "Process Engineers",
                        ],
                      },
                      {
                        icon: GraduationCap,
                        title: "Career Development",
                        description:
                          "Professional development and career advancement guidance.",
                        specialties: [
                          "Career Counseling",
                          "Skill Assessment",
                          "Interview Preparation",
                          "Career Planning",
                        ],
                      },
                      {
                        icon: Network,
                        title: "Industry Network",
                        description:
                          "Extensive network across textile and apparel manufacturing.",
                        specialties: [
                          "Leading Brands",
                          "Export Houses",
                          "Manufacturing Units",
                          "Quality Labs",
                        ],
                      },
                      {
                        icon: Search,
                        title: "Talent Acquisition",
                        description:
                          "Comprehensive recruitment services for companies.",
                        specialties: [
                          "Executive Search",
                          "Technical Hiring",
                          "Bulk Recruitment",
                          "Contract Staffing",
                        ],
                      },
                      {
                        icon: HandHeart,
                        title: "Industry Expertise",
                        description:
                          "Deep understanding of textile and apparel industry requirements.",
                        specialties: [
                          "Quality Systems",
                          "Production Planning",
                          "Compliance",
                          "Technical Standards",
                        ],
                      },
                    ].map((service, index) => (
                      <Card
                        key={index}
                        className="group hover:shadow-lg transition-all duration-300"
                      >
                        <CardHeader>
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                            <service.icon className="w-6 h-6 text-primary" />
                          </div>
                          <CardTitle className="text-xl">
                            {service.title}
                          </CardTitle>
                          <CardDescription>
                            {service.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {service.specialties.map((specialty, idx) => (
                              <li
                                key={idx}
                                className="flex items-center gap-2 text-sm"
                              >
                                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                                {specialty}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </section>

              {/* Placement Process & Benefits */}
              <section className="py-16">
                <div className="container mx-auto px-4">
                  <div className="grid lg:grid-cols-2 gap-12">
                    {/* Process */}
                    <div className="space-y-6">
                      <Badge variant="outline">Placement Process</Badge>
                      <h3 className="text-3xl font-bold">
                        Structured{" "}
                        <span className="text-primary">Placement Approach</span>
                      </h3>
                      <p className="text-muted-foreground">
                        Our proven methodology ensures successful placements
                        with the right cultural and technical fit for both
                        candidates and companies.
                      </p>
                      <div className="space-y-4">
                        {[
                          "Requirement Analysis & Job Profiling",
                          "Candidate Sourcing & Screening",
                          "Skills Assessment & Interview",
                          "Client Presentation & Selection",
                          "Offer Negotiation & Closure",
                          "Post-Placement Support & Follow-up",
                        ].map((step, index) => (
                          <div key={index} className="flex items-center gap-4">
                            <div className="w-8 h-8 rounded-full bg-primary text-white text-sm flex items-center justify-center font-semibold">
                              {index + 1}
                            </div>
                            <span className="text-sm font-medium">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Benefits & Stats */}
                    <div className="space-y-6">
                      <Badge variant="outline">Success Metrics</Badge>
                      <h3 className="text-3xl font-bold">
                        Proven{" "}
                        <span className="text-primary">Track Record</span>
                      </h3>
                      <div className="space-y-6">
                        <Card className="p-6 bg-gradient-to-br from-primary/5 to-blue-600/5">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="text-center">
                              <div className="text-2xl font-bold text-primary">
                                500+
                              </div>
                              <div className="text-sm text-muted-foreground">
                                Successful Placements
                              </div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-primary">
                                95%
                              </div>
                              <div className="text-sm text-muted-foreground">
                                Client Satisfaction
                              </div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-primary">
                                15+
                              </div>
                              <div className="text-sm text-muted-foreground">
                                Years Experience
                              </div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-primary">
                                200+
                              </div>
                              <div className="text-sm text-muted-foreground">
                                Partner Companies
                              </div>
                            </div>
                          </div>
                        </Card>

                        <div className="space-y-4">
                          <h4 className="font-semibold">
                            Industry Expertise Areas:
                          </h4>
                          <div className="grid grid-cols-2 gap-2">
                            {[
                              "Textile Manufacturing",
                              "Apparel Production",
                              "Quality Assurance",
                              "Export Operations",
                              "Compliance & Auditing",
                              "Technical Services",
                            ].map((area, idx) => (
                              <Badge
                                key={idx}
                                variant="secondary"
                                className="justify-start"
                              >
                                {area}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="pt-4">
                          <a
                            href="https://www.linkedin.com/in/anupam-kuumar-70555425/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary/80 text-sm font-medium flex items-center gap-2"
                          >
                            <Network className="w-4 h-4" />
                            Connect on LinkedIn for Professional Network
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* StitchOS Continuous Monitoring Section */}
      <section>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <Badge variant="outline">Digital QMS Monitoring</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold">
                StitchOS Continuous Monitoring in{" "}
                <span className="text-primary">QMS Framework</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                How StitchOS supports continuous monitoring within the QMS
                consultancy framework led by Anupam Kumar for apparel
                manufacturing units.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <Card className="p-6 bg-gradient-to-br from-primary/5 to-blue-600/5">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      QMS Consultancy by:
                    </h3>
                    <p className="text-primary font-medium">Anupam Kumar</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-blue-600/5 to-primary/5">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-600/10 flex items-center justify-center">
                    <Settings className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      Digital Monitoring Partner:
                    </h3>
                    <p className="text-blue-600 font-medium">StitchOS</p>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-8 mb-12">
              <h3 className="text-2xl font-bold mb-6">Overview</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                While the QMS system is designed and implemented under the
                expert guidance of{" "}
                <span className="font-semibold text-primary">Anupam Kumar</span>
                , StitchOS acts as the{" "}
                <span className="font-semibold text-blue-600">
                  digital backbone
                </span>{" "}
                for{" "}
                <span className="font-semibold">
                  real-time monitoring, performance tracking, and long-term
                  sustainability
                </span>{" "}
                of quality standards in the apparel manufacturing process.
              </p>
            </Card>

            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-center mb-8">
                Key Ways StitchOS Helps in Continuous QMS Monitoring
              </h3>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    icon: Shield,
                    title: "Real-Time Quality Data Capture",
                    features: [
                      "Live data entry from inspection points (inline, end-line, final)",
                      "Defects, pass/fail rates, and rework data captured on production floor",
                      "Mobile or tablet-based data collection system",
                    ],
                  },
                  {
                    icon: TrendingUp,
                    title: "Digital Dashboards & Analytics",
                    features: [
                      "Visual dashboards show real-time quality KPIs (DHU%, First Pass Rate)",
                      "Rejection trends and performance metrics",
                      "Managers can instantly identify bottlenecks or recurring issues",
                    ],
                  },
                  {
                    icon: Zap,
                    title: "Automated Alerts & Notifications",
                    features: [
                      "Immediate alerts for defect thresholds and CAP delays",
                      "Audit due date notifications",
                      "Reduces response time to quality issues",
                    ],
                  },
                  {
                    icon: FileCheck,
                    title: "Centralized Document Management",
                    features: [
                      "QMS documents (SOPs, policies, checklists) available digitally",
                      "Ensures staff access to latest approved versions",
                      "Version control and document tracking",
                    ],
                  },
                  {
                    icon: Target,
                    title: "CAP & RCA Tracking",
                    features: [
                      "Non-conformances logged with corrective action plans",
                      "Root Cause Analysis (RCA) workflows",
                      "Issues addressed at source with tracking",
                    ],
                  },
                  {
                    icon: Clipboard,
                    title: "Digital Audit Management",
                    features: [
                      "Internal and brand audits scheduled and executed digitally",
                      "Audit reports, scoring, and compliance logs stored",
                      "Follow-up tracking and reference management",
                    ],
                  },
                  {
                    icon: BookOpen,
                    title: "Training & Compliance Logs",
                    features: [
                      "Training modules and quizzes for ongoing development",
                      "Tracks staff training on SOPs and brand standards",
                      "Compliance certification tracking",
                    ],
                  },
                  {
                    icon: Globe,
                    title: "Buyer & Management Visibility",
                    features: [
                      "Optional dashboard access for buyers and senior management",
                      "Transparency in supply chain operations",
                      "Builds trust and accountability",
                    ],
                  },
                ].map((item, index) => (
                  <Card
                    key={index}
                    className="p-6 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold mb-3">
                          {item.title}
                        </h4>
                        <ul className="space-y-2">
                          {item.features.map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="p-8 mt-12 bg-gradient-to-r from-primary/5 to-blue-600/5">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Benefit Summary
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Clock,
                    title: "24/7 Monitoring",
                    description:
                      "Enables continuous monitoring of production quality",
                  },
                  {
                    icon: Award,
                    title: "Brand Compliance",
                    description:
                      "Helps maintain brand compliance continuously beyond audits",
                  },
                  {
                    icon: BarChart3,
                    title: "Data-Driven Decisions",
                    description:
                      "Supports data-driven decision-making processes",
                  },
                  {
                    icon: CheckSquare,
                    title: "Audit Readiness",
                    description:
                      "Reduces manual errors and improves audit readiness",
                  },
                  {
                    icon: TrendingUp,
                    title: "Sustained Effectiveness",
                    description:
                      "Ensures sustained QMS effectiveness after initial consultancy",
                  },
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{benefit.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Expert Profile Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline">Meet Our Expert</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Led by <span className="text-primary">Industry Expert</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our consultancy services are led by an experienced professional
              with deep expertise in quality management systems and textile
              industry placement.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden border-0 shadow-xl">
              <div className="grid lg:grid-cols-3 gap-0">
                {/* Profile Image & Basic Info */}
                <div className="lg:col-span-1 bg-gradient-to-br from-primary/10 to-blue-600/10 p-8 flex flex-col items-center text-center">
                  <div className="w-32 h-32 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                    <Users className="w-16 h-16 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Anupam Kumar</h3>
                  <div className="text-primary font-semibold mb-4">
                    <h3
                      style={{
                        fontSize: "1.17em",
                        color: "rgb(51, 51, 51)",
                        fontFamily: "Helvetica, Arial, sans-serif",
                        textAlign: "left",
                        backgroundColor: "rgb(245, 245, 245)",
                      }}
                    >
                      <strong>Anupam Kumar – QMS Consultant</strong>
                    </h3>
                    <p
                      style={{
                        marginTop: "10px",
                        marginBottom: "10px",
                        color: "rgb(51, 51, 51)",
                        fontFamily: "Helvetica, Arial, sans-serif",
                        fontSize: "13px",
                        fontWeight: "400",
                        textAlign: "left",
                        backgroundColor: "rgb(245, 245, 245)",
                      }}
                    >
                      With a Master's in Fashion Technology from NIFT, Anupam
                      brings deep expertise in apparel quality systems and
                      digital transformation. He has led quality assurance and
                      manufacturing operations across top apparel exporters and
                      global retail sourcing offices.
                    </p>
                    <p
                      style={{
                        marginTop: "10px",
                        marginBottom: "10px",
                        color: "rgb(51, 51, 51)",
                        fontFamily: "Helvetica, Arial, sans-serif",
                        fontSize: "13px",
                        fontWeight: "400",
                        textAlign: "left",
                        backgroundColor: "rgb(245, 245, 245)",
                      }}
                    >
                      <strong>Expertise:</strong>
                    </p>
                    <ul
                      style={{
                        paddingLeft: "1.5em",
                        color: "rgb(51, 51, 51)",
                        fontFamily: "Helvetica, Arial, sans-serif",
                        fontSize: "13px",
                        fontWeight: "400",
                        textAlign: "left",
                        backgroundColor: "rgb(245, 245, 245)",
                      }}
                    >
                      <li
                        style={{ listStyleType: "none", paddingLeft: "1.5em" }}
                      >
                        Apparel 4.0 & TQM
                      </li>
                      <li
                        style={{ listStyleType: "none", paddingLeft: "1.5em" }}
                      >
                        IoT-enabled quality systems
                      </li>
                      <li
                        style={{ listStyleType: "none", paddingLeft: "1.5em" }}
                      >
                        Real-time analytics
                      </li>
                      <li
                        style={{ listStyleType: "none", paddingLeft: "1.5em" }}
                      >
                        Operational efficiency in garment manufacturing
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground"></div>
                  <div className="mt-6">
                    <Button variant="outline" className="w-full">
                      <a
                        href="https://www.linkedin.com/in/anupam-kuumar-70555425/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Network className="w-4 h-4" />
                        <h5>
                          https://www.linkedin.com/in/anupam-kuumar-70555425/
                        </h5>
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Expertise & Experience */}
                <div className="lg:col-span-2 p-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold mb-3">
                        Professional Expertise
                      </h4>
                      <p className="text-muted-foreground mb-4">
                        With extensive experience in quality management systems
                        and textile industry operations, Anupam Kumar brings
                        deep expertise in both technical QMS implementation and
                        strategic placement consultancy for manufacturing
                        professionals.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-semibold mb-3 flex items-center gap-2">
                          <Award className="w-5 h-5 text-primary" />
                          QMS Specializations
                        </h5>
                        <ul className="space-y-2 text-sm">
                          {[
                            "ISO 9001:2015 Implementation",
                            "Quality System Documentation",
                            "Process Optimization & Control",
                            "Internal Audit Training",
                            "Compliance Management",
                            "Continuous Improvement Programs",
                          ].map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-semibold mb-3 flex items-center gap-2">
                          <BriefcaseIcon className="w-5 h-5 text-primary" />
                          Placement Expertise
                        </h5>
                        <ul className="space-y-2 text-sm">
                          {[
                            "Executive Search & Placement",
                            "Technical Position Matching",
                            "Career Development Guidance",
                            "Industry Network Utilization",
                            "Talent Acquisition Strategy",
                            "Professional Skill Assessment",
                          ].map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="border-t pt-6">
                      <h5 className="font-semibold mb-3">
                        Industry Focus Areas
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Textile Manufacturing",
                          "Apparel & Garment Production",
                          "Quality Assurance Systems",
                          "Export Operations",
                          "Compliance & Auditing",
                          "Supply Chain Management",
                          "Production Planning",
                          "Technical Services",
                        ].map((area, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="text-xs"
                          >
                            {area}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="border-t pt-6">
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-primary">
                            15+
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Years Experience
                          </div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-primary">
                            150+
                          </div>
                          <div className="text-xs text-muted-foreground">
                            QMS Implementations
                          </div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-primary">
                            500+
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Successful Placements
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border-t pt-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h5 className="font-semibold">
                            Professional Approach
                          </h5>
                          <p className="text-sm text-muted-foreground">
                            Committed to delivering customized solutions that
                            align with industry best practices and
                            organizational objectives.
                          </p>
                        </div>
                        <div className="text-4xl">🎯</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Ready to Transform Your Operations or Career?
            </h2>
            <p className="text-xl text-blue-100">
              Whether you need QMS implementation or professional placement
              services, our expert consultants are ready to guide your journey
              to success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="group">
                <a href="/contact" className="flex items-center">
                  Start Consultation
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                <a href="mailto:anupam@stitchos.com?subject=Consultancy%20Meeting%20Request">
                  Schedule Meeting
                </a>
              </Button>
            </div>
            <div className="flex items-center justify-center gap-6 pt-4">
              <span className="text-blue-100 text-sm">
                ✓ Free initial consultation
              </span>
              <span className="text-blue-100 text-sm">
                ✓ Industry expertise
              </span>
              <span className="text-blue-100 text-sm">
                ✓ Proven success record
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
