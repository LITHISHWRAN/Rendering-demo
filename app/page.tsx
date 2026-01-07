export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-light text-gray-900 mb-3">
            Next.js Rendering Strategies
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            This app demonstrates <span className="font-medium text-gray-900">Static (SSG)</span>,{" "}
            <span className="font-medium text-gray-900">Dynamic (SSR)</span>, and{" "}
            <span className="font-medium text-gray-900">Hybrid (ISR)</span>{" "}
            rendering using the Next.js App Router.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="space-y-3 mb-16">
          <a 
            href="/about"
            className="block p-4 bg-white border border-gray-200 rounded-lg hover:border-gray-400 transition-colors"
          >
            <h3 className="font-medium text-gray-900 mb-1">Static Page (SSG)</h3>
            <p className="text-sm text-gray-500">Pre-rendered at build time</p>
          </a>
          
          <a 
            href="/dashboard"
            className="block p-4 bg-white border border-gray-200 rounded-lg hover:border-gray-400 transition-colors"
          >
            <h3 className="font-medium text-gray-900 mb-1">Dynamic Page (SSR)</h3>
            <p className="text-sm text-gray-500">Rendered on every request</p>
          </a>
          
          <a 
            href="/news"
            className="block p-4 bg-white border border-gray-200 rounded-lg hover:border-gray-400 transition-colors"
          >
            <h3 className="font-medium text-gray-900 mb-1">Hybrid Page (ISR)</h3>
            <p className="text-sm text-gray-500">Revalidated periodically</p>
          </a>
        </div>

        {/* Environment Info */}
        <div className="border-t border-gray-200 pt-8 space-y-3">
          <div className="flex items-baseline gap-2">
            <span className="text-sm font-medium text-gray-500">Environment:</span>
            <span className="text-base text-gray-900 font-mono">
              {process.env.NEXT_PUBLIC_ENV}
            </span>
          </div>
          
          <div className="flex items-baseline gap-2">
            <span className="text-sm font-medium text-gray-500">API URL:</span>
            <span className="text-base text-gray-900 font-mono break-all">
              {process.env.NEXT_PUBLIC_API_URL}
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}