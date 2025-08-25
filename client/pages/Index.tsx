import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Code, Sparkles } from "lucide-react";
import { ContentItem, SearchFilters } from "@shared/types";
import { allContent } from "@/data/mockData";
import Layout from "@/components/Layout";
import SearchAndFilter from "@/components/SearchAndFilter";
import BlogCard from "@/components/BlogCard";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";

export default function Index() {
  const [filters, setFilters] = useState<SearchFilters>({
    query: "",
    type: "all",
    tags: [],
  });

  // Filter content based on search criteria
  const filteredContent = useMemo(() => {
    return allContent.filter((item) => {
      // Type filter
      if (filters.type !== "all" && item.type !== filters.type) {
        return false;
      }

      // Query filter
      if (filters.query) {
        const query = filters.query.toLowerCase();
        const searchableText = [
          item.title,
          item.type === "blog" ? item.excerpt : item.description,
          item.type === "blog" ? item.author : "",
          ...(item.type === "blog" ? item.tags : item.techStack),
        ]
          .join(" ")
          .toLowerCase();

        if (!searchableText.includes(query)) {
          return false;
        }
      }

      // Tags filter
      if (filters.tags.length > 0) {
        const itemTags = item.type === "blog" ? item.tags : item.techStack;
        const hasMatchingTag = filters.tags.some((tag) =>
          itemTags.some((itemTag) =>
            itemTag.toLowerCase().includes(tag.toLowerCase()),
          ),
        );
        if (!hasMatchingTag) {
          return false;
        }
      }

      return true;
    });
  }, [filters]);

  // Sort content by date (newest first)
  const sortedContent = useMemo(() => {
    return [...filteredContent].sort((a, b) => {
      const dateA = new Date(a.type === "blog" ? a.publishedAt : a.completedAt);
      const dateB = new Date(b.type === "blog" ? b.publishedAt : b.completedAt);
      return dateB.getTime() - dateA.getTime();
    });
  }, [filteredContent]);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-accent/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 sm:pb-24 lg:pb-32">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            {/* Hero Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">
                Welcome to DevShowcase
              </span>
            </div>

            {/* Hero Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                Code, Create, and
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Share Ideas
              </span>
            </h1>

            {/* Hero Description */}
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Explore a curated collection of development projects, technical
              insights, and innovative solutions. From cutting-edge web
              applications to thoughtful blog posts about the latest in tech.
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="gap-2" asChild>
                <Link to="#showcase">
                  <BookOpen className="h-5 w-5" />
                  Explore Content
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <Link to="/projects">
                  <Code className="h-5 w-5" />
                  View Projects
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Content Showcase Section */}
      <section id="showcase" className="pb-20 -mt-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <p>Content</p>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the latest projects, tutorials, and insights from the
              world of web development.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-12">
            <SearchAndFilter
              filters={filters}
              onFiltersChange={setFilters}
              resultsCount={filteredContent.length}
            />
          </div>

          {/* Content Grid */}
          {sortedContent.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedContent.map((item) => (
                <div key={`${item.type}-${item.id}`}>
                  {item.type === "blog" ? (
                    <BlogCard blog={item} />
                  ) : (
                    <ProjectCard project={item} />
                  )}
                </div>
              ))}
            </div>
          ) : (
            /* No Results */
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-6 bg-muted rounded-full flex items-center justify-center">
                <BookOpen className="h-12 w-12 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No content found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search criteria or clearing the filters.
              </p>
              <Button
                variant="outline"
                onClick={() => setFilters({ query: "", type: "all", tags: [] })}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 sm:py-20 bg-accent/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Ready to dive deeper?
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore dedicated sections for blogs and projects, or learn more
              about the technologies and methodologies behind these creations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/blogs">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Read All Blogs
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/projects">
                  <Code className="h-5 w-5 mr-2" />
                  View All Projects
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
