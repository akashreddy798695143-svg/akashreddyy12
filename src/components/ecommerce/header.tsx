'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search, Heart, ShoppingCart, User, Menu, X, Sun, Moon,
} from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { useNavigationStore } from '@/store/navigation-store'
import { useCartStore } from '@/store/cart-store'
import { useWishlistStore } from '@/store/wishlist-store'
import { useAuthStore } from '@/store/auth-store'
import { useStoreSync } from '@/hooks/use-store-sync'

export function Header() {
  const [mounted, setMounted] = useState<boolean>(false);
  
  // Hydration fix కోసం
  useEffect(() => {
    setMounted(true);
  }, []);

  useStoreSync();
  const { theme, setTheme } = useTheme();
  
  // Store hooks
  const searchQuery = useNavigationStore((s) => s.searchQuery);
  const setSearchQuery = useNavigationStore((s) => s.setSearchQuery);
  
  // Cart logic with type safety
  const cartItems = useCartStore((s) => s.items);
  const cartItemCount: number = cartItems
    .filter((i) => !i.saveForLater)
    .reduce((sum, i) => sum + i.quantity, 0);

  const wishlistCount: number = useWishlistStore((s) => s.items.length);
  const { isAuthenticated, user } = useAuthStore();

  // Loading state handling
  if (!mounted) {
    return <header className="w-full h-20 bg-background border-b" />;
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo Section */}
        <div className="text-xl font-bold">ShopZone</div>

        {/* Search Bar */}
        <div className="flex-1 mx-4 max-w-md">
          <Input 
            placeholder="Search products..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Icons Section */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </Button>
          
          <Button variant="ghost" size="icon" className="relative">
            <Heart className="w-5 h-5" />
            {wishlistCount > 0 && <Badge className="absolute -top-1 -right-1 px-1">{wishlistCount}</Badge>}
          </Button>

          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="w-5 h-5" />
            {cartItemCount > 0 && <Badge className="absolute -top-1 -right-1 px-1">{cartItemCount}</Badge>}
          </Button>

          {isAuthenticated ? (
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
              {user?.name?.charAt(0) || 'U'}
            </div>
          ) : (
            <Button variant="outline">Login</Button>
          )}
        </div>
      </div>
    </header>
  )
}