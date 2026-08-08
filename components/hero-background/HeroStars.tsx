const stars = [
  { left: "8%", top: "16%", size: 2 },
  { left: "18%", top: "33%", size: 1 },
  { left: "27%", top: "11%", size: 2 },
  { left: "39%", top: "25%", size: 1 },
  { left: "48%", top: "9%", size: 2 },
  { left: "58%", top: "39%", size: 1 },
  { left: "67%", top: "13%", size: 2 },
  { left: "74%", top: "28%", size: 1 },
  { left: "84%", top: "8%", size: 2 },
  { left: "91%", top: "41%", size: 1 },
  { left: "13%", top: "70%", size: 1 },
  { left: "32%", top: "79%", size: 2 },
  { left: "61%", top: "74%", size: 1 },
  { left: "79%", top: "83%", size: 2 },
  { left: "94%", top: "66%", size: 1 },
];

export function HeroStars() {
  return (
    <div
      aria-hidden="true"
      className="
        pointer-events-none
        absolute
        inset-0
        opacity-35

        dark:opacity-80
      "
    >
      {stars.map((star, index) => (
        <span
          key={index}
          className="
            absolute
            rounded-full
            bg-blue-500
            shadow-[0_0_8px_rgba(59,130,246,0.8)]

            dark:bg-blue-300
            dark:shadow-[0_0_10px_rgba(147,197,253,1)]
          "
          style={{
            left: star.left,
            top: star.top,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
        />
      ))}
    </div>
  );
}
