import { NextResponse, type NextRequest } from "next/server";
import { site, DEFAULT_WA_MESSAGE } from "@/content/site";

/**
 * Distribuição de leads do WhatsApp entre os vendedores.
 *
 * - Novos visitantes: rodízio (round-robin) entre os números de `whatsapp.sellers`,
 *   garantindo que os 3 recebam contatos de forma equilibrada.
 * - Visitantes recorrentes: ficam fixos no mesmo vendedor (cookie `siareg_seller`),
 *   para manter a continuidade do atendimento.
 *
 * Como é uma rota de servidor, funciona mesmo com JavaScript desativado:
 * o link aponta para cá e respondemos com um redirect 302 para o wa.me.
 */

const SELLERS = site.whatsapp.sellers;
const COOKIE = "siareg_seller";
const MAX_AGE = 60 * 60 * 24 * 60; // 60 dias

// Contador de rodízio (por instância do servidor). Pequenos desbalanços entre
// instâncias/cold-starts são irrelevantes no volume de um site institucional.
let rotation = 0;

export const dynamic = "force-dynamic";

export function GET(req: NextRequest) {
  const message = req.nextUrl.searchParams.get("text") || DEFAULT_WA_MESSAGE;

  // Reaproveita o vendedor já atribuído a este visitante, se válido.
  const stored = req.cookies.get(COOKIE)?.value;
  let idx = stored != null ? Number.parseInt(stored, 10) : Number.NaN;

  if (!Number.isInteger(idx) || idx < 0 || idx >= SELLERS.length) {
    idx = rotation % SELLERS.length;
    rotation += 1;
  }

  const number = SELLERS[idx];
  const target = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

  const res = NextResponse.redirect(target, 302);
  res.cookies.set(COOKIE, String(idx), {
    maxAge: MAX_AGE,
    path: "/",
    sameSite: "lax",
  });
  return res;
}
