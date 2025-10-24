'use server';

/**
 * @fileOverview A flow for recommending similar products based on a given product category.
 *
 * - `getSimilarProducts` - A function that takes a product category as input and returns a list of similar products.
 * - `SimilarProductsInput` - The input type for the `getSimilarProducts` function.
 * - `SimilarProductsOutput` - The return type for the `getSimilarProducts` function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SimilarProductsInputSchema = z.object({
  category: z.string().describe('The category of the product.'),
});
export type SimilarProductsInput = z.infer<typeof SimilarProductsInputSchema>;

const SimilarProductsOutputSchema = z.array(z.string()).describe('A list of similar products.');
export type SimilarProductsOutput = z.infer<typeof SimilarProductsOutputSchema>;

export async function getSimilarProducts(input: SimilarProductsInput): Promise<SimilarProductsOutput> {
  return similarProductsFlow(input);
}

const similarProductsPrompt = ai.definePrompt({
  name: 'similarProductsPrompt',
  input: {schema: SimilarProductsInputSchema},
  output: {schema: SimilarProductsOutputSchema},
  prompt: `You are a helpful shopping assistant. Given a product category, suggest 3 other similar products that a customer might be interested in.

Category: {{{category}}}

Similar Products:`,
});

const similarProductsFlow = ai.defineFlow(
  {
    name: 'similarProductsFlow',
    inputSchema: SimilarProductsInputSchema,
    outputSchema: SimilarProductsOutputSchema,
  },
  async input => {
    const {output} = await similarProductsPrompt(input);
    return output!;
  }
);
