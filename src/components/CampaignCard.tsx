import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

interface CampaignCardProps {
  title: string;
  description: string;
  image: string;
  goal: number;
  raised: number;
}

const CampaignCard = ({ title, description, image, goal, raised }: CampaignCardProps) => {
  const percent = Math.min(Math.round((raised / goal) * 100), 100);

  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group border border-border">
      <div className="overflow-hidden h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">{description}</p>

        <div className="mb-3">
          <div className="flex justify-between text-xs font-body font-medium text-muted-foreground mb-1">
            <span>${raised.toLocaleString()} raised</span>
            <span>Goal: ${goal.toLocaleString()}</span>
          </div>
          <Progress value={percent} className="h-2" />
        </div>

        <Button variant="hero" className="w-full" asChild>
          <Link to="/donate">
            <Heart className="h-4 w-4" />
            Donate Now
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default CampaignCard;
