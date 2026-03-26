import BlogPostLayout from "@/components/BlogPostLayout";
import reliefImg from "@/assets/campaign-relief.jpg";

const ReliefArticle = () => (
  <BlogPostLayout
    title="Emergency Relief: Responding to the 2026 Floods"
    date="February 18, 2026"
    category="Relief"
    image={reliefImg}
  >
    <p>
      When devastating floods swept through three Nzema communities in early February 2026, displacing hundreds of families and destroying homes and farmland, NzemaToday mobilized within 24 hours to deliver critical supplies and support.
    </p>
    <p>
      The floods, caused by unusually heavy rainfall in the Western Region, submerged entire villages and washed away crops that families depended on for survival. Roads became impassable, cutting off communities from essential services.
    </p>
    <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">Rapid Response in Action</h2>
    <p>
      Our emergency response team, composed of trained local volunteers and staff, immediately deployed to the affected areas. Within the first 48 hours, we had:
    </p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Distributed 500+ emergency food packages to displaced families</li>
      <li>Provided clean drinking water to over 800 people</li>
      <li>Set up three temporary shelters for families who lost their homes</li>
      <li>Delivered medical supplies and first aid to the injured</li>
      <li>Coordinated with local authorities for evacuation support</li>
    </ul>
    <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">Stories of Resilience</h2>
    <p>
      "I woke up to water rising in our home," recalls Kwame Adjei, a fisherman from Axim. "We grabbed our children and ran. We lost everything — our clothes, our food, our fishing nets. But NzemaToday was there the very next day with food and blankets. They gave us hope when we had none."
    </p>
    <p>
      Stories like Kwame's remind us why disaster preparedness and rapid response are so critical. The communities we serve are often the most vulnerable, and without immediate intervention, the consequences can be catastrophic.
    </p>
    <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">Rebuilding Together</h2>
    <p>
      Now, weeks after the floods receded, our focus has shifted to long-term recovery. We are working alongside community leaders to rebuild homes, restore farmland, and implement flood prevention measures to protect against future disasters. Your continued support makes this recovery possible.
    </p>
  </BlogPostLayout>
);

export default ReliefArticle;
