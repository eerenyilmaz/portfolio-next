export default function ResumeDetail({year, name, description, current}) {
    return (
        <div>
            <div className="flex flex-col">
                <div className="flex flex-row">
                    <div className={"w-1/5 flex items-center justify-center"}>
                        <div className={"w-16 flex items-center justify-center rounded-xl border-2" + ( !current ? ' color-blue' : ' bg-blue color-light-blue')}>
                            { year }
                        </div>
                    </div>
                    <div className="w-4/5 flex items-center justify-center color-dark-blue font-bold"> 
                        { name }
                    </div>
                </div>

                <div className="flex flex-row">
                    <div className="w-1/5 flex items-center justify-center">
                        <div className={"border-dashed border-l-2 border-blue-200 " + ( year == 2016 ? '' : 'h-full')}></div>
                    </div>
                    <div className="w-4/5 h-full">
                        { description }
                    </div>
                </div>
            </div>
        </div>
    )
}