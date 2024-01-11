import React from 'react'
import First from './First'
import Second from './Second'
import {MdCancel} from "react-icons/md"

export default function Overlay({name,item,sh}:any) {
  return (
    <div className="w-[100vw] laptop:p-0 phone:p-4 flex flex-col gap-2 bg-[#26425a] fixed top-0 left-0 h-[100vh] overflow-x-hidden z-[555]">
      <div className='w-full  flex-col gap-2 max-w-[1200px] ml-auto mr-auto'>
        <header className="border-b w-full justify-between font-bold flex items-center h-[3rem] text-2xl">
            <p>{name + " " + "category" || "category"}</p>
            <div><MdCancel size="25" onClick={()=>sh(false)}/></div>
        </header>
        <div className="flex flex-wrap w-full gap-2 mt-4">
            {item?.map((item:any,i:number)=>(
                <Second key={i*77} item={item}/>
            ))}
        </div>
      </div>
    </div>
  )
}
