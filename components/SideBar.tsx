"use client";

import { useSession, signOut } from "next-auth/react";
import NewChat from "./NewChat"
import { db } from "../firebase";;

const SideBar = () => {
  const { data: session } = useSession();
  return (
    <div className=" text-white flex flex-col p-2 h-screen text-sm ">
      <div className="flex-1">
        <div>
          <NewChat />
          <div>AI Model selecttion </div>
          {/* map through chat rows */}
          <div>

          </div>
        </div> 
      </div>
      {session && (
        //create logout? pop up modal
        <div
          className="rounded-lg px-5 py-3 text-sm flex items-center
    hover:bg-gray-700/70 space-x-2 cursor-pointer text-gray-300
    // eslint-disable-next-line @next/next/no-img-element
    transition-all duration-200 ease-out"
          onClick={() => signOut()}
        >
          {" "}
          <img
            className="rounded-full"
            width={30}
            height={30}
            src={session.user?.image!}
            alt="profile"
          />{" "}
          <p>{session.user?.name!}</p>{" "}
        </div>
      )}
    </div>
  );
};

export default SideBar;
