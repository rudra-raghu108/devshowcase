import { useState, useMemo } from "react";
import { SearchFilters } from "@shared/types";
import { projects } from "@/data/mockData";
import Layout from "@/components/Layout";
import SearchAndFilter from "@/components/SearchAndFilter";
import ProjectCard from "@/components/ProjectCard";
import { Code } from "lucide-react";

export default function Projects() {
  const [filters, setFilters] = useState<SearchFilters>({
    query: "",
    type: "project",
    tags: [],
  });

  // Filter projects based on search criteria
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Query filter
      if (filters.query) {
        const query = filters.query.toLowerCase();
        const searchableText = [
          project.title,
          project.description,
          ...project.techStack,
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
          project.techStack.some((tech) =>
            tech.toLowerCase().includes(tag.toLowerCase()),
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
              <Code className="h-4 w-4" />
              <span className="text-sm font-medium">Portfolio Projects</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Development Projects
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A collection of web applications, tools, and experiments
              showcasing modern development practices and innovative solutions.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-12">
            <SearchAndFilter
              filters={filters}
              onFiltersChange={setFilters}
              resultsCount={filteredProjects.length}
            />
          </div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-6 bg-muted rounded-full flex items-center justify-center">
                <Code className="h-12 w-12 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No projects found</h3>
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
