import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CampaignCard from "@/components/CampaignCard";
import StatCounter from "@/components/StatCounter";
import DonationTier from "@/components/DonationTier";
import { Heart, Users, Home, Briefcase, BookOpen, Utensils } from "lucide-react";

import heroImage from "@/assets/hero-ghana.jpg";
import cultureImg from "@/assets/campaign-culture.png";
import educationImg from "@/assets/campaign-education.png";
import reliefImg from "@/assets/campaign-relief.png";
import welfareImg from "@/assets/campaign-welfare.png";
import mediaImg from "@/assets/campaign-media.png";
import storyImg from "@/assets/story-1.jpg";

const campaigns = [
{
  title: "Cultural Preservation",
  description: "Preserving Nzema traditions, language, and heritage through community programs and festivals.",
  image: cultureImg,
  goal: 15000,
  raised: 8750
},
{
  title: "Education for All",
  description: "Providing school supplies, scholarships, and building classrooms for children in rural Ghana.",
  image: educationImg,
  goal: 25000,
  raised: 16200
},
{
  title: "Emergency Relief",
  description: "Delivering food, clean water, and essential supplies to families affected by natural disasters.",
  image: reliefImg,
  goal: 20000,
  raised: 12400
},
{
  title: "Community Welfare",
  description: "Healthcare services, medical supplies, and wellness programs for underserved communities.",
  image: welfareImg,
  goal: 18000,
  raised: 9800
},
{
  title: "Media & Awareness",
  description: "Empowering local journalists and community media to amplify voices from Nzema communities.",
  image: mediaImg,
  goal: 10000,
  raised: 5600
}];


const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Ghanaian children in classroom" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-background leading-tight mb-6">
              Helping Communities in Ghana Build a Better Future
            </h1>
            <p className="text-lg md:text-xl text-background/80 font-body leading-relaxed mb-8">
              Your donation can change lives by supporting education, relief, welfare, culture, and media programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/donate">
                  <Heart className="h-5 w-5" />
                  Donate Now
                </Link>
              </Button>
              <Button variant="hero-outline" size="lg" className="border-background text-background hover:bg-background hover:text-foreground" asChild>
                <Link to="/campaigns">View Campaigns</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Campaigns */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Our Campaigns</h2>
            <p className="text-muted-foreground font-body max-w-2xl mx-auto">
              Every campaign represents a direct path to improving lives in Nzema communities across Ghana.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {campaigns.map((c) =>
            <CampaignCard key={c.title} {...c} />
            )}
          </div>
          <div className="text-center mt-10">
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/campaigns">See All Campaigns</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-14">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCounter value="1,200+" label="Meals Distributed" icon={<Utensils className="h-6 w-6" />} />
            <StatCounter value="300+" label="Children Supported" icon={<BookOpen className="h-6 w-6" />} />
            <StatCounter value="80+" label="Families Helped" icon={<Home className="h-6 w-6" />} />
            <StatCounter value="15" label="Active Projects" icon={<Briefcase className="h-6 w-6" />} />
          </div>
        </div>
      </section>

      {/* Donation Tiers */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">How Your Donation Helps</h2>
            <p className="text-muted-foreground font-body max-w-xl mx-auto">
              Every dollar makes a tangible difference in someone's life.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <DonationTier amount="$10" description="Provides food for a child for a week" />
            <DonationTier amount="$25" description="School supplies for a student" />
            <DonationTier amount="$50" description="Medical support and healthcare" />
            <DonationTier amount="$100" description="Support an entire family for a month" />
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img alt="Community members sharing a meal" className="w-full h-80 object-cover" loading="lazy" src="/lovable-uploads/21057137-c33c-4e33-9d25-e0edc91bd80f.png" />
            </div>
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Real Stories, Real Impact</h2>
              <p className="text-muted-foreground font-body leading-relaxed mb-4">
                "Thanks to NzemaToday, my children can go to school with proper books and uniforms. The relief supplies during the floods saved our family. We are forever grateful."
              </p>
              <p className="font-body font-semibold text-foreground">— Ama K., Nzema Community</p>
              <Button variant="hero" className="mt-6" asChild>
                <Link to="/impact">See More Stories</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Together, We Can Make a Difference
          </h2>
          <p className="text-primary-foreground/80 font-body max-w-xl mx-auto mb-8">
            Join thousands of donors who are helping build a brighter future for Ghana's communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-background text-foreground hover:bg-background/90 font-body font-bold text-base" asChild>
              <Link to="/donate">
                <Heart className="h-5 w-5" />
                Donate Now
              </Link>
            </Button>
            <Button size="lg" className="border-2 border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground hover:text-primary font-body font-bold text-base" asChild>
              <Link to="/about">Learn About Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>);

};

export default Index;