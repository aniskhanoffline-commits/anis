import { Link } from "react-router-dom";
import educationImg from "@/assets/campaign-education-new.png";
import reliefImg from "@/assets/campaign-relief-new.png";
import cultureImg from "@/assets/campaign-culture-new.png";
import welfareImg from "@/assets/campaign-welfare-new.png";
import mediaImg from "@/assets/campaign-media-new.png";

const posts = [
  { title: "How Education is Transforming Nzema Communities", excerpt: "Our latest school building project has opened doors for over 200 children in rural Western Ghana.", image: educationImg, date: "March 5, 2026", slug: "/blog/education-transforming-communities", category: "Education" },
  { title: "Community Welfare: Supporting Families Through Hard Times", excerpt: "Our welfare programs provide food, healthcare, and hope to hundreds of families across Nzema communities.", image: welfareImg, date: "March 1, 2026", slug: "/blog/community-welfare-support", category: "Welfare" },
  { title: "Emergency Relief: Responding to the 2026 Floods", excerpt: "When floods devastated three communities, NzemaToday mobilized within 24 hours to deliver critical supplies.", image: reliefImg, date: "February 18, 2026", slug: "/blog/emergency-relief-2026-floods", category: "Relief" },
  { title: "Amplifying Nzema Voices: Our Media Awareness Campaign", excerpt: "Through documentaries, radio, and social media, we're bringing Nzema stories to a global audience.", image: mediaImg, date: "February 5, 2026", slug: "/blog/media-awareness-campaign", category: "Media" },
  { title: "Preserving Nzema Culture for Future Generations", excerpt: "Our cultural preservation program is documenting traditional practices and teaching youth their heritage.", image: cultureImg, date: "January 30, 2026", slug: "/blog/preserving-nzema-culture", category: "Culture" },
];

const BlogPage = () => {
  return (
    <div className="min-h-screen py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Blog & News</h1>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            Stay updated with our latest stories, project updates, and community news.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {posts.map((post) => (
            <article key={post.title} className="bg-card border border-border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
              <Link to={post.slug}>
                <div className="overflow-hidden h-48">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
              </Link>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-body font-semibold">{post.category}</span>
                  <p className="text-xs text-muted-foreground font-body">{post.date}</p>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2 line-clamp-2">{post.title}</h3>
                <p className="text-sm text-muted-foreground font-body line-clamp-3">{post.excerpt}</p>
                <Link to={post.slug} className="inline-block mt-3 text-sm text-primary font-body font-semibold hover:underline">
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
