# Blog Insight

다양한 주제의 인사이트 있는 글들을 제공하는 콘텐츠 플랫폼입니다.

## 주요 기능

- ✅ SEO 최적화된 블로그 플랫폼
- ✅ Google AdSense 통합
- ✅ 쿠팡파트너스 광고 통합
- ✅ 반응형 디자인
- ✅ TypeScript + Next.js 15
- ✅ Tailwind CSS 스타일링

## 시작하기

### 1. 의존성 설치

```bash
npm install
```

### 2. 환경변수 설정

`.env.example` 파일을 복사하여 `.env.local` 파일을 생성합니다:

```bash
cp .env.example .env.local
```

그리고 필요한 환경변수를 설정합니다:

```env
NEXT_PUBLIC_ADSENSE_ID=ca-pub-XXXXXXXXXXXXXXXX
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_COUPANG_PARTNER_ID=your-coupang-partner-id
```

### 3. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인합니다.

## 프로젝트 구조

```
blog-insight/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # 루트 레이아웃 (SEO, 광고 스크립트)
│   └── page.tsx           # 홈페이지
├── components/            # React 컴포넌트
│   ├── layout/           # 레이아웃 컴포넌트
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── blog/             # 블로그 관련 컴포넌트
│   │   ├── PostCard.tsx
│   │   └── PostList.tsx
│   └── ads/              # 광고 컴포넌트
│       ├── AdSense.tsx
│       └── CoupangPartners.tsx
├── lib/                   # 유틸리티 함수
│   ├── seo/              # SEO 관련
│   │   └── metadata.ts
│   └── utils/
│       └── cn.ts         # Tailwind 클래스 유틸리티
└── types/                # TypeScript 타입 정의
    └── blog.ts
```

## 다음 단계

### 데이터베이스 연결

- Prisma 또는 Drizzle ORM 설정
- PostgreSQL 또는 MongoDB 연결
- 블로그 포스트 CRUD API 구현

### 콘텐츠 수집 시스템

- 콘텐츠 분석 및 처리

### 관리자 대시보드

- 포스트 관리
- 통계 및 분석
- 광고 수익 트래킹

### SEO 고도화

- 사이트맵 자동 생성
- RSS 피드
- 구조화된 데이터 (JSON-LD)
- robots.txt 최적화

## 기술 스택

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom Components
- **Analytics**: Google Analytics
- **Ads**: Google AdSense, Coupang Partners

## 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다.
