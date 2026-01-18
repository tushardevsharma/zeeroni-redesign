import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter } from "lucide-react";
import zeeroniLogo from "@/assets/zeeroni-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img 
                src={zeeroniLogo} 
                alt="Zeeroni" 
                className="h-10 w-auto"
              />
              <span className="font-sans text-xl font-bold text-background">Zeeroni</span>
            </Link>
            <p className="text-background/70 mb-6">
              Intelligent moving, re-imagined for your peace of mind. Experience the future of relocation.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-sans text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/about-us" className="text-background/70 hover:text-primary transition-colors">About Us</Link></li>
              <li><a href="#how-it-works" className="text-background/70 hover:text-primary transition-colors">How It Works</a></li>
              <li><a href="#services" className="text-background/70 hover:text-primary transition-colors">Services</a></li>
              <li><a href="#technology" className="text-background/70 hover:text-primary transition-colors">Technology</a></li>
              <li><Link to="/contact-us" className="text-background/70 hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link to="/happiness-guarantee" className="text-background/70 hover:text-primary transition-colors">Happiness Guarantee</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/70 hover:text-primary transition-colors">Residential Moving</a></li>
              <li><a href="#" className="text-background/70 hover:text-primary transition-colors">Packing & Unpacking</a></li>
              <li><a href="#" className="text-background/70 hover:text-primary transition-colors">Furniture Assembly</a></li>
              <li><a href="#" className="text-background/70 hover:text-primary transition-colors">Appliance Setup</a></li>
              <li><a href="#" className="text-background/70 hover:text-primary transition-colors">Home Organization</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-background/70">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:+918296099467" className="hover:text-primary transition-colors">+91 82960 99467</a>
              </li>
              <li className="flex items-center gap-3 text-background/70">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:admin@zeeroni.com" className="hover:text-primary transition-colors">admin@zeeroni.com</a>
              </li>
              <li className="flex items-start gap-3 text-background/70">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Bengaluru, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-background/50 text-sm">
            <p>© 2026 Zeeroni. All rights reserved.</p>
            <p className="text-xs mt-1">A product of Khar Meets Gundruk Tech Private Limited</p>
          </div>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy-policy" className="text-background/50 hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-background/50 hover:text-primary transition-colors">Terms of Service</Link>
            <Link to="/cookie-policy" className="text-background/50 hover:text-primary transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
