"use client";
import { db } from "../firebase";
import { PlusIcon } from "@heroicons/react/24/outline";
import { addDoc, collection, serverTimestamp } from "firebase/firestore/lite";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const NewChat = () => {
  const { data: session } = useSession();

  const router = useRouter();

  const createNewChat = async () => {
    const doc = await addDoc( collection(db, "users", session?.user?.email!, "chats"),
     {
      messages:[],
      userId: session?.user?.email!,
      createdAt:serverTimestamp()
    })
    router.push(`/chat/${doc.id}`)
    console.log(doc.id);
  };

  return (
    <div onClick={createNewChat} className=" border border-neutral-500 chatRow">
      <PlusIcon className="h-4 w-4" />
      <p>New chat</p>
    </div>
  );
};

export default NewChat;
