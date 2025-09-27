"use client";

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Star, Heart, Leaf, Award, Shield, Sparkles, Menu, X, ArrowUp, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const ClientVariable = process.env.CLIENT_VARIABLE;
const HighLightClientVariable = process.env.HIGHLIGHT_CLIENT_VARIABLE;

import Image from 'next/image';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
   useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

useEffect(() => {
  const revealElements = document.querySelectorAll(".scroll-reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.2 }
  );

  revealElements.forEach((el) => observer.observe(el));

  return () => {
    revealElements.forEach((el) => observer.unobserve(el));
  };
}, []);

 
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-soft' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-serif font-bold">
            {ClientVariable}<span className="text-primary">{HighLightClientVariable}</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {[
              { name: 'Categories', id: 'categories' },
              { name: 'Featured', id: 'featured' },
              { name: 'Why Choose Us', id: 'why-choose' },
              { name: 'About', id: 'about' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="link-pink font-medium"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            {[
              { name: 'Categories', id: 'categories' },
              { name: 'Featured', id: 'featured' },
              { name: 'Why Choose Us', id: 'why-choose' },
              { name: 'About', id: 'about' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left link-pink font-medium py-2"
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${`/assets/hero-cosmetics.jpg`})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 fade-in-up animate">
          Glow Naturally
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light fade-in-up animate stagger-delay-1">
          Discover premium cosmetics that enhance your natural beauty with 
          cruelty-free, organic ingredients trusted by professionals worldwide.
        </p>
        <Button className="btn-hero text-lg px-8 py-6 fade-in-up animate stagger-delay-2">
          Explore Collection
        </Button>
      </div>
    </section>
  );
};


const CategoriesSection = () => {
  const categories = [
    { name: 'Skincare', image: "/assets/skincare-category.jpg", description: 'Nourish & rejuvenate' },
    { name: 'Makeup', image: "/assets/makeup-category.jpg", description: 'Express your beauty' },
    { name: 'Haircare', image: "/assets/makeup-category.jpg", description: 'Strengthen & shine' },
    { name: 'Fragrance', image: "/assets/fragrance-category.jpg", description: 'Captivate & inspire' },
  ];

  return (
    <section id="categories" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6 ">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Shop by Category
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our curated collection of premium beauty essentials,
            each category crafted to perfection for your unique needs.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
         <Card
  key={category.name}
  className={`

       cursor-pointer scroll-reveal stagger-delay-${index + 1}
    bg-white rounded-2xl shadow-md shadow-gray-200
    transform
    transition-all duration-500 ease-out
    hover:scale-105 hover:shadow-lg hover:shadow-pink-400/50
    hover:bg-pink-50
  `}
>
  <CardContent className="p-0">
    {/* Image */}
    <div >
      <Image
        src={category.image}
        alt={category.name}
        className="w-full h-64 object-cover rounded-t-2xl transition-transform duration-500 ease-out group-hover:scale-110"
        width={400}
        height={400}
      />
    </div>

    {/* Text */}
    <div className="p-6 text-center transition-colors duration-500 ease-out">
      <h3 className="text-2xl font-serif font-semibold mb-2 group-hover:text-pink-600">
        {category.name}
      </h3>
      <p className="text-muted-foreground">{category.description}</p>
    </div>
  </CardContent>
</Card>

          ))}
        </div>
      </div>
    </section>
  );
};


const FeaturedSection = () => {
  const products = [
    { name: 'Radiance Serum', price: '$89', image: "/assets/serum-product.jpg", badge: 'Best Seller' },
    { name: 'Velvet Lipstick', price: '$45', image: "/assets/lipstick-product.jpg", badge: 'New' },
    { name: 'Glow Foundation', price: '$65', image: "/assets/foundation-product.jpg", badge: 'Limited' },
    { name: 'Repair Night Cream', price: '$95', image: "/assets/cream-product.jpg", badge: 'Premium' },
  ];

  return (
    <section id="featured" className="py-20">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Featured Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our most loved products, carefully selected for their exceptional 
            quality and transformative results.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card
              key={product.name}
              className={`
                group cursor-pointer scroll-reveal stagger-delay-${index + 1}
                bg-white rounded-2xl shadow-md shadow-gray-200
                transition-all duration-500 ease-in-out
                hover:shadow-xl hover:shadow-pink-400/40 hover:-translate-y-2
              `}
            >
              <CardContent className="p-0">
                {/* Image wrapper */}
                <div className="relative overflow-hidden rounded-t-2xl">
                  <Image 
                    src={product.image} 
                    alt={product.name}
                    width={400}
                    height={400}
                    className="w-full h-64 object-cover block transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary text-white shadow-md">
                    {product.badge}
                  </Badge>
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-2xl font-bold text-primary mb-4">{product.price}</p>
                  <Button
                    className="w-full btn-elegant transition-all duration-300 transform hover:scale-105 hover:bg-pink-500"
                  >
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseSection = () => {
  const features = [
    { icon: Leaf, title: 'Cruelty-Free', description: 'Never tested on animals, certified ethical beauty' },
    { icon: Shield, title: 'Dermatologist Tested', description: 'Clinically proven safe for all skin types' },
    { icon: Award, title: 'Premium Quality', description: 'Award-winning formulations with premium ingredients' },
    { icon: Sparkles, title: 'Organic Ingredients', description: 'Sustainably sourced natural and organic components' },
  ];

  return (
    <section id="why-choose" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Why Choose {ClientVariable} {HighLightClientVariable}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're committed to providing you with the highest quality beauty 
            products that are safe, effective, and ethically made.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={feature.title} className={`
            
            group cursor-pointer bg-white rounded-2xl 
           shadow-md shadow-gray-200 
           transition-all duration-500 ease-in-out 
           hover:shadow-xl hover:shadow-pink-400/40 hover:-translate-y-2
            `}>
              <CardContent className="p-8">
                <feature.icon className="w-16 h-16 mx-auto mb-6 text-primary pink-glow" />
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="fade-in-left scroll-reveal">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Our Beauty Story
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Founded with a passion for <span className="text-primary font-semibold">natural beauty</span> and 
              ethical practices, Luxe Beauty has been transforming skincare routines worldwide for over a decade.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              We believe that true beauty comes from within, and our products are designed to enhance 
              your natural radiance while being <span className="text-primary font-semibold">100% cruelty-free</span> and 
              environmentally conscious.
            </p>
            <div className="flex flex-wrap gap-4">
              <Badge variant="outline" className="px-4 py-2 text-sm transition-all duration-500 ease-in-out 
           hover:shadow-xl hover:shadow-pink-400/40">10+ Years Experience</Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm transition-all duration-500 ease-in-out 
           hover:shadow-xl hover:shadow-pink-400/40">500K+ Happy Customers</Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm transition-all duration-500 ease-in-out 
           hover:shadow-xl hover:shadow-pink-400/40">Zero Animal Testing</Badge>
            </div>
          </div>
          <div className="fade-in-right scroll-reveal">
            <Image 
              src={"/assets/hero-cosmetics.jpg"} 
              alt="About Luxe Beauty"
                width={800}
              height={600}
              className="w-full h-96 object-cover rounded-lg shadow-elegant"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Beauty Influencer',
      content: 'Luxe Beauty products have completely transformed my skincare routine. The results are simply amazing!',
      rating: 5,
    },
    {
      name: 'Emily Chen',
      role: 'Makeup Artist',
      content: 'As a professional makeup artist, I trust Luxe Beauty for all my clients. The quality is unmatched.',
      rating: 5,
    },
    {
      name: 'Maria Rodriguez',
      role: 'Skincare Enthusiast',
      content: 'Finally found products that work with my sensitive skin. Cruelty-free and effective!',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied customers who have discovered the 
            transformative power of our premium beauty products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={testimonial.name} className={`      group cursor-pointer bg-white rounded-2xl 
           shadow-md shadow-gray-200 
           transition-all duration-500 ease-in-out 
           hover:shadow-xl hover:shadow-pink-400/40 hover:-translate-y-2`}>
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const NewsletterSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Stay Beautiful
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Subscribe to receive exclusive beauty tips, product launches, 
            and special offers delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 py-6 px-4"
            />
            <Button className="btn-elegant px-8 py-6">
              Subscribe
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

const SocialSection = () => {
  const socialImages = [
    { src: "/assets/makeup-category.jpg", hashtag: '#LuxeBeauty' },
    { src: "/assets/skincare-category.jpg", hashtag: '#GlowUp' },
    { src: "/assets/fragrance-category.jpg", hashtag: '#NaturalBeauty' },
    { src: "/assets/haircare-category.jpg", hashtag: '#BeautyRoutine' },
    { src: "/assets/makeup-category.jpg", hashtag: '#CrueltyFree' },
    { src: "/assets/skincare-category.jpg", hashtag: '#SelfCare' },
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Beauty Community
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join our vibrant community and share your beauty journey with us. 
            Tag us for a chance to be featured!
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {socialImages.map((item, index) => (
            <div 
              key={index} 
              className={`relative group cursor-pointer overflow-hidden rounded-lg scroll-reveal stagger-delay-${index % 3}`}
            >
              <Image 
                src={item.src} 
                alt={`Social ${index + 1}`}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  width={300}
  height={300}
              />
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold">{item.hashtag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SustainabilitySection = () => {
  const certifications = [
    { icon: Leaf, label: 'Eco-Friendly' },
    { icon: Heart, label: 'Vegan' },
    { icon: Shield, label: 'Organic Certified' },
    { icon: Award, label: 'Recyclable Packaging' },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Committed to Sustainability
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're dedicated to protecting our planet while delivering exceptional 
            beauty products through sustainable practices and eco-friendly packaging.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={cert.label} 
              className={`flex flex-col items-center text-center scroll-reveal stagger-delay-${index + 1}`}
            >
              <cert.icon className="w-16 h-16 text-primary pink-glow mb-4" />
              <span className="font-medium">{cert.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-b from-black via-gray-900 to-black text-gray-300 pt-20 pb-12 overflow-hidden">
      {/* Decorative Background Glow */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.4),transparent_70%)] pointer-events-none"></div>

      <div className="container relative mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="text-3xl font-serif font-bold mb-6 text-white tracking-wide">
              {ClientVariable}<span className="text-primary">{HighLightClientVariable}</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Premium cosmetics and skincare for the modern woman. 
              Cruelty-free, organic, and trusted worldwide.
            </p>
            <div className="flex space-x-4">
              <Instagram className="w-6 h-6 text-gray-400 hover:text-primary transition-colors duration-300 cursor-pointer" />
              <Facebook className="w-6 h-6 text-gray-400 hover:text-primary transition-colors duration-300 cursor-pointer" />
              <Twitter className="w-6 h-6 text-gray-400 hover:text-primary transition-colors duration-300 cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {["About Us", "Our Products", "Sustainability", "Careers"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="relative text-gray-400 hover:text-primary transition-colors duration-300 after:content-[''] after:block after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">
              Customer Care
            </h4>
            <ul className="space-y-3">
              {["Contact Us", "Shipping Info", "Returns", "Size Guide"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="relative text-gray-400 hover:text-primary transition-colors duration-300 after:content-[''] after:block after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">
              Contact Info
            </h4>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span>corelogex@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span>New York, USA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; 2024 {ClientVariable} {HighLightClientVariable}. All rights reserved. |{" "}
            <a href="#" className="hover:text-primary transition">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="#" className="hover:text-primary transition">
              Terms of Service
            </a>
          </p>
        </div>
      </div>

      {/* Scroll-to-Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-primary text-white p-3 rounded-full shadow-lg shadow-pink-500/40 hover:scale-110 hover:shadow-pink-500/60 transition-all duration-300 z-50"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </footer>
  );
};

const Home = () => {
  useEffect(() => {
    // Scroll reveal animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach((el) => observer.observe(el));

    // Cleanup
    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <CategoriesSection />
      <FeaturedSection />
      <WhyChooseSection />
      <AboutSection />
      <TestimonialsSection />
      <NewsletterSection />
      <SocialSection />
      <SustainabilitySection />
      <Footer />
    </div>
  );
};

export default Home