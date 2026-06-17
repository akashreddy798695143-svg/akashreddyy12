'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useCartStore } from '@/store/cart-store'
import { useNavigationStore } from '@/store/navigation-store'
import { useRequireAuth } from '@/hooks/use-require-auth'
import { formatPrice, coupons } from '@/lib/mock-data'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Minus,
  Plus,
  Trash2,
  Heart,
  ShoppingBag,
  Tag,
  Truck,
  ShieldCheck,
  ChevronRight,
} from 'lucide-react'

export function CartPage() {
  const {
    items,
    couponCode,
    couponDiscount,
    removeItem,
    updateQuantity,
    toggleSaveForLater,
    applyCoupon,
    removeCoupon,
    getSubtotal,
    getDiscount,
    getTotal,
    getItemCount,
  } = useCartStore()

  const navigate = useNavigationStore((s) => s.navigate)
  const requireAuth = useRequireAuth()

  const [couponInput, setCouponInput] = useState('')
  const [couponError, setCouponError] = useState('')
  const [couponSuccess, setCouponSuccess] = useState('')

  const cartItems = items.filter((i) => !i.saveForLater)
  const savedItems = items.filter((i) => i.saveForLater)
  const subtotal = getSubtotal()
  const discount = getDiscount()
  const shipping = subtotal > 500 ? 0 : 49
  const total = getTotal()
  const totalSavings = cartItems.reduce(
    (sum, i) => sum + (i.price - (i.salePrice || i.price)) * i.quantity,
    0
  )

  const handleApplyCoupon = () => {
    setCouponError('')
    setCouponSuccess('')
    const coupon = coupons.find(
      (c) => c.code.toLowerCase() === couponInput.toLowerCase() && c.isActive
    )
    if (!coupon) {
      setCouponError('Invalid coupon code')
      return
    }
    if (subtotal < coupon.minOrder) {
      setCouponError(
        `Minimum order of ${formatPrice(coupon.minOrder)} required`
      )
      return
    }
    applyCoupon(coupon.code, coupon.value)
    setCouponSuccess(`Coupon applied! ${coupon.description}`)
    setCouponInput('')
  }

  const handleRemoveCoupon = () => {
    removeCoupon()
    setCouponSuccess('')
  }

  // Empty cart state
  if (cartItems.length === 0 && savedItems.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', duration: 0.6 }}
          className="text-center"
        >
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-orange-100 to-amber-100 dark:from-orange-950/40 dark:to-amber-950/40 flex items-center justify-center">
            <ShoppingBag className="w-16 h-16 text-orange-400" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Your cart is empty
          </h2>
          <p className="text-muted-foreground mb-6 max-w-md">
            Looks like you haven&apos;t added anything to your cart yet. Explore
            our amazing products and find something you love!
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white rounded-full px-8"
            onClick={() => navigate('home')}
          >
            Continue Shopping
            <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Page header */}
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
          Shopping Cart
        </h1>
        <p className="text-muted-foreground mt-1">
          {getItemCount()} {getItemCount() === 1 ? 'item' : 'items'} in your
          cart
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {/* Cart items list */}
          {cartItems.length > 0 && (
            <Card className="border-border/50">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-orange-500" />
                  Cart Items ({cartItems.length})
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-0">
                <AnimatePresence mode="popLayout">
                  {cartItems.map((item) => (
                    <CartItemCard
                      key={item.id}
                      item={item}
                      onRemove={removeItem}
                      onUpdateQuantity={updateQuantity}
                      onSaveForLater={toggleSaveForLater}
                    />
                  ))}
                </AnimatePresence>
              </CardContent>
            </Card>
          )}

          {/* Empty cart items but has saved */}
          {cartItems.length === 0 && savedItems.length > 0 && (
            <Card className="border-border/50">
              <CardContent className="py-8 text-center">
                <ShoppingBag className="w-10 h-10 mx-auto text-muted-foreground mb-3" />
                <p className="text-muted-foreground">
                  No items in your active cart.
                </p>
                <Button
                  variant="outline"
                  className="mt-3 rounded-full"
                  onClick={() => navigate('home')}
                >
                  Continue Shopping
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Apply Coupon */}
          <Card className="border-border/50">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-3">
                <Tag className="w-4 h-4 text-orange-500" />
                <span className="font-medium text-sm">Apply Coupon</span>
              </div>
              {couponCode ? (
                <div className="flex items-center justify-between bg-green-50 dark:bg-green-950/30 rounded-lg p-3">
                  <div>
                    <Badge
                      variant="secondary"
                      className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 mb-1"
                    >
                      {couponCode}
                    </Badge>
                    <p className="text-xs text-green-600 dark:text-green-400">
                      {couponSuccess}
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleRemoveCoupon}
                    className="text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30"
                  >
                    Remove
                  </Button>
                </div>
              ) : (
                <div className="flex gap-2">
                  <div className="flex-1">
                    <Input
                      placeholder="Enter coupon code"
                      value={couponInput}
                      onChange={(e) => {
                        setCouponInput(e.target.value)
                        setCouponError('')
                      }}
                      onKeyDown={(e) => e.key === 'Enter' && handleApplyCoupon()}
                      className="rounded-lg"
                    />
                    {couponError && (
                      <p className="text-xs text-red-500 mt-1">{couponError}</p>
                    )}
                  </div>
                  <Button
                    variant="outline"
                    onClick={handleApplyCoupon}
                    disabled={!couponInput.trim()}
                    className="rounded-lg px-6 border-orange-300 text-orange-600 hover:bg-orange-50 dark:border-orange-800 dark:text-orange-400 dark:hover:bg-orange-950/30"
                  >
                    Apply
                  </Button>
                </div>
              )}
              {/* Available coupons hint */}
              {!couponCode && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {coupons.slice(0, 3).map((c) => (
                    <button
                      key={c.id}
                      onClick={() => {
                        setCouponInput(c.code)
                        setCouponError('')
                      }}
                      className="text-xs px-2.5 py-1 rounded-full border border-dashed border-orange-300 dark:border-orange-800 text-orange-600 dark:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-950/30 transition-colors"
                    >
                      {c.code}
                    </button>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Saved for Later */}
          {savedItems.length > 0 && (
            <Card className="border-border/50">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Heart className="w-5 h-5 text-pink-500" />
                  Saved for Later ({savedItems.length})
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-0">
                <AnimatePresence mode="popLayout">
                  {savedItems.map((item) => (
                    <CartItemCard
                      key={item.id}
                      item={item}
                      onRemove={removeItem}
                      onUpdateQuantity={updateQuantity}
                      onSaveForLater={toggleSaveForLater}
                      isSaved
                    />
                  ))}
                </AnimatePresence>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Right: Price Summary Sidebar */}
        <div className="lg:col-span-1">
          <div className="lg:sticky lg:top-6 space-y-4">
            <Card className="border-border/50">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Price Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">
                    Subtotal ({getItemCount()} items)
                  </span>
                  <span className="font-medium">{formatPrice(subtotal)}</span>
                </div>

                {totalSavings > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Product Discount</span>
                    <span className="font-medium text-green-600 dark:text-green-400">
                      -{formatPrice(totalSavings)}
                    </span>
                  </div>
                )}

                {couponDiscount > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      Coupon Discount
                      {couponCode && (
                        <Badge
                          variant="secondary"
                          className="ml-1.5 text-[10px] px-1.5 py-0"
                        >
                          {couponCode}
                        </Badge>
                      )}
                    </span>
                    <span className="font-medium text-green-600 dark:text-green-400">
                      -{formatPrice(discount)}
                    </span>
                  </div>
                )}

                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Delivery Fee</span>
                  <span className="font-medium">
                    {shipping === 0 ? (
                      <span className="text-green-600 dark:text-green-400">
                        FREE
                      </span>
                    ) : (
                      formatPrice(shipping)
                    )}
                  </span>
                </div>

                <Separator />

                <div className="flex justify-between text-base font-bold">
                  <span>Total</span>
                  <span>{formatPrice(total)}</span>
                </div>

                {totalSavings + discount > 0 && (
                  <div className="bg-green-50 dark:bg-green-950/30 rounded-lg p-3 text-center">
                    <p className="text-sm font-medium text-green-700 dark:text-green-300">
                      You save {formatPrice(totalSavings + discount)} on this
                      order!
                    </p>
                  </div>
                )}

                <Button
                  className="w-full h-12 text-base font-semibold bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white rounded-xl shadow-lg shadow-orange-500/20 transition-all duration-200 hover:shadow-xl hover:shadow-orange-500/30"
                  disabled={cartItems.length === 0}
                  onClick={() => {
                    if (!requireAuth('place your order')) return
                    navigate('checkout')
                  }}
                >
                  Place Order
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>

                {/* Secure checkout */}
                <div className="flex items-center justify-center gap-4 py-2">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <ShieldCheck className="w-3.5 h-3.5 text-green-500" />
                    <span>Secure</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Truck className="w-3.5 h-3.5 text-orange-500" />
                    <span>Fast Delivery</span>
                  </div>
                </div>

                <Separator />

                {/* Payment methods */}
                <div className="text-center">
                  <p className="text-xs text-muted-foreground mb-2">
                    Accepted Payment Methods
                  </p>
                  <p className="text-xs text-muted-foreground/70">
                    UPI &bull; Credit/Debit Card &bull; Net Banking &bull;
                    Wallet &bull; COD
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Cart Item Card ──────────────────────────────────────────────────────

interface CartItemCardProps {
  item: CartItemType
  onRemove: (id: string) => void
  onUpdateQuantity: (id: string, quantity: number) => void
  onSaveForLater: (id: string) => void
  isSaved?: boolean
}

import type { CartItemType } from '@/store/cart-store'

function CartItemCard({
  item,
  onRemove,
  onUpdateQuantity,
  onSaveForLater,
  isSaved = false,
}: CartItemCardProps) {
  const discount = item.price > 0 ? Math.round(((item.price - (item.salePrice || item.price)) / item.price) * 100) : 0

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20, height: 0, marginBottom: 0, padding: 0 }}
      transition={{ duration: 0.25 }}
      className="flex gap-3 sm:gap-4 py-4 border-b border-border/40 last:border-b-0"
    >
      {/* Product Image */}
      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden bg-muted flex-shrink-0 border border-border/30">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Details */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h3 className="font-medium text-sm sm:text-base text-foreground leading-tight line-clamp-2">
              {item.name}
            </h3>
            <div className="flex flex-wrap items-center gap-1.5 mt-1">
              {item.color && (
                <Badge
                  variant="secondary"
                  className="text-[10px] px-1.5 py-0 font-normal"
                >
                  {item.color}
                </Badge>
              )}
              {item.size && (
                <Badge
                  variant="secondary"
                  className="text-[10px] px-1.5 py-0 font-normal"
                >
                  Size: {item.size}
                </Badge>
              )}
            </div>
          </div>

          {/* Remove button */}
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-muted-foreground hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 flex-shrink-0"
            onClick={() => onRemove(item.id)}
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>

        {/* Price row */}
        <div className="flex items-center gap-2 mt-1.5">
          <span className="font-semibold text-sm sm:text-base">
            {formatPrice(item.salePrice || item.price)}
          </span>
          {item.salePrice && item.salePrice < item.price && (
            <>
              <span className="text-xs text-muted-foreground line-through">
                {formatPrice(item.price)}
              </span>
              <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 text-[10px] px-1.5 py-0 font-medium">
                {discount}% OFF
              </Badge>
            </>
          )}
        </div>

        {/* Quantity + Actions row */}
        <div className="flex items-center justify-between mt-2.5 gap-2 flex-wrap">
          {/* Quantity selector */}
          <div className="flex items-center border border-border/60 rounded-lg overflow-hidden">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-none hover:bg-muted"
              disabled={item.quantity <= 1}
              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
            >
              <Minus className="w-3.5 h-3.5" />
            </Button>
            <span className="w-8 text-center text-sm font-medium">
              {item.quantity}
            </span>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-none hover:bg-muted"
              disabled={item.quantity >= item.stock}
              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            >
              <Plus className="w-3.5 h-3.5" />
            </Button>
          </div>

          {/* Save for Later / Move to Cart */}
          <Button
            variant="ghost"
            size="sm"
            className="text-xs text-orange-600 hover:text-orange-700 hover:bg-orange-50 dark:text-orange-400 dark:hover:bg-orange-950/30 h-8 px-2"
            onClick={() => onSaveForLater(item.id)}
          >
            <Heart
              className={`w-3.5 h-3.5 mr-1 ${isSaved ? 'fill-pink-500 text-pink-500' : ''}`}
            />
            {isSaved ? 'Move to Cart' : 'Save for Later'}
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
