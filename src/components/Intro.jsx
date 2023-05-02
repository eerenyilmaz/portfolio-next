import Link from "next/link";
import SocialMedia from "./SocialMedia";

export default function Intro() {
    return (
        <div id="intro" className="w-full h-screen bg-image mb-20">
            <div className="intro-bg h-full flex items-center justify-center flex-col">
                <span className="text-white font-semibold flex flex-col items-center pb-40">
                    <span className="color-blue text-2xl md:text-3xl mb-5">Hello, I'm Erol Eren Yılmaz</span>
                    
                    <div className="inline-flex items-center justify-center w-full mb-10">
                        <hr className="w-8 h-1 border-0 rounded bg-blue mx-2" />
                        <span className="color-light-blue text-xl md:text-3xl">FRONT-END DEVELOPER</span>
                        <hr className="w-8 h-1 border-0 rounded bg-blue mx-2" />
                    </div>
                    <SocialMedia />
                </span>
                
            </div>
        </div>
    )
}