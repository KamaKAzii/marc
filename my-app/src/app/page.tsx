import Image from "next/image";
import { Square } from "./Square";

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col">
      <div className="flex items-start justify-center ">
        <div className="flex items-center justify-center space-x-8 mb-4 py-4 w-full border-b border-gray-800">
          <Image
            src="/pic.png"
            alt="Dersel"
            width={30}
            height={30}
            className="animate-spin duration-1000"
          />
          <div className="text-2xl font-bold">Marc AI</div>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        <div className="my-8 mx-4">
          <div className="grid grid-cols-3 gap-4">
            <Square soundUrl="/dominated.m4a" />
            <Square soundUrl="/dersel-angry.m4a" />
            <Square soundUrl="/dersley-annoyed.m4a" />
            <Square soundUrl="/exploding.m4a" />
            <Square soundUrl="/dersel.m4a" />
            <Square soundUrl="/pay-extra.m4a" />
          </div>
        </div>
      </div>
    </div>
  );
}
