// import Image from "next/image";\
// import ProjectCardDefault from "../components/ProjectCardDefault";
import PCEncrypta from "../components/PCEncrypta";
import PCPortfolio from "../components/PCPortfolio";
import PCWDS from "../components/PCWDS";

/*
* w-[512]
* w-512
* w-[496]
* w-496
*/

export default function Home() {
  return (
    <main className="min-h-screen xl:pt-12 bg-zinc-900 w-full">
      <div className="w-full h-full justify-between">
        <div className="w-full pb-4 pr-4 flex justify-center font-[family-name:var(--font-geist-mono)]">
          <div className="text-5xl">
            Things I&#39;ve Made:
          </div>
        </div>
        <div className="w-full h-full flex flex-col xl:flex-row justify-center">
          <div className="p-8">
            <PCEncrypta>
            </PCEncrypta>
          </div>
          <div className="p-8">
            <PCWDS>
            </PCWDS>
          </div>
        </div>
        <div className="w-full h-full flex flex-col xl:flex-row justify-center">
          <div className="p-8 pb-0">
            <PCPortfolio>
            </PCPortfolio>
          </div>
        </div>
      </div>
    </main>
    );
  }