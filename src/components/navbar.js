import Link from "next/link"

export default function Navbar() {


  return (
    <div className="relative">
      <div className="mt-0 flex bg-gray-200 dark:bg-gray-800 w-full fixed top-0 flex-1 md:px-12 px-6 py-4 md:py-4">
       <div className="font-bold text-3xl -my-2 hidden sm:block hover:scale-110 transition-transform cursor-pointer"> <Link href="/" passHref>jrwjjrw</Link></div>
        <div className="hidden md:flex ml-10 space-x-4">
        </div>
        <div className="mx-auto">
          <Link href="/" passHref><div className="font-bold text-3xl -my-2 hover:scale-110 transition-transform sm:hidden cursor-pointer">jrwjjrw</div></Link>
        </div>
      </div>
    </div>
  )
}
