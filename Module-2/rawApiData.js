const rawApiData = [
  {
    id: 1,
    name: "Wireless Noise-Canceling Headphones",
    category: "Electronics",
    price: 149.99,
    rating: 4.6,
    stock: 34
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    category: "Wearables",
    price: 89.95,
    rating: 4.3,
    stock: 58
  },
  {
    id: 3,
    name: "4K Ultra HD Smart TV 55\"",
    category: "Electronics",
    price: 479.00,
    rating: 4.8,
    stock: 12
  },
  {
    id: 4,
    name: "Ergonomic Office Chair",
    category: "Furniture",
    price: 199.99,
    rating: 4.5,
    stock: 27
  },
  {
    id: 5,
    name: "Bluetooth Portable Speaker",
    category: "Electronics",
    price: 59.50,
    rating: 4.4,
    stock: 76
  },
  {
    id: 6,
    name: "Stainless Steel Water Bottle",
    category: "Outdoors",
    price: 24.99,
    rating: 4.7,
    stock: 150
  },
  {
    id: 7,
    name: "Gaming Mouse RGB",
    category: "Computers",
    price: 39.99,
    rating: 4.2,
    stock: 91
  },
  {
    id: 8,
    name: "Mechanical Keyboard",
    category: "Electronics",
    price: 99.99,
    rating: 4.6,
    stock: 40
  },
  {
    id: 9,
    name: "Men’s Running Shoes",
    category: "Footwear",
    price: 74.95,
    rating: 4.3,
    stock: 63
  },
  {
    id: 10,
    name: "Women’s Yoga Pants",
    category: "Apparel",
    price: 34.99,
    rating: 4.5,
    stock: 110
  },
  {
    id: 11,
    name: "USB-C Laptop Docking Station",
    category: "Electronics",
    price: 129.00,
    rating: 4.4,
    stock: 22
  },
  {
    id: 12,
    name: "Electric Toothbrush",
    category: "Health",
    price: 59.99,
    rating: 4.6,
    stock: 85
  },
  {
    id: 13,
    name: "Air Purifier with HEPA Filter",
    category: "Home Appliances",
    price: 149.00,
    rating: 4.7,
    stock: 17
  },
  {
    id: 14,
    name: "Cordless Vacuum Cleaner",
    category: "Home Appliances",
    price: 219.99,
    rating: 4.5,
    stock: 25
  },
  {
    id: 15,
    name: "LED Desk Lamp with USB Charging",
    category: "Lighting",
    price: 39.95,
    rating: 4.4,
    stock: 60
  }
];


const topElectronicProducts = rawApiData.filter((item) => item.category === "Electronics").sort((a, b)=> b.price - a.price).slice(0, 3).map((productName) => { return {name : productName.name}})

console.log(topElectronicProducts);