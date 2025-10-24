import { getSimilarProducts } from '@/ai/flows/similar-products-recommendation';
import { products } from '@/lib/products';
import { ProductCard } from '@/components/product-card';
import type { Product } from '@/lib/types';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';

export async function SimilarProducts({ category, currentProductId }: { category: Product['category'], currentProductId: string }) {
  let similarProductNames: string[] = [];
  try {
    similarProductNames = await getSimilarProducts({ category });
  } catch (error) {
    console.error('Error fetching similar products:', error);
    return (
        <div className="mt-16 sm:mt-24">
            <h2 className="text-2xl sm:text-3xl font-bold font-headline text-foreground mb-6">Produits similaires</h2>
            <Alert variant="destructive">
                <Terminal className="h-4 w-4" />
                <AlertTitle>Erreur</AlertTitle>
                <AlertDescription>
                    Impossible de charger les produits similaires pour le moment.
                </AlertDescription>
            </Alert>
        </div>
    );
  }
  
  const similarProducts = similarProductNames
    .map(name => 
      products.find(p => p.name.toLowerCase().includes(name.toLowerCase().split(' ').slice(0,3).join(' ')))
    )
    .filter((p): p is Product => p !== undefined && p.id !== currentProductId)
    // remove duplicates
    .filter((p, index, self) => index === self.findIndex((t) => t.id === p.id))
    .slice(0, 3);

  if (similarProducts.length === 0) {
    return null;
  }

  return (
    <div className="mt-16 sm:mt-24">
      <h2 className="text-2xl sm:text-3xl font-bold font-headline text-foreground mb-6">Produits similaires</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {similarProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
