import PageHeader from "../../src/components/PageHeader"
import ResumeDetail from "../../src/components/ResumeDetail"


export default function Resume(){
    return (
        <div className="max-w-screen-md mb-20">
            <PageHeader title={"Resume"}/>

            <ResumeDetail 
                year={2021}
                name={"Z3 Yazılım ve Teknoloji"}
                current={true}
                description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
            />

            <ResumeDetail 
                year={2021}
                name={"Mezuniyet"}
                current={false}
                description={"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"}
            />

            <ResumeDetail 
                year={2018}
                name={"Kanal 7 / Staj"}
                current={false}
                description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
            />

            <ResumeDetail 
                year={2017}
                name={"Halkbank BT / Staj"}
                current={false}
                description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
            />
            
            <ResumeDetail 
                year={2016}
                name={"T.C İstanbul Ticaret Üniversitesi"}
                current={false}
                description={"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"}
                border={false}
            />
        
            
        </div>
    )
}