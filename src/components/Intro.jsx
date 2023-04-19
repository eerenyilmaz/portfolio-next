import Link from "next/link";
import SocialMedia from "./SocialMedia";

export default function Intro() {
    return (
        <div className="w-full h-screen bg-image mb-20">
            <div className="intro-bg h-full flex items-center justify-center flex-col">
                <span className="text-white font-semibold flex flex-col items-center pb-40">
                    <span className="text-red-600 text-2xl md:text-3xl mb-5">Hello,</span>
                    <span className="text-yellow-600 text-4xl md:text-5xl mb-5">I'm Erol Eren Yılmaz</span>
                    <div className="inline-flex items-center justify-center w-full mb-10">
                        <hr className="w-12 h-1 bg-gray-200 border-0 rounded bg-yellow-600 mx-2" />
                        <span className="text-red-600 text-2xl md:text-3xl">FRONT-END DEVELOPER</span>
                        <hr className="w-12 h-1 bg-gray-200 border-0 rounded bg-yellow-600 mx-2" />
                    </div>
                    <SocialMedia />
                </span>
                
            </div>
        </div>
    )
}