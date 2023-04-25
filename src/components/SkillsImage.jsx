

export default function ImageSkills({path, name}) {
    return (
        <div className="flex flex-col items-center justify-center hover:scale-110 transition">
            <img src={path} width={100}/>

            {/* Logolar ayarlanınca yazılar kaldırılacak */}
            <span className="before:block before:absolute before:-inset-1 before:bg-gray-300 relative inline-block">
                <span className="text-sm md:text-m relative text-gray-800 font-semibold">{name}</span>
            </span>
        </div>
    )
}