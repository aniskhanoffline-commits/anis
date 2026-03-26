import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const DonationSuccessPage = () => {
  return (
    <div className="min-h-screen py-20 bg-background flex items-center justify-center">
      <div className="container mx-auto px-4 max-w-lg text-center">
        <CheckCircle className="h-20 w-20 text-primary mx-auto mb-6" />
        <h1 className="font-display text-4xl font-bold text-foreground mb-4">
          Thank You!
        </h1>
        <p className="text-muted-foreground font-body mb-8 text-lg">
          Your donation has been received successfully. Your generosity makes a real difference in the lives of communities across Ghana.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" asChild>
            <Link to="/">Return Home</Link>
          </Button>
          <Button variant="hero-outline" asChild>
            <Link to="/impact">See Our Impact</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DonationSuccessPage;
