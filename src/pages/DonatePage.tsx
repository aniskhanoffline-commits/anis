import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart, CreditCard, Shield, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const presetAmounts = [10, 25, 50, 100, 250, 500];

const DonatePage = () => {
  const [amount, setAmount] = useState<number | "">(25);
  const [selectedPreset, setSelectedPreset] = useState<number | null>(25);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handlePreset = (val: number) => {
    setSelectedPreset(val);
    setAmount(val);
  };

  const donationAmount = selectedPreset || (typeof amount === "number" ? amount : 0);

  const handleDonate = async () => {
    if (!name.trim()) {
      toast({ title: "Name is required", variant: "destructive" });
      return;
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({ title: "Valid email is required", variant: "destructive" });
      return;
    }
    if (donationAmount < 1) {
      toast({ title: "Please select or enter a donation amount", variant: "destructive" });
      return;
    }

    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("create-checkout", {
        body: { amount: donationAmount, name: name.trim(), email: email.trim(), phone: phone.trim() },
      });

      if (error) throw error;
      if (data?.url) {
        window.location.href = data.url;
      } else {
        throw new Error("No checkout URL returned");
      }
    } catch (err: any) {
      console.error("Donation error:", err);
      toast({ title: "Something went wrong", description: err.message || "Please try again.", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-20 bg-background">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-10">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Make a Donation</h1>
          <p className="text-muted-foreground font-body">
            Your generosity directly supports communities in Ghana. Every amount matters.
          </p>
        </div>

        <div className="bg-card border border-border rounded-xl p-8 shadow-lg">
          {/* Amount selection */}
          <div className="mb-8">
            <label className="font-body font-semibold text-foreground text-sm mb-3 block">Select Amount</label>
            <div className="grid grid-cols-3 gap-3 mb-4">
              {presetAmounts.map((val) => (
                <button
                  key={val}
                  onClick={() => handlePreset(val)}
                  className={`py-3 rounded-lg font-display text-lg font-bold transition-all duration-200 border ${
                    selectedPreset === val
                      ? "bg-primary text-primary-foreground border-primary shadow-md"
                      : "bg-background text-foreground border-border hover:border-primary"
                  }`}
                >
                  ${val}
                </button>
              ))}
            </div>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground font-bold">$</span>
              <Input
                type="number"
                placeholder="Custom amount"
                className="pl-8 font-body"
                value={amount}
                min={1}
                onChange={(e) => {
                  setAmount(Number(e.target.value) || "");
                  setSelectedPreset(null);
                }}
              />
            </div>
          </div>

          {/* Donor info */}
          <div className="space-y-4 mb-8">
            <label className="font-body font-semibold text-foreground text-sm block">Your Information</label>
            <Input
              placeholder="Full Name *"
              className="font-body"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Input
              placeholder="Email Address *"
              type="email"
              className="font-body"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              placeholder="Phone Number (optional)"
              type="tel"
              className="font-body"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          {/* Payment note */}
          <div className="mb-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground font-body">
              <CreditCard className="h-4 w-4" />
              <span>You'll be redirected to Stripe's secure checkout to complete payment.</span>
            </div>
          </div>

          <Button
            variant="hero"
            size="lg"
            className="w-full text-lg py-6"
            onClick={handleDonate}
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <Heart className="h-5 w-5" />
            )}
            {isLoading ? "Processing..." : `Donate $${donationAmount}`}
          </Button>

          <div className="flex items-center justify-center gap-2 mt-4 text-xs text-muted-foreground font-body">
            <Shield className="h-4 w-4" />
            <span>Your donation is secure and encrypted. 100% goes to our programs.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonatePage;
