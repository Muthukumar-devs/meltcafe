export interface MenuItem {
  id: string;
  name: string;
  category: 'melts' | 'desserts' | 'coffee' | 'chennai-specials' | 'bakery';
  description: string;
  price: number;
  image: string;
  tag?: string;
  isVeg: boolean;
  rating: number;
  preparationTime: string;
  ingredients: string[];
}

export const MENU_CATEGORIES = [
  { id: 'all', label: 'All Offerings' },
  { id: 'melts', label: 'Artisanal Melts' },
  { id: 'desserts', label: 'Molten Desserts' },
  { id: 'coffee', label: 'Specialty Coffee' },
  { id: 'chennai-specials', label: 'Chennai Specials' },
  { id: 'bakery', label: 'Boulangerie' },
] as const;

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'melt-truffle-gruyere',
    name: 'Truffle Mushroom & Aged Gruyère Melt',
    category: 'melts',
    description: 'Slow-roasted wild oyster & portobello mushrooms, caramelized sweet onions, 18-month aged Gruyère & Emmental on 48-hr fermented country sourdough with truffle garlic butter.',
    price: 495,
    image: '/images/signature-melt.jpg',
    tag: "Chef's Signature",
    isVeg: true,
    rating: 4.9,
    preparationTime: '12-14 mins',
    ingredients: ['Gruyère', 'Wild Mushrooms', 'Artisan Sourdough', 'Truffle Butter', 'Caramelized Onion']
  },
  {
    id: 'melt-chettinad-paneer',
    name: 'Madras Spiced Cottage Cheese Melt',
    category: 'chennai-specials',
    description: 'Malai paneer roasted with aromatic roasted fennel, shallots, crushed pepper & curry leaf emulsion, layered with smoked scamorza cheese in crusty toasted pain de mie.',
    price: 445,
    image: '/images/signature-melt.jpg',
    tag: 'Chennai Exclusive',
    isVeg: true,
    rating: 4.8,
    preparationTime: '10-12 mins',
    ingredients: ['Fresh Paneer', 'Chettinad Spices', 'Smoked Scamorza', 'Curry Leaf Herb Aioli']
  },
  {
    id: 'dessert-molten-lava',
    name: '70% Valrhona Molten Chocolate Dome',
    category: 'desserts',
    description: 'Warm molten dark chocolate sponge oozing silky bittersweet Ganache heart, paired with Tahitian vanilla bean gelato, fresh raspberries, and 24k edible gold leaf.',
    price: 465,
    image: '/images/hero-cafe.jpg',
    tag: 'Bestseller',
    isVeg: true,
    rating: 5.0,
    preparationTime: '15 mins',
    ingredients: ['70% Valrhona Dark Chocolate', 'French Butter', 'Madagascar Vanilla Bean', 'Fresh Raspberries']
  },
  {
    id: 'dessert-belgian-waffle',
    name: 'Signature Molten Cascade Belgian Waffle',
    category: 'desserts',
    description: 'Crisp golden Belgian pearl sugar waffle stack drenched in warm molten chocolate cascade, hand-crafted sea-salt caramel, toasted hazelnuts, and wild berries.',
    price: 425,
    image: '/images/belgian-waffle.jpg',
    tag: 'Crowd Favorite',
    isVeg: true,
    rating: 4.9,
    preparationTime: '12 mins',
    ingredients: ['Belgian Waffle Batter', 'Warm Molten Chocolate', 'Salted Caramel', 'Blueberries', 'Hazelnuts']
  },
  {
    id: 'coffee-madras-affogato',
    name: 'The Madras Molten Affogato',
    category: 'coffee',
    description: 'Double shot of Shevaroy Hills dark roast espresso poured tableside over two scoops of hand-churned vanilla bean gelato with a molten Belgian chocolate dipped rim.',
    price: 365,
    image: '/images/affogato-coffee.jpg',
    tag: 'Must Try',
    isVeg: true,
    rating: 5.0,
    preparationTime: '5 mins',
    ingredients: ['Shevaroy Single-Origin Espresso', 'Artisanal Vanilla Gelato', 'Belgian Chocolate Rim', 'Hazelnut Praline']
  },
  {
    id: 'coffee-yercaud-pour-over',
    name: 'Yercaud Reserve Single-Origin Pour Over',
    category: 'coffee',
    description: 'Micro-lot Arabica sourced from high altitude plantations in Yercaud (Shevaroy Hills). Delivers clean floral notes of jasmine, dried apricot, and cocoa finish.',
    price: 295,
    image: '/images/affogato-coffee.jpg',
    tag: 'Single Origin',
    isVeg: true,
    rating: 4.8,
    preparationTime: '6 mins',
    ingredients: ['100% Arabica Shevaroy Hills', 'V60 Hand Brew', 'Artisan Mineral Water']
  },
  {
    id: 'coffee-filter-tiramisu-latte',
    name: 'Filter Kaapi Tiramisu Cold Foam',
    category: 'chennai-specials',
    description: 'Slow-dripped South Indian brass decoction blended with condensed milk cream, crowned with whipped mascarpone cheese cold foam and dusted with unsweetened Valrhona cocoa.',
    price: 345,
    image: '/images/affogato-coffee.jpg',
    tag: 'Local Favorite',
    isVeg: true,
    rating: 4.9,
    preparationTime: '5 mins',
    ingredients: ['Chicory Blend Filter Decoction', 'Mascarpone Foam', 'Dark Chocolate Dust', 'Organic Milk']
  },
  {
    id: 'bakery-almond-croissant',
    name: 'Double-Baked Frangipane Almond Croissant',
    category: 'bakery',
    description: 'Flaky layered butter croissant filled with rich almond cream, steeped in Bourbon vanilla syrup and covered in roasted California almond slivers.',
    price: 285,
    image: '/images/pastry-spread.jpg',
    tag: 'Fresh Baked Daily',
    isVeg: true,
    rating: 4.9,
    preparationTime: 'Ready',
    ingredients: ['French Butter', 'Almond Frangipane', 'Vanilla Syrup', 'Flaked Almonds']
  },
  {
    id: 'bakery-pain-au-chocolat',
    name: 'Valrhona Triple Batons Pain au Chocolat',
    category: 'bakery',
    description: 'Golden honeycomb-crumb laminated pastry enclosing three generous batons of 64% semi-sweet dark chocolate, baked fresh every morning at 7:30 AM.',
    price: 275,
    image: '/images/pastry-spread.jpg',
    tag: 'Morning Special',
    isVeg: true,
    rating: 4.8,
    preparationTime: 'Ready',
    ingredients: ['AOP French Butter', '64% Valrhona Dark Batons', 'Laminated Viennoiserie']
  },
  {
    id: 'melt-smoked-chicken-brie',
    name: 'Smoked Pepper Chicken & French Brie Melt',
    category: 'melts',
    description: 'Tender hickory smoked chicken breast strips with crushed Malabar black pepper, creamy molten Brie cheese, Dijon mustard, and baby arugula on artisanal focaccia.',
    price: 525,
    image: '/images/signature-melt.jpg',
    tag: 'Gourmet Selection',
    isVeg: false,
    rating: 4.9,
    preparationTime: '14 mins',
    ingredients: ['Hickory Smoked Chicken', 'French Brie', 'Malabar Pepper', 'Artisan Focaccia', 'Baby Arugula']
  }
];
