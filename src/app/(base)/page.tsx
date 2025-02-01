import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FlipWords } from "@/components/ui/flip-words";
import { Highlight } from "@/components/ui/hero-highlight";
import { SparklesCore } from "@/components/ui/sparkles";
import { Timeline } from "@/components/ui/timeline";
import newsData from "@/data/news.json";
import { Icon } from "@iconify/react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HackIt | Hack Into It!",
  description:
    "我們致力於培養台灣青少年為青少年籌辦黑客松的能力，並在台灣推廣黑客松風氣。透過舉辦活動，培養台灣學生籌辦活動的實務經驗、獨立思考能力，並提升在地學生的程式設計與創新思維。",
};

const data = [
  {
    title: "使命與願景",
    content: (
      <p className="font-unifont flex min-h-[30vh] items-center justify-center text-xl duration-300 hover:scale-105 md:text-4xl">
        我們致力於培養台灣青少年為青少年籌辦黑客松的能力，並在台灣推廣黑客松風氣。透過舉辦活動，培養台灣學生籌辦活動的實務經驗、獨立思考能力，並提升在地學生的程式設計與創新思維。
      </p>
    ),
  },
  {
    title: "目標對象",
    content: (
      <p className="font-unifont flex min-h-[30vh] items-center justify-center text-xl duration-300 hover:scale-105 md:text-4xl">
        我們的目標對象是台灣青少年，除了培養他們在活動籌備和組織管理上的實務能力，我們也重視提升他們在不同領域之間協作的技能。透過參與黑客松，學生們不僅能夠拓展科技視野，還能夠在實踐中學習如何整合多元知識，激發創新潛能。
      </p>
    ),
  },
  {
    title: "團隊文化",
    content: (
      <p className="font-unifont flex min-h-[30vh] items-center justify-center text-xl duration-300 hover:scale-105 md:text-4xl">
        我們是一個學習型組織，強調不斷成長、反思與改進為核心價值。團隊由一群充滿熱情的高中生主導，鼓勵自主學習、互相合作，共同打造一個開放、積極的環境。我們鼓勵每位成員提出創意並共同實現，彼此協作，迎接挑戰，並推動不斷的自我突破。
      </p>
    ),
  },
  {
    title: "我們的目標",
    content: (
      <p className="font-unifont flex min-h-[30vh] items-center justify-center text-xl duration-300 hover:scale-105 md:text-4xl">
        我們的目標是培養具備創新精神和領導能力的未來科技人才，透過黑客松活動，讓學生在實踐中學會合作、創造與解決複雜問題。我們致力於激發每位學生的潛能，促使他們在科技領域不斷突破自我，為社會發展做出卓越貢獻。
      </p>
    ),
  },
];

export default function Home() {
  const words1 = ["創意", "代碼", "挑戰"];
  const words2 = ["未來", "社會", "成就"];

  return (
    <div className="flex w-full flex-col items-start justify-start bg-transparent">
      {/* Particle Background */}
      <div className="absolute inset-0 h-screen w-full">
        <SparklesCore id="tsparticlesfullpage" />
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto mt-[10vh] flex h-[calc(100vh-10vh-3.5rem)] flex-col justify-start px-5 py-20 md:mt-[20vh] md:h-[calc(100vh-20vh-3.5rem)]">
        <div className="text-left">
          <div className="flex flex-col space-y-5">
            {/* Title Text */}
            <div className="font-unifont text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
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
            <div className="border-accent font-unifont border-l-8 p-5 text-2xl">
              <Highlight className="p-2">
                學習，創造 —
                在這裡，我們不僅提升自己的技能，還勇於挑戰新領域，開創無限可能。
              </Highlight>
            </div>
          </div>
        </div>

        {/* Scroll Down Button */}
        <Link href="#detail-section" className="mt-auto">
          <div className="font-unifont flex cursor-pointer flex-col items-center space-y-2 text-center text-xl font-semibold select-none">
            <div>BUILD WHAT YOU WANT WITH US!</div>
            <Icon
              icon="memory:menu-down-fill"
              width="30"
              height="30"
              className="text-primary animate-bounce"
            />
          </div>
        </Link>
      </div>

      {/* Target Section */}
      <div
        id="detail-section"
        className="container mx-auto mb-52 min-h-screen flex-col items-center space-y-10 p-2"
      >
        <Timeline data={data} />

        <NewsSection />

        <div className="flex min-h-[40vh] flex-col space-y-10">
          <div className="font-unifont flex items-center space-x-5 text-3xl md:text-5xl">
            <Icon icon="memory:box" className="text-primary rotate-12" />
            <h1>聯絡我們</h1>
          </div>

          <div className="font-unifont flex flex-1 flex-col items-center justify-center space-y-10">
            <div className="flex flex-wrap items-center justify-center space-x-2 text-xl break-words md:text-5xl">
              <span className="justify-center break-all">WE ARE</span>
              <span className="bg-secondary justify-center p-1 break-normal whitespace-nowrap">
                ALWAYS HAPPY
              </span>
              <span className="justify-center break-all">
                TO HEAR FROM YOU!
              </span>
            </div>
            <div className="flex items-end space-x-5 text-3xl md:text-5xl">
              <button className="hover:text-secondary flex space-x-5 p-2">
                <span className="hover:text-secondary animate-bounce">
                  <Link href={"mailto:contact@hackit.tw"}>
                    contact@hackit.tw
                  </Link>
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
    <div className="flex min-h-[40vh] flex-col space-y-10">
      <div className="font-unifont flex items-center space-x-5 text-3xl md:text-5xl">
        <Icon icon="memory:box" className="text-primary rotate-12" />
        <h1>最新消息</h1>
      </div>

      <div className="flex min-h-[30vh] items-center justify-center">
        <Accordion type="single" collapsible className="w-full max-w-[60rem]">
          {newsData.news.slice(0, 3).map((item) => (
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
          <div className="mt-10 flex items-center justify-center">
            <Link href={"../news"}>
              <button className="bg-card font-unifont hover:bg-primary flex items-center space-x-1 p-2">
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
