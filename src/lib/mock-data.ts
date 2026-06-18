// ShopZone - Complete Mock Data for E-Commerce Marketplace

export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  icon: string;
  parentId: string | null;
  isActive: boolean;
  productCount: number;
}

export interface Brand {
  id: string;
  name: string;
  slug: string;
  logo: string;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDesc: string;
  categoryId: string;
  brandId: string;
  sellerId: string;
  basePrice: number;
  salePrice: number;
  images: string[];
  colors: string[];
  sizes: string[];
  specifications: Record<string, string>;
  tags: string[];
  highlights: string[];
  stock: number;
  sku: string;
  weight: number;
  isFeatured: boolean;
  isNewArrival: boolean;
  isTrending: boolean;
  isBestSeller: boolean;
  isActive: boolean;
  avgRating: number;
  totalReviews: number;
  totalSold: number;
  discount: number;
  deliveryDays: number;
  isFreeDelivery: boolean;
  returnPolicy: string;
  warranty: string;
}

export interface Banner {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  link: string;
  position: string;
  isActive: boolean;
  bgColor: string;
  badge?: string;
  cta?: string;
  category?: string;
}

export const banners: Banner[] = [
  {
    id: 'ban-1',
    title: 'Mega Electronics Sale',
    subtitle: 'Up to 70% off on top electronics brands — Smartphones, Laptops & Audio',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1600&h=600&fit=crop',
    link: '/products?category=electronics',
    position: 'home',
    isActive: true,
    bgColor: 'from-violet-900/80 via-violet-800/70 to-purple-900/80',
    badge: 'Limited Time',
    cta: 'Shop Electronics',
    category: 'electronics',
  },
  {
    id: 'ban-2',
    title: 'Fashion Fiesta',
    subtitle: 'New season, new styles — Flat 50% off on premium fashion',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600&h=600&fit=crop',
    link: '/products?category=fashion',
    position: 'home',
    isActive: true,
    bgColor: 'from-rose-900/80 via-pink-800/70 to-fuchsia-900/80',
    badge: 'New Arrivals',
    cta: 'Explore Fashion',
    category: 'fashion',
  },
  {
    id: 'ban-3',
    title: 'Home Makeover Festival',
    subtitle: 'Transform your home with up to 60% off on decor & appliances',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&h=600&fit=crop',
    link: '/products?category=home-kitchen',
    position: 'home',
    isActive: true,
    bgColor: 'from-amber-900/80 via-orange-800/70 to-red-900/80',
    badge: 'Festive Special',
    cta: 'Shop Home',
    category: 'home-kitchen',
  },
  {
    id: 'ban-4',
    title: 'Beauty Bonanza',
    subtitle: 'Premium beauty & grooming products at unbeatable prices',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1600&h=600&fit=crop',
    link: '/products?category=beauty',
    position: 'home',
    isActive: true,
    bgColor: 'from-pink-900/80 via-fuchsia-800/70 to-purple-900/80',
    badge: 'Trending Now',
    cta: 'Shop Beauty',
    category: 'beauty',
  },
  {
    id: 'ban-5',
    title: 'Flash Sale — 4 Hours Only',
    subtitle: 'Grab lightning deals before they are gone! Up to 80% off',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1600&h=600&fit=crop',
    link: '/products?tag=flash-sale',
    position: 'home',
    isActive: true,
    bgColor: 'from-red-900/85 via-rose-800/75 to-orange-900/80',
    badge: '⚡ Flash Sale',
    cta: 'Grab Deals',
  },
  {
    id: 'ban-6',
    title: 'Sports Season Sale',
    subtitle: 'Gear up with up to 55% off on sports & fitness essentials',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1600&h=600&fit=crop',
    link: '/products?category=sports-fitness',
    position: 'home',
    isActive: true,
    bgColor: 'from-emerald-900/80 via-teal-800/70 to-cyan-900/80',
    badge: 'Get Active',
    cta: 'Shop Sports',
    category: 'sports-fitness',
  },
];

export interface Review {
  id: string;
  productId: string;
  userId: string;
  userName: string;
  rating: number;
  title: string;
  comment: string;
  isVerified: boolean;
  helpful: number;
  createdAt: string;
}

export interface Coupon {
  id: string;
  code: string;
  description: string;
  type: 'percentage' | 'fixed';
  value: number;
  minOrder: number;
  maxDiscount: number;
  isActive: boolean;
}

export interface Seller {
  id: string;
  storeName: string;
  storeSlug: string;
  storeLogo: string;
  rating: number;
  totalProducts: number;
  totalSales: number;
  isVerified: boolean;
}

// ==================== CATEGORIES ====================
export const categories: Category[] = [
  { id: 'cat-1', name: 'Electronics', slug: 'electronics', image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=300&h=300&fit=crop&auto=format&q=80', icon: 'Smartphone', parentId: null, isActive: true, productCount: 45 },
  { id: 'cat-2', name: 'Mobiles', slug: 'mobiles', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop&auto=format&q=80', icon: 'Smartphone', parentId: 'cat-1', isActive: true, productCount: 20 },
  { id: 'cat-3', name: 'Laptops', slug: 'laptops', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300&h=300&fit=crop&auto=format&q=80', icon: 'Laptop', parentId: 'cat-1', isActive: true, productCount: 15 },
  { id: 'cat-4', name: 'Audio', slug: 'audio', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop&auto=format&q=80', icon: 'Headphones', parentId: 'cat-1', isActive: true, productCount: 10 },
  { id: 'cat-5', name: 'Fashion', slug: 'fashion', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=300&h=300&fit=crop&auto=format&q=80', icon: 'Shirt', parentId: null, isActive: true, productCount: 60 },
  { id: 'cat-6', name: "Men's Clothing", slug: 'mens-clothing', image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=300&h=300&fit=crop&auto=format&q=80', icon: 'Shirt', parentId: 'cat-5', isActive: true, productCount: 25 },
  { id: 'cat-7', name: "Women's Clothing", slug: 'womens-clothing', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&h=300&fit=crop&auto=format&q=80', icon: 'Shirt', parentId: 'cat-5', isActive: true, productCount: 30 },
  { id: 'cat-8', name: 'Footwear', slug: 'footwear', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop&auto=format&q=80', icon: 'Footprints', parentId: 'cat-5', isActive: true, productCount: 20 },
  { id: 'cat-9', name: 'Home & Kitchen', slug: 'home-kitchen', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop&auto=format&q=80', icon: 'Home', parentId: null, isActive: true, productCount: 35 },
  { id: 'cat-10', name: 'Kitchen Appliances', slug: 'kitchen-appliances', image: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=300&h=300&fit=crop&auto=format&q=80', icon: 'CookingPot', parentId: 'cat-9', isActive: true, productCount: 15 },
  { id: 'cat-11', name: 'Home Decor', slug: 'home-decor', image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=300&h=300&fit=crop&auto=format&q=80', icon: 'Lamp', parentId: 'cat-9', isActive: true, productCount: 20 },
  { id: 'cat-12', name: 'Beauty & Personal Care', slug: 'beauty', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=300&fit=crop&auto=format&q=80', icon: 'Sparkles', parentId: null, isActive: true, productCount: 25 },
  { id: 'cat-13', name: 'Skincare', slug: 'skincare', image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&h=300&fit=crop&auto=format&q=80', icon: 'Droplets', parentId: 'cat-12', isActive: true, productCount: 12 },
  { id: 'cat-14', name: 'Makeup', slug: 'makeup', image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=300&h=300&fit=crop&auto=format&q=80', icon: 'Palette', parentId: 'cat-12', isActive: true, productCount: 13 },
  { id: 'cat-15', name: 'Sports & Fitness', slug: 'sports-fitness', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop&auto=format&q=80', icon: 'Dumbbell', parentId: null, isActive: true, productCount: 20 },
  { id: 'cat-16', name: 'Books', slug: 'books', image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=300&fit=crop&auto=format&q=80', icon: 'BookOpen', parentId: null, isActive: true, productCount: 30 },
  { id: 'cat-17', name: 'Toys & Games', slug: 'toys-games', image: 'https://images.unsplash.com/photo-1558877385-81a1c7e67d72?w=300&h=300&fit=crop&auto=format&q=80', icon: 'Gamepad2', parentId: null, isActive: true, productCount: 15 },
  { id: 'cat-18', name: 'Groceries', slug: 'groceries', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=300&h=300&fit=crop&auto=format&q=80', icon: 'ShoppingBasket', parentId: null, isActive: true, productCount: 25 },
  { id: 'cat-19', name: 'Jewellery', slug: 'jewellery', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=300&fit=crop&auto=format&q=80', icon: 'Gem', parentId: null, isActive: true, productCount: 15 },
  { id: 'cat-20', name: 'Watches', slug: 'watches', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop&auto=format&q=80', icon: 'Watch', parentId: null, isActive: true, productCount: 12 },
  { id: 'cat-21', name: 'Furniture', slug: 'furniture', image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=300&h=300&fit=crop&auto=format&q=80', icon: 'Sofa', parentId: null, isActive: true, productCount: 18 },
  { id: 'cat-22', name: 'Automotive', slug: 'automotive', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=300&h=300&fit=crop&auto=format&q=80', icon: 'Car', parentId: null, isActive: true, productCount: 10 },
  { id: 'cat-23', name: 'Health & Wellness', slug: 'health-wellness', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=300&h=300&fit=crop&auto=format&q=80', icon: 'Heart', parentId: null, isActive: true, productCount: 12 },
  { id: 'cat-24', name: 'Baby Care', slug: 'baby-care', image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=300&h=300&fit=crop&auto=format&q=80', icon: 'Baby', parentId: null, isActive: true, productCount: 10 },
  { id: 'cat-25', name: 'Pet Supplies', slug: 'pet-supplies', image: 'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=300&h=300&fit=crop&auto=format&q=80', icon: 'PawPrint', parentId: null, isActive: true, productCount: 8 },
];

// ==================== BRANDS ====================
export const brands: Brand[] = [
  { id: 'br-1', name: 'Samsung', slug: 'samsung', logo: 'https://picsum.photos/seed/samsung/100/100', description: 'Global leader in electronics and mobile technology' },
  { id: 'br-2', name: 'Apple', slug: 'apple', logo: 'https://picsum.photos/seed/apple/100/100', description: 'Premium technology and lifestyle brand' },
  { id: 'br-3', name: 'Sony', slug: 'sony', logo: 'https://picsum.photos/seed/sony/100/100', description: 'Innovation in entertainment and electronics' },
  { id: 'br-4', name: 'Nike', slug: 'nike', logo: 'https://picsum.photos/seed/nike/100/100', description: 'World leading sportswear and athletic brand' },
  { id: 'br-5', name: 'Adidas', slug: 'adidas', logo: 'https://picsum.photos/seed/adidas/100/100', description: 'Iconic sportswear and lifestyle brand' },
  { id: 'br-6', name: 'H&M', slug: 'hm', logo: 'https://picsum.photos/seed/hm/100/100', description: 'Fashion for everyone at great prices' },
  { id: 'br-7', name: 'Zara', slug: 'zara', logo: 'https://picsum.photos/seed/zara/100/100', description: 'Trendy fashion for men and women' },
  { id: 'br-8', name: 'Lakme', slug: 'lakme', logo: 'https://picsum.photos/seed/lakme/100/100', description: "India's leading cosmetics brand" },
  { id: 'br-9', name: 'Maybelline', slug: 'maybelline', logo: 'https://picsum.photos/seed/maybelline/100/100', description: 'Global makeup and beauty brand' },
  { id: 'br-10', name: 'HP', slug: 'hp', logo: 'https://picsum.photos/seed/hp/100/100', description: 'Technology solutions for everyone' },
  { id: 'br-11', name: 'Dell', slug: 'dell', logo: 'https://picsum.photos/seed/dell/100/100', description: 'Computing solutions built for you' },
  { id: 'br-12', name: 'Lenovo', slug: 'lenovo', logo: 'https://picsum.photos/seed/lenovo/100/100', description: 'Smarter technology for all' },
  { id: 'br-13', name: 'Boat', slug: 'boat', logo: 'https://picsum.photos/seed/boat/100/100', description: "India's favourite audio brand" },
  { id: 'br-14', name: 'JBL', slug: 'jbl', logo: 'https://picsum.photos/seed/jbl/100/100', description: 'Premium sound experience' },
  { id: 'br-15', name: 'Realme', slug: 'realme', logo: 'https://picsum.photos/seed/realme/100/100', description: 'Dare to leap with realme' },
  { id: 'br-16', name: 'Xiaomi', slug: 'xiaomi', logo: 'https://picsum.photos/seed/xiaomi/100/100', description: 'Innovation for everyone' },
  { id: 'br-17', name: 'OnePlus', slug: 'oneplus', logo: 'https://picsum.photos/seed/oneplus/100/100', description: 'Never Settle' },
  { id: 'br-18', name: 'Puma', slug: 'puma', logo: 'https://picsum.photos/seed/puma/100/100', description: 'Forever Faster' },
  { id: 'br-19', name: "Levi's", slug: 'levis', logo: 'https://picsum.photos/seed/levis/100/100', description: 'Original jeans since 1853' },
  { id: 'br-20', name: 'Wrangler', slug: 'wrangler', logo: 'https://picsum.photos/seed/wrangler/100/100', description: 'Western style and durability' },
  { id: 'br-21', name: 'Fossil', slug: 'fossil', logo: 'https://picsum.photos/seed/fossil/100/100', description: 'Classic American accessories' },
  { id: 'br-22', name: 'Titan', slug: 'titan', logo: 'https://picsum.photos/seed/titan/100/100', description: "India's watch and jewellery brand" },
  { id: 'br-23', name: 'Prestige', slug: 'prestige', logo: 'https://picsum.photos/seed/prestige/100/100', description: 'Kitchen appliances you can trust' },
  { id: 'br-24', name: 'Bajaj', slug: 'bajaj', logo: 'https://picsum.photos/seed/bajaj/100/100', description: 'Home appliances for modern India' },
  { id: 'br-25', name: 'Royal Enfield', slug: 'royal-enfield', logo: 'https://picsum.photos/seed/royalenfield/100/100', description: 'Pure motorcycling since 1901' },
];

// ==================== SELLERS ====================
export const sellers: Seller[] = [
  { id: 'sel-1', storeName: 'TechWorld India', storeSlug: 'techworld-india', storeLogo: 'https://picsum.photos/seed/techworld/100/100', rating: 4.5, totalProducts: 120, totalSales: 15000, isVerified: true },
  { id: 'sel-2', storeName: 'Fashion Hub', storeSlug: 'fashion-hub', storeLogo: 'https://picsum.photos/seed/fashionhub/100/100', rating: 4.3, totalProducts: 200, totalSales: 22000, isVerified: true },
  { id: 'sel-3', storeName: 'HomeEssentials', storeSlug: 'homeessentials', storeLogo: 'https://picsum.photos/seed/homeess/100/100', rating: 4.6, totalProducts: 85, totalSales: 8000, isVerified: true },
  { id: 'sel-4', storeName: 'Beauty Palace', storeSlug: 'beauty-palace', storeLogo: 'https://picsum.photos/seed/beautypalace/100/100', rating: 4.4, totalProducts: 150, totalSales: 12000, isVerified: true },
  { id: 'sel-5', storeName: 'Sports Zone', storeSlug: 'sports-zone', storeLogo: 'https://picsum.photos/seed/sportszone/100/100', rating: 4.2, totalProducts: 60, totalSales: 5000, isVerified: true },
  { id: 'sel-6', storeName: 'BookWorm Inc', storeSlug: 'bookworm-inc', storeLogo: 'https://picsum.photos/seed/bookworm/100/100', rating: 4.7, totalProducts: 300, totalSales: 18000, isVerified: true },
  { id: 'sel-7', storeName: 'GadgetGuru', storeSlug: 'gadgetguru', storeLogo: 'https://picsum.photos/seed/gadgetguru/100/100', rating: 4.1, totalProducts: 45, totalSales: 3500, isVerified: false },
  { id: 'sel-8', storeName: 'StyleBazaar', storeSlug: 'stylebazaar', storeLogo: 'https://picsum.photos/seed/stylebazaar/100/100', rating: 4.0, totalProducts: 180, totalSales: 9500, isVerified: true },
  { id: 'sel-9', storeName: 'Wellness World', storeSlug: 'wellness-world', storeLogo: 'https://picsum.photos/seed/wellness/100/100', rating: 4.5, totalProducts: 90, totalSales: 6000, isVerified: true },
  { id: 'sel-10', storeName: 'KidsKorner', storeSlug: 'kidskorner', storeLogo: 'https://picsum.photos/seed/kidskorner/100/100', rating: 4.3, totalProducts: 75, totalSales: 4500, isVerified: true },
];

// ==================== BANNERS ====================
// (banners are defined above, near the Banner interface)

// ==================== PRODUCTS ====================
// Fallback (only used if a slug has no real entry) — deterministic picsum images
const productImages = (slug: string) => [
  `https://picsum.photos/seed/${slug}-1/600/600`,
  `https://picsum.photos/seed/${slug}-2/600/600`,
  `https://picsum.photos/seed/${slug}-3/600/600`,
  `https://picsum.photos/seed/${slug}-4/600/600`,
]

// Helper to build a square Unsplash product image URL
const u = (id: string) =>
  `https://images.unsplash.com/photo-${id}?w=600&h=600&fit=crop&auto=format&q=80`

// Real, category-relevant product images from Unsplash — covers every product.
// Grouped by category so each product shows pictures that match what it is.
const realImages: Record<string, string[]> = {
  // ===== MOBILES (cat-2) =====
  'samsung-galaxy-s24-ultra': [u('1610945415295-d9bbf067e59c'), u('1592899677977-9c10ca588bbd'), u('1585060544812-6b45742d762f'), u('1556656793-08538906a9f8')],
  'iphone-15-pro-max': [u('1695048133142-1a20484d2569'), u('1592750475338-74b7b21085ab'), u('1510557880182-3d4d3cba35a5'), u('1601784551446-20c9e07cdbdb')],
  'oneplus-12': [u('1511707171634-5f897ff02aa9'), u('1598327105666-5b89351aff97'), u('1565849904462-0b18522bcb31'), u('1574944985070-8f3ebc6b79d2')],
  'xiaomi-14': [u('1592899677977-9c10ca588bbd'), u('1601784551446-20c9e07cdbdb'), u('1510557880182-3d4d3cba35a5'), u('1556656793-08538906a9f8')],
  'samsung-galaxy-a55': [u('1610945415295-d9bbf067e59c'), u('1601784551446-20c9e07cdbdb'), u('1511707171634-5f897ff02aa9'), u('1598327105666-5b89351aff97')],
  'realme-gt5-pro': [u('1598327105666-5b89351aff97'), u('1574944985070-8f3ebc6b79d2'), u('1511707171634-5f897ff02aa9'), u('1565849904462-0b18522bcb31')],

  // ===== LAPTOPS (cat-3) =====
  'macbook-air-m3': [u('1517336714731-489689fd1ca8'), u('1541807084-5c52b6b3adef'), u('1611186871348-b1ce696e52c9'), u('1496181133206-80ce9b88a853')],
  'hp-pavilion-15': [u('1496181133206-80ce9b88a853'), u('1593642632823-8f785ba67e45'), u('1525547719571-a2d4ac8945e2'), u('1541807084-5c52b6b3adef')],
  'lenovo-ideapad-slim-3': [u('1593642632823-8f785ba67e45'), u('1525547719571-a2d4ac8945e2'), u('1496181133206-80ce9b88a853'), u('1611186871348-b1ce696e52c9')],
  'dell-xps-15': [u('1593642632823-8f785ba67e45'), u('1496181133206-80ce9b88a853'), u('1541807084-5c52b6b3adef'), u('1517336714731-489689fd1ca8')],

  // ===== AUDIO (cat-4) =====
  'sony-wh-1000xm5': [u('1618366712010-f4ae9c647dcb'), u('1505740420928-5e560c06d30e'), u('1583394838336-acd977736f90'), u('1487215078519-e21cc028cb29')],
  'boat-airdopes-141': [u('1590658268037-6bf12165a8df'), u('1606220588913-b3aacb4d2f46'), u('1572569511254-d8f925fe2cbb'), u('1619059891401-ef3f82a7f5df')],
  'jbl-tune-230nc': [u('1606220588913-b3aacb4d2f46'), u('1572569511254-d8f925fe2cbb'), u('1590658268037-6bf12165a8df'), u('1619059891401-ef3f82a7f5df')],
  'tws-earbuds-pro-max': [u('1572569511254-d8f925fe2cbb'), u('1606220588913-b3aacb4d2f46'), u('1590658268037-6bf12165a8df'), u('1619059891401-ef3f82a7f5df')],
  'bluetooth-speaker-portable': [u('1545454675-3531b543be5d'), u('1608043152269-423dbba4e7e1'), u('1589003077984-894e133dabab'), u('1558537348-c0f8e733989d')],
  'jbl-flip-6-speaker': [u('1608043152269-423dbba4e7e1'), u('1545454675-3531b543be5d'), u('1589003077984-894e133dabab'), u('1558537348-c0f8e733989d')],
  'samsung-galaxy-buds2-pro': [u('1590658268037-6bf12165a8df'), u('1619059891401-ef3f82a7f5df'), u('1606220588913-b3aacb4d2f46'), u('1572569511254-d8f925fe2cbb')],

  // ===== FOOTWEAR (cat-8) =====
  'nike-air-max-270': [u('1542291026-7eec264c27ff'), u('1600269452121-4f2416e55c28'), u('1595950653106-6c9ebd614d3a'), u('1552346154-21d32810aba3')],
  'adidas-ultraboost-23': [u('1556048219-bb6978360b84'), u('1608231387042-66d1773070a5'), u('1606107557195-0e29a4b5b4aa'), u('1549298916-b41d501d3772')],

  // ===== MEN'S CLOTHING (cat-6) =====
  'hm-regular-fit-shirt': [u('1602810318383-e386cc2a3ccf'), u('1620799140408-edc6dcb6d633'), u('1576566588028-4147f3842f27'), u('1602810316693-377017b7b69c')],
  'nike-dri-fit-tshirt': [u('1521572163474-6864f9cf17ab'), u('1576566588028-4147f3842f27'), u('1583743814966-8936f5b7be1a'), u('1554568211-3f5b282ac83b')],
  'levis-511-slim-jeans': [u('1542272604-787c3835535d'), u('1473966968600-fa801b869a1a'), u('1604176354204-9268737828e4'), u('1542272667183-5e1cd0b2e1b3')],
  'wrangler-regular-jeans': [u('1473966968600-fa801b869a1a'), u('1542272604-787c3835535d'), u('1604176354204-9268737828e4'), u('1542272667183-5e1cd0b2e1b3')],

  // ===== WOMEN'S CLOTHING (cat-7) =====
  'zara-midi-dress': [u('1595777457583-95e059d581b8'), u('1539109136881-3be0616acf4b'), u('1572804013309-59a88b7e92f1'), u('1566174053879-31528523f8ae')],
  'puma-women-sports-bra': [u('1571019613454-1cb2f99b2d8b'), u('1583454110551-21f2fa2afe61'), u('1534438327276-14e5300c3a48'), u('1518310383802-640c2de311b8')],
  'anarkali-kurta-set': [u('1583394293214-28a5b41ef87d'), u('1610030469983-98e550d6193c'), u('1602874801007-bd458bb1b8b6'), u('1595777457583-95e059d581b8')],
  'silk-saree-collection': [u('1583394293214-28a5b41ef87d'), u('1610030469983-98e550d6193c'), u('1602874801007-bd458bb1b8b6'), u('1566174053879-31528523f8ae')],

  // ===== KITCHEN APPLIANCES (cat-10) =====
  'prestige-induction-cooktop': [u('1556909114-f6e7ad7d3136'), u('1556909212-d5b604d0c90d'), u('1585032226651-759b368d7246'), u('1556910103-1c02745aae4d')],
  'bajaj-steam-iron': [u('1610557892470-55d9e80c0bce'), u('1581299894007-aaa50297cf16'), u('1556909114-f6e7ad7d3136'), u('1585032226651-759b368d7246')],

  // ===== HOME DECOR (cat-11) =====
  'ceramic-vase-set': [u('1578500494198-246f612d3b3d'), u('1602874801007-bd458bb1b8b6'), u('1513519245088-0e12902e5a38'), u('1582461683023-72b78cfa39b1')],

  // ===== MAKEUP (cat-14) =====
  'lakme-skin-dew-serum': [u('1596462502278-27bfdc403348'), u('1522335789203-aabd1fc54bc9'), u('1556228720-195a672e8a03'), u('1571781926291-c477ebfd024b')],
  'maybelline-fit-me-lipstick': [u('1586495777744-4413f21062fa'), u('1599733589046-9e1a0d4d8acb'), u('1522335789203-aabd1fc54bc9'), u('1596462502278-27bfdc403348')],

  // ===== SKINCARE (cat-13) =====
  'minimalist-niacinamide-serum': [u('1556228578-8c89e6adf883'), u('1570194065650-d99fb4bedf0a'), u('1571781926291-c477ebfd024b'), u('1556228720-195a672e8a03')],

  // ===== SPORTS & FITNESS (cat-15) =====
  'yoga-mat-premium': [u('1601925260368-ae2f83cf8b7f'), u('1518611012118-696072aa579a'), u('1591291621164-2c6367723315'), u('1599058917212-d750089bc07e')],
  'adjustable-dumbbell-20kg': [u('1571019613454-1cb2f99b2d8b'), u('1583454110551-21f2fa2afe61'), u('1534438327276-14e5300c3a48'), u('1517836357463-d25dfeac3438')],

  // ===== WATCHES (cat-20) =====
  'titan-karishma-watch': [u('1523275335684-37898b6baf30'), u('1524592094714-0f0654e20314'), u('1547996160-81dfa63595aa'), u('1639037687665-37e1f4a2c70a')],
  'fossil-grant-chronograph': [u('1524592094714-0f0654e20314'), u('1523275335684-37898b6baf30'), u('1547996160-81dfa63595aa'), u('1639037687665-37e1f4a2c70a')],

  // ===== BOOKS (cat-16) =====
  'atomic-habits': [u('1544947950-fa07a98d237f'), u('1543002588-bfa74002ed7e'), u('1481627834876-b7833e8f5570'), u('1512820790803-83ca734da794')],
  'psychology-of-money': [u('1543002588-bfa74002ed7e'), u('1544947950-fa07a98d237f'), u('1481627834876-b7833e8f5570'), u('1512820790803-83ca734da794')],

  // ===== JEWELLERY (cat-19) =====
  'kundan-necklace-set': [u('1599643478518-a784e5dc4c8f'), u('1611652022419-a9419f74343d'), u('1535632066274-595e0c1166fd'), u('1599643477877-530eb83abc8e')],

  // ===== FURNITURE (cat-21) =====
  'ergonomic-office-chair': [u('1580480055273-228ff5388ef8'), u('1592078615290-033ee584e267'), u('1567538096630-e0c55bd6374c'), u('1541558869434-2840d308329a')],

  // ===== ELECTRONICS (cat-1) =====
  'samsung-galaxy-tab-s9-fe': [u('1544244015-0df4b3ffc6b0'), u('1561154464-82e9adf32764'), u('1623126908029-58cb08a2b272'), u('1561070791-2526d30994b5')],
  'ps5-slim': [u('1607853202273-797f1c22a38e'), u('1605901309584-818e25960a8f'), u('1486401899868-0e435ed85128'), u('1607853202273-797f1c22a38e')],
  'smart-watch-ultra-fitness': [u('1523275335684-37898b6baf30'), u('1546868871-7041f2a55e12'), u('1434494878577-86c23bcb06b9'), u('1579586337278-3befd40fd17a')],
  '4k-action-camera': [u('1502920917128-1aa500764cbd'), u('1526406915894-7bcd65f60845'), u('1452780212940-6f5c0d14d848'), u('1500627964684-141351970a7f')],
  'robot-vacuum-cleaner': [u('1581578731548-c64695cc6952'), u('1558317374-067fb5f30001'), u('1567690187548-f07b1b7b343e'), u('1592923619292-9ab8c66e2d12')],
  'ipad-air-m2': [u('1544244015-0df4b3ffc6b0'), u('1561154464-82e9adf32764'), u('1623126908029-58cb08a2b272'), u('1893412081-a7c5c83c6d7a')],
  'samsung-galaxy-watch-6': [u('1546868871-7041f2a55e12'), u('1523275335684-37898b6baf30'), u('1434494878577-86c23bcb06b9'), u('1579586337278-3befd40fd17a')],
  'apple-watch-series-9': [u('1434494878577-86c23bcb06b9'), u('1546868871-7041f2a55e12'), u('1523275335684-37898b6baf30'), u('1579586337278-3befd40fd17a')],
  'dji-mini-4-pro': [u('1473968512647-3e447244af8f'), u('1508614589041-89572088557c'), u('1521405924368-64c5b84bec60'), u('1547036967-23d11aacaee0')],
  'gopro-hero12-black': [u('1526406915894-7bcd65f60845'), u('1502920917128-1aa500764cbd'), u('1452780212940-6f5c0d14d848'), u('1500627964684-141351970a7f')],
  'samsung-t7-ssd-1tb': [u('1597872200969-2b65d56bd16b'), u('1531492746076-161ca9bcad58'), u('1591488320449-011701bb6704'), u('1563083222-90491c4b863c')],
  'logitech-mx-master-3s': [u('1527864550417-7fd91fc51a46'), u('1615663245857-ac93bb7c39e7'), u('1527443224154-c44039d7c18e'), u('1592840496694-26d035b52b48')],
  'razer-blackwidow-v4': [u('1587829741301-dc798b83add3'), u('1601445638532-3c6f6c3aa31d'), u('1595044426077-d36d9236d54a'), u('1587829741301-dc798b83add3')],
  'samsung-65-crystal-4k-tv': [u('1593359677879-a4bb92f829d1'), u('1461151304267-38535e780c79'), u('1497366216548-37526070297c'), u('1574267432553-4b4628081c31')],
  'canon-eos-r50': [u('1502920917128-1aa500764cbd'), u('1516035069371-29a1b244cc32'), u('1606983340126-99ab4feaa64a'), u('1500627964684-141351970a7f')],
  'anker-65w-usbc-charger': [u('1583863788434-e58a36330cf0'), u('1591299894007-aaa50297cf16'), u('1610557892470-55d9e80c0bce'), u('1563083222-90491c4b863c')],
  'fire-tv-stick-4k-max': [u('1461151304267-38535e780c79'), u('1574267432553-4b4628081c31'), u('1593359677879-a4bb92f829d1'), u('1497366216548-37526070297c')],
  'razer-deathadder-v3-pro': [u('1527864550417-7fd91fc51a46'), u('1615663245857-ac93bb7c39e7'), u('1527443224154-c44039d7c18e'), u('1592840496694-26d035b52b48')],

  // ===== TOYS (cat-17) =====
  'lego-creator-expert': [u('1558877385-81a1c7e67d72'), u('1587654780291-39c9404d746b'), u('1558877385-81a1c7e67d72'), u('1587654780291-39c9404d746b')],

  // ===== GROCERIES (cat-18) =====
  'organic-honey-500g': [u('1587049352846-4a222e784d38'), u('1558642452-9d2a7deb7f62'), u('1581760129200-9d77dda0c9b9'), u('1471943311424-646960669fbc')],

  // ===== HEALTH & WELLNESS (cat-23) =====
  'bp-monitor-digital': [u('1631815588090-d4bfec5b1ccb'), u('1576091160550-2173dba999ef'), u('1559757148-61c35c71d9bf'), u('1581595220892-b0739db3ba8c')],

  // ===== BABY CARE (cat-24) =====
  'baby-carrier-ergonomic': [u('1515488042361-ee00e0ddd4e4'), u('1555252333-9f8e92e65df9'), u('1542037104857-ffbb0b9dcc14'), u('1503454537195-1dcabb73ffb9')],

  // ===== AUTOMOTIVE (cat-22) =====
  'car-phone-mount-magnetic': [u('1503376780353-7e6692767b70'), u('1492144534355-73c48af8fbf6'), u('1542362567-b07e54358753'), u('1503376780353-7e6692767b70')],

  // ===== PET SUPPLIES (cat-25) =====
  'premium-dog-food-3kg': [u('1583511655826-05700d52f4d9'), u('1583337130417-3346a1be7dee'), u('1450778869180-41d0601e046e'), u('1591946614720-90a587da4a36')],
}

function getImages(slug: string): string[] {
  return realImages[slug] || productImages(slug)
};

export const products: Product[] = [
  // ===== ELECTRONICS - MOBILES =====
  { id: 'p-1', name: 'Samsung Galaxy S24 Ultra', slug: 'samsung-galaxy-s24-ultra', description: 'Experience the pinnacle of mobile innovation with the Samsung Galaxy S24 Ultra. Featuring a stunning 6.8" Dynamic AMOLED display, powerful Snapdragon 8 Gen 3 processor, 200MP camera system with AI-powered photography, and the iconic built-in S Pen for productivity. Titanium frame for premium durability.', shortDesc: '6.8" AMOLED, 200MP Camera, S Pen, Titanium', categoryId: 'cat-2', brandId: 'br-1', sellerId: 'sel-1', basePrice: 134999, salePrice: 109999, images: getImages('samsung-galaxy-s24-ultra'), colors: ['Titanium Gray', 'Titanium Black', 'Titanium Violet', 'Titanium Yellow'], sizes: [], specifications: { Display: '6.8" Dynamic AMOLED 2X', Processor: 'Snapdragon 8 Gen 3', RAM: '12GB', Storage: '256GB', Camera: '200MP + 12MP + 50MP + 10MP', Battery: '5000mAh', OS: 'Android 14 + One UI 6.1' }, tags: ['premium', '5g', 's-pen', 'ai-camera'], highlights: ['200MP AI Camera', 'Built-in S Pen', 'Titanium Frame', '7 Years Updates', 'Galaxy AI Features'], stock: 45, sku: 'SAM-S24U-256', weight: 232, isFeatured: true, isNewArrival: true, isTrending: true, isBestSeller: true, isActive: true, avgRating: 4.6, totalReviews: 2840, totalSold: 15200, discount: 18, deliveryDays: 2, isFreeDelivery: true, returnPolicy: '7 days', warranty: '1 year manufacturer warranty' },
  { id: 'p-2', name: 'iPhone 15 Pro Max', slug: 'iphone-15-pro-max', description: 'iPhone 15 Pro Max features a strong and light titanium design with the A17 Pro chip, a customizable Action button, and the most powerful iPhone camera system ever. Capture super high-resolution photos with a 48MP Main camera and take cinematic-quality video.', shortDesc: 'A17 Pro, 48MP Camera, Titanium, USB-C', categoryId: 'cat-2', brandId: 'br-2', sellerId: 'sel-1', basePrice: 159900, salePrice: 144900, images: getImages('iphone-15-pro-max'), colors: ['Natural Titanium', 'Blue Titanium', 'White Titanium', 'Black Titanium'], sizes: [], specifications: { Display: '6.7" Super Retina XDR', Processor: 'A17 Pro', RAM: '8GB', Storage: '256GB', Camera: '48MP + 12MP + 12MP', Battery: '4441mAh', OS: 'iOS 17' }, tags: ['premium', '5g', 'prores', 'action-button'], highlights: ['A17 Pro Chip', '48MP Main Camera', 'Titanium Design', 'Action Button', 'USB-C with Thunderbolt'], stock: 30, sku: 'APL-IP15PM-256', weight: 221, isFeatured: true, isNewArrival: false, isTrending: true, isBestSeller: true, isActive: true, avgRating: 4.7, totalReviews: 3210, totalSold: 18500, discount: 9, deliveryDays: 3, isFreeDelivery: true, returnPolicy: '7 days', warranty: '1 year manufacturer warranty' },
  { id: 'p-3', name: 'OnePlus 12', slug: 'oneplus-12', description: 'The OnePlus 12 delivers flagship performance with the Snapdragon 8 Gen 3, Hasselblad camera system with 50MP main sensor, 100W SUPERVOOC fast charging, and a stunning 2K LTPO AMOLED display. Designed for those who demand the best.', shortDesc: 'Snapdragon 8 Gen 3, Hasselblad Camera, 100W Charging', categoryId: 'cat-2', brandId: 'br-17', sellerId: 'sel-7', basePrice: 64999, salePrice: 54999, images: getImages('oneplus-12'), colors: ['Silky Black', 'Flowy Emerald'], sizes: [], specifications: { Display: '6.82" 2K LTPO AMOLED', Processor: 'Snapdragon 8 Gen 3', RAM: '12GB', Storage: '256GB', Camera: '50MP + 48MP + 64MP', Battery: '5400mAh', OS: 'OxygenOS 14' }, tags: ['flagship', '5g', 'fast-charging', 'hasselblad'], highlights: ['100W SUPERVOOC', 'Hasselblad Camera', '2K LTPO Display', '5400mAh Battery', 'Alert Slider'], stock: 60, sku: 'OP-12-256', weight: 220, isFeatured: true, isNewArrival: true, isTrending: true, isBestSeller: false, isActive: true, avgRating: 4.4, totalReviews: 1560, totalSold: 8900, discount: 15, deliveryDays: 3, isFreeDelivery: true, returnPolicy: '7 days', warranty: '1 year manufacturer warranty' },
  { id: 'p-4', name: 'Xiaomi 14', slug: 'xiaomi-14', description: 'Xiaomi 14 brings Leica optics to a compact flagship. Featuring Snapdragon 8 Gen 3, Leica Summilux optical system, 75mm floating telephoto lens, and 120W HyperCharge for a complete flagship experience.', shortDesc: 'Leica Camera, Snapdragon 8 Gen 3, 120W Charging', categoryId: 'cat-2', brandId: 'br-16', sellerId: 'sel-1', basePrice: 49999, salePrice: 42999, images: getImages('xiaomi-14'), colors: ['Black', 'White', 'Green'], sizes: [], specifications: { Display: '6.36" 1.5K LTPO AMOLED', Processor: 'Snapdragon 8 Gen 3', RAM: '12GB', Storage: '256GB', Camera: '50MP Leica + 50MP + 50MP', Battery: '4610mAh', OS: 'HyperOS' }, tags: ['flagship', 'leica', '5g', 'compact'], highlights: ['Leica Summilux Lens', '120W HyperCharge', 'Snapdragon 8 Gen 3', '75mm Telephoto', 'Compact Design'], stock: 80, sku: 'MI-14-256', weight: 193, isFeatured: false, isNewArrival: true, isTrending: true, isBestSeller: false, isActive: true, avgRating: 4.3, totalReviews: 980, totalSold: 6200, discount: 14, deliveryDays: 3, isFreeDelivery: true, returnPolicy: '7 days', warranty: '1 year manufacturer warranty' },
  { id: 'p-5', name: 'Samsung Galaxy A55 5G', slug: 'samsung-galaxy-a55', description: 'Galaxy A55 5G features a stunning Super AMOLED display, powerful Exynos 1480 chipset, versatile triple camera system with 50MP OIS, and long-lasting 5000mAh battery. Premium glass design at an incredible price.', shortDesc: 'Super AMOLED, 50MP OIS Camera, 5000mAh', categoryId: 'cat-2', brandId: 'br-1', sellerId: 'sel-1', basePrice: 29999, salePrice: 24999, images: getImages('samsung-galaxy-a55'), colors: ['Awesome Iceblue', 'Awesome Lilac', 'Awesome Lemon', 'Awesome Navy'], sizes: [], specifications: { Display: '6.6" Super AMOLED', Processor: 'Exynos 1480', RAM: '8GB', Storage: '128GB', Camera: '50MP + 12MP + 5MP', Battery: '5000mAh', OS: 'Android 14 + One UI 6' }, tags: ['midrange', '5g', 'amoled', 'ois'], highlights: ['50MP OIS Camera', 'Super AMOLED Display', '5000mAh Battery', '4 Years OS Updates', 'IP67 Water Resistant'], stock: 150, sku: 'SAM-A55-128', weight: 213, isFeatured: false, isNewArrival: false, isTrending: true, isBestSeller: true, isActive: true, avgRating: 4.2, totalReviews: 3450, totalSold: 22000, discount: 17, deliveryDays: 2, isFreeDelivery: true, returnPolicy: '7 days', warranty: '1 year manufacturer warranty' },
  { id: 'p-6', name: 'Realme GT 5 Pro', slug: 'realme-gt5-pro', description: 'Realme GT 5 Pro delivers ultimate performance with Snapdragon 8 Gen 3, Sony IMX890 flagship camera, 100W SuperVOOC charging, and a stunning 1.5K AMOLED display. The most powerful Realme ever.', shortDesc: 'Snapdragon 8 Gen 3, IMX890, 100W Charging', categoryId: 'cat-2', brandId: 'br-15', sellerId: 'sel-7', basePrice: 39999, salePrice: 33999, images: getImages('realme-gt5-pro'), colors: ['Pioneer Green', 'Pioneer White'], sizes: [], specifications: { Display: '6.78" 1.5K AMOLED', Processor: 'Snapdragon 8 Gen 3', RAM: '8GB', Storage: '128GB', Camera: '50MP + 8MP + 32MP', Battery: '5400mAh', OS: 'Realme UI 5.0' }, tags: ['flagship-killer', '5g', 'performance'], highlights: ['Snapdragon 8 Gen 3', 'Sony IMX890 Camera', '100W SuperVOOC', '1.5K AMOLED', '5400mAh Battery'], stock: 40, sku: 'RM-GT5P-128', weight: 199, isFeatured: false, isNewArrival: true, isTrending: true, isBestSeller: false, isActive: true, avgRating: 4.3, totalReviews: 670, totalSold: 4100, discount: 15, deliveryDays: 3, isFreeDelivery: true, returnPolicy: '7 days', warranty: '1 year manufacturer warranty' },

  // ===== ELECTRONICS - LAPTOPS =====
  { id: 'p-7', name: 'MacBook Air M3', slug: 'macbook-air-m3', description: 'The MacBook Air with M3 chip brings even more capability to the world\'s most popular laptop. With up to 18 hours of battery life, a brilliant 13.6" Liquid Retina display, and a silent, fanless design, it\'s the ultimate everyday laptop.', shortDesc: 'M3 Chip, 18hr Battery, Liquid Retina', categoryId: 'cat-3', brandId: 'br-2', sellerId: 'sel-1', basePrice: 114900, salePrice: 99900, images: getImages('macbook-air-m3'), colors: ['Midnight', 'Starlight', 'Space Gray', 'Silver'], sizes: [], specifications: { Display: '13.6" Liquid Retina', Processor: 'Apple M3', RAM: '8GB', Storage: '256GB SSD', Battery: '18 hours', Weight: '1.24 kg' }, tags: ['ultrabook', 'apple-silicon', 'thin-light'], highlights: ['M3 Chip', '18 Hours Battery', 'Fanless Design', 'Liquid Retina Display', 'MagSafe Charging'], stock: 25, sku: 'APL-MBA-M3-256', weight: 1240, isFeatured: true, isNewArrival: true, isTrending: true, isBestSeller: true, isActive: true, avgRating: 4.8, totalReviews: 1890, totalSold: 12500, discount: 13, deliveryDays: 3, isFreeDelivery: true, returnPolicy: '7 days', warranty: '1 year manufacturer warranty' },
  { id: 'p-8', name: 'HP Pavilion 15', slug: 'hp-pavilion-15', description: 'HP Pavilion 15 combines powerful performance with a sleek design. Intel Core i5 13th Gen processor, 16GB RAM, 512GB SSD, and a vibrant 15.6" FHD IPS display make it perfect for work and entertainment.', shortDesc: 'i5 13th Gen, 16GB RAM, 512GB SSD, FHD IPS', categoryId: 'cat-3', brandId: 'br-10', sellerId: 'sel-1', basePrice: 72999, salePrice: 54990, images: getImages('hp-pavilion-15'), colors: ['Natural Silver', 'Fog Blue'], sizes: [], specifications: { Display: '15.6" FHD IPS', Processor: 'Intel Core i5-1335U', RAM: '16GB DDR4', Storage: '512GB SSD', Graphics: 'Intel Iris Xe', Battery: '8 hours' }, tags: ['laptop', 'intel', 'fhd', 'student'], highlights: ['Intel 13th Gen i5', '16GB RAM', '512GB SSD', 'FHD IPS Display', 'Backlit Keyboard'], stock: 55, sku: 'HP-PAV15-I5', weight: 1750, isFeatured: false, isNewArrival: false, isTrending: true, isBestSeller: true, isActive: true, avgRating: 4.1, totalReviews: 2340, totalSold: 9800, discount: 25, deliveryDays: 4, isFreeDelivery: true, returnPolicy: '7 days', warranty: '1 year manufacturer warranty' },
  { id: 'p-9', name: 'Lenovo IdeaPad Slim 3', slug: 'lenovo-ideapad-slim-3', description: 'Lenovo IdeaPad Slim 3 is the perfect everyday laptop with AMD Ryzen 5 7530U, 8GB RAM, 512GB SSD, and a 15.6" FHD anti-glare display. Lightweight and powerful for productivity on the go.', shortDesc: 'Ryzen 5, 8GB RAM, 512GB SSD, Anti-glare', categoryId: 'cat-3', brandId: 'br-12', sellerId: 'sel-7', basePrice: 55999, salePrice: 39990, images: getImages('lenovo-ideapad-slim-3'), colors: ['Arctic Grey', 'Abyss Blue'], sizes: [], specifications: { Display: '15.6" FHD Anti-glare', Processor: 'AMD Ryzen 5 7530U', RAM: '8GB DDR4', Storage: '512GB SSD', Graphics: 'AMD Radeon', Battery: '7 hours' }, tags: ['budget', 'ryzen', 'thin-light', 'student'], highlights: ['AMD Ryzen 5', '512GB SSD', 'Anti-glare Display', '1.63 kg Light', 'Rapid Charge'], stock: 80, sku: 'LEN-IPS3-R5', weight: 1630, isFeatured: false, isNewArrival: false, isTrending: false, isBestSeller: true, isActive: true, avgRating: 4.0, totalReviews: 3100, totalSold: 15000, discount: 29, deliveryDays: 4, isFreeDelivery: true, returnPolicy: '7 days', warranty: '1 year manufacturer warranty' },
  { id: 'p-10', name: 'Dell XPS 15', slug: 'dell-xps-15', description: 'Dell XPS 15 is a premium creative laptop with Intel Core i7 13700H, 16GB RAM, 512GB SSD, NVIDIA RTX 4050, and a stunning 15.6" OLED 3.5K touch display. Built for creators and professionals.', shortDesc: 'i7 13th Gen, RTX 4050, OLED 3.5K Touch', categoryId: 'cat-3', brandId: 'br-11', sellerId: 'sel-1', basePrice: 149999, salePrice: 129990, images: getImages('dell-xps-15'), colors: ['Platinum Silver', 'Frost White'], sizes: [], specifications: { Display: '15.6" OLED 3.5K Touch', Processor: 'Intel Core i7-13700H', RAM: '16GB DDR5', Storage: '512GB SSD', Graphics: 'NVIDIA RTX 4050', Battery: '10 hours' }, tags: ['premium', 'creator', 'oled', 'rtx'], highlights: ['OLED 3.5K Touch Display', 'RTX 4050 Graphics', 'CNC Aluminum Build', 'Thunderbolt 4', 'Quad Speakers'], stock: 15, sku: 'DEL-XPS15-I7', weight: 1860, isFeatured: true, isNewArrival: false, isTrending: false, isBestSeller: false, isActive: true, avgRating: 4.5, totalReviews: 890, totalSold: 3200, discount: 13, deliveryDays: 5, isFreeDelivery: true, returnPolicy: '7 days', warranty: '1 year premium support' },

  // ===== ELECTRONICS - AUDIO =====
  { id: 'p-11', name: 'Sony WH-1000XM5', slug: 'sony-wh-1000xm5', description: 'Industry-leading noise cancellation with Auto NC Optimizer, crystal clear hands-free calling with 4 beamforming microphones, and up to 30 hours of battery life. The best just got better.', shortDesc: 'Best-in-class ANC, 30hr Battery, LDAC', categoryId: 'cat-4', brandId: 'br-3', sellerId: 'sel-1', basePrice: 34990, salePrice: 24990, images: getImages('sony-wh-1000xm5'), colors: ['Black', 'Silver', 'Midnight Blue'], sizes: [], specifications: { Type: 'Over-ear Wireless', Driver: '30mm', ANC: 'Auto NC Optimizer', Battery: '30 hours', Codec: 'LDAC, AAC, SBC', Weight: '250g' }, tags: ['anc', 'wireless', 'audiophile', 'premium'], highlights: ['Industry-leading ANC', '30 Hour Battery', 'LDAC Hi-Res Audio', 'Multipoint Connection', 'Speak-to-Chat'], stock: 70, sku: 'SNY-WH1KM5', weight: 250, isFeatured: true, isNewArrival: false, isTrending: true, isBestSeller: true, isActive: true, avgRating: 4.6, totalReviews: 4560, totalSold: 25000, discount: 29, deliveryDays: 2, isFreeDelivery: true, returnPolicy: '7 days', warranty: '1 year manufacturer warranty' },
  { id: 'p-12', name: 'Boat Airdopes 141', slug: 'boat-airdopes-141', description: "India's favourite TWS earbuds with 42 hours total playtime, ENx noise cancellation, low latency mode for gaming, and IPX5 water resistance. Affordable premium sound.", shortDesc: '42hr Playtime, ENx ANC, Low Latency, IPX5', categoryId: 'cat-4', brandId: 'br-13', sellerId: 'sel-7', basePrice: 2990, salePrice: 999, images: getImages('boat-airdopes-141'), colors: ['Active Black', 'Cider Cyan', 'Cherry Blossom'], sizes: [], specifications: { Type: 'TWS', Driver: '8mm', ANC: 'ENx Noise Cancellation', Battery: '42 hours total', Connectivity: 'Bluetooth 5.1', Water: 'IPX5' }, tags: ['budget', 'tws', 'gaming', 'waterproof'], highlights: ['42 Hours Total Playtime', 'ENx ANC', 'BEAST Mode Low Latency', 'IPX5 Water Resistant', 'Instant Pair'], stock: 500, sku: 'BOAT-AD141', weight: 40, isFeatured: false, isNewArrival: false, isTrending: true, isBestSeller: true, isActive: true, avgRating: 4.0, totalReviews: 12500, totalSold: 150000, discount: 67, deliveryDays: 2, isFreeDelivery: true, returnPolicy: '7 days', warranty: '1 year manufacturer warranty' },
  { id: 'p-13', name: 'JBL Tune 230NC TWS', slug: 'jbl-tune-230nc', description: 'JBL Pure Bass Sound with Active Noise Cancelling in a sleek TWS design. 40 hours total battery, 4 mics for crystal clear calls, and Smart Ambient for awareness. Your everyday companion.', shortDesc: 'JBL Pure Bass, ANC, 40hr Battery', categoryId: 'cat-4', brandId: 'br-14', sellerId: 'sel-1', basePrice: 7999, salePrice: 3999, images: getImages('jbl-tune-230nc'), colors: ['Black', 'White', 'Blue', 'Beige'], sizes: [], specifications: { Type: 'TWS', Driver: '6mm', ANC: 'Active Noise Cancelling', Battery: '40 hours total', Connectivity: 'Bluetooth 5.3', Water: 'IPX4' }, tags: ['midrange', 'tws', 'anc', 'bass'], highlights: ['JBL Pure Bass Sound', 'Active Noise Cancelling', '40 Hours Battery', '4 Mics for Calls', 'Smart Ambient'], stock: 200, sku: 'JBL-T230NC', weight: 50, isFeatured: false, isNewArrival: false, isTrending: true, isBestSeller: true, isActive: true, avgRating: 4.2, totalReviews: 5670, totalSold: 45000, discount: 50, deliveryDays: 2, isFreeDelivery: true, returnPolicy: '7 days', warranty: '1 year manufacturer warranty' },

  // ===== FASHION - MEN'S =====
  { id: 'p-14', name: "Levi's 511 Slim Fit Jeans", slug: 'levis-511-slim-jeans', description: "The Levi's 511 Slim Fit Jean is a modern slim with room to move. Sits below the waist with a slim fit from hip to ankle. Made with premium stretch denim for all-day comfort.", shortDesc: 'Slim Fit, Stretch Denim, Classic 5-Pocket', categoryId: 'cat-6', brandId: 'br-19', sellerId: 'sel-2', basePrice: 3999, salePrice: 1999, images: getImages('levis-511-slim-jeans'), colors: ['Mid Indigo', 'Black', 'Dark Wash'], sizes: ['30', '32', '34', '36', '38'], specifications: { Fit: 'Slim Fit', Rise: 'Mid Rise', Closure: 'Button Fly', Material: '98% Cotton, 2% Elastane', Wash: 'Machine Wash' }, tags: ['jeans', 'slim-fit', 'stretch', 'classic'], highlights: ['Premium Stretch Denim', 'Classic 5-Pocket Styling', 'Mid Rise Slim Fit', 'Levi\'s Signature Stitching', 'Durable Construction'], stock: 200, sku: 'LEV-511-SLIM', weight: 700, isFeatured: false, isNewArrival: false, isTrending: false, isBestSeller: true, isActive: true, avgRating: 4.3, totalReviews: 8900, totalSold: 67000, discount: 50, deliveryDays: 3, isFreeDelivery: true, returnPolicy: '15 days', warranty: 'N/A' },
  { id: 'p-15', name: 'Nike Air Max 270', slug: 'nike-air-max-270', description: 'The Nike Air Max 270 delivers visible cushioning under every step. Updated for modern comfort, it features Nike\'s biggest Max Air unit yet for a soft, bouncy ride that lasts all day.', shortDesc: 'Max Air Cushioning, Breathable Mesh, Iconic', categoryId: 'cat-8', brandId: 'br-4', sellerId: 'sel-5', basePrice: 13995, salePrice: 8995, images: getImages('nike-air-max-270'), colors: ['Black/Anthracite', 'White/Sail', 'University Red'], sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'], specifications: { Type: 'Lifestyle Running', Upper: 'Mesh + Synthetic', Sole: 'Rubber', Cushioning: 'Max Air 270', Closure: 'Lace-up' }, tags: ['sneakers', 'air-max', 'lifestyle', 'cushioning'], highlights: ['270 Max Air Unit', 'Breathable Mesh Upper', 'Foam Midsole', 'Rubber Outsole', 'Iconic Design'], stock: 60, sku: 'NK-AM270', weight: 310, isFeatured: true, isNewArrival: false, isTrending: true, isBestSeller: true, isActive: true, avgRating: 4.5, totalReviews: 6780, totalSold: 34000, discount: 36, deliveryDays: 3, isFreeDelivery: true, returnPolicy: '15 days', warranty: 'N/A' },
  { id: 'p-16', name: 'H&M Regular Fit Cotton Shirt', slug: 'hm-regular-fit-shirt', description: 'A classic regular fit shirt in soft cotton by H&M. Features a button-down collar, single chest pocket, and curved hem. Perfect for both casual and semi-formal occasions.', shortDesc: '100% Cotton, Regular Fit, Button-down', categoryId: 'cat-6', brandId: 'br-6', sellerId: 'sel-2', basePrice: 1999, salePrice: 999, images: getImages('hm-regular-fit-shirt'), colors: ['White', 'Light Blue', 'Navy', 'Olive'], sizes: ['S', 'M', 'L', 'XL', 'XXL'], specifications: { Fit: 'Regular Fit', Material: '100% Cotton', Collar: 'Button-down', Sleeve: 'Full Sleeve', Wash: 'Machine Washable' }, tags: ['shirt', 'formal', 'cotton', 'classic'], highlights: ['100% Premium Cotton', 'Regular Fit', 'Button-down Collar', 'Versatile Style', 'Easy Care'], stock: 300, sku: 'HM-RFS-COT', weight: 200, isFeatured: false, isNewArrival: false, isTrending: false, isBestSeller: true, isActive: true, avgRating: 4.1, totalReviews: 4500, totalSold: 52000, discount: 50, deliveryDays: 3, isFreeDelivery: true, returnPolicy: '15 days', warranty: 'N/A' },
  { id: 'p-17', name: 'Adidas Ultraboost 23', slug: 'adidas-ultraboost-23', description: 'Run with responsive energy return in the Adidas Ultraboost 23. Featuring BOOST midsole cushioning, Primeknit+ upper for adaptive support, and a Continental rubber outsole for extraordinary grip in all conditions.', shortDesc: 'BOOST Midsole, Primeknit+, Continental Grip', categoryId: 'cat-8', brandId: 'br-5', sellerId: 'sel-5', basePrice: 16999, salePrice: 11999, images: getImages('adidas-ultraboost-23'), colors: ['Core Black', 'Cloud White', 'Pulse Lime'], sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'], specifications: { Type: 'Performance Running', Upper: 'Primeknit+', Midsole: 'BOOST', Outsole: 'Continental Rubber', Weight: '310g' }, tags: ['running', 'boost', 'primeknit', 'performance'], highlights: ['BOOST Energy Return', 'Primeknit+ Upper', 'Continental Outsole', 'Linear Energy Push', 'Made with Parley Ocean Plastic'], stock: 35, sku: 'ADI-UB23', weight: 310, isFeatured: true, isNewArrival: true, isTrending: true, isBestSeller: false, isActive: true, avgRating: 4.6, totalReviews: 2340, totalSold: 11000, discount: 29, deliveryDays: 3, isFreeDelivery: true, returnPolicy: '15 days', warranty: 'N/A' },

  // ===== FASHION - WOMEN'S =====
  { id: 'p-18', name: 'Zara Midi Dress', slug: 'zara-midi-dress', description: 'An elegant midi dress from Zara featuring a flattering A-line silhouette, V-neckline, and adjustable waist tie. Crafted from lightweight fabric with a subtle floral print, perfect for any occasion.', shortDesc: 'A-line, V-neck, Floral Print, Midi Length', categoryId: 'cat-7', brandId: 'br-7', sellerId: 'sel-2', basePrice: 3990, salePrice: 2590, images: getImages('zara-midi-dress'), colors: ['Blue Floral', 'Pink Floral', 'Black'], sizes: ['XS', 'S', 'M', 'L', 'XL'], specifications: { Fit: 'A-line', Length: 'Midi', Neckline: 'V-neck', Material: '100% Viscose', Occasion: 'Casual/Party' }, tags: ['dress', 'midi', 'floral', 'elegant'], highlights: ['A-line Silhouette', 'V-neck Design', 'Adjustable Waist Tie', 'Floral Print', 'Versatile Occasion Wear'], stock: 90, sku: 'ZAR-MIDI-FL', weight: 250, isFeatured: true, isNewArrival: true, isTrending: true, isBestSeller: true, isActive: true, avgRating: 4.4, totalReviews: 3200, totalSold: 18000, discount: 35, deliveryDays: 3, isFreeDelivery: true, returnPolicy: '15 days', warranty: 'N/A' },
  { id: 'p-19', name: 'Puma Women Sports Bra', slug: 'puma-women-sports-bra', description: 'High-support sports bra from Puma with dryCELL moisture-wicking technology. Features adjustable straps, removable pads, and a racerback design for maximum comfort during intense workouts.', shortDesc: 'High Support, dryCELL, Racerback Design', categoryId: 'cat-7', brandId: 'br-18', sellerId: 'sel-5', basePrice: 2999, salePrice: 1799, images: getImages('puma-women-sports-bra'), colors: ['Black', 'Power Pink', 'White'], sizes: ['S', 'M', 'L', 'XL'], specifications: { Support: 'High', Technology: 'dryCELL', Closure: 'Hook-and-eye', Pads: 'Removable', Material: '88% Polyester, 12% Elastane' }, tags: ['sports-bra', 'workout', 'dryCELL', 'high-support'], highlights: ['High Impact Support', 'dryCELL Technology', 'Adjustable Straps', 'Removable Pads', 'Racerback Design'], stock: 150, sku: 'PUM-SB-HI', weight: 120, isFeatured: false, isNewArrival: false, isTrending: true, isBestSeller: true, isActive: true, avgRating: 4.3, totalReviews: 5600, totalSold: 38000, discount: 40, deliveryDays: 3, isFreeDelivery: true, returnPolicy: '15 days', warranty: 'N/A' },
  { id: 'p-20', name: 'Anarkali Kurta Set', slug: 'anarkali-kurta-set', description: 'Stunning Anarkali kurta set featuring intricate embroidery on the yoke and sleeves, paired with a matching palazzo and dupatta. Perfect for festive occasions and celebrations.', shortDesc: 'Embroidered, Palazzo & Dupatta, Festive', categoryId: 'cat-7', brandId: 'br-8', sellerId: 'sel-8', basePrice: 4999, salePrice: 2499, images: getImages('anarkali-kurta-set'), colors: ['Maroon', 'Teal', 'Navy', 'Coral'], sizes: ['S', 'M', 'L', 'XL', 'XXL'], specifications: { Type: 'Anarkali Kurta Set', Kurta: 'Cotton Silk', Palazzo: 'Cotton', Dupatta: 'Chiffon', Work: 'Embroidered' }, tags: ['ethnic', 'anarkali', 'festive', 'embroidered'], highlights: ['Intricate Embroidery', '3-Piece Set', 'Cotton Silk Fabric', 'Festive Ready', 'All Sizes Available'], stock: 120, sku: 'ETH-ANK-SET', weight: 600, isFeatured: false, isNewArrival: true, isTrending: true, isBestSeller: true, isActive: true, avgRating: 4.2, totalReviews: 4300, totalSold: 29000, discount: 50, deliveryDays: 4, isFreeDelivery: true, returnPolicy: '15 days', warranty: 'N/A' },

  // ===== HOME & KITCHEN =====
  { id: 'p-21', name: 'Prestige Induction Cooktop', slug: 'prestige-induction-cooktop', description: 'Prestige PIC 16.0+ Induction Cooktop with automatic voltage regulator, anti-magnetic wall, and Indian menu options. Saves energy and cooks faster than traditional gas stoves.', shortDesc: '1900W, Auto Voltage Regulator, Indian Menu', categoryId: 'cat-10', brandId: 'br-23', sellerId: 'sel-3', basePrice: 4999, salePrice: 2499, images: getImages('prestige-induction-cooktop'), colors: ['Black'], sizes: [], specifications: { Wattage: '1900W', Voltage: '230V', Panels: 'Crystal Glass', Controls: 'Touch Button', Presets: 'Indian Menu' }, tags: ['kitchen', 'induction', 'cooking', 'energy-saving'], highlights: ['1900W Power', 'Indian Menu Presets', 'Auto Voltage Regulator', 'Crystal Glass Top', 'Energy Efficient'], stock: 100, sku: 'PRE-PIC16', weight: 2500, isFeatured: false, isNewArrival: false, isTrending: false, isBestSeller: true, isActive: true, avgRating: 4.1, totalReviews: 8900, totalSold: 45000, discount: 50, deliveryDays: 4, isFreeDelivery: true, returnPolicy: '7 days', warranty: '1 year manufacturer warranty' },
  { id: 'p-22', name: 'Bajaj MX2 1600W Steam Iron', slug: 'bajaj-steam-iron', description: 'Bajaj MX2 1600W Steam Iron with non-stick coated soleplate, steam burst function, and spray mist for easy ironing. Lightweight design with 360° swivel cord.', shortDesc: '1600W, Steam Burst, Non-stick Soleplate', categoryId: 'cat-10', brandId: 'br-24', sellerId: 'sel-3', basePrice: 1999, salePrice: 999, images: getImages('bajaj-steam-iron'), colors: ['White/Blue'], sizes: [], specifications: { Wattage: '1600W', Soleplate: 'Non-stick Coated', Steam: 'Burst + Spray', Water: '300ml Tank', Cord: '360° Swivel' }, tags: ['iron', 'steam', 'household', 'budget'], highlights: ['1600W Quick Heat', 'Steam Burst Function', 'Non-stick Soleplate', 'Spray Mist Feature', '360° Swivel Cord'], stock: 250, sku: 'BAJ-MX2', weight: 1100, isFeatured: false, isNewArrival: false, isTrending: false, isBestSeller: true, isActive: true, avgRating: 3.9, totalReviews: 12000, totalSold: 89000, discount: 50, deliveryDays: 4, isFreeDelivery: true, returnPolicy: '7 days', warranty: '2 year manufacturer warranty' },
  { id: 'p-23', name: 'Decorative Ceramic Vase Set', slug: 'ceramic-vase-set', description: 'Set of 3 elegant ceramic vases in minimalist design. Perfect for living room, bedroom, or office decor. Available in matte finish with modern geometric patterns.', shortDesc: 'Set of 3, Matte Finish, Modern Design', categoryId: 'cat-11', brandId: 'br-7', sellerId: 'sel-3', basePrice: 2999, salePrice: 1499, images: getImages('ceramic-vase-set'), colors: ['White', 'Sage Green', 'Terracotta'], sizes: [], specifications: { Material: 'Ceramic', Finish: 'Matte', Pieces: '3 (S, M, L)', Height: '8", 10", 12"', Style: 'Modern Minimalist' }, tags: ['decor', 'vase', 'ceramic', 'modern'], highlights: ['Set of 3 Vases', 'Premium Ceramic', 'Matte Finish', 'Modern Geometric Design', 'Multi-purpose Decor'], stock: 80, sku: 'DEC-VAS-SET3', weight: 1800, isFeatured: false, isNewArrival: true, isTrending: true, isBestSeller: false, isActive: true, avgRating: 4.4, totalReviews: 1200, totalSold: 6700, discount: 50, deliveryDays: 5, isFreeDelivery: true, returnPolicy: '7 days', warranty: 'N/A' },

  // ===== BEAUTY =====
  { id: 'p-24', name: 'Lakme Absolute Skin Dew Serum', slug: 'lakme-skin-dew-serum', description: 'Lakme Absolute Skin Dew Serum Foundation with serum-like texture that blends seamlessly for a dewy, natural finish. Enriched with hyaluronic acid and vitamin E for skincare benefits.', shortDesc: 'Serum Foundation, Hyaluronic Acid, Dewy Finish', categoryId: 'cat-14', brandId: 'br-8', sellerId: 'sel-4', basePrice: 999, salePrice: 699, images: getImages('lakme-skin-dew-serum'), colors: ['Porcelain', 'Ivory', 'Sand', 'Warm Beige', 'Almond', 'Chestnut'], sizes: [], specifications: { Type: 'Serum Foundation', Coverage: 'Medium', Finish: 'Dewy', SPF: 'NA', Volume: '27ml' }, tags: ['foundation', 'serum', 'dewy', 'skincare'], highlights: ['Serum-like Texture', 'Hyaluronic Acid', 'Vitamin E Enriched', 'Natural Dewy Finish', '6 Shades Available'], stock: 300, sku: 'LAK-SDS-27', weight: 50, isFeatured: false, isNewArrival: false, isTrending: true, isBestSeller: true, isActive: true, avgRating: 4.1, totalReviews: 6700, totalSold: 52000, discount: 30, deliveryDays: 3, isFreeDelivery: true, returnPolicy: '7 days', warranty: 'N/A' },
  { id: 'p-25', name: 'Maybelline Fit Me Matte Lipstick', slug: 'maybelline-fit-me-lipstick', description: 'Maybelline Fit Me Matte Lipstick with micro-pearl pigments for vibrant, rich color. Creamy formula glides on smoothly and sets to a long-lasting matte finish without drying.', shortDesc: 'Matte Finish, Long-lasting, Creamy Formula', categoryId: 'cat-14', brandId: 'br-9', sellerId: 'sel-4', basePrice: 499, salePrice: 349, images: getImages('maybelline-fit-me-lipstick'), colors: ['Nude Nuance', 'Berry Futuristic', 'Red Revival', 'Pink Alert', 'Mauve It', 'Coral Craze'], sizes: [], specifications: { Type: 'Matte Lipstick', Finish: 'Matte', Duration: 'Up to 8 hours', Formula: 'Creamy Matte', Weight: '3.9g' }, tags: ['lipstick', 'matte', 'long-lasting', 'budget'], highlights: ['Micro-pearl Pigments', 'Creamy Matte Formula', '8 Hour Wear', 'Non-drying', '10+ Shades'], stock: 500, sku: 'MAY-FM-ML', weight: 30, isFeatured: false, isNewArrival: false, isTrending: true, isBestSeller: true, isActive: true, avgRating: 4.2, totalReviews: 9800, totalSold: 78000, discount: 30, deliveryDays: 2, isFreeDelivery: true, returnPolicy: '7 days', warranty: 'N/A' },
  { id: 'p-26', name: 'Minimalist 10% Niacinamide Face Serum', slug: 'minimalist-niacinamide-serum', description: 'Minimalist 10% Niacinamide Face Serum with 1% Zinc for oil control, pore minimization, and blemish reduction. Clean, transparent formulation backed by science.', shortDesc: '10% Niacinamide, Oil Control, Pore Minimizer', categoryId: 'cat-13', brandId: 'br-9', sellerId: 'sel-9', basePrice: 599, salePrice: 449, images: getImages('minimalist-niacinamide-serum'), colors: [], sizes: ['30ml', '60ml'], specifications: { Key: '10% Niacinamide + 1% Zinc', Type: 'Face Serum', Skin: 'Oily/Acne-prone', pH: '5.5-6.5', Volume: '30ml' }, tags: ['serum', 'niacinamide', 'skincare', 'oil-control'], highlights: ['10% Niacinamide', '1% Zinc PCA', 'Oil Control', 'Reduces Pores', 'Clean Formulation'], stock: 400, sku: 'MIN-NIA-10', weight: 60, isFeatured: false, isNewArrival: true, isTrending: true, isBestSeller: true, isActive: true, avgRating: 4.4, totalReviews: 7800, totalSold: 62000, discount: 25, deliveryDays: 2, isFreeDelivery: true, returnPolicy: '7 days', warranty: 'N/A' },

  // ===== SPORTS & FITNESS =====
  { id: 'p-27', name: 'Yoga Mat Premium 6mm', slug: 'yoga-mat-premium', description: 'Premium 6mm thick yoga mat with anti-slip texture on both sides. Made from eco-friendly TPE material, free from PVC, latex, and harmful chemicals. Includes carrying strap.', shortDesc: '6mm Thick, Anti-slip, Eco-friendly TPE', categoryId: 'cat-15', brandId: 'br-5', sellerId: 'sel-5', basePrice: 1999, salePrice: 999, images: getImages('yoga-mat-premium'), colors: ['Purple', 'Teal', 'Black', 'Pink'], sizes: [], specifications: { Thickness: '6mm', Material: 'TPE (Eco-friendly)', Size: '183cm x 61cm', Weight: '750g', Feature: 'Double-sided Anti-slip' }, tags: ['yoga', 'fitness', 'eco-friendly', 'anti-slip'], highlights: ['6mm Premium Thickness', 'Double Anti-slip Texture', 'Eco-friendly TPE', 'Lightweight & Portable', 'Carrying Strap Included'], stock: 200, sku: 'SPT-YM-6T', weight: 750, isFeatured: false, isNewArrival: false, isTrending: false, isBestSeller: true, isActive: true, avgRating: 4.3, totalReviews: 5400, totalSold: 35000, discount: 50, deliveryDays: 4, isFreeDelivery: true, returnPolicy: '7 days', warranty: 'N/A' },
  { id: 'p-28', name: 'Adjustable Dumbbell Set 20kg', slug: 'adjustable-dumbbell-20kg', description: 'Premium adjustable dumbbell set ranging from 2kg to 20kg per dumbbell. Quick-change weight system with anti-slip rubber grip. Perfect for home workouts.', shortDesc: '2-20kg Range, Quick Adjust, Rubber Grip', categoryId: 'cat-15', brandId: 'br-18', sellerId: 'sel-5', basePrice: 5999, salePrice: 3499, images: getImages('adjustable-dumbbell-20kg'), colors: ['Black/Red'], sizes: [], specifications: { Weight: '2-20kg per dumbbell', Increments: '2kg', Grip: 'Anti-slip Rubber', Material: 'Steel + Rubber Coated', Set: '2 Dumbbells' }, tags: ['dumbbell', 'home-gym', 'adjustable', 'fitness'], highlights: ['2-20kg Adjustable', 'Quick Weight Change', 'Anti-slip Grip', 'Space Saving', 'Rubber Coated'], stock: 40, sku: 'SPT-DB-20K', weight: 40000, isFeatured: false, isNewArrival: false, isTrending: true, isBestSeller: false, isActive: true, avgRating: 4.2, totalReviews: 2100, totalSold: 12000, discount: 42, deliveryDays: 5, isFreeDelivery: true, returnPolicy: '7 days', warranty: '6 month warranty' },

  // ===== WATCHES =====
  { id: 'p-29', name: 'Titan Karishma Analog Watch', slug: 'titan-karishma-watch', description: 'Elegant Titan Karishma analog watch for women with a gold-toned metal strap, mother of pearl dial, and mineral glass. Water resistant up to 30m.', shortDesc: 'Gold Tone, Mother of Pearl Dial, 30m WR', categoryId: 'cat-20', brandId: 'br-22', sellerId: 'sel-8', basePrice: 4995, salePrice: 3495, images: getImages('titan-karishma-watch'), colors: ['Gold', 'Silver', 'Rose Gold'], sizes: [], specifications: { Movement: 'Quartz', Dial: 'Mother of Pearl', Strap: 'Metal', Glass: 'Mineral Crystal', Water: '30m' }, tags: ['watch', 'women', 'analog', 'gold', 'titan'], highlights: ['Mother of Pearl Dial', 'Gold Metal Strap', '30m Water Resistant', 'Elegant Design', 'Mineral Crystal Glass'], stock: 60, sku: 'TIT-KAR-GD', weight: 70, isFeatured: true, isNewArrival: false, isTrending: true, isBestSeller: true, isActive: true, avgRating: 4.5, totalReviews: 3800, totalSold: 22000, discount: 30, deliveryDays: 3, isFreeDelivery: true, returnPolicy: '7 days', warranty: '2 year manufacturer warranty' },
  { id: 'p-30', name: 'Fossil Grant Chronograph', slug: 'fossil-grant-chronograph', description: 'Fossil Grant Chronograph watch for men featuring a classic design with genuine leather strap, chronograph subdials, and Roman numeral indexes. A timeless accessory.', shortDesc: 'Chronograph, Leather Strap, Roman Numerals', categoryId: 'cat-20', brandId: 'br-21', sellerId: 'sel-8', basePrice: 11995, salePrice: 8395, images: getImages('fossil-grant-chronograph'), colors: ['Brown/Gold', 'Black/Silver', 'Blue/Gold'], sizes: [], specifications: { Movement: 'Quartz Chronograph', Dial: '44mm', Strap: 'Genuine Leather', Glass: 'Mineral Crystal', Water: '50m' }, tags: ['watch', 'men', 'chronograph', 'leather', 'fossil'], highlights: ['Chronograph Function', 'Genuine Leather Strap', 'Roman Numeral Indexes', '50m Water Resistant', '44mm Case Size'], stock: 30, sku: 'FOS-GR-CHR', weight: 90, isFeatured: false, isNewArrival: false, isTrending: false, isBestSeller: true, isActive: true, avgRating: 4.4, totalReviews: 2900, totalSold: 15000, discount: 30, deliveryDays: 3, isFreeDelivery: true, returnPolicy: '7 days', warranty: '2 year manufacturer warranty' },

  // ===== BOOKS =====
  { id: 'p-31', name: 'Atomic Habits', slug: 'atomic-habits', description: 'Atomic Habits by James Clear - An Easy & Proven Way to Build Good Habits & Break Bad Ones. No matter your goals, Atomic Habits offers a proven framework for improving every day.', shortDesc: 'James Clear, Self-improvement, Habit Building', categoryId: 'cat-16', brandId: 'br-6', sellerId: 'sel-6', basePrice: 499, salePrice: 299, images: getImages('atomic-habits'), colors: [], sizes: [], specifications: { Author: 'James Clear', Pages: '320', Publisher: 'Avery', Language: 'English', ISBN: '978-0735211292' }, tags: ['book', 'self-help', 'habits', 'bestseller'], highlights: ['#1 NYT Bestseller', '5 Million+ Copies Sold', 'Practical Framework', 'Easy to Read', 'Life-changing Insights'], stock: 500, sku: 'BK-ATMHAB', weight: 350, isFeatured: false, isNewArrival: false, isTrending: true, isBestSeller: true, isActive: true, avgRating: 4.7, totalReviews: 23000, totalSold: 180000, discount: 40, deliveryDays: 2, isFreeDelivery: true, returnPolicy: '7 days', warranty: 'N/A' },
  { id: 'p-32', name: 'The Psychology of Money', slug: 'psychology-of-money', description: 'The Psychology of Money by Morgan Housel - Timeless lessons on wealth, greed, and happiness. Doing well with money isn\'t necessarily about what you know. It\'s about how you behave.', shortDesc: 'Morgan Housel, Finance, Behavioral Economics', categoryId: 'cat-16', brandId: 'br-6', sellerId: 'sel-6', basePrice: 399, salePrice: 249, images: getImages('psychology-of-money'), colors: [], sizes: [], specifications: { Author: 'Morgan Housel', Pages: '256', Publisher: 'Harriman House', Language: 'English', ISBN: '978-0857197689' }, tags: ['book', 'finance', 'money', 'bestseller'], highlights: ['Best Finance Book', '19 Short Stories', 'Behavioral Insights', 'Easy to Read', 'Must Read for Investors'], stock: 400, sku: 'BK-PSYMNY', weight: 280, isFeatured: false, isNewArrival: false, isTrending: true, isBestSeller: true, isActive: true, avgRating: 4.6, totalReviews: 18000, totalSold: 145000, discount: 38, deliveryDays: 2, isFreeDelivery: true, returnPolicy: '7 days', warranty: 'N/A' },

  // ===== JEWELLERY =====
  { id: 'p-33', name: 'Gold Plated Kundan Necklace Set', slug: 'kundan-necklace-set', description: 'Exquisite gold plated Kundan necklace set with matching earrings. Features intricate stone setting and traditional Indian craftsmanship. Perfect for weddings and festive occasions.', shortDesc: 'Gold Plated, Kundan, Earrings Included', categoryId: 'cat-19', brandId: 'br-22', sellerId: 'sel-8', basePrice: 3999, salePrice: 1899, images: getImages('kundan-necklace-set'), colors: ['Gold', 'Rose Gold'], sizes: [], specifications: { Material: 'Copper + Gold Plating', Stones: 'Kundan', Set: 'Necklace + Earrings', Plating: '1 Gram Gold', Occasion: 'Wedding/Festive' }, tags: ['jewellery', 'kundan', 'necklace', 'wedding', 'traditional'], highlights: ['Traditional Kundan Work', 'Gold Plated', 'Matching Earrings', 'Wedding Ready', 'Gift Box Included'], stock: 80, sku: 'JWL-KND-NS', weight: 100, isFeatured: false, isNewArrival: false, isTrending: true, isBestSeller: true, isActive: true, avgRating: 4.2, totalReviews: 3400, totalSold: 19000, discount: 53, deliveryDays: 3, isFreeDelivery: true, returnPolicy: '7 days', warranty: '6 month plating warranty' },

  // ===== FURNITURE =====
  { id: 'p-34', name: 'Ergonomic Office Chair', slug: 'ergonomic-office-chair', description: 'Premium ergonomic office chair with lumbar support, adjustable armrests, breathable mesh back, and 120° recline. Built for 12+ hours of comfortable seating.', shortDesc: 'Lumbar Support, Mesh Back, 120° Recline', categoryId: 'cat-21', brandId: 'br-12', sellerId: 'sel-3', basePrice: 15999, salePrice: 8999, images: getImages('ergonomic-office-chair'), colors: ['Black', 'Grey'], sizes: [], specifications: { Material: 'Mesh + Foam', Recline: '90-120°', Armrest: '3D Adjustable', Base: 'Nylon + Metal', Capacity: '150kg' }, tags: ['chair', 'ergonomic', 'office', 'mesh'], highlights: ['Lumbar Support', 'Breathable Mesh', '3D Armrests', '120° Recline', '150kg Capacity'], stock: 25, sku: 'FRN-ERG-CH', weight: 15000, isFeatured: false, isNewArrival: true, isTrending: true, isBestSeller: false, isActive: true, avgRating: 4.3, totalReviews: 1560, totalSold: 7800, discount: 44, deliveryDays: 7, isFreeDelivery: true, returnPolicy: '15 days', warranty: '3 year warranty' },

  // ===== MORE ELECTRONICS =====
  { id: 'p-35', name: 'Samsung Galaxy Tab S9 FE', slug: 'samsung-galaxy-tab-s9-fe', description: 'Samsung Galaxy Tab S9 FE with 10.9" TFT display, Exynos 1380, S Pen included, IP68 water resistant, and 8000mAh battery. Perfect for entertainment and productivity.', shortDesc: '10.9" Display, S Pen, IP68, 8000mAh', categoryId: 'cat-1', brandId: 'br-1', sellerId: 'sel-1', basePrice: 44999, salePrice: 34999, images: getImages('samsung-galaxy-tab-s9-fe'), colors: ['Gray', 'Silver', 'Mint', 'Lavender'], sizes: ['128GB', '256GB'], specifications: { Display: '10.9" TFT', Processor: 'Exynos 1380', RAM: '6/8GB', Camera: '8MP Rear + 12MP Front', Battery: '8000mAh', S_Pen: 'Included' }, tags: ['tablet', 's-pen', 'ip68', 'samsung'], highlights: ['S Pen Included', 'IP68 Water Resistant', '10.9" Display', '8000mAh Battery', 'One UI 5.1'], stock: 35, sku: 'SAM-TAB9FE', weight: 523, isFeatured: false, isNewArrival: true, isTrending: true, isBestSeller: false, isActive: true, avgRating: 4.3, totalReviews: 890, totalSold: 4500, discount: 22, deliveryDays: 3, isFreeDelivery: true, returnPolicy: '7 days', warranty: '1 year manufacturer warranty' },
  { id: 'p-36', name: 'Sony PlayStation 5 Slim', slug: 'ps5-slim', description: 'The new slim PlayStation 5 with 1TB SSD, DualSense controller, 4K gaming, ray tracing, and ultra-high speed SSD. Experience lightning-fast loading and deeper immersion.', shortDesc: '1TB SSD, DualSense, 4K, Ray Tracing', categoryId: 'cat-1', brandId: 'br-3', sellerId: 'sel-1', basePrice: 49990, salePrice: 44990, images: getImages('ps5-slim'), colors: ['White'], sizes: [], specifications: { Storage: '1TB SSD', GPU: '10.28 TFLOPS', RAM: '16GB GDDR6', Output: '4K 120Hz', Drive: 'Blu-ray' }, tags: ['gaming', 'ps5', 'console', '4k'], highlights: ['1TB SSD Storage', '4K 120fps Gaming', 'Ray Tracing', 'DualSense Controller', 'Ultra-fast Loading'], stock: 20, sku: 'SNY-PS5-SLIM', weight: 3500, isFeatured: true, isNewArrival: true, isTrending: true, isBestSeller: false, isActive: true, avgRating: 4.8, totalReviews: 5600, totalSold: 28000, discount: 10, deliveryDays: 5, isFreeDelivery: true, returnPolicy: '7 days', warranty: '1 year manufacturer warranty' },

  // ===== MORE FASHION =====
  { id: 'p-37', name: 'Nike Dri-FIT T-Shirt', slug: 'nike-dri-fit-tshirt', description: 'Nike Dri-FIT men\'s running t-shirt with moisture-wicking technology, lightweight fabric, and reflective details for visibility. Perfect for training and everyday wear.', shortDesc: 'Dri-FIT, Moisture-wicking, Reflective', categoryId: 'cat-6', brandId: 'br-4', sellerId: 'sel-5', basePrice: 2495, salePrice: 1495, images: getImages('nike-dri-fit-tshirt'), colors: ['Black', 'White', 'Blue Fury', 'Crimson'], sizes: ['S', 'M', 'L', 'XL', 'XXL'], specifications: { Material: '100% Polyester', Technology: 'Dri-FIT', Fit: 'Regular', Neck: 'Crew Neck', Sleeve: 'Short Sleeve' }, tags: ['tshirt', 'dri-fit', 'sports', 'running'], highlights: ['Dri-FIT Technology', 'Moisture-wicking', 'Lightweight', 'Reflective Details', 'Machine Washable'], stock: 250, sku: 'NK-DF-TS', weight: 130, isFeatured: false, isNewArrival: false, isTrending: false, isBestSeller: true, isActive: true, avgRating: 4.2, totalReviews: 6700, totalSold: 42000, discount: 40, deliveryDays: 3, isFreeDelivery: true, returnPolicy: '15 days', warranty: 'N/A' },
  { id: 'p-38', name: 'Wrangler Regular Fit Jeans', slug: 'wrangler-regular-jeans', description: 'Wrangler regular fit jeans with classic 5-pocket styling, durable denim construction, and comfortable fit. A timeless wardrobe essential for every man.', shortDesc: 'Regular Fit, Classic Denim, 5-Pocket', categoryId: 'cat-6', brandId: 'br-20', sellerId: 'sel-2', basePrice: 3499, salePrice: 1749, images: getImages('wrangler-regular-jeans'), colors: ['Dark Blue', 'Black', 'Light Wash'], sizes: ['30', '32', '34', '36', '38'], specifications: { Fit: 'Regular Fit', Rise: 'Mid Rise', Material: '100% Cotton Denim', Closure: 'Zip Fly', Wash: 'Machine Wash' }, tags: ['jeans', 'regular-fit', 'denim', 'classic'], highlights: ['Classic 5-Pocket', 'Durable Denim', 'Comfortable Fit', 'Zip Fly Closure', 'Versatile Style'], stock: 180, sku: 'WRG-RF-JN', weight: 750, isFeatured: false, isNewArrival: false, isTrending: false, isBestSeller: true, isActive: true, avgRating: 4.0, totalReviews: 4500, totalSold: 32000, discount: 50, deliveryDays: 3, isFreeDelivery: true, returnPolicy: '15 days', warranty: 'N/A' },

  // ===== TOYS =====
  { id: 'p-39', name: 'LEGO Creator Expert Set', slug: 'lego-creator-expert', description: 'LEGO Creator Expert building set with 1500+ pieces. Features advanced building techniques, intricate details, and display-worthy design. Perfect for adult builders and collectors.', shortDesc: '1500+ Pieces, Advanced Build, Display Piece', categoryId: 'cat-17', brandId: 'br-3', sellerId: 'sel-10', basePrice: 6999, salePrice: 4999, images: getImages('lego-creator-expert'), colors: ['Multi-color'], sizes: [], specifications: { Pieces: '1500+', Age: '18+', Theme: 'Creator Expert', Type: 'Building Set', Display: 'Yes' }, tags: ['lego', 'building', 'collector', 'adult'], highlights: ['1500+ Pieces', 'Advanced Techniques', 'Display-worthy Design', 'Collector Edition', 'Detailed Instructions'], stock: 30, sku: 'LGO-CRE-EX', weight: 1200, isFeatured: false, isNewArrival: false, isTrending: false, isBestSeller: false, isActive: true, avgRating: 4.8, totalReviews: 1200, totalSold: 5600, discount: 29, deliveryDays: 4, isFreeDelivery: true, returnPolicy: '7 days', warranty: 'N/A' },

  // ===== GROCERY =====
  { id: 'p-40', name: 'Organic Honey 500g', slug: 'organic-honey-500g', description: '100% pure organic honey sourced from the foothills of the Himalayas. Raw, unprocessed, and rich in antioxidants. No additives, no preservatives, just pure nature.', shortDesc: '100% Pure, Himalayan, Raw & Unprocessed', categoryId: 'cat-18', brandId: 'br-24', sellerId: 'sel-9', basePrice: 599, salePrice: 449, images: getImages('organic-honey-500g'), colors: [], sizes: ['250g', '500g', '1kg'], specifications: { Type: 'Raw Organic Honey', Source: 'Himalayan Foothills', Processing: 'Unprocessed', Purity: '100%', Weight: '500g' }, tags: ['honey', 'organic', 'natural', 'health'], highlights: ['100% Pure Organic', 'Himalayan Source', 'Raw & Unprocessed', 'Rich in Antioxidants', 'No Additives'], stock: 300, sku: 'GRC-HNY-500', weight: 500, isFeatured: false, isNewArrival: false, isTrending: false, isBestSeller: true, isActive: true, avgRating: 4.4, totalReviews: 8900, totalSold: 72000, discount: 25, deliveryDays: 3, isFreeDelivery: true, returnPolicy: '7 days', warranty: 'N/A' },

  // ===== HEALTH =====
  { id: 'p-41', name: 'Digital Blood Pressure Monitor', slug: 'bp-monitor-digital', description: 'Accurate upper arm digital blood pressure monitor with large LCD display, irregular heartbeat detection, and 120-reading memory. One-touch operation for easy home monitoring.', shortDesc: 'Upper Arm, Large LCD, 120 Memory', categoryId: 'cat-23', brandId: 'br-23', sellerId: 'sel-9', basePrice: 2999, salePrice: 1599, images: getImages('bp-monitor-digital'), colors: ['White'], sizes: [], specifications: { Type: 'Upper Arm', Display: 'Large LCD', Memory: '120 Readings', Detection: 'Irregular Heartbeat', Power: '4 AA Batteries / USB' }, tags: ['health', 'bp-monitor', 'digital', 'medical'], highlights: ['Clinical Accuracy', 'Irregular Heartbeat Detection', '120 Reading Memory', 'Large LCD Display', 'One-touch Operation'], stock: 100, sku: 'HLT-BPM-DG', weight: 350, isFeatured: false, isNewArrival: false, isTrending: false, isBestSeller: true, isActive: true, avgRating: 4.2, totalReviews: 5600, totalSold: 38000, discount: 47, deliveryDays: 3, isFreeDelivery: true, returnPolicy: '7 days', warranty: '1 year manufacturer warranty' },

  // ===== BABY CARE =====
  { id: 'p-42', name: 'Baby Carrier Ergonomic', slug: 'baby-carrier-ergonomic', description: 'Ergonomic baby carrier with 6 carrying positions, breathable mesh, padded shoulder straps, and hip-healthy design certified by International Hip Dysplasia Institute.', shortDesc: '6 Positions, Breathable, Hip-Healthy', categoryId: 'cat-24', brandId: 'br-4', sellerId: 'sel-10', basePrice: 3999, salePrice: 2499, images: getImages('baby-carrier-ergonomic'), colors: ['Black', 'Grey', 'Navy'], sizes: [], specifications: { Positions: '6 Carrying Positions', Age: '0-36 months', Weight: '3.2-20kg', Material: 'Breathable Mesh', Certification: 'IHDI Certified' }, tags: ['baby', 'carrier', 'ergonomic', 'parenting'], highlights: ['6 Carrying Positions', 'IHDI Certified', 'Breathable Mesh', 'Padded Straps', '0-36 Months'], stock: 60, sku: 'BBY-CRR-ER', weight: 700, isFeatured: false, isNewArrival: true, isTrending: false, isBestSeller: false, isActive: true, avgRating: 4.5, totalReviews: 2300, totalSold: 11000, discount: 38, deliveryDays: 4, isFreeDelivery: true, returnPolicy: '15 days', warranty: '1 year warranty' },

  // ===== AUTOMOTIVE =====
  { id: 'p-43', name: 'Car Phone Mount Magnetic', slug: 'car-phone-mount-magnetic', description: 'Universal magnetic car phone mount with 360° rotation, strong N52 magnets, and one-hand operation. Fits all smartphones and attaches to any air vent.', shortDesc: 'N52 Magnets, 360° Rotation, Air Vent', categoryId: 'cat-22', brandId: 'br-13', sellerId: 'sel-7', basePrice: 999, salePrice: 499, images: getImages('car-phone-mount-magnetic'), colors: ['Black', 'Silver'], sizes: [], specifications: { Type: 'Magnetic Mount', Magnets: 'N52 Neodymium', Rotation: '360°', Mount: 'Air Vent', Compatibility: 'Universal' }, tags: ['car', 'phone-mount', 'magnetic', 'accessories'], highlights: ['N52 Strong Magnets', '360° Rotation', 'One-hand Operation', 'Universal Fit', 'Air Vent Clip'], stock: 400, sku: 'AUT-PHM-MG', weight: 80, isFeatured: false, isNewArrival: false, isTrending: false, isBestSeller: true, isActive: true, avgRating: 4.1, totalReviews: 9800, totalSold: 67000, discount: 50, deliveryDays: 2, isFreeDelivery: true, returnPolicy: '7 days', warranty: '6 month warranty' },

  // ===== PET SUPPLIES =====
  { id: 'p-44', name: 'Premium Dog Food 3kg', slug: 'premium-dog-food-3kg', description: 'Premium grain-free dog food with real chicken as the first ingredient. Rich in protein, vitamins, and minerals for complete nutrition. No artificial colors or preservatives.', shortDesc: 'Grain-free, Real Chicken, Complete Nutrition', categoryId: 'cat-25', brandId: 'br-5', sellerId: 'sel-9', basePrice: 1299, salePrice: 999, images: getImages('premium-dog-food-3kg'), colors: [], sizes: ['1kg', '3kg', '6kg', '12kg'], specifications: { Type: 'Dry Dog Food', Flavor: 'Real Chicken', Size: '3kg', Protein: '26% Minimum', Grain: 'Grain-free' }, tags: ['dog-food', 'pet', 'grain-free', 'premium'], highlights: ['Real Chicken #1', 'Grain-free Formula', 'No Artificial Colors', 'Complete Nutrition', 'All Breed Sizes'], stock: 200, sku: 'PET-DF-CH3', weight: 3000, isFeatured: false, isNewArrival: false, isTrending: false, isBestSeller: true, isActive: true, avgRating: 4.3, totalReviews: 3400, totalSold: 23000, discount: 23, deliveryDays: 3, isFreeDelivery: true, returnPolicy: '7 days', warranty: 'N/A' },

  // ===== MORE TRENDING/FLASH SALE PRODUCTS =====
  { id: 'p-45', name: 'TWS Earbuds Pro Max', slug: 'tws-earbuds-pro-max', description: 'Premium TWS earbuds with hybrid ANC, 50 hours battery, Hi-Res audio, and wireless charging. Flagship sound at an unbeatable price.', shortDesc: 'Hybrid ANC, 50hr Battery, Hi-Res Audio', categoryId: 'cat-4', brandId: 'br-13', sellerId: 'sel-7', basePrice: 4999, salePrice: 1499, images: getImages('tws-earbuds-pro-max'), colors: ['Black', 'White', 'Green'], sizes: [], specifications: { Type: 'TWS', ANC: 'Hybrid Active NC', Battery: '50 hours total', Audio: 'Hi-Res Certified', Charging: 'Wireless + USB-C' }, tags: ['tws', 'anc', 'flash-sale', 'budget-flagship'], highlights: ['Hybrid ANC', '50 Hours Battery', 'Hi-Res Audio', 'Wireless Charging', 'IPX5 Water Resistant'], stock: 15, sku: 'BOAT-TWS-PM', weight: 55, isFeatured: true, isNewArrival: false, isTrending: true, isBestSeller: true, isActive: true, avgRating: 4.1, totalReviews: 7800, totalSold: 56000, discount: 70, deliveryDays: 2, isFreeDelivery: true, returnPolicy: '7 days', warranty: '1 year manufacturer warranty' },
  { id: 'p-46', name: 'Smart Watch Ultra Fitness', slug: 'smart-watch-ultra-fitness', description: 'Advanced fitness smartwatch with AMOLED display, SpO2 monitoring, 100+ sport modes, GPS, and 14-day battery life. Your ultimate health companion.', shortDesc: 'AMOLED, SpO2, GPS, 14-Day Battery', categoryId: 'cat-1', brandId: 'br-16', sellerId: 'sel-7', basePrice: 9999, salePrice: 2999, images: getImages('smart-watch-ultra-fitness'), colors: ['Black', 'Navy', 'Olive'], sizes: [], specifications: { Display: '1.43" AMOLED', Battery: '14 Days', Sensors: 'SpO2, Heart Rate, GPS', Sports: '100+ Modes', Water: '5ATM' }, tags: ['smartwatch', 'fitness', 'amoled', 'flash-sale'], highlights: ['AMOLED Display', 'SpO2 Monitoring', 'Built-in GPS', '14 Day Battery', '100+ Sport Modes'], stock: 8, sku: 'MI-SW-ULT', weight: 50, isFeatured: true, isNewArrival: true, isTrending: true, isBestSeller: true, isActive: true, avgRating: 4.0, totalReviews: 5400, totalSold: 38000, discount: 70, deliveryDays: 2, isFreeDelivery: true, returnPolicy: '7 days', warranty: '1 year manufacturer warranty' },
  { id: 'p-47', name: '4K Action Camera', slug: '4k-action-camera', description: 'Waterproof 4K action camera with EIS stabilization, 170° wide angle, dual screens, and WiFi connectivity. Capture every adventure in stunning detail.', shortDesc: '4K, Waterproof, EIS, Dual Screen', categoryId: 'cat-1', brandId: 'br-3', sellerId: 'sel-1', basePrice: 12999, salePrice: 4999, images: getImages('4k-action-camera'), colors: ['Black'], sizes: [], specifications: { Resolution: '4K 60fps', Waterproof: '40m', Stabilization: 'EIS', Screen: 'Dual (Front + Back)', WiFi: 'Yes' }, tags: ['camera', 'action', '4k', 'waterproof', 'flash-sale'], highlights: ['4K 60fps Recording', '40m Waterproof', 'EIS Stabilization', 'Dual Screen', 'WiFi Connectivity'], stock: 12, sku: 'SNY-ACT-4K', weight: 150, isFeatured: false, isNewArrival: true, isTrending: true, isBestSeller: false, isActive: true, avgRating: 4.2, totalReviews: 1800, totalSold: 9500, discount: 62, deliveryDays: 3, isFreeDelivery: true, returnPolicy: '7 days', warranty: '1 year manufacturer warranty' },
  { id: 'p-48', name: 'Robot Vacuum Cleaner', slug: 'robot-vacuum-cleaner', description: 'Smart robot vacuum with LiDAR navigation, 5000Pa suction, auto-emptying, mopping function, and app control. Let technology clean your home.', shortDesc: 'LiDAR, 5000Pa, Auto-empty, Mopping', categoryId: 'cat-9', brandId: 'br-16', sellerId: 'sel-3', basePrice: 34999, salePrice: 16999, images: getImages('robot-vacuum-cleaner'), colors: ['White', 'Black'], sizes: [], specifications: { Navigation: 'LiDAR', Suction: '5000Pa', Battery: '5200mAh', Runtime: '180 min', Features: 'Vacuum + Mop' }, tags: ['vacuum', 'robot', 'smart-home', 'cleaning'], highlights: ['LiDAR Navigation', '5000Pa Suction', 'Auto-emptying', 'Vacuum + Mop', 'App Control'], stock: 20, sku: 'MI-RVC-LD', weight: 3500, isFeatured: true, isNewArrival: true, isTrending: true, isBestSeller: false, isActive: true, avgRating: 4.4, totalReviews: 1200, totalSold: 5800, discount: 51, deliveryDays: 5, isFreeDelivery: true, returnPolicy: '15 days', warranty: '2 year warranty' },

  // ===== MORE PRODUCTS FOR VARIETY =====
  { id: 'p-49', name: 'Bluetooth Speaker Portable', slug: 'bluetooth-speaker-portable', description: 'Powerful portable Bluetooth speaker with 360° sound, IPX7 waterproof, 24-hour battery, and party lights. Take the party anywhere.', shortDesc: '360° Sound, IPX7, 24hr Battery, Party Lights', categoryId: 'cat-4', brandId: 'br-14', sellerId: 'sel-7', basePrice: 7999, salePrice: 3999, images: getImages('bluetooth-speaker-portable'), colors: ['Black', 'Red', 'Blue', 'Teal'], sizes: [], specifications: { Output: '30W', Battery: '24 hours', Waterproof: 'IPX7', Bluetooth: '5.3', Weight: '680g' }, tags: ['speaker', 'bluetooth', 'portable', 'waterproof'], highlights: ['360° Sound', 'IPX7 Waterproof', '24 Hour Battery', 'Party Lights', 'Bluetooth 5.3'], stock: 100, sku: 'JBL-BT-PT', weight: 680, isFeatured: false, isNewArrival: false, isTrending: true, isBestSeller: true, isActive: true, avgRating: 4.3, totalReviews: 4300, totalSold: 28000, discount: 50, deliveryDays: 2, isFreeDelivery: true, returnPolicy: '7 days', warranty: '1 year manufacturer warranty' },
  { id: 'p-50', name: 'Silk Saree Collection', slug: 'silk-saree-collection', description: 'Handwoven Banarasi silk saree with intricate zari work, rich pallu, and traditional motifs. Comes with matching blouse piece. Perfect for weddings and celebrations.', shortDesc: 'Banarasi Silk, Zari Work, Blouse Piece', categoryId: 'cat-7', brandId: 'br-22', sellerId: 'sel-8', basePrice: 8999, salePrice: 4499, images: getImages('silk-saree-collection'), colors: ['Royal Blue', 'Red', 'Green', 'Purple', 'Gold'], sizes: [], specifications: { Fabric: 'Banarasi Silk', Work: 'Zari Weaving', Length: '5.5 meters', Blouse: '0.8 meters attached', Occasion: 'Wedding/Festive' }, tags: ['saree', 'silk', 'banarasi', 'wedding', 'traditional'], highlights: ['Handwoven Silk', 'Intricate Zari Work', 'Traditional Motifs', 'Blouse Piece Included', 'Wedding Ready'], stock: 40, sku: 'ETH-SLK-SR', weight: 800, isFeatured: true, isNewArrival: false, isTrending: true, isBestSeller: true, isActive: true, avgRating: 4.5, totalReviews: 2600, totalSold: 14000, discount: 50, deliveryDays: 4, isFreeDelivery: true, returnPolicy: '7 days', warranty: 'N/A' },

  // ===== MORE ELECTRONICS - Tablets, Cameras, Accessories =====
  { id: 'p-51', name: 'iPad Air M2', slug: 'ipad-air-m2', description: 'iPad Air with M2 chip delivers next-level performance in a thin and light design. Features a stunning 11" Liquid Retina display, 12MP camera, and all-day battery life.', shortDesc: 'M2 Chip, 11" Liquid Retina, Apple Pencil', categoryId: 'cat-1', brandId: 'br-2', sellerId: 'sel-1', basePrice: 69900, salePrice: 59900, images: getImages('ipad-air-m2'), colors: ['Space Gray', 'Starlight', 'Purple', 'Blue'], sizes: ['128GB', '256GB', '512GB'], specifications: { Display: '11" Liquid Retina', Processor: 'Apple M2', RAM: '8GB', Camera: '12MP', Battery: '10 hours', Apple_Pencil: '2nd Gen Compatible' }, tags: ['tablet', 'ipad', 'apple', 'm2'], highlights: ['M2 Chip', 'Liquid Retina Display', 'Apple Pencil Support', '10hr Battery', '5G Optional'], stock: 35, sku: 'APL-IPA-M2', weight: 462, isFeatured: true, isNewArrival: true, isTrending: true, isBestSeller: false, isActive: true, avgRating: 4.7, totalReviews: 1200, totalSold: 6800, discount: 14, deliveryDays: 3, isFreeDelivery: true, returnPolicy: '7 days', warranty: '1 year manufacturer warranty' },
  { id: 'p-52', name: 'Samsung Galaxy Watch 6', slug: 'samsung-galaxy-watch-6', description: 'Samsung Galaxy Watch 6 with advanced health monitoring, BioActive sensor, sleep coaching, and customizable watch faces. Your health companion on your wrist.', shortDesc: 'BioActive Sensor, Sleep Coaching, BIA', categoryId: 'cat-1', brandId: 'br-1', sellerId: 'sel-1', basePrice: 29999, salePrice: 19999, images: getImages('samsung-galaxy-watch-6'), colors: ['Graphite', 'Gold', 'Silver'], sizes: ['40mm', '44mm'], specifications: { Display: '1.3" / 1.5" Super AMOLED', Sensor: 'BioActive', Battery: '40hr', OS: 'Wear OS 4', Water: '5ATM + IP68' }, tags: ['smartwatch', 'samsung', 'health', 'wear-os'], highlights: ['BioActive Sensor', 'BIA Body Composition', 'Sleep Coaching', 'Wear OS 4', 'Sapphire Crystal'], stock: 60, sku: 'SAM-GW6', weight: 33, isFeatured: false, isNewArrival: true, isTrending: true, isBestSeller: true, isActive: true, avgRating: 4.3, totalReviews: 2800, totalSold: 16000, discount: 33, deliveryDays: 2, isFreeDelivery: true, returnPolicy: '7 days', warranty: '1 year manufacturer warranty' },
  { id: 'p-53', name: 'Apple Watch Series 9', slug: 'apple-watch-series-9', description: 'Apple Watch Series 9 with S9 SiP, double tap gesture, brighter Always-On Retina display, and advanced health features including blood oxygen and ECG.', shortDesc: 'S9 Chip, Double Tap, Brighter Display', categoryId: 'cat-1', brandId: 'br-2', sellerId: 'sel-1', basePrice: 41900, salePrice: 34900, images: getImages('apple-watch-series-9'), colors: ['Midnight', 'Starlight', 'Silver', 'Pink'], sizes: ['41mm', '45mm'], specifications: { Display: 'Always-On Retina', Chip: 'S9 SiP', Battery: '18 hours', Sensors: 'Blood O2, ECG, Temperature', Water: 'WR50' }, tags: ['smartwatch', 'apple', 'health', 'fitness'], highlights: ['S9 Chip', 'Double Tap Gesture', 'Brighter Display', 'Blood Oxygen', 'ECG Monitor'], stock: 40, sku: 'APL-AW9', weight: 39, isFeatured: true, isNewArrival: true, isTrending: true, isBestSeller: true, isActive: true, avgRating: 4.6, totalReviews: 3400, totalSold: 22000, discount: 17, deliveryDays: 2, isFreeDelivery: true, returnPolicy: '7 days', warranty: '1 year manufacturer warranty' },
  { id: 'p-54', name: 'DJI Mini 4 Pro Drone', slug: 'dji-mini-4-pro', description: 'DJI Mini 4 Pro with 4K/60fps HDR video, 48MP photos, omnidirectional obstacle sensing, and 34-min flight time. Under 249g - no registration needed in most countries.', shortDesc: '4K/60fps, 48MP, 34min Flight, <249g', categoryId: 'cat-1', brandId: 'br-3', sellerId: 'sel-1', basePrice: 89999, salePrice: 74999, images: getImages('dji-mini-4-pro'), colors: ['Gray'], sizes: [], specifications: { Video: '4K/60fps HDR', Photo: '48MP', Flight: '34 minutes', Weight: '<249g', Sensing: 'Omnidirectional' }, tags: ['drone', 'camera', '4k', 'aerial'], highlights: ['4K/60fps HDR Video', 'Under 249g', 'Omnidirectional Sensing', '34min Flight Time', 'ActiveTrack 360°'], stock: 20, sku: 'DJI-M4P', weight: 249, isFeatured: true, isNewArrival: true, isTrending: true, isBestSeller: false, isActive: true, avgRating: 4.7, totalReviews: 890, totalSold: 4200, discount: 17, deliveryDays: 5, isFreeDelivery: true, returnPolicy: '7 days', warranty: '1 year manufacturer warranty' },
  { id: 'p-55', name: 'GoPro HERO12 Black', slug: 'gopro-hero12-black', description: 'GoPro HERO12 Black with HyperSmooth 6.0, 5.3K60 video, 27MP photos, and HDR. Waterproof to 33ft and built tough for any adventure.', shortDesc: '5.3K60, HyperSmooth 6.0, Waterproof', categoryId: 'cat-1', brandId: 'br-3', sellerId: 'sel-1', basePrice: 44990, salePrice: 34990, images: getImages('gopro-hero12-black'), colors: ['Black'], sizes: [], specifications: { Video: '5.3K60 + 4K120', Photo: '27MP', Stabilization: 'HyperSmooth 6.0', Waterproof: '33ft/10m', Battery: 'Enhanced' }, tags: ['action-camera', 'gopro', 'waterproof', '4k'], highlights: ['5.3K60 Video', 'HyperSmooth 6.0', 'HDR Video', 'Waterproof 33ft', 'GPS + Voice Control'], stock: 30, sku: 'GPR-H12B', weight: 154, isFeatured: false, isNewArrival: false, isTrending: true, isBestSeller: true, isActive: true, avgRating: 4.4, totalReviews: 2100, totalSold: 11000, discount: 22, deliveryDays: 3, isFreeDelivery: true, returnPolicy: '7 days', warranty: '1 year manufacturer warranty' },
  { id: 'p-56', name: 'Samsung 1TB T7 Portable SSD', slug: 'samsung-t7-ssd-1tb', description: 'Samsung T7 Portable SSD with 1TB capacity, read speeds up to 1050MB/s, USB 3.2 Gen 2, and AES 256-bit encryption. Compact, durable, and blazing fast.', shortDesc: '1TB, 1050MB/s, AES 256-bit, USB-C', categoryId: 'cat-1', brandId: 'br-1', sellerId: 'sel-1', basePrice: 9999, salePrice: 6999, images: getImages('samsung-t7-ssd-1tb'), colors: ['Indigo Blue', 'Titan Gray', 'Metallic Red'], sizes: ['500GB', '1TB', '2TB'], specifications: { Capacity: '1TB', Read: '1050 MB/s', Write: '1000 MB/s', Interface: 'USB 3.2 Gen 2', Encryption: 'AES 256-bit' }, tags: ['ssd', 'portable', 'storage', 'usb-c'], highlights: ['1050MB/s Read Speed', 'AES 256-bit Encryption', 'Compact Design', 'Shock Resistant', 'USB-C & USB-A'], stock: 120, sku: 'SAM-T7-1T', weight: 58, isFeatured: false, isNewArrival: false, isTrending: false, isBestSeller: true, isActive: true, avgRating: 4.6, totalReviews: 6700, totalSold: 42000, discount: 30, deliveryDays: 2, isFreeDelivery: true, returnPolicy: '7 days', warranty: '3 year manufacturer warranty' },
  { id: 'p-57', name: 'Logitech MX Master 3S', slug: 'logitech-mx-master-3s', description: 'Logitech MX Master 3S wireless mouse with 8000 DPI sensor, MagSpeed scroll, quiet clicks, multi-device workflow, and USB-C quick charging. The ultimate productivity mouse.', shortDesc: '8000 DPI, MagSpeed Scroll, Quiet Clicks', categoryId: 'cat-1', brandId: 'br-10', sellerId: 'sel-1', basePrice: 9995, salePrice: 7495, images: getImages('logitech-mx-master-3s'), colors: ['Pale Gray', 'Black', 'Rose'], sizes: [], specifications: { DPI: '8000', Battery: '70 days', Connection: 'Bluetooth + USB', Scrolls: 'MagSpeed Electromagnetic', Buttons: '7' }, tags: ['mouse', 'wireless', 'productivity', 'logitech'], highlights: ['8000 DPI Sensor', 'Quiet Clicks', 'MagSpeed Scroll', '70 Day Battery', 'Multi-Device'], stock: 80, sku: 'LOG-MXM3S', weight: 141, isFeatured: false, isNewArrival: false, isTrending: true, isBestSeller: true, isActive: true, avgRating: 4.7, totalReviews: 4500, totalSold: 28000, discount: 25, deliveryDays: 2, isFreeDelivery: true, returnPolicy: '7 days', warranty: '2 year manufacturer warranty' },
  { id: 'p-58', name: 'Razer BlackWidow V4 Keyboard', slug: 'razer-blackwidow-v4', description: 'Razer BlackWidow V4 mechanical gaming keyboard with Razer Green switches, per-key RGB, magnetic wrist rest, and programmable macros. Dominate every game.', shortDesc: 'Mechanical, Razer Green, RGB, Macro', categoryId: 'cat-1', brandId: 'br-3', sellerId: 'sel-7', basePrice: 16999, salePrice: 11999, images: getImages('razer-blackwidow-v4'), colors: ['Black'], sizes: [], specifications: { Switches: 'Razer Green Mechanical', Layout: 'Full Size', Backlight: 'Per-key RGB', Connection: 'USB-C', Wrist_Rest: 'Magnetic' }, tags: ['keyboard', 'gaming', 'mechanical', 'rgb'], highlights: ['Razer Green Switches', 'Per-key RGB', 'Magnetic Wrist Rest', 'Programmable Macros', 'Command Dial'], stock: 40, sku: 'RZR-BWV4', weight: 1200, isFeatured: false, isNewArrival: false, isTrending: false, isBestSeller: false, isActive: true, avgRating: 4.3, totalReviews: 980, totalSold: 4500, discount: 29, deliveryDays: 3, isFreeDelivery: true, returnPolicy: '7 days', warranty: '2 year manufacturer warranty' },
  { id: 'p-59', name: 'Samsung 65" Crystal 4K UHD TV', slug: 'samsung-65-crystal-4k-tv', description: 'Samsung 65" Crystal 4K UHD Smart TV with Crystal Processor 4K, HDR10+, PurColor, and Smart Hub. Immersive viewing experience with AirPlay and Bixby built in.', shortDesc: '65" 4K UHD, Crystal Processor, HDR10+', categoryId: 'cat-1', brandId: 'br-1', sellerId: 'sel-1', basePrice: 74990, salePrice: 47990, images: getImages('samsung-65-crystal-4k-tv'), colors: [], sizes: ['55"', '65"', '75"'], specifications: { Display: '65" Crystal 4K UHD', Processor: 'Crystal Processor 4K', HDR: 'HDR10+', Refresh: '60Hz', Smart: 'Tizen OS' }, tags: ['tv', '4k', 'samsung', 'smart-tv'], highlights: ['Crystal 4K UHD', 'HDR10+', 'PurColor Technology', 'Smart Hub', 'AirPlay 2'], stock: 25, sku: 'SAM-CUHD-65', weight: 17800, isFeatured: true, isNewArrival: false, isTrending: true, isBestSeller: true, isActive: true, avgRating: 4.3, totalReviews: 5600, totalSold: 32000, discount: 36, deliveryDays: 7, isFreeDelivery: true, returnPolicy: '7 days', warranty: '2 year manufacturer warranty' },
  { id: 'p-60', name: 'Canon EOS R50 Mirrorless Camera', slug: 'canon-eos-r50', description: 'Canon EOS R50 mirrorless camera with 24.2MP APS-C sensor, Dual Pixel CMOS AF II, 4K video, and subject tracking. Perfect for content creators and photography enthusiasts.', shortDesc: '24.2MP, 4K Video, Dual Pixel AF II', categoryId: 'cat-1', brandId: 'br-3', sellerId: 'sel-1', basePrice: 74990, salePrice: 62990, images: getImages('canon-eos-r50'), colors: ['Black', 'White'], sizes: [], specifications: { Sensor: '24.2MP APS-C', AF: 'Dual Pixel CMOS AF II', Video: '4K 30fps', Screen: '3" Vari-angle', Weight: '375g' }, tags: ['camera', 'mirrorless', 'canon', '4k', 'content-creator'], highlights: ['24.2MP APS-C Sensor', 'Dual Pixel AF II', '4K Video', 'Subject Tracking', 'Lightweight 375g'], stock: 15, sku: 'CAN-R50', weight: 375, isFeatured: true, isNewArrival: true, isTrending: true, isBestSeller: false, isActive: true, avgRating: 4.5, totalReviews: 670, totalSold: 3200, discount: 16, deliveryDays: 5, isFreeDelivery: true, returnPolicy: '7 days', warranty: '2 year manufacturer warranty' },
  { id: 'p-61', name: 'Anker 65W USB-C Charger', slug: 'anker-65w-usbc-charger', description: 'Anker 65W GaN II USB-C charger with 3 ports (2 USB-C + 1 USB-A). Charges MacBook Pro, iPhone, and iPad simultaneously. Ultra-compact GaN technology.', shortDesc: '65W, GaN II, 3 Ports, Ultra-Compact', categoryId: 'cat-1', brandId: 'br-13', sellerId: 'sel-7', basePrice: 4999, salePrice: 2999, images: getImages('anker-65w-usbc-charger'), colors: ['Black', 'White'], sizes: [], specifications: { Wattage: '65W', Technology: 'GaN II', Ports: '2×USB-C + 1×USB-A', Protocol: 'PD 3.0, PPS', Size: 'Compact' }, tags: ['charger', 'usb-c', 'gan', 'anker', 'fast-charging'], highlights: ['65W Output', 'GaN II Technology', '3 Ports', 'Foldable Plug', 'Universal Compatibility'], stock: 200, sku: 'ANK-65W-G2', weight: 120, isFeatured: false, isNewArrival: false, isTrending: true, isBestSeller: true, isActive: true, avgRating: 4.5, totalReviews: 8900, totalSold: 56000, discount: 40, deliveryDays: 2, isFreeDelivery: true, returnPolicy: '7 days', warranty: '18 month warranty' },
  { id: 'p-62', name: 'Amazon Fire TV Stick 4K Max', slug: 'fire-tv-stick-4k-max', description: 'Amazon Fire TV Stick 4K Max with Wi-Fi 6E, 4K Ultra HD streaming, Dolby Vision & Atmos, and Alexa Voice Remote. The fastest streaming stick.', shortDesc: '4K, Wi-Fi 6E, Dolby Vision, Alexa', categoryId: 'cat-1', brandId: 'br-2', sellerId: 'sel-1', basePrice: 6999, salePrice: 3999, images: getImages('fire-tv-stick-4k-max'), colors: [], sizes: [], specifications: { Resolution: '4K Ultra HD', WiFi: 'Wi-Fi 6E', Audio: 'Dolby Atmos', HDR: 'Dolby Vision + HDR10+', Remote: 'Alexa Voice' }, tags: ['streaming', 'fire-tv', '4k', 'alexa', 'smart-tv'], highlights: ['Wi-Fi 6E', '4K Ultra HD', 'Dolby Vision & Atmos', 'Alexa Voice Remote', 'Free Live TV'], stock: 300, sku: 'AMZ-FTV4KM', weight: 50, isFeatured: false, isNewArrival: false, isTrending: true, isBestSeller: true, isActive: true, avgRating: 4.3, totalReviews: 12000, totalSold: 89000, discount: 43, deliveryDays: 2, isFreeDelivery: true, returnPolicy: '7 days', warranty: '1 year manufacturer warranty' },
  { id: 'p-63', name: 'JBL Flip 6 Bluetooth Speaker', slug: 'jbl-flip-6-speaker', description: 'JBL Flip 6 portable Bluetooth speaker with Pro Sound, IP67 waterproof & dustproof, 12-hour playtime, and PartyBoost. Take your music anywhere.', shortDesc: 'Pro Sound, IP67, 12hr, PartyBoost', categoryId: 'cat-4', brandId: 'br-14', sellerId: 'sel-1', basePrice: 14999, salePrice: 8999, images: getImages('jbl-flip-6-speaker'), colors: ['Black', 'Blue', 'Red', 'Teal', 'Pink'], sizes: [], specifications: { Output: '30W', Battery: '12 hours', Waterproof: 'IP67', Bluetooth: '5.1', Weight: '550g' }, tags: ['speaker', 'bluetooth', 'portable', 'waterproof', 'party'], highlights: ['JBL Pro Sound', 'IP67 Waterproof', '12hr Playtime', 'PartyBoost', 'USB-C Charging'], stock: 90, sku: 'JBL-FL6', weight: 550, isFeatured: false, isNewArrival: true, isTrending: true, isBestSeller: true, isActive: true, avgRating: 4.5, totalReviews: 3400, totalSold: 19000, discount: 40, deliveryDays: 2, isFreeDelivery: true, returnPolicy: '7 days', warranty: '1 year manufacturer warranty' },
  { id: 'p-64', name: 'Samsung Galaxy Buds2 Pro', slug: 'samsung-galaxy-buds2-pro', description: 'Samsung Galaxy Buds2 Pro with 24-bit Hi-Fi audio, Intelligent ANC, 360 Audio, and IPX7 water resistance. Crystal clear sound in a comfortable design.', shortDesc: '24-bit Hi-Fi, ANC, 360 Audio, IPX7', categoryId: 'cat-4', brandId: 'br-1', sellerId: 'sel-1', basePrice: 17999, salePrice: 9999, images: getImages('samsung-galaxy-buds2-pro'), colors: ['Bora Purple', 'White', 'Graphite'], sizes: [], specifications: { Type: 'TWS', Audio: '24-bit Hi-Fi', ANC: 'Intelligent Active', Battery: '18hr total', Water: 'IPX7' }, tags: ['tws', 'samsung', 'anc', 'hi-fi', 'wireless'], highlights: ['24-bit Hi-Fi Audio', 'Intelligent ANC', '360 Audio', 'IPX7 Water Resistant', 'Seamless Samsung Integration'], stock: 70, sku: 'SAM-GB2P', weight: 55, isFeatured: false, isNewArrival: false, isTrending: true, isBestSeller: true, isActive: true, avgRating: 4.3, totalReviews: 4200, totalSold: 26000, discount: 44, deliveryDays: 2, isFreeDelivery: true, returnPolicy: '7 days', warranty: '1 year manufacturer warranty' },
  { id: 'p-65', name: 'Razer DeathAdder V3 Pro', slug: 'razer-deathadder-v3-pro', description: 'Razer DeathAdder V3 Pro esports gaming mouse with Focus Pro 30K sensor, 63g ultralight design, HyperSpeed wireless, and 90hr battery. Tournament-proven ergonomics.', shortDesc: '30K DPI, 63g, HyperSpeed, 90hr', categoryId: 'cat-1', brandId: 'br-3', sellerId: 'sel-7', basePrice: 9999, salePrice: 6999, images: getImages('razer-deathadder-v3-pro'), colors: ['Black', 'White'], sizes: [], specifications: { DPI: '30,000', Weight: '63g', Battery: '90 hours', Connection: 'HyperSpeed + Bluetooth', Switches: 'Gen-3 Optical' }, tags: ['mouse', 'gaming', 'razer', 'wireless', 'esports'], highlights: ['30K Focus Pro Sensor', '63g Ultralight', '90hr Battery', 'HyperSpeed Wireless', 'Gen-3 Optical Switches'], stock: 50, sku: 'RZR-DA3P', weight: 63, isFeatured: false, isNewArrival: true, isTrending: true, isBestSeller: false, isActive: true, avgRating: 4.6, totalReviews: 1200, totalSold: 6500, discount: 30, deliveryDays: 3, isFreeDelivery: true, returnPolicy: '7 days', warranty: '2 year manufacturer warranty' },
];

// ==================== REVIEWS ====================
export const reviews: Review[] = [
  { id: 'rev-1', productId: 'p-1', userId: 'u-1', userName: 'Rahul Sharma', rating: 5, title: 'Best phone I ever owned!', comment: 'The camera is absolutely stunning. S Pen integration is seamless. Battery easily lasts a full day. Worth every rupee!', isVerified: true, helpful: 234, createdAt: '2024-03-15' },
  { id: 'rev-2', productId: 'p-1', userId: 'u-2', userName: 'Priya Patel', rating: 4, title: 'Great phone, slight heating', comment: 'Overall an excellent phone. The 200MP camera is insane. Only issue is slight heating during heavy gaming. Otherwise perfect.', isVerified: true, helpful: 156, createdAt: '2024-03-20' },
  { id: 'rev-3', productId: 'p-2', userId: 'u-3', userName: 'Amit Kumar', rating: 5, title: 'Apple ecosystem at its best', comment: 'Switched from Android and never looking back. The titanium build feels premium, camera is outstanding, and battery life is surprisingly good.', isVerified: true, helpful: 189, createdAt: '2024-02-28' },
  { id: 'rev-4', productId: 'p-7', userId: 'u-4', userName: 'Sneha Gupta', rating: 5, title: 'Perfect laptop for work', comment: 'M3 chip is blazing fast. 18 hours battery is real! Fanless design means zero noise. Best laptop purchase ever.', isVerified: true, helpful: 312, createdAt: '2024-03-10' },
  { id: 'rev-5', productId: 'p-11', userId: 'u-5', userName: 'Vikram Singh', rating: 5, title: 'Noise cancellation is unreal', comment: 'Used these on a 14-hour flight and they blocked out everything. Sound quality is phenomenal. Comfort for extended wear is great.', isVerified: true, helpful: 278, createdAt: '2024-01-15' },
  { id: 'rev-6', productId: 'p-12', userId: 'u-6', userName: 'Deepa Reddy', rating: 4, title: 'Best budget TWS', comment: 'At ₹999 these are a steal! Sound quality is surprisingly good for the price. Battery lasts long. Only wish ANC was better.', isVerified: true, helpful: 445, createdAt: '2024-03-05' },
  { id: 'rev-7', productId: 'p-14', userId: 'u-7', userName: 'Rohit Verma', rating: 4, title: 'Classic Levi\'s quality', comment: 'Perfect fit, great stretch denim. The slim fit is comfortable and not too tight. Levi\'s never disappoints. Great deal at this price!', isVerified: true, helpful: 167, createdAt: '2024-02-20' },
  { id: 'rev-8', productId: 'p-15', userId: 'u-8', userName: 'Karthik Nair', rating: 5, title: 'Comfortable everyday sneakers', comment: 'The Air Max cushioning is so comfortable. I can wear these all day without any discomfort. Stylish enough for casual wear too.', isVerified: true, helpful: 198, createdAt: '2024-03-01' },
  { id: 'rev-9', productId: 'p-31', userId: 'u-9', userName: 'Anita Desai', rating: 5, title: 'Life changing book!', comment: 'This book completely changed how I approach habits. The practical strategies are easy to implement. Must read for everyone!', isVerified: true, helpful: 567, createdAt: '2024-01-10' },
  { id: 'rev-10', productId: 'p-18', userId: 'u-10', userName: 'Meera Joshi', rating: 4, title: 'Beautiful dress, runs slightly big', comment: 'The dress is gorgeous and the fabric is lovely. However, it runs slightly big. I\'d recommend ordering a size down. Still love it though!', isVerified: true, helpful: 134, createdAt: '2024-03-18' },
  { id: 'rev-11', productId: 'p-46', userId: 'u-11', userName: 'Suresh Babu', rating: 4, title: 'Amazing value for money', comment: 'AMOLED display looks premium. SpO2 and heart rate monitoring are accurate. Battery actually lasts 12-14 days. Best smartwatch under 5K!', isVerified: true, helpful: 356, createdAt: '2024-03-22' },
  { id: 'rev-12', productId: 'p-45', userId: 'u-12', userName: 'Kavita Rao', rating: 4, title: 'Best budget earbuds with ANC', comment: 'The ANC works surprisingly well for this price. Sound is clear with good bass. Battery life is excellent. Highly recommended!', isVerified: true, helpful: 289, createdAt: '2024-03-25' },
];

// ==================== COUPONS ====================
export const coupons: Coupon[] = [
  { id: 'coup-1', code: 'WELCOME100', description: '₹100 off on your first order', type: 'fixed', value: 100, minOrder: 499, maxDiscount: 100, isActive: true },
  { id: 'coup-2', code: 'SAVE20', description: '20% off on orders above ₹999', type: 'percentage', value: 20, minOrder: 999, maxDiscount: 500, isActive: true },
  { id: 'coup-3', code: 'FLASH50', description: '50% off up to ₹1000 on flash sale', type: 'percentage', value: 50, minOrder: 1499, maxDiscount: 1000, isActive: true },
  { id: 'coup-4', code: 'MEGA15', description: '15% off on electronics', type: 'percentage', value: 15, minOrder: 2999, maxDiscount: 3000, isActive: true },
  { id: 'coup-5', code: 'FASHION30', description: '30% off on fashion items', type: 'percentage', value: 30, minOrder: 799, maxDiscount: 1500, isActive: true },
  { id: 'coup-6', code: 'HOME25', description: '25% off on home & kitchen', type: 'percentage', value: 25, minOrder: 1499, maxDiscount: 2000, isActive: true },
  { id: 'coup-7', code: 'FREEDELIVERY', description: 'Free delivery on any order', type: 'fixed', value: 49, minOrder: 299, maxDiscount: 49, isActive: true },
  { id: 'coup-8', code: 'BEAUTY40', description: '40% off on beauty products', type: 'percentage', value: 40, minOrder: 599, maxDiscount: 800, isActive: true },
];

// Helper functions
export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter(p => p.categoryId === categoryId);
}

export function getFeaturedProducts(): Product[] {
  return products.filter(p => p.isFeatured);
}

export function getTrendingProducts(): Product[] {
  return products.filter(p => p.isTrending);
}

export function getNewArrivals(): Product[] {
  return products.filter(p => p.isNewArrival);
}

export function getBestSellers(): Product[] {
  return products.filter(p => p.isBestSeller);
}

export function getFlashSaleProducts(): Product[] {
  return products.filter(p => p.discount >= 50);
}

export function getTopLevelCategories(): Category[] {
  return categories.filter(c => c.parentId === null);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(c => c.slug === slug);
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(price);
}

export function calculateDiscount(basePrice: number, salePrice: number): number {
  return Math.round(((basePrice - salePrice) / basePrice) * 100);
}
