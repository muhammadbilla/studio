import { products } from '@/lib/products';
import { notFound } from 'next/navigation';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ProductDetails } from './_components/product-details';
import { SimilarProducts } from './_components/similar-products';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({ params }: { params: { id:string } }): Promise<Metadata> {
  const product = products.find((p) => p.id === params.id);
  if (!product) {
    return {
      title: 'Produit non trouvé',
    }
  }
  return {
    title: `${product.name} | Chapchap Boutique`,
    description: product.description,
  }
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow py-8 sm:py-16">
        <div className="container mx-auto px-4">
          <ProductDetails product={product} />
          <SimilarProducts category={product.category} currentProductId={product.id} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
