// Define your types and interfaces here
export interface StorageUnit {
  size: string;
  price: number;
  available: number;
}

export interface Testimonial {
  id: string;
  name: string;
  comment: string;
  rating: number;
}

export interface Facility {
  id: string;
  name: string;
  address: string;
  rating: number;
  lat: number;
  lng: number;
  units: StorageUnit[];
}