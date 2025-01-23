export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    rating: number;
    imagePath: string;
  }
  
  export const products: Product[] = [
    {
      id: 1,
      name: "Hydrating Serum",
      description: "A lightweight serum for deep hydration.",
      price: 29.99,
      rating: 4.5,
      imagePath: "/serum.jpg",
    },
    {
      id: 2,
      name: "Exfoliating Cleanser",
      description: "Gently exfoliates and cleanses skin.",
      price: 19.99,
      rating: 4,
      imagePath: "/cleansing.jpg",
    },
    {
      id: 3,
      name: "Moisturizing Cream",
      description: "Locks in moisture for soft skin.",
      price: 34.99,
      rating: 5,
      imagePath: "/cream.jpg",
    },
    {
      id: 4,
      name: "Sunscreen SPF 50",
      description: "Broad-spectrum sun protection.",
      price: 24.99,
      rating: 4.5,
      imagePath: "/snailcream.jpg",
    },
    {
      id: 5,
      name: "Repairing Serum",
      description: "Repair your skin.",
      price: 39.99,
      rating: 4.8,
      imagePath: "/niacinamid.jpg",
    },
    {
      id: 6,
      name: "Glycolic Serum",
      description: "Brightens and evens skin tone.",
      price: 29.99,
      rating: 4.7,
      imagePath: "/glycolicacid.jpg",
    },
  ];