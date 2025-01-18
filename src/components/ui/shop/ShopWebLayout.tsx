import HeroSection from "./HeroSection";
import BentoGrid from "./BentoGrid";
import EmailShare from "./EmailShare";
import ProductCards from "./ProductCards";

function ShopWebLayout() {
  return (
    <div>
      <HeroSection />
      <ProductCards />
      <BentoGrid />
      <EmailShare />
    </div>
  );
}

export default ShopWebLayout;
