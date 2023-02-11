import WebLayout from 'app/components/WebLayout';
import ArticleFeaturedWeb from 'app/components/ArticleFeaturedWeb';
import ArticleLatestWeb from 'app/components/ArticleLatestWeb';

export function HomeWeb() {
  return (
    <WebLayout>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-10 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
          {/* FeaturedRow */}
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Featured Articles</h2>
          <ArticleFeaturedWeb />
          {/* Latest */}
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 py-10 sm:py-8">Latest Articles</h2>
          <ArticleLatestWeb />
        </div>
      </div>
    </WebLayout>
  )
}
