import Image from "next/image"

export default function WIP()
{
  return <div>
    <div className="text-4xl flex justify-center pb-8">
      Page Work In Progress
    </div>
    <div className="flex justify-center">
      <Image
        src="/WIP.png"
        alt="Hammer and Wrench"
        width="250"
        height="250"
      />
    </div>

  </div>

}