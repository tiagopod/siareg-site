import Link from "next/link";

export default function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="bg-chocolate-texture py-16 text-cream sm:py-20">
      <div className="container-x">
        <nav className="mb-3 font-body text-xs normal-case tracking-normal text-cream/60">
          <Link href="/" className="hover:text-brand-yellow">Home</Link> <span className="px-1">/</span> {title}
        </nav>
        <h1 className="text-4xl font-bold sm:text-5xl">{title}</h1>
        {subtitle && <p className="mt-2 max-w-2xl font-body text-base normal-case tracking-normal text-cream/80">{subtitle}</p>}
      </div>
    </section>
  );
}
