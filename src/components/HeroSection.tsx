import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight, Loader2 } from "lucide-react";
import { useLeadMetadata } from "@/hooks/useLeadMetadata";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const phrases = ["relocation", "moving", "settling in", "fresh starts"];

const API_ENDPOINT = "https://tk3mh6lkmdnyornb6bhbhb6wru0brckv.lambda-url.ap-south-1.on.aws/api/marketing/leads";

const HeroSection = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const formRef = useRef<HTMLDivElement>(null);
  const metadata = useLeadMetadata();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const [formHighlight, setFormHighlight] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [dateError, setDateError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  // Form state
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [moveOutDate, setMoveOutDate] = useState("");
  const [moveSize, setMoveSize] = useState("");

  const handleGetStarted = () => {
    if (formRef.current) {
      const rect = formRef.current.getBoundingClientRect();
      const isInView = rect.top >= 0 && rect.bottom <= window.innerHeight;
      
      const triggerHighlight = () => {
        setFormHighlight(true);
        setTimeout(() => setFormHighlight(false), 1500);
      };

      if (isInView) {
        triggerHighlight();
      } else {
        formRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
        setTimeout(triggerHighlight, 500);
      }
    }
  };

  const validatePhone = (value: string) => {
    const phoneRegex = /^[6-9]\d{9}$/;
    if (value && !phoneRegex.test(value)) {
      setPhoneError("Please enter a valid 10-digit Indian phone number");
      return false;
    }
    setPhoneError("");
    return true;
  };

  const validateDate = (value: string) => {
    if (value) {
      const selectedDate = new Date(value);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        setDateError("Move out date cannot be in the past");
        return false;
      }
    }
    setDateError("");
    return true;
  };

  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  const handleLearnMore = () => {
    navigate("/about-us");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    if (!name.trim()) {
      toast.error("Please enter your name");
      return;
    }
    if (!validatePhone(phoneNumber)) {
      return;
    }
    if (!moveOutDate) {
      toast.error("Please select a move out date");
      return;
    }
    if (!validateDate(moveOutDate)) {
      return;
    }
    if (!moveSize) {
      toast.error("Please select a move size");
      return;
    }

    setIsSubmitting(true);

    const payload = {
      name: name.trim(),
      phoneNumber,
      moveDetails: {
        desiredMoveOutDate: moveOutDate,
        moveSize: moveSize.toUpperCase(),
      },
      metadata: {
        ipAddress: metadata.ipAddress,
        isMobile: metadata.isMobile,
        platform: metadata.platform,
        url: metadata.url,
        utmSource: metadata.utmSource,
        utmCampaign: metadata.utmCampaign,
      },
    };

    try {
      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: {
          "Accept": "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      // Track Google Ads conversion
      if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
        (window as any).gtag_report_conversion();
      }

      toast.success("Consultation booked successfully! We'll contact you soon.");
      
      // Reset form
      setName("");
      setPhoneNumber("");
      setMoveOutDate("");
      setMoveSize("");
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-muted -z-10" />
      
      {/* Decorative elements */}
      <div className="absolute top-40 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6 overflow-x-hidden">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Form first on mobile, second on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div 
              ref={formRef} 
              className={`bg-card rounded-3xl p-6 md:p-8 card-shadow border transition-all duration-500 ${
                formHighlight 
                  ? "border-accent ring-4 ring-accent/30 scale-[1.02] shadow-2xl" 
                  : "border-border/50"
              }`}
            >
              <h2 className="font-sans text-2xl font-semibold text-foreground mb-6">
                Book Now
              </h2>
              
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <Input 
                    placeholder="Enter your name" 
                    className="h-12 rounded-xl"
                    maxLength={100}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input 
                    placeholder="e.g., 9876543210" 
                    type="tel"
                    className={`h-12 rounded-xl ${phoneError ? "border-destructive" : ""}`}
                    maxLength={10}
                    value={phoneNumber}
                    onChange={(e) => {
                      setPhoneNumber(e.target.value);
                      validatePhone(e.target.value);
                    }}
                    disabled={isSubmitting}
                  />
                  {phoneError && <p className="text-destructive text-sm mt-1">{phoneError}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Desired Move Out Date
                  </label>
                  <Input 
                    type="date" 
                    className={`h-12 rounded-xl ${dateError ? "border-destructive" : ""}`}
                    min={getTodayDate()}
                    value={moveOutDate}
                    onChange={(e) => {
                      setMoveOutDate(e.target.value);
                      validateDate(e.target.value);
                    }}
                    disabled={isSubmitting}
                  />
                  {dateError && <p className="text-destructive text-sm mt-1">{dateError}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Move Size
                  </label>
                  <Select value={moveSize} onValueChange={setMoveSize} disabled={isSubmitting}>
                    <SelectTrigger className="h-12 rounded-xl">
                      <SelectValue placeholder="Select Move Size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">Small Home</SelectItem>
                      <SelectItem value="medium">Medium Home</SelectItem>
                      <SelectItem value="large">Large Home</SelectItem>
                      <SelectItem value="villa">Villa / Bungalow</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-12 text-lg rounded-xl mt-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Book Now"
                  )}
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Text content second on mobile, first on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8 order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Intelligent Moving Solutions
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Experience the
              <br />
              future of{" "}
              <span className="text-gradient relative">
                {phrases[currentPhrase]}
                <motion.span
                  key={currentPhrase}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="absolute left-0"
                />
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
              Intelligent moving, re-imagined for your peace of mind. 
              Zero chaos, zero cartons, 100% ready to live.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="text-lg px-8 py-6 group" onClick={handleGetStarted}>
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6" onClick={handleLearnMore}>
                About Us
              </Button>
            </div>

            <div className="flex items-center gap-4 sm:gap-8 pt-4 flex-wrap">
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-foreground">50+</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Moves Completed</p>
              </div>
              <div className="w-px h-10 sm:h-12 bg-border" />
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-foreground">100%</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Satisfaction Rate</p>
              </div>
              <div className="w-px h-10 sm:h-12 bg-border" />
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-foreground">24/7</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Support</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
