export default function ResumeDetail({year, name, description}) {
    return (
        <div className="flex flex-col">
            <div className="flex flex-row">
                <div className="w-1/4 flex items-center justify-center">
                    { year }
                </div>
                <div className="w-3/4 flex items-center justify-center"> 
                    { name }
                </div>
            </div>

            <div className="flex flex-row">
                <div className="w-1/4 flex items-center justify-center">
                    <div className={"border-dashed border-l-2 border-red-600 " + ( year == 2016 ? '' : 'h-full')}></div>
                </div>
                <div className="w-3/4 h-full pb-10">
                    { description }
                </div>
            </div>
        </div>
    )
}