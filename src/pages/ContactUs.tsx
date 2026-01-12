import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button"; // Import Button component

const ContactUs = () => {
  const contactDetails = [
    {
      icon: Mail,
      label: "Email",
      value: "admin@zeeroni.com",
      href: "mailto:admin@zeeroni.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 82960 99467",
      href: "tel:+918296099467",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "No. 63, 2 Mylasandra Village, Begur Hobli, Bengaluru - 560068",
      href: null,
    },
  ];

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
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We'd love to hear from you!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <div id="our-details" className="bg-card rounded-3xl p-8 md:p-12 border border-border/50 card-shadow">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-8 text-center">
                Our Details
              </h2>
              
              <div className="space-y-6">
                {contactDetails.map((detail, index) => (
                  <motion.div
                    key={detail.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                      <detail.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{detail.label}</p>
                      {detail.href ? (
                        <a 
                          href={detail.href}
                          className="text-lg font-medium text-foreground hover:text-accent transition-colors"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="text-lg font-medium text-foreground">{detail.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;
