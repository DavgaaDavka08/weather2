"use client";

import { Left } from "@/components/Left";
import { Rigth } from "@/components/Rigth";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-2 h-screen relative overflow-hidden">
      <Left />
      <Rigth />
    </div>
  );
}
