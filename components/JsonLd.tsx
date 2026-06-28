/**
 * Renderiza um ou mais blocos de JSON-LD (Schema.org) na página.
 * Uso: <JsonLd data={obj} /> ou <JsonLd data={[obj1, obj2]} />
 */
export default function JsonLd({ data }: { data: object | object[] }) {
  const items = Array.isArray(data) ? data : [data];
  return (
    <>
      {items.map((d, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }}
        />
      ))}
    </>
  );
}
