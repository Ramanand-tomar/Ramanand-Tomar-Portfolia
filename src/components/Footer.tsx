import { motion } from "framer-motion";
import { Heart, Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { href: "https://github.com/Ramanand-tomar", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/ramanand-tomar-478528342/", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:ramanandtomar1234@gmail.com", icon: Mail, label: "Email" },
];

export const Footer = () => {
  return (
    <footer className="py-12 relative overflow-hidden border-t border-border">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.a
            href="#home"
            className="text-2xl font-bold text-gradient"
            whileHover={{ scale: 1.05 }}
          >
            Ramanand Tomar
          </motion.a>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="p-3 rounded-xl text-muted-foreground hover:text-primary hover:bg-secondary transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <link.icon size={20} />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
            <span>by Ramanand Tomar</span>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Ramanand Tomar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
