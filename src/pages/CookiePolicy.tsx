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
              This Cookie Policy explains the use of cookies and similar technologies on our website at https://zeeroni.com (the "Site"), operated by Khar Meets Gundruk Tech Private Ltd ("Company," "we," "us," or "our").
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">We Do Not Use Cookies</h2>
              <p>
                Our website does not use cookies or any similar tracking technologies. We respect your privacy and have designed our website to function without collecting data through cookies.
              </p>
              <p className="mt-4">
                This means:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>No tracking cookies are placed on your device</li>
                <li>No analytics cookies are used to monitor your browsing behavior</li>
                <li>No third-party cookies are set through our website</li>
                <li>Your browsing experience on our site remains completely private</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Changes to This Policy</h2>
              <p>
                If we decide to use cookies in the future, we will update this policy and notify users accordingly. Any changes will be posted on this page with an updated "Last Updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
              <p>
                If you have any questions about this policy, please contact us:
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
