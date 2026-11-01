# Blog Insight

한국어 · [English](README.en.md)

광고로 운영하는 블로그를 시작할 때 쓰는 **Next.js 뼈대**입니다. SEO 메타데이터 도우미, Google AdSense · 쿠팡파트너스 광고 자리, 글 목록 부품까지 들어 있습니다. 글 데이터는 아직 예시(`mockPosts`)이고 DB는 붙어 있지 않습니다.

## 들어 있는 것

- `lib/seo/metadata.ts` — 페이지마다 제목 · 설명 · OG 태그를 만드는 `generateMetadata()`와 기본값 `defaultSEO`
- `components/ads/` — AdSense · 쿠팡파트너스 광고 자리. 개발 중 키가 없으면 자리 표시 상자를 보여 줍니다
- `components/blog/` — 글 카드와 목록
- `components/layout/` — 머리 · 바닥
- 루트 레이아웃에서 AdSense · Google Analytics 스크립트를 불러옵니다

## 실행

```bash
npm install
npm run dev   # http://localhost:3000
```

`.env.local`에 넣을 것(전부 선택):

```env
NEXT_PUBLIC_SITE_URL=https://example.com
NEXT_PUBLIC_ADSENSE_ID=ca-pub-XXXXXXXXXXXXXXXX
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_COUPANG_PARTNER_ID=your-coupang-partner-id
```

## 구조

```
app/                 루트 레이아웃(SEO · 광고 스크립트) · 첫 화면
components/
  ads/               AdSense.tsx · CoupangPartners.tsx
  blog/              PostCard.tsx · PostList.tsx
  layout/            Header.tsx · Footer.tsx
lib/
  seo/metadata.ts    메타데이터 도우미
  utils/cn.ts        Tailwind 클래스 합치기
types/blog.ts        글 타입
```

## 다음에 붙일 것

- 글 저장(DB)과 작성 화면
- 사이트맵 · RSS · 구조화 데이터(JSON-LD) · robots.txt

## 스택

Next.js 16 · TypeScript · Tailwind CSS · Google AdSense · 쿠팡파트너스 · Google Analytics

## 라이선스

[MIT](LICENSE)
