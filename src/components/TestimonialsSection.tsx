import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    persona: "Aeronautics Engineer",
    move: "BTM Layout → Sarjapur Road",
    short: "Shifting was not stressful & it was properly handled by trained staff who thoroughly did their job, although being difficult, without a frown or displeasure. I would certainly recommend to others for the professional & on-time service.",
    highlight: "Professional & on-time service",
  },
  {
    persona: "Startup Founder",
    move: "Koramangala → Whitefield",
    short:
      "I hired Zeeroni fully prepared for a struggle, but I couldn't have been more wrong. Not only did they drive the crew (instead of the other way around), but the entire process stayed seamless from start to finish. If you want a move that actually respects your time and sanity, I highly recommend this team.",
    highlight: "A move that respects your time and sanity",
  },
  {
    persona: "Gadget Enthusiast",
    move: "Indiranagar → Electronic City",
    short:
      "I own expensive equipment — an 8K TV, Dyson range, PlayStation — and my biggest worry was safeguarding my belongings. When the team faced unanticipated issues like no truck access to the lift and a higher load than planned, they did not create a ruckus or ask for additional money. What the invoice says is exactly what you pay.",
    highlight: "You pay exactly what you sign up for",
    extra:
      "They were cautious with my stuff, even during dismantling. The whole team is trained to operate this way. There were no hidden charges or hassles over tips at the end.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">
            Real Stories
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-display">
            What Our Customers Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-6 md:p-8 flex flex-col"
            >
              <Quote className="w-8 h-8 text-accent mb-4 shrink-0" />

              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 fill-accent text-accent"
                  />
                ))}
              </div>

              <p className="text-primary-foreground/90 leading-relaxed text-sm md:text-base mb-4 flex-1">
                "{t.short}"
              </p>

              {t.extra && (
                <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
                  "{t.extra}"
                </p>
              )}

              <div className="bg-accent/15 text-accent text-xs font-semibold px-3 py-1.5 rounded-full w-fit mb-5">
                {t.highlight}
              </div>

              <div className="border-t border-primary-foreground/10 pt-4 mt-auto">
                <p className="font-semibold text-sm">{t.persona}</p>
                <p className="text-primary-foreground/60 text-xs">{t.move}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
