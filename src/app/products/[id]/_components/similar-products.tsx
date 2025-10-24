import { products } from '@/lib/products';
import { ProductCard } from '@/components/product-card';
import type { Product } from '@/lib/types';

export async function SimilarProducts({ category, currentProductId }: { category: Product['category'], currentProductId: string }) {
  const similarProducts = products
    .filter(p => p.category === category && p.id !== currentProductId)
    .slice(0, 3);

  if (similarProducts.length === 0) {
    return (
        <div className="mt-16 sm:mt-24">
            <h2 className="text-2xl sm:text-3xl font-bold font-headline text-foreground mb-6">Produits similaires</h2>
            <p className="text-muted-foreground">Aucun autre produit trouvé dans cette catégorie.</p>
        </div>
    );
  }

  return (
    <div className="mt-16 sm:mt-24">
      <h2 className="text-2xl sm:text-3xl font-bold font-headline text-foreground mb-6">Dans la même catégorie</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {similarProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
