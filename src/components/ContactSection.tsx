
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 98765 43210', '+91 87654 32109'],
      action: 'Call Now'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['orders@sanatharuchulu.com', 'info@sanatharuchulu.com'],
      action: 'Send Email'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: ['123 Heritage Street', 'Atreyapuram, East Godavari', 'Andhra Pradesh - 533401'],
      action: 'Get Directions'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Mon - Sat: 8:00 AM - 8:00 PM', 'Sunday: 9:00 AM - 6:00 PM'],
      action: 'View Schedule'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-warm-50 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to taste the authentic flavors? Contact us for fresh orders, 
            custom requirements, or any questions about our traditional Putharekulu.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8 animate-slide-in-left">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="p-3 bg-golden-100 rounded-2xl">
                  <info.icon className="h-6 w-6 text-golden-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    {info.title}
                  </h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-muted-foreground mb-1">
                      {detail}
                    </p>
                  ))}
                  <Button variant="link" className="p-0 h-auto text-golden-600 hover:text-golden-700">
                    {info.action}
                  </Button>
                </div>
              </div>
            ))}

            {/* Social Media */}
            <div className="pt-8 border-t border-border">
              <h3 className="text-lg font-semibold mb-4 text-foreground">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                <Button size="sm" variant="outline" className="p-3">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button size="sm" variant="outline" className="p-3">
                  <Facebook className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-slide-in-right">
            <div className="bg-card rounded-3xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Send us a Message
              </h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <Input 
                      placeholder="Enter your full name"
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input 
                      placeholder="Enter your phone number"
                      className="h-12"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input 
                    type="email"
                    placeholder="Enter your email address"
                    className="h-12"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Order Type
                  </label>
                  <select className="w-full h-12 px-3 border border-input rounded-md bg-background text-foreground">
                    <option>Select order type</option>
                    <option>Regular Order</option>
                    <option>Bulk Order</option>
                    <option>Custom Order</option>
                    <option>Wedding/Event Order</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell us about your requirements..."
                    className="min-h-[120px]"
                  />
                </div>

                <Button size="lg" className="w-full bg-golden-gradient text-foreground hover:opacity-90">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Map or Additional Info */}
        <div className="mt-16 animate-fade-in">
          <div className="bg-gradient-to-r from-golden-50 to-warm-50 rounded-3xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Visit Our Store
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Experience the traditional art of Putharekulu making firsthand. 
              Watch our master craftsmen at work and taste fresh-made delicacies.
            </p>
            <div className="h-64 bg-gradient-to-br from-golden-200 to-golden-400 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-golden-700 mx-auto mb-4" />
                <p className="text-golden-800 font-semibold">
                  Visit our heritage store in Atreyapuram
                </p>
                <p className="text-golden-700">
                  Traditional Putharekulu making since 1985
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
