import { Header } from '@/components/header';
import { HeroSlider } from '@/components/hero-slider';
import { CategoryCarousel } from '@/components/category-carousel';
import { ProductCarousel } from '@/components/product-carousel';
import { Footer } from '@/components/footer';
import { products } from '@/lib/products';

export default function Home() {
  const featuredProducts = products.filter(p => ['Informatique', 'Téléphonie', 'Gaming', 'Image & Son', 'Wearables'].includes(p.category)).slice(0, 5);
  const phoneCases = products.filter(p => p.category === 'Téléphonie' && p.name.toLowerCase().includes('coque'));

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSlider />
        <CategoryCarousel />
        <ProductCarousel
          id="boutique"
          title="Produits en vedette"
          description="Nos meilleures ventes du moment"
          products={featuredProducts}
        />
        <ProductCarousel
          id="coques"
          title="Coques de Téléphone"
          description="Protection et style pour votre smartphone"
          products={phoneCases}
        />
      </main>
      <Footer />
    </div>
  );
}
