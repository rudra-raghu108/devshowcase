import { BlogPost, Project, ContentItem } from "@shared/types";

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Modern Web Applications with React and TypeScript",
    excerpt:
      "Learn how to create scalable and maintainable web applications using React 18 and TypeScript. We'll explore best practices, modern patterns, and performance optimization techniques.",
    content: `# Building Modern Web Applications with React and TypeScript

The landscape of web development has transformed dramatically with React 18 and TypeScript becoming the gold standard for building enterprise-grade applications. This comprehensive guide explores cutting-edge techniques and best practices that will elevate your development workflow.

## Why TypeScript is Essential for Modern React

TypeScript isn't just a nice-to-have anymore—it's become essential for professional React development:

- **Type Safety**: Catch bugs before they reach production with compile-time error detection
- **Developer Experience**: Enjoy intelligent code completion, refactoring, and navigation
- **Self-Documenting Code**: Types serve as living documentation that never goes out of sync
- **Team Collaboration**: Clear interfaces and contracts make working in teams seamless
- **Refactoring Confidence**: Make large-scale changes with confidence knowing TypeScript has your back

## Modern React Patterns That Scale

### Server Components and Streaming
React 18 introduces server components that dramatically improve performance by reducing client-side JavaScript bundle sizes.

### Concurrent Features
Leverage features like Suspense, useTransition, and useDeferredValue to create smooth, responsive user interfaces.

### Custom Hooks for Logic Reuse
Extract complex stateful logic into custom hooks that can be tested independently and reused across components.

## Performance Optimization Strategies

1. **Component Optimization**: Use React.memo strategically for expensive renders
2. **Bundle Splitting**: Implement route-based and component-based code splitting
3. **State Management**: Choose the right tool for the job—Context API, Zustand, or Redux Toolkit
4. **Rendering Optimization**: Master the art of preventing unnecessary re-renders

Mastering these patterns will set you apart as a React developer and prepare you for the future of web development.`,
    author: "Sarah Chen",
    publishedAt: "2024-01-15",
    readTime: 8,
    tags: ["React", "TypeScript", "Web Development", "Frontend"],
    coverImage: "/api/placeholder/800/400",
    type: "blog",
  },
  {
    id: "2",
    title: "The Future of CSS: Container Queries and Intrinsic Design",
    excerpt:
      "Discover how container queries are revolutionizing responsive design and enabling truly component-based styling approaches.",
    content: `# The Future of CSS: Container Queries and Intrinsic Design

We're witnessing a paradigm shift in CSS that's as significant as the introduction of Flexbox and Grid. Container queries represent the missing piece in responsive design, finally enabling truly component-based styling that adapts to context rather than viewport.

## Understanding Container Queries

Container queries fundamentally change how we approach responsive design by allowing elements to respond to their container's size rather than the viewport:

- **Context-Aware Styling**: Components that adapt to their available space
- **True Component Isolation**: No more global breakpoints affecting local component behavior
- **Flexible Layouts**: Build components that work beautifully in any container size

## Real-World Applications

### Card Components
Create card layouts that automatically switch between horizontal and vertical layouts based on available width.

### Sidebar Navigation
Design navigation components that collapse or expand based on their container, not the entire viewport.

### Dashboard Widgets
Build widgets that intelligently adjust their complexity based on the space allocated to them.

## Implementation Best Practices

1. **Progressive Enhancement**: Start with mobile-first design, then enhance with container queries
2. **Performance Considerations**: Use container queries judiciously to avoid layout thrashing
3. **Fallback Strategies**: Ensure graceful degradation for browsers without support

Container queries are already transforming how we build design systems and will become essential for any serious front-end developer.`,
    author: "Marcus Rodriguez",
    publishedAt: "2024-01-08",
    readTime: 6,
    tags: ["CSS", "Responsive Design", "Frontend", "Web Standards"],
    coverImage: "/api/placeholder/800/400",
    type: "blog",
  },
  {
    id: "3",
    title: "Mastering API Design: RESTful Principles and GraphQL",
    excerpt:
      "A comprehensive guide to designing robust APIs that scale. Compare REST and GraphQL approaches and learn when to use each.",
    content: `# Mastering API Design: RESTful Principles and GraphQL

In today's interconnected world, APIs are the backbone of modern applications. The choice between REST and GraphQL can make or break your application's performance, developer experience, and long-term maintainability.

## The Evolution of API Design

API design has evolved from simple RPC calls to sophisticated systems that power everything from mobile apps to microservices architectures:

- **REST**: The tried-and-true approach that powers most of the web
- **GraphQL**: The query language that's revolutionizing data fetching
- **Modern REST**: Enhanced with OpenAPI specifications and hypermedia controls

## REST: The Foundation of Web APIs

REST remains the gold standard for web APIs when implemented correctly:

1. **Stateless Architecture**: Each request is self-contained and independent
2. **Resource-Based URLs**: Clear, intuitive endpoints that represent data entities
3. **HTTP Methods**: Leverage POST, GET, PUT, DELETE for semantic operations
4. **Status Codes**: Meaningful HTTP status codes that communicate results clearly
5. **Caching Strategy**: Implement proper caching headers for optimal performance

## GraphQL: Precision Data Fetching

GraphQL solves the over-fetching and under-fetching problems that plague REST APIs:

### Query Flexibility
Clients request exactly the data they need, reducing bandwidth and improving performance.

### Type Safety
Strong typing system prevents runtime errors and improves developer experience.

### Single Endpoint
One endpoint to rule them all, simplifying client-server communication.

## Choosing the Right Approach

The decision between REST and GraphQL depends on your specific needs, team expertise, and application requirements. Both can coexist in modern architectures.`,
    author: "Alex Thompson",
    publishedAt: "2024-01-01",
    readTime: 12,
    tags: ["API Design", "REST", "GraphQL", "Backend", "Architecture"],
    coverImage: "/api/placeholder/800/400",
    type: "blog",
  },
];

export const projects: Project[] = [
  {
    id: "p1",
    title: "E-Commerce Dashboard",
    description:
      "A comprehensive admin dashboard for managing e-commerce operations with real-time analytics and inventory management.",
    longDescription: `A fully-featured e-commerce admin dashboard built with React and TypeScript. This project showcases modern web development practices including real-time data visualization, complex state management, and responsive design.

## Key Features
- **Real-time Analytics**: Live sales tracking and performance metrics
- **Inventory Management**: Complete product lifecycle management
- **User Management**: Customer and admin role management
- **Order Processing**: Streamlined order fulfillment workflow
- **Responsive Design**: Optimized for desktop and mobile use

## Technical Highlights
- Built with React 18 and TypeScript for type safety
- State management using Zustand for predictable state updates
- Real-time updates using WebSocket connections
- Data visualization with Recharts library
- Responsive design with TailwindCSS
- Comprehensive testing suite with Vitest

The dashboard processes over 10,000 transactions daily and provides insights that have helped increase conversion rates by 23%.`,
    techStack: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Zustand",
      "Recharts",
      "WebSocket",
    ],
    githubUrl: "https://github.com/example/ecommerce-dashboard",
    demoUrl: "https://ecommerce-dashboard-demo.com",
    images: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
    ],
    completedAt: "2024-01-10",
    type: "project",
  },
  {
    id: "p2",
    title: "AI-Powered Content Generator",
    description:
      "A machine learning application that generates high-quality content for social media and marketing campaigns.",
    longDescription: `An innovative AI-powered content generation platform that helps businesses create engaging social media posts, blog articles, and marketing copy. The application leverages advanced natural language processing to understand brand voice and generate contextually relevant content.

## Core Functionality
- **Multi-format Content**: Generate posts for various social media platforms
- **Brand Voice Training**: AI learns and adapts to specific brand tones
- **Content Calendar**: Schedule and manage content across platforms
- **Performance Analytics**: Track engagement and optimize content strategy
- **Team Collaboration**: Multi-user workspace with approval workflows

## Technical Architecture
- Next.js with App Router for optimal performance
- Integration with OpenAI GPT models for content generation
- PostgreSQL database with Prisma ORM
- Redis for caching and session management
- Deployed on Vercel with edge functions

The platform has generated over 50,000 pieces of content and helped clients increase their social media engagement by an average of 45%.`,
    techStack: [
      "Next.js",
      "OpenAI API",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "Vercel",
    ],
    githubUrl: "https://github.com/example/ai-content-generator",
    demoUrl: "https://ai-content-gen.com",
    images: ["/api/placeholder/800/600", "/api/placeholder/800/600"],
    completedAt: "2023-12-15",
    type: "project",
  },
  {
    id: "p3",
    title: "Real-Time Collaboration Tool",
    description:
      "A Slack-inspired team communication platform with video calls, file sharing, and project management features.",
    longDescription: `A comprehensive team collaboration platform designed to streamline communication and project management. Built with modern web technologies to support real-time interactions and seamless file sharing across distributed teams.

## Features Overview
- **Real-time Messaging**: Instant messaging with typing indicators and read receipts
- **Video Conferencing**: Integrated video calls with screen sharing
- **File Management**: Secure file upload, sharing, and version control
- **Project Boards**: Kanban-style project management with drag-and-drop
- **Search & Analytics**: Powerful search across all content and usage analytics

## Technical Implementation
- React with TypeScript for the frontend application
- Node.js and Express for the backend API
- Socket.IO for real-time communication features
- WebRTC for peer-to-peer video calls
- MongoDB for flexible document storage
- AWS S3 for secure file storage and CDN delivery

Currently serving over 1,000 active teams with 99.9% uptime and sub-100ms message delivery times.`,
    techStack: ["React", "Node.js", "Socket.IO", "WebRTC", "MongoDB", "AWS S3"],
    githubUrl: "https://github.com/example/collaboration-tool",
    demoUrl: "https://collab-tool-demo.com",
    images: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
    ],
    completedAt: "2023-11-20",
    type: "project",
  },
  {
    id: "p4",
    title: "Smart Fitness Tracker",
    description:
      "A mobile-first web application for tracking workouts, nutrition, and fitness goals with AI-powered recommendations.",
    longDescription: `A comprehensive fitness tracking application that combines workout logging, nutrition tracking, and AI-powered personalized recommendations. The app uses machine learning to adapt to user preferences and provide intelligent insights for achieving fitness goals.

## Key Capabilities
- **Workout Tracking**: Log exercises with sets, reps, and progress tracking
- **Nutrition Logger**: Comprehensive food database with macro tracking
- **AI Recommendations**: Personalized workout and meal suggestions
- **Progress Analytics**: Visual charts and reports for goal tracking
- **Social Features**: Connect with friends and share achievements

## Technology Stack
- Progressive Web App (PWA) built with React and TypeScript
- IndexedDB for offline data storage and synchronization
- TensorFlow.js for client-side ML recommendations
- Chart.js for data visualization and progress tracking
- Service Workers for offline functionality and push notifications

The app has helped over 5,000 users achieve their fitness goals with an average adherence rate of 78% over 6 months.`,
    techStack: [
      "React",
      "PWA",
      "TensorFlow.js",
      "IndexedDB",
      "Chart.js",
      "Service Workers",
    ],
    githubUrl: "https://github.com/example/fitness-tracker",
    demoUrl: "https://smart-fitness-tracker.com",
    images: ["/api/placeholder/800/600", "/api/placeholder/800/600"],
    completedAt: "2023-10-05",
    type: "project",
  },
];

export const allContent: ContentItem[] = [...blogPosts, ...projects];

export const getAllTags = (): string[] => {
  const blogTags = blogPosts.flatMap((post) => post.tags);
  const projectTags = projects.flatMap((project) => project.techStack);
  return [...new Set([...blogTags, ...projectTags])].sort();
};
