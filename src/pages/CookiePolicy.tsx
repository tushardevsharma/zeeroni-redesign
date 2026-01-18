import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="font-sans text-4xl md:text-5xl font-bold text-foreground mb-8">
            Cookie Policy
          </h1>
          
          <p className="text-muted-foreground mb-8">
            Last Updated: January 18, 2026
          </p>

          <div className="prose prose-lg max-w-none text-foreground/80 space-y-8">
            <p>
              This Cookie Policy explains how Khar Meets Gundruk Tech Private Ltd ("Company," "we," "us," or "our") uses cookies and similar technologies on our website at https://zeeroni.com (the "Site").
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. What Are Cookies?</h2>
              <p>
                Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. They help websites remember your preferences and improve your browsing experience.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Types of Cookies We Use</h2>
              
              <h3 className="text-xl font-semibold text-foreground mb-2 mt-4">Essential Cookies</h3>
              <p>
                These cookies are necessary for the website to function properly. They enable basic features like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-2 mt-4">Analytics Cookies</h3>
              <p>
                We use analytics cookies to understand how visitors interact with our website. This helps us improve our website's functionality and user experience. These cookies collect information anonymously.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-2 mt-4">Functional Cookies</h3>
              <p>
                These cookies allow the website to remember choices you make (such as your preferred language or region) and provide enhanced, more personalized features.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Third-Party Cookies</h2>
              <p>
                Some cookies on our Site are placed by third-party services that appear on our pages. We do not control the use of these cookies and you should check the third party's website for more information about how they use cookies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Managing Cookies</h2>
              <p>
                Most web browsers allow you to control cookies through their settings. You can usually find these settings in the "Options" or "Preferences" menu of your browser. You can set your browser to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Block all cookies</li>
                <li>Accept only first-party cookies</li>
                <li>Clear cookies when you close your browser</li>
                <li>Notify you when a cookie is being set</li>
              </ul>
              <p className="mt-4">
                Please note that if you disable cookies, some features of our website may not function properly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Changes to This Policy</h2>
              <p>
                We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated "Last Updated" date. We encourage you to review this policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Contact Us</h2>
              <p>
                If you have any questions about our use of cookies, please contact us:
              </p>
              <div className="mt-4 space-y-2">
                <p><strong>Khar Meets Gundruk Tech Private Ltd</strong></p>
                <p>Email: admin@zeeroni.com</p>
                <p>Phone: +91 82960 99467</p>
                <p>Address: No. 63, 2 Mylasandra Village, Begur Hobli, Bengaluru - 560068</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CookiePolicy;
