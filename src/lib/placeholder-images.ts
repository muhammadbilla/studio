import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

export const PlaceHolderImages: ImagePlaceholder[] = data.placeholderImages;

const imageMap = new Map(PlaceHolderImages.map(img => [img.id, img]));

export function getImageById(id: string): ImagePlaceholder {
  const image = imageMap.get(id);
  if (!image) {
    // Return a default/fallback image or throw an error
    return {
      id: 'not-found',
      description: 'Image not found',
      imageUrl: 'https://picsum.photos/seed/error/400/300',
      imageHint: 'placeholder image'
    };
  }
  return image;
}