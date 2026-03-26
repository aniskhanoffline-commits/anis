import CampaignCard from "@/components/CampaignCard";
import cultureImg from "@/assets/campaign-culture.png";
import educationImg from "@/assets/campaign-education.png";
import reliefImg from "@/assets/campaign-relief.png";
import welfareImg from "@/assets/campaign-welfare.png";
import mediaImg from "@/assets/campaign-media.png";

const campaigns = [
  { title: "Cultural Preservation", description: "Preserving Nzema traditions, language, and heritage through community programs, festivals, and youth engagement.", image: cultureImg, goal: 15000, raised: 8750 },
  { title: "Education for All", description: "Providing school supplies, scholarships, teacher training, and building classrooms for children in rural Ghana.", image: educationImg, goal: 25000, raised: 16200 },
  { title: "Emergency Relief", description: "Delivering food, clean water, shelter materials, and essential supplies to families affected by natural disasters.", image: reliefImg, goal: 20000, raised: 12400 },
  { title: "Community Welfare", description: "Healthcare services, medical supplies, maternal care, and wellness programs for underserved communities.", image: welfareImg, goal: 18000, raised: 9800 },
  { title: "Media & Awareness", description: "Empowering local journalists and community media to amplify voices and stories from Nzema communities.", image: mediaImg, goal: 10000, raised: 5600 },
];

const CampaignsPage = () => {
  return (
    <div className="min-h-screen py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">All Campaigns</h1>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            Browse our active campaigns and choose where your donation can make the biggest impact.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaigns.map((c) => (
            <CampaignCard key={c.title} {...c} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CampaignsPage;
