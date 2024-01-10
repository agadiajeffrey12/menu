"use client";
import Image from "next/image";
import { Data } from "@/utils/Data";
import Showcase from "./components/Showcase";
import { useEffect, useState } from "react";
import First from "./components/First";


interface item{
  softDrinks:{
    name:string,
    price:string,
    category:string | undefined,
    image:string|undefined
  },
  Whiskey:{
    name:string,
    price:string,
    category:string | undefined,
    image:string|undefined
  },
  Cream:{
    name:string,
    price:string,
    category:string | undefined,
    image:string|undefined
  },
}
export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const arr: any = [];
    Object.keys(Data).forEach((key:any) => {
      const value = Data[key];
      arr.push({ name: key, value });
    });
    setData(arr);
  }, [Data]);

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <main className="w-full max-w-[1300px] m-auto h-[100vh]">
      <header className="flex w-[98.5%] h-[4rem] border-b items-center mb-4">
        <h2 className="text-3xl font-bold">Menu</h2>
      </header>
      <div className="w-full flex flex-wrap gap-2">
        {data?.map((item: any, i: number) => (
          <First key={i} image={item.value[0].image} text={item.value[0].category} />
        ))}
      </div>
    </main>
  );
}
