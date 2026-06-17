'use client'

import { motion } from 'framer-motion'
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Briefcase,
  Newspaper,
  PenTool,
  FileText,
  Shield,
  RotateCcw,
  Cookie,
  Network,
  LifeBuoy,
  Truck,
  HelpCircle,
  Send,
  Users,
  Target,
  Award,
  Rocket,
  Heart,
  CheckCircle2,
  Building2,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { useNavigationStore, type InfoPage } from '@/store/navigation-store'
import { useState } from 'react'

const COMPANY = {
  name: 'ShopZone',
  email: 'akashreddy798695143@gmail.com',
  phone: '+91 8790401013',
  phoneRaw: '8790401013',
  location: 'Tirupati, Chittoor Dist, Andhra Pradesh, India',
  address: 'Tirupati, Chittoor Dist, Andhra Pradesh, India',
}

const PAGE_META: Record<InfoPage, { title: string; icon: any; subtitle: string }> = {
  about: { title: 'About Us', icon: Users, subtitle: 'Learn about the ShopZone story and mission' },
  contact: { title: 'Contact Us', icon: Mail, subtitle: 'We are here to help you 24/7' },
  careers: { title: 'Careers at ShopZone', icon: Briefcase, subtitle: 'Build your career with a fast-growing marketplace' },
  blog: { title: 'ShopZone Blog', icon: PenTool, subtitle: 'News, guides and stories from the ShopZone team' },
  press: { title: 'Press & Media', icon: Newspaper, subtitle: 'Press releases, brand assets and media contacts' },
  help: { title: 'Help Center', icon: LifeBuoy, subtitle: 'Find answers and get support' },
  returns: { title: 'Returns & Refunds', icon: RotateCcw, subtitle: 'Our return and refund policy explained' },
  shipping: { title: 'Shipping Information', icon: Truck, subtitle: 'Everything about delivery and shipping' },
  faq: { title: 'Frequently Asked Questions', icon: HelpCircle, subtitle: 'Quick answers to common questions' },
  privacy: { title: 'Privacy Policy', icon: Shield, subtitle: 'How we collect, use and protect your data' },
  terms: { title: 'Terms of Service', icon: FileText, subtitle: 'The terms that govern your use of ShopZone' },
  'refund-policy': { title: 'Refund Policy', icon: RotateCcw, subtitle: 'Refund eligibility, timelines and process' },
  sitemap: { title: 'Sitemap', icon: Network, subtitle: 'Navigate every section of ShopZone' },
  cookies: { title: 'Cookie Policy', icon: Cookie, subtitle: 'How and why we use cookies' },
}

export function InfoPages() {
  const { infoPage, navigate, navigateToInfo } = useNavigationStore()
  const meta = PAGE_META[infoPage]

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* Hero Header */}
      <div className="bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-700 text-white">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('home')}
            className="mb-6 text-white/80 hover:text-white hover:bg-white/10"
          >
            <ArrowLeft className="size-4 mr-1" />
            Back to Home
          </Button>
          <div className="flex items-center gap-4">
            <div className="size-14 rounded-2xl bg-white/15 backdrop-blur flex items-center justify-center">
              <meta.icon className="size-7" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-black tracking-tight">{meta.title}</h1>
              <p className="text-white/80 mt-1">{meta.subtitle}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-10 md:py-14">
        <motion.div
          key={infoPage}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          {infoPage === 'about' && <AboutContent />}
          {infoPage === 'contact' && <ContactContent />}
          {infoPage === 'careers' && <CareersContent />}
          {infoPage === 'blog' && <BlogContent />}
          {infoPage === 'press' && <PressContent />}
          {infoPage === 'help' && <HelpContent />}
          {infoPage === 'returns' && <ReturnsContent />}
          {infoPage === 'shipping' && <ShippingContent />}
          {infoPage === 'faq' && <FaqContent />}
          {infoPage === 'privacy' && <PrivacyContent />}
          {infoPage === 'terms' && <TermsContent />}
          {infoPage === 'refund-policy' && <RefundPolicyContent />}
          {infoPage === 'sitemap' && <SitemapContent navigate={navigateToInfo} navigateHome={() => navigate('home')} />}
          {infoPage === 'cookies' && <CookiesContent />}
        </motion.div>
      </div>
    </div>
  )
}

export default InfoPages

/* ============================ SHARED BITS ============================ */

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
        <span className="size-1.5 rounded-full bg-emerald-500" />
        {title}
      </h2>
      <div className="text-zinc-600 dark:text-zinc-300 leading-relaxed space-y-3 text-[15px]">
        {children}
      </div>
    </section>
  )
}

function LastUpdated() {
  return (
    <p className="text-xs text-zinc-400 mb-8 italic">
      Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
    </p>
  )
}

function ContactCard() {
  return (
    <Card className="bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-900">
      <CardContent className="p-6">
        <h3 className="font-semibold text-emerald-700 dark:text-emerald-300 mb-4 flex items-center gap-2">
          <Mail className="size-4" /> Get in Touch
        </h3>
        <div className="space-y-3 text-sm">
          <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-3 text-zinc-700 dark:text-zinc-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
            <Mail className="size-4 text-emerald-500" />
            <span className="font-medium">{COMPANY.email}</span>
          </a>
          <a href={`tel:${COMPANY.phoneRaw}`} className="flex items-center gap-3 text-zinc-700 dark:text-zinc-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
            <Phone className="size-4 text-emerald-500" />
            <span className="font-medium">{COMPANY.phone}</span>
          </a>
          <div className="flex items-center gap-3 text-zinc-700 dark:text-zinc-200">
            <MapPin className="size-4 text-emerald-500" />
            <span>{COMPANY.location}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

/* ============================ ABOUT ============================ */

function AboutContent() {
  return (
    <div>
      <LastUpdated />
      <Section title="Who We Are">
        <p>
          <strong>{COMPANY.name}</strong> is a next-generation online marketplace headquartered in
          Tirupati, Andhra Pradesh, India. Founded with a vision to make quality products accessible
          to every Indian household, {COMPANY.name} brings together trusted sellers, premium brands,
          and a seamless shopping experience under one roof.
        </p>
        <p>
          From electronics and fashion to home essentials and beauty, we curate a wide catalogue of
          50+ products across 25+ categories from 25+ verified brands. Whether you are shopping for
          the latest gadgets or everyday essentials, {COMPANY.name} is your one-stop destination.
        </p>
      </Section>

      <Section title="Our Mission">
        <p>
          To democratize e-commerce in India by empowering small sellers and local brands to reach
          millions of customers, while delivering an honest, transparent and delightful shopping
          experience to every buyer.
        </p>
      </Section>

      <Section title="Our Vision">
        <p>
          To become India's most loved and trusted online marketplace — known for fair prices,
          fast delivery, easy returns and a customer-first culture.
        </p>
      </Section>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 my-10">
        {[
          { icon: Target, label: 'Customer First', desc: 'Every decision starts with what is best for our customers.' },
          { icon: Shield, label: 'Trust & Safety', desc: 'Verified sellers, secure payments and protected data.' },
          { icon: Rocket, label: 'Fast Delivery', desc: 'Quick, reliable shipping across India.' },
          { icon: Heart, label: 'Community', desc: 'Supporting local sellers and Indian brands.' },
        ].map((v) => (
          <Card key={v.label} className="text-center">
            <CardContent className="p-5">
              <div className="size-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mx-auto mb-3">
                <v.icon className="size-6 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-sm mb-1">{v.label}</h3>
              <p className="text-xs text-zinc-500">{v.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Section title="Our Story">
        <p>
          {COMPANY.name} began as a small idea in Tirupati — that customers in Tier-2 and Tier-3
          cities deserve the same quality, choice and convenience as shoppers in metros. What
          started as a local initiative has grown into a full-fledged marketplace serving customers
          across India.
        </p>
        <p>
          Today we work with hundreds of sellers, deliver to thousands of pin codes, and continue to
          innovate with features like AI-powered recommendations, instant refunds to wallet, and a
          24/7 customer support team.
        </p>
      </Section>

      <Section title="Why Shop With Us?">
        <ul className="space-y-2">
          {[
            'Wide selection of products across 25+ categories',
            'Verified sellers and genuine products only',
            'Secure payments via UPI, cards, wallets and COD',
            'Free shipping on orders above ₹500',
            'Easy 7–30 day returns and refunds',
            '24/7 customer support',
            'Reward points and referral bonuses',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <CheckCircle2 className="size-5 text-emerald-500 shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      <ContactCard />
    </div>
  )
}

/* ============================ CONTACT ============================ */

function ContactContent() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = () => {
    if (form.name && form.email && form.message) {
      setSent(true)
      setForm({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSent(false), 4000)
    }
  }

  return (
    <div>
      <Section title="We'd Love to Hear From You">
        <p>
          Whether you have a question about an order, a product, a seller, or just want to share
          feedback — our team is available 24/7 to help. Reach out using the details below or fill
          in the contact form and we will get back to you within 24 hours.
        </p>
      </Section>

      <div className="grid md:grid-cols-3 gap-4 my-8">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="size-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mx-auto mb-3">
              <Mail className="size-6 text-emerald-600" />
            </div>
            <h3 className="font-semibold mb-1">Email Us</h3>
            <p className="text-xs text-zinc-500 mb-2">For queries & support</p>
            <a href={`mailto:${COMPANY.email}`} className="text-sm text-emerald-600 dark:text-emerald-400 font-medium break-all">
              {COMPANY.email}
            </a>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="size-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mx-auto mb-3">
              <Phone className="size-6 text-emerald-600" />
            </div>
            <h3 className="font-semibold mb-1">Call Us</h3>
            <p className="text-xs text-zinc-500 mb-2">Mon–Sun, 9 AM – 9 PM</p>
            <a href={`tel:${COMPANY.phoneRaw}`} className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">
              {COMPANY.phone}
            </a>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="size-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mx-auto mb-3">
              <MapPin className="size-6 text-emerald-600" />
            </div>
            <h3 className="font-semibold mb-1">Visit Us</h3>
            <p className="text-xs text-zinc-500 mb-2">Head Office</p>
            <p className="text-sm text-zinc-700 dark:text-zinc-200">{COMPANY.location}</p>
          </CardContent>
        </Card>
      </div>

      <Card className="my-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Send className="size-5 text-emerald-600" /> Send a Message
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-1.5 block">Your Name</label>
              <Input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Email Address</label>
              <Input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium mb-1.5 block">Subject</label>
            <Input
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              placeholder="What is this about?"
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-1.5 block">Message</label>
            <Textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Tell us how we can help..."
              rows={5}
            />
          </div>
          <Button
            onClick={handleSubmit}
            disabled={!form.name || !form.email || !form.message}
            className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white"
          >
            {sent ? (
              <>
                <CheckCircle2 className="size-4 mr-2" /> Message Sent!
              </>
            ) : (
              <>
                <Send className="size-4 mr-2" /> Send Message
              </>
            )}
          </Button>
          {sent && (
            <p className="text-sm text-emerald-600 dark:text-emerald-400">
              Thank you for reaching out. We will respond within 24 hours.
            </p>
          )}
        </CardContent>
      </Card>

      <Section title="Follow Us">
        <p>Stay connected with {COMPANY.name} on social media for the latest deals, launches and updates:</p>
        <div className="flex items-center gap-3 mt-3">
          {[
            { icon: Facebook, label: 'Facebook' },
            { icon: Twitter, label: 'Twitter' },
            { icon: Instagram, label: 'Instagram' },
            { icon: Youtube, label: 'YouTube' },
          ].map((s) => (
            <a
              key={s.label}
              href="#"
              aria-label={s.label}
              className="size-10 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-emerald-600 hover:text-white text-zinc-600 dark:text-zinc-300 flex items-center justify-center transition-colors"
            >
              <s.icon className="size-5" />
            </a>
          ))}
        </div>
      </Section>
    </div>
  )
}

/* ============================ CAREERS ============================ */

function CareersContent() {
  const jobs = [
    { title: 'Senior Frontend Engineer', dept: 'Engineering', location: 'Tirupati / Remote', type: 'Full-time' },
    { title: 'Backend Engineer (Node.js)', dept: 'Engineering', location: 'Tirupati / Remote', type: 'Full-time' },
    { title: 'Product Manager', dept: 'Product', location: 'Tirupati', type: 'Full-time' },
    { title: 'UI/UX Designer', dept: 'Design', location: 'Tirupati / Remote', type: 'Full-time' },
    { title: 'Customer Support Executive', dept: 'Support', location: 'Tirupati', type: 'Full-time' },
    { title: 'Digital Marketing Specialist', dept: 'Marketing', location: 'Tirupati / Remote', type: 'Full-time' },
    { title: 'Supply Chain Analyst', dept: 'Operations', location: 'Tirupati', type: 'Full-time' },
    { title: 'Data Scientist', dept: 'Data', location: 'Tirupati / Remote', type: 'Full-time' },
  ]

  return (
    <div>
      <Section title="Join the ShopZone Family">
        <p>
          We are building India's most loved marketplace — and we are looking for passionate,
          talented people to join us on this journey. At {COMPANY.name}, you will work on
          challenging problems, ship products used by thousands of customers, and grow alongside a
          team that genuinely cares about your success.
        </p>
      </Section>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 my-8">
        {[
          { icon: Rocket, label: 'Growth', desc: 'Fast-track your career with mentorship and real ownership.' },
          { icon: Heart, label: 'Culture', desc: 'Inclusive, friendly and built on mutual respect.' },
          { icon: Award, label: 'Rewards', desc: 'Competitive pay, health benefits and stock options.' },
          { icon: Users, label: 'Team', desc: 'Work with smart, kind and curious people.' },
        ].map((p) => (
          <Card key={p.label}>
            <CardContent className="p-5 text-center">
              <div className="size-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mx-auto mb-3">
                <p.icon className="size-6 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-sm mb-1">{p.label}</h3>
              <p className="text-xs text-zinc-500">{p.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Section title="Open Positions">
        <p>Here are the roles we are actively hiring for. Don't see a perfect fit? Email us your resume anyway — we are always looking for great people.</p>
      </Section>

      <div className="space-y-3 my-6">
        {jobs.map((job) => (
          <Card key={job.title} className="hover:border-emerald-300 dark:hover:border-emerald-700 transition-colors">
            <CardContent className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="font-semibold text-zinc-900 dark:text-white">{job.title}</h3>
                <div className="flex flex-wrap items-center gap-3 mt-1 text-xs text-zinc-500">
                  <span className="flex items-center gap-1"><Briefcase className="size-3" /> {job.dept}</span>
                  <span className="flex items-center gap-1"><MapPin className="size-3" /> {job.location}</span>
                  <span className="flex items-center gap-1"><Award className="size-3" /> {job.type}</span>
                </div>
              </div>
              <a href={`mailto:${COMPANY.email}?subject=Application: ${encodeURIComponent(job.title)}`}>
                <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                  Apply Now
                </Button>
              </a>
            </CardContent>
          </Card>
        ))}
      </div>

      <Section title="Internships & Freshers">
        <p>
          We offer paid internships and entry-level roles for students and recent graduates across
          engineering, design, marketing and operations. If you are eager to learn and make an
          impact, we would love to hear from you.
        </p>
      </Section>

      <ContactCard />
    </div>
  )
}

/* ============================ BLOG ============================ */

function BlogContent() {
  const posts = [
    { title: '10 Must-Have Electronics Gadgets in 2025', category: 'Electronics', date: 'Jan 2025', read: '5 min read', excerpt: 'From smartwatches to wireless earbuds, here are the gadgets worth buying this year.' },
    { title: 'How to Choose the Perfect Smartphone for Your Budget', category: 'Buying Guide', date: 'Jan 2025', read: '7 min read', excerpt: 'A complete guide to picking the right phone without overspending.' },
    { title: 'Sustainable Fashion: Why It Matters and How to Start', category: 'Fashion', date: 'Dec 2024', read: '4 min read', excerpt: 'Tips for building an eco-friendly wardrobe that lasts.' },
    { title: 'Home Decor Trends That Will Dominate 2025', category: 'Home & Living', date: 'Dec 2024', read: '6 min read', excerpt: 'Refresh your space with these trending decor ideas.' },
    { title: '5 Ways to Save Money While Shopping Online', category: 'Tips & Tricks', date: 'Nov 2024', read: '3 min read', excerpt: 'Smart strategies to get the best deals every time you shop.' },
    { title: 'The Rise of Indian D2C Brands on ShopZone', category: 'Spotlight', date: 'Nov 2024', read: '5 min read', excerpt: 'How homegrown brands are winning customers across India.' },
  ]

  return (
    <div>
      <Section title="Latest from the ShopZone Blog">
        <p>
          Insights, buying guides, trend reports and stories from the {COMPANY.name} team. Whether
          you are looking for product recommendations or want to stay updated on what is new, our
          blog has something for everyone.
        </p>
      </Section>

      <div className="grid md:grid-cols-2 gap-5 my-8">
        {posts.map((post) => (
          <Card key={post.title} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-40 bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
              <PenTool className="size-12 text-white/80" />
            </div>
            <CardContent className="p-5">
              <div className="flex items-center gap-2 text-xs mb-2">
                <span className="px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 font-medium">
                  {post.category}
                </span>
                <span className="text-zinc-400">{post.date}</span>
                <span className="text-zinc-400">·</span>
                <span className="text-zinc-400">{post.read}</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-zinc-900 dark:text-white">{post.title}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">{post.excerpt}</p>
              <Button variant="link" className="p-0 mt-3 h-auto text-emerald-600 dark:text-emerald-400">
                Read More →
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Section title="Subscribe to Our Newsletter">
        <p>Get the latest blog posts and exclusive deals delivered straight to your inbox. No spam, ever.</p>
      </Section>
    </div>
  )
}

/* ============================ PRESS ============================ */

function PressContent() {
  const releases = [
    { title: 'ShopZone Crosses 1 Million Happy Customers', date: 'January 2025', excerpt: 'A milestone in our journey to make quality products accessible across India.' },
    { title: 'ShopZone Partners with 500+ Local Sellers', date: 'December 2024', excerpt: 'Empowering small businesses to reach customers nationwide.' },
    { title: 'New AI-Powered Recommendation Engine Launched', date: 'November 2024', excerpt: 'Smarter, faster product discovery for every shopper.' },
    { title: 'ShopZone Expands to 10,000+ Pin Codes', date: 'October 2024', excerpt: 'Bringing faster delivery to Tier-2 and Tier-3 cities.' },
  ]

  return (
    <div>
      <Section title="Press & Media Kit">
        <p>
          Welcome to the {COMPANY.name} press room. Here you will find our latest press releases,
          company facts and media contact information. Members of the media can reach out to us
          directly at <a href={`mailto:${COMPANY.email}`} className="text-emerald-600 dark:text-emerald-400 font-medium">{COMPANY.email}</a>.
        </p>
      </Section>

      <Section title="Company Facts">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 not-prose">
          {[
            { label: 'Founded', value: '2024' },
            { label: 'Headquarters', value: 'Tirupati, India' },
            { label: 'Categories', value: '25+' },
            { label: 'Products', value: '50+' },
          ].map((f) => (
            <Card key={f.label}>
              <CardContent className="p-5 text-center">
                <p className="text-2xl font-black text-emerald-600">{f.value}</p>
                <p className="text-xs text-zinc-500 mt-1">{f.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Press Releases">
        <div className="space-y-4 not-prose">
          {releases.map((r) => (
            <Card key={r.title}>
              <CardContent className="p-5">
                <p className="text-xs text-zinc-400 mb-1">{r.date}</p>
                <h3 className="font-semibold text-zinc-900 dark:text-white mb-1">{r.title}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-300">{r.excerpt}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Brand Assets">
        <p>
          Need our logo, brand guidelines or product screenshots for a story? Download our complete
          media kit below or email us and we will send it across.
        </p>
        <div className="flex flex-wrap gap-3 mt-3 not-prose">
          <Button variant="outline" className="bg-white dark:bg-zinc-900">
            <FileText className="size-4 mr-2" /> Download Logo (SVG)
          </Button>
          <Button variant="outline" className="bg-white dark:bg-zinc-900">
            <FileText className="size-4 mr-2" /> Brand Guidelines (PDF)
          </Button>
          <a href={`mailto:${COMPANY.email}?subject=Press Inquiry`}>
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
              <Mail className="size-4 mr-2" /> Media Contact
            </Button>
          </a>
        </div>
      </Section>

      <ContactCard />
    </div>
  )
}

/* ============================ HELP ============================ */

function HelpContent() {
  const topics = [
    { icon: Truck, title: 'Order & Delivery', desc: 'Track orders, change address, delivery issues' },
    { icon: RotateCcw, title: 'Returns & Refunds', desc: 'Return products, refund status, exchange' },
    { icon: Shield, title: 'Payments', desc: 'Failed payments, refunds, payment methods' },
    { icon: Award, title: 'Account & Rewards', desc: 'Login issues, wallet, reward points' },
    { icon: Briefcase, title: 'Selling on ShopZone', desc: 'Become a seller, dashboard, payouts' },
    { icon: Shield, title: 'Safety & Security', desc: 'Report issues, account security' },
  ]
  return (
    <div>
      <Section title="How Can We Help?">
        <p>
          Welcome to the {COMPANY.name} Help Center. Browse the topics below to find quick answers,
          or contact our 24/7 support team directly using the details at the bottom of this page.
        </p>
      </Section>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 my-8 not-prose">
        {topics.map((t) => (
          <Card key={t.title} className="hover:border-emerald-300 dark:hover:border-emerald-700 transition-colors cursor-pointer">
            <CardContent className="p-5">
              <div className="size-10 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-3">
                <t.icon className="size-5 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-sm mb-1">{t.title}</h3>
              <p className="text-xs text-zinc-500">{t.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <Section title="Quick Support">
        <p>
          Need urgent help? Our support team is available 24/7.
        </p>
      </Section>
      <ContactCard />
    </div>
  )
}

/* ============================ RETURNS ============================ */

function ReturnsContent() {
  return (
    <div>
      <LastUpdated />
      <Section title="Return Policy Overview">
        <p>
          At {COMPANY.name}, we want you to shop with confidence. If you are not satisfied with your
          purchase, you can return most items within <strong>7 to 30 days</strong> of delivery,
          depending on the product category. Returned items must be unused, in their original
          packaging, with all tags and accessories intact.
        </p>
      </Section>

      <Section title="Return Windows by Category">
        <ul className="space-y-2">
          <li className="flex items-start gap-2"><CheckCircle2 className="size-5 text-emerald-500 shrink-0 mt-0.5" /> <span><strong>Electronics & Appliances:</strong> 7 days</span></li>
          <li className="flex items-start gap-2"><CheckCircle2 className="size-5 text-emerald-500 shrink-0 mt-0.5" /> <span><strong>Fashion (Clothing, Footwear, Accessories):</strong> 30 days</span></li>
          <li className="flex items-start gap-2"><CheckCircle2 className="size-5 text-emerald-500 shrink-0 mt-0.5" /> <span><strong>Home & Furniture:</strong> 10 days</span></li>
          <li className="flex items-start gap-2"><CheckCircle2 className="size-5 text-emerald-500 shrink-0 mt-0.5" /> <span><strong>Beauty & Personal Care:</strong> 7 days (only if sealed)</span></li>
          <li className="flex items-start gap-2"><CheckCircle2 className="size-5 text-emerald-500 shrink-0 mt-0.5" /> <span><strong>Books & Stationery:</strong> 7 days</span></li>
        </ul>
      </Section>

      <Section title="Non-Returnable Items">
        <ul className="space-y-2">
          <li className="flex items-start gap-2"><span>• Innerwear, lingerie and swimwear (hygiene reasons)</span></li>
          <li className="flex items-start gap-2"><span>• Perishable goods (food, flowers, plants)</span></li>
          <li className="flex items-start gap-2"><span>• Personalized or custom-made products</span></li>
          <li className="flex items-start gap-2"><span>• Digital products and gift cards</span></li>
          <li className="flex items-start gap-2"><span>• Items marked as "Non-Returnable" on the product page</span></li>
        </ul>
      </Section>

      <Section title="How to Initiate a Return">
        <ol className="space-y-2 list-decimal list-inside">
          <li>Go to <strong>My Orders</strong> in your dashboard.</li>
          <li>Select the order and item you wish to return.</li>
          <li>Click <strong>"Request Return"</strong> and choose a reason.</li>
          <li>Pack the item securely in its original packaging.</li>
          <li>Our courier partner will pick it up at your scheduled time.</li>
          <li>Once we receive and inspect the item, your refund will be processed.</li>
        </ol>
      </Section>

      <Section title="Refund Timeline">
        <p>
          Refunds are typically processed within <strong>3–5 business days</strong> of us receiving
          the returned item. The refund will be credited to your original payment method or
          {COMPANY.name} wallet (instant) based on your preference.
        </p>
      </Section>

      <ContactCard />
    </div>
  )
}

/* ============================ SHIPPING ============================ */

function ShippingContent() {
  return (
    <div>
      <LastUpdated />
      <Section title="Shipping Information">
        <p>
          {COMPANY.name} delivers across India to 10,000+ pin codes. We partner with leading
          logistics providers to ensure your orders reach you safely and on time.
        </p>
      </Section>

      <Section title="Shipping Charges">
        <ul className="space-y-2">
          <li className="flex items-start gap-2"><CheckCircle2 className="size-5 text-emerald-500 shrink-0 mt-0.5" /> <span><strong>Free shipping</strong> on all orders above ₹500.</span></li>
          <li className="flex items-start gap-2"><CheckCircle2 className="size-5 text-emerald-500 shrink-0 mt-0.5" /> <span>Flat ₹49 shipping fee for orders below ₹500.</span></li>
          <li className="flex items-start gap-2"><CheckCircle2 className="size-5 text-emerald-500 shrink-0 mt-0.5" /> <span>Free delivery on products marked "Free Delivery".</span></li>
          <li className="flex items-start gap-2"><CheckCircle2 className="size-5 text-emerald-500 shrink-0 mt-0.5" /> <span>COD (Cash on Delivery) available on most pin codes for an extra ₹20 fee.</span></li>
        </ul>
      </Section>

      <Section title="Delivery Timelines">
        <div className="overflow-x-auto not-prose">
          <table className="w-full text-sm border border-zinc-200 dark:border-zinc-800 rounded-lg">
            <thead className="bg-zinc-100 dark:bg-zinc-900">
              <tr>
                <th className="text-left p-3 font-semibold">Region</th>
                <th className="text-left p-3 font-semibold">Estimated Delivery</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Metro Cities', '2–4 business days'],
                ['Tier-2 Cities', '3–6 business days'],
                ['Tier-3 & Rural', '5–8 business days'],
                ['Remote / North-East', '7–12 business days'],
              ].map((row) => (
                <tr key={row[0]} className="border-t border-zinc-200 dark:border-zinc-800">
                  <td className="p-3">{row[0]}</td>
                  <td className="p-3 text-zinc-600 dark:text-zinc-300">{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="Order Tracking">
        <p>
          Once your order is shipped, you will receive a tracking ID via SMS and email. You can also
          track your order anytime from <strong>My Orders</strong> in your dashboard.
        </p>
      </Section>

      <Section title="Express Delivery">
        <p>
          Select products and pin codes are eligible for Express Delivery (next-day). Look for the
          "Express Delivery" badge on product pages to see if it is available in your area.
        </p>
      </Section>

      <ContactCard />
    </div>
  )
}

/* ============================ FAQ ============================ */

function FaqContent() {
  const faqs = [
    { q: 'How do I create an account on ShopZone?', a: 'Click on the "Sign In" button at the top right, then choose "Create Account". Enter your name, email and password to register. You can also sign in with your Google account.' },
    { q: 'How can I track my order?', a: 'Go to My Orders in your dashboard after logging in. Click on any order to see its real-time tracking status and estimated delivery date.' },
    { q: 'What payment methods are accepted?', a: 'We accept UPI, credit/debit cards (Visa, Mastercard, RuPay), net banking, popular wallets, and Cash on Delivery (COD) on eligible pin codes.' },
    { q: 'How long do refunds take?', a: 'Refunds to your ShopZone wallet are instant. Refunds to bank accounts or cards typically take 3–5 business days after we receive the returned item.' },
    { q: 'Can I cancel my order?', a: 'Yes. Orders can be cancelled before they are shipped from My Orders. Once shipped, you can refuse delivery or initiate a return after delivery.' },
    { q: 'Do you ship across India?', a: 'Yes, we deliver to 10,000+ pin codes across India including Tier-2 and Tier-3 cities. Enter your pincode on the product page to check delivery availability.' },
    { q: 'How do I become a seller on ShopZone?', a: 'Visit the Seller Panel after logging in and click "Register as Seller". Complete your store details, GST and bank information to start selling.' },
    { q: 'Are the products genuine?', a: 'Yes. We work only with verified sellers and authorised brands. Every product goes through quality checks before dispatch.' },
    { q: 'How do I use reward points?', a: 'Reward points are automatically credited on eligible orders. You can redeem them at checkout for a discount on future orders.' },
    { q: 'Is my data safe with ShopZone?', a: 'Absolutely. We use industry-standard encryption for all payments and personal data. Read our Privacy Policy for full details.' },
  ]
  return (
    <div>
      <Section title="Frequently Asked Questions">
        <p>Find quick answers to the most common questions from our customers.</p>
      </Section>
      <div className="space-y-3 my-8 not-prose">
        {faqs.map((f, i) => (
          <Card key={i}>
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-start gap-2">
                <HelpCircle className="size-5 text-emerald-600 shrink-0 mt-0.5" />
                {f.q}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 pl-7">{f.a}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <Section title="Still Have Questions?">
        <p>Our support team is available 24/7 to help you.</p>
      </Section>
      <ContactCard />
    </div>
  )
}

/* ============================ PRIVACY ============================ */

function PrivacyContent() {
  return (
    <div>
      <LastUpdated />
      <Section title="1. Introduction">
        <p>
          {COMPANY.name} ("we", "us", "our") respects your privacy and is committed to protecting
          your personal data. This Privacy Policy explains how we collect, use, store, share and
          safeguard your information when you use our website and services.
        </p>
        <p>
          By accessing or using {COMPANY.name}, you consent to the practices described in this
          policy.
        </p>
      </Section>

      <Section title="2. Information We Collect">
        <p>We collect the following types of information:</p>
        <ul className="space-y-2">
          <li className="flex items-start gap-2"><span>•</span> <span><strong>Account Information:</strong> Name, email address, phone number, password (hashed) when you register.</span></li>
          <li className="flex items-start gap-2"><span>•</span> <span><strong>Profile Information:</strong> Profile picture, saved addresses, preferences.</span></li>
          <li className="flex items-start gap-2"><span>•</span> <span><strong>Order Information:</strong> Products ordered, payment method, delivery address, order history.</span></li>
          <li className="flex items-start gap-2"><span>•</span> <span><strong>Payment Information:</strong> We do not store full card details. Payments are processed securely through trusted payment gateways.</span></li>
          <li className="flex items-start gap-2"><span>•</span> <span><strong>Device & Usage Information:</strong> IP address, browser type, pages visited, cookies, and similar data.</span></li>
          <li className="flex items-start gap-2"><span>•</span> <span><strong>Communications:</strong> Messages you send to customer support or sellers.</span></li>
        </ul>
      </Section>

      <Section title="3. How We Use Your Information">
        <p>We use your information to:</p>
        <ul className="space-y-2">
          <li className="flex items-start gap-2"><CheckCircle2 className="size-5 text-emerald-500 shrink-0 mt-0.5" /> <span>Create and manage your account.</span></li>
          <li className="flex items-start gap-2"><CheckCircle2 className="size-5 text-emerald-500 shrink-0 mt-0.5" /> <span>Process and deliver your orders.</span></li>
          <li className="flex items-start gap-2"><CheckCircle2 className="size-5 text-emerald-500 shrink-0 mt-0.5" /> <span>Process payments and issue refunds.</span></li>
          <li className="flex items-start gap-2"><CheckCircle2 className="size-5 text-emerald-500 shrink-0 mt-0.5" /> <span>Send order updates, notifications and customer support responses.</span></li>
          <li className="flex items-start gap-2"><CheckCircle2 className="size-5 text-emerald-500 shrink-0 mt-0.5" /> <span>Personalize your shopping experience and recommendations.</span></li>
          <li className="flex items-start gap-2"><CheckCircle2 className="size-5 text-emerald-500 shrink-0 mt-0.5" /> <span>Prevent fraud and enhance platform security.</span></li>
          <li className="flex items-start gap-2"><CheckCircle2 className="size-5 text-emerald-500 shrink-0 mt-0.5" /> <span>Comply with legal obligations.</span></li>
        </ul>
      </Section>

      <Section title="4. Sharing Your Information">
        <p>
          We do not sell your personal data. We may share your information with:
        </p>
        <ul className="space-y-2">
          <li className="flex items-start gap-2"><span>•</span> <span><strong>Sellers:</strong> Only the information necessary to fulfil your order (name, address, phone).</span></li>
          <li className="flex items-start gap-2"><span>•</span> <span><strong>Logistics Partners:</strong> To deliver your orders.</span></li>
          <li className="flex items-start gap-2"><span>•</span> <span><strong>Payment Gateways:</strong> To process your payments securely.</span></li>
          <li className="flex items-start gap-2"><span>•</span> <span><strong>Service Providers:</strong> Cloud hosting, analytics and email services under strict contracts.</span></li>
          <li className="flex items-start gap-2"><span>•</span> <span><strong>Legal Authorities:</strong> When required by law or to protect our rights.</span></li>
        </ul>
      </Section>

      <Section title="5. Data Security">
        <p>
          We implement industry-standard security measures including SSL encryption, hashed
          passwords (using scrypt), secure server infrastructure, and restricted access controls.
          However, no method of transmission over the internet is 100% secure, and we cannot
          guarantee absolute security.
        </p>
      </Section>

      <Section title="6. Data Retention">
        <p>
          We retain your personal data for as long as your account is active or as needed to provide
          services. Order and transaction records are retained as required by law (typically 7
          years for tax purposes). You may request deletion of your account at any time.
        </p>
      </Section>

      <Section title="7. Your Rights">
        <p>You have the right to:</p>
        <ul className="space-y-2">
          <li className="flex items-start gap-2"><CheckCircle2 className="size-5 text-emerald-500 shrink-0 mt-0.5" /> <span>Access the personal data we hold about you.</span></li>
          <li className="flex items-start gap-2"><CheckCircle2 className="size-5 text-emerald-500 shrink-0 mt-0.5" /> <span>Correct inaccurate or incomplete data.</span></li>
          <li className="flex items-start gap-2"><CheckCircle2 className="size-5 text-emerald-500 shrink-0 mt-0.5" /> <span>Request deletion of your data (subject to legal requirements).</span></li>
          <li className="flex items-start gap-2"><CheckCircle2 className="size-5 text-emerald-500 shrink-0 mt-0.5" /> <span>Opt out of marketing communications.</span></li>
          <li className="flex items-start gap-2"><CheckCircle2 className="size-5 text-emerald-500 shrink-0 mt-0.5" /> <span>Withdraw consent for data processing.</span></li>
        </ul>
        <p>To exercise any of these rights, email us at <a href={`mailto:${COMPANY.email}`} className="text-emerald-600 dark:text-emerald-400 font-medium">{COMPANY.email}</a>.</p>
      </Section>

      <Section title="8. Cookies">
        <p>
          We use cookies to improve your browsing experience, remember preferences and analyse
          traffic. See our <button onClick={() => useNavigationStore.getState().navigateToInfo('cookies')} className="text-emerald-600 dark:text-emerald-400 font-medium underline">Cookie Policy</button> for details.
        </p>
      </Section>

      <Section title="9. Children's Privacy">
        <p>
          {COMPANY.name} is not intended for children under 18. We do not knowingly collect personal
          data from minors. If you believe a child has provided us data, please contact us and we
          will delete it.
        </p>
      </Section>

      <Section title="10. Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. Changes will be posted on this page
          with an updated "Last updated" date. We encourage you to review this policy periodically.
        </p>
      </Section>

      <Section title="11. Contact Us">
        <p>If you have any questions about this Privacy Policy, contact us:</p>
      </Section>
      <ContactCard />
    </div>
  )
}

/* ============================ TERMS ============================ */

function TermsContent() {
  return (
    <div>
      <LastUpdated />
      <Section title="1. Acceptance of Terms">
        <p>
          These Terms of Service ("Terms") govern your access to and use of the {COMPANY.name}
          website and services. By using {COMPANY.name}, you agree to be bound by these Terms. If
          you do not agree, please do not use our services.
        </p>
      </Section>

      <Section title="2. Eligibility">
        <p>
          You must be at least 18 years old and legally capable of entering into contracts to use
          {COMPANY.name}. By registering, you confirm that you meet these requirements.
        </p>
      </Section>

      <Section title="3. Your Account">
        <p>You are responsible for:</p>
        <ul className="space-y-2">
          <li className="flex items-start gap-2"><CheckCircle2 className="size-5 text-emerald-500 shrink-0 mt-0.5" /> <span>Maintaining the confidentiality of your password.</span></li>
          <li className="flex items-start gap-2"><CheckCircle2 className="size-5 text-emerald-500 shrink-0 mt-0.5" /> <span>All activities that occur under your account.</span></li>
          <li className="flex items-start gap-2"><CheckCircle2 className="size-5 text-emerald-500 shrink-0 mt-0.5" /> <span>Providing accurate and complete information.</span></li>
          <li className="flex items-start gap-2"><CheckCircle2 className="size-5 text-emerald-500 shrink-0 mt-0.5" /> <span>Notifying us immediately of any unauthorized access.</span></li>
        </ul>
      </Section>

      <Section title="4. Orders & Payments">
        <p>
          When you place an order, you make an offer to purchase the selected products. An order is
          confirmed only when we send an order confirmation. Prices are subject to change without
          notice. You agree to pay the total amount shown at checkout, including taxes and shipping.
        </p>
        <p>
          We reserve the right to cancel orders due to pricing errors, stock unavailability,
          suspected fraud, or other valid reasons. In such cases, any payment made will be fully
          refunded.
        </p>
      </Section>

      <Section title="5. Product Information">
        <p>
          We strive to display accurate product information including descriptions, images and
          prices. However, we do not warrant that product information is always accurate, complete
          or current. Colours and appearances may vary due to display settings.
        </p>
      </Section>

      <Section title="6. Seller Obligations">
        <p>
          Sellers on {COMPANY.name} are responsible for the accuracy of their listings, product
          quality, timely dispatch, and resolving customer issues. {COMPANY.name} acts as an
          intermediary and is not directly responsible for seller actions, though we take strict
          action against sellers who violate our policies.
        </p>
      </Section>

      <Section title="7. Prohibited Conduct">
        <p>You agree not to:</p>
        <ul className="space-y-2">
          <li className="flex items-start gap-2"><span>•</span> <span>Use the service for any unlawful purpose.</span></li>
          <li className="flex items-start gap-2"><span>•</span> <span>Post false, misleading or fraudulent content.</span></li>
          <li className="flex items-start gap-2"><span>•</span> <span>Attempt to access unauthorized areas of the platform.</span></li>
          <li className="flex items-start gap-2"><span>•</span> <span>Use bots, scrapers or automated tools to extract data.</span></li>
          <li className="flex items-start gap-2"><span>•</span> <span>Infringe on intellectual property rights.</span></li>
          <li className="flex items-start gap-2"><span>•</span> <span>Manipulate reviews, ratings or prices.</span></li>
          <li className="flex items-start gap-2"><span>•</span> <span>Harass other users or sellers.</span></li>
        </ul>
      </Section>

      <Section title="8. Intellectual Property">
        <p>
          All content on {COMPANY.name} — including logos, designs, text, graphics and software — is
          the property of {COMPANY.name} or its licensors and is protected by Indian and
          international intellectual property laws. You may not copy, modify or distribute our
          content without permission.
        </p>
      </Section>

      <Section title="9. Returns & Refunds">
        <p>
          Returns and refunds are governed by our <button onClick={() => useNavigationStore.getState().navigateToInfo('refund-policy')} className="text-emerald-600 dark:text-emerald-400 font-medium underline">Refund Policy</button> and <button onClick={() => useNavigationStore.getState().navigateToInfo('returns')} className="text-emerald-600 dark:text-emerald-400 font-medium underline">Returns Policy</button>.
        </p>
      </Section>

      <Section title="10. Disclaimers">
        <p>
          {COMPANY.name} is provided on an "as is" and "as available" basis. We do not warrant that
          the service will be uninterrupted, error-free or secure. To the fullest extent permitted
          by law, we disclaim all warranties, express or implied.
        </p>
      </Section>

      <Section title="11. Limitation of Liability">
        <p>
          To the fullest extent permitted by law, {COMPANY.name} shall not be liable for any
          indirect, incidental, consequential or punitive damages arising from your use of the
          service. Our total liability shall not exceed the amount you paid for the relevant order.
        </p>
      </Section>

      <Section title="12. Governing Law">
        <p>
          These Terms are governed by the laws of India. Any disputes shall be subject to the
          exclusive jurisdiction of the courts in Tirupati, Andhra Pradesh, India.
        </p>
      </Section>

      <Section title="13. Changes to Terms">
        <p>
          We may update these Terms at any time. Continued use of {COMPANY.name} after changes are
          posted constitutes acceptance of the updated Terms.
        </p>
      </Section>

      <Section title="14. Contact">
        <p>For questions about these Terms, contact us:</p>
      </Section>
      <ContactCard />
    </div>
  )
}

/* ============================ REFUND POLICY ============================ */

function RefundPolicyContent() {
  return (
    <div>
      <LastUpdated />
      <Section title="1. Refund Eligibility">
        <p>
          Refunds are issued for orders that are cancelled before shipping, returned within the
          eligible return window, or found to be defective/damaged on arrival. The item must be
          unused, in original packaging, and accompanied by the original invoice.
        </p>
      </Section>

      <Section title="2. Refund Scenarios">
        <ul className="space-y-2">
          <li className="flex items-start gap-2"><CheckCircle2 className="size-5 text-emerald-500 shrink-0 mt-0.5" /> <span><strong>Order cancelled before shipping:</strong> Full refund within 3–5 business days.</span></li>
          <li className="flex items-start gap-2"><CheckCircle2 className="size-5 text-emerald-500 shrink-0 mt-0.5" /> <span><strong>Order returned (eligible category):</strong> Refund after inspection, within 3–5 business days of receiving the item.</span></li>
          <li className="flex items-start gap-2"><CheckCircle2 className="size-5 text-emerald-500 shrink-0 mt-0.5" /> <span><strong>Defective / damaged product:</strong> Full refund or replacement, no questions asked.</span></li>
          <li className="flex items-start gap-2"><CheckCircle2 className="size-5 text-emerald-500 shrink-0 mt-0.5" /> <span><strong>Wrong product delivered:</strong> Full refund or correct product shipped free of cost.</span></li>
          <li className="flex items-start gap-2"><CheckCircle2 className="size-5 text-emerald-500 shrink-0 mt-0.5" /> <span><strong>Payment failed but money debited:</strong> Auto-refund within 5–7 business days.</span></li>
        </ul>
      </Section>

      <Section title="3. Refund Methods">
        <p>Refunds are processed to the original payment method:</p>
        <ul className="space-y-2">
          <li className="flex items-start gap-2"><span>•</span> <span><strong>UPI / Wallets:</strong> 1–3 business days</span></li>
          <li className="flex items-start gap-2"><span>•</span> <span><strong>Credit / Debit Cards:</strong> 5–7 business days</span></li>
          <li className="flex items-start gap-2"><span>•</span> <span><strong>Net Banking:</strong> 5–7 business days</span></li>
          <li className="flex items-start gap-2"><span>•</span> <span><strong>COD:</strong> Refund to bank account or wallet within 7 business days</span></li>
          <li className="flex items-start gap-2"><span>•</span> <span><strong>ShopZone Wallet:</strong> Instant (recommended for fastest refund)</span></li>
        </ul>
      </Section>

      <Section title="4. Partial Refunds">
        <p>
          In certain cases, partial refunds may be issued, such as when returned items are missing
          accessories, have damaged packaging, or show signs of use. The deduction amount will be
          communicated before the refund is processed.
        </p>
      </Section>

      <Section title="5. Non-Refundable Cases">
        <ul className="space-y-2">
          <li className="flex items-start gap-2"><span>•</span> <span>Items returned outside the eligible return window.</span></li>
          <li className="flex items-start gap-2"><span>•</span> <span>Used or damaged items (not defective at delivery).</span></li>
          <li className="flex items-start gap-2"><span>•</span> <span>Non-returnable categories (innerwear, perishables, etc.).</span></li>
          <li className="flex items-start gap-2"><span>•</span> <span>Gift cards and digital products.</span></li>
        </ul>
      </Section>

      <Section title="6. How to Request a Refund">
        <ol className="space-y-2 list-decimal list-inside">
          <li>Go to <strong>My Orders</strong> and select the order.</li>
          <li>Click <strong>"Request Return / Refund"</strong>.</li>
          <li>Choose the reason and upload photos if the item is damaged.</li>
          <li>Submit the request. You will receive updates by email and SMS.</li>
        </ol>
      </Section>

      <Section title="7. Contact">
        <p>For refund-related queries, reach out to us:</p>
      </Section>
      <ContactCard />
    </div>
  )
}

/* ============================ SITEMAP ============================ */

function SitemapContent({ navigate, navigateHome }: { navigate: (p: InfoPage) => void; navigateHome: () => void }) {
  const groups = [
    {
      title: 'Shop',
      links: [
        { label: 'Home', action: () => navigateHome() },
        { label: 'All Products', action: () => { useNavigationStore.getState().navigate('products') } },
        { label: 'Cart', action: () => { useNavigationStore.getState().navigate('cart') } },
        { label: 'Track Order', action: () => { useNavigationStore.getState().navigate('user-dashboard', { tab: 'orders' }) } },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', action: () => navigate('about') },
        { label: 'Contact Us', action: () => navigate('contact') },
        { label: 'Careers', action: () => navigate('careers') },
        { label: 'Blog', action: () => navigate('blog') },
        { label: 'Press', action: () => navigate('press') },
      ],
    },
    {
      title: 'Customer Service',
      links: [
        { label: 'Help Center', action: () => navigate('help') },
        { label: 'Returns & Refunds', action: () => navigate('returns') },
        { label: 'Shipping Info', action: () => navigate('shipping') },
        { label: 'FAQ', action: () => navigate('faq') },
      ],
    },
    {
      title: 'Policies',
      links: [
        { label: 'Privacy Policy', action: () => navigate('privacy') },
        { label: 'Terms of Service', action: () => navigate('terms') },
        { label: 'Refund Policy', action: () => navigate('refund-policy') },
        { label: 'Cookie Policy', action: () => navigate('cookies') },
      ],
    },
    {
      title: 'Account',
      links: [
        { label: 'Sign In', action: () => { useNavigationStore.getState().navigate('auth') } },
        { label: 'My Dashboard', action: () => { useNavigationStore.getState().navigate('user-dashboard') } },
        { label: 'Become a Seller', action: () => { useNavigationStore.getState().navigate('seller-panel') } },
        { label: 'Admin Panel', action: () => { useNavigationStore.getState().navigate('admin-panel') } },
      ],
    },
  ]

  return (
    <div>
      <Section title="Sitemap">
        <p>
          Use this sitemap to quickly navigate to any section of {COMPANY.name}. Click any link
          below to jump to that page.
        </p>
      </Section>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 my-8 not-prose">
        {groups.map((g) => (
          <Card key={g.title}>
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2">
                <Network className="size-4 text-emerald-600" />
                {g.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {g.links.map((l) => (
                  <li key={l.label}>
                    <button
                      onClick={l.action}
                      className="text-sm text-zinc-600 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                    >
                      <span className="size-1 rounded-full bg-emerald-500" />
                      {l.label}
                    </button>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

/* ============================ COOKIES ============================ */

function CookiesContent() {
  return (
    <div>
      <LastUpdated />
      <Section title="1. What Are Cookies?">
        <p>
          Cookies are small text files stored on your device when you visit a website. They help us
          remember your preferences, keep you logged in, understand how you use our site, and
          improve your overall experience.
        </p>
      </Section>

      <Section title="2. Types of Cookies We Use">
        <ul className="space-y-2">
          <li className="flex items-start gap-2"><CheckCircle2 className="size-5 text-emerald-500 shrink-0 mt-0.5" /> <span><strong>Essential Cookies:</strong> Required for the website to function (login, cart, security). Cannot be disabled.</span></li>
          <li className="flex items-start gap-2"><CheckCircle2 className="size-5 text-emerald-500 shrink-0 mt-0.5" /> <span><strong>Performance & Analytics Cookies:</strong> Help us understand how visitors use our site so we can improve it.</span></li>
          <li className="flex items-start gap-2"><CheckCircle2 className="size-5 text-emerald-500 shrink-0 mt-0.5" /> <span><strong>Functionality Cookies:</strong> Remember your preferences like language, region and theme.</span></li>
          <li className="flex items-start gap-2"><CheckCircle2 className="size-5 text-emerald-500 shrink-0 mt-0.5" /> <span><strong>Marketing Cookies:</strong> Used to show you relevant products and offers based on your interests.</span></li>
        </ul>
      </Section>

      <Section title="3. How We Use Cookies">
        <ul className="space-y-2">
          <li className="flex items-start gap-2"><span>•</span> <span>Keep you logged in to your account.</span></li>
          <li className="flex items-start gap-2"><span>•</span> <span>Remember items in your shopping cart.</span></li>
          <li className="flex items-start gap-2"><span>•</span> <span>Remember your theme (dark/light) and language.</span></li>
          <li className="flex items-start gap-2"><span>•</span> <span>Analyze traffic and page performance.</span></li>
          <li className="flex items-start gap-2"><span>•</span> <span>Show personalized product recommendations.</span></li>
          <li className="flex items-start gap-2"><span>•</span> <span>Prevent fraud and abuse.</span></li>
        </ul>
      </Section>

      <Section title="4. Third-Party Cookies">
        <p>
          We use trusted third-party services (such as analytics and payment providers) that may
          set their own cookies. These providers have their own privacy policies governing how they
          use cookies.
        </p>
      </Section>

      <Section title="5. Managing Cookies">
        <p>
          You can control and delete cookies through your browser settings. Most browsers allow you
          to refuse cookies or alert you when cookies are being sent. Please note that disabling
          essential cookies may affect the functionality of the website.
        </p>
        <p>Here are links to manage cookies in popular browsers:</p>
        <ul className="space-y-2">
          <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-emerald-600 dark:text-emerald-400 hover:underline">Google Chrome</a></li>
          <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-emerald-600 dark:text-emerald-400 hover:underline">Mozilla Firefox</a></li>
          <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-emerald-600 dark:text-emerald-400 hover:underline">Safari</a></li>
          <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-emerald-600 dark:text-emerald-400 hover:underline">Microsoft Edge</a></li>
        </ul>
      </Section>

      <Section title="6. Changes to This Policy">
        <p>
          We may update this Cookie Policy from time to time. Any changes will be posted on this
          page with an updated date.
        </p>
      </Section>

      <Section title="7. Contact">
        <p>For questions about our use of cookies, contact us:</p>
      </Section>
      <ContactCard />
    </div>
  )
}
