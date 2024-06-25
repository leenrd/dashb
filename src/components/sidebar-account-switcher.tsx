"use client";

import { FC } from "react";
import * as React from "react";
import {ChevronsUpDown, CirclePlus } from "lucide-react";

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
import { accounts } from "@/mock-data/account-switcher";
import { Separator } from "./ui/separator";

interface AccountSwitcherProps {}

const AccountSwitcher: FC<AccountSwitcherProps> = ({}) => {
  const [open, setOpen] = React.useState(false);
  const [users, _] = React.useState(accounts);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between px-2 h-auto"
        >
          <AccountBlock
            init={users[0].init}
            name={users[0].value}
            type={users[0].type}
          />
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full min-w-64 p-0">
        <Command>
          <CommandList>
            <CommandEmpty>No account found.</CommandEmpty>
            <CommandGroup>
              <p className="text-slate-400 text-xs p-2">
                Accounts ({users.length})
              </p>
              {users.map((account) => (
                <CommandItem
                  key={account.value}
                  value={account.value}
                  onSelect={() => {
                    setOpen(false);
                  }}
                >
                  <div
                    className={`h-2 w-2 rounded-full mr-2 ${account.color}`}
                  ></div>
                  {account.label}
                </CommandItem>
              ))}
              <Separator className="my-1" />
              <CommandItem onSelect={() => setOpen(false)}>
                <CirclePlus size={15} className="mr-2" />
                Add account
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

type AccountBlockProps = {
  init: string;
  name: string;
  type: string;
};

const AccountBlock = ({ init, name, type }: AccountBlockProps) => {
  return (
    <div className="flex items-center gap-2">
      <div className="bg-yellow-400 h-9 w-9 flex items-center justify-center rounded-md font-bold">
        {init}
      </div>
      <div className="flex flex-col items-start">
        <h1 className="font-semibold text-md">{name}</h1>
        <p className="text-xs font-normal text-slate-500">{type}</p>
      </div>
    </div>
  );
};

export default AccountSwitcher;
