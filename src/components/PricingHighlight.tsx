import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";

const PricingHighlight = () => {
  const plans = [
    { name: "1 BHK", price: "₹8,999", originalPrice: "₹15,000" },
    { name: "2 BHK", price: "₹13,999", originalPrice: "₹24,000" },
    { name: "3 BHK", price: "₹20,999", originalPrice: "₹35,000" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="sticky top-[72px] z-40 bg-gradient-to-r from-primary via-primary to-primary/95 border-b border-primary-foreground/10 shadow-lg"
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
          <div className="flex items-center gap-2 text-sm text-primary-foreground/90">
            <MapPin size={16} className="text-accent" />
            <span>Intra-city moves within</span>
            <span className="font-semibold text-primary-foreground">Bangalore</span>
            <span>only</span>
          </div>

          <div className="hidden sm:block w-px h-5 bg-primary-foreground/20" />
          <span className="text-sm font-medium text-accent-foreground bg-accent px-2 py-0.5 rounded-full">
            Introductory offer, limited time only
          </span>
          <div className="hidden sm:block w-px h-5 bg-primary-foreground/20" />

          <div className="flex items-center gap-2 sm:gap-3">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-full text-sm transition-all ${
                  index === 1
                    ? "bg-accent text-accent-foreground font-semibold scale-105 shadow-md"
                    : "bg-primary-foreground/15 text-primary-foreground hover:bg-primary-foreground/25"
                }`}
              >
                <span className="text-xs sm:text-sm">{plan.name}</span>
                <div className="flex items-center gap-1">
                  {plan.originalPrice && (
                    <span className="text-[10px] line-through text-primary-foreground/70">₹{plan.originalPrice}</span>
                  )}
                  <span className="font-bold">₹{plan.price}</span>
                </div>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="flex items-center gap-1 text-sm text-accent hover:text-accent/80 transition-colors font-medium"
          >
            Our Happiness Guarantee
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default PricingHighlight;
