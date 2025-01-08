"use client";
import { Header } from "@/components/Header";
import { Left } from "@/components/Left";
import { Rigth } from "@/components/Rigth";
import Image from "next/image";
import { useState } from "react";
export default function Home() {
  const [cities, setCities] = useState(["ulaanbaator", "tokyoo", "dublin"]);
  const [search, setSearch] = useState([]);
  const searchHandler = (e) => {
    const values = e.target.value;
    const filterleh = cities.filter((city) => {
      return city.includes(values);
    });
    setSearch(filterleh);
  };
  return (
    <div className="grid grid-cols-2 h-screen relative overflow-hidden">
      <div className="flex flex-col">
        <Header
          cities={cities}
          setCities={setCities}
          search={search}
          setSearch={setSearch}
          searchHandler={searchHandler}
        />
        <Left cities={cities} search={search} />
      </div>
      <Rigth />
    </div>
  );
}
