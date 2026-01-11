import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutUs = () => {
  const founders = [
    {
      name: "Suja Kunwar",
      role: "Co-Founder",
      image: "/suja.png",
    },
    {
      name: "Tushar Dev Sharma",
      role: "Co-Founder",
      image: "/tushar.png",
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
              About Us
            </h1>
            
            <p className="text-2xl md:text-3xl text-foreground font-serif mb-6">
              We hated moving. And our movers made it worse.
            </p>
            
            <p className="text-xl text-muted-foreground mb-8">
              So, we are building <span className="text-accent font-semibold">Zeeroni</span>.
            </p>
            
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              The moving experience we wished existed: <span className="text-foreground font-medium">clean, careful and predictable</span>.
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
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
                    {founder.name}
                  </h3>
                  <p className="text-accent font-medium">{founder.role}</p>
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
