import Link from "next/link";


export default function Header() {

    const scrollHeader = (val) => {
        const element = document.getElementById(val);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <header className="w-full bg-dark-blue color-red-500 h-16 sticky top-0 z-10">
            <div className="flex items-center h-full content shadow md:shadow-none justify-center">
                <div className="flex justify-between w-full gap-x-1 mx-auto max-w-screen-lg justify-center">
                    <button className="font-medium text-white text-2xl pl-4 md:pl-0" onClick={() => scrollHeader("intro")}>EEY</button>
                    <ul className="flex gap-1 md:gap-2 text-gray-500 items-end pl-4">
                        <li className="text-xl text-sky-300 px-2 py-1 rounded-md font-semibold hover:bg-sky-300 hover:text-sky-800 transition duration-300 cursor-pointer" onClick={() => scrollHeader("about")}>About</li>
                        <li className="text-xl text-sky-300 px-2 py-1 rounded-md font-semibold hover:bg-sky-300 hover:text-sky-800 transition duration-300 cursor-pointer" onClick={() => scrollHeader("interests")}>Interest</li>
                        {/* <Link className="text-xl text-yellow-500 px-3 py-1 rounded-md font-semibold hover:bg-white hover:text-red-600 transition duration-300" href="/posts">Blogs</Link> */}
                        <li className="text-xl text-sky-300 px-2 py-1 rounded-md font-semibold hover:bg-sky-300 hover:text-sky-800 transition duration-300 cursor-pointer" onClick={() => scrollHeader("resume")}>Resume</li>
                        <li className="text-xl text-sky-300 px-2 py-1 rounded-md font-semibold hover:bg-sky-300 hover:text-sky-800 transition duration-300 cursor-pointer" onClick={() => scrollHeader("portfolio")}>Portfolio</li>
                    </ul>
                </div>
            </div>
        </header>
    )
}