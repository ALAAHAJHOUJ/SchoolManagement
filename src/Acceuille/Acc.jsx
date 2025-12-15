import React from 'react'

function Acc() {
  return (
        <div className='w-[70%] min-h-[100px] flex flex-col gap-[20px] items-center justify-center'>
           <span className='absolute top-0 left-0 text-white text-[30px] font-[500] inline-block m-[10px]'>LMW</span>
           <div className='text-white text-[40px] inline-block text-center'>Who are you!</div>
           <div className='flex flex-col gap-[15px] w-full  min-h-[100px]'>
             <ul className='flex flex-col items-center gap-5 text-[20px]'>
                  <li className='border-[1px] border-white text-white rounded-[15px] w-[180px] h-[60px] flex justify-center items-center bg-[#ffffff63] cursor-pointer hover:shadow-[0px_0px_23px_6px_rgba(255,255,255,0.63)] hover:bg-[#ffffff81]'>Student </li>
                  <li className='border-[1px] border-white text-white rounded-[15px] w-[180px] h-[60px] flex justify-center items-center bg-[#ffffff63] cursor-pointer hover:shadow-[0px_0px_23px_6px_rgba(255,255,255,0.63)] hover:bg-[#ffffff81]'>Teacher</li>
                  <li className='border-[1px] border-white text-white rounded-[15px] w-[180px] h-[60px] flex justify-center items-center bg-[#ffffff63] cursor-pointer hover:shadow-[0px_0px_23px_6px_rgba(255,255,255,0.63)] hover:bg-[#ffffff81]'>Parent</li>
             </ul>
           </div>
        </div>
  )
}

export default Acc