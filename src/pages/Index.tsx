import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductCategories from "@/components/ProductCategories";
import WhyChooseUs from "@/components/WhyChooseUs";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProductCategories />
      <WhyChooseUs />
      <AboutSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
