import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen py-20 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-14">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Contact Us</h1>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Have questions or want to get involved? Reach out — we'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-6">Get in Touch</h2>
            <div className="space-y-6">
              {[
                { icon: <MapPin className="h-5 w-5" />, label: "Address", value: "Nzema, Western Region, Ghana" },
                { icon: <Mail className="h-5 w-5" />, label: "Email", value: "support@nzematoday.org" },
                { icon: <Phone className="h-5 w-5" />, label: "Phone (NL)", value: "+31 6 47880951" },
                { icon: <Phone className="h-5 w-5" />, label: "Phone (Ghana)", value: "+233 24 1862091" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">{item.icon}</div>
                  <div>
                    <p className="font-body font-semibold text-foreground text-sm">{item.label}</p>
                    <p className="text-muted-foreground font-body text-sm">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-8">
            <h2 className="font-display text-2xl font-semibold text-foreground mb-6">Send a Message</h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <Input placeholder="Your Name" className="font-body" />
              <Input placeholder="Your Email" type="email" className="font-body" />
              <Input placeholder="Subject" className="font-body" />
              <Textarea placeholder="Your Message" rows={5} className="font-body" />
              <Button variant="hero" size="lg" className="w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
