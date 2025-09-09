# BlogSpace

A modern, responsive blogging platform built with React, TypeScript, and TailwindCSS. BlogSpace provides a clean and intuitive interface for sharing development insights, showcasing projects, and exploring cutting-edge web technologies.

<img width="1919" height="1024" alt="Screenshot 2025-09-09 211456" src="https://github.com/user-attachments/assets/10300a4a-1f12-4dc9-b532-db639a30da72" />

## ✨ Features

- **📱 Responsive Design**: Mobile-first approach ensuring perfect display across all devices
- **🌙 Dark Mode Toggle**: Seamless theme switching with TailwindCSS-powered dark mode
- **📝 Markdown Support**: Rich content formatting with proper syntax highlighting
- **🔍 Search & Filter**: Advanced filtering capabilities for blogs and projects
- **⚡ Fast Performance**: Built with modern web technologies for optimal speed
- **🧩 Component-based Architecture**: Modular, reusable components for maintainability
- **📊 Content Management**: Dynamic content rendering with proper SEO optimization
- **🎨 Modern UI**: Clean design system with customizable themes

## 🚀 Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: TailwindCSS 3 with custom design tokens
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: React Router 6 (SPA mode)
- **UI Components**: Radix UI primitives with custom styling
- **Icons**: Lucide React for consistent iconography
- **Package Manager**: PNPM for efficient dependency management
- **Backend**: Express.js server integrated with Vite dev server

## 📁 Project Structure

```
BlogSpace/
├── client/                   # Frontend React application
│   ├── components/
│   │   ├── ui/              # Reusable UI components
│   │   ├── BlogCard.tsx     # Blog post card component
│   │   ├── ProjectCard.tsx  # Project showcase card
│   │   ├── Navbar.tsx       # Navigation component
│   │   └── Footer.tsx       # Footer component
│   ├── pages/               # Route components
│   │   ├── Index.tsx        # Homepage
│   │   ├── About.tsx        # About page
│   │   ├── Blogs.tsx        # Blog listing
│   │   └── Projects.tsx     # Project showcase
│   ���── contexts/            # React contexts
│   ├── data/                # Mock data and content
│   ├── hooks/               # Custom React hooks
│   └── lib/                 # Utility functions
├── server/                  # Express backend
│   ├── routes/              # API endpoints
│   └── index.ts             # Server configuration
├── shared/                  # Shared types and interfaces
└── public/                  # Static assets
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ (recommended: use the latest LTS version)
- PNPM (preferred package manager)

### Installation

1. **Clone the repository**

```bash
git clone <repository-url>
cd blogspace
```

2. **Install dependencies**

```bash
pnpm install
```

3. **Start the development server**

```bash
pnpm dev
```

The application will be available at `http://localhost:8080`

### Available Scripts

```bash
# Development
pnpm dev          # Start development server with hot reload

# Building
pnpm build        # Build for production
pnpm build:client # Build only the client
pnpm build:server # Build only the server

# Production
pnpm start        # Start production server

# Testing & Quality
pnpm test         # Run test suite
pnpm typecheck    # TypeScript type checking
pnpm format.fix   # Format code with Prettier
```

## 🎨 Customization

### Theme Configuration

Customize colors and design tokens in:

- `client/global.css` - CSS custom properties
- `tailwind.config.ts` - TailwindCSS theme configuration

### Adding Content

1. **Blog Posts**: Add new blog entries to `client/data/mockData.ts`
2. **Projects**: Update the projects array in the same file
3. **Navigation**: Modify routes in `client/App.tsx`

### Component Styling

All components use TailwindCSS with a custom design system:

- Primary colors: Purple/violet theme
- Modern spacing and typography
- Responsive breakpoints
- Dark mode support

## 📄 Content Management

### Blog Posts

Blog posts support rich markdown-style content with:

- Headings (H1, H2, H3)
- Lists (ordered and unordered)
- Code blocks and inline code
- Proper typography and spacing

### Project Showcase

Projects feature:

- Detailed descriptions
- Technology stack badges
- Live demo links
- Responsive image galleries
- Feature highlights

## 🌐 Deployment Options

### ⭐ Deploy on Vercel

1. **Connect Vercel MCP**: Use the platform's MCP integration
2. **Automatic Deployment**: Push to main branch triggers builds
3. **Environment Variables**: Configure through Vercel dashboard
4. **Custom Domains**: Easy domain setup and SSL

```bash
# Build command
pnpm build

# Output directory
dist/spa
```

### ⭐ Deploy on Netlify

1. **Connect Netlify MCP**: Use the platform's MCP integration
2. **Build Settings**:
   - Build command: `pnpm build`
   - Publish directory: `dist/spa`
3. **Environment Variables**: Set through Netlify UI
4. **Edge Functions**: Utilize for advanced features

### Alternative Deployment

For other hosting providers:

1. **Build the application**

```bash
pnpm build
```

2. **Serve the static files**
   The `dist/spa` directory contains all static assets ready for deployment.

## ⭐ Key Features Implementation

### Dark Mode Toggle (TailwindCSS)

Implemented using:

- TailwindCSS `dark:` variants
- React Context for theme state
- Local storage persistence
- Smooth transitions

### Markdown Support

Content rendering supports:

- GitHub Flavored Markdown
- Syntax highlighting
- Custom styling for code blocks
- Responsive images and media

### Fetch Data (JSON / API)

Data architecture:

- Mock data in TypeScript files
- API-ready structure for backend integration
- Type-safe data models
- Efficient content filtering and search

### Basic Routing (React Router)

SPA routing with:

- React Router 6
- Nested routes
- Dynamic parameters
- 404 error handling
- SEO-friendly URLs

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Rudra Raghuwanshi**

- GitHub: [@rudra-raghu108](https://github.com/rudra-raghu108)
- LinkedIn: [rudra-raghuwanshi](https://www.linkedin.com/in/rudra-raghuwanshi-8b76ab240)
- Instagram: [@_rudra_13_](https://www.instagram.com/_rudra_13_?igsh=MWgxYzR2MDg1bnJ3dg==)
- Email: rudra.raghuwanshi013@gmail.com

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/) and [TypeScript](https://www.typescriptlang.org/)
- Styled with [TailwindCSS](https://tailwindcss.com/)
- Icons by [Lucide](https://lucide.dev/)
- Powered by [Vite](https://vitejs.dev/)

---
