import React from 'react'
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

export default function Showcase({name,item}:{name:any,item:any}) {
  return (
    <div className='min-w-[20rem] flex flex-col gap-2 mb-2'>
      <h3 className="text-2xl font-semibold">{name}</h3>
      {item.map((item:any,i:number)=>(
        <div key={i} className='w-[22rem] h-[3rem] border rounded flex items-center p-2 justify-between'>
            <p>{item.name}</p>
            <p>{item.price}</p>
        </div>
      ))}
    </div>
  )
}
