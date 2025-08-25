import { useState, useMemo } from "react";
import { SearchFilters } from "@shared/types";
import { blogPosts } from "@/data/mockData";
import Layout from "@/components/Layout";
import SearchAndFilter from "@/components/SearchAndFilter";
import BlogCard from "@/components/BlogCard";
import { BookOpen } from "lucide-react";

export default function Blogs() {
  const [filters, setFilters] = useState<SearchFilters>({
    query: "",
    type: "blog",
    tags: [],
  });

  // Filter blogs based on search criteria
  const filteredBlogs = useMemo(() => {
    return blogPosts.filter((blog) => {
      // Query filter
      if (filters.query) {
        const query = filters.query.toLowerCase();
        const searchableText = [
          blog.title,
          blog.excerpt,
          blog.author,
          ...blog.tags,
        ]
          .join(" ")
          .toLowerCase();

        if (!searchableText.includes(query)) {
          return false;
        }
      }

      // Tags filter
      if (filters.tags.length > 0) {
        const hasMatchingTag = filters.tags.some((tag) =>
          blog.tags.some((blogTag) =>
            blogTag.toLowerCase().includes(tag.toLowerCase()),
          ),
        );
        if (!hasMatchingTag) {
          return false;
        }
      }

      return true;
    });
  }, [filters]);

  return (
    <Layout>
      <div className="py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6">
              <BookOpen className="h-4 w-4" />
              <span className="text-sm font-medium">Blog Posts</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Technical Insights & Tutorials
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dive deep into web development, best practices, and the latest
              technologies shaping the future of software development.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-12">
            <SearchAndFilter
              filters={filters}
              onFiltersChange={setFilters}
              resultsCount={filteredBlogs.length}
            />
          </div>

          {/* Blogs Grid */}
          {filteredBlogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-6 bg-muted rounded-full flex items-center justify-center">
                <BookOpen className="h-12 w-12 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                No blog posts found
              </h3>
              <p className="text-muted-foreground">
                Try adjusting your search criteria or clearing the filters.
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
