"use client";

import { FC } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "lucide-react";

const personalInfoSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  email: z.string().email(),
  birthYear: z.number().int().min(1900).max(2021),
  role: z.enum(["admin", "user"]),
});

interface PageProps {}

const Page: FC<PageProps> = ({}) => {
  const form = useForm<z.infer<typeof personalInfoSchema>>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      birthYear: new Date().getFullYear() - 18,
      role: "admin",
    },
  });

  function onSubmit(values: z.infer<typeof personalInfoSchema>) {
    console.log(values);
  }
  return (
    <section className="mt-7">
      <article className="grid grid-cols-3">
        <div className="flex-col flex gap-1 col-span-1 ">
          <h1 className="font-bold">Personal Information</h1>
          <p className="text-gray-600 text-sm">
            Manage your personal information and role.
          </p>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="col-span-2 flex flex-col gap-3"
          >
            <div className="flex gap-3 ">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>First name</FormLabel>
                    <FormControl>
                      <Input placeholder="leenard" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Last name</FormLabel>
                    <FormControl>
                      <Input placeholder="zarate" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="lolleenard9@gmail.com" {...field} />
                  </FormControl>
                  <FormDescription>This is your email address.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex gap-3">
              <FormField
                control={form.control}
                name="birthYear"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Birth year</FormLabel>
                    <FormControl>
                      <Input placeholder="2003" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>User role</FormLabel>
                    <FormControl>
                      <Input placeholder="Admin" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit" className="max-w-xs mt-6 self-end">
              Save changes
            </Button>
          </form>
        </Form>
      </article>
      <Separator className="my-10" />
      <article className="grid grid-cols-3">
        <div className="flex-col flex gap-1 col-span-1 ">
          <h1 className="font-bold">Notification settings</h1>
          <p className="text-gray-600 text-sm max-w-xs">
            Configure the types of notifications you want to receive.
          </p>
        </div>

        <div className="col-span-2 gap-4">
          <div>
            <h2 className="font-semibold">Team</h2>
            <p className="text-gray-600 text-sm">
              Configure the types of team alerts you want to receive.
            </p>
          </div>

          <div className="mt-10">
            <div className="flex items-center gap-4">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Team join requests
              </label>
            </div>
            <Separator className="my-4" />
            <div className="flex items-center gap-4">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Weekly team activity digest
              </label>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="font-semibold">Usage</h2>
            <p className="text-gray-600 text-sm">
              Configure the types of usage alerts you want to receive.
            </p>
          </div>

          <div className="mt-10 ">
            <div className="flex items-center gap-4">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                API incidents
              </label>
            </div>
            <Separator className="my-4" />
            <div className="flex items-center gap-4">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Platform incidents
              </label>
            </div>
            <Separator className="my-4" />
            <div className="flex items-center gap-4">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Payment transactions
              </label>
            </div>
          </div>

          <div className="col-span-2 flex justify-end">
            <Button type="submit" className="max-w-xs mt-12 self-end">
              Save changes
            </Button>
          </div>
        </div>
      </article>
      <Separator className="my-10" />
      <article className="grid grid-cols-3">
        <div className="flex-col flex gap-1 col-span-1 max-w-xs">
          <h1 className="font-bold">Danger zone</h1>
          <p className="text-gray-600 text-sm ">
            Manage general workspace. Contact system admin for more information.
            <span className="hover:underline font-medium mt-3 cursor-pointer flex items-center gap-1">
              Learn more <Link size={16} />
            </span>
          </p>
        </div>

        <div className="col-span-2 flex flex-col gap-12 mb-[10rem]">
          <Card className="min-w-full flex items-center">
            <CardHeader>
              <CardTitle className="text-base">Delete account</CardTitle>
              <CardDescription>
                Revoke your access to this team. Other people you have added to
                the workspace will remain.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="max-w-xs" variant={"destructive"}>
                Delete account
              </Button>
            </CardContent>
          </Card>
          <Card className="min-w-full grid grid-cols-3 items-center">
            <CardHeader className="col-span-2">
              <CardTitle className="text-base">Delete account</CardTitle>
              <CardDescription>
                Revoke your access to this team. Other people you have added to
                the workspace will remain.
              </CardDescription>
            </CardHeader>
            <CardContent className="col-span-1 flex justify-end">
              <Button className="max-w-xs" variant={"destructive"}>
                Delete workspace
              </Button>
            </CardContent>
            <Separator className="col-span-3" />
            <CardFooter className="col-span-3 bg-slate-100/50 flex text-sm text-slate-500 pt-5">
              This action is irreversible. All data will be lost.
            </CardFooter>
          </Card>
        </div>
      </article>
    </section>
  );
};

export default Page;
