# Next.js E-Commerce Boilerplate

This is a minimal e-commerce boilerplate built with [Next.js](https://nextjs.org/) (App Router, TypeScript, Tailwind CSS), including essential pages and basic cart functionality.

## Features

- Next.js (App Router & TypeScript)
- Product listing and product details pages
- Cart functionality (add/remove/view, stateful via context)
- Uses sample products (edit `src/data/products.ts` to add more)
- Clean layout and ready for custom components/styles

## Structure

```
src/
├── app/
│   ├── page.tsx              # Home page (edit to customize)
│   ├── products/
│   │   ├── page.tsx          # Product list
│   │   └── [id]/page.tsx     # Product details (dynamic route)
│   ├── cart/page.tsx         # Cart page
│   └── layout.tsx            # Global context/state and layout
├── components/
│   ├── ProductList.tsx
│   ├── ProductCard.tsx
│   └── Cart.tsx
├── context/
│   └── CartContext.tsx       # Cart state management
└── data/
    └── products.ts           # Sample product data
```

## Getting Started

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app.

## Next Steps

- Replace product data and add more fields to `src/data/products.ts`
- Customize UI components and layout
- Add authentication and checkout logic
- Integrate payment provider, backend, or persistent storage

---

This project aims to provide a quick starting point for custom e-commerce solutions built with Next.js.
