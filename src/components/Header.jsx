import Link from "next/link";

export default function Header() {
    return (
        <header className="w-full bg-red-700 color-red-500 h-16">
            <div className="flex items-center h-full content shadow md:shadow-none justify-center">
                <div className="flex items-center w-full gap-x-1 mx-auto max-w-screen-md justify-center">
                    <div className="flex gap-4 md:gap-6 text-gray-500 items-end">
                        <Link className="text-xl text-yellow-500" href="/about">About</Link>
                        <Link className="font-medium text-white text-2xl" href="/">Erol Eren Yılmaz</Link>
                        <Link className="text-xl text-yellow-500" href="/posts/first-post">Blogs</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}