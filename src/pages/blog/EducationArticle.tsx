import BlogPostLayout from "@/components/BlogPostLayout";
import educationImg from "@/assets/campaign-education.jpg";

const EducationArticle = () => (
  <BlogPostLayout
    title="How Education is Transforming Nzema Communities"
    date="March 5, 2026"
    category="Education"
    image={educationImg}
  >
    <p>
      In the heart of Western Ghana, the Nzema communities have long faced barriers to quality education. Overcrowded classrooms, a shortage of trained teachers, and limited access to school supplies have left generations of children without the foundation they need to thrive. But today, that story is changing.
    </p>
    <p>
      NzemaToday's latest school building project, completed in early 2026, has opened the doors of learning for over 200 children in rural communities. The new facility includes four fully equipped classrooms, a library stocked with textbooks and reading materials, and a computer lab with ten workstations.
    </p>
    <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">Breaking the Cycle of Poverty</h2>
    <p>
      Education is the most powerful tool we have to break the cycle of poverty. When children in Nzema communities receive quality education, they gain the skills and knowledge to build better futures — not just for themselves, but for their entire families and communities.
    </p>
    <p>
      "Before the new school was built, my children had to walk over 8 kilometers to the nearest classroom," says Ama Mensah, a mother of three. "Now they can learn close to home, and I can see the difference it's making. My oldest daughter wants to be a doctor."
    </p>
    <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">The Numbers Tell the Story</h2>
    <p>
      Since launching our education initiative, NzemaToday has achieved remarkable milestones:
    </p>
    <ul className="list-disc pl-6 space-y-2">
      <li>200+ children enrolled in the new school facility</li>
      <li>12 trained teachers recruited and supported</li>
      <li>500+ textbooks and learning materials distributed</li>
      <li>95% attendance rate among enrolled students</li>
      <li>3 scholarship programs launched for secondary education</li>
    </ul>
    <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">Looking Ahead</h2>
    <p>
      Our vision doesn't stop here. By the end of 2026, we plan to expand our education program to three additional communities, establish a teacher training center, and launch a digital literacy initiative that will prepare students for the opportunities of tomorrow.
    </p>
    <p>
      Every donation, no matter how small, brings us closer to a future where every child in the Nzema region has access to quality education. Together, we can transform lives — one classroom at a time.
    </p>
  </BlogPostLayout>
);

export default EducationArticle;
