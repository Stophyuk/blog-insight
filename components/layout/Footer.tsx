export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Blog Insight</h3>
            <p className="text-gray-600 mb-4">
              다양한 주제의 인사이트 있는 글들을 제공하는 콘텐츠 플랫폼입니다.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">바로가기</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="/posts" className="hover:text-gray-900 transition-colors">
                  전체 글
                </a>
              </li>
              <li>
                <a href="/categories" className="hover:text-gray-900 transition-colors">
                  카테고리
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-gray-900 transition-colors">
                  소개
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">정책</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="/privacy" className="hover:text-gray-900 transition-colors">
                  개인정보처리방침
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-gray-900 transition-colors">
                  이용약관
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600 text-sm">
          <p>&copy; {currentYear} Blog Insight. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
