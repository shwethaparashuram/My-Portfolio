import { Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md-text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          My Contact details
        </p>
        <div className="">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="flex items-center justify-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email </h4>
                  <a
                    href="mailto:shwetha.s272@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    shwetha.s272@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone </h4>
                  <a
                    href="phone:+919844493231"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 9844493231
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Location </h4>
                <a
                  href="lacation:bangalore"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Rajarajeshwari Nagar,Bangalore
                </a>
              </div>
            </div>
          </div>
          <div className="pt-8">
            <h4 className="font-medium mb-4">Connect with me</h4>
            <div className="flex space-x-4 justify-center">
              <a href="#" target="#_blank">
                <Linkedin />
              </a>
              <a href="#" target="#_blank">
                <Instagram />
              </a>
              <a href="#" target="#_blank">
                <Twitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactSection