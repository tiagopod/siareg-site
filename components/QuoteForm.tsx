"use client";

import { useState } from "react";
import { trackLead } from "@/lib/analytics";

/**
 * Formulário de orçamento para atacado.
 *
 * O site não tinha formulário nenhum — só WhatsApp e mailto —, então a conversão
 * "envio de formulário" que a conta de Ads espera medir não existia. Este form
 * qualifica o lead (quem é, onde, o quê) e entrega a conversa já contextualizada
 * ao vendedor, passando pela rota /api/whatsapp que faz o rodízio entre os três.
 *
 * Não precisa de backend: o envio compõe a mensagem e navega para /api/whatsapp.
 * Para gravar o lead num CRM ou enviar por e-mail, basta trocar o corpo de
 * `handleSubmit` por um POST — os campos e o evento de dataLayer continuam iguais.
 */

const NEGOCIOS = [
  "Mercado ou mercearia",
  "Padaria ou confeitaria",
  "Distribuidora",
  "Atacadista",
  "Loja de conveniência",
  "Revenda autônoma",
  "Outro",
] as const;

type Campos = {
  nome: string;
  empresa: string;
  cidade: string;
  negocio: string;
  interesse: string;
};

const VAZIO: Campos = { nome: "", empresa: "", cidade: "", negocio: "", interesse: "" };

export default function QuoteForm() {
  const [campos, setCampos] = useState<Campos>(VAZIO);
  const [erro, setErro] = useState<string | null>(null);
  const [enviando, setEnviando] = useState(false);

  const set = (k: keyof Campos) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setCampos((c) => ({ ...c, [k]: e.target.value }));
    if (erro) setErro(null);
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!campos.nome.trim() || !campos.cidade.trim()) {
      setErro("Preencha seu nome e a cidade para o vendedor te atender melhor.");
      return;
    }

    setEnviando(true);

    const mensagem = [
      `Olá! Quero um orçamento de atacado.`,
      ``,
      `Nome: ${campos.nome.trim()}`,
      campos.empresa.trim() ? `Empresa: ${campos.empresa.trim()}` : null,
      `Cidade: ${campos.cidade.trim()}`,
      campos.negocio ? `Tipo de negócio: ${campos.negocio}` : null,
      campos.interesse.trim() ? `Interesse: ${campos.interesse.trim()}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    trackLead({
      event: "form_submit",
      origem: "contato-form",
      tipo_negocio: campos.negocio || undefined,
      cidade: campos.cidade.trim(),
    });

    // Navegação síncrona dentro do gesto do usuário — não é bloqueada como popup.
    const destino = `/api/whatsapp?text=${encodeURIComponent(mensagem)}`;
    const aba = window.open(destino, "_blank", "noopener,noreferrer");
    if (!aba) window.location.assign(destino);

    setEnviando(false);
    setCampos(VAZIO);
  }

  const campo =
    "mt-1.5 w-full rounded-xl border border-cocoa/25 bg-white px-4 py-3 font-body text-base normal-case tracking-normal text-ink placeholder:text-muted/70 transition focus:border-cocoa focus:outline-none focus:ring-2 focus:ring-gold/40";
  const rotulo =
    "font-heading text-xs font-semibold uppercase tracking-wider text-cocoa-700";

  return (
    <form onSubmit={handleSubmit} noValidate className="text-left">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="qf-nome" className={rotulo}>
            Seu nome <span className="text-chocolate">*</span>
          </label>
          <input
            id="qf-nome"
            name="nome"
            value={campos.nome}
            onChange={set("nome")}
            autoComplete="name"
            required
            aria-required="true"
            aria-invalid={erro ? !campos.nome.trim() : undefined}
            aria-describedby={erro ? "qf-erro" : undefined}
            className={campo}
            placeholder="Como podemos te chamar"
          />
        </div>

        <div>
          <label htmlFor="qf-empresa" className={rotulo}>
            Empresa
          </label>
          <input
            id="qf-empresa"
            name="empresa"
            value={campos.empresa}
            onChange={set("empresa")}
            autoComplete="organization"
            className={campo}
            placeholder="Opcional"
          />
        </div>

        <div>
          <label htmlFor="qf-cidade" className={rotulo}>
            Cidade <span className="text-chocolate">*</span>
          </label>
          <input
            id="qf-cidade"
            name="cidade"
            value={campos.cidade}
            onChange={set("cidade")}
            autoComplete="address-level2"
            required
            aria-required="true"
            aria-invalid={erro ? !campos.cidade.trim() : undefined}
            aria-describedby={erro ? "qf-erro" : undefined}
            className={campo}
            placeholder="Para calcularmos a entrega"
          />
        </div>

        <div>
          <label htmlFor="qf-negocio" className={rotulo}>
            Tipo de negócio
          </label>
          <select
            id="qf-negocio"
            name="negocio"
            value={campos.negocio}
            onChange={set("negocio")}
            className={campo}
          >
            <option value="">Selecione</option>
            {NEGOCIOS.map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="qf-interesse" className={rotulo}>
            O que você quer comprar
          </label>
          <input
            id="qf-interesse"
            name="interesse"
            value={campos.interesse}
            onChange={set("interesse")}
            className={campo}
            placeholder="Ex.: pão de mel e trufas"
          />
        </div>
      </div>

      {erro && (
        <p id="qf-erro" role="alert" className="mt-4 font-body text-sm normal-case tracking-normal text-chocolate">
          {erro}
        </p>
      )}

      <button type="submit" disabled={enviando} className="btn-yellow mt-6 disabled:opacity-60">
        {enviando ? "Abrindo o WhatsApp…" : "Pedir orçamento no WhatsApp"}
      </button>

      <p className="mt-3 font-body text-xs normal-case leading-relaxed tracking-normal text-muted">
        Seus dados vão direto para um vendedor da Siareg. Sem cadastro e sem e-mail
        automático.
      </p>
    </form>
  );
}
