import Image from "next/image";
import Link from "next/link";
import { productHref, type Product } from "@/content/products";

/** Catalog grid card: image, name and "Cód. X", links to the detail page. */
export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={productHref(product.slug)}
      className="group flex h-full flex-col items-center rounded-2xl border border-black/5 bg-cream/40 p-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-white/60">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width:768px) 45vw, 22vw"
            className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <span className="flex h-full w-full items-center justify-center font-script text-3xl text-cocoa/40">
            Siareg
          </span>
        )}
      </div>
      <p className="mt-3 font-heading text-sm font-semibold leading-tight text-cocoa-700">
        {product.name}
      </p>
      {product.code && (
        <span className="mt-1 font-body text-xs font-medium normal-case tracking-normal text-muted">
          Cód. {product.code}
        </span>
      )}
    </Link>
  );
}
