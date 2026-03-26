import { Link } from "react-router-dom";
import { Heart, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.webp";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="NzemaToday Foundation Logo" className="h-10 w-10 object-contain" />
              <span className="font-display text-xl font-bold">
                Nzema<span className="text-primary">Today</span> Foundation
              </span>
            </div>
            <p className="text-sm opacity-70 leading-relaxed">
              A nonprofit organization helping poor communities in Ghana through education, relief, welfare, cultural programs, and media awareness.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-70">
              {[
              { label: "About Us", path: "/about" },
              { label: "Campaigns", path: "/campaigns" },
              { label: "Donate", path: "/donate" },
              { label: "Impact", path: "/impact" },
              { label: "Blog", path: "/blog" },
              { label: "Contact", path: "/contact" }].
              map((l) =>
              <li key={l.path}>
                  <Link to={l.path} className="hover:text-primary transition-colors">{l.label}</Link>
                </li>
              )}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm opacity-70">
              {[
              { label: "Privacy Policy", path: "/privacy" },
              { label: "Terms & Conditions", path: "/terms" },
              { label: "Disclaimer", path: "/disclaimer" },
              { label: "Refund Policy", path: "/refund-policy" },
              { label: "Donation Policy", path: "/donation-policy" }].
              map((l) =>
              <li key={l.path}>
                  <Link to={l.path} className="hover:text-primary transition-colors">{l.label}</Link>
                </li>
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm opacity-70">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>Nzema, Western Region, Ghana</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <span>support@nzematoday.org</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <span>+31 6 47880951</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <span>+233 24 1862091</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center text-sm opacity-50">
          <p>© {new Date().getFullYear()} NzemaToday. All rights reserved. A registered nonprofit organization.</p>
        </div>
      </div>
    </footer>);

};

export default Footer;