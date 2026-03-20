import { getCollection } from 'astro:content';

// In Astro, we can query the photos collection directly
export async function getPhotos() {
  // Assuming we use Astro Content Collections
  const allPhotos = await getCollection('photos');
  return allPhotos.sort((a, b) => new Date(b.data.date) - new Date(a.data.date));
}
