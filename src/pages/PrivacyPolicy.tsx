import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
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
              Privacy Policy – Zeeroni
            </h1>
            <p className="text-muted-foreground mb-12">
              <strong>Last updated:</strong> 9 Jan 2026
            </p>

            <div className="prose prose-lg max-w-none">
              <p className="text-foreground leading-relaxed mb-8">
                Zeeroni ("we", "our", "us") respects your privacy. This Privacy Policy explains how we collect and use your information when you submit your details through our website, Google lead forms, phone calls, or other marketing forms.
              </p>

              <section className="mb-10">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  Information we collect
                </h2>
                <p className="text-muted-foreground mb-4">
                  When you request a quote or contact us, we may collect:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Name</li>
                  <li>Phone number</li>
                  <li>Email (optional)</li>
                  <li>Move details (pickup area, drop area, move date, home size like 1BHK/2BHK/3BHK)</li>
                  <li>Any additional information you share for getting an estimate</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  How we use your information
                </h2>
                <p className="text-muted-foreground mb-4">
                  We use your information to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Contact you to provide estimates and schedule services</li>
                  <li>Deliver moving/packing services and customer support</li>
                  <li>Improve our service quality and operations</li>
                  <li>Send service-related updates (calls/WhatsApp/SMS). You can opt out anytime.</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  Sharing of information
                </h2>
                <p className="text-muted-foreground mb-4">
                  We do not sell your personal information. We may share it only with:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Our internal operations team and assigned crew for service delivery</li>
                  <li>Service partners strictly required to complete your move (e.g., logistics support), if applicable</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  Data retention
                </h2>
                <p className="text-muted-foreground">
                  We retain your information only as long as needed for providing services, support, record-keeping, and compliance.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  Security
                </h2>
                <p className="text-muted-foreground">
                  We take reasonable measures to protect your information. However, no method of transmission or storage is 100% secure.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  Your choices
                </h2>
                <p className="text-muted-foreground">
                  You can request access, correction, or deletion of your data by contacting us.
                </p>
              </section>

              <section className="bg-card rounded-2xl p-8 border border-border/50">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  Contact
                </h2>
                <p className="text-foreground font-medium mb-4">Zeeroni</p>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Phone:</strong> +91 7829046000</p>
                  <p><strong>Email:</strong> admin@zeeroni.com</p>
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

export default PrivacyPolicy;
