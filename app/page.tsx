import { PostList } from "@/components/blog/PostList";
import { AdSense } from "@/components/ads/AdSense";
import { BlogPost } from "@/types/blog";

// 임시 데이터 - 나중에 API나 데이터베이스에서 가져올 예정
const mockPosts: BlogPost[] = [
  {
    id: "1",
    title: "Next.js 15와 React 19로 시작하는 현대적인 웹 개발",
    slug: "nextjs-15-react-19-modern-web-development",
    excerpt:
      "최신 Next.js 15와 React 19의 새로운 기능들을 살펴보고, 실제 프로젝트에 어떻게 적용할 수 있는지 알아봅니다.",
    content: "",
    category: "웹 개발",
    tags: ["Next.js", "React", "웹개발"],
    author: {
      name: "Blog Insight",
    },
    publishedAt: new Date("2025-12-01"),
    readingTime: 8,
    views: 1250,
    seo: {},
  },
  {
    id: "2",
    title: "SEO 최적화를 위한 필수 체크리스트",
    slug: "essential-seo-checklist",
    excerpt:
      "검색 엔진 최적화를 위해 반드시 확인해야 할 항목들과 실전 팁을 공유합니다.",
    content: "",
    category: "마케팅",
    tags: ["SEO", "마케팅", "검색엔진"],
    author: {
      name: "Blog Insight",
    },
    publishedAt: new Date("2025-11-28"),
    readingTime: 6,
    views: 980,
    seo: {},
  },
  {
    id: "3",
    title: "TypeScript 5.0의 새로운 기능 완벽 가이드",
    slug: "typescript-5-new-features-guide",
    excerpt:
      "TypeScript 5.0에서 추가된 새로운 기능들을 예제와 함께 자세히 알아봅니다.",
    content: "",
    category: "프로그래밍",
    tags: ["TypeScript", "JavaScript", "프로그래밍"],
    author: {
      name: "Blog Insight",
    },
    publishedAt: new Date("2025-11-25"),
    readingTime: 10,
    views: 1500,
    seo: {},
  },
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-12 mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Blog Insight
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          다양한 주제의 인사이트 있는 글들을 만나보세요.
          <br />
          웹 개발, 마케팅, 비즈니스, 라이프스타일까지
        </p>
      </section>

      {/* Ad Section */}
      <div className="mb-12">
        <AdSense adSlot="1234567890" className="max-w-4xl mx-auto" />
      </div>

      {/* Latest Posts */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-gray-900">최신 글</h2>
          <a
            href="/posts"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            전체 보기 →
          </a>
        </div>
        <PostList posts={mockPosts} />
      </section>

      {/* Categories Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          인기 카테고리
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["웹 개발", "마케팅", "비즈니스", "라이프스타일"].map(
            (category) => (
              <a
                key={category}
                href={`/categories/${category}`}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <h3 className="font-semibold text-lg text-gray-900">
                  {category}
                </h3>
              </a>
            )
          )}
        </div>
      </section>

      {/* Bottom Ad Section */}
      <div className="mb-8">
        <AdSense adSlot="0987654321" adFormat="fluid" className="max-w-4xl mx-auto" />
      </div>
    </div>
  );
}
