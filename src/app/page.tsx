import { Header } from '@/components/header';
import { HeroSlider } from '@/components/hero-slider';
import { CategoryCarousel } from '@/components/category-carousel';
import { ProductCarousel } from '@/components/product-carousel';
import { Footer } from '@/components/footer';
import { products } from '@/lib/products';

export default function Home() {
  const featuredProducts = products.filter(p => ["33", "34", "35", "36"].includes(p.id));
  const phoneCases = products.filter(p => p.category === 'Coque de téléphone');
  const telephones = products.filter(p => p.category === 'Téléphonie').slice(0, 4);
  const airpods = products.filter(p => p.category === 'Airpod').slice(0, 4);
  const cables = products.filter(p => p.category === 'Câble').slice(0, 4);
  const customCases = products.filter(p => p.category === 'Coque personnalisée').slice(0, 4);
  const speakers = products.filter(p => p.category === 'Enceinte').slice(0, 4);
  const pcs = products.filter(p => p.category === 'PC').slice(0, 4);
  const homeAppliances = products.filter(p => p.category === 'Electroménager').slice(0, 4);


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
        <ProductCarousel
          id="telephones"
          title="Téléphones"
          description="Les derniers smartphones du marché"
          products={telephones}
        />
        <ProductCarousel
          id="airpods"
          title="Airpods & Écouteurs"
          description="Le meilleur du son sans fil"
          products={airpods}
        />
        <ProductCarousel
          id="cables"
          title="Câbles & Chargeurs"
          description="Pour ne jamais être à court de batterie"
          products={cables}
        />
        <ProductCarousel
          id="coques-personnalisees"
          title="Coques personnalisées"
          description="Créez une coque à votre image"
          products={customCases}
        />
        <ProductCarousel
          id="enceintes"
          title="Enceintes"
          description="Un son puissant, partout avec vous"
          products={speakers}
        />
        <ProductCarousel
          id="pc"
          title="PCs & Laptops"
          description="Performances et mobilité pour tous les besoins"
          products={pcs}
        />
        <ProductCarousel
          id="electromenager"
          title="Electroménager"
          description="Facilitez votre quotidien avec nos appareils intelligents"
          products={homeAppliances}
        />
      </main>
      <Footer />
    </div>
  );
}
