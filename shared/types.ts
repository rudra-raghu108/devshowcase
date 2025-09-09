/**
 * Shared types for the blog/project showcase application
 */

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  readTime: number;
  tags: string[];
  coverImage: string;
  type: "blog";
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  images: string[];
  completedAt: string;
  type: "project";
}

export type ContentItem = BlogPost | Project;

export interface SearchFilters {
  query: string;
  type: "all" | "blog" | "project";
  tags: string[];
}

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  createdAt: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignupCredentials {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}