import Link from "next/link";
import {
  ArrowUpRight,
  Building2,
  CloudCog,
  Code2,
  Hotel,
  MonitorSmartphone,
  RadioTower,
  Settings2,
  type LucideIcon,
} from "lucide-react";

type ServicesProps = {
  data?: unknown;
};

type Service = {
  number: string;
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  className: string;
  visual: "browser" | "workflow" | "rfid" | "resort" | "platform" | "cloud";
};

const services: Service[] = [
  {
    number: "01",
    title: "Websites & Digital Platforms",
    description:
      "High-quality websites and digital experiences designed to strengthen your brand and support business growth.",
    href: "/services/websites",
    icon: MonitorSmartphone,
    className: "md:col-span-2 ",
    visual: "browser",
  },
  {
    number: "02",
    title: "Office Automation",
    description:
      "Automate repetitive workflows, approvals, reporting and daily business operations.",
    href: "/services/office-automation",
    icon: Settings2,
    className: "md:col-span-1",
    visual: "workflow",
  },
  {
    number: "03",
    title: "RFID Installation & Automation",
    description:
      "RFID attendance, access control and automated tracking solutions for organisations.",
    href: "/services/rfid",
    icon: RadioTower,
    className: "md:col-span-1",
    visual: "rfid",
  },

  {
    number: "04",
    title: "Custom Business Software",
    description:
      "Purpose-built applications designed around your organisation’s workflows and long-term goals.",
    href: "/services/custom-software",
    icon: Code2,
    className: "md:col-span-2",
    visual: "platform",
  },
  {
    number: "05",
    title: "Cloud & System Integration",
    description:
      "Secure cloud infrastructure and connected systems that scale with your organisation.",
    href: "/services/cloud-integration",
    icon: CloudCog,
    className: "md:col-span-1",
    visual: "cloud",
  },
];

export function Services({ data }: ServicesProps) {
  return (
    <section
      id="services"
      className="
        relative
        overflow-hidden
        bg-[#eef3f8]
        py-14
        dark:bg-[#020817]
        lg:py-22
      "
    >
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        {/* Section heading */}
        <div
          className="
            mb-12
            flex
            flex-col
            gap-6
            md:flex-row
            md:items-end
            md:justify-between
          "
        >
          <div>
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
              <Building2 className="size-4" aria-hidden="true" />
              Our Services
            </div>
          </div>
        </div>

        {/* Bento services grid */}
        <div className="grid auto-rows-[280px] gap-5 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <Link
      href={service.href}
      className={`
        group
        relative
        isolate
        overflow-hidden
        rounded-[28px]
        border
        border-slate-200/80
        bg-white/80
        p-6
        shadow-[0_20px_55px_rgba(15,23,42,0.07)]
        backdrop-blur-xl
        transition-all
        duration-500

        hover:-translate-y-1
        hover:border-blue-400/50
        hover:shadow-[0_28px_75px_rgba(37,99,235,0.14)]

        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-blue-500
        focus-visible:ring-offset-4
        focus-visible:ring-offset-[#eef3f8]

        dark:border-white/10
        dark:bg-white/[0.04]
        dark:shadow-[0_22px_65px_rgba(0,0,0,0.28)]
        dark:hover:border-blue-400/30
        dark:hover:shadow-[0_30px_80px_rgba(37,99,235,0.16)]
        dark:focus-visible:ring-offset-[#020817]

        ${service.className}
      `}
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-20
          -top-20
          size-56
          rounded-full
          bg-gradient-to-br
          from-blue-500/10
          via-cyan-400/10
          to-violet-500/10
          blur-[70px]
          transition-opacity
          duration-500
          group-hover:opacity-100
          dark:from-blue-500/20
          dark:via-cyan-400/15
          dark:to-violet-500/20
        "
      />

      {/* Faint technical grid */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-50
          [background-image:linear-gradient(to_right,rgba(59,130,246,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.045)_1px,transparent_1px)]
          [background-size:40px_40px]
          dark:opacity-30
          dark:[background-image:linear-gradient(to_right,rgba(96,165,250,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(96,165,250,0.05)_1px,transparent_1px)]
        "
      />

      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-start justify-between">
          <span
            className="
              flex
              size-11
              items-center
              justify-center
              rounded-2xl
              bg-blue-500/10
              text-blue-700
              transition-all
              duration-300
              group-hover:scale-105
              group-hover:bg-blue-500/15
              dark:bg-blue-400/10
              dark:text-blue-300
            "
          >
            <Icon className="size-5" aria-hidden="true" />
          </span>

          <div className="flex items-center gap-3">
            <span
              className="
                text-xs
                font-semibold
                tracking-[0.16em]
                text-slate-400
                dark:text-slate-500
              "
            >
              {service.number}
            </span>

            <ArrowUpRight
              className="
                size-5
                text-slate-400
                transition-all
                duration-300
                group-hover:-translate-y-1
                group-hover:translate-x-1
                group-hover:text-blue-600
                dark:group-hover:text-blue-300
              "
              aria-hidden="true"
            />
          </div>
        </div>

        <ServiceVisual type={service.visual} />

        <div className="mt-auto">
          <h3
            className="
              text-xl
              font-semibold
              tracking-tight
              text-slate-950
              dark:text-white
            "
          >
            {service.title}
          </h3>

          <p
            className="
              mt-3
              max-w-lg
              text-sm
              leading-6
              text-slate-600
              dark:text-slate-400
            "
          >
            {service.description}
          </p>
        </div>
      </div>
    </Link>
  );
}
function ServiceVisual({ type }: { type: Service["visual"] }) {
  if (type === "browser") {
    return (
      <div
        className="
          my-7
          overflow-hidden
          rounded-2xl
          border
          border-slate-200/80
          bg-slate-50/90
          shadow-sm
          dark:border-white/10
          dark:bg-slate-950/50
        "
      >
        <div
          className="
            flex
            items-center
            gap-2
            border-b
            border-slate-200/80
            px-4
            py-3
            dark:border-white/10
          "
        >
          <span className="size-2 rounded-full bg-red-400" />
          <span className="size-2 rounded-full bg-amber-400" />
          <span className="size-2 rounded-full bg-emerald-400" />

          <div
            className="
              ml-3
              h-6
              flex-1
              rounded-md
              bg-slate-200/70
              dark:bg-white/10
            "
          />
        </div>

        <div className="grid grid-cols-[0.7fr_1.3fr] gap-3 p-4">
          <div className="space-y-3">
            <div className="h-4 w-4/5 rounded bg-blue-500/20" />
            <div className="h-3 w-full rounded bg-slate-200 dark:bg-white/10" />
            <div className="h-3 w-3/4 rounded bg-slate-200 dark:bg-white/10" />
            <div className="h-8 w-24 rounded-full bg-blue-600/80" />
          </div>

          <div
            className="
              min-h-32
              rounded-xl
              bg-gradient-to-br
              from-blue-500/20
              via-cyan-400/15
              to-violet-500/20
            "
          />
        </div>
      </div>
    );
  }

  if (type === "workflow") {
    return (
      <div className="my-7 flex items-center justify-center gap-2">
        {[Settings2, ArrowUpRight, CloudCog].map((WorkflowIcon, index) => (
          <div key={index} className="flex items-center gap-2">
            <span
              className="
                flex
                size-10
                items-center
                justify-center
                rounded-xl
                border
                border-blue-500/20
                bg-blue-500/10
                text-blue-600
                dark:text-blue-300
              "
            >
              <WorkflowIcon className="size-4" />
            </span>

            {index < 2 && <span className="h-px w-5 bg-blue-500/30" />}
          </div>
        ))}
      </div>
    );
  }

  if (type === "rfid") {
    return (
      <div className="relative my-7 flex h-24 items-center justify-center">
        {[72, 48, 24].map((size) => (
          <span
            key={size}
            className="
              absolute
              rounded-full
              border
              border-cyan-500/30
            "
            style={{ width: size, height: size }}
          />
        ))}

        <span
          className="
            relative
            size-3
            rounded-full
            bg-cyan-400
            shadow-[0_0_18px_rgba(34,211,238,0.9)]
          "
        />
      </div>
    );
  }

  if (type === "platform") {
    return (
      <div className="my-7 grid grid-cols-4 gap-3">
        {[Code2, Building2, Settings2, CloudCog].map((PlatformIcon, index) => (
          <div
            key={index}
            className="
              flex
              h-16
              items-center
              justify-center
              rounded-2xl
              border
              border-slate-200/80
              bg-slate-50
              text-blue-600
              dark:border-white/10
              dark:bg-white/[0.04]
              dark:text-blue-300
            "
          >
            <PlatformIcon className="size-5" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="relative my-7 flex h-24 items-center justify-center">
      <div
        className="
          absolute
          h-px
          w-3/4
          bg-gradient-to-r
          from-transparent
          via-blue-500/60
          to-transparent
        "
      />

      <span
        className="
          relative
          flex
          size-12
          items-center
          justify-center
          rounded-2xl
          bg-blue-500/10
          text-blue-600
          shadow-[0_0_30px_rgba(37,99,235,0.14)]
          dark:text-blue-300
        "
      >
        <CloudCog className="size-6" />
      </span>
    </div>
  );
}
