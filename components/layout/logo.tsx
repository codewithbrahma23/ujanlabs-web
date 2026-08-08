import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      aria-label="Ujan Labs home"
      className="group flex items-center"
    >
      {/* Light-mode logo */}
      <Image
        src="/images/UL_light.png"
        alt="Ujan Labs"
        width={220}
        height={72}
        priority
        className="
          h-17
          w-auto
          object-contain
          transition-transform
          duration-300
          group-hover:scale-[1.02]

          dark:hidden
        "
      />

      {/* Dark-mode logo */}
      <Image
        src="/images/dark_mode_ul.png"
        alt=""
        width={220}
        height={72}
        priority
        aria-hidden="true"
        className="
          hidden
          h-17
          w-auto
          object-contain
          transition-transform
          duration-300
          group-hover:scale-[1.02]

          dark:block
        "
      />
    </Link>
  );
}
