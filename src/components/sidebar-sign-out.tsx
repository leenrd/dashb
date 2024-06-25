"use client";

import { FC } from "react";
import * as React from "react";
import { EllipsisVertical, LogOut } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "./ui/separator";
import { useRouter } from "next/navigation";

interface SidebarSignOutProps {}

const SidebarSignOut: FC<SidebarSignOutProps> = ({}) => {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between border-none "
        >
          <h3>Sign out</h3>
          <EllipsisVertical className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full min-w-64 p-0">
        <Command>
          <CommandList>
            <CommandEmpty>No account found.</CommandEmpty>
            <CommandGroup>
              <p className="text-slate-400 text-xs p-2">Sign out options</p>
              <CommandItem
                onSelect={() => {
                  setOpen(false);
                  router.push("https://leenard-portfolio.vercel.app/");
                }}
              >
                My Portfolio
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="remixicon mb-1 ml-1 size-2.5 shrink-0 text-gray-500"
                >
                  <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
                </svg>
              </CommandItem>
              <CommandItem
                onSelect={() => {
                  setOpen(false);
                  router.push("https://github.com/leenrd/dashboard-template");
                }}
              >
                Project Repository
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="remixicon mb-1 ml-1 size-2.5 shrink-0 text-gray-500"
                >
                  <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
                </svg>
              </CommandItem>
              <Separator className="my-1" />
              <CommandItem onSelect={() => setOpen(false)}>
                <LogOut size={15} className="mr-2" />
                Sign out
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default SidebarSignOut;
