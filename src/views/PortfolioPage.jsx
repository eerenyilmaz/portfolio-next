import PortfolioCard from "../components/PortfolioCard";

export default function PortfolioPage(){
    return(
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4 h-full">
            <PortfolioCard 
                header={"Project Header"} 
                description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."} 
                language={"React"}   
                imageUrl={""} 
            />
            <PortfolioCard 
                header={"Project Header"} 
                description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."} 
                language={"React"}   
                imageUrl={""} 
            />
            <PortfolioCard 
                header={"Project Header"} 
                description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."} 
                language={"React"}   
                imageUrl={""} 
            />
            <PortfolioCard 
                header={"Project Header"} 
                description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."} 
                language={"React"}   
                imageUrl={""} 
            />
            
        
        </div>
    )
}