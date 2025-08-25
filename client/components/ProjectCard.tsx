import { Link } from "react-router-dom";
import { Calendar, ExternalLink, Github, Tag } from "lucide-react";
import { Project } from "@shared/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardHeader className="pb-3 pt-6">
        <div className="flex items-center text-sm text-muted-foreground mb-2">
          <Calendar className="h-4 w-4 mr-1" />
          <span>
            Completed {new Date(project.completedAt).toLocaleDateString()}
          </span>
        </div>

        <CardTitle className="text-3xl font-bold line-clamp-2 group-hover:text-primary transition-colors mb-3">
          <Link to={`/project/${project.id}`}>{project.title}</Link>
        </CardTitle>

        <CardDescription className="text-base text-muted-foreground line-clamp-3 leading-relaxed">
          {project.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.slice(0, 3).map((tech, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              <Tag className="h-3 w-3 mr-1" />
              {tech}
            </Badge>
          ))}
          {project.techStack.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{project.techStack.length - 3} more
            </Badge>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          {project.demoUrl && (
            <Button size="sm" variant="outline" asChild className="flex-1">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1"
              >
                <ExternalLink className="h-4 w-4" />
                Demo
              </a>
            </Button>
          )}

          {project.githubUrl && (
            <Button size="sm" variant="outline" asChild className="flex-1">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1"
              >
                <Github className="h-4 w-4" />
                Code
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
