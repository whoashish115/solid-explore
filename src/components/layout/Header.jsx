'use client'
import {
  HiSun,
  HiMoon,
} from 'react-icons/hi'
import { useTheme } from 'next-themes';

const Header = () => {

  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
      <header className={` rounded-full fixed  py-2  z-50 w-full`} >
        <nav className="h-full w-full flex justify-between rounded-full p-2 items-center max-w-[1250px] px-3  sm:px-6 md:px-12 mx-auto">
   <ul  className="flex flex-wrap gap-3   rounded-full align-center ">
              <li  onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}>
                <div className={`py-3 capitalize px-3 rounded-full flex gap-2 justify-center items-center select-none text-base  cursor-pointer outline-none text-title hover:border-primary  hover:bg-primary bg-box border-2 border-outline hover:text-white `} >
                  <span className='text-2xl'>
                   {currentTheme =='light' ? <HiMoon /> :<HiSun/>}
                  </span>
                </div>
              </li>
          </ul>

        </nav>
      </header>


  )
}

export default Header