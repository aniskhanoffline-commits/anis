import BlogPostLayout from "@/components/BlogPostLayout";
import cultureImg from "@/assets/campaign-culture.jpg";

const CultureArticle = () => (
  <BlogPostLayout
    title="Preserving Nzema Culture for Future Generations"
    date="January 30, 2026"
    category="Culture"
    image={cultureImg}
  >
    <p>
      The Nzema people of Western Ghana possess a rich cultural heritage that spans centuries — from vibrant traditional festivals and oral storytelling to unique craftsmanship and spiritual practices. But like many indigenous cultures around the world, Nzema traditions are at risk of fading as modernization accelerates.
    </p>
    <p>
      NzemaToday's Cultural Preservation Program was born from a deep commitment to ensuring that the beauty and wisdom of Nzema culture are not lost to time. Launched in 2025, the program is already making a significant impact.
    </p>
    <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">Documenting Living Heritage</h2>
    <p>
      Our team of cultural researchers and local elders has been working tirelessly to document traditional practices. So far, we have:
    </p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Recorded over 150 hours of oral histories from community elders</li>
      <li>Documented 30+ traditional ceremonies and rituals</li>
      <li>Created a digital archive of Nzema music, dance, and art</li>
      <li>Published a bilingual guidebook on Nzema customs and traditions</li>
    </ul>
    <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">Youth Cultural Education</h2>
    <p>
      Perhaps the most exciting aspect of our program is the youth engagement initiative. Every weekend, over 60 young people gather at our community center to learn traditional drumming, weaving, and storytelling from master practitioners.
    </p>
    <p>
      "I never knew my own culture was so beautiful," says 14-year-old Efua Nyamaa. "Learning to play the fontomfrom drums makes me feel connected to my ancestors. I want to teach my children these things one day."
    </p>
    <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">The Kundum Festival Revival</h2>
    <p>
      In October 2025, NzemaToday helped organize the largest Kundum festival celebration in a decade. Over 2,000 community members gathered to celebrate with traditional music, dance, feasting, and storytelling. The event brought together diaspora members from across Ghana and abroad, strengthening bonds and renewing pride in Nzema identity.
    </p>
    <p>
      Culture is the soul of a community. By preserving and celebrating Nzema traditions, we are not just safeguarding the past — we are building a foundation of identity and pride for future generations.
    </p>
  </BlogPostLayout>
);

export default CultureArticle;
