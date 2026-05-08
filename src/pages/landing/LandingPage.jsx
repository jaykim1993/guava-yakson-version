import HeroSection from "./sections/HeroSection";
import RecommendSection from "./sections/RecommendSection";
import IntroSection from "./sections/IntroSection";
import ProductSection from "./sections/ProductSection";
import ReviewSection from "./sections/ReviewSection";
import FAQSection from "./sections/FAQSection";
import FinalCTASection from "./sections/FinalCTASection";

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <RecommendSection />
      <IntroSection />
      <ReviewSection />
      <ProductSection />
      <FAQSection />
      <FinalCTASection />
    </>
  )
}