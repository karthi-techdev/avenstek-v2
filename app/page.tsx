import Link from "next/link";

export default function Home() {
  return (
    <section className="home-section">
        <h1 className="text-3xl text-[var(--color-7)] bg-[var(--color-28)]">Hello world!</h1>
        <Link href="/blog" className="underline">Blog</Link>
    </section>
  );
}
