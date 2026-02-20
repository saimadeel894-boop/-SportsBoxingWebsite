import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductCategories from "@/components/ProductCategories";
import CategoriesSection from "@/components/CategoriesSection";
import OurWork from "@/components/OurWork";
import Partners from "@/components/Partners";
import HowWeWork from "@/components/HowWeWork";
import ContactForm from "@/components/ContactForm";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProductCategories />
      <CategoriesSection />
      <OurWork />
      <Partners />
      <HowWeWork />
      <ContactForm />
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default Index;
