import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutUs = () => {
  const founders = [
    {
      name: "Suja Kunwar",
      role: "Co-Founder",
      image: "/suja.png",
      linkedin: "https://www.linkedin.com/in/suja-kunwar-4569aa112/",
    },
    {
      name: "Tushar Dev Sharma",
      role: "Co-Founder",
      image: "/tushar.png",
      linkedin: "https://www.linkedin.com/in/tushardevsharma",
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
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8">
              <span className="text-gradient">About Us</span>
            </h1>

            <p className="text-2xl md:text-3xl text-foreground font-serif mb-6">
              We hated moving. And our movers made it worse.
            </p>

            <p className="text-xl text-muted-foreground mb-8">
              So, we are building <span className="text-accent font-semibold">Zeeroni</span>.
            </p>

            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              The moving experience we wished existed:{" "}
              <span className="text-foreground font-medium">clean, careful and predictable</span>.
            </p>

            <div className="bg-primary/10 rounded-2xl p-8 mb-16">
              <p className="text-sm text-primary font-medium mb-2">Our Mission</p>
              <p className="text-2xl md:text-3xl font-serif text-foreground">
                To make moving as easy as ordering food.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-serif text-3xl font-bold text-foreground text-center mb-12">
              Meet the <span className="text-gradient">Founders</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {founders.map((founder, index) => (
                <motion.div
                  key={founder.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-card rounded-3xl p-8 border border-border/50 card-shadow text-center"
                >
                  <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20">
                    <img src={founder.image} alt={founder.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">{founder.name}</h3>
                  <p className="text-accent font-medium mb-4">{founder.role}</p>
                  {founder.linkedin && (
                    <a
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                    >
                      <svg
                        className="w-5 h-5 linkedin-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.227 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.456c.98 0 1.772-.773 1.772-1.729V1.729C24 .774 23.207 0 22.227 0z" />
                      </svg>
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
