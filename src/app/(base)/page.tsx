"use client";
import { FlipWords } from "@/components/ui/flip-words";
import { SparklesCore } from "@/components/ui/sparkles";
import { Highlight } from "@/components/ui/hero-highlight";
import { Icon } from "@iconify/react";
import { Timeline } from "@/components/ui/timeline";
import newsData from "@/data/news.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const data = [
  {
    title: "使命與願景",
    content: (
      <p className="min-h-[30vh] text-xl md:text-4xl justify-center flex items-center font-unifont hover:scale-105 duration-300">
        我們致力於培養台灣青少年為青少年籌辦黑客松的能力，並在台灣推廣黑客松風氣。透過舉辦活動，培養台灣學生籌辦活動的實務經驗、獨立思考能力，並提升在地學生的程式設計與創新思維。
      </p>
    ),
  },
  {
    title: "目標對象",
    content: (
      <p className="min-h-[30vh] text-xl md:text-4xl justify-center flex items-center font-unifont hover:scale-105 duration-300">
        我們的目標對象是台灣青少年，除了培養他們在活動籌備和組織管理上的實務能力，我們也重視提升他們在不同領域之間協作的技能。透過參與黑客松，學生們不僅能夠拓展科技視野，還能夠在實踐中學習如何整合多元知識，激發創新潛能。
      </p>
    ),
  },
  {
    title: "團隊文化",
    content: (
      <p className="min-h-[30vh] text-xl md:text-4xl justify-center flex items-center font-unifont hover:scale-105 duration-300">
        我們是一個學習型組織，強調不斷成長、反思與改進為核心價值。團隊由一群充滿熱情的高中生主導，鼓勵自主學習、互相合作，共同打造一個開放、積極的環境。我們鼓勵每位成員提出創意並共同實現，彼此協作，迎接挑戰，並推動不斷的自我突破。
      </p>
    ),
  },
  {
    title: "我們的目標",
    content: (
      <p className="min-h-[30vh] text-xl md:text-4xl justify-center flex items-center font-unifont hover:scale-105 duration-300">
        我們的目標是培養具備創新精神和領導能力的未來科技人才，透過黑客松活動，讓學生在實踐中學會合作、創造與解決複雜問題。我們致力於激發每位學生的潛能，促使他們在科技領域不斷突破自我，為社會發展做出卓越貢獻。
      </p>
    ),
  },
];

export default function Home() {
  const words1 = ["創意", "代碼", "挑戰"];
  const words2 = ["未來", "社會", "成就"];

  return (
    <div className="w-full bg-transparent flex items-start justify-start flex-col">
      {/* Particle Background */}
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto relative flex flex-col justify-start mt-[10vh] md:mt-[20vh] py-20 px-5 h-[calc(100vh-10vh-3.5rem)] md:h-[calc(100vh-20vh-3.5rem)]">
        <div className="text-left">
          <div className="flex flex-col space-y-5">
            {/* Title Text */}
            <div className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-unifont">
              <span className="block md:inline">
                解鎖
                <FlipWords
                  words={words1}
                  className="text-secondary inline-block sm:inline"
                />
                ，
              </span>
              <span className="block sm:inline">
                駭入
                <FlipWords
                  words={words2}
                  className="text-primary inline-block"
                />
                !
              </span>
            </div>
            {/* Description Text */}
            <div className="font-unifont text-2xl border-l-8 border-accent p-5 ">
              <Highlight className="p-2">
                學習，創造 —
                在這裡，我們不僅提升自己的技能，還勇於挑戰新領域，開創無限可能。
              </Highlight>
            </div>
          </div>
        </div>

        {/* Scroll Down Button */}
        <div className="flex mt-auto items-center text-center text-xl font-semibold font-unifont flex-col space-y-2 select-none cursor-pointer">
          <div>BUILD WHAT YOU WANT WITH US!</div>
          <Icon
            icon="memory:menu-down-fill"
            width="30"
            height="30"
            className="text-primary animate-bounce"
          />
        </div>
      </div>

      {/* Target Section */}
      <div
        id="detail-section"
        className="container mx-auto items-center min-h-screen flex-col space-y-10 mb-52 p-2"
      >
        <Timeline data={data} />

        <NewsSection />

        <div className="min-h-[40vh] flex flex-col space-y-10">
          <div className="font-unifont text-3xl md:text-5xl flex items-center space-x-5">
            <Icon icon="memory:box" className="text-primary rotate-12" />
            <h1>聯絡我們</h1>
          </div>

          <div className="flex flex-col items-center justify-center flex-1 font-unifont space-y-10">
            <div className="text-xl md:text-5xl flex items-center justify-center flex-wrap space-x-2 break-words">
              <span className="break-all justify-center">WE ALWAYS</span>
              <span className="p-1 bg-secondary whitespace-nowrap break-normal justify-center">
                WELCOME
              </span>
              <span className="break-all justify-center">
                TO CONTACT WITH YOU!
              </span>
            </div>
            <div className="flex items-end space-x-5 text-3xl md:text-5xl">
              <button  className="flex space-x-5 p-2 hover:text-secondary">
                <span className="animate-bounce hover:text-secondary">
                  <Link href={"mailto:contact@hackit.tw"}>contact@hackit.tw</Link>
                </span>
              </button>
            </div>
          </div>
        </div>

        <div>
          <p className="font-unifont text-6xl"></p>
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
          {newsData.news.slice(0, 3).map((item) => (
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
          <div className="flex justify-center items-center mt-10">
            <Link href={"../news"}>
            <button className="bg-card p-2 font-unifont items-center flex space-x-1 hover:bg-primary">
              <p>更多資訊</p>
              <Icon icon="pixelarticons:arrow-right" />
            </button>
            </Link>
          </div>
        </Accordion>
      </div>
    </div>
  );
}
