import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Book a Move",
    description: "Tell us about your move. We'll create a detailed, no-obligation plan and quote tailored to you.",
  },
  {
    number: "02",
    title: "We Plan, You Relax",
    description: "We handle all the logistics. Packing materials, crew, truck, and timeline are all sorted by us.",
  },
  {
    number: "03",
    title: "The Magic Happens",
    description: "Leave your old home in the morning. We pack, move, and set up everything in your new home.",
  },
  {
    number: "04",
    title: "Welcome Home",
    description: "Arrive at your new home, fully set up and ready to live in from the very first minute.",
  },
];

const StepsSection = () => {
  return (
    <section id="how-it-works" className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Four Steps to a Perfect Move
          </h2>
          <p className="text-xl opacity-80">
            From consultation to complete setup, we've streamlined the entire process.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 h-full border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-colors">
                <span className="text-5xl font-serif font-bold opacity-30 mb-4 block">
                  {step.number}
                </span>
                <h3 className="font-serif text-xl font-semibold mb-3">
                  {step.title}
                </h3>
                <p className="opacity-80 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary-foreground/30" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
