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

                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

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

              {/* Right Column - Main Image */}
              <div className="lg:order-first">
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="aspect-video">
                      <img
                        src={project.images[0]}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Separator className="mt-8" />
          </header>

          {/* Project Gallery */}
          {project.images.length > 1 && (
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <ImageIcon className="h-6 w-6" />
                Project Gallery
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.images.slice(1).map((image, index) => (
                  <Card
                    key={index}
                    className="overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <CardContent className="p-0">
                      <div className="aspect-video">
                        <img
                          src={image}
                          alt={`${project.title} screenshot ${index + 2}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {/* Project Description */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">About This Project</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {/* Simple markdown-like content rendering */}
              {project.longDescription.split("\n\n").map((paragraph, index) => {
                if (paragraph.startsWith("# ")) {
                  return (
                    <h1
                      key={index}
                      className="text-3xl font-bold mt-12 mb-6 first:mt-0"
                    >
                      {paragraph.replace("# ", "")}
                    </h1>
                  );
                }
                if (paragraph.startsWith("## ")) {
                  return (
                    <h2
                      key={index}
                      className="text-2xl font-semibold mt-10 mb-4"
                    >
                      {paragraph.replace("## ", "")}
                    </h2>
                  );
                }
                if (paragraph.startsWith("### ")) {
                  return (
                    <h3 key={index} className="text-xl font-semibold mt-8 mb-3">
                      {paragraph.replace("### ", "")}
                    </h3>
                  );
                }
                if (paragraph.startsWith("- ")) {
                  const listItems = paragraph
                    .split("\n")
                    .filter((line) => line.startsWith("- "));
                  return (
                    <ul key={index} className="list-disc pl-6 mb-6 space-y-2">
                      {listItems.map((item, itemIndex) => (
                        <li key={itemIndex}>{item.replace("- ", "")}</li>
                      ))}
                    </ul>
                  );
                }
                if (paragraph.match(/^\d+\. /)) {
                  const listItems = paragraph
                    .split("\n")
                    .filter((line) => line.match(/^\d+\. /));
                  return (
                    <ol
                      key={index}
                      className="list-decimal pl-6 mb-6 space-y-2"
                    >
                      {listItems.map((item, itemIndex) => (
                        <li key={itemIndex}>{item.replace(/^\d+\. /, "")}</li>
                      ))}
                    </ol>
                  );
                }
                if (paragraph.trim()) {
                  return (
                    <p key={index} className="mb-6 leading-relaxed">
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
