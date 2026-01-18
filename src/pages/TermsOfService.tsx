import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Terms of Service
            </h1>
            <p className="text-muted-foreground mb-12">
              <strong>Last Updated:</strong> January 18, 2026
            </p>

            <div className="prose prose-lg max-w-none">
              <p className="text-foreground leading-relaxed mb-8">
                Welcome to Zeeroni. These Terms of Service ("Terms") govern your use of the website located at https://zeeroni.com (the "Site") and the packing, moving, and home-setting services (the "Services") provided by Khar Meets Gundruk Tech Private Ltd ("Company," "we," "us," or "our").
              </p>
              <p className="text-foreground leading-relaxed mb-8">
                By accessing our Site or booking our Services, you agree to be bound by these Terms. If you do not agree, please do not use our Services.
              </p>

              <section className="mb-10">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  1. The Service
                </h2>
                <p className="text-muted-foreground">
                  Zeeroni provides a tech-enabled relocation service including professional packing, transportation, furniture assembly, appliance installation, and home organization. Our Services are currently limited to intra-city moves within Bangalore, India.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  2. Pricing and Payments
                </h2>
                <ul className="list-none space-y-4 text-muted-foreground">
                  <li>
                    <strong className="text-foreground">Transparent Pricing:</strong> The price quoted following your AI-powered survey or consultation is the final price for the inventory described.
                  </li>
                  <li>
                    <strong className="text-foreground">Accuracy of Inventory:</strong> Quotes are based on the inventory list provided during the booking process. Significant deviations in inventory on moving day may result in price adjustments.
                  </li>
                  <li>
                    <strong className="text-foreground">Payment Terms:</strong> A booking deposit may be required, with the balance payable upon completion of the move, unless otherwise specified.
                  </li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  3. Zeeroni Happiness Guarantee
                </h2>
                <p className="text-muted-foreground">
                  If you are not completely satisfied with our moving service, we offer a 100% refund of your investment. This guarantee applies to the service fee and is subject to a review of the service deficiency reported within 24 hours of the move completion.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  4. Insurance and Liability
                </h2>
                <ul className="list-none space-y-4 text-muted-foreground">
                  <li>
                    <strong className="text-foreground">Coverage:</strong> Our services include basic insurance coverage for your belongings during transit.
                  </li>
                  <li>
                    <strong className="text-foreground">Exclusions:</strong> We are not liable for damage to items that were pre-packed by the customer, prohibited items (e.g., hazardous materials, perishables), or high-value items (e.g., jewelry, currency, fine art) unless explicitly declared and appraised in writing prior to the move.
                  </li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  5. Customer Responsibilities
                </h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>You must ensure that all necessary permissions (e.g., society gate passes, elevator access) are secured at both the origin and destination addresses.</li>
                  <li>You or an authorized representative must be present during the packing, loading, and unloading process.</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  6. Communication & WhatsApp
                </h2>
                <p className="text-muted-foreground">
                  By providing your phone number, you consent to receive communications from Zeeroni regarding your booking, including automated updates via the WhatsApp Business API. You may opt-out of these communications at any time by replying "STOP".
                </p>
              </section>

              <section className="mb-10">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  7. Governing Law
                </h2>
                <p className="text-muted-foreground">
                  These Terms are governed by the laws of India. Any disputes arising from these Terms or our Services shall be subject to the exclusive jurisdiction of the courts in Bangalore, Karnataka.
                </p>
              </section>

              <section className="bg-card rounded-2xl p-8 border border-border/50">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  8. Contact Information
                </h2>
                <p className="text-muted-foreground mb-4">
                  For any questions regarding these Terms, please contact:
                </p>
                <p className="text-foreground font-medium mb-2">Khar Meets Gundruk Tech Private Ltd</p>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Email:</strong> admin@zeeroni.com</p>
                  <p><strong>Phone:</strong> +91 82960 99467</p>
                  <p><strong>Address:</strong> No. 63, 2 Mylasandra Village, Begur Hobli, Bengaluru - 560068</p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
