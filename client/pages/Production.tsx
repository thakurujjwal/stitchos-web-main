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
  TrendingUp,
  BarChart3,
  Clock,
  Target,
  Zap,
  Factory,
  Calendar,
  Users,
  Gauge,
  LineChart,
  PieChart,
  Activity,
  AlertCircle,
  FileBarChart,
} from "lucide-react";

export default function Production() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/10">
        <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
        <div className="container mx-auto px-4 py-24 sm:py-32 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="mb-4">
                <TrendingUp className="w-3 h-3 mr-1" />
                Production Analytics Platform
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                Real-Time{" "}
                <span className="text-primary bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  Production Analytics
                </span>{" "}
                and Performance Optimization
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Transform your manufacturing operations with comprehensive
                production tracking, performance analytics, and intelligent
                insights that drive continuous improvement and operational
                excellence.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group">
                Start Analytics Trial
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline">Production Features</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Comprehensive Production{" "}
              <span className="text-primary">Tracking & Analytics</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Monitor every aspect of your production process with real-time
              dashboards, predictive analytics, and performance optimization
              tools.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart3,
                title: "Real-Time Production Dashboards",
                description:
                  "Monitor production metrics, efficiency rates, and output in real-time with customizable dashboards.",
                features: [
                  "Live production metrics",
                  "Customizable KPI tracking",
                  "Multi-line monitoring",
                  "Performance benchmarking",
                ],
              },
              {
                icon: Target,
                title: "Performance Optimization",
                description:
                  "Identify bottlenecks, optimize workflows, and improve overall equipment effectiveness (OEE).",
                features: [
                  "OEE calculations",
                  "Bottleneck identification",
                  "Workflow optimization",
                  "Efficiency improvements",
                ],
              },
              {
                icon: Clock,
                title: "Production Planning & Scheduling",
                description:
                  "Advanced scheduling tools with capacity planning and resource allocation optimization.",
                features: [
                  "Smart scheduling",
                  "Capacity planning",
                  "Resource allocation",
                  "Timeline optimization",
                ],
              },
              {
                icon: Gauge,
                title: "Machine Monitoring",
                description:
                  "Monitor machine performance, utilization rates, and maintenance requirements in real-time.",
                features: [
                  "Machine utilization tracking",
                  "Performance monitoring",
                  "Maintenance scheduling",
                  "Downtime analysis",
                ],
              },
              {
                icon: LineChart,
                title: "Predictive Analytics",
                description:
                  "Use historical data and trends to predict production outcomes and prevent issues.",
                features: [
                  "Trend analysis",
                  "Demand forecasting",
                  "Predictive maintenance",
                  "Risk assessment",
                ],
              },
              {
                icon: FileBarChart,
                title: "Production Reporting",
                description:
                  "Comprehensive reporting tools with automated insights and actionable recommendations.",
                features: [
                  "Automated reports",
                  "Custom analytics",
                  "Data visualization",
                  "Export capabilities",
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

      {/* Analytics Dashboard Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline">Production Insights</Badge>
                <h2 className="text-3xl lg:text-4xl font-bold">
                  Actionable{" "}
                  <span className="text-primary">Production Insights</span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  Get deep insights into your production performance with
                  advanced analytics that help you make data-driven decisions.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Activity,
                    title: "94.2% Average Efficiency",
                    description:
                      "Track and improve production efficiency with real-time monitoring and optimization",
                  },
                  {
                    icon: AlertCircle,
                    title: "Proactive Issue Detection",
                    description:
                      "Identify potential issues before they impact production with predictive analytics",
                  },
                  {
                    icon: Factory,
                    title: "Multi-Line Production Tracking",
                    description:
                      "Monitor multiple production lines simultaneously with centralized dashboards",
                  },
                ].map((insight, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <insight.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        {insight.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {insight.description}
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
                    <h3 className="text-xl font-semibold">
                      Production Analytics
                    </h3>
                    <Badge variant="secondary">Live Data</Badge>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        Today's Output
                      </span>
                      <span className="text-2xl font-bold text-primary">
                        1,247 units
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        Efficiency Rate
                      </span>
                      <span className="text-2xl font-bold text-success-700">
                        94.2%
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      {
                        label: "Active Lines",
                        value: "8/10",
                        change: "Normal",
                      },
                      {
                        label: "Avg Cycle Time",
                        value: "4.2min",
                        change: "-0.3min",
                      },
                      { label: "Downtime", value: "0.8%", change: "-0.2%" },
                      {
                        label: "Quality Rate",
                        value: "98.7%",
                        change: "+0.5%",
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

      {/* Key Metrics Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline">Performance Metrics</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Production Performance{" "}
              <span className="text-primary">at a Glance</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: TrendingUp,
                number: "94.2%",
                label: "Production Efficiency",
                sublabel: "Average across all lines",
                trend: "+2.1%",
              },
              {
                icon: Clock,
                number: "4.2min",
                label: "Average Cycle Time",
                sublabel: "Per unit production",
                trend: "-0.3min",
              },
              {
                icon: Target,
                number: "98.7%",
                label: "On-Time Delivery",
                sublabel: "Schedule adherence",
                trend: "+1.2%",
              },
              {
                icon: Gauge,
                number: "85.6%",
                label: "Overall Equipment Effectiveness",
                sublabel: "OEE measurement",
                trend: "+3.4%",
              },
            ].map((metric, index) => (
              <Card key={index} className="text-center p-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {metric.number}
                </div>
                <div className="text-lg font-semibold mb-1">{metric.label}</div>
                <div className="text-sm text-muted-foreground mb-2">
                  {metric.sublabel}
                </div>
                <Badge variant="secondary" className="text-success-700">
                  {metric.trend}
                </Badge>
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
              Optimize Your Production Performance Today
            </h2>
            <p className="text-xl text-blue-100">
              Transform your manufacturing operations with data-driven insights
              and real-time analytics. Start improving your production
              efficiency now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="group">
                Start Production Analytics
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Schedule Analytics Demo
              </Button>
            </div>
            <div className="flex items-center justify-center gap-6 pt-4">
              <span className="text-blue-100 text-sm">✓ 14-day free trial</span>
              <span className="text-blue-100 text-sm">
                ✓ Real-time dashboard access
              </span>
              <span className="text-blue-100 text-sm">
                ✓ Expert setup support
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
