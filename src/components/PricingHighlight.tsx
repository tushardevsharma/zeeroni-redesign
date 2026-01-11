import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";

const PricingHighlight = () => {
  const plans = [
    { name: "1 BHK", price: "8K" },
    { name: "2 BHK", price: "12K" },
    { name: "3 BHK", price: "16K" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="mt-8 p-4 rounded-2xl bg-accent/10 border border-accent/20"
    >
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm">
          <MapPin size={16} className="text-accent" />
          <span className="text-muted-foreground">Intra-city moves within</span>
          <span className="font-semibold text-foreground">Bangalore</span>
        </div>
        
        <div className="flex items-center gap-3">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm ${
                index === 1 
                  ? "bg-accent text-accent-foreground font-semibold" 
                  : "bg-muted text-foreground"
              }`}
            >
              <span>{plan.name}</span>
              <span className="font-bold">₹{plan.price}</span>
            </div>
          ))}
        </div>

        <a 
          href="#pricing" 
          className="flex items-center gap-1 text-sm text-accent hover:text-accent/80 transition-colors font-medium"
        >
          View Details
          <ArrowRight size={14} />
        </a>
      </div>
    </motion.div>
  );
};

export default PricingHighlight;
