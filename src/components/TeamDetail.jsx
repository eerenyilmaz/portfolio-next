export default function TeamDetail({status}){
    let detail = <div className="transition ease-in duration-300"></div>
    if(status == 1) {
        detail = <div className="block w-full p-6 bg-white border border-gray-200 rounded-xl shadow transition ease-in duration-300">GS</div>
    } else if(status == 2) {
        detail = <div className="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow transition ease-in duration-300">Arsenal</div>
    } 

    return(
        <div className="transition ease-in duration-300">{detail}</div>
    )
}