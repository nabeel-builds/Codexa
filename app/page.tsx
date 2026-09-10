"use clinet"

import { HoleBackground } from "@/components/animate-ui/components/backgrounds/hole";
import { BlueTitle, GrayTitle } from "@/components/reusable";
import { Badge } from "@/components/ui/badge";
import { cn } from "cn";
import { useState } from "react";




export default function Home() {

  
const [prompt, setPrompt] = useState("")
const [placeholderIndex, setPlaceholderIndex] = useState(0)
const [isFocused, setIsFocused] = useState(false)

  return (
    <main className="min-h-screen bg-[#0a0a0a] selection:bg-white/20">
      <section className="relative flex flex-col items-center overflow-hidden px-4 pb-24 pt-40 text-center">
        <HoleBackground
         strokeColor="rgba(255,255,255,0.05)" 
        className="absolute inset-0 h-full w-full"
        style={{
          maskImage:
          "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.5) 50%, transparent 100%)",
          WebkitMaskImage:
          "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.5) 50%, transparent 100%)"
        }}
         />
        <Badge variant={"outline"} className="gap-2 p-4 backdrop-blur-sm">
          <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          Powered by Gemini 3.5 Flash
        </Badge>

        <h1 className="mx-auto max-w-3xl text-balance font-serif text-5xl leading-tight tracking-tight sm:text-6xl lg:text-7xl z-10">
        <GrayTitle>Your dream comes true</GrayTitle>
        <br />
        <BlueTitle>from a single prompt.</BlueTitle>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-balance text-balance leading-relaxed text-white/40 z-10">
          Describe what you want to build. AI writes the code, picks the
          packages, and renders a live preview all inside your browser. </p>

          {/* Prompt Box */}
          <div className="relative mx-auto mt-12 w-full max-w-2xl">
            <div className={cn("rounded-2xl border bg-[#111111] duration-200",
              isFocused
              ? "border-white/20 ring-1 ring-white/8"
              : "border-white/8"
            )}></div>
          </div>
      </section>
    </main>
  );
}
