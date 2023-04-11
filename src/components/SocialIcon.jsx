export default function SocialIcon({path,link}){
    return(
        <li className="mb-2 inline-block rounded flex items-center p-0 w-8 text-xs font-medium uppercase leading-normal text-white bg-red-600 hover:bg-red-200 shadow-md transition duration-150 ease-in-out mx-2 ">
            <a href={link} target="_blank" className="w-full"> 
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-full w-full p-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    width="10px"
                    height="1em">
                    <path
                    d={path} />
                </svg>
            </a>
        </li>
    )
}