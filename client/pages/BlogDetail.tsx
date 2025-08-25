import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User, Tag, Share2 } from "lucide-react";
import { blogPosts } from "@/data/mockData";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function BlogDetail() {
  const { id } = useParams<{ id: string }>();
  const blog = blogPosts.find((b) => b.id === id);

  if (!blog) {
    return <Navigate to="/404" replace />;
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: blog.title,
          text: blog.excerpt,
          url: window.location.href,
        });
      } catch (error) {
        console.log("Error sharing:", error);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <Layout>
      <article className="py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Back Button */}
          <Button variant="ghost" className="mb-8 gap-2" asChild>
            <Link to="/">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>

          {/* Hero Section with Visual Background */}
          <div className="relative mb-12">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background rounded-xl" />
            <div className="relative p-8 sm:p-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">
                    📖
                  </span>
                </div>
                <div className="text-sm text-muted-foreground">
                  <div className="font-medium">Blog Post</div>
                  <div>{blog.readTime} minute read</div>
                </div>
              </div>
            </div>
          </div>

          {/* Article Header */}
          <header className="mb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {blog.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span className="font-medium">{blog.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time dateTime={blog.publishedAt}>
                  {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{blog.readTime} min read</span>
              </div>
            </div>

            {/* Excerpt */}
            <div className="bg-muted/50 rounded-lg p-6 mb-8">
              <p className="text-lg leading-relaxed font-medium">
                {blog.excerpt}
              </p>
            </div>

            {/* Tags and Actions */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="gap-1">
                    <Tag className="h-3 w-3" />
                    {tag}
                  </Badge>
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={handleShare}
                className="gap-2"
              >
                <Share2 className="h-4 w-4" />
                Share
              </Button>
            </div>

            <Separator className="mt-8" />
          </header>

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {blog.content.split("\n\n").map((paragraph, index) => {
              if (paragraph.startsWith("# ")) {
                return (
                  <div key={index} className="mb-8">
                    <h1 className="text-3xl font-bold mt-12 mb-4 first:mt-0 pb-3 border-b border-border">
                      {paragraph.replace("# ", "")}
                    </h1>
                  </div>
                );
              }
              if (paragraph.startsWith("## ")) {
                return (
                  <div key={index} className="mb-6">
                    <h2 className="text-2xl font-semibold mt-10 mb-4 flex items-center gap-3">
                      <div className="w-1 h-6 bg-primary rounded-full" />
                      {paragraph.replace("## ", "")}
                    </h2>
                  </div>
                );
              }
              if (paragraph.startsWith("### ")) {
                return (
                  <h3
                    key={index}
                    className="text-xl font-semibold mt-8 mb-3 text-primary"
                  >
                    {paragraph.replace("### ", "")}
                  </h3>
                );
              }
              if (paragraph.startsWith("- ")) {
                const listItems = paragraph
                  .split("\n")
                  .filter((line) => line.startsWith("- "));
                return (
                  <div key={index} className="bg-accent/30 rounded-lg p-6 mb-6">
                    <ul className="space-y-3">
                      {listItems.map((item, itemIndex) => {
                        const content = item.replace("- ", "");
                        const [title, ...description] = content.split(": ");
                        return (
                          <li
                            key={itemIndex}
                            className="flex items-start gap-3"
                          >
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <div>
                              {description.length > 0 ? (
                                <>
                                  <span className="font-semibold">
                                    {title}:
                                  </span>
                                  <span className="ml-1">
                                    {description.join(": ")}
                                  </span>
                                </>
                              ) : (
                                <span>{content}</span>
                              )}
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              }
              if (paragraph.match(/^\d+\. /)) {
                const listItems = paragraph
                  .split("\n")
                  .filter((line) => line.match(/^\d+\. /));
                return (
                  <div key={index} className="bg-primary/5 rounded-lg p-6 mb-6">
                    <ol className="space-y-3">
                      {listItems.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                            {itemIndex + 1}
                          </div>
                          <span className="pt-0.5">
                            {item.replace(/^\d+\. /, "")}
                          </span>
                        </li>
                      ))}
                    </ol>
                  </div>
                );
              }
              if (paragraph.trim()) {
                return (
                  <p key={index} className="mb-6 leading-relaxed text-lg">
                    {paragraph}
                  </p>
                );
              }
              return null;
            })}
          </div>

          {/* Article Footer */}
          <footer className="mt-16 pt-8 border-t border-border">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-sm text-muted-foreground">
                Published on {new Date(blog.publishedAt).toLocaleDateString()}
              </div>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleShare}
                  className="gap-2"
                >
                  <Share2 className="h-4 w-4" />
                  Share Article
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/">View More Posts</Link>
                </Button>
              </div>
            </div>
          </footer>
        </div>
      </article>
    </Layout>
  );
}
