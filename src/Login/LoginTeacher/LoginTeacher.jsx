import React from 'react'

function LoginTeacher() {
  return (
    <div className='border-red-600 border-[1px] w-[100%] flex justify-center items-center h-full'>
        <div className='border-white bg-[#ffffff83] border-[2px] shadow-[0px_0px_23px_6px_rgba(255,255,255,0.63)] w-[94%] min-[400px]:w-[360px] flex flex-col gap-[30px] items-center  h-[500px] rounded-[12px]'>
             <span className='text-[33px] font-[500] text-white inline-block mt-5'>Login</span>
             <form action="" className='flex flex-col items-center gap-[36px] w-full'>
                <input className='rounded-[10px] h-[50px] w-[260px] box-border pl-[10px] bg-[#ffffff65] border-white border-[2px] focus:border-[#e2e2e2] outline-none placeholder:text-[#747474c9]' placeholder='enter Your Username' type="text" />
                <input className='rounded-[10px] h-[50px] w-[260px] box-border pl-[10px] bg-[#ffffff65] border-white border-[2px] focus:border-[#e2e2e2] outline-none placeholder:text-[#747474c6]' placeholder='enter Your Password' type="text" />
                <button type='submit' className='border-white border-[2px] w-[260px] h-[60px] text-white text-[20px] font-[600] rounded-[13px] bg-blue-500 hover:bg-blue-300 '>Login</button>
                <div className='flex flex-col items-center gap-5'>
                        <a href="" className='text-[purple] underline hover:no-underline'>Forgot password?</a>
                        <a href="" className='text-[purple] underline hover:no-underline'>SignUp</a>
                </div>
             </form>
        </div>
    </div>
  )
}

export default LoginTeacher