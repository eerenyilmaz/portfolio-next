
export default function PortfolioCard({header, description, imageUrl, language}) {
    return(
        <div className="portfolio-card border-gray-200 bg-blue hover:bg-sky-900 transition duration-300">
            <div className="card-top" >
                {/* <img src="../logo.svg" /> */}
                {/* Image sorununu hallet. Dinamik link*/}
            </div>

            <div className="card-bottom">
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-blue-200 flex">
                        <span className="self-start">{ header }</span>
                    </div>
                    <p className="color-light-blue text-base text-blue-200">
                        { description }
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-sky-950 rounded px-2 py-1 text-sm font-semibold text-sky-300 mr-2 mb-2">
                        { language }
                    </span>
                </div>
            </div>
        </div>
    )
}