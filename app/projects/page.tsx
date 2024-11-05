// import Image from "next/image";\
import ProjectCardDefault from "../components/ProjectCardDefault";
import PCEncrypta from "../components/PCEncrypta";
import PCPortfolio from "../components/PCPortfolio";
import PCWDS from "../components/PCWDS";

export default function Home() {
  return (
    <main className="min-h-screen min-w-screen p-4 xl:p-24 bg-zinc-900 w-full h-full">
      <div className="w-full h-full justify-between">
        <div className="w-full pb-4 pr-4 flex justify-center font-[family-name:var(--font-geist-mono)]">
          <div className="text-5xl">
            Things I&#39;ve Made:
          </div>
        </div>
        <div className="w-full h-full flex flex-col 2xl:flex-row justify-center">
          <div className="p-8">
            <PCEncrypta>
            </PCEncrypta>
          </div>
          <div className="p-8">
            <PCWDS>
            </PCWDS>
          </div>
        </div>
        <div className="w-full h-full flex flex-col 2xl:flex-row justify-center">
          <div className="p-8">
            <PCPortfolio>
            </PCPortfolio>
          </div>
        </div>
      </div>
    </main>
    );
  }
  