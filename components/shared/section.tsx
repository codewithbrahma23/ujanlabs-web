import { ReactNode } from "react";

interface SectionProps {
  title: string;
  children: ReactNode;
}

export function Section({ title, children }: SectionProps) {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-10 text-4xl font-bold">{title}</h2>

        {children}
      </div>
    </section>
  );
}
