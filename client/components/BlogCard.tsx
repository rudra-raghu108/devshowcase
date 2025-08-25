import { Link } from "react-router-dom";
import { Calendar, Clock, User, Tag } from "lucide-react";
import { BlogPost } from "@shared/types";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface BlogCardProps {
  blog: BlogPost;
}

const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="aspect-video overflow-hidden rounded-t-lg">
        <img
          src={blog.coverImage}
          alt={blog.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <CardHeader className="pb-3">
        <div className="flex items-center text-sm text-muted-foreground mb-2 gap-4">
          <div className="flex items-center gap-1">
            <User className="h-4 w-4" />
            <span>{blog.author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{new Date(blog.publishedAt).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{blog.readTime} min read</span>
          </div>
        </div>

        <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
          <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
        </CardTitle>

        <CardDescription className="line-clamp-3">
          {blog.excerpt}
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="flex flex-wrap gap-2">
          {blog.tags.slice(0, 3).map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              <Tag className="h-3 w-3 mr-1" />
              {tag}
            </Badge>
          ))}
          {blog.tags.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{blog.tags.length - 3} more
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
