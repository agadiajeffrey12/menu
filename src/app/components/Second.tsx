import React from 'react'

export default function Second({item}:any) {
  // console.log(item)
  return (
    <div  className='w-[48%] max-w-[15rem] h-[13rem]  rounded bg-[#294d61] overflow-hidden relative'>
      <img src={item.image } className='w-full h-full object-cover'/>
      <div className="absolute bottom-0 left-0 w-full h-[50%] flex justify-between bg-slate-700/50 p-2">
        <p className='laptop:text-xl phone:text-[.8rem]'>{item.name}</p>
        <p className='laptop:text-xl phone:text-[.8rem]'>{item?.price}</p>
      </div>
    </div>
  )
}
