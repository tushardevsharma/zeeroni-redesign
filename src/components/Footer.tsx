import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-serif font-bold text-xl">Z</span>
              </div>
              <span className="font-serif text-2xl font-semibold">Zeeroni</span>
            </div>
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
            <h4 className="font-serif text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/70 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#how-it-works" className="text-background/70 hover:text-primary transition-colors">How It Works</a></li>
              <li><a href="#services" className="text-background/70 hover:text-primary transition-colors">Services</a></li>
              <li><a href="#technology" className="text-background/70 hover:text-primary transition-colors">Technology</a></li>
              <li><a href="#" className="text-background/70 hover:text-primary transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/70 hover:text-primary transition-colors">Residential Moving</a></li>
              <li><a href="#" className="text-background/70 hover:text-primary transition-colors">Packing & Unpacking</a></li>
              <li><a href="#" className="text-background/70 hover:text-primary transition-colors">Furniture Assembly</a></li>
              <li><a href="#" className="text-background/70 hover:text-primary transition-colors">Appliance Setup</a></li>
              <li><a href="#" className="text-background/70 hover:text-primary transition-colors">Home Organization</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-background/70">
                <Phone className="w-5 h-5 text-primary" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3 text-background/70">
                <Mail className="w-5 h-5 text-primary" />
                <span>hello@zeeroni.com</span>
              </li>
              <li className="flex items-start gap-3 text-background/70">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Bangalore, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © 2026 Zeeroni. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-background/50 hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-background/50 hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="text-background/50 hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
