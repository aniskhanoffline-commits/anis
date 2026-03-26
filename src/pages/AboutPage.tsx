import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Target, Eye, Users } from "lucide-react";
import aboutImg from "@/assets/about-ghana.jpg";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-24">
        <div className="absolute inset-0">
          <img src={aboutImg} alt="Ghana coastal village" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/70" />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-background mb-4">About NzemaToday</h1>
          <p className="text-background/80 font-body text-lg max-w-2xl mx-auto">
            We are a nonprofit organization dedicated to uplifting poor communities across Ghana.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-3 gap-10 mb-16">
            {[
              { icon: <Target className="h-8 w-8" />, title: "Our Mission", text: "To empower Ghana's most vulnerable communities through education, relief, welfare, cultural preservation, and media awareness." },
              { icon: <Eye className="h-8 w-8" />, title: "Our Vision", text: "A Ghana where every community has access to education, healthcare, and opportunity regardless of their circumstances." },
              { icon: <Users className="h-8 w-8" />, title: "Our Values", text: "Transparency, compassion, community-driven impact, cultural respect, and sustainable development guide everything we do." },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                  {item.icon}
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="prose max-w-none text-muted-foreground font-body leading-relaxed space-y-4">
            <h2 className="font-display text-2xl font-bold text-foreground">Our Story</h2>
            <p>NzemaToday was founded with a simple belief: that every community deserves the chance to thrive. Starting in the Nzema region of Western Ghana, we began with small food distribution drives and school supply donations.</p>
            <p>Today, we operate across multiple communities, running 15 active projects that touch thousands of lives. From building classrooms to providing emergency relief during floods, our work is driven by the voices and needs of the people we serve.</p>
            <p>We believe in sustainable, community-led development. Every program we run is designed in partnership with local leaders, ensuring that our impact lasts long after the initial support.</p>
          </div>

          <div className="text-center mt-12">
            <Button variant="hero" size="lg" asChild>
              <Link to="/donate"><Heart className="h-5 w-5" /> Support Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
