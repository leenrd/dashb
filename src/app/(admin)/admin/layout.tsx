import PageWidthWrapper from "@/components/page-width-wrapper";
import AccountSwitcher from "@/components/sidebar-account-switcher";
import SidebarSignOut from "@/components/sidebar-sign-out";
import { Button } from "@/components/ui/button";
import { Grid2x2Check, LayoutGrid, Settings } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <nav className="w-full flex h-screen">
      <aside className="hidden md:grid h-full w-full max-w-72 grow fixed grid-rows-3 gap-y-5 overflow-y-auto border-r border-gray-200 p-4">
        <section className="flex flex-col gap-5 row-span-2">
          <AccountSwitcher />

          <ul className="flex flex-col">
            <li>
              <Link href="/">
                <Button variant="ghost" className="w-full justify-start px-3">
                  <LayoutGrid size={15} className="mr-2" />
                  Overview
                </Button>
              </Link>
            </li>
            <li>
              <Link href="/">
                <Button variant="ghost" className="w-full justify-start px-3">
                  <Grid2x2Check size={15} className="mr-2" />
                  Records
                </Button>
              </Link>
            </li>
            <li>
              <Link href="/">
                <Button variant="ghost" className="w-full justify-start px-3">
                  <Settings size={15} className="mr-2" />
                  Settings
                </Button>
              </Link>
            </li>
          </ul>
        </section>

        <div className="flex items-end">
          <SidebarSignOut />
        </div>
      </aside>
      <article className="max-h-screen container w-full">
        <PageWidthWrapper>{children}</PageWidthWrapper>
      </article>
    </nav>
  );
};

export default Layout;
