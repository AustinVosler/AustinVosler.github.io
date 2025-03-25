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

        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-md">Hi, I'm Austin</h1>
          <p className="mt-4 text-lg md:text-2xl text-gray-200 max-w-xl drop-shadow-sm">Developer • Musician • Lifelong Learner</p>
          <div className="mt-6 flex gap-4 justify-center">
            <Link href="/projects">
              <button className="bg-sky-700 hover:bg-neutral-700 text-white font-bold text-xl py-2 px-4 rounded font-[family-name:var(--font-geist-mono)] shadow-md">
                See my projects
              </button>
            </Link>
            <Link href="/AustinVoslerResume11-5-24.pdf" target="pdf-frame">
              <button className="bg-sky-700 hover:bg-neutral-700 text-white font-bold text-xl py-2 px-4 rounded font-[family-name:var(--font-geist-mono)] shadow-md">
                Resume
              </button>
            </Link>
          </div>
        </div>
      </section>

      <div className="flex flex-col xl:flex-row w-full h-full justify-between p-4 xl:p-24">
        <div className="w-full pb-4 pr-4 font-[family-name:var(--font-geist-mono)]">
          <div className="text-4xl pb-8">
            Hi! I&#39;m Austin
          </div>
          <div className="text-2xl pb-4">
            I am a 3rd-year member of the Burnett Honors College at the University of Central Florida, where I am studying Computer Science.
          </div>
          <div className="text-2xl pb-4">
            As a passionate scholar, I am dedicated to learning everything I can to be able to better the world.
            Whether it is solving problems as a programmer, or adding to the world&#39;s beauty as a musician, it is important
            for me to find ways to both challenge myself and positively impact my community around me. 
          </div>
          <Link href="/projects">
            <button className="bg-sky-700 hover:bg-neutral-700 text-white font-bold py-2 px-4 rounded font-[family-name:var(--font-geist-mono)]">
              See my projects!
            </button>
          </Link>
          <Link href="/AustinVoslerResume11-5-24.pdf" target="pdf-frame" className="pl-4">
            <button className="bg-sky-700 hover:bg-neutral-700 text-white font-bold py-2 px-4 rounded font-[family-name:var(--font-geist-mono)]">
              Resume
            </button>
          </Link>
        </div>
        <div className="w-full h-full flex justify-center">
          <Image 
            className="rounded-full aspect-square object-cover w-full max-w-4xl h-auto mx-auto sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-7xl"
            src="/headshot.jpg"
            alt="headshot of Austin Vosler"
            width={500}
            height={500}
          />
        </div>
      </div>
    </main>
  );
}