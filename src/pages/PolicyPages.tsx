const PolicyPage = ({ title, children }: { title: string; children: React.ReactNode }) => {
  return (
    <div className="min-h-screen py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="font-display text-4xl font-bold text-foreground mb-8">{title}</h1>
        <div className="prose max-w-none text-muted-foreground font-body leading-relaxed space-y-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export const PrivacyPage = () => (
  <PolicyPage title="Privacy Policy">
    <p>Last updated: March 2026</p>
    <h2 className="font-display text-xl font-semibold text-foreground">Information We Collect</h2>
    <p>NzemaToday collects personal information such as your name, email address, and payment details when you make a donation or contact us. We also collect anonymous usage data to improve our website.</p>
    <h2 className="font-display text-xl font-semibold text-foreground">How We Use Your Information</h2>
    <p>Your information is used to process donations, send receipts, communicate about our programs, and improve our services. We never sell your personal data to third parties.</p>
    <h2 className="font-display text-xl font-semibold text-foreground">Data Security</h2>
    <p>We use industry-standard encryption and security measures to protect your personal and financial information.</p>
    <h2 className="font-display text-xl font-semibold text-foreground">Contact</h2>
    <p>For privacy concerns, contact us at info@nzematoday.org.</p>
  </PolicyPage>
);

export const TermsPage = () => (
  <PolicyPage title="Terms and Conditions">
    <p>Last updated: March 2026</p>
    <p>By using the NzemaToday website and making donations, you agree to these terms and conditions.</p>
    <h2 className="font-display text-xl font-semibold text-foreground">Use of Website</h2>
    <p>This website is provided for informational and donation purposes. You agree not to misuse the site or attempt to interfere with its operations.</p>
    <h2 className="font-display text-xl font-semibold text-foreground">Donations</h2>
    <p>All donations are voluntary and will be used to support our programs in Ghana. Tax receipts are provided where applicable.</p>
    <h2 className="font-display text-xl font-semibold text-foreground">Limitation of Liability</h2>
    <p>NzemaToday is not liable for any indirect damages resulting from use of this website.</p>
  </PolicyPage>
);

export const DisclaimerPage = () => (
  <PolicyPage title="Disclaimer">
    <p>The information on this website is provided in good faith for general informational purposes. NzemaToday makes no representation or warranty about the completeness or accuracy of the information.</p>
    <p>Any reliance you place on such information is at your own risk. We are not liable for any loss or damage resulting from use of this website.</p>
    <p>External links on this site are provided for convenience and do not imply endorsement.</p>
  </PolicyPage>
);

export const RefundPolicyPage = () => (
  <PolicyPage title="Refund Policy">
    <p>Last updated: March 2026</p>
    <p>Donations to NzemaToday are generally non-refundable as they are immediately allocated to our programs. However, we understand that errors can occur.</p>
    <h2 className="font-display text-xl font-semibold text-foreground">Requesting a Refund</h2>
    <p>If you believe a donation was made in error, please contact us within 30 days at info@nzematoday.org with your donation details. We will review each request on a case-by-case basis.</p>
    <h2 className="font-display text-xl font-semibold text-foreground">Processing Time</h2>
    <p>Approved refunds will be processed within 10-15 business days to the original payment method.</p>
  </PolicyPage>
);

export const DonationPolicyPage = () => (
  <PolicyPage title="Donation Policy">
    <p>Last updated: March 2026</p>
    <p>NzemaToday is a registered nonprofit organization. All donations are used exclusively to support our programs in education, relief, welfare, culture, and media across Ghana.</p>
    <h2 className="font-display text-xl font-semibold text-foreground">Allocation</h2>
    <p>We allocate at least 85% of all donations directly to program activities. The remaining funds support operational costs and fundraising.</p>
    <h2 className="font-display text-xl font-semibold text-foreground">Tax Deductibility</h2>
    <p>Donations may be tax-deductible depending on your jurisdiction. We provide donation receipts for all contributions.</p>
    <h2 className="font-display text-xl font-semibold text-foreground">Transparency</h2>
    <p>We publish annual reports detailing how donations are used. Visit our Impact page to see the results of your generosity.</p>
  </PolicyPage>
);
