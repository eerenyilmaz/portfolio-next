import Link from "next/link";

export default function Header() {
    return (
        <header className="w-full bg-red-700 color-red-500 h-16 sticky top-0 z-10">
            <div className="flex items-center h-full content shadow md:shadow-none justify-center">
                <div className="flex justify-between w-full gap-x-1 mx-auto max-w-screen-md justify-center">
                    <Link className="font-medium text-white text-2xl pl-4 md:pl-0" href="/">EEY</Link>
                    <div className="flex gap-1 md:gap-2 text-gray-500 items-end pl-4">
                        <Link className="text-xl text-yellow-500 px-2 py-1 rounded-md font-semibold hover:bg-white hover:text-red-600 transition duration-300" href="/about">About</Link>
                        <Link className="text-xl text-yellow-500 px-2 py-1 rounded-md font-semibold hover:bg-white hover:text-red-600 transition duration-300" href="/interest">Interest</Link>
                        {/* <Link className="text-xl text-yellow-500 px-3 py-1 rounded-md font-semibold hover:bg-white hover:text-red-600 transition duration-300" href="/posts">Blogs</Link> */}
                        <Link className="text-xl text-yellow-500 px-2 py-1 rounded-md font-semibold hover:bg-white hover:text-red-600 transition duration-300" href="/portfolio">Portfolio</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}