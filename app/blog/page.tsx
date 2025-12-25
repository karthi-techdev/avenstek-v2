import Link from "next/link";

export default function Blog() {
  return (
    <section className="home-section">
        <h1 className="text-3xl">Blog Page</h1>
        <Link href="/blog/blog-view" className="underline">Blog view</Link>
    </section>
  );
}
