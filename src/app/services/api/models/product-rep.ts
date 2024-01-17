export interface ProductRep {
  id?: number;
  title?: string;
  description?: string;
  category?: string;
  image?: string;
  price?: number;
  rating?: {
    rate?: number;
    count?: number;
  };
}
