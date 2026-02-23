import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, MapPin } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Small Home",
      price: "8,999",
      originalPrice: "15,000",
      description: "Studios & compact apartments",
      features: ["Up to 500 sq ft", "Up to 50 items", "Basic furniture handling", "Standard packing"],
    },
    {
      name: "Medium Home",
      price: "13,999",
      originalPrice: "24,000",
      description: "Mid-sized apartments & small houses",
      features: [
        "Up to 1,000 sq ft",
        "Up to 120 items",
        "Full furniture disassembly",
        "Premium packing materials",
        "Appliance handling",
      ],
      popular: true,
    },
    {
      name: "Large Home",
      price: "20,999",
      originalPrice: "35,000",
      description: "Spacious homes & villas",
      features: [
        "1,000+ sq ft",
        "Up to 200 items",
        "Full furniture disassembly",
        "Premium packing materials",
        "Appliance handling",
        "Priority scheduling",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
            <MapPin size={16} />
            <span>Intra-city moves within</span>
            <span className="font-bold text-primary-background">Bangalore</span>
            <span>only</span>
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Simple, Transparent <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-2">
            No hidden fees, no surprises. Choose the plan that fits your home size.
          </p>
          <p className="text-primary text-sm font-medium max-w-2xl mx-auto">* Introductory offer, limited time only.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-12">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? "bg-primary text-primary-foreground scale-105 shadow-2xl"
                  : "bg-background border border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-accent-foreground text-sm font-medium rounded-full">
                  Most Popular
                </div>
              )}
              <h3
                className={`font-serif text-2xl font-bold mb-2 ${
                  plan.popular ? "text-primary-foreground" : "text-foreground"
                }`}
              >
                {plan.name}
              </h3>
              <p className={`text-sm mb-6 ${plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {plan.description}
              </p>
              <div className="mb-6 flex flex-col items-center">
                {plan.originalPrice && (
                  <span
                    className={`text-xl line-through ${
                      plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"
                    }`}
                  >
                    ₹{plan.originalPrice}
                  </span>
                )}
                <span
                  className={`font-serif text-5xl font-bold ${
                    plan.popular ? "text-primary-foreground" : "text-foreground"
                  }`}
                >
                  ₹{plan.price}
                </span>
                <span className={`text-sm ${plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                  {" "}
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check size={18} className={plan.popular ? "text-accent" : "text-primary"} />
                    <span className={`text-sm ${plan.popular ? "text-primary-foreground/90" : "text-foreground"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <a href="#hero">
                <Button
                  className={`w-full ${plan.popular ? "bg-accent hover:bg-accent/90 text-accent-foreground" : ""}`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  Get Started
                </Button>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
