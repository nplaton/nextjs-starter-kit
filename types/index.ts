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

// Define your types here
export interface Location {
  id: string;
  name: string;
  // Add other properties as needed
}

export interface Unit {
  id: string;
  size: string;
  price: number;
  // Add other properties as needed
}

// Add more types as needed