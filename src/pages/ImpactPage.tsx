import StatCounter from "@/components/StatCounter";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, BookOpen, Home, Briefcase, Utensils, Users, GraduationCap, Droplets } from "lucide-react";
import storyImg from "@/assets/story-1.jpg";
import reliefImg from "@/assets/campaign-relief.jpg";

const ImpactPage = () => {
  return (
    <div className="min-h-screen">
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Our Impact</h1>
            <p className="text-muted-foreground font-body max-w-2xl mx-auto">
              See the real difference your donations are making in communities across Ghana.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            <StatCounter value="1,200+" label="Meals Distributed" icon={<Utensils className="h-6 w-6" />} />
            <StatCounter value="300+" label="Children Supported" icon={<BookOpen className="h-6 w-6" />} />
            <StatCounter value="80+" label="Families Helped" icon={<Home className="h-6 w-6" />} />
            <StatCounter value="15" label="Active Projects" icon={<Briefcase className="h-6 w-6" />} />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCounter value="50+" label="Volunteers" icon={<Users className="h-6 w-6" />} />
            <StatCounter value="5" label="Communities Reached" icon={<GraduationCap className="h-6 w-6" />} />
            <StatCounter value="3" label="Schools Built" icon={<BookOpen className="h-6 w-6" />} />
            <StatCounter value="2" label="Clean Water Wells" icon={<Droplets className="h-6 w-6" />} />
          </div>
        </div>
      </section>

      {/* Stories */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-14">Stories of Change</h2>
          <div className="space-y-16">
            {[
              { img: storyImg, name: "Ama K.", quote: "Thanks to NzemaToday, my children can go to school with proper books and uniforms. We are forever grateful.", location: "Nzema Community" },
              { img: reliefImg, name: "Kwame D.", quote: "During the floods, NzemaToday was the first to bring us food and clean water. They saved our village.", location: "Western Region" },
            ].map((story, i) => (
              <div key={i} className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "md:direction-rtl" : ""}`}>
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <img src={story.img} alt={story.name} className="w-full h-72 object-cover rounded-lg shadow-lg" loading="lazy" />
                </div>
                <div className={i % 2 === 1 ? "md:order-1" : ""}>
                  <blockquote className="text-lg text-muted-foreground font-body italic leading-relaxed mb-4">
                    "{story.quote}"
                  </blockquote>
                  <p className="font-body font-semibold text-foreground">— {story.name}, {story.location}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Button variant="hero" size="lg" asChild>
              <Link to="/donate"><Heart className="h-5 w-5" /> Help Us Create More Stories</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImpactPage;
