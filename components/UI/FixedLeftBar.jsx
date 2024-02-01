import { FaMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";
import { SlArrowUp } from "react-icons/sl";

export default function FixedLeftBar() {
  return (
    <div>
      <a
        href="#"
        id="back-to-top"
        className="back-to-top fixed hidden text-lg rounded-full z-10 bottom-5 end-5 h-9 w-9 text-center bg-red-600 align-middle text-white leading-9"
      >
        <SlArrowUp className=" text-center align-middle mt-2 ml-2" />
      </a>

      <div className="fixed top-[25%] -left-2 z-50 hidden sm:block">
        <span className="relative inline-block rotate-90">
          <input
            type="checkbox"
            className="checkbox opacity-0 absolute"
            id="chk"
          />
          <label
            className="label bg-slate-900 dark:bg-white shadow dark:shadow-gray-800 cursor-pointer rounded-full flex justify-between items-center p-1 w-14 h-8"
            htmlFor="chk"
          >
            <FaMoon className="text-[20px] text-gray-500" />
            <MdOutlineWbSunny className="text-[20px] text-gray-500" />
            <span className="ball bg-white dark:bg-slate-900 rounded-full absolute top-[2px] left-[2px] w-7 h-7"></span>
          </label>
        </span>
      </div>
    </div>
  );
}
