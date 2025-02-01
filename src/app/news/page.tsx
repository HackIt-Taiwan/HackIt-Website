import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Highlight } from "@/components/ui/hero-highlight";
import newsData from "@/data/news.json";
import { Icon } from "@iconify/react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HackIt | News",
  description: "查看 HackIt 的最新消息",
};

export default function Home() {
  return (
    <div className="flex w-full flex-col items-start justify-start bg-transparent">
      {/* Main Content */}
      <div className="relative container mx-auto mt-[10vh] flex flex-col justify-start px-5 py-20 md:mt-[20vh]">
        <div className="text-left">
          <div className="flex flex-col space-y-5">
            {/* Title Text */}
            <div className="font-unifont text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              <Highlight duration={1}>NEWS</Highlight>
            </div>
          </div>
        </div>
        <div className="font-unifont mt-[30vh] flex flex-col">
          <NewsSection></NewsSection>
        </div>
      </div>
    </div>
  );
}

function NewsSection() {
  return (
    <div className="flex min-h-[40vh] flex-col space-y-10">
      <div className="font-unifont flex items-center space-x-5 text-3xl md:text-5xl">
        <Icon icon="memory:box" className="text-primary rotate-12" />
        <h1>最新消息</h1>
      </div>

      <div className="flex min-h-[30vh] items-center justify-center">
        <Accordion type="single" collapsible className="w-full max-w-[60rem]">
          {newsData.news.slice().map((item) => (
            <AccordionItem
              value={item.title}
              key={item.title}
              className="font-unifont"
            >
              <AccordionTrigger className="flex items-center justify-start space-x-4 text-xl hover:no-underline md:text-3xl">
                <div>
                  <Icon
                    icon="ri:newspaper-line"
                    className="text-secondary rotate-12"
                  />
                </div>
                <p className="hover:no-underline">{item.title}</p>
              </AccordionTrigger>
              <AccordionContent className="text-lg">
                <p className="border-accent border-l-4 p-2">{item.content}</p>
                <p>{item.time}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
