"use client";
import { FlipWords } from "@/components/ui/flip-words";
import { SparklesCore } from "@/components/ui/sparkles";
import { Highlight } from "@/components/ui/hero-highlight";
import { Icon } from "@iconify/react";

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
      <div className="container mx-auto relative flex flex-col justify-start mt-[20vh] py-20 px-5 h-[calc(100vh-20vh-3.5rem)]">
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

        {/* Text at the bottom */}
        <div className="flex mt-auto items-center text-center text-xl font-semibold font-unifont flex-col space-y-2">
          <div>BUILD WHAT YOU WANT WITH US!</div>
          <Icon icon="memory:menu-down-fill" width="30" height="30" className="text-primary animate-bounce"/>
        </div>
      </div>
    </div>
  );
}
