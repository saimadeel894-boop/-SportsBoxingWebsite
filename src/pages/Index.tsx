import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductCategories from "@/components/ProductCategories";
import CategoriesSection from "@/components/CategoriesSection";
import HowWeWork from "@/components/HowWeWork";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ScrollReveal><AboutSection /></ScrollReveal>
      <ScrollReveal><ProductCategories /></ScrollReveal>
      <ScrollReveal><CategoriesSection /></ScrollReveal>
      <ScrollReveal><HowWeWork /></ScrollReveal>
      <ScrollReveal><Footer /></ScrollReveal>
    </div>
  );
};

export default Index;
