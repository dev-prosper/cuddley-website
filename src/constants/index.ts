import {
  TruckIcon,
  ClockIcon,
  QualityAsurranceIcon,
  LoveIcon,
  CollabIcon,
  StarIcon,
} from "@/components/icons";
import { ComponentType, SVGProps } from "react";

type Reason = {
  heading: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};
type Value = {
  value: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export const PAGE_URL_PATHS = {
  HOME: "",
  SOFA_SET: "sofa-set",
  TABLE_LAMP: "table-lamps",
  DINING_TABLES: "dining-table",
  LIGHTING: "lighting",
  LUXURY_ACCESSORIES_DECOR: "luxury-accessories-decor",
  SIDE_STOOL: "side-stool",
  WALL_FRAMES: "wall-frames",
  WALL_ARTS_AND_CLOCK: "wall-arts-and-clock",
  DIFFUSERS_AND_CANDLES: "diffusers-and-candles",
  MIRRORS: "mirrors",
  CONTACT_US: "contact-us",
  SERVICE: "services",
  SUPPORT: "support",
};

export const navLinks = [
  { label: "Home", href: `/${PAGE_URL_PATHS.HOME}` },
  { label: "Sofa Set", href: `/${PAGE_URL_PATHS.SOFA_SET}` },
  { label: "Table Lamps", href: `/${PAGE_URL_PATHS.TABLE_LAMP}` },
  { label: "Dining Table", href: `/${PAGE_URL_PATHS.DINING_TABLES}` },
  { label: "Lighting", href: `/${PAGE_URL_PATHS.LIGHTING}` },
  {
    label: "Luxury Accessories/Decor",
    href: `/${PAGE_URL_PATHS.LUXURY_ACCESSORIES_DECOR}`,
  },
  { label: "Side Stool", href: `/${PAGE_URL_PATHS.SIDE_STOOL}` },
  { label: "Wall Frames", href: `/${PAGE_URL_PATHS.WALL_FRAMES}` },
  {
    label: "Wall Art And Clock",
    href: `/${PAGE_URL_PATHS.WALL_ARTS_AND_CLOCK}`,
  },
  {
    label: "Diffusers and Candle",
    href: `/${PAGE_URL_PATHS.DIFFUSERS_AND_CANDLES}`,
  },
  { label: "Mirrors", href: `/${PAGE_URL_PATHS.MIRRORS}` },
  { label: "Service", href: `/${PAGE_URL_PATHS.SERVICE}` },
  { label: "Contact Us", href: `/${PAGE_URL_PATHS.CONTACT_US}` },
  { label: "Support", href: `/${PAGE_URL_PATHS.SUPPORT}` },
];

export const FEATURED_PRODUCTS = [
  {
    productName: "Table Lamp",
    price: "200,000",
    imgSrc: "/images/living-room.png",
  },
  { productName: "Sofa", price: "200,000", imgSrc: "/images/bedroom.png" },
  {
    productName: "Upholster",
    price: "200,000",
    imgSrc: "/images/dining-room.png",
  },
  {
    productName: "Mirrors",
    price: "200,000",
    imgSrc: "/images/living-room.png",
  },
  {
    productName: "Lighthings",
    price: "200,000",
    imgSrc: "/images/dining-room.png",
  },
  {
    productName: "Wall Frames",
    price: "200,000",
    imgSrc: "/images/bedroom.png",
  },
  { productName: "Lamp", price: "200,000", imgSrc: "/images/bedroom.png" },
  { productName: "Table", price: "200,000", imgSrc: "/images/dining-room.png" },
];

export const REASONS_TO_CHOOSE: Reason[] = [
  {
    heading: "Fast Shipping",
    description:
      "Enjoy fast and reliable shipping on all orders, ensuring your products arrive quickly and safely.",
    icon: TruckIcon,
  },
  {
    heading: "Expert Advice",
    description:
      "Our team of experts is here to help you find the perfect pieces for your home, offering personalized advice and support.",
    icon: ClockIcon,
  },
  {
    heading: "Quality Guaranteed",
    description:
      "We stand behind the quality of our products, offering a satisfaction guarantee on every purchase.",
    icon: QualityAsurranceIcon,
  },
];

export const VALUES: Value[] = [
  { value: "Client-Centric Approach", icon: LoveIcon },
  { value: "Collaboration", icon: CollabIcon },
  { value: "Excellence", icon: StarIcon },
];
