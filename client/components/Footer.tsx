import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Facebook,
  Twitter,
  Linkedin,
  Github,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const footerLinks = {
  Solutions: [
    { name: "Quality Control", href: "/solutions/quality" },
    { name: "Production Analytics", href: "/solutions/analytics" },
    { name: "Factory Management", href: "/solutions/management" },
    { name: "QR Traceability", href: "/solutions/qr-traceability" },
  ],
  Company: [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Press", href: "/press" },
    { name: "Partners", href: "/partners" },
  ],
  Resources: [
    { name: "Blogs", href: "/blogs" },
    { name: "Learning Materials", href: "/learning" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blog", href: "/blog" },
    { name: "Support", href: "/support" },
  ],
  Legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Security", href: "/security" },
  ],
};

const socialLinks = [
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/stitchos1/" },
  { name: "Facebook", icon: Facebook, href: "#" },
  // { name: "GitHub", icon: Github, href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      {/* Newsletter Section */}
      <div className="border-b">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <h3 className="text-2xl font-bold">Stay Updated</h3>
            <p className="text-muted-foreground">
              Get the latest updates on manufacturing technology, industry
              trends, and product releases.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
              />
              <Button type="submit">
                <Mail className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              By subscribing, you agree to our Privacy Policy and Terms of
              Service.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fa640d3428824492894149a9c3f5371a9%2F5d1034ba8c644670a346dba8eebdab01?format=webp&width=800"
                alt="StitchOS Logo"
                className="w-8 h-8"
              />
              <span className="text-xl font-bold">StitchOS</span>
              <Badge variant="secondary">v2.0</Badge>
            </div>
            <p className="text-muted-foreground max-w-md">
              Empowering factories worldwide with advanced quality control,
              real-time production tracking, and intelligent analytics for
              operational excellence.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>
                  F401, Ibiza Town, Surajkund Road, Faridabad, Haryana, India
                  121010
                </span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+91 9069599599</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>admin@stitchos.com</span>
              </div>
            </div>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <Button
                  key={social.name}
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0"
                  asChild
                >
                  <a href={social.href}   target="_blank" aria-label={social.name}>
                    <social.icon className="w-4 h-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h4 className="font-semibold">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                    
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 StitchOS. All rights reserved.
            </div>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span>SOC 2 Type II Certified</span>
              <span>•</span>
              <span>ISO 27001 Compliant</span>
              <span>•</span>
              <span>GDPR Ready</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
