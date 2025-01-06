"use client";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Highlight } from "@/components/ui/hero-highlight";
import { Icon } from "@iconify/react";
import newsData from "@/data/news.json";

export default function Home() {
  return (
    <div className="w-full bg-transparent flex items-start justify-start flex-col">
      {/* Main Content */}
      <div className="container mx-auto relative flex flex-col justify-start mt-[10vh] md:mt-[20vh] py-20 px-5">
        <div className="text-left">
          <div className="flex flex-col space-y-5">
            {/* Title Text */}
            <div className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-unifont">
              <Highlight>NEWS</Highlight>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-unifont mt-[30vh]">
          <NewsSection></NewsSection>
        </div>
      </div>
    </div>
  );
}

function NewsSection() {
  return (
    <div className="min-h-[40vh] flex flex-col space-y-10">
      <div className="font-unifont text-3xl md:text-5xl flex items-center space-x-5">
        <Icon icon="memory:box" className="text-primary rotate-12" />
        <h1>最新消息</h1>
      </div>

      <div className="flex justify-center items-center min-h-[30vh]">
        <Accordion type="single" collapsible className="max-w-[60rem] w-full">
          {newsData.news.slice().map((item) => (
            <AccordionItem
              value={item.title}
              key={item.title}
              className="font-unifont "
            >
              <AccordionTrigger className="text-xl md:text-3xl flex justify-start items-center space-x-4 hover:no-underline">
                <div>
                  <Icon
                    icon="ri:newspaper-line"
                    className="text-secondary rotate-12"
                  />
                </div>
                <p className="hover:no-underline">{item.title}</p>
              </AccordionTrigger>
              <AccordionContent className="text-lg">
                <p className="border-l-4 border-accent p-2">{item.content}</p>
                <p>{item.time}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
