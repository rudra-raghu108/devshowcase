import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navigation: [
      { label: "Home", href: "/" },
      { label: "Blogs", href: "/blogs" },
      { label: "Projects", href: "/projects" },
      { label: "About", href: "/about" },
    ],
    social: [
      {
        label: "GitHub",
        href: "https://github.com",
        icon: Github,
      },
      {
        label: "LinkedIn",
        href: "https://linkedin.com",
        icon: Linkedin,
      },
      {
        label: "Twitter",
        href: "https://twitter.com",
        icon: Twitter,
      },
      {
        label: "Email",
        href: "mailto:hello@devshowcase.com",
        icon: Mail,
      },
    ],
  };

  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">
                  DS
                </span>
              </div>
              <span className="font-bold text-xl text-foreground">
                DevShowcase
              </span>
            </div>
            <p className="text-muted-foreground max-w-md mb-6">
              A modern showcase for development projects and technical writing.
              Explore cutting-edge web technologies, best practices, and
              innovative solutions.
            </p>
            <div className="flex space-x-4">
              {footerLinks.social.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-accent rounded-lg"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Navigation</h3>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <div className="space-y-3 text-muted-foreground">
              <p>hello@devshowcase.com</p>
              <p>Building amazing web experiences</p>
              <p>Open to collaboration</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} DevShowcase. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center gap-1 mt-4 sm:mt-0">
            Made with <Heart className="h-4 w-4 text-red-500" /> using React &
            TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
