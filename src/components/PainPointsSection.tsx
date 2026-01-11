import { motion } from "framer-motion";
import { PackageX, BadgeDollarSign, Clock } from "lucide-react";

const painPoints = [
  {
    icon: PackageX,
    title: "Damaged Belongings",
    description: "Unskilled movers and poor packing lead to broken valuables and heartache.",
  },
  {
    icon: BadgeDollarSign,
    title: "Hidden Costs",
    description: "The price you're quoted is rarely the price you pay. Your experience is plagued by last-minute fees.",
  },
  {
    icon: Clock,
    title: "Weeks of Chaos",
    description: "Your home remains a mess of boxes for weeks, preventing you from truly settling in.",
  },
];

const PainPointsSection = () => {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            The Relocation Rollercoaster
          </h2>
          <p className="text-xl text-muted-foreground">
            Moving is stressful enough. Your moving company shouldn't add to it.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-card rounded-2xl p-8 border border-destructive/20 hover:border-destructive/40 transition-all duration-300 card-shadow hover:card-shadow-hover"
            >
              <div className="w-14 h-14 rounded-2xl bg-destructive/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <point.icon className="w-7 h-7 text-destructive" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {point.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
