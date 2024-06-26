import { ProgressBar } from "@/components/progressbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { FC } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";

interface PageProps {}

const data = [
  {
    title: "Storage",
    value: 89,
    included: "10 GB included",
    money: "$87.2",
  },
  {
    title: "API Requests",
    value: 62,
    included: "1000 included",
    money: "$2.2",
  },
  {
    title: "Data Transfer",
    value: 24.5,
    included: "500 MB included",
    money: "$0.2",
  },
];

const Page: FC<PageProps> = ({}) => {
  return (
    <section className="mt-7">
      <Card className="bg-slate-50">
        <CardHeader>
          <CardTitle className="text-base">
            This workspace is currently on free plan
          </CardTitle>
          <CardDescription>
            Boost your analytics and unlock advanced features with our premium
            plans.
          </CardDescription>
        </CardHeader>
      </Card>

      <article className="grid grid-cols-3 mt-7">
        <div className="flex-col flex gap-1 col-span-1 max-w-xs">
          <h1 className="font-bold">Billing</h1>
          <p className="text-gray-600 text-sm">
            Overview of current billing cycle based on fixed and on-demand
            charges.
          </p>
        </div>

        <div className="col-span-2">
          <div className="flex justify-between items-start">
            <span>
              <h3 className="text-sm font-semibold">Starter Plan</h3>
              <p className="text-sm text-gray-600">
                Discounted plan for start-ups and growing companies
              </p>
            </span>
            <h2>$90</h2>
          </div>
          <Separator className="my-4" />
          {data.map((item, i) => (
            <>
              <div className="grid grid-cols-3" key={i}>
                <span className="col-span-2">
                  <h3 className="text-sm font-semibold">{item.title}</h3>
                  <ProgressBar
                    value={item.value}
                    className="mt-2 [&>*]:h-1.5 min-w-full"
                  />
                  <span className="flex justify-between mt-2">
                    <span className="text-xs text-gray-600">
                      Used {item.value}%
                    </span>
                    <span className="text-xs text-gray-600">
                      {item.included}
                    </span>
                  </span>
                </span>
                <span className="flex justify-end items-start">
                  <h2 className="col-span-1">{item.money}</h2>
                </span>
              </div>
              <Separator className="my-4" />
            </>
          ))}

          <div className="col-span-2">
            <div className="flex justify-between items-start">
              <span>
                <h3 className="text-sm font-semibold">
                  Query super caching (AS-Philippines 1)
                </h3>
                <p className="text-sm text-gray-600">
                  Discounted plan for start-ups and growing companies
                </p>
              </span>
              <h2>$280</h2>
            </div>
          </div>
          <Separator className="my-4" />
          <div className="col-span-2">
            <div className="flex justify-between items-start">
              <span>
                <h3 className="text-sm font-semibold">
                  Total amount for this billing cycle
                </h3>
              </span>
              <h2>$280</h2>
            </div>
          </div>
        </div>
        <Separator className="my-10 col-span-3" />
      </article>

      <article className="grid grid-cols-3 mt-7">
        <div className="flex-col flex gap-1 col-span-1 max-w-xs">
          <h1 className="font-bold">Add-ons</h1>
          <p className="text-gray-600 text-sm">
            Additional services to boost your services.
          </p>
        </div>

        <div className="col-span-2 flex flex-col gap-6 mb-14">
          <Card className="min-w-full grid grid-cols-3 items-center">
            <CardHeader className="col-span-2">
              <p className="text-gray-600 text-sm">$25/month</p>
              <CardTitle className="text-base">
                Advanced bot protection
              </CardTitle>
              <CardDescription>
                Safeguard your assets with our cutting-edge bot protection. Our
                AI solution identifies and mitigates automated traffic to
                protect your workspace from bad bots.
              </CardDescription>
            </CardHeader>
            <Separator className="col-span-3" />
            <CardFooter className="col-span-3 bg-slate-100/50 flex justify-between text-sm pt-5">
              <div className="flex gap-2">
                <Switch id="airplane-mode" />
                <label htmlFor="airplane-mode">Activate</label>
              </div>
              <Button variant={"link"} className="text-slate-600">
                Learn more <Link size={15} className="mx-1" />
              </Button>
            </CardFooter>
          </Card>
          <Card className="min-w-full grid grid-cols-3 items-center">
            <CardHeader className="col-span-2">
              <p className="text-gray-600 text-sm">$50/month</p>
              <CardTitle className="text-base">Workspace insights</CardTitle>
              <CardDescription>
                Real-time analysis of your workspace&apos;s usage, enabling you
                to make well-informed decisions for optimization.
              </CardDescription>
            </CardHeader>
            <Separator className="col-span-3" />
            <CardFooter className="col-span-3 bg-slate-100/50 flex justify-between text-sm pt-5">
              <div className="flex gap-2">
                <Switch id="airplane-mode" />
                <label htmlFor="airplane-mode">Activate</label>
              </div>
              <Button variant={"link"} className="text-slate-600">
                Learn more <Link size={15} className="mx-1" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </article>
    </section>
  );
};

export default Page;
