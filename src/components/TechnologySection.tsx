import { motion } from "framer-motion";
import { Brain, Route, ShieldCheck, Headphones } from "lucide-react";

const techFeatures = [
  {
    icon: Brain,
    title: "Intelligent Consultation & Pricing",
    description: "Our journey starts with intelligent data. AI analyzes your requirements for accurate quotes.",
  },
  {
    icon: Route,
    title: "Precision Planning & Logistics",
    description: "Advanced 'Zero-Touch' surveys for accurate inventory and optimal route planning.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Monitored Moving Day",
    description: "Our technology ensures authorized crew, provides accountability and monitors transit.",
  },
  {
    icon: Headphones,
    title: "Effortless Settling & Support",
    description: "AI Concierge guides unpacking and provides personalized support post-move.",
  },
];

const TechnologySection = () => {
  return (
    <section id="technology" className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-primary font-medium mb-4">POWERED BY INNOVATION</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Your Entire Move, Guided by AI & Technology
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              From your first click to settling into your new home, our advanced AI and innovative tech stack 
              ensure a seamless, transparent, and stress-free experience.
            </p>
            
            <div className="grid gap-6">
              {techFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
            <div className="relative bg-card rounded-3xl overflow-hidden border border-border/50 card-shadow">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop"
                alt="Technology dashboard"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
