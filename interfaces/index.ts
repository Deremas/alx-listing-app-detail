import { IconType } from "react-icons"; // or your preferred icon lib

export interface CardProps {
  title: string;
  description: string;
  image: string;
}

export interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
}

// Interfaces for Property Listings
export interface Address {
  state: string;
  city: string;
  country: string;
}

export interface Offers {
  bed: string;
  shower: string;
  occupants: string;
}

export interface PropertyProps {
  name: string;
  address: Address;
  rating: number;
  category: string[]; // e.g. ["Luxury Villa","Pool"]
  price: number;
  offers: Offers;
  image: string;
  discount?: string; // percent or empty string
}

export interface Accommodation {
  label: string;
  Icon: IconType;
}

export type Accommodations = Accommodation[];

export interface LayoutProps {
  children: React.ReactNode;
}
