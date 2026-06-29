import Link from "next/link";
import { salesWa } from "@/content/site";
import { Whatsapp } from "@/components/icons";

export default function NotFound() {
  return (
    <section className="bg-chocolate-texture py-24 text-cream sm:py-32">
      <div className="container-x flex flex-col items-center text-center">
        <p className="font-script text-5xl text-brand-yellow sm:text-6xl">Ops!</p>
        <p className="mt-2 font-heading text-7xl font-bold tracking-wider text-cream/90 sm:text-8xl">
          404
        </p>
        <h1 className="mt-4 font-heading text-2xl font-semibold uppercase tracking-wide sm:text-3xl">
          Página não encontrada
        </h1>
        <p className="mt-4 max-w-md font-body text-base normal-case leading-relaxed tracking-normal text-cream/75">
          A página que você procura pode ter sido movida ou não existe mais. Mas temos muitos
          chocolates esperando por você.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/" className="btn-yellow">
            Voltar ao início
          </Link>
          <Link
            href="/produtos"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-cream/70 px-7 py-3 font-heading text-sm font-semibold uppercase tracking-wider text-cream transition hover:bg-cream hover:text-chocolate"
          >
            Ver produtos
          </Link>
          <a
            href={salesWa()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-3 font-heading text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-[#1ebe5d]"
          >
            <Whatsapp width={20} height={20} /> Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
