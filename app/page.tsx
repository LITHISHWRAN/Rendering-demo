export default function HomePage() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Next.js Rendering Strategies Demo</h1>
      <p>
        This app demonstrates <strong>Static (SSG)</strong>,{" "}
        <strong>Dynamic (SSR)</strong>, and <strong>Hybrid (ISR)</strong>{" "}
        rendering using the Next.js App Router.
      </p>

      <ul style={{ marginTop: "1.5rem", lineHeight: "2" }}>
        <li>
          <a href="/about">Static Page (SSG)</a> — Pre-rendered at build time
        </li>
        <li>
          <a href="/dashboard">Dynamic Page (SSR)</a> — Rendered on every request
        </li>
        <li>
          <a href="/news">Hybrid Page (ISR)</a> — Revalidated periodically
        </li>
      </ul>
    </main>
  );
}