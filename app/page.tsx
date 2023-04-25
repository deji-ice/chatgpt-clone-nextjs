/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { Inter } from "next/font/google";
import { SunIcon, BoltIcon, ExclamationTriangleIcon } from "@heroicons/react/24/outline";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex text-white flex-col items-center justify-center px-2 h-screen">
      <h1 className="text-4xl font-bold mb-20">Chat GPT</h1>
      <div className=" flex space-x-2 text-center">
        <div className="flex-1 flex flex-col items-center">
          <div className="flex flex-col items-center mb-5">
          <SunIcon className="h-8 w-8" />
          <h1>Examples</h1>
          </div>
          <div className="space-y-5">
            <p className="infoText">"Got any creative ideas for a 10 year old’s birthday?"</p>
            <p className="infoText">"Got any creative ideas for a 10 year old’s birthday?"</p>
            <p className="infoText">"Got any creative ideas for a 10 year old’s birthday?"</p>
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center">
          <div className=" flex flex-col items-center mb-5">
          <BoltIcon className="h-8 w-8" />
          <h1>Capabilities</h1>
          </div>
          <div className="space-y-5">
            <p className="infoText">"Got any creative ideas for a 10 year old’s birthday?"</p>
            <p className="infoText">"Got any creative ideas for a 10 year old’s birthday?"</p>
            <p className="infoText">"Got any creative ideas for a 10 year old’s birthday?"</p>
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center">
          <div className="flex flex-col items-center mb-5">
          <ExclamationTriangleIcon className="h-8 w-8" />
          <h1>Limitations</h1>
          </div>
          <div className="space-y-5">
            <p className="infoText">"Got any creative ideas for a 10 year old’s birthday?"</p>
            <p className="infoText">"Got any creative ideas for a 10 year old’s birthday?"</p>
            <p className="infoText">"ChatGPT may generate responses that are offensive"</p>
          </div>
        </div>
      </div>
    </div >
  );
}
