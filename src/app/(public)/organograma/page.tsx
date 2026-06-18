import type { Metadata } from "next";
import Organograma from "@/components/Organograma";

export const metadata: Metadata = {
  title: "Estrutura Organizacional | CEDUCVR",
  description:
    "Conheça a estrutura organizacional do CEDUCVR — diretoria, presidência, gerências e conselhos.",
  alternates: { canonical: "/organograma" },
};

export default function OrganogramaPage() {
  return (
    <section className="page-section">
      <div className="container relative" style={{ border: "1px solid black" }}>
        <Organograma />
      </div>
    </section>
  );
}
