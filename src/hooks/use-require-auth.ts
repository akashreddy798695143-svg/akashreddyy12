'use client'

import { useAuthStore } from '@/store/auth-store'
import { useNavigationStore } from '@/store/navigation-store'
import { useToast } from '@/hooks/use-toast'

/**
 * Returns a function that checks if the user is authenticated before performing
 * a protected action (add to cart, buy now, checkout, place order, etc.).
 *
 * If the user is not signed in, it shows a toast and navigates to the auth page.
 *
 * Usage:
 *   const requireAuth = useRequireAuth()
 *   const handleAddToCart = () => {
 *     if (!requireAuth('add items to your cart')) return
 *     // ... proceed with the action
 *   }
 */
export function useRequireAuth() {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated)
  const navigate = useNavigationStore((s) => s.navigate)
  const setAuthMode = useNavigationStore((s) => s.setAuthMode)
  const { toast } = useToast()

  return (action?: string): boolean => {
    if (isAuthenticated) return true

    toast({
      title: 'Please sign in to continue',
      description: action
        ? `You need to be signed in to ${action}.`
        : 'You need to be signed in to perform this action.',
      variant: 'destructive',
    })

    setAuthMode('login')
    navigate('auth')
    return false
  }
}
