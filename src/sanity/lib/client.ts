import { createClient } from 'next-sanity';

import { apiVersion, dataset, projectId } from '../env';
import { sanityFetch } from './live';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
});

// Define the Product interface//+
interface Product {//+
  // Define the properties of the Product type//+
}//+
export const getAllProducts = async () => {
  const query = `*[_type == "product"]`;
  const products = await sanityFetch({ query: query });
  return products.data as Product[];
};

