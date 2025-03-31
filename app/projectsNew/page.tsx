import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <main className="flex flex-col min-h-screen bg-zinc-900 w-full text-white font-[family-name:var(--font-geist-mono)]">
      <section className="py-16 px-0 xl:px-0">
        <h1 className="text-5xl font-bold mb-12 text-center">Projects</h1>

        <div className="space-y-0">
          {/* Encrypta */}
          <div className="flex flex-col xl:flex-row gap-0 items-stretch min-h-[600px] border-t border-zinc-800 even:bg-zinc-800 pt-8 pb-8">
            <div className="w-full xl:w-3/5 flex flex-col justify-center px-6 py-8 space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-4xl font-bold">Encrypta</h2>
                <span className="text-gray-400 text-base">October 2024</span>
              </div>
              <p className="text-xl text-gray-300">
                Created two handheld encrypted communication devices out of OLED displays, keypads, and microcontrollers. Designed the physical user interface and programmed interaction functionality into the keypad and buttons. Implemented a custom Playfair encryption cipher that scrambled the messages sent between the devices.
              </p>
              <div className="flex flex-wrap gap-2 text-base">
                <span className="bg-zinc-800 border border-zinc-700 px-3 py-1 rounded">Arduino</span>
                <span className="bg-zinc-800 border border-zinc-700 px-3 py-1 rounded">C++</span>
                <span className="bg-zinc-800 border border-zinc-700 px-3 py-1 rounded">Embedded Systems</span>
                <span className="bg-zinc-800 border border-zinc-700 px-3 py-1 rounded">Git</span>
              </div>
            </div>
            <div className="w-full xl:w-2/5 aspect-[16/9] relative">
              <Image
                src="/encrypta.png"
                alt="Screenshot of Encrypta project"
                fill
                className="object-cover rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          {/* Wizard Defense Service */}
          <div className="flex flex-col xl:flex-row-reverse gap-0 items-stretch min-h-[600px] border-t border-zinc-800 even:bg-zinc-800 pt-8 pb-8">
            <div className="w-full xl:w-3/5 flex flex-col justify-center px-6 py-8 space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-4xl font-bold">Wizard Defense Service</h2>
                <span className="text-gray-400 text-base">Feb. 2024 – Apr. 2024</span>
              </div>
              <p className="text-xl text-gray-300">
                Developed a 3rd-person ability-based video game with Unity via the high definition render pipeline. Arranged the user interface, including a reactive menuing system, settings editor, and a fluid heads up display. Led the design of custom ability frameworks and directed the art and sound design.
              </p>
              <div className="flex flex-wrap gap-2 text-base">
                <span className="bg-zinc-800 border border-zinc-700 px-3 py-1 rounded">Unity</span>
                <span className="bg-zinc-800 border border-zinc-700 px-3 py-1 rounded">C#</span>
                <span className="bg-zinc-800 border border-zinc-700 px-3 py-1 rounded">Git</span>
              </div>
            </div>
            <div className="w-full xl:w-2/5 aspect-[16/9] relative">
              <Image
                src="/wizard-defense.png"
                alt="Screenshot of Wizard Defense Service"
                fill
                className="object-cover rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          {/* Discord Bot */}
          <div className="flex flex-col xl:flex-row gap-0 items-stretch min-h-[600px] border-t border-zinc-800 even:bg-zinc-800 pt-8 pb-8">
            <div className="w-full xl:w-3/5 flex flex-col justify-center px-6 py-8 space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-4xl font-bold">Discord Bot</h2>
                <span className="text-gray-400 text-base">Nov. 2024 – Present</span>
              </div>
              <p className="text-xl text-gray-300">
                Created a Discord Bot that ranks user messages and stores them inside SQL databases. Programmed commands with the Pycord framework and organized user data into dynamically generated SQL tables for easy interaction and manipulation.
              </p>
              <div className="flex flex-wrap gap-2 text-base">
                <span className="bg-zinc-800 border border-zinc-700 px-3 py-1 rounded">Python</span>
                <span className="bg-zinc-800 border border-zinc-700 px-3 py-1 rounded">SQL</span>
                <span className="bg-zinc-800 border border-zinc-700 px-3 py-1 rounded">Raspberry Pi</span>
              </div>
            </div>
            <div className="w-full xl:w-2/5 aspect-[16/9] relative">
              <Image
                src="/discord-bot.png"
                alt="Screenshot of Discord Bot"
                fill
                className="object-contain rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
