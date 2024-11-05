import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen p-4 xl:p-24 bg-zinc-900 w-full">
      <div className="flex flex-col xl:flex-row w-full h-full justify-between">
        <div className="w-full pb-4 pr-4 font-[family-name:var(--font-geist-mono)]">
          <div className="text-4xl pb-8 ">
            Hi! I&#39;m Austin
          </div>
          <div className="text-2xl pb-4">
            I am a 3rd-year member of the Burnett Honors College at the University of Central Florida, where I am studying Computer Science.
          </div>
          <div className="text-2xl pb-4 ">
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
              className="rounded-full aspect-square object-cover"
              src="/headshot.jpg"
              alt="headshot of Austin Vosler"
              // fill
              width="500"
              height="500"
            />
          </div>
      </div>
    </main>
  );
}
