"use client";
import Image from "next/image";
import { Data } from "@/utils/Data";
import Showcase from "./components/Showcase";
import { useEffect, useState } from "react";
import First from "./components/First";
import Overlay from "./components/Overlay";


export default function Home() {
  const [data, setData] = useState([]);
  const [show,setShow]=useState<Boolean>(false)
  const [name,setName]=useState()
  const [it,setIt]=useState<any>()
  useEffect(() => {
    const arr: any = [];
    Object.keys(Data).forEach((key:any) => {
      const value = Data[key];
      arr.push({ name: key, value });
    });
    setData(arr);
  }, [Data]);

  // const set = (item:any)=>{
  //   // console.log('working')
  //   setShow(true)
  //   setIt(item)
  // }
  return (
    <main className="w-full max-w-[1300px] m-auto h-[100vh] relative">
      { show && <Overlay name={it?.name} item={it?.value} sh={setShow}/>}
      <header className="flex w-[98.5%] h-[4rem] border-b items-center mb-4">
        <h2 className="text-3xl font-bold">Menu</h2>
      </header>
      <div className="w-full flex flex-wrap gap-2">
        {data?.map((item: any, i: number) => (
          <First key={i} image={item.value[0].image} text={item.value[0].category} da={item} se={setIt} sh={setShow}/>
        ))}
      </div>
    </main>
  );
}
