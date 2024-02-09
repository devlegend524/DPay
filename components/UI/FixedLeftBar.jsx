import { FaMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";
import { SlArrowUp } from "react-icons/sl";

export default function FixedLeftBar() {
  function changeTheme(e) {
    e.preventDefault();
    const htmlTag = document.getElementsByTagName("html")[0];

    if (htmlTag.className.includes("dark")) {
      htmlTag.className = "light";
    } else {
      htmlTag.className = "dark";
    }
  }

  return (
    <div>
      <a
        href="#"
        id="back-to-top"
        className="back-to-top fixed hidden text-lg rounded-full z-10 bottom-5 end-5 h-9 w-9 text-center bg-red-600 align-middle text-white leading-9"
      >
        <SlArrowUp className=" text-center align-middle mt-2 ml-2" />
      </a>

      <div
        className="fixed top-[25%] left-1 z-50 hidden sm:block p-1 rounded-full bg-red-600"
        onClick={changeTheme}
      >
        <span className="relative rotate-90 dark:bg-white p-2 bg-slate-900 rounded-full cursor-pointer w-[35px] h-[35px] flex justify-center items-center">
          <FaMoon className="text-[24px] text-gray-200 dark:hidden" />
          <MdOutlineWbSunny className="text-[22px] text-slate-900 dark:inline-block hidden" />
        </span>
      </div>
    </div>
  );
}
