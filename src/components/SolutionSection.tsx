import { motion } from "framer-motion";
import { User, Users, Shield } from "lucide-react";

const solutions = [
  {
    icon: User,
    title: "One Point of Contact",
    description: "We coordinate everything, so you don't have to. Your dedicated move consultant is with you every step of the way.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&auto=format&fit=crop",
  },
  {
    icon: Users,
    title: "Vetted, Professional Crew",
    description: "Our partners are an extension of our team, trained to our high standards of care and professionalism.",
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=800&auto=format&fit=crop",
  },
  {
    icon: Shield,
    title: "Transparent Pricing",
    description: "The price we quote is the price you pay. No surprises, no hidden fees. Ever.",
    image: "https://images.unsplash.com/photo-1564669722947-c89159202d19?q=80&w=800&auto=format&fit=crop",
  },
];

const SolutionSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-primary font-medium mb-4">THE ZEERONI DIFFERENCE</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Your Move, Mastered.
          </h2>
          <p className="text-xl text-muted-foreground">
            We pack, move, and fully set up your new home with data-driven precision while you sit back and relax.
            <span className="block mt-2 font-medium text-foreground">Zero chaos, zero cartons, 100% ready to live.</span>
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group bg-card rounded-3xl overflow-hidden border border-border/50 card-shadow hover:card-shadow-hover transition-all duration-500"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>
              <div className="p-8 -mt-8 relative">
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-4 shadow-lg">
                  <solution.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {solution.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
