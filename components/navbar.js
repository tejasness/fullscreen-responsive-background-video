import { useState } from "react"
import { useTheme } from 'next-themes'
import Link from "next/link"
import { useRouter } from 'next/router'

const Navbar = () => {
  const router = useRouter()
  const { theme, setTheme } = useTheme()
  const [active, setActive] = useState(false)
  const [navbarBlur, setNavbarBlur] = useState(false)

  const handleClick = () => {
    setActive(true)
  }

  const handleClose = () => {
    setActive(false)
  }

  const changeNavbarBlur = () => {
    if (window.scrollY > 630) {
      setNavbarBlur(true)
    }
    else {
      setNavbarBlur(false)
    }
  }

  if (typeof window !== "undefined") {
    window.addEventListener('scroll', changeNavbarBlur)
  }

  return (
    <div className="relative">
      <div className={navbarBlur ? "mt-0 flex backdrop-blur-lg dark:backdrop-brightness-50 backdrop-brightness-50 w-full fixed top-0 flex-1 md:px-12 px-6 py-4 md:py-4" : "mt-0 flex backdrop-blur-lg dark:backdrop-brightness-50 text-white backdrop-brightness-50 w-full fixed top-0 flex-1 md:px-12 px-6 py-4 md:py-4"}>
        <Link href="/" passHref><div onClick={active ? handleClose : active} className={navbarBlur ? 'font-bold text-3xl -my-2 hidden sm:block hover:scale-110 transition-transform cursor-pointer' : 'font-bold text-3xl -my-2 hidden sm:block hover:scale-110 transition-transform cursor-pointer'}>jrwjjrw</div></Link>
        <div className="hidden md:flex ml-10 space-x-4">
        </div>

        <div className="space-x-8 hidden flex-1 sm:flex justify-end">
          <Link href="/opportunities" passHref><div className={router.pathname == "/opportunities" ? "text-base hover:scale-110 transition-transform hover:font-semibold dark:text-pink-300 underline text-pink-700 font-bold cursor-pointer" : "text-base hover:scale-110 transition-transform hover:font-semibold font-normal cursor-pointer"}>One</div></Link>
          <Link href="/events" passHref><div className={router.pathname == "/events" ? "text-base hover:scale-110 transition-transform hover:font-semibold dark:text-pink-300 underline text-pink-700 font-bold cursor-pointer" : "text-base hover:scale-110 transition-transform hover:font-semibold font-normal cursor-pointer"}>Two</div></Link>
          <Link href="/blog" passHref><div className={router.pathname == "/blog" ? "text-base hover:scale-110 transition-transform hover:font-semibold dark:text-pink-300 underline text-pink-700 font-bold cursor-pointer" : "text-base hover:scale-110 transition-transform hover:font-semibold font-normal cursor-pointer"}>Three</div></Link>
        </div>
        <div className="sm:hidden cursor-pointer menu-icon" onClick={active ? handleClose : handleClick}>
          {
            !active &&
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </div>
          }
        </div>

        <div className="mx-auto">
          <Link href="/" passHref><div onClick={active ? handleClose : active} className={navbarBlur ? 'font-bold text-3xl -my-2 hover:scale-110 sm:hidden transition-transform cursor-pointer' : 'font-bold text-3xl -my-2 hover:scale-110 transition-transform sm:hidden cursor-pointer'}>jrwjjrw</div></Link>
        </div>
        <div className="sm:mr-0 sm:ml-4 md:ml-6" onClick={active ? handleClose : null}>
          {theme == 'light' && <button onClick={() => setTheme('dark')}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          </button>}
          {theme == 'dark' && <button onClick={() => setTheme('light')}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
            </svg>
          </button>}
        </div>

      </div>

      {active ?
        <div className="inset-0 navback h-screen flex flex-col backdrop-blur-md backdrop-brightness-50 fixed">
          <div className="dark:bg-gray-900 bg-gray-300 h-screen fixed p-10 w-max">
            <div className={router.pathname == "/opportunities" ? "text-base p-2 dark:text-pink-300 text-pink-700 underline font-normal cursor-pointer" : "text-base p-2 dark:text-white font-normal cursor-pointer"}><Link href="/opportunities"><a onClick={handleClose}>One</a></Link></div>
            <div className={router.pathname == "/events" ? "text-base p-2 dark:text-pink-300 text-pink-700 underline font-normal cursor-pointer" : "text-base p-2 dark:text-white font-normal cursor-pointer"}><Link href="/events"><a onClick={handleClose}>Two</a></Link></div>
            <div className={router.pathname == "/blog" ? "text-base p-2 dark:text-pink-300 text-pink-700 underline font-normal cursor-pointer" : "text-base p-2 dark:text-white font-normal cursor-pointer"}><Link href="/blog"><a onClick={handleClose}>Three</a></Link></div>
            {/* Height Screen */}
            <div className="h-screen"></div>
          </div>
          <div className="h-screen" onClick={handleClose}></div>
        </div>
        : handleClose}
    </div>
  )
}

export default Navbar