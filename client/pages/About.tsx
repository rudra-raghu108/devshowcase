import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Calendar,
  Code,
  BookOpen,
} from "lucide-react";

export default function About() {
  const skills = [
    "React",
    "TypeScript",
    "Next.js",
    "Node.js",
    "Express",
    "PostgreSQL",
    "TailwindCSS",
    "Prisma",
    "GraphQL",
    "AWS",
    "Docker",
    "Git",
  ];

  const experience = [
    {
      role: "Frontend Developer",
      company: "SRM",
      period: "2024 - Present",
      description:
        "Leading development of modern web applications using React and TypeScript.",
    },
    {
      role: "Full Stack Developer",
      company: "StartupCo",
      period: "2020 - 2024",
      description:
        "Built scalable web applications from concept to deployment.",
    },
    {
      role: "Frontend Developer",
      company: "Digital Agency",
      period: "2018 - 2020",
      description:
        "Created responsive websites and interactive user interfaces.",
    },
  ];

  return (
    <Layout>
      <div className="py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-4xl">
                DS
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              About DevShowcase
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Welcome to my digital space where I share my journey in web
              development, showcase projects, and explore the latest
              technologies shaping our industry.
            </p>
          </div>

          {/* Bio Section */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Based in INDIA
              </CardTitle>
              <CardDescription>
                Full Stack Developer & Tech Enthusiast
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="leading-relaxed">
                I'm a passionate full stack developer with over 5+ year of
                experience building modern web applications. I specialize in
                React, TypeScript, and Node.js, with a keen interest in creating
                user-friendly interfaces and scalable backend systems.
              </p>
              <p className="leading-relaxed">
                When I'm not coding, you'll find me writing technical articles,
                contributing to open source projects, or exploring new
                technologies. I believe in the power of sharing knowledge and
                helping others grow in their development journey.
              </p>

              {/* Contact Links */}
              <div className="flex flex-wrap gap-3 pt-4">
                <Button variant="outline" size="sm" asChild>
                  <a
                    href="https://github.com/rudra-raghu108"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gap-2"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a
                    href="www.linkedin.com/in/rudra-raghuwanshi-8b76ab240"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gap-2"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="mailto:rudra.raghuwanshi013@gmail.com" className="gap-2">
                    <Mail className="h-4 w-4" />
                    Email
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Skills Section */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                Technical Skills
              </CardTitle>
              <CardDescription>
                Technologies I work with regularly
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge key={index} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Experience Section */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Experience
              </CardTitle>
              <CardDescription>My professional journey</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {experience.map((job, index) => (
                <div
                  key={index}
                  className="border-l-2 border-primary/20 pl-6 pb-6 last:pb-0"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="font-semibold">{job.role}</h3>
                    <span className="text-sm text-muted-foreground">
                      {job.period}
                    </span>
                  </div>
                  <p className="text-sm text-primary font-medium mb-2">
                    {job.company}
                  </p>
                  <p className="text-muted-foreground">{job.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Let's Connect</h2>
            <p className="text-muted-foreground mb-6">
              Interested in collaborating or have a question? I'd love to hear
              from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="gap-2">
                <a href="mailto:rudra.raghuwanshi013@gmail.com">
                  <Mail className="h-4 w-4" />
                  Get in Touch
                </a>
              </Button>
              <Button variant="outline" asChild className="gap-2">
                <a href="/projects">
                  <BookOpen className="h-4 w-4" />
                  View My Work
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
