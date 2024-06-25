"use client";

import { TabNavigation, TabNavigationLink } from "@/components/tab-navigation";
import { FC } from "react";
import { usePathname } from "next/navigation";
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const pathname = usePathname();
  return (
    <div>
      <h1 className="text-lg font-semibold text-gray-900 sm:text-xl dark:text-gray-50">
        Settings
      </h1>
      <nav className="mt-10">
        <TabNavigation>
          <TabNavigationLink
            href="/admin/settings/general"
            active={pathname === "/admin/settings/general"}
          >
            General
          </TabNavigationLink>
          <TabNavigationLink
            href="/admin/settings/billing"
            active={pathname === "/admin/settings/billing"}
          >
            Billing & Usage
          </TabNavigationLink>
        </TabNavigation>
      </nav>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
