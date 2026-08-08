// import { ThemeToggle } from "./theme-toggle";
// import { Logo } from "./logo";

// export function Header() {
//   return (
//     <header className="border-b">
//       <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
//         <div className="text-xl font-bold">
//           <Logo />
//         </div>

//         <nav className="hidden gap-8 md:flex">
//           <a
//             className="text-sm font-medium text-muted-foreground transition-colors hover:text-blue-600"
//             href="#"
//           >
//             Home
//           </a>
//           <a
//             className="text-sm font-medium text-muted-foreground transition-colors hover:text-blue-600"
//             href="#"
//           >
//             Services
//           </a>
//           <a
//             className="text-sm font-medium text-muted-foreground transition-colors hover:text-blue-600"
//             href="#"
//           >
//             Products
//           </a>
//           <a
//             className="text-sm font-medium text-muted-foreground transition-colors hover:text-blue-600"
//             href="#"
//           >
//             Contact
//           </a>
//         </nav>

//         <ThemeToggle />
//       </div>
//     </header>
//   );
// }

import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { CompanyMegaMenu } from "./company-mega-menu";
import { Logo } from "./logo";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <header
      className="
    sticky
    top-0
    z-50
    border-b
    border-slate-200/70
    bg-[#eef3f8]/95
    backdrop-blur-sm

    dark:border-white/10
    dark:bg-[#020817]/95
  "
    >
      <div
        className="
          mx-auto
          flex
          h-16
          max-w-7xl
          items-center
          justify-between
          px-6
          lg:px-8
        "
      >
        <Logo />

        <NavigationMenu align="center" className="hidden md:flex">
          <NavigationMenuList className="gap-2">
            <NavigationMenuItem>
              <NavigationMenuLink
                render={<Link href="/" />}
                className={navigationMenuTriggerStyle()}
              >
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                render={<Link href="/services" />}
                className={navigationMenuTriggerStyle()}
              >
                Services
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                render={<Link href="/products" />}
                className={navigationMenuTriggerStyle()}
              >
                Products
              </NavigationMenuLink>
            </NavigationMenuItem>

            <CompanyMegaMenu />
          </NavigationMenuList>
        </NavigationMenu>

        <ThemeToggle />
      </div>
    </header>
  );
}
