import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Github, Linkedin, Send, ArrowUpRight } from "lucide-react";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "ramanandtomar1234@gmail.com",
    href: "mailto:ramanandtomar1234@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "Ramanand-tomar",
    href: "https://github.com/Ramanand-tomar",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "ramanand-tomar",
    href: "https://www.linkedin.com/in/ramanand-tomar-478528342/",
  },
];

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const mailtoLink = `mailto:ramanandtomar1234@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    toast.success("Opening your email client...");
  };

  return (
    <section id="contact" className="py-12 md:py-20 lg:py-24 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-radial-gradient" />
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="text-primary font-mono text-xs sm:text-sm uppercase tracking-widest">
            Get In Touch
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 md:mt-4 text-gradient">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg mt-3 md:mt-4 max-w-2xl mx-auto px-2">
            Have a project in mind or want to collaborate? Feel free to reach out.
            I'm always open to discussing new opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 lg:gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-2xl p-4 sm:p-6 md:p-8 w-full"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 md:mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label className="block text-xs sm:text-sm font-medium text-muted-foreground mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground text-sm sm:text-base"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label className="block text-xs sm:text-sm font-medium text-muted-foreground mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground text-sm sm:text-base"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label className="block text-xs sm:text-sm font-medium text-muted-foreground mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground resize-none text-sm sm:text-base"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-4 sm:px-8 py-3 sm:py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-300 glow text-sm sm:text-base"
                whileHover={{ scale: 1.02, boxShadow: "0 0 50px hsl(192, 91%, 56%, 0.4)" }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
                <Send size={18} />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4 md:space-y-8 w-full"
          >
            <div className="glass rounded-2xl p-4 sm:p-6 md:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 md:mb-6">Connect With Me</h3>
              
              <div className="space-y-3 md:space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-secondary/50 hover:bg-secondary border border-transparent hover:border-primary/30 transition-all group"
                  >
                    <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                      <item.icon className="w-4 sm:w-5 h-4 sm:h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs sm:text-sm text-muted-foreground">{item.label}</p>
                      <p className="font-medium text-foreground text-sm sm:text-base truncate">{item.value}</p>
                    </div>
                    <ArrowUpRight className="w-4 sm:w-5 h-4 sm:h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="glass rounded-2xl p-4 sm:p-6 md:p-8 text-center"
            >
              <p className="text-lg sm:text-xl md:text-2xl font-medium text-foreground italic px-2">
                "I turn ideas into reality through code & curiosity."
              </p>
              <p className="text-primary mt-3 md:mt-4 font-semibold text-sm sm:text-base">— Ramanand Tomar</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
