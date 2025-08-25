import { BlogPost, Project, ContentItem } from '@shared/types';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Building Modern Web Applications with React and TypeScript',
    excerpt: 'Learn how to create scalable and maintainable web applications using React 18 and TypeScript. We\'ll explore best practices, modern patterns, and performance optimization techniques.',
    content: `# Building Modern Web Applications with React and TypeScript

React has evolved significantly over the years, and with the introduction of React 18, we now have powerful tools for building performant and scalable applications. In this comprehensive guide, we'll explore the latest best practices for combining React with TypeScript.

## Why TypeScript?

TypeScript provides several benefits for React development:
- **Type Safety**: Catch errors at compile time rather than runtime
- **Better Developer Experience**: Enhanced autocomplete and refactoring support
- **Self-Documenting Code**: Types serve as inline documentation
- **Improved Collaboration**: Clear interfaces make team development easier

## Modern React Patterns

### 1. Functional Components with Hooks
Modern React development heavily favors functional components with hooks over class components.

### 2. Custom Hooks
Extract complex logic into reusable custom hooks for better code organization.

### 3. Context API for State Management
For moderate state management needs, the Context API provides a great alternative to external libraries.

## Performance Optimization

- Use React.memo for expensive component renders
- Implement proper key props for list items
- Leverage code splitting with React.lazy
- Optimize bundle size with tree shaking

This is just the beginning of creating powerful, modern web applications!`,
    author: 'Sarah Chen',
    publishedAt: '2024-01-15',
    readTime: 8,
    tags: ['React', 'TypeScript', 'Web Development', 'Frontend'],
    coverImage: '/api/placeholder/800/400',
    type: 'blog'
  },
  {
    id: '2',
    title: 'The Future of CSS: Container Queries and Intrinsic Design',
    excerpt: 'Discover how container queries are revolutionizing responsive design and enabling truly component-based styling approaches.',
    content: `# The Future of CSS: Container Queries and Intrinsic Design

CSS is constantly evolving, and one of the most exciting recent additions is container queries. This feature is set to revolutionize how we think about responsive design.

## What are Container Queries?

Container queries allow you to apply styles based on the size of a containing element rather than the viewport size. This enables truly component-based responsive design.

## Benefits of Container Queries

1. **Component-Centric Design**: Style components based on their container size
2. **Reusable Components**: Components can adapt to any container size
3. **Simplified Responsive Logic**: Less complex media query management

## Practical Examples

Let's explore some real-world use cases where container queries shine...`,
    author: 'Marcus Rodriguez',
    publishedAt: '2024-01-08',
    readTime: 6,
    tags: ['CSS', 'Responsive Design', 'Frontend', 'Web Standards'],
    coverImage: '/api/placeholder/800/400',
    type: 'blog'
  },
  {
    id: '3',
    title: 'Mastering API Design: RESTful Principles and GraphQL',
    excerpt: 'A comprehensive guide to designing robust APIs that scale. Compare REST and GraphQL approaches and learn when to use each.',
    content: `# Mastering API Design: RESTful Principles and GraphQL

API design is crucial for building scalable applications. Whether you choose REST or GraphQL, understanding the principles behind good API design will make your applications more maintainable and user-friendly.

## RESTful API Design Principles

REST (Representational State Transfer) is an architectural style that provides guidelines for designing web services:

1. **Stateless**: Each request contains all necessary information
2. **Client-Server**: Clear separation of concerns
3. **Cacheable**: Responses should be cacheable when appropriate
4. **Uniform Interface**: Consistent way to interact with resources

## GraphQL: A Different Approach

GraphQL offers a query language for APIs that allows clients to request exactly the data they need...`,
    author: 'Alex Thompson',
    publishedAt: '2024-01-01',
    readTime: 12,
    tags: ['API Design', 'REST', 'GraphQL', 'Backend', 'Architecture'],
    coverImage: '/api/placeholder/800/400',
    type: 'blog'
  }
];

export const projects: Project[] = [
  {
    id: 'p1',
    title: 'E-Commerce Dashboard',
    description: 'A comprehensive admin dashboard for managing e-commerce operations with real-time analytics and inventory management.',
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
    techStack: ['React', 'TypeScript', 'TailwindCSS', 'Zustand', 'Recharts', 'WebSocket'],
    githubUrl: 'https://github.com/example/ecommerce-dashboard',
    demoUrl: 'https://ecommerce-dashboard-demo.com',
    images: ['/api/placeholder/800/600', '/api/placeholder/800/600', '/api/placeholder/800/600'],
    completedAt: '2024-01-10',
    type: 'project'
  },
  {
    id: 'p2',
    title: 'AI-Powered Content Generator',
    description: 'A machine learning application that generates high-quality content for social media and marketing campaigns.',
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
    techStack: ['Next.js', 'OpenAI API', 'PostgreSQL', 'Prisma', 'Redis', 'Vercel'],
    githubUrl: 'https://github.com/example/ai-content-generator',
    demoUrl: 'https://ai-content-gen.com',
    images: ['/api/placeholder/800/600', '/api/placeholder/800/600'],
    completedAt: '2023-12-15',
    type: 'project'
  },
  {
    id: 'p3',
    title: 'Real-Time Collaboration Tool',
    description: 'A Slack-inspired team communication platform with video calls, file sharing, and project management features.',
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
    techStack: ['React', 'Node.js', 'Socket.IO', 'WebRTC', 'MongoDB', 'AWS S3'],
    githubUrl: 'https://github.com/example/collaboration-tool',
    demoUrl: 'https://collab-tool-demo.com',
    images: ['/api/placeholder/800/600', '/api/placeholder/800/600', '/api/placeholder/800/600', '/api/placeholder/800/600'],
    completedAt: '2023-11-20',
    type: 'project'
  },
  {
    id: 'p4',
    title: 'Smart Fitness Tracker',
    description: 'A mobile-first web application for tracking workouts, nutrition, and fitness goals with AI-powered recommendations.',
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
    techStack: ['React', 'PWA', 'TensorFlow.js', 'IndexedDB', 'Chart.js', 'Service Workers'],
    githubUrl: 'https://github.com/example/fitness-tracker',
    demoUrl: 'https://smart-fitness-tracker.com',
    images: ['/api/placeholder/800/600', '/api/placeholder/800/600'],
    completedAt: '2023-10-05',
    type: 'project'
  }
];

export const allContent: ContentItem[] = [...blogPosts, ...projects];

export const getAllTags = (): string[] => {
  const blogTags = blogPosts.flatMap(post => post.tags);
  const projectTags = projects.flatMap(project => project.techStack);
  return [...new Set([...blogTags, ...projectTags])].sort();
};
