import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ZeeroniHappinessGuarantee = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Zeeroni <span className="text-gradient">Happiness</span> Guarantee
            </h1>
            <p className="text-xl text-muted-foreground">
              Your satisfaction is our priority. We stand behind our service with a 100% guarantee.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-card rounded-3xl p-8 md:p-12 border border-border/50 card-shadow">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-8 text-center">
                100% Satisfaction Guarantee Policy
              </h2>
              
              <p className="text-lg text-muted-foreground mb-6">
                At Zeeroni, we stand behind the quality of our service. If we haven't met your expectations, here is how our money-back guarantee works:
              </p>

              <ul className="list-disc list-inside space-y-4 text-foreground text-base md:text-lg">
                <li>
                  <span className="font-semibold">Eligibility Window:</span> Refund requests must be submitted within <span className="font-bold text-primary">1</span> day of your move completion date.
                </li>
                <li>
                  <span className="font-semibold">Process:</span> To request a refund, please contact our support team at <a href="mailto:admin@zeeroni.com" className="text-primary hover:underline">admin@zeeroni.com</a>/<a href="tel:+918296099467" className="text-primary hover:underline">+91 82960 99467</a> with your account details.
                </li>
                <li>
                  <span className="font-semibold">The "No-Hassle" Rule:</span> While we may ask for feedback to help us improve, your refund is not contingent upon providing it.
                </li>
                <li>
                  <span className="font-semibold">Refund Method:</span> Credits will be issued back to the original payment method within <span className="font-bold text-primary">5-10</span> business days.
                </li>
                <li>
                  <span className="font-semibold">Exclusions:</span> This guarantee applies to <span className="font-bold text-primary">First-time users only</span> and does not cover third-party fees.
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ZeeroniHappinessGuarantee;
