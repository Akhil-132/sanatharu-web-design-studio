
import React from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Star } from 'lucide-react';

const ProductsSection = () => {
  const products = [
    {
      name: 'Classic Putharekulu',
      description: 'Traditional paper-thin rice sheets with jaggery filling',
      price: '₹250',
      weight: '500g',
      rating: 4.9,
      image: 'bg-gradient-to-br from-golden-200 to-golden-400',
      popular: true
    },
    {
      name: 'Premium Putharekulu',
      description: 'Extra delicate layers with pure ghee and premium jaggery',
      price: '₹350',
      weight: '500g',
      rating: 5.0,
      image: 'bg-gradient-to-br from-golden-300 to-golden-500',
      popular: false
    },
    {
      name: 'Mini Putharekulu',
      description: 'Perfect bite-sized portions for gifting',
      price: '₹150',
      weight: '250g',
      rating: 4.8,
      image: 'bg-gradient-to-br from-golden-100 to-golden-300',
      popular: false
    },
    {
      name: 'Dry Fruits Putharekulu',
      description: 'Enhanced with almonds, cashews, and pistachios',
      price: '₹450',
      weight: '500g',
      rating: 4.9,
      image: 'bg-gradient-to-br from-golden-400 to-golden-600',
      popular: false
    }
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Products</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our range of authentic Putharekulu varieties, each crafted with 
            traditional techniques and the finest ingredients.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div 
              key={index}
              className="bg-card rounded-3xl shadow-sm hover-lift overflow-hidden animate-fade-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Product Image */}
              <div className={`h-48 ${product.image} relative flex items-center justify-center`}>
                {product.popular && (
                  <div className="absolute top-4 left-4 bg-golden-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Popular
                  </div>
                )}
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <span className="text-2xl">🥮</span>
                  </div>
                  <p className="text-white/90 font-medium">{product.weight}</p>
                </div>
              </div>

              {/* Product Details */}
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-golden-500 fill-current" />
                    <span className="text-sm text-muted-foreground">{product.rating}</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {product.name}
                </h3>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {product.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-golden-600">
                    {product.price}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    per {product.weight}
                  </span>
                </div>

                <Button className="w-full bg-golden-gradient text-foreground hover:opacity-90">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-gradient-to-r from-golden-50 to-warm-50 rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-4 text-foreground">
              Custom Orders Welcome
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Planning a special event? We create custom Putharekulu orders for weddings, 
              festivals, and corporate gifts with personalized packaging.
            </p>
            <Button size="lg" className="bg-golden-gradient text-foreground hover:opacity-90">
              Contact for Custom Orders
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
