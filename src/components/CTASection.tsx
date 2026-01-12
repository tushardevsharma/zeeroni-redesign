import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const guarantees = [
  "100% Transparent Pricing",
  "Fully Settled on Day One",
  "Dedicated Move Lead",
  "Insured & Vetted Crews",
];

const CTASection = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-primary rounded-3xl p-12 md:p-16 overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Zeeroni Happiness Guarantee
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-10">
              Ready to experience moving the way it should be? Get your free, no-obligation quote today.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {guarantees.map((guarantee, index) => (
                <motion.div
                  key={guarantee}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-2 bg-primary-foreground/10 rounded-full px-4 py-2 text-primary-foreground"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="text-sm font-medium">{guarantee}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center">
              <a href="#hero">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="text-lg px-8 py-6 group bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  Book Now
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
            </div>
            <p className="text-xl text-primary-foreground/80 mb-4">
              If you aren't completely satisfied with our moving service, we will refund 100% of your investment.
              No hoops to jump through, no awkward questions - just
            </p>
            
            <Button variant="secondary" size="lg" className="w-full sm:w-auto text-lg px-8 py-6 group bg-primary-foreground text-primary hover:bg-primary-foreground/90 mb-10" asChild>
              <Link to="/zeeroni-happiness-guarantee" className="flex items-center justify-center">
                Reach out
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
