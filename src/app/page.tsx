'use client'

import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useNavigationStore } from '@/store/navigation-store'
import { Header } from '@/components/ecommerce/header'
import { Footer } from '@/components/ecommerce/footer'
import Homepage from '@/components/ecommerce/homepage'
import ProductsPage from '@/components/ecommerce/products-page'
import ProductDetail from '@/components/ecommerce/product-detail'
import { CartPage } from '@/components/ecommerce/cart-page'
import { CheckoutPage } from '@/components/ecommerce/checkout-page'
import { AuthPage } from '@/components/ecommerce/auth-page'
import UserDashboard from '@/components/ecommerce/user-dashboard'
import SellerPanel from '@/components/ecommerce/seller-panel'
import AdminPanel from '@/components/ecommerce/admin-panel'
import InfoPages from '@/components/ecommerce/info-pages'
import { AIChatbot } from '@/components/ecommerce/ai-chatbot'

function ViewRenderer() {
  const { currentView } = useNavigationStore()

  const viewComponents: Record<string, React.ReactNode> = {
    home: <Homepage />,
    products: <ProductsPage />,
    'product-detail': <ProductDetail />,
    cart: <CartPage />,
    checkout: <CheckoutPage />,
    auth: <AuthPage />,
    'user-dashboard': <UserDashboard />,
    'seller-panel': <SellerPanel />,
    'admin-panel': <AdminPanel />,
    info: <InfoPages />,
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentView}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
        className="flex-1"
      >
        {viewComponents[currentView] || <Homepage />}
      </motion.div>
    </AnimatePresence>
  )
}

export default function Home() {
  const { currentView } = useNavigationStore()
  
  const isDashboard = ['user-dashboard', 'seller-panel', 'admin-panel'].includes(currentView)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentView])

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-zinc-950">
      <Header />
      <main className="flex-1">
        <ViewRenderer />
      </main>
      {!isDashboard && <Footer />}
      <AIChatbot />
    </div>
  )
}
