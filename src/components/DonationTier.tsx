import { Button } from "@/components/ui/button";

interface DonationTierProps {
  amount: string;
  description: string;
  onClick?: () => void;
}

const DonationTier = ({ amount, description, onClick }: DonationTierProps) => {
  return (
    <div className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary hover:shadow-lg transition-all duration-300 group">
      <div className="font-display text-3xl font-bold text-primary mb-2">{amount}</div>
      <p className="text-sm text-muted-foreground font-body mb-4">{description}</p>
      <Button variant="hero-outline" size="sm" onClick={onClick} className="group-hover:bg-primary group-hover:text-primary-foreground">
        Donate {amount}
      </Button>
    </div>
  );
};

export default DonationTier;
