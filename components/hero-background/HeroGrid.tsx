export function HeroGrid() {
  return (
    <>
      {/* Light-mode grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-60

          dark:hidden
        "
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(59 130 246 / 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(59 130 246 / 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Dark-mode grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          hidden
          opacity-40

          dark:block
        "
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(96 165 250 / 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(96 165 250 / 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />
    </>
  );
}
