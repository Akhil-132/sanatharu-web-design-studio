
import React from 'react';
import { Button } from '@/components/ui/button';
import { Star, Award, Clock } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-golden-50 via-warm-50 to-golden-100"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-golden-200 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-golden-300 rounded-full opacity-30 animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 right-20 w-12 h-12 bg-golden-400 rounded-full opacity-25 animate-float" style={{animationDelay: '2s'}}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-slide-in-left">
            <div className="flex items-center justify-center lg:justify-start mb-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-golden-500 fill-current" />
                ))}
              </div>
              <span className="ml-2 text-sm text-muted-foreground">Traditional Since 1985</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-gradient">Sanatharuchulu</span>
              <br />
              <span className="text-foreground text-2xl md:text-3xl lg:text-4xl font-normal">
                Authentic Putharekulu
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
              Experience the divine taste of traditional Putharekulu, crafted with love and 
              generations of expertise. Each delicate layer tells a story of heritage and perfection.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button size="lg" className="bg-golden-gradient text-foreground hover:opacity-90 hover-lift">
                Order Fresh Putharekulu
              </Button>
              <Button size="lg" variant="outline" className="border-golden-400 text-golden-600 hover:bg-golden-50">
                Learn Our Story
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <div className="p-2 bg-golden-100 rounded-full">
                  <Award className="h-5 w-5 text-golden-600" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Premium Quality</p>
                  <p className="text-sm text-muted-foreground">Finest Ingredients</p>
                </div>
              </div>

              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <div className="p-2 bg-golden-100 rounded-full">
                  <Clock className="h-5 w-5 text-golden-600" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Fresh Daily</p>
                  <p className="text-sm text-muted-foreground">Made to Order</p>
                </div>
              </div>

              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <div className="p-2 bg-golden-100 rounded-full">
                  <Star className="h-5 w-5 text-golden-600" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">38+ Years</p>
                  <p className="text-sm text-muted-foreground">Of Excellence</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative animate-slide-in-right">
            <div className="relative">
              <div className="w-full h-96 md:h-[500px] bg-gradient-to-br from-golden-200 to-golden-400 rounded-3xl shadow-golden flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-golden-500 rounded-full mb-4 mx-auto flex items-center justify-center shadow-lg">
                    <span className="text-3xl font-bold text-white">P</span>
                  </div>
                  <p className="text-golden-800 font-semibold text-lg">
                    Premium Putharekulu
                  </p>
                  <p className="text-golden-700">Traditional Sweet Delicacy</p>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center animate-float">
                <span className="text-2xl">🍯</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center animate-float" style={{animationDelay: '1s'}}>
                <span className="text-xl">✨</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
