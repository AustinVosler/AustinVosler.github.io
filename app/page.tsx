import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-zinc-900 w-full">
      <section
        className="relative flex-grow flex flex-col items-center justify-center min-h-screen px-6 text-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/background.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-md">Hi, I&#39;m Austin</h1>
          <p className="mt-4 text-xl md:text-3xl text-gray-200 max-w-xl drop-shadow-sm">Developer • Musician • Lifelong Learner</p>
        </div>
      </section>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center p-6 xl:px-24 xl:py-12">
        <div className="w-full max-w-2xl mx-auto text-center xl:text-left font-[family-name:var(--font-geist-mono)] xl:flex xl:flex-col xl:justify-center">
          <div className="text-4xl pb-8">
            Hi! I&#39;m Austin
          </div>
          <div className="text-2xl pb-4 max-w-2xl mx-auto xl:mx-0">
            I am a 3rd-year member of the Burnett Honors College at the University of Central Florida, where I am studying Computer Science.
          </div>
          <div className="text-2xl pb-4 max-w-2xl mx-auto xl:mx-0">
            As a passionate scholar, I am dedicated to learning everything I can to be able to better the world.
            Whether it is solving problems as a programmer, or adding to the world&#39;s beauty as a musician, it is important
            for me to find ways to both challenge myself and positively impact my community around me. 
          </div>
          <div className="flex justify-center xl:justify-start gap-4 mt-4">
            <Link href="/projects">
              <button className="bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-600 font-bold py-2 px-6 rounded-md font-[family-name:var(--font-geist-mono)] shadow-md">
                See my projects!
              </button>
            </Link>
            <Link href="/AustinVoslerResume3-30-25.pdf" target="pdf-frame">
              <button className="bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-600 font-bold py-2 px-6 rounded-md font-[family-name:var(--font-geist-mono)] shadow-md">
                Resume
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="relative aspect-square w-full max-w-[600px] xl:max-w-[700px] flex items-center justify-center">
            <Image 
              className="rounded-full object-cover"
              src="/headshot.jpg"
              alt="headshot of Austin Vosler"
              fill
              sizes="(max-width: 768px) 80vw, (max-width: 1280px) 600px, 700px"
            />
          </div>
        </div>
      </div>
    </main>
  );
}