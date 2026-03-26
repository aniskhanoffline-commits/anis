import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Tag } from "lucide-react";

interface BlogPostLayoutProps {
  title: string;
  date: string;
  category: string;
  image: string;
  children: React.ReactNode;
}

const BlogPostLayout = ({ title, date, category, image, children }: BlogPostLayoutProps) => {
  return (
    <div className="min-h-screen py-20 bg-background">
      <article className="container mx-auto px-4 max-w-3xl">
        <Link to="/blog" className="inline-flex items-center gap-2 text-primary font-body font-semibold hover:underline mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>

        <div className="mb-8">
          <div className="flex items-center gap-4 text-sm text-muted-foreground font-body mb-4">
            <span className="inline-flex items-center gap-1"><Calendar className="w-4 h-4" /> {date}</span>
            <span className="inline-flex items-center gap-1 bg-primary/10 text-primary px-3 py-0.5 rounded-full"><Tag className="w-3 h-3" /> {category}</span>
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight">{title}</h1>
        </div>

        <div className="rounded-xl overflow-hidden mb-10 shadow-lg">
          <img src={image} alt={title} className="w-full h-64 md:h-96 object-cover" />
        </div>

        <div className="prose prose-lg max-w-none font-body text-foreground/90 space-y-6">
          {children}
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground font-body mb-4">Want to support this cause?</p>
          <Link to="/donate" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-body font-semibold hover:bg-primary/90 transition-colors">
            Donate Now
          </Link>
        </div>
      </article>
    </div>
  );
};

export default BlogPostLayout;
