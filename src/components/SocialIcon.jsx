export default function SocialIcon({path,link}){
    return(
        <li className="mb-2 inline-block rounded flex items-center cursor-pointer w-12 p-3 hover:bg-gray-600 hover:text-red-600 transition duration-500 text-xs font-medium uppercase leading-normal text-white bg-red-600 shadow-md ease-in-out mx-2 ">
            <a href={link} target="_blank" className="w-full"> 
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    >
                    <path
                    d={path} />
                </svg>
            </a>
        </li>
    )
}