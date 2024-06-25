import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="grid grid-cols-2  min-h-screen p-24">
      <div className="flex gap-10  flex-col items-center justify-center">
        <h1 className="leading-3 font-bold text-2xl">Your pages here +</h1>
        <Link href="/admin">
          <Button>Go to admin dashboard</Button>
        </Link>
      </div>
      <div className="flex gap-10 flex-col items-center justify-center p-20">
        <p className="self-start font-bold">FAQS</p>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it responsive?</AccordionTrigger>
            <AccordionContent>
              ⚡ Yes. It uses tailwind query classes.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How is it styled?</AccordionTrigger>
            <AccordionContent>
              🦖 It comes with default styles from shadcn-ui and tremor raws,
              the graphs are from nevos library.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it functional?</AccordionTrigger>
            <AccordionContent>
              😏 Yes sir. It&apos;s functional by default, the tables used are
              powered by tanstack table and the forms are validated by zod and
              react-hook-form. All table functions are done in the server.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Bat anggaling mo?</AccordionTrigger>
            <AccordionContent>☠️...</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </main>
  );
}
