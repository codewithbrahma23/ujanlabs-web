import Link from "next/link";

import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const companyLinks = [
  {
    label: "About",
    href: "/about",
    symbol: "✦",
  },
  {
    label: "Careers",
    href: "/careers",
    symbol: "◇",
  },
  {
    label: "Open roles",
    href: "/careers/open-roles",
    symbol: "↗",
  },
];

const contactLinks = [
  {
    label: "Contact",
    href: "/contact",
    symbol: "✉",
  },
  {
    label: "Press",
    href: "/press",
    symbol: "▤",
  },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com",
    symbol: "in",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com",
    symbol: "▶",
  },
  {
    label: "X",
    href: "https://x.com",
    symbol: "𝕏",
  },
];

export function CompanyMegaMenu() {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger
        className="
          bg-transparent
          text-muted-foreground
          hover:bg-transparent
          hover:text-foreground
          data-popup-open:bg-transparent
          data-popup-open:text-foreground
        "
      >
        Company
      </NavigationMenuTrigger>

      <NavigationMenuContent className="w-[min(92vw,1050px)] p-0">
        <div
          className="
            grid
            grid-cols-1
            gap-10
            rounded-2xl
            bg-background
            p-8
            text-foreground
            shadow-[0_24px_80px_rgba(15,23,42,0.18)]
            ring-1
            ring-border

            dark:bg-slate-950
            dark:shadow-[0_28px_90px_rgba(0,0,0,0.45)]

            md:grid-cols-3
            md:p-10
          "
        >
          <MegaMenuColumn title="Our Company">
            {companyLinks.map((item) => (
              <MegaMenuLink
                key={item.label}
                label={item.label}
                href={item.href}
                symbol={item.symbol}
              />
            ))}
          </MegaMenuColumn>

          <MegaMenuColumn title="Get in Touch">
            {contactLinks.map((item) => (
              <MegaMenuLink
                key={item.label}
                label={item.label}
                href={item.href}
                symbol={item.symbol}
              />
            ))}
          </MegaMenuColumn>

          <MegaMenuColumn title="Socials">
            {socialLinks.map((item) => (
              <MegaMenuLink
                key={item.label}
                label={item.label}
                href={item.href}
                symbol={item.symbol}
                external
              />
            ))}
          </MegaMenuColumn>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}

type MegaMenuColumnProps = {
  title: string;
  children: React.ReactNode;
};

function MegaMenuColumn({ title, children }: MegaMenuColumnProps) {
  return (
    <div>
      <p
        className="
          mb-4
          text-xs
          font-semibold
          uppercase
          tracking-[0.14em]
          text-muted-foreground
        "
      >
        {title}
      </p>

      <div className="space-y-1">{children}</div>
    </div>
  );
}

type MegaMenuLinkProps = {
  label: string;
  href: string;
  symbol: string;
  external?: boolean;
};

function MegaMenuLink({
  label,
  href,
  symbol,
  external = false,
}: MegaMenuLinkProps) {
  return (
    <NavigationMenuLink
      render={
        <Link
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
        />
      }
      className="
        group
        flex
        items-center
        gap-3
        rounded-xl
        px-0
        py-2
        hover:bg-transparent
      "
    >
      <span
        className="
          flex
          size-9
          shrink-0
          items-center
          justify-center
          rounded-xl
          bg-muted
          text-sm
          font-semibold
          text-foreground
          transition-all
          duration-200
          group-hover:scale-105
          group-hover:bg-blue-500/10
          group-hover:text-blue-600

          dark:group-hover:text-blue-400
        "
      >
        {symbol}
      </span>

      <span
        className="
          font-medium
          text-foreground
          transition-colors
          group-hover:text-blue-600

          dark:group-hover:text-blue-400
        "
      >
        {label}
      </span>
    </NavigationMenuLink>
  );
}
