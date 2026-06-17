'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  ArrowRight,
  CreditCard,
  Smartphone,
  QrCode,
  Truck,
  ShieldCheck,
  RotateCcw,
  Headphones,
  Send,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { useNavigationStore, type InfoPage } from '@/store/navigation-store'

const quickLinks: { label: string; page: InfoPage }[] = [
  { label: 'About Us', page: 'about' },
  { label: 'Contact Us', page: 'contact' },
  { label: 'Careers', page: 'careers' },
  { label: 'Blog', page: 'blog' },
  { label: 'Press', page: 'press' },
]

const customerService: { label: string; page: InfoPage | 'track' }[] = [
  { label: 'Help Center', page: 'help' },
  { label: 'Returns & Refunds', page: 'returns' },
  { label: 'Shipping Info', page: 'shipping' },
  { label: 'FAQ', page: 'faq' },
  { label: 'Track Order', page: 'track' },
]

const policies: { label: string; page: InfoPage }[] = [
  { label: 'Privacy Policy', page: 'privacy' },
  { label: 'Terms of Service', page: 'terms' },
  { label: 'Refund Policy', page: 'refund-policy' },
  { label: 'Sitemap', page: 'sitemap' },
  { label: 'Cookie Policy', page: 'cookies' },
]

const COMPANY_EMAIL = 'akashreddy798695143@gmail.com'
const COMPANY_PHONE = '+91 8790401013'
const COMPANY_PHONE_RAW = '8790401013'
const COMPANY_LOCATION = 'Tirupati, Chittoor Dist, Andhra Pradesh, India'

const socialLinks = [
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
]

const paymentMethods = [
  { label: 'Visa', icon: CreditCard },
  { label: 'Mastercard', icon: CreditCard },
  { label: 'UPI', icon: Smartphone },
  { label: 'PayPal', icon: CreditCard },
  { label: 'Apple Pay', icon: Smartphone },
  { label: 'Google Pay', icon: Smartphone },
]

const features = [
  { icon: Truck, label: 'Free Shipping', desc: 'On orders over $50' },
  { icon: RotateCcw, label: 'Easy Returns', desc: '30-day return policy' },
  { icon: ShieldCheck, label: 'Secure Payment', desc: '100% secure checkout' },
  { icon: Headphones, label: '24/7 Support', desc: 'Dedicated help center' },
]

export function Footer() {
  const navigate = useNavigationStore((s) => s.navigate)
  const navigateToInfo = useNavigationStore((s) => s.navigateToInfo)
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = () => {
    if (email.trim() && email.includes('@')) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  return (
    <footer className="bg-zinc-900 dark:bg-zinc-950 text-zinc-300">
      {/* Feature Bar */}
      <div className="border-b border-zinc-800">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {features.map((feature) => (
              <div key={feature.label} className="flex items-center gap-3">
                <div className="size-10 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                  <feature.icon className="size-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{feature.label}</p>
                  <p className="text-xs text-zinc-500">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Bar */}
      <div className="border-b border-zinc-800 bg-gradient-to-r from-emerald-900/20 via-zinc-900 to-teal-900/20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                <Mail className="size-5 text-emerald-400" />
              </div>
              <div>
                <p className="text-white font-semibold">Subscribe to our Newsletter</p>
                <p className="text-sm text-zinc-500">
                  Get exclusive deals, new arrivals & 10% off your first order
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 w-full md:w-auto">
              <div className="relative flex-1 md:w-72">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleSubscribe()
                  }}
                  className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 h-11 rounded-xl pr-4 focus-visible:ring-emerald-500/50 focus-visible:border-emerald-500"
                />
              </div>
              <Button
                onClick={handleSubscribe}
                className="bg-emerald-600 hover:bg-emerald-700 text-white h-11 px-5 rounded-xl gap-2 shrink-0"
              >
                {subscribed ? (
                  <>
                    <span>Subscribed!</span>
                  </>
                ) : (
                  <>
                    <Send className="size-4" />
                    <span>Subscribe</span>
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          {/* Column 1: Logo & About */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="relative size-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/25">
                <span className="text-white font-black text-base">S</span>
                <div className="absolute -top-0.5 -right-0.5 size-2.5 bg-yellow-400 rounded-full border border-zinc-900" />
              </div>
              <div>
                <p className="text-lg font-black text-white leading-none">
                  Shop<span className="text-emerald-400">Zone</span>
                </p>
                <p className="text-[10px] text-zinc-500 font-medium tracking-widest uppercase">
                  Marketplace
                </p>
              </div>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed mb-5">
              Your one-stop destination for premium products from trusted sellers. Discover the best
              deals, explore trending items, and enjoy a seamless shopping experience.
            </p>
            <div className="flex flex-col gap-2 mb-5">
              <a href={`mailto:${COMPANY_EMAIL}`} className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-emerald-400 transition-colors">
                <Mail className="size-3.5" />
                <span className="break-all">{COMPANY_EMAIL}</span>
              </a>
              <a href={`tel:${COMPANY_PHONE_RAW}`} className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-emerald-400 transition-colors">
                <Phone className="size-3.5" />
                <span>{COMPANY_PHONE}</span>
              </a>
              <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                <MapPin className="size-3.5" />
                <span>{COMPANY_LOCATION}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="size-9 rounded-lg bg-zinc-800 hover:bg-emerald-600 flex items-center justify-center transition-colors group"
                  aria-label={social.label}
                >
                  <social.icon className="size-4 text-zinc-400 group-hover:text-white transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => navigateToInfo(link.page)}
                    className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="size-3 text-zinc-600 group-hover:text-emerald-400 transition-colors" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Customer Service */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Customer Service
            </h3>
            <ul className="space-y-2.5">
              {customerService.map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => {
                      if (link.page === 'track') {
                        navigate('user-dashboard', { tab: 'orders' })
                      } else {
                        navigateToInfo(link.page)
                      }
                    }}
                    className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="size-3 text-zinc-600 group-hover:text-emerald-400 transition-colors" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Policies */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Policies
            </h3>
            <ul className="space-y-2.5">
              {policies.map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => navigateToInfo(link.page)}
                    className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="size-3 text-zinc-600 group-hover:text-emerald-400 transition-colors" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Download App */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Download App
            </h3>
            <p className="text-sm text-zinc-400 mb-4">
              Get the ShopZone app for the best shopping experience
            </p>
            {/* QR Code Placeholder */}
            <div className="size-28 bg-white rounded-xl p-2 mb-4">
              <div className="size-full bg-zinc-100 rounded-lg flex flex-col items-center justify-center gap-1">
                <QrCode className="size-10 text-zinc-800" />
                <span className="text-[8px] font-bold text-zinc-800 tracking-wider">
                  SCAN ME
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg px-3 py-2 transition-colors"
              >
                <Smartphone className="size-5 text-zinc-300" />
                <div className="text-left">
                  <p className="text-[9px] text-zinc-500 leading-none">Download on the</p>
                  <p className="text-xs text-white font-semibold leading-tight">App Store</p>
                </div>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg px-3 py-2 transition-colors"
              >
                <Smartphone className="size-5 text-zinc-300" />
                <div className="text-left">
                  <p className="text-[9px] text-zinc-500 leading-none">Get it on</p>
                  <p className="text-xs text-white font-semibold leading-tight">Google Play</p>
                </div>
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Methods & Copyright */}
      <div className="border-t border-zinc-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 flex-wrap justify-center">
              <span className="text-xs text-zinc-500 mr-2">We accept:</span>
              {paymentMethods.map((method) => (
                <div
                  key={method.label}
                  className="flex items-center gap-1 bg-zinc-800 rounded-md px-2.5 py-1.5"
                >
                  <method.icon className="size-3.5 text-zinc-400" />
                  <span className="text-[10px] font-medium text-zinc-400">{method.label}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-2 text-xs text-zinc-500">
              <p>&copy; {new Date().getFullYear()} ShopZone. All rights reserved.</p>
              <Separator
                orientation="vertical"
                className="hidden sm:block h-3 bg-zinc-700"
              />
              <p>Made with passion for great shopping</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
