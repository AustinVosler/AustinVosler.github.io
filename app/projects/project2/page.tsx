// import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen p-4 xl:p-24 bg-zinc-900 w-full">
      <div className="flex flex-col xl:flex-row w-full h-full justify-between">
        <div className="w-full pb-4 pr-4 font-[family-name:var(--font-geist-mono)]">
          <div className="text-4xl pb-8 ">
            Hi! I'm project 2
          </div>
          <div className="text-2xl pb-4">
            I am a 3rd-year member of the Burnett Honors College at the University of Central Florida, where I am studying Computer Science.
          </div>
          <div className="text-2xl ">
            As a passionate scholar, I am dedicated to learning everything I can to be able to better the world.
            Whether it is solving problems as a programmer, or adding to the world's beauty as a musician, it is important
            for me to find ways to both challenge myself and positively impact my community around me. 
          </div>
        </div>
          <div className="w-full h-full flex justify-center">
            {/* <Image 
              className="rounded-full aspect-square object-cover"
              src="/headshot.jpg"
              alt="headshot of Austin Vosler"
              // fill
              width="650"
              height="650"
            /> */}
          </div>
      </div>
    </main>
  );
}
