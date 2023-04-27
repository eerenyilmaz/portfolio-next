export default function ResumeDetail({year, name, description, current}) {
    return (
        <div>
            <div className="flex flex-col">
                <div className="flex flex-row">
                    <div className={"w-1/5 flex items-center justify-center"}>
                        <div className={"w-16 flex items-center justify-center rounded-xl text-yellow-400" + ( !current ? ' border-2 border-red-500' : ' bg-red-500')}>
                            { year }
                        </div>
                    </div>
                    <div className="w-4/5 flex items-center justify-center text-red-600 font-bold italic"> 
                        { name }
                    </div>
                </div>

                <div className="flex flex-row">
                    <div className="w-1/5 flex items-center justify-center">
                        <div className={"border-dashed border-l-2 border-red-600 " + ( year == 2016 ? '' : 'h-full')}></div>
                    </div>
                    <div className="w-4/5 h-full">
                        { description }
                    </div>
                </div>
            </div>
        </div>
    )
}