

function InscriptionParent() {

  const envoyer=(e)=>{
    e.preventDefault()
  }








  return (
      <div className='w-full min-h-full flex justify-center items-start mb-9 mt-8'>
          <div className='border-white border-[2px] bg-[#ffffff83] shadow-[0px_0px_23px_6px_rgba(255,255,255,0.63)] w-[94%] min-[400px]:w-[360px] flex flex-col gap-[30px] items-center rounded-[12px] mb-8'>
              <span className='text-[33px] font-[500] text-white inline-block mt-5 text-center'>Parent Sign Up</span>
              <form action="" className=' flex flex-col items-center gap-[36px]  w-full mb-6 '>
                    <input className='rounded-[10px] h-[50px] w-[260px] box-border pl-[10px] bg-[#ffffff65] border-white border-[2px] focus:border-[#e2e2e2] outline-none placeholder:text-[#747474c9]' placeholder='enter Your fullName' type="text" />
                    <input className='rounded-[10px] h-[50px] w-[260px] box-border pl-[10px] bg-[#ffffff65] border-white border-[2px] focus:border-[#e2e2e2] outline-none placeholder:text-[#747474c9]' placeholder='enter Your Username' type="text" />
                    <input className='rounded-[10px] h-[50px] w-[260px] box-border pl-[10px] bg-[#ffffff65] border-white border-[2px] focus:border-[#e2e2e2] outline-none placeholder:text-[#747474c6]' placeholder='enter Your email' type="text" />
                    <input className='rounded-[10px] h-[50px] w-[260px] box-border pl-[10px] bg-[#ffffff65] border-white border-[2px] focus:border-[#e2e2e2] outline-none placeholder:text-[#747474c9]' placeholder='enter Your password' type="password" />
                    <input className="rounded-[10px] h-[50px] w-[260px] box-border pl-[10px] bg-[#ffffff65] border-white border-[2px] focus:border-[#e2e2e2] outline-none placeholder:text-[#747474c9]" type="text" placeholder="Enter Your child code"></input>
                    <input type="file" id="f" hidden></input>
                    <label htmlFor="f" className=' w-[180px] h-[50px] rounded-[12px] flex justify-center items-center text-white font-[500] bg-[#7e7e7e3d] border-white border-[1px] cursor-pointer hover:bg-[#d6d6d6a1]'>Chose an image</label>
                    <button onClick={envoyer} type='submit' className='border-white border-[2px] w-[260px] h-[60px] text-white text-[20px] font-[600] rounded-[13px] bg-[#5d5dfcb2] hover:bg-blue-300 outline-none'>Send</button>
                    
                    <div className='flex flex-col items-center gap-5 mb-5'>
                            <a href="" className='text-[purple] underline hover:no-underline'>Already have an Account?</a>
                    </div>
              </form>
          </div>
      </div>
  )
}

export default InscriptionParent