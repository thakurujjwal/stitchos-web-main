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
  Play,
  Zap,
  Shield,
  TrendingUp,
  Users,
  Factory,
  Globe,
  Star,
  Award,
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
} from "lucide-react";

export default function Index() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/10">
        <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
        <div className="container mx-auto px-4 py-24 sm:py-32 relative">
          <div className="max-w-6xl mx-auto text-center space-y-8">
            <div className="space-y-6">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight">
                <span className="bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent">
                  StitchOS
                </span>
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
                Manufacturing with Quality at Every Stitch
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto mt-4">
                Complete Manufacturing Execution system covering every aspect of
                manufacturing from Fabric to Final delivery with real-time
                monitoring and traceability.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group">
                <a
                  href="mailto:admin@stitchos.com?subject=Start%20Free%20Trial"
                  className="flex items-center"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="group">
                <a
                  href="mailto:admin@stitchos.com?subject=Watch%20Demo"
                  className="flex items-center"
                >
                  <Play className="mr-2 h-4 w-4" />
                  Watch Demo
                </a>
              </Button>
            </div>

            <div className="mt-12 flex justify-center">
              <Badge variant="outline" className="text-lg px-6 py-2">
                Trusted by Leading Apparel Manufacturers
              </Badge>
            </div>
          </div>

          <div className="mt-16 max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-600/20 rounded-3xl blur-3xl" />
              <div className="relative bg-card border rounded-3xl p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">Production Dashboard</h3>
                    <Badge variant="secondary">Live</Badge>
                  </div>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                      { label: "Efficiency", value: "94.2%" },
                      {
                        label: "Right First Time",
                        value: "98.7%",
                      },
                      { label: "Output Today", value: "1,247", trend: "+12%" },
                      { label: "Defect Rate", value: "0.8%", trend: "-0.3%" },
                    ].map((metric) => (
                      <div key={metric.label} className="space-y-2">
                        <p className="text-sm text-muted-foreground">
                          {metric.label}
                        </p>
                        <p className="text-2xl font-bold">{metric.value}</p>
                        {metric.trend && (
                          <p className="text-sm text-success-700">
                            {metric.trend}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 16 Comprehensive Quality Modules Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline">Comprehensive MES Modules</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">
              16 Advanced{" "}
              <span className="text-primary">Production & Quality Modules</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete Manufacturing Execution system covering every aspect of
              manufacturing from Fabric to Final delivery with real-time
              monitoring and traceability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              {
                icon: Scissors,
                title: "Cutting & Spreading Audit",
                description:
                  "Real-time visibility and quality control in the cutting and spreading process through automated KPI tracking.",
                features: [
                  "Cut Quantity Accuracy",
                  "Wastage Percentage Monitoring",
                  "DHU (Defects per Hundred Units)",
                  "Defect Category Analysis",
                  "Yield Efficiency",
                  "PO & Style-Level Traceability",
                  "Real-time Dashboard Integration",
                  "Manpower Utilization Insight",
                ],
              },
              {
                icon: FileCheck,
                title: "Fabric 4-Point Inspection",
                description:
                  "Industry-standard 4-point system to ensure fabric rolls meet buyer quality expectations before cutting.",
                features: [
                  "Roll-wise Inspection & Traceability",
                  "Width & GSM Deviation Check",
                  "Penalty Points Calculation per 100 Sq. Yards",
                  "Defect Type Categorization",
                  "Shade & Color Variation Monitoring",
                  "Fabric Status: Pass/Fail by Roll",
                  "Automated Grading Based on Point Threshold",
                  "Fabric Source, PO & Style Linkage",
                ],
              },
              {
                icon: Activity,
                title: "Sewing Production & Quality",
                description:
                  "Live visibility into production, WIP tracking, and quality control, all traceable down to the operator level through QR-coded workflows.",
                features: [
                  "Real-Time Production Monitoring",
                  "Sewing Line Loading & Daily Output Tracking",
                  "Live Sew WIP Status",
                  "Finish-to-Sew WIP Balancing & Monitoring",
                  "Rejection Capture with Root Cause Classification",
                  "Lost & Missing Pieces Detection",
                  "Defect-Level Quality KPIs",
                  "Inline & Endline Quality Data Capture",
                ],
              },
              {
                icon: Timer,
                title: "Sewing Non-Performance Time",
                description:
                  "Track and analyze production downtime across sewing lines, helping factories reduce inefficiencies and improve line balancing.",
                features: [
                  "Line-wise NPT Monitoring (Minutes & %)",
                  "Root Cause Breakdown of Downtime",
                  "Machine & Needle Breakdown Capture",
                  "Power & Air Supply Issue Tracking",
                  "Feeding, Trim & Accessory Shortage Logging",
                  "Sewing Quality-Related Downtime Recording",
                  "Line Setting / Changeover Time Capture",
                  "Starting Delays and Idle Time Monitoring",
                ],
              },
              {
                icon: Package,
                title: "Finishing Production & Quality",
                description:
                  "End-to-end visibility of finishing operations, capturing production output, defects, and quality metrics.",
                features: [
                  "Finished Quantity Tracking by PO & Style",
                  "Inline & Endline Finishing Quality Monitoring",
                  "Finishing Defect Categorization",
                  "Total Defects, DHU %, Rejection % Calculation",
                  "Real-Time Defective Piece & Rejection Capture",
                  "Manpower Usage & OT Hours in Finishing",
                  "PO-Level Output Monitoring",
                  "Traceability Linked to Sewing & QA via QR Codes",
                ],
              },
              {
                icon: Search,
                title: "Inline/Midline/Final/PPM Inspection",
                description:
                  "Detailed defect tracking, inspection planning, and DHU analysis across all inspection stages—ensuring defect-free deliveries.",
                features: [
                  "Inspection Type-Wise Data",
                  "Sample Size vs. Ready Quantity Monitoring",
                  "Defect Classification: Critical / Major / Minor",
                  "Garment Defect Mapping by Category & Type",
                  "Top Defect Trend Analysis Across Stages",
                  "AQL Result Capture & Validation",
                  "DHU % & Rejection % at Each Inspection Stage",
                  "PO-Style Wise Pass/Fail Conclusion",
                ],
              },
              {
                icon: FileText,
                title: "Order Completion Report",
                description:
                  "Track end-to-end order execution from PO receipt to shipment with complete fabric, production, and loss accountability.",
                features: [
                  "PO-wise Order Progress & Milestone Tracking",
                  "Fabric Reconciliation: Ordered vs. Received vs. Used vs. Waste",
                  "Consumption Analysis (Planned vs. Actual)",
                  "Cutting Stage Status & Rejection Summary",
                  "Sewing Output vs. Rejection vs. Missing Pieces",
                  "Finishing Output with Rejections & Loss Details",
                  "Packed vs. Shipped Quantity Tracking",
                  "Order Quantity vs. Shipped Quantity Variance",
                ],
              },
              {
                icon: BarChart3,
                title: "Daily Production Report",
                description:
                  "Monitor real-time production progress and balance across all departments with precise order-level tracking.",
                features: [
                  "PO-Wise Order Progress Monitoring",
                  "Cutting: Daily vs. Cumulative vs. Balance",
                  "Loading & Stitching Progress vs. Balance",
                  "In-Process Inspection (IR) Tracking",
                  "Finishing: Daily, Cumulative & Balance",
                  "Packing: Daily, Cumulative & Balance",
                  "Shipment Status: Shipped vs. Pending",
                  "WIP Tracking Across All Stages",
                ],
              },
              {
                icon: AlertTriangle,
                title: "TSL Smart Flagging System",
                description:
                  "Roving QC traffic light system with auto-flagging of operators and line flag system based on 5 card workmanship system.",
                features: [
                  "Roving QC Traffic Light System",
                  "Auto-flagging of Operator",
                  "Flag Operator from Endline Inspection",
                  "Line Flag System based on 5 Card Workmanship",
                  "Workplace Compliance Check by Roving QC",
                  "Real-time Quality Alerts",
                  "Visual Status Indicators",
                  "Automated Notifications",
                ],
              },
              {
                icon: Shield,
                title: "Metal Detection & Calibration",
                description:
                  "Ensures product safety by monitoring and logging all metal detection and calibration activities during the production process.",
                features: [
                  "Real-time recording of metal detection results",
                  "Tracks sensitivity, voltage, belt speed, and calibration status",
                  "Daily calibration logs with auto-status flagging",
                  "Linked to PO, style, and production line",
                  "Exportable for audit and compliance reporting",
                ],
              },
              {
                icon: Thermometer,
                title: "IoT-Based Temperature & Humidity Monitoring",
                description:
                  "Automates environment tracking across factory zones to ensure consistent production conditions and fabric care.",
                features: [
                  "Live temperature and humidity data via IoT sensors",
                  "Threshold alerts for deviation from set limits",
                  "Deviation logging with reason and corrective action",
                  "Zone-wise reporting for production and storage areas",
                  "Exportable data for compliance and audit use",
                ],
              },
              {
                icon: Factory,
                title: "Factory QMS Compliance",
                description:
                  "A centralized system to audit and monitor quality and safety compliance across all factory departments.",
                features: [
                  "Covers 15+ production zones with detailed checklists",
                  "Tracks environment, equipment, QC, and SOP adherence",
                  "Assigns responsibility at area and sub-area level",
                  "Auto-calculates audit scores with YES/NO/WIP status",
                  "Full compliance history exportable for buyers and audits",
                ],
              },
              {
                icon: CheckCircle,
                title: "AQL Inspection – Sewing & Finishing",
                description:
                  "Ensures product quality meets buyer-defined standards before shipment using industry-standard AQL methodology.",
                features: [
                  "Conducts AQL inspections at both sewing and finishing stages",
                  "Automatically calculates sample size based on AQL standards",
                  "Records defect classification (Critical, Major, Minor)",
                  "Captures individual defect types with counts and reasons",
                  "Auto-generates DHU %, Defective %, and Pass/Fail status",
                  "Linked to PO, style, and line for traceability",
                  "Supports inline, midline, final, and PPM inspection formats",
                ],
              },
              {
                icon: Calendar,
                title: "Automated TNA (Time and Action)",
                description:
                  "Plan, monitor, and control all production milestones with auto-generated, editable TNAs tailored to your workflow.",
                features: [
                  "Auto-generates TNA based on buyer PO, ex-factory date, and lead time",
                  "Pre-loaded with all key checkpoints",
                  "Tracks planned vs. actual dates and calculates delay days",
                  "Assigns responsibilities for each action point",
                  "Easy to customize task names, durations, and dependencies",
                  "Editable in real time with remarks and status flags",
                  "Supports detailed TNA for sampling, production, quality, and logistics",
                ],
              },
              {
                icon: Settings,
                title: "Machine Maintenance & Breakdown",
                description:
                  "Track, prevent, and manage machine issues in real-time to reduce downtime and ensure smooth operations.",
                features: [
                  "Live breakdown request system with instant alert",
                  "Logs breakdown by machine ID, type, location, and issue",
                  "Tracks response and repair time for each request",
                  "Schedules preventive maintenance with checklist-based PMS",
                  "Assigns responsible technician and logs repair completion",
                  "Automated reminders for upcoming preventive services",
                  "Maintains detailed machine-wise service history",
                  "Minimizes unexpected stoppages and boosts production uptime",
                ],
              },
              {
                icon: QrCode,
                title: "Digital Product Passport (DPP) & QR Traceability",
                description:
                  "Ensure full lifecycle traceability of each garment from fabric roll to final packing, with unique Digital Product Passports.",
                features: [
                  "Individual and bundle QR code generation",
                  "QR printing on taffeta labels",
                  "QR-based tracking at every production stage",
                  "End-to-end traceability from fabric roll to finished goods",
                  "Each garment carries its unique DPP, accessible via QR",
                  "Trace back to fabric supplier and even fiber origin",
                  "Enables compliance with global traceability norms",
                  "Enhances transparency, accountability, and brand trust",
                ],
              },
            ].map((module, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur cursor-pointer"
                onClick={() => (window.location.href = "/solutions/quality")}
              >
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <module.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {module.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {module.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 mb-4">
                    {module.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="group">
              <a
                href="mailto:admin@stitchos.com?subject=Quality%20Modules%20Demo"
                className="flex items-center"
              >
                Explore All Modules
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline">Proven Results</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Trusted by Leading Apparel Manufacturers Worldwide
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: "                        70%",
                label: "Average Efficiency",
                sublabel: "Improvement achieved",
              },
              {
                number: "50M+",
                label: "Quality Checks",
                sublabel: "Performed monthly",
              },
              {
                number: "                        99.8%",
                label: "Uptime",
                sublabel: "System reliability",
              },
            ].map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-4xl lg:text-5xl font-bold text-primary">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold">{stat.label}</div>
                <div className="text-sm text-muted-foreground">
                  {stat.sublabel}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Ready to Transform Your Manufacturing Operations?
            </h2>
            <p className="text-xl text-blue-100">
              Join hundreds of factories already using StitchOS to achieve
              operational excellence. Start your free trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="group">
                <a
                  href="mailto:admin@stitchos.com?subject=Start%20Free%20Trial"
                  className="flex items-center"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white bg-text-primary text-white hover:bg-white hover:text-primary"
              >
                <a href="mailto:admin@stitchos.com?subject=Contact%20Sales">
                  Contact Sales
                </a>
              </Button>
            </div>
            <div className="flex items-center justify-center gap-6 pt-4">
              <span className="text-blue-100 text-sm">
                ✓ No credit card required
              </span>
              <span className="text-blue-100 text-sm">✓ 14-day free trial</span>
              <span className="text-blue-100 text-sm">✓ Setup in minutes</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
