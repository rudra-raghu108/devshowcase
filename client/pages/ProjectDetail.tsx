import { useParams, Link, Navigate } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  ExternalLink,
  Github,
  Tag,
  Share2,
  ImageIcon,
} from "lucide-react";
import { projects } from "@/data/mockData";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: project.title,
          text: project.description,
          url: window.location.href,
        });
      } catch (error) {
        console.log("Error sharing:", error);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <Layout>
      <article className="py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          {/* Back Button */}
          <Button variant="ghost" className="mb-8 gap-2" asChild>
            <Link to="/">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>

          {/* Project Header */}
          <header className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Left Column - Project Info */}
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  {project.title}
                </h1>

                <div className="bg-muted/50 rounded-lg p-6 mb-6">
                  <p className="text-lg leading-relaxed font-medium">
                    {project.description}
                  </p>
                </div>

                {/* Meta Information */}
                <div className="flex items-center gap-2 text-muted-foreground mb-8">
                  <Calendar className="h-4 w-4" />
                  <span>
                    Completed{" "}
                    {new Date(project.completedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.demoUrl && (
                    <Button asChild className="gap-2">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        View Live Demo
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button variant="outline" asChild className="gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4" />
                        View Source Code
                      </a>
                    </Button>
                  )}
                  <Button
                    variant="outline"
                    onClick={handleShare}
                    className="gap-2"
                  >
                    <Share2 className="h-4 w-4" />
                    Share Project
                  </Button>
                </div>

                {/* Tech Stack */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <Badge key={index} variant="secondary" className="gap-1">
                        <Tag className="h-3 w-3" />
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Project Visual */}
              <div className="lg:order-first">
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="aspect-video bg-gradient-to-br from-primary/20 via-accent/10 to-background flex items-center justify-center">
                      <div className="text-center p-8">
                        <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <span className="text-primary-foreground font-bold text-3xl">🛠️</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-muted-foreground">Click demo to see it in action</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Separator className="mt-8" />
          </header>

          {/* Project Features */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <ImageIcon className="h-6 w-6" />
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: "📊", title: "Analytics", desc: "Real-time data visualization and insights" },
                { icon: "🛡️", title: "Security", desc: "Enterprise-grade security and authentication" },
                { icon: "🚀", title: "Performance", desc: "Optimized for speed and scalability" },
                { icon: "📱", title: "Responsive", desc: "Works perfectly on all devices" },
                { icon: "🧩", title: "Modern UI", desc: "Clean, intuitive user interface" },
                { icon: "⚙️", title: "Customizable", desc: "Flexible configuration options" }
              ].slice(0, project.techStack.length > 4 ? 6 : 3).map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Project Description */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">About This Project</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {project.longDescription.split("\n\n").map((paragraph, index) => {
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
                    <h3 key={index} className="text-xl font-semibold mt-8 mb-3 text-primary">
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
                            <li key={itemIndex} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <div>
                                {description.length > 0 ? (
                                  <>
                                    <span className="font-semibold">{title}:</span>
                                    <span className="ml-1">{description.join(": ")}</span>
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
                            <span className="pt-0.5">{item.replace(/^\d+\. /, "")}</span>
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
          </section>

          {/* Project Footer */}
          <footer className="pt-8 border-t border-border">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-sm text-muted-foreground">
                Completed on{" "}
                {new Date(project.completedAt).toLocaleDateString()}
              </div>

              <div className="flex gap-2">
                {project.demoUrl && (
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
                <Button variant="outline" size="sm" asChild>
                  <Link to="/">View More Projects</Link>
                </Button>
              </div>
            </div>
          </footer>
        </div>
      </article>
    </Layout>
  );
}
