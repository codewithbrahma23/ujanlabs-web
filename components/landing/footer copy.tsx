import Link from "next/link";
import Image from "next/image";
const footerColumns = [
  {
    title: "Solutions",
    links: [
      { label: "School ERP", href: "/products/school-erp" },
      {
        label: "Digital Transformation",
        href: "/services/digital-transformation",
      },
      { label: "Cloud Infrastructure", href: "/services/cloud-infrastructure" },
      { label: "AI Solutions", href: "/services/ai-solutions" },
      { label: "Mobile Applications", href: "/services/mobile-apps" },
      { label: "Data & Analytics", href: "/services/data-analytics" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Student Management", href: "/products/student-management" },
      { label: "Fee Management", href: "/products/fee-management" },
      { label: "RFID Attendance", href: "/products/rfid-attendance" },
      { label: "Parent Portal", href: "/products/parent-portal" },
      { label: "School Analytics", href: "/products/analytics" },
      { label: "Mobile App", href: "/products/mobile-app" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "/documentation" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Support", href: "/support" },
      { label: "Frequently Asked Questions", href: "/faq" },
      { label: "Request a Demo", href: "/demo" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Open Roles", href: "/careers/open-roles" },
      { label: "Contact", href: "/contact" },
      { label: "Press", href: "/press" },
    ],
  },
];

export function Footer() {
  return (
    <footer
      className="
    relative
    mx-3
    mb-0
    overflow-hidden
    rounded-t-[64px]
    bg-[#f4f2ee]
    text-slate-950
    shadow-[0_-12px_40px_rgba(15,23,42,0.08)]

    sm:mx-5
    lg:mx-8

    dark:bg-[#030817]
    dark:text-slate-100
    dark:shadow-[0_-12px_50px_rgba(0,0,0,0.35)]
  "
    >
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-blue-500/30
          to-transparent
        "
      />

      <div
        className="
    mx-auto
    w-full
    max-w-7xl
    px-6
    pb-8
    pt-16

    lg:px-8
    lg:pb-10
    lg:pt-20
  "
      >
        {/* Main footer navigation */}
        <div
          className="
    grid
    grid-cols-1
    gap-x-12
    gap-y-12

    sm:grid-cols-2

    lg:grid-cols-4
    lg:justify-items-center
  "
        >
          {footerColumns.map((column) => (
            <FooterColumn
              key={column.title}
              title={column.title}
              links={column.links}
            />
          ))}
        </div>

        {/* Secondary row */}
        {/* Secondary row */}
        <div
          className="
    mt-16
    grid
    grid-cols-1
    gap-12
    border-t
    border-slate-950/10
    pt-12

    dark:border-white/10

    lg:grid-cols-[1.2fr_1fr_1fr]
    lg:items-start
    lg:justify-items-center
  "
        >
          {/* Brand */}
          <div className="w-full max-w-[320px]">
            <Link
              href="/"
              aria-label="Ujan Labs home"
              className="
        inline-flex
        transition-transform
        duration-300
        hover:scale-[1.02]
      "
            >
              {/* Light logo */}
              <Image
                src="/images/UL_light.png"
                alt="Ujan Labs"
                width={260}
                height={90}
                className="
          h-20
          w-auto
          object-contain

          dark:hidden
        "
              />

              {/* Dark logo */}
              <Image
                src="/images/dark_mode_ul.png"
                alt=""
                width={260}
                height={90}
                aria-hidden="true"
                className="
          hidden
          h-20
          w-auto
          object-contain

          dark:block
        "
              />
            </Link>

            <p
              className="
        mt-6
        translate-x-4
        max-w-[290px]
        text-base
        leading-7
        text-slate-600

        dark:text-slate-400
      "
            >
              Building trusted digital platforms for schools, businesses and
              growing organisations.
            </p>
          </div>

          {/* Brand statement */}
          <div className="w-full max-w-[230px]">
            <p className="text-xs font-semibold uppercase tracking-[0.16em]">
              Our Roots
            </p>

            <p
              className="
        mt-5
        text-base
        leading-7
        text-slate-600

        dark:text-slate-400
      "
            >
              Proudly building from{" "}
              <span
                className="
          font-semibold
          text-cyan-700

          dark:text-cyan-300
        "
              >
                Assam, India
              </span>
              .
              <br />
              Delivering globally.
            </p>
          </div>

          {/* Legal */}
          <div className="w-full max-w-[230px] translate-x-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em]">
              Legal
            </p>

            <div className="mt-5 flex flex-col gap-3">
              <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
              <FooterLink href="/terms">Terms of Service</FooterLink>
              <FooterLink href="/cookies">Cookie Policy</FooterLink>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="
            mt-12
            flex
            flex-col
            gap-6
            border-t
            border-slate-950/10
            pt-8

            dark:border-white/10

            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <p
            className="
              text-sm
              text-slate-500

              dark:text-slate-400
            "
          >
            © {new Date().getFullYear()} Ujan Labs. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            <SocialLink
              href="https://www.linkedin.com"
              label="LinkedIn"
              symbol="in"
            />

            <SocialLink
              href="https://www.youtube.com"
              label="YouTube"
              symbol="▶"
            />

            <SocialLink href="https://x.com" label="X" symbol="𝕏" />
          </div>
        </div>
      </div>
    </footer>
  );
}

type FooterColumnProps = {
  title: string;
  links: Array<{
    label: string;
    href: string;
  }>;
};

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h2
        className="
          text-xs
          font-semibold
          uppercase
          tracking-[0.16em]
          text-slate-950

          dark:text-slate-100
        "
      >
        {title}
      </h2>

      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <FooterLink href={link.href}>{link.label}</FooterLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

type FooterLinkProps = {
  href: string;
  children: React.ReactNode;
};

function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <Link
      href={href}
      className="
        inline-flex
        text-base
        text-slate-600
        transition-all
        duration-200

        hover:translate-x-1
        hover:text-blue-700

        focus-visible:rounded-sm
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-blue-500

        dark:text-slate-400
        dark:hover:text-blue-300
      "
    >
      {children}
    </Link>
  );
}

type SocialLinkProps = {
  href: string;
  label: string;
  symbol: string;
};

function SocialLink({ href, label, symbol }: SocialLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="
        flex
        size-11
        items-center
        justify-center
        rounded-xl
        bg-slate-950/10
        text-sm
        font-semibold
        text-slate-800
        transition-all
        duration-200

        hover:-translate-y-1
        hover:bg-blue-600
        hover:text-white

        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-blue-500
        focus-visible:ring-offset-2
        focus-visible:ring-offset-[#f4f2ee]

        dark:bg-white/10
        dark:text-slate-100
        dark:hover:bg-blue-500
        dark:focus-visible:ring-offset-[#030817]
      "
    >
      {symbol}
    </Link>
  );
}
