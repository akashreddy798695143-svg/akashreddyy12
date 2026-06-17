'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Star,
  Heart,
  ShoppingCart,
  ZoomIn,
  Share2,
  Truck,
  RotateCcw,
  Shield,
  ChevronRight,
  Check,
  Minus,
  Plus,
  MapPin,
  Copy,
} from 'lucide-react'
import {
  getProductById,
  getProductsByCategory,
  products,
  reviews,
  formatPrice,
  type Product,
  categories,
  brands,
  sellers,
} from '@/lib/mock-data'
import { useNavigationStore } from '@/store/navigation-store'
import { useCartStore } from '@/store/cart-store'
import { useWishlistStore } from '@/store/wishlist-store'
import { useRequireAuth } from '@/hooks/use-require-auth'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Separator } from '@/components/ui/separator'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Input } from '@/components/ui/input'
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel'

// ==================== COLOR HELPER ====================
const colorHexMap: Record<string, string> = {
  'Titanium Gray': '#8C8C8C',
  'Titanium Black': '#2D2D2D',
  'Titanium Violet': '#7B68AE',
  'Titanium Yellow': '#E8C84A',
  'Natural Titanium': '#A0937D',
  'Blue Titanium': '#4A6FA5',
  'White Titanium': '#E8E8E8',
  'Black Titanium': '#1A1A1A',
  'Silky Black': '#1C1C1C',
  'Flowy Emerald': '#2E8B57',
  'Black': '#1A1A1A',
  'White': '#F5F5F5',
  'Green': '#2E8B57',
  'Awesome Iceblue': '#A8D8EA',
  'Awesome Lilac': '#C8A2C8',
  'Awesome Lemon': '#FFF44F',
  'Awesome Navy': '#000080',
  'Pioneer Green': '#3B7A3B',
  'Pioneer White': '#FAFAFA',
  'Midnight': '#1C1C2E',
  'Starlight': '#F5E6CA',
  'Space Gray': '#6E6E73',
  'Silver': '#C0C0C0',
  'Natural Silver': '#C4BAA2',
  'Fog Blue': '#B0C4DE',
  'Arctic Grey': '#D3D3D3',
  'Abyss Blue': '#1B3A5C',
  'Platinum Silver': '#D3D3D3',
  'Frost White': '#FFFAFA',
  'Midnight Blue': '#191970',
  'Active Black': '#1A1A1A',
  'Cider Cyan': '#00CED1',
  'Cherry Blossom': '#FFB7C5',
  'Blue': '#4169E1',
  'Beige': '#F5F5DC',
  'Mid Indigo': '#4B0082',
  'Dark Wash': '#1A237E',
  'Black/Anthracite': '#2F4F4F',
  'White/Sail': '#F5F5DC',
  'University Red': '#CC0000',
  'Light Blue': '#ADD8E6',
  'Navy': '#000080',
  'Olive': '#808000',
  'Core Black': '#1A1A1A',
  'Cloud White': '#FFFAFA',
  'Pulse Lime': '#BFFF00',
  'Blue Floral': '#6495ED',
  'Pink Floral': '#FFB6C1',
  'Power Pink': '#FF69B4',
  'Maroon': '#800000',
  'Teal': '#008080',
  'Coral': '#FF7F50',
  'Graphite': '#383838',
  'Gold': '#FFD700',
  'Rose Gold': '#B76E79',
  'Red': '#FF0000',
  'Purple': '#800080',
  'Pink': '#FFC0CB',
  'Orange': '#FF8C00',
  'Yellow': '#FFD700',
  'Grey': '#808080',
  'Brown': '#8B4513',
  'Cream': '#FFFDD0',
  'Magenta': '#FF00FF',
  'Lavender': '#E6E6FA',
  'Burgundy': '#800020',
  'Charcoal': '#36454F',
  'Copper': '#B87333',
  'Bronze': '#CD7F32',
  'Khaki': '#C3B091',
  'Tan': '#D2B48C',
  'Turquoise': '#40E0D0',
  'Indigo': '#4B0082',
  'Rust': '#B7410E',
  'Sage': '#BCB88A',
  'Mauve': '#E0B0FF',
  'Cyan': '#00FFFF',
  'Sky Blue': '#87CEEB',
  'Steel Blue': '#4682B4',
  'Royal Blue': '#4169E1',
  'Nude': '#E3BC9A',
  'Wine': '#722F37',
  'Olive Green': '#556B2F',
  'Mint': '#3EB489',
  'Peach': '#FFDAB9',
  'Champagne': '#F7E7CE',
  'Espresso': '#3C1414',
  'Midnight Black': '#0D0D0D',
  'Phantom Black': '#0A0A0A',
  'Frosted Silver': '#C0C0C0',
  'Arctic White': '#FAFAFA',
  'Aurora': '#00FF7F',
  'Mystic Silver': '#B8B8B8',
  'Glacier Blue': '#6CB4EE',
}

function getColorHex(colorName: string): string {
  return colorHexMap[colorName] || '#' + colorName.split(' ').map(w => w[0]).join('').slice(0, 3).padEnd(3, '8')
}

// ==================== STAR RATING DISPLAY ====================
function StarRating({ rating, size = 'sm' }: { rating: number; size?: 'sm' | 'md' | 'lg' }) {
  const sizeClass = size === 'lg' ? 'w-5 h-5' : size === 'md' ? 'w-4 h-4' : 'w-3.5 h-3.5'
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`${sizeClass} ${
            i < Math.floor(rating)
              ? 'fill-amber-400 text-amber-400'
              : i < rating
              ? 'fill-amber-400/50 text-amber-400'
              : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  )
}

// ==================== MINI PRODUCT CARD ====================
function MiniProductCard({ product }: { product: Product }) {
  const navigate = useNavigationStore((s) => s.navigate)
  const addItem = useCartStore((s) => s.addItem)

  return (
    <Card
      className="min-w-[180px] max-w-[180px] cursor-pointer hover:shadow-md transition-shadow flex-shrink-0"
      onClick={() => navigate('product-detail', { productId: product.id })}
    >
      <div className="relative aspect-square overflow-hidden rounded-t-lg bg-gray-100">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        {product.discount > 0 && (
          <Badge className="absolute top-1.5 left-1.5 bg-red-500 hover:bg-red-600 text-white text-[10px] px-1 py-0">
            {product.discount}% OFF
          </Badge>
        )}
      </div>
      <CardContent className="p-2.5">
        <p className="text-[10px] text-muted-foreground uppercase tracking-wide truncate">
          {brands.find((b) => b.id === product.brandId)?.name}
        </p>
        <h3 className="font-medium text-xs line-clamp-2 min-h-[2rem] mt-0.5">{product.name}</h3>
        <div className="flex items-center gap-1 mt-1">
          <div className="flex items-center bg-green-600 text-white text-[10px] px-1 py-0.5 rounded">
            {product.avgRating} <Star className="w-2.5 h-2.5 fill-white ml-0.5" />
          </div>
          <span className="text-[10px] text-muted-foreground">
            ({product.totalReviews.toLocaleString()})
          </span>
        </div>
        <div className="flex items-baseline gap-1 mt-1.5">
          <span className="text-sm font-bold">{formatPrice(product.salePrice)}</span>
          {product.basePrice > product.salePrice && (
            <span className="text-[10px] text-muted-foreground line-through">
              {formatPrice(product.basePrice)}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

// ==================== REVIEW CARD ====================
function ReviewCard({ review }: { review: (typeof reviews)[0] }) {
  const [helpfulCount, setHelpfulCount] = useState(review.helpful)
  const [voted, setVoted] = useState(false)

  return (
    <div className="py-4">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold text-primary">
            {review.userName[0]}
          </div>
          <div>
            <p className="text-sm font-medium">{review.userName}</p>
            <div className="flex items-center gap-1.5">
              <StarRating rating={review.rating} size="sm" />
              {review.isVerified && (
                <Badge variant="secondary" className="text-[10px] h-4 px-1">
                  <Check className="w-2.5 h-2.5 mr-0.5" /> Verified
                </Badge>
              )}
            </div>
          </div>
        </div>
        <span className="text-xs text-muted-foreground">{review.createdAt}</span>
      </div>
      <h4 className="font-medium text-sm mt-2">{review.title}</h4>
      <p className="text-sm text-muted-foreground mt-1">{review.comment}</p>
      <button
        className={`mt-2 text-xs flex items-center gap-1 transition-colors ${
          voted ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
        }`}
        onClick={() => {
          if (!voted) {
            setHelpfulCount((prev) => prev + 1)
            setVoted(true)
          }
        }}
      >
        <ThumbUp className="w-3 h-3" /> Helpful ({helpfulCount})
      </button>
    </div>
  )
}

// Thumb up icon since we don't have a dedicated one
function ThumbUp({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M7 10v12" />
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
    </svg>
  )
}

// ==================== MAIN COMPONENT ====================
export default function ProductDetail() {
  const { selectedProductId, navigate } = useNavigationStore()
  const addItem = useCartStore((s) => s.addItem)
  const { addItem: addWishlist, removeItem: removeWishlist, isInWishlist } = useWishlistStore()
  const requireAuth = useRequireAuth()

  const product = useMemo(
    () => (selectedProductId ? getProductById(selectedProductId) : undefined),
    [selectedProductId]
  )

  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedColor, setSelectedColor] = useState(0)
  const [selectedSize, setSelectedSize] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [isZoomed, setIsZoomed] = useState(false)
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 })
  const [fullscreenOpen, setFullscreenOpen] = useState(false)
  const [pincode, setPincode] = useState('')
  const [pincodeChecked, setPincodeChecked] = useState(false)
  const [copied, setCopied] = useState(false)

  const wishlisted = product ? isInWishlist(product.id) : false

  const similarProducts = useMemo(() => {
    if (!product) return []
    return getProductsByCategory(product.categoryId).filter((p) => p.id !== product.id).slice(0, 8)
  }, [product])

  const productReviews = useMemo(() => {
    if (!product) return []
    return reviews.filter((r) => r.productId === product.id)
  }, [product])

  const brand = useMemo(
    () => (product ? brands.find((b) => b.id === product.brandId) : undefined),
    [product]
  )
  const category = useMemo(
    () => (product ? categories.find((c) => c.id === product.categoryId) : undefined),
    [product]
  )
  const parentCategory = useMemo(
    () => (category?.parentId ? categories.find((c) => c.id === category.parentId) : undefined),
    [category]
  )
  const seller = useMemo(
    () => (product ? sellers.find((s) => s.id === product.sellerId) : undefined),
    [product]
  )

  // Estimated delivery date
  const estimatedDelivery = useMemo(() => {
    if (!product) return ''
    const date = new Date()
    date.setDate(date.getDate() + product.deliveryDays)
    return date.toLocaleDateString('en-IN', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    })
  }, [product])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setZoomPosition({ x, y })
  }

  const handleAddToCart = () => {
    if (!product) return
    if (!requireAuth('add items to your cart')) return
    addItem({
      id: `${product.id}-${product.colors[selectedColor]}-${product.sizes[selectedSize]}-${Date.now()}`,
      productId: product.id,
      name: product.name,
      image: product.images[0],
      price: product.basePrice,
      salePrice: product.salePrice,
      quantity,
      color: product.colors[selectedColor],
      size: product.sizes[selectedSize],
      stock: product.stock,
      saveForLater: false,
    })
  }

  const handleBuyNow = () => {
    if (!requireAuth('place an order')) return
    handleAddToCart()
    navigate('cart')
  }

  const handleWishlist = () => {
    if (!product) return
    if (!requireAuth('save items to your wishlist')) return
    if (wishlisted) {
      removeWishlist(product.id)
    } else {
      addWishlist({
        id: product.id,
        productId: product.id,
        name: product.name,
        image: product.images[0],
        price: product.basePrice,
        salePrice: product.salePrice,
        rating: product.avgRating,
        inStock: product.stock > 0,
      })
    }
  }

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: product?.name,
        text: product?.shortDesc,
      })
    } else if (product) {
      await navigator.clipboard.writeText(`${window.location.origin}?product=${product.id}`)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const handlePincodeCheck = () => {
    if (pincode.length === 6) {
      setPincodeChecked(true)
    }
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">😕</div>
          <h2 className="text-xl font-semibold mb-2">Product not found</h2>
          <p className="text-muted-foreground mb-4">
            The product you&apos;re looking for doesn&apos;t exist
          </p>
          <Button onClick={() => navigate('products')}>Browse Products</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-sm text-muted-foreground mb-4 flex-wrap" aria-label="Breadcrumb">
          <button
            className="hover:text-foreground transition-colors"
            onClick={() => navigate('home')}
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" />
          {parentCategory && (
            <>
              <button
                className="hover:text-foreground transition-colors"
                onClick={() => navigate('products', { category: parentCategory.id })}
              >
                {parentCategory.name}
              </button>
              <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" />
            </>
          )}
          {category && (
            <>
              <button
                className="hover:text-foreground transition-colors"
                onClick={() => navigate('products', { category: category.id })}
              >
                {category.name}
              </button>
              <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" />
            </>
          )}
          <span className="text-foreground font-medium truncate max-w-[200px]">{product.name}</span>
        </nav>

        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Left: Image Gallery */}
          <div className="lg:w-[45%] flex-shrink-0">
            <div className="sticky top-4">
              {/* Main Image */}
              <motion.div
                className="relative aspect-square bg-white rounded-xl overflow-hidden border shadow-sm cursor-crosshair"
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsZoomed(true)}
                onMouseLeave={() => setIsZoomed(false)}
                onClick={() => setFullscreenOpen(true)}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={selectedImage}
                    src={product.images[selectedImage]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </AnimatePresence>
                {isZoomed && (
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      backgroundImage: `url(${product.images[selectedImage]})`,
                      backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                      backgroundSize: '250%',
                      backgroundRepeat: 'no-repeat',
                    }}
                  />
                )}
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute top-3 right-3 h-8 w-8 bg-white/90 hover:bg-white shadow-sm"
                  onClick={(e) => {
                    e.stopPropagation()
                    setFullscreenOpen(true)
                  }}
                >
                  <ZoomIn className="h-4 w-4" />
                </Button>
              </motion.div>

              {/* Thumbnail Strip */}
              <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === idx
                        ? 'border-primary ring-2 ring-primary/20'
                        : 'border-transparent hover:border-gray-300'
                    }`}
                    onClick={() => setSelectedImage(idx)}
                  >
                    <img
                      src={img}
                      alt={`${product.name} ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Product Details */}
          <div className="flex-1 min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* Brand */}
              {brand && (
                <button
                  className="text-sm text-primary font-medium hover:underline"
                  onClick={() => navigate('products', { category: product.categoryId })}
                >
                  {brand.name}
                </button>
              )}

              {/* Product Name */}
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mt-1 leading-tight">
                {product.name}
              </h1>

              {/* Short Description */}
              <p className="text-sm text-muted-foreground mt-1">{product.shortDesc}</p>

              {/* Rating */}
              <div className="flex items-center gap-3 mt-3">
                <div className="flex items-center bg-green-600 text-white text-sm px-2 py-0.5 rounded">
                  {product.avgRating} <Star className="w-3.5 h-3.5 fill-white ml-0.5" />
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.totalReviews.toLocaleString()} Ratings & {product.totalReviews.toLocaleString()} Reviews
                </span>
                <button className="text-sm text-primary hover:underline">
                  Write Review
                </button>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 mt-3">
                {product.isBestSeller && (
                  <Badge className="bg-amber-500 hover:bg-amber-600 text-white text-xs">#1 Best Seller</Badge>
                )}
                {product.isNewArrival && (
                  <Badge className="bg-emerald-500 hover:bg-emerald-600 text-white text-xs">New Arrival</Badge>
                )}
                {product.isTrending && (
                  <Badge className="bg-orange-500 hover:bg-orange-600 text-white text-xs">Trending</Badge>
                )}
              </div>

              <Separator className="my-4" />

              {/* Price Section */}
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold">{formatPrice(product.salePrice)}</span>
                {product.basePrice > product.salePrice && (
                  <>
                    <span className="text-lg text-muted-foreground line-through">
                      {formatPrice(product.basePrice)}
                    </span>
                    <Badge variant="destructive" className="text-sm">
                      {product.discount}% off
                    </Badge>
                  </>
                )}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Inclusive of all taxes. EMI starts at {formatPrice(Math.round(product.salePrice / 12))}/month
              </p>

              {/* Offers Section */}
              <Card className="mt-4">
                <CardHeader className="pb-2 pt-3 px-4">
                  <CardTitle className="text-sm font-semibold">Available Offers</CardTitle>
                </CardHeader>
                <CardContent className="px-4 pb-3 space-y-2">
                  <div className="flex items-start gap-2 text-sm">
                    <Badge variant="outline" className="text-[10px] px-1.5 py-0 bg-green-50 text-green-700 border-green-200 whitespace-nowrap flex-shrink-0">
                      BANK
                    </Badge>
                    <span>10% Instant Discount on HDFC Bank Credit Cards, up to {formatPrice(1500)}</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <Badge variant="outline" className="text-[10px] px-1.5 py-0 bg-green-50 text-green-700 border-green-200 whitespace-nowrap flex-shrink-0">
                      COUPON
                    </Badge>
                    <span>Use WELCOME100 for {formatPrice(100)} off on orders above {formatPrice(499)}</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <Badge variant="outline" className="text-[10px] px-1.5 py-0 bg-green-50 text-green-700 border-green-200 whitespace-nowrap flex-shrink-0">
                      NO COST EMI
                    </Badge>
                    <span>No Cost EMI available on select cards for orders above {formatPrice(3000)}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Color Selection */}
              {product.colors.length > 0 && (
                <div className="mt-5">
                  <h3 className="text-sm font-semibold mb-2">
                    Color: <span className="font-normal text-muted-foreground">{product.colors[selectedColor]}</span>
                  </h3>
                  <div className="flex gap-2">
                    {product.colors.map((color, idx) => (
                      <button
                        key={color}
                        title={color}
                        className={`w-9 h-9 rounded-full border-2 transition-all flex items-center justify-center ${
                          selectedColor === idx
                            ? 'border-primary ring-2 ring-primary/30'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                        onClick={() => setSelectedColor(idx)}
                      >
                        <span
                          className="w-6 h-6 rounded-full border border-gray-200"
                          style={{ backgroundColor: getColorHex(color) }}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Size Selection */}
              {product.sizes.length > 0 && (
                <div className="mt-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-semibold">
                      Size: <span className="font-normal text-muted-foreground">{product.sizes[selectedSize]}</span>
                    </h3>
                    <button className="text-xs text-primary hover:underline">Size Chart</button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size, idx) => (
                      <button
                        key={size}
                        className={`min-w-[44px] h-10 px-3 rounded-md border text-sm font-medium transition-colors ${
                          selectedSize === idx
                            ? 'bg-primary text-primary-foreground border-primary'
                            : 'border-gray-300 hover:border-primary hover:text-primary'
                        }`}
                        onClick={() => setSelectedSize(idx)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div className="mt-5">
                <h3 className="text-sm font-semibold mb-2">Quantity</h3>
                <div className="flex items-center gap-0 border rounded-md w-fit">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9 rounded-none"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-3.5 w-3.5" />
                  </Button>
                  <span className="w-10 text-center text-sm font-medium">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9 rounded-none"
                    onClick={() => setQuantity((q) => Math.min(product.stock, q + 1))}
                    disabled={quantity >= product.stock}
                  >
                    <Plus className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>

              {/* Stock Status */}
              <div className="mt-4">
                {product.stock > 10 ? (
                  <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200">
                    <Check className="w-3 h-3 mr-1" /> In Stock
                  </Badge>
                ) : product.stock > 0 ? (
                  <Badge variant="secondary" className="bg-amber-50 text-amber-700 border-amber-200">
                    Only {product.stock} left — order soon!
                  </Badge>
                ) : (
                  <Badge variant="destructive">Out of Stock</Badge>
                )}
              </div>

              {/* Delivery Info */}
              <Card className="mt-4">
                <CardContent className="p-4 space-y-3">
                  {/* Pincode Check */}
                  <div>
                    <h4 className="text-sm font-semibold mb-1.5">Delivery</h4>
                    <div className="flex gap-2">
                      <div className="relative flex-1">
                        <MapPin className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          placeholder="Enter Pincode"
                          value={pincode}
                          onChange={(e) => {
                            setPincode(e.target.value.replace(/\D/g, '').slice(0, 6))
                            setPincodeChecked(false)
                          }}
                          className="pl-9 h-9 text-sm"
                          maxLength={6}
                        />
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-9"
                        onClick={handlePincodeCheck}
                        disabled={pincode.length !== 6}
                      >
                        Check
                      </Button>
                    </div>
                    {pincodeChecked && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-xs text-green-600 mt-1"
                      >
                        <Check className="w-3 h-3 inline mr-1" />
                        Delivery available by <strong>{estimatedDelivery}</strong>
                      </motion.p>
                    )}
                  </div>

                  {/* Delivery Details */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Truck className="w-4 h-4 text-green-600 flex-shrink-0" />
                      {product.isFreeDelivery ? (
                        <span className="font-medium text-green-600">Free Delivery</span>
                      ) : (
                        <span>Standard Delivery: {formatPrice(49)}</span>
                      )}
                      <span className="text-muted-foreground">
                        by {estimatedDelivery}
                      </span>
                    </div>
                    {product.deliveryDays <= 3 && (
                      <div className="flex items-center gap-2 text-sm">
                        <Truck className="w-4 h-4 text-orange-500 flex-shrink-0" />
                        <span>Express Delivery available — get it tomorrow</span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-5">
                <Button
                  size="lg"
                  className="flex-1 h-12 text-base font-semibold"
                  onClick={handleAddToCart}
                  disabled={product.stock === 0}
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>
                <Button
                  size="lg"
                  variant="default"
                  className="flex-1 h-12 text-base font-semibold bg-orange-500 hover:bg-orange-600 text-white"
                  onClick={handleBuyNow}
                  disabled={product.stock === 0}
                >
                  Buy Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 w-12 flex-shrink-0"
                  onClick={handleWishlist}
                >
                  <Heart className={`w-5 h-5 ${wishlisted ? 'fill-red-500 text-red-500' : ''}`} />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 w-12 flex-shrink-0"
                  onClick={handleShare}
                >
                  {copied ? <Check className="w-5 h-5 text-green-500" /> : <Share2 className="w-5 h-5" />}
                </Button>
              </div>

              {/* Highlights */}
              {product.highlights.length > 0 && (
                <div className="mt-5">
                  <h3 className="text-sm font-semibold mb-2">Highlights</h3>
                  <ul className="space-y-1.5">
                    {product.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Seller Info */}
              {seller && (
                <Card className="mt-5">
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-100 overflow-hidden flex-shrink-0">
                      <img
                        src={seller.storeLogo}
                        alt={seller.storeName}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="font-medium text-sm truncate">{seller.storeName}</span>
                        {seller.isVerified && (
                          <Badge variant="secondary" className="text-[10px] h-4 px-1 bg-blue-50 text-blue-600 border-blue-200 flex-shrink-0">
                            <Check className="w-2.5 h-2.5 mr-0.5" /> Verified
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="flex items-center gap-0.5">
                          <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                          {seller.rating}
                        </span>
                        <span>{seller.totalProducts} Products</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Return Policy & Warranty */}
              <div className="flex flex-wrap gap-3 mt-5">
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg border bg-blue-50/50">
                  <RotateCcw className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-semibold">{product.returnPolicy} Return</p>
                    <p className="text-[10px] text-muted-foreground">Easy returns</p>
                  </div>
                </div>
                {product.warranty !== 'N/A' && (
                  <div className="flex items-center gap-2 px-3 py-2 rounded-lg border bg-green-50/50">
                    <Shield className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-semibold">Warranty</p>
                      <p className="text-[10px] text-muted-foreground">{product.warranty}</p>
                    </div>
                  </div>
                )}
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg border bg-purple-50/50">
                  <Truck className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-semibold">{product.isFreeDelivery ? 'Free' : 'Paid'} Delivery</p>
                    <p className="text-[10px] text-muted-foreground">By {estimatedDelivery}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-8">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="w-full sm:w-auto justify-start overflow-x-auto">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specifications">
                Specifications
              </TabsTrigger>
              <TabsTrigger value="reviews">
                Reviews ({productReviews.length})
              </TabsTrigger>
              <TabsTrigger value="faq">FAQs</TabsTrigger>
            </TabsList>

            {/* Description Tab */}
            <TabsContent value="description" className="mt-4">
              <Card>
                <CardContent className="p-4 sm:p-6">
                  <h2 className="text-lg font-semibold mb-3">Product Description</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                    {product.description}
                  </p>
                  {product.highlights.length > 0 && (
                    <div className="mt-6">
                      <h3 className="font-semibold text-sm mb-2">Key Features</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {product.highlights.map((h, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm bg-muted/50 rounded-md px-3 py-2">
                            <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Specifications Tab */}
            <TabsContent value="specifications" className="mt-4">
              <Card>
                <CardContent className="p-4 sm:p-6">
                  <h2 className="text-lg font-semibold mb-3">Technical Specifications</h2>
                  <div className="rounded-lg border overflow-hidden">
                    {Object.entries(product.specifications).map(([key, value], idx) => (
                      <div
                        key={key}
                        className={`flex ${idx % 2 === 0 ? 'bg-muted/30' : 'bg-white'}`}
                      >
                        <div className="w-1/3 sm:w-1/4 px-4 py-3 text-sm font-medium text-muted-foreground border-r">
                          {key}
                        </div>
                        <div className="flex-1 px-4 py-3 text-sm">{value}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                    <span>SKU: {product.sku}</span>
                    <span>Weight: {product.weight >= 1000 ? `${(product.weight / 1000).toFixed(2)} kg` : `${product.weight}g`}</span>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Reviews Tab */}
            <TabsContent value="reviews" className="mt-4">
              <Card>
                <CardContent className="p-4 sm:p-6">
                  {/* Rating Summary */}
                  <div className="flex flex-col sm:flex-row gap-6 mb-6">
                    <div className="text-center sm:text-left">
                      <div className="text-5xl font-bold">{product.avgRating}</div>
                      <StarRating rating={product.avgRating} size="md" />
                      <p className="text-sm text-muted-foreground mt-1">
                        {product.totalReviews.toLocaleString()} reviews
                      </p>
                    </div>
                    <div className="flex-1 space-y-1.5">
                      {[5, 4, 3, 2, 1].map((star) => {
                        const count = productReviews.filter((r) => Math.floor(r.rating) === star).length
                        const percent = productReviews.length > 0 ? (count / productReviews.length) * 100 : 0
                        return (
                          <div key={star} className="flex items-center gap-2">
                            <span className="text-xs w-3 text-right">{star}</span>
                            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                            <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-green-500 rounded-full transition-all"
                                style={{ width: `${percent}%` }}
                              />
                            </div>
                            <span className="text-xs text-muted-foreground w-8">{count}</span>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  <Separator className="mb-4" />

                  {/* Review List */}
                  {productReviews.length > 0 ? (
                    <div className="divide-y">
                      {productReviews.map((review) => (
                        <ReviewCard key={review.id} review={review} />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-muted-foreground">No reviews yet. Be the first to review!</p>
                      <Button variant="outline" className="mt-3">
                        Write a Review
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* FAQs Tab */}
            <TabsContent value="faq" className="mt-4">
              <Card>
                <CardContent className="p-4 sm:p-6">
                  <h2 className="text-lg font-semibold mb-3">Frequently Asked Questions</h2>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="faq-1">
                      <AccordionTrigger>What is the return policy for this product?</AccordionTrigger>
                      <AccordionContent>
                        This product has a {product.returnPolicy} return policy. You can return the product within {product.returnPolicy} of delivery in its original condition for a full refund.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="faq-2">
                      <AccordionTrigger>Does this product come with a warranty?</AccordionTrigger>
                      <AccordionContent>
                        {product.warranty !== 'N/A'
                          ? `Yes, this product comes with ${product.warranty}.`
                          : 'This product does not come with a manufacturer warranty.'}
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="faq-3">
                      <AccordionTrigger>Is delivery free for this product?</AccordionTrigger>
                      <AccordionContent>
                        {product.isFreeDelivery
                          ? 'Yes, this product qualifies for free delivery.'
                          : `Standard delivery charges of ${formatPrice(49)} apply. Free delivery on orders above ${formatPrice(500)}.`}
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="faq-4">
                      <AccordionTrigger>What is the estimated delivery time?</AccordionTrigger>
                      <AccordionContent>
                        Estimated delivery is {product.deliveryDays} business day{product.deliveryDays > 1 ? 's' : ''} from the date of order placement. Delivery times may vary based on your location.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="faq-5">
                      <AccordionTrigger>Can I exchange this product?</AccordionTrigger>
                      <AccordionContent>
                        Yes, you can exchange this product within the return period if you receive a defective or damaged item. Size/color exchanges are also available for eligible products.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="faq-6">
                      <AccordionTrigger>Is EMI available for this product?</AccordionTrigger>
                      <AccordionContent>
                        {product.salePrice >= 3000
                          ? 'Yes, No Cost EMI is available on select credit cards. Standard EMI options are also available for orders above ₹3,000.'
                          : 'EMI options are available for orders above ₹3,000.'}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Similar Products */}
        {similarProducts.length > 0 && (
          <div className="mt-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Similar Products</h2>
              <Button
                variant="ghost"
                size="sm"
                className="text-primary"
                onClick={() => navigate('products', { category: product.categoryId })}
              >
                View All <ChevronRight className="w-4 h-4 ml-0.5" />
              </Button>
            </div>
            <Carousel
              opts={{
                align: 'start',
                slidesToScroll: 1,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {similarProducts.map((p) => (
                  <CarouselItem key={p.id} className="pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                    <MiniProductCard product={p} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-3" />
              <CarouselNext className="-right-3" />
            </Carousel>
          </div>
        )}

        {/* You May Also Like */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">You May Also Like</h2>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin">
            {products
              .filter((p) => p.id !== product.id && p.isFeatured)
              .slice(0, 8)
              .map((p) => (
                <MiniProductCard key={p.id} product={p} />
              ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Image Dialog */}
      <Dialog open={fullscreenOpen} onOpenChange={setFullscreenOpen}>
        <DialogContent className="max-w-4xl w-full p-0 overflow-hidden bg-black border-none">
          <DialogTitle className="sr-only">{product.name} - Full Screen Image</DialogTitle>
          <div className="relative">
            <Carousel opts={{ loop: true }}>
              <CarouselContent>
                {product.images.map((img, idx) => (
                  <CarouselItem key={idx}>
                    <div className="flex items-center justify-center min-h-[60vh] max-h-[80vh]">
                      <img
                        src={img}
                        alt={`${product.name} ${idx + 1}`}
                        className="max-w-full max-h-[80vh] object-contain"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 bg-white/80 hover:bg-white" />
              <CarouselNext className="right-2 bg-white/80 hover:bg-white" />
            </Carousel>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
