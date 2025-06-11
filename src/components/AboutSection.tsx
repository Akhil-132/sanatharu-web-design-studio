
import React from 'react';
import { Users, Heart, Leaf, Trophy } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Heart,
      title: 'Made with Love',
      description: 'Every piece of Putharekulu is crafted with passion and care, following traditional recipes passed down through generations.'
    },
    {
      icon: Leaf,
      title: 'Natural Ingredients',
      description: 'We use only the finest natural ingredients - pure rice starch, jaggery, and ghee - ensuring authentic taste and quality.'
    },
    {
      icon: Users,
      title: 'Family Tradition',
      description: 'A legacy of 38+ years in creating the most delicate and delicious Putharekulu, trusted by families across Andhra Pradesh.'
    },
    {
      icon: Trophy,
      title: 'Award Winning',
      description: 'Recognized for excellence in traditional sweet making, maintaining the highest standards of quality and hygiene.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-warm-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-gradient">Heritage</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Sanatharuchulu has been the epitome of authentic Putharekulu making since 1985. 
              What started as a small family business has grown into a trusted name, 
              synonymous with quality and tradition.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our master craftsmen create each paper-thin layer of Putharekulu with 
              meticulous attention to detail, ensuring every bite delivers the perfect 
              balance of sweetness and texture that has made us a household name.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="text-center p-6 bg-card rounded-2xl shadow-sm hover-lift">
                <div className="text-3xl font-bold text-golden-600 mb-2">38+</div>
                <div className="text-sm font-medium text-muted-foreground">Years of Excellence</div>
              </div>
              <div className="text-center p-6 bg-card rounded-2xl shadow-sm hover-lift">
                <div className="text-3xl font-bold text-golden-600 mb-2">10k+</div>
                <div className="text-sm font-medium text-muted-foreground">Happy Customers</div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6 animate-fade-in">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="p-6 bg-card rounded-2xl shadow-sm hover-lift"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="p-3 bg-golden-100 rounded-2xl w-fit mb-4">
                  <feature.icon className="h-6 w-6 text-golden-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
