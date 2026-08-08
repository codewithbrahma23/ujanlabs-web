import Link from "next/link";
import {
  ArrowUpRight,
  Building2,
  GraduationCap,
  Headphones,
  Rocket,
  ServerCog,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

type AudienceProps = {
  data?: unknown;
};

type Partner = {
  number: string;
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

const partners: Partner[] = [
  {
    number: "01",
    title: "Growing Businesses",
    description:
      "Business software, digital platforms and automation solutions designed to improve operations and support sustainable growth.",
    href: "/solutions/growing-businesses",
    icon: Building2,
  },
  {
    number: "02",
    title: "Institutions",
    description:
      "Connected platforms for schools and educational organisations, covering administration, communication, attendance and reporting.",
    href: "/solutions/education",
    icon: GraduationCap,
  },
  {
    number: "03",
    title: "Enterprise Organisations",
    description:
      "Custom applications, workflow automation, cloud integration and secure platforms built around complex operational needs.",
    href: "/solutions/enterprise",
    icon: UsersRound,
  },
  {
    number: "04",
    title: "Technology Teams",
    description:
      "Additional engineering capacity, application maintenance, platform operations and technical expertise for internal technology teams.",
    href: "/solutions/technology-teams",
    icon: ServerCog,
  },
  {
    number: "05",
    title: "Startups & Product Teams",
    description:
      "Product design and engineering support that helps turn ideas into secure, scalable and market-ready software.",
    href: "/solutions/startups",
    icon: Rocket,
  },
  {
    number: "06",
    title: "Managed Technology Services",
    description:
      "Long-term application support, production monitoring, incident response and continuous platform improvement.",
    href: "/services/managed-technology",
    icon: Headphones,
  },
];

export function Audience({ data }: AudienceProps) {
  return (
    <section
      id="who-we-partner-with"
      className="
        relative
        overflow-hidden
        bg-[#eef3f8]
        py-24

        dark:bg-[#020817]

        lg:py-32
      "
    >
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <div
          className="
            grid
            gap-12

            lg:grid-cols-[0.72fr_1.28fr]
            lg:gap-16
          "
        >
          {/* Sticky section introduction */}
          <div>
            <div className="lg:sticky lg:top-28">
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-blue-500/20
                  bg-blue-500/10
                  px-4
                  py-2
                  text-sm
                  font-semibold
                  text-blue-700

                  dark:border-blue-400/20
                  dark:bg-blue-400/10
                  dark:text-blue-300
                "
              >
                <UsersRound className="size-4" aria-hidden="true" />
                Who We Partner With
              </div>

              <h2
                className="
                  mt-7
                  text-4xl
                  font-bold
                  tracking-tight
                  text-slate-950

                  sm:text-5xl

                  dark:text-white
                "
              >
                Technology partnerships built around your goals.
              </h2>

              <p
                className="
                  mt-6
                  max-w-md
                  text-lg
                  leading-8
                  text-slate-600

                  dark:text-slate-400
                "
              >
                We work with organisations that need more than a one-time
                software delivery—from building new products to operating and
                improving critical technology over the long term.
              </p>

              <Link
                href="/contact"
                className="
                  group
                  mt-9
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  font-semibold
                  text-blue-700
                  transition-colors

                  hover:text-blue-900

                  dark:text-blue-300
                  dark:hover:text-blue-200
                "
              >
                Discuss a technology partnership
                <ArrowUpRight
                  className="
                    size-4
                    transition-transform
                    duration-300

                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>

          {/* Partner rows */}
          <div
            className="
              overflow-hidden
              rounded-[32px]
              border
              border-slate-200/80
              bg-white/70
              shadow-[0_22px_70px_rgba(15,23,42,0.07)]
              backdrop-blur-xl

              dark:border-white/10
              dark:bg-white/[0.035]
              dark:shadow-[0_25px_80px_rgba(0,0,0,0.3)]
            "
          >
            {partners.map((partner, index) => (
              <PartnerRow
                key={partner.title}
                partner={partner}
                isLast={index === partners.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

type PartnerRowProps = {
  partner: Partner;
  isLast: boolean;
};

function PartnerRow({ partner, isLast }: PartnerRowProps) {
  const Icon = partner.icon;

  return (
    <Link
      href={partner.href}
      className={`
        group
        relative
        block
        overflow-hidden
        px-6
        py-7
        transition-all
        duration-300

        hover:bg-blue-500/[0.045]

        focus-visible:z-10
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-inset
        focus-visible:ring-blue-500

        dark:hover:bg-blue-400/[0.06]

        sm:px-8
        sm:py-8

        ${isLast ? "" : "border-b border-slate-200/80 dark:border-white/10"}
      `}
    >
      {/* Hover glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-24
          top-1/2
          size-52
          -translate-y-1/2
          rounded-full
          bg-gradient-to-br
          from-blue-500/0
          via-cyan-400/0
          to-violet-500/0
          blur-[65px]
          transition-all
          duration-500

          group-hover:from-blue-500/10
          group-hover:via-cyan-400/10
          group-hover:to-violet-500/10

          dark:group-hover:from-blue-500/20
          dark:group-hover:via-cyan-400/10
          dark:group-hover:to-violet-500/15
        "
      />

      {/* Glowing left border */}
      <div
        aria-hidden="true"
        className="
          absolute
          inset-y-5
          left-0
          w-px
          origin-center
          scale-y-0
          bg-gradient-to-b
          from-transparent
          via-cyan-500
          to-transparent
          opacity-0
          transition-all
          duration-300

          group-hover:scale-y-100
          group-hover:opacity-100
        "
      />

      <div
        className="
          relative
          z-10
          grid
          gap-5

          sm:grid-cols-[auto_1fr_auto]
          sm:items-start
          sm:gap-6
        "
      >
        {/* Number and icon */}
        <div className="flex items-center gap-4">
          <span
            className="
              w-6
              text-xs
              font-semibold
              tracking-[0.14em]
              text-slate-400

              dark:text-slate-500
            "
          >
            {partner.number}
          </span>

          <span
            className="
              flex
              size-12
              shrink-0
              items-center
              justify-center
              rounded-2xl
              border
              border-blue-500/15
              bg-blue-500/10
              text-blue-700
              transition-all
              duration-300

              group-hover:scale-105
              group-hover:border-blue-500/30
              group-hover:bg-blue-500/15

              dark:border-blue-400/15
              dark:bg-blue-400/10
              dark:text-blue-300
            "
          >
            <Icon className="size-5" aria-hidden="true" />
          </span>
        </div>

        {/* Content */}
        <div>
          <h3
            className="
              text-xl
              font-semibold
              tracking-tight
              text-slate-950
              transition-colors

              group-hover:text-blue-700

              dark:text-white
              dark:group-hover:text-blue-300
            "
          >
            {partner.title}
          </h3>

          <p
            className="
              mt-3
              max-w-xl
              text-sm
              leading-6
              text-slate-600

              dark:text-slate-400
            "
          >
            {partner.description}
          </p>
        </div>

        {/* Arrow */}
        <ArrowUpRight
          className="
            hidden
            size-5
            text-slate-400
            transition-all
            duration-300

            group-hover:-translate-y-1
            group-hover:translate-x-1
            group-hover:text-blue-600

            dark:group-hover:text-blue-300

            sm:block
          "
          aria-hidden="true"
        />
      </div>
    </Link>
  );
}
