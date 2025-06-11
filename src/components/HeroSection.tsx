
import React from 'react';
import { Button } from '@/components/ui/button';
import { Star, Award, Clock, Phone } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-golden-50 via-warm-50 to-golden-100">
      {/* Enhanced background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-golden-200/30 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-golden-300/40 rounded-full blur-lg animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-1/6 w-16 h-16 bg-golden-400/30 rounded-full blur-md animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Enhanced Content */}
          <div className="text-center lg:text-left animate-slide-in-left">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <div className="flex items-center space-x-1 bg-white/80 px-4 py-2 rounded-full shadow-lg backdrop-blur-sm">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-golden-500 fill-current" />
                ))}
                <span className="ml-2 text-sm text-golden-700 font-semibold">Since 1985</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-gradient bg-gradient-to-r from-golden-600 via-golden-500 to-golden-400 bg-clip-text text-transparent">
                Sanatharuchulu
              </span>
              <br />
              <span className="text-foreground text-2xl md:text-3xl lg:text-4xl font-normal text-warm-800">
                Authentic Putharekulu
              </span>
            </h1>

            <p className="text-lg md:text-xl text-warm-700 mb-8 max-w-2xl leading-relaxed">
              Experience the divine taste of traditional Putharekulu, crafted with love and 
              generations of expertise. Each delicate layer tells a story of heritage and perfection.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button size="lg" className="bg-gradient-to-r from-golden-500 to-golden-600 text-white hover:from-golden-600 hover:to-golden-700 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                Order Fresh Putharekulu
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-golden-400 text-golden-700 hover:bg-golden-50 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                WhatsApp Now
              </Button>
            </div>

            {/* Enhanced Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center justify-center lg:justify-start space-x-3 bg-white/60 p-4 rounded-xl shadow-lg backdrop-blur-sm hover:bg-white/80 transition-all duration-300">
                <div className="p-3 bg-golden-100 rounded-full shadow-md">
                  <Award className="h-6 w-6 text-golden-600" />
                </div>
                <div>
                  <p className="font-semibold text-warm-800">Premium Quality</p>
                  <p className="text-sm text-warm-600">Finest Ingredients</p>
                </div>
              </div>

              <div className="flex items-center justify-center lg:justify-start space-x-3 bg-white/60 p-4 rounded-xl shadow-lg backdrop-blur-sm hover:bg-white/80 transition-all duration-300">
                <div className="p-3 bg-golden-100 rounded-full shadow-md">
                  <Clock className="h-6 w-6 text-golden-600" />
                </div>
                <div>
                  <p className="font-semibold text-warm-800">Fresh Daily</p>
                  <p className="text-sm text-warm-600">Made to Order</p>
                </div>
              </div>

              <div className="flex items-center justify-center lg:justify-start space-x-3 bg-white/60 p-4 rounded-xl shadow-lg backdrop-blur-sm hover:bg-white/80 transition-all duration-300">
                <div className="p-3 bg-golden-100 rounded-full shadow-md">
                  <Star className="h-6 w-6 text-golden-600" />
                </div>
                <div>
                  <p className="font-semibold text-warm-800">38+ Years</p>
                  <p className="text-sm text-warm-600">Of Excellence</p>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Visual */}
          <div className="relative animate-slide-in-right">
            <div className="relative">
              <div className="w-full h-96 md:h-[500px] bg-gradient-to-br from-golden-300 via-golden-400 to-golden-500 rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
                <div className="text-center relative z-10">
                  <div className="w-40 h-40 bg-white/90 rounded-full mb-6 mx-auto flex items-center justify-center shadow-2xl backdrop-blur-sm">
                    <span className="text-5xl font-bold text-golden-600">P</span>
                  </div>
                  <p className="text-white font-bold text-2xl mb-2 drop-shadow-lg">
                    Premium Putharekulu
                  </p>
                  <p className="text-golden-100 text-lg drop-shadow-md">Traditional Sweet Delicacy</p>
                </div>
              </div>
              
              {/* Enhanced floating elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center animate-float">
                <span className="text-3xl">🍯</span>
              </div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-white rounded-xl shadow-xl flex items-center justify-center animate-float" style={{animationDelay: '1s'}}>
                <span className="text-2xl">✨</span>
              </div>
              <div className="absolute top-1/4 -left-4 w-16 h-16 bg-white rounded-lg shadow-lg flex items-center justify-center animate-float" style={{animationDelay: '2.5s'}}>
                <span className="text-xl">🌾</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
