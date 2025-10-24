import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ProductCard } from '@/components/product-card';
import { products } from '@/lib/products';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { products as allProducts } from '@/lib/products';
import { categories as allCategories} from '@/lib/categories';
import { slugify, unslugify } from '@/lib/utils';

export async function generateStaticParams() {
  const categorySlugs = new Set(allProducts.map(p => slugify(p.category)));
  return Array.from(categorySlugs).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const categoryName = unslugify(params.slug);
  const categoryExists = allCategories.some(c => c.name.toLowerCase() === categoryName.toLowerCase());

  if (!categoryExists) {
    return {
      title: 'Catégorie non trouvée',
    }
  }
  
  return {
    title: `${categoryName} | Chapchap Boutique`,
    description: `Découvrez tous nos produits de la catégorie ${categoryName}.`,
  }
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const categoryName = unslugify(params.slug);
  
  const categoryProducts = products.filter(
    (product) => product.category.toLowerCase() === categoryName.toLowerCase()
  );

  const categoryDetails = allCategories.find(c => c.name.toLowerCase() === categoryName.toLowerCase());

  if (categoryProducts.length === 0 || !categoryDetails) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow py-8 sm:py-16">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h1 className="text-4xl sm:text-5xl font-bold font-headline text-foreground">{categoryDetails.name}</h1>
                <p className="text-muted-foreground mt-2 text-lg">Découvrez notre sélection de produits</p>
            </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categoryProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
