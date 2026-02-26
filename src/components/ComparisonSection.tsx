import { motion } from "framer-motion";
import { CalendarCheck, Tag, Truck, Home, Check, X, AlertTriangle } from "lucide-react";

const ComparisonSection = () => {
  const categories = [
    {
      label: "Booking",
      icon: CalendarCheck,
      legacy: "Physical survey visit — takes days",
      aggregator: "Manual inventory entry — tedious & error-prone",
      zeeroni: "AI Video Scan — done in minutes",
    },
    {
      label: "Pricing",
      icon: Tag,
      legacy: "Negotiable & opaque — you never know the real cost",
      aggregator: "Low-ball quote, then inflate on move day",
      zeeroni: "Fixed quote upfront — no haggling, no surprises",
    },
    {
      label: "Move Day",
      icon: Truck,
      legacy: "Manual supervision needed from you",
      aggregator: "Random 3rd-party crew you've never vetted",
      zeeroni: "Trained crew with digital SOP — we handle it all",
    },
    {
      label: "Completion",
      icon: Home,
      legacy: "Boxes dumped — you unpack & arrange everything",
      aggregator: "Dump & run — good luck settling in",
      zeeroni: "Ready-to-live-in setup at your new home",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Families Choose{" "}
            <span className="text-gradient">Zeeroni</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See how we compare to traditional movers and online aggregators — at every stage of your move.
          </p>
        </motion.div>

        {/* Desktop Table */}
        <div className="hidden md:block max-w-5xl mx-auto">
          {/* Column Headers */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-4 gap-4 mb-2"
          >
            <div />
            <div className="text-center py-3 px-4 rounded-t-xl">
              <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Legacy Movers</span>
            </div>
            <div className="text-center py-3 px-4 rounded-t-xl">
              <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Aggregators</span>
            </div>
            <div className="text-center py-3 px-4 rounded-t-xl bg-primary/10 border-t-2 border-x-2 border-primary/30">
              <span className="text-sm font-bold text-primary uppercase tracking-wider">Zeeroni</span>
            </div>
          </motion.div>

          {/* Rows */}
          {categories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="grid grid-cols-4 gap-4 mb-3"
              >
                {/* Category Label */}
                <div className="flex items-center gap-3 py-5 px-4">
                  <Icon size={20} className="text-accent flex-shrink-0" />
                  <span className="font-semibold text-foreground">{cat.label}</span>
                </div>

                {/* Legacy */}
                <div className="flex items-center gap-2 py-5 px-5 rounded-xl bg-card border border-border">
                  <X size={16} className="text-destructive flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{cat.legacy}</span>
                </div>

                {/* Aggregator */}
                <div className="flex items-center gap-2 py-5 px-5 rounded-xl bg-card border border-border">
                  <AlertTriangle size={16} className="text-accent flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{cat.aggregator}</span>
                </div>

                {/* Zeeroni */}
                <div className="flex items-center gap-2 py-5 px-5 rounded-xl bg-primary/5 border-2 border-primary/30">
                  <Check size={16} className="text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">{cat.zeeroni}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-6 max-w-md mx-auto">
          {categories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="rounded-2xl bg-card border border-border p-5 card-shadow"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Icon size={18} className="text-accent" />
                  <span className="font-semibold text-foreground">{cat.label}</span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <X size={14} className="text-destructive mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-xs text-muted-foreground font-medium uppercase">Legacy Movers</span>
                      <p className="text-sm text-muted-foreground">{cat.legacy}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertTriangle size={14} className="text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-xs text-muted-foreground font-medium uppercase">Aggregators</span>
                      <p className="text-sm text-muted-foreground">{cat.aggregator}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 bg-primary/5 rounded-lg p-2 -mx-2">
                    <Check size={14} className="text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-xs text-primary font-semibold uppercase">Zeeroni</span>
                      <p className="text-sm font-medium text-foreground">{cat.zeeroni}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Value callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 max-w-3xl mx-auto text-center"
        >
          <div className="inline-block bg-primary/10 rounded-2xl px-8 py-5 border border-primary/20">
            <p className="text-foreground text-lg">
              <span className="font-bold">Exponentially better experience</span> at a competitive price — powered by{" "}
              <span className="text-accent font-semibold">tech efficiency</span> &{" "}
              <span className="text-primary font-semibold">AI orchestration</span>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonSection;
