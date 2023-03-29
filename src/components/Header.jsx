import Link from "next/link";

export default function Header() {
    return (
        <header className="w-full bg-red-200 color-red-500 h-12">
            <div className="flex items-center h-full content shadow md:shadow-none justify-center">
                <div className="flex items-center justify-between w-full gap-x-1 mx-auto max-w-screen-md">
                    <Link className="font-medium text-red-800" href="/posts/first-post">Erol Eren Yılmaz</Link>

                    <div className="flex gap-4 md:gap-6 text-gray-500">
                        <Link href="/about">About</Link>
                        <Link href="/posts/first-post">Blogs</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}