// import Image from "next/image";\
import ProjectCard from "../components/ProjectCard";
import projectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <main className="min-h-screen p-4 xl:p-24 bg-zinc-900 w-full">
      <div className="w-full h-full justify-between">
        <div className="w-full pb-4 pr-4 flex justify-center font-[family-name:var(--font-geist-mono)]">
          <div className="text-5xl">
            Things I've Made:
          </div>
        </div>
        <div className="w-full h-full flex justify-center">
          <ProjectCard>
          </ProjectCard>
          <ProjectCard>
          </ProjectCard>
        </div>
      </div>
    </main>
    );
  }
  