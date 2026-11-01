# Blog Insight

[한국어](README.md) · English

A **Next.js scaffold** for starting an ad-supported blog. It comes with SEO metadata helpers, Google AdSense and Coupang Partners ad slots, and post list components. The posts are still sample data (`mockPosts`) and no database is attached.

## What's in it

- `lib/seo/metadata.ts` — `generateMetadata()` builds the title, description and OG tags for each page, with defaults in `defaultSEO`
- `components/ads/` — AdSense and Coupang Partners slots; in development without a key they show a placeholder box
- `components/blog/` — post card and list
- `components/layout/` — header and footer
- The root layout loads the AdSense and Google Analytics scripts

## Run

```bash
npm install
npm run dev   # http://localhost:3000
```

Variables for `.env.local` (all optional):

```env
NEXT_PUBLIC_SITE_URL=https://example.com
NEXT_PUBLIC_ADSENSE_ID=ca-pub-XXXXXXXXXXXXXXXX
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_COUPANG_PARTNER_ID=your-coupang-partner-id
```

## Layout

```
app/                 root layout (SEO, ad scripts) · home page
components/
  ads/               AdSense.tsx · CoupangPartners.tsx
  blog/              PostCard.tsx · PostList.tsx
  layout/            Header.tsx · Footer.tsx
lib/
  seo/metadata.ts    metadata helpers
  utils/cn.ts        Tailwind class merging
types/blog.ts        post type
```

## Still to add

- Post storage (a database) and an editor
- Sitemap, RSS, structured data (JSON-LD), robots.txt

## Stack

Next.js 16 · TypeScript · Tailwind CSS · Google AdSense · Coupang Partners · Google Analytics

## License

[MIT](LICENSE)
