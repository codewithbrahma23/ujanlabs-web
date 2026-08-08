import Link from "next/link";
import {
  ArrowUpRight,
  Building2,
  GraduationCap,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

type FeaturedProductProps = {
  data?: unknown;
};

type Product = {
  eyebrow: string;
  title: string;
  description: string;
  features: string[];
  href: string;
  cta: string;
  icon: LucideIcon;
  accent: string;
  preview: {
    label: string;
    value: string;
    secondaryLabel: string;
    secondaryValue: string;
  };
};

const products: Product[] = [
  {
    eyebrow: "Flagship Product",
    title: "School ERP",
    description:
      "A complete cloud-based platform connecting school administration, teachers, students and parents.",
    features: [
      "Admissions and student records",
      "Fee collection and reporting",
      "RFID attendance and notifications",
      "Parent, teacher and student portals",
    ],
    href: "/products/school-erp",
    cta: "Explore School ERP",
    icon: GraduationCap,
    accent: "from-blue-600 via-cyan-500 to-blue-400",
    preview: {
      label: "Students",
      value: "2,480",
      secondaryLabel: "Attendance today",
      secondaryValue: "94.8%",
    },
  },
  {
    eyebrow: "Coming Soon",
    title: "Business Operations Platform",
    description:
      "A connected workspace for growing organisations to manage people, workflows, documents and operational reporting.",
    features: [
      "Employee and team management",
      "Workflow automation",
      "Operational dashboards",
      "Secure document management",
    ],
    href: "/products/business-platform",
    cta: "Discover the Platform",
    icon: Building2,
    accent: "from-violet-600 via-blue-500 to-cyan-400",
    preview: {
      label: "Active workflows",
      value: "128",
      secondaryLabel: "Tasks automated",
      secondaryValue: "76%",
    },
  },
  {
    eyebrow: "Future Product",
    title: "AI Automation Suite",
    description:
      "Intelligent tools that help organisations automate repetitive work, discover insights and make faster decisions.",
    features: [
      "AI-powered assistants",
      "Document intelligence",
      "Workflow recommendations",
      "Analytics and forecasting",
    ],
    href: "/products/ai-automation",
    cta: "Explore AI Solutions",
    icon: Sparkles,
    accent: "from-cyan-500 via-blue-600 to-violet-600",
    preview: {
      label: "Hours saved",
      value: "340",
      secondaryLabel: "Automation success",
      secondaryValue: "98.2%",
    },
  },
];

export function FeaturedProduct({ data }: FeaturedProductProps) {
  return (
    <section
      id="featured-products"
      className="
    relative
    bg-[#eef3f8]
    py-20

    dark:bg-[#020817]

    lg:py-15
  "
    >
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        {/* Section introduction */}

        <div className="mb-8">
          <p
            className="
      text-sm
      font-semibold
      uppercase
      tracking-[0.2em]
      text-blue-700

      dark:text-blue-400
    "
          >
            Featured Products
          </p>
        </div>

        {/* Sticky card stack */}
        <div className="relative">
          {products.map((product, index) => (
            <div
              key={product.title}
              className="sticky"
              style={{
                top: `${96 + index * 20}px`,
                zIndex: index + 1,
                paddingBottom: index === products.length - 1 ? "0px" : "112px",
              }}
            >
              <ProductCard product={product} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

type ProductCardProps = {
  product: Product;
  index: number;
};

function ProductCard({ product, index }: ProductCardProps) {
  const Icon = product.icon;

  return (
    <article
      className="
        relative
        min-h-[120px]
        overflow-hidden
        rounded-[36px]
        border
        border-slate-200/80
        bg-white
        shadow-[0_30px_90px_rgba(15,23,42,0.12)]

        dark:border-white/10
        dark:bg-[#071126]
        dark:shadow-[0_35px_100px_rgba(0,0,0,0.45)]

        lg:min-h-[180px]
      "
    >
      {/* Card atmospheric background */}
      <div
        aria-hidden="true"
        className={`
          pointer-events-none
          absolute
          -right-40
          -top-40
          h-[34rem]
          w-[34rem]
          rounded-full
          bg-gradient-to-br
          ${product.accent}
          opacity-15
          blur-[100px]

          dark:opacity-25
        `}
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[linear-gradient(to_right,rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.05)_1px,transparent_1px)]
          [background-size:48px_48px]

          dark:bg-[linear-gradient(to_right,rgba(96,165,250,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(96,165,250,0.05)_1px,transparent_1px)]
        "
      />

      <div
        className="
          relative
          z-10
          grid
          min-h-[620px]
          items-center
          gap-14
          p-8

          sm:p-10

          lg:min-h-[680px]
          lg:grid-cols-[0.92fr_1.08fr]
          lg:p-14
        "
      >
        {/* Product information */}
        <div>
          <div className="flex items-center gap-4">
            <span
              className={`
                flex
                size-12
                items-center
                justify-center
                rounded-2xl
                bg-gradient-to-br
                ${product.accent}
                text-white
                shadow-lg
              `}
            >
              <Icon className="size-6" aria-hidden="true" />
            </span>

            <div>
              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-blue-700

                  dark:text-blue-400
                "
              >
                {product.eyebrow}
              </p>

              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Product {String(index + 1).padStart(2, "0")}
              </p>
            </div>
          </div>

          <h3
            className="
              mt-8
              text-4xl
              font-bold
              tracking-tight
              text-slate-950

              sm:text-5xl

              dark:text-white
            "
          >
            {product.title}
          </h3>

          <p
            className="
              mt-6
              max-w-xl
              text-lg
              leading-8
              text-slate-600

              dark:text-slate-400
            "
          >
            {product.description}
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {product.features.map((feature) => (
              <li
                key={feature}
                className="
                  flex
                  items-start
                  gap-3
                  text-sm
                  leading-6
                  text-slate-700

                  dark:text-slate-300
                "
              >
                <span
                  aria-hidden="true"
                  className="
                    mt-2
                    size-1.5
                    shrink-0
                    rounded-full
                    bg-cyan-500
                    shadow-[0_0_8px_rgba(6,182,212,0.8)]
                  "
                />

                {feature}
              </li>
            ))}
          </ul>

          <Link
            href={product.href}
            className="
              group
              mt-10
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-slate-950
              px-6
              py-3
              text-sm
              font-semibold
              text-white
              transition-all
              duration-300

              hover:-translate-y-0.5
              hover:bg-blue-700
              hover:shadow-[0_15px_35px_rgba(37,99,235,0.25)]

              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-blue-500
              focus-visible:ring-offset-2

              dark:bg-white
              dark:text-slate-950
              dark:hover:bg-blue-400
            "
          >
            {product.cta}

            <ArrowUpRight
              aria-hidden="true"
              className="
                size-4
                transition-transform
                duration-300
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </Link>
        </div>

        {/* Product dashboard preview */}
        <ProductPreview product={product} />
      </div>
    </article>
  );
}

function ProductPreview({ product }: { product: Product }) {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div
        aria-hidden="true"
        className={`
          absolute
          inset-[8%]
          rounded-full
          bg-gradient-to-br
          ${product.accent}
          opacity-20
          blur-[80px]

          dark:opacity-30
        `}
      />

      <div
        className="
          relative
          overflow-hidden
          rounded-[28px]
          border
          border-slate-200/80
          bg-slate-50/90
          p-4
          shadow-[0_28px_80px_rgba(15,23,42,0.16)]
          backdrop-blur-xl

          dark:border-white/10
          dark:bg-slate-950/75
          dark:shadow-[0_30px_90px_rgba(0,0,0,0.55)]

          sm:p-5
        "
      >
        {/* Preview toolbar */}
        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-slate-200/80
            pb-4

            dark:border-white/10
          "
        >
          <div className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-red-400" />
            <span className="size-2.5 rounded-full bg-amber-400" />
            <span className="size-2.5 rounded-full bg-emerald-400" />
          </div>

          <span className="text-xs text-slate-500 dark:text-slate-400">
            Live platform preview
          </span>
        </div>

        <div className="grid gap-4 pt-5 sm:grid-cols-2">
          <PreviewMetric
            label={product.preview.label}
            value={product.preview.value}
          />

          <PreviewMetric
            label={product.preview.secondaryLabel}
            value={product.preview.secondaryValue}
          />
        </div>

        {/* Fake analytics chart */}
        <div
          className="
            mt-4
            rounded-2xl
            border
            border-slate-200/80
            bg-white
            p-5

            dark:border-white/10
            dark:bg-white/[0.04]
          "
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-900 dark:text-white">
                Platform activity
              </p>

              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Last seven days
              </p>
            </div>

            <span
              className="
                rounded-full
                bg-emerald-500/10
                px-3
                py-1
                text-xs
                font-medium
                text-emerald-700

                dark:text-emerald-300
              "
            >
              +18.4%
            </span>
          </div>

          <div className="mt-8 flex h-44 items-end gap-3">
            {[42, 64, 51, 78, 68, 88, 96].map((height, index) => (
              <div
                key={index}
                className="
                  relative
                  flex-1
                  overflow-hidden
                  rounded-t-lg
                  bg-blue-500/10
                "
                style={{ height: `${height}%` }}
              >
                <div
                  className={`
                    absolute
                    inset-x-0
                    bottom-0
                    h-full
                    bg-gradient-to-t
                    ${product.accent}
                    opacity-80
                  `}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Small activity rows */}
        <div className="mt-4 grid gap-3">
          {[
            "New activity recorded",
            "Report generated",
            "Workflow completed",
          ].map((item, index) => (
            <div
              key={item}
              className="
                  flex
                  items-center
                  justify-between
                  rounded-xl
                  border
                  border-slate-200/70
                  bg-white
                  px-4
                  py-3

                  dark:border-white/10
                  dark:bg-white/[0.04]
                "
            >
              <div className="flex items-center gap-3">
                <span
                  className={`
                      size-2
                      rounded-full
                      bg-gradient-to-br
                      ${product.accent}
                    `}
                />

                <span className="text-sm text-slate-700 dark:text-slate-300">
                  {item}
                </span>
              </div>

              <span className="text-xs text-slate-400">{index + 1}m ago</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

type PreviewMetricProps = {
  label: string;
  value: string;
};

function PreviewMetric({ label, value }: PreviewMetricProps) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-slate-200/80
        bg-white
        p-5

        dark:border-white/10
        dark:bg-white/[0.04]
      "
    >
      <p className="text-xs text-slate-500 dark:text-slate-400">{label}</p>

      <p
        className="
          mt-3
          text-3xl
          font-semibold
          tracking-tight
          text-slate-950

          dark:text-white
        "
      >
        {value}
      </p>
    </div>
  );
}
