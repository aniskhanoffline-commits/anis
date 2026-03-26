import BlogPostLayout from "@/components/BlogPostLayout";
import welfareImg from "@/assets/campaign-welfare.jpg";

const WelfareArticle = () => (
  <BlogPostLayout
    title="Community Welfare: Supporting Families Through Hard Times"
    date="March 1, 2026"
    category="Welfare"
    image={welfareImg}
  >
    <p>
      For many families in Nzema communities, daily life is a constant struggle. Limited access to healthcare, clean water, and nutritious food creates a cycle of hardship that is difficult to escape without support. NzemaToday's welfare programs are designed to provide that vital lifeline.
    </p>
    <p>
      Since our welfare initiative launched, we've been working directly with community leaders to identify the families most in need and provide targeted support that makes a real difference.
    </p>
    <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">Feeding Families, Nourishing Hope</h2>
    <p>
      Our meal distribution program has become a cornerstone of our welfare work. Every month, we provide nutritious food packages to over 200 families across five communities. These packages include:
    </p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Rice, beans, and cooking oil for basic nutrition</li>
      <li>Fresh vegetables sourced from local farms</li>
      <li>Fortified porridge and nutritional supplements for children</li>
      <li>Clean drinking water supplies</li>
    </ul>
    <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">Healthcare Access</h2>
    <p>
      Many Nzema communities lack nearby health facilities, forcing residents to travel long distances for basic medical care. Our mobile health clinic visits three communities each month, providing:
    </p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Free health screenings and consultations</li>
      <li>Maternal and child health services</li>
      <li>Distribution of essential medications</li>
      <li>Health education workshops on hygiene and disease prevention</li>
    </ul>
    <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">A Mother's Gratitude</h2>
    <p>
      "When my husband lost his fishing boat in a storm, we didn't know how we would feed our four children," shares Akua Baidoo. "NzemaToday brought us food and helped my husband find new work. They didn't just give us charity — they gave us dignity."
    </p>
    <p>
      Stories like Akua's drive us forward. Every family we support is a reminder that compassion, when turned into action, can transform lives. Your donations make these programs possible.
    </p>
  </BlogPostLayout>
);

export default WelfareArticle;
