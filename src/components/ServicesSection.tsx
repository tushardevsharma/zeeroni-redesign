import { motion } from "framer-motion";
import { Package, Wrench, Tv, ChefHat, Shirt, Sparkles } from "lucide-react";

const services = [
  {
    icon: Package,
    title: "Expert Packing & Moving",
    description: "From fragile items to bulky furniture, we pack and transport everything with the utmost care.",
  },
  {
    icon: Wrench,
    title: "Furniture Assembly",
    description: "Beds, tables, shelves - we assemble all your furniture so you don't have to lift a finger.",
  },
  {
    icon: Tv,
    title: "Appliance Installation",
    description: "We'll install your TV, washing machine, fridge, and other appliances so they're ready to use.",
  },
  {
    icon: ChefHat,
    title: "Kitchen Setup",
    description: "We'll unpack and organize your kitchen, so you can cook your first meal without the hassle.",
  },
  {
    icon: Shirt,
    title: "Wardrobe Organization",
    description: "Your clothes are unpacked and arranged in your closets, making you feel right at home.",
  },
  {
    icon: Sparkles,
    title: "The Final Touches",
    description: "We can help with small decor, hanging pictures, and making the space truly yours.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-primary font-medium mb-4">COMPREHENSIVE SERVICES</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            What "Fully Settled" Looks Like
          </h2>
          <p className="text-xl text-muted-foreground">
            We offer a comprehensive suite of services to make your new house a home, instantly.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-300 card-shadow hover:card-shadow-hover"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
