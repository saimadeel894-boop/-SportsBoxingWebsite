import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductCategories from "@/components/ProductCategories";
import CategoriesSection from "@/components/CategoriesSection";
import CatalogueSection from "@/components/CatalogueSection";
import OurWork from "@/components/OurWork";
import HowWeWork from "@/components/HowWeWork";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ScrollReveal><AboutSection /></ScrollReveal>
      <ScrollReveal><ProductCategories /></ScrollReveal>
      <ScrollReveal><CategoriesSection /></ScrollReveal>
      <ScrollReveal><CatalogueSection /></ScrollReveal>
      <ScrollReveal><OurWork /></ScrollReveal>
      <ScrollReveal><HowWeWork /></ScrollReveal>
      <ScrollReveal><WhyChooseUs /></ScrollReveal>
      <ScrollReveal><ContactForm /></ScrollReveal>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
