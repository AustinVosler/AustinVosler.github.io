import Image from "next/image";

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
                <div  className="flex justify-between items-center">
                  <a className="p-2" href="https://devpost.com/software/encrypta" rel="noopener noreferrer" target="_blank">
                    <svg fill="#ffffff" width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.002 1.61 0 12.004 6.002 22.39h11.996L24 12.004 17.998 1.61zm1.593 4.084h3.947c3.605 0 6.276 1.695 6.276 6.31 0 4.436-3.21 6.302-6.456 6.302H7.595zm2.517 2.449v7.714h1.241c2.646 0 3.862-1.55 3.862-3.861.009-2.569-1.096-3.853-3.767-3.853z"/></svg>
                  </a>
                  <a className="p-2" href="https://github.com/jake-tattersall/encrypta" rel="noopener noreferrer" target="_blank">
                    <svg width="30" height="30" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#fff"/></svg>
                  </a>
                  <span className="p-2 text-gray-400 text-base">October 2024</span>             
                </div>
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
                <div className="flex justify-between items-center">
                  <a className="p-2" href="https://drive.google.com/file/d/1cf-xft8sFrx48prrL8fxd51qfWEWyD0e/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg>
                  </a>
                  <a className="p-2" href="https://devpost.com/software/wizard-defense-service" rel="noopener noreferrer" target="_blank">
                    <svg fill="#ffffff" width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.002 1.61 0 12.004 6.002 22.39h11.996L24 12.004 17.998 1.61zm1.593 4.084h3.947c3.605 0 6.276 1.695 6.276 6.31 0 4.436-3.21 6.302-6.456 6.302H7.595zm2.517 2.449v7.714h1.241c2.646 0 3.862-1.55 3.862-3.861.009-2.569-1.096-3.853-3.767-3.853z"/></svg>
                  </a>
                  <a className="p-2" href="https://github.com/KHP8/LaunchingPoint" rel="noopener noreferrer" target="_blank">
                    <svg width="30" height="30" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#fff"/></svg>
                  </a>
                  <span className="p-2 text-gray-400 text-base">Feb. 2024 – Apr. 2024</span>
                </div>
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
