export default function ResumeDetail({year, name, description, current}) {
    return (
        <div className="flex flex-col md:px-20">
            <div className="flex flex-row">
                <div className={"w-1/5 flex items-center justify-center"}>
                    <div className={"w-10 h-10 flex items-center justify-center rounded-full border-2 border-sky-800" + ( !current ? ' color-blue' : ' bg-blue color-light-blue')}>
                        <span className="text-sm">{ year }</span>
                    </div>
                </div>
                <div className="w-4/5 flex items-center justify-center color-dark-blue font-bold"> 
                    { name }
                </div>
            </div>

            <div className="flex flex-row">
                <div className="w-1/5 flex items-center justify-center">
                    <div className={"border-dashed border-l-2 border-sky-800 " + ( year == 2016 ? '' : 'h-full')}></div>
                </div>
                <div className="w-4/5 h-full">
                    { description }
                </div>
            </div>
        </div>
    )
}