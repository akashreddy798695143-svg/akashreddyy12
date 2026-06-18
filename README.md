# 🛍️ ShopZone — Full-Featured E-commerce Marketplace

A world-class e-commerce marketplace (Amazon / Flipkart / Meesho inspired) built with **Next.js 16**, **React 19**, **TypeScript**, **Tailwind CSS 4**, **shadcn/ui**, **Framer Motion**, **Zustand**, and **Prisma**.

> Single-page-application architecture — all routing happens client-side via a Zustand navigation store, with API routes powering the backend.

---

## ✨ Features

- **🔐 Authentication** — Email/password registration & login, "Continue with Google" (Gmail) flow, forgot-password OTP, persisted sessions via `localStorage`.
- **🏠 Homepage** — Hero banners, category grid, flash deals, trending products, best sellers, new arrivals, personalized recommendations.
- **📦 Products** — 50+ products across 25 categories & 25 brands, advanced filters (price, brand, rating, discount), sort, search, grid/list views.
- **🔍 Product Detail** — Image gallery, color/size variants, specifications, highlights, reviews, related products, add-to-cart / wishlist.
- **🛒 Cart & Checkout** — Multi-step checkout, address management, coupon codes, order summary, payment method selection, place order.
- **👤 User Dashboard** — Profile, orders, addresses, wishlist, wallet, referrals, notifications, settings.
- **🏪 Seller Panel** — Dashboard, product management, orders, analytics.
- **🛠️ Admin Panel** — Stats, users, products, orders, banners, coupons.
- **🤖 AI Chatbot** — In-app assistant powered by the LLM skill.
- **🌗 Dark / Light Mode** — Theme toggle with `next-themes`.
- **📱 Fully Responsive** — Mobile-first design.

---

## 🧱 Tech Stack

| Layer        | Technology                                             |
| ------------ | ------------------------------------------------------ |
| Framework    | Next.js 16 (App Router) + React 19                     |
| Language     | TypeScript 5                                           |
| Styling      | Tailwind CSS 4 + shadcn/ui (New York)                  |
| State        | Zustand (client) + TanStack Query (server)             |
| Animation    | Framer Motion                                          |
| Database     | Prisma ORM — **SQLite** (dev) / **PostgreSQL** (prod)  |
| Auth         | Custom JWT-style sessions with `crypto.scryptSync`     |
| Notifications| Sonner toasts                                          |

---

## 🚀 Local Development

```bash
# 1. Install dependencies
bun install

# 2. Set up the database (SQLite — no external service needed)
cp .env.example .env
bun run db:push

# 3. (Optional) Seed demo data
#    Visit http://localhost:3000/api/seed in your browser, or:
curl -X POST http://localhost:3000/api/seed

# 4. Start the dev server
bun run dev
```

Open `http://localhost:3000` in your browser.

### Default Seed Accounts

| Role    | Email                 | Password    |
| ------- | --------------------- | ----------- |
| Admin   | `admin@shopzone.com`  | `admin123`  |
| Seller  | `seller@shopzone.com` | `seller123` |
| Customer| `customer@shopzone.com` | `customer123` |

---

## ☁️ Deploy to Vercel

Vercel serverless functions have a read-only filesystem, so the SQLite database used locally won't work in production. The project ships with a PostgreSQL schema (`prisma/schema.vercel.prisma`) that Vercel uses automatically via the build command in `vercel.json`.

### Step 1 — Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit — ShopZone"
git remote add origin https://github.com/<your-username>/marketshop.git
git branch -M main
git push -u origin main
```

### Step 2 — Create a PostgreSQL Database

Pick one (all have free tiers):

- **Vercel Postgres** (easiest) — create from the Vercel dashboard → Storage → Create Database → Postgres.
- **Neon** ([neon.tech](https://neon.tech)) — copy the connection string (looks like `postgres://default:...@ep-xxx.neon.tech/verceldb?sslmode=require`).
- **Supabase** ([supabase.com](https://supabase.com)) — Settings → Database → Connection string → URI.

### Step 3 — Import to Vercel

1. Go to [vercel.com/new](https://vercel.com/new).
2. Import your GitHub repository.
3. Framework preset: **Next.js** (auto-detected).
4. Build command & install command are already configured via `vercel.json`.

### Step 4 — Set Environment Variables

In **Vercel → Settings → Environment Variables**, add:

| Name           | Value                                                | Environments              |
| -------------- | ---------------------------------------------------- | ------------------------- |
| `DATABASE_URL` | `postgres://...` or `postgresql://...` (your string) | Production, Preview, Dev  |

### Step 5 — Deploy

Click **Deploy**. The build runs:
```
cp prisma/schema.vercel.prisma prisma/schema.prisma
npx prisma generate
next build
```

### Step 6 — Initialize the Database

After deployment, push the schema and seed the data:

```bash
# Option A: visit the seed endpoint in your browser
https://<your-app>.vercel.app/api/seed   (send a POST — see below)

# Option B: run prisma db push against your production DB locally
DATABASE_URL="postgres://your-prod-url" npx prisma db push
curl -X POST https://<your-app>.vercel.app/api/seed
```

The seed endpoint creates 25 categories, 25 brands, 10 sellers, 50+ products, sample reviews, and coupons.

---

## 📁 Project Structure

```
├── prisma/
│   ├── schema.prisma              # SQLite (local dev)
│   └── schema.vercel.prisma       # PostgreSQL (Vercel production)
├── src/
│   ├── app/
│   │   ├── api/                   # API routes (serverless functions)
│   │   │   ├── auth/              # register, login, google, forgot-password
│   │   │   ├── products/          # CRUD + search
│   │   │   ├── cart/              # cart operations
│   │   │   ├── orders/            # order placement
│   │   │   ├── wishlist/          # wishlist operations
│   │   │   ├── seed/              # database seeding
│   │   │   └── ...                # categories, brands, coupons, reviews, admin
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx               # SPA entry — switches views via Zustand
│   ├── components/
│   │   ├── ecommerce/             # Header, Footer, Homepage, Auth, Products,
│   │   │                          # ProductDetail, Cart, Checkout, UserDashboard,
│   │   │                          # SellerPanel, AdminPanel, AIChatbot
│   │   └── ui/                    # shadcn/ui component library
│   ├── hooks/                     # use-toast, use-mobile
│   ├── lib/                       # db, auth-utils, mock-data, utils
│   └── store/                     # navigation, cart, wishlist, auth (Zustand)
├── .env.example
├── next.config.ts                 # image remote patterns
├── package.json
├── tsconfig.json
├── vercel.json                    # Vercel build config
└── README.md
```

---

## 🔧 How Vercel Compatibility Was Achieved

1. **Database** — SQLite (local) → PostgreSQL (Vercel). Vercel's serverless filesystem is read-only, so a hosted Postgres is required.
2. **Schema swapping** — `vercel.json` build command copies `schema.vercel.prisma` over `schema.prisma` before `prisma generate` so the generated client matches the production DB.
3. **Socket.IO mini-service** — excluded from the Vercel build (`/mini-services/` is in `.gitignore` and `tsconfig exclude`). Real-time features are simulated client-side.
4. **Images** — `next.config.ts` whitelists `picsum.photos` and `images.unsplash.com` via `remotePatterns`.
5. **No `output: "standalone"`** — removed; Vercel handles the build output natively.

---

## 🧪 Available Scripts

| Command             | Description                              |
| ------------------- | ---------------------------------------- |
| `bun run dev`       | Start dev server on `http://localhost:3000` |
| `bun run lint`      | Run ESLint                               |
| `bun run db:push`   | Push Prisma schema to the database       |
| `bun run db:generate` | Regenerate Prisma Client               |
| `bun run db:migrate`| Create a Prisma migration               |
| `bun run db:reset`  | Reset the database (dev only)            |

---

## 📝 Notes

- The app is a **SPA** — there is one route (`/`) and views are switched client-side via the `navigation-store` Zustand store. This keeps the experience snappy and avoids full page reloads.
- Product images use `picsum.photos` (seeded random images) and `images.unsplash.com`.
- All passwords are hashed with `crypto.scryptSync` before being stored.

---

## 📄 License

MIT — free to use, modify, and distribute.
# akashreddyy12
