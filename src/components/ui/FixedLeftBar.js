import React from 'react'

export default function FixedLeftBar() {
  return (
    <div>
      <a
      href="index-nine.html#"
      onclick="topFunction()"
      id="back-to-top"
      class="back-to-top fixed hidden text-lg rounded-full z-10 bottom-5 end-5 h-9 w-9 text-center bg-violet-600 text-white leading-9"
      ><i class="uil uil-arrow-up"></i
    ></a>
    
    
    <div class="fixed top-[25%] -left-2 z-50 hidden sm:block">
      <span class="relative inline-block rotate-90">
        <input type="checkbox" class="checkbox opacity-0 absolute" id="chk" />
        <label
          class="label bg-slate-900 dark:bg-white shadow dark:shadow-gray-800 cursor-pointer rounded-full flex justify-between items-center p-1 w-14 h-8"
          for="chk"
        >
          <i class="uil uil-moon text-[20px] text-yellow-500"></i>
          <i class="uil uil-sun text-[20px] text-yellow-500"></i>
          <span
            class="ball bg-white dark:bg-slate-900 rounded-full absolute top-[2px] left-[2px] w-7 h-7"
          ></span>
        </label>
      </span>
    </div>

   
    <div class="fixed top-[40%] -left-3 z-50">
      <a href="index-nine.html" id="switchRtl">
        <span
          class="py-1 px-3 relative inline-block rounded-b-md -rotate-90 bg-white dark:bg-slate-900 shadow-md dark:shadow dark:shadow-gray-800 font-semibold rtl:block ltr:hidden"
          >LTR</span
        >
        <span
          class="py-1 px-3 relative inline-block rounded-b-md -rotate-90 bg-white dark:bg-slate-900 shadow-md dark:shadow dark:shadow-gray-800 font-semibold ltr:block rtl:hidden"
          >RTL</span
        >
      </a>
    </div>
    </div>
  )
}
