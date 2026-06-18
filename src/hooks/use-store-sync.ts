'use client'

import { useEffect } from 'react'
import { useAuthStore } from '@/store/auth-store'
import { useCartStore } from '@/store/cart-store'
import { useWishlistStore } from '@/store/wishlist-store'

/**
 * Keeps the cart & wishlist stores in sync with the server.
 *
 * - When the user becomes authenticated → hydrate both stores from /api/*.
 * - When the user logs out → clear the local caches.
 *
 * Mount this once in an always-rendered component (e.g. Header).
 */
export function useStoreSync() {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated)
  const syncCart = useCartStore((s) => s.syncFromServer)
  const syncWishlist = useWishlistStore((s) => s.syncFromServer)
  const clearCart = useCartStore((s) => s.clearLocal)
  const clearWishlist = useWishlistStore((s) => s.clearLocal)
  const cartSynced = useCartStore((s) => s.synced)
  const wishlistSynced = useWishlistStore((s) => s.synced)

  useEffect(() => {
    if (isAuthenticated) {
      if (!cartSynced) syncCart().catch(() => {})
      if (!wishlistSynced) syncWishlist().catch(() => {})
    } else {
      clearCart()
      clearWishlist()
    }
  }, [isAuthenticated])
}
