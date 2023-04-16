import PageHeader from "../../src/components/PageHeader";
import TeamDetail from "../../src/components/TeamDetail";
import ImageSkills from "../../src/components/SkillsImage";
import { useState } from "react";

export default function Teams() {

  const [teamStatus, setTeamStatus] = useState(0);
  const logoGS = () => {
    setTeamStatus(1)
  }

  const logoArsenal = () => {
    setTeamStatus(2)
  }
    return (
      <div className="max-w-screen-md ">
        <PageHeader title={"Interests"}/>

        <div className="mb-20 text-center flex flex-col items-center">
          <span className="text-xl w-auto relative text-red-600 font-semibold border-b-4 border-yellow-500">Supported Teams</span>

          <div className="flex flex-row gap-x-10 mb-4 mt-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/79/Galatasaray_4_Sterne_Logo.svg" width={100} className="self-start hover:scale-110 transition" onClick={logoGS}/>

            <img src="https://upload.wikimedia.org/wikipedia/tr/9/92/Arsenal_Football_Club.png" width={100} className="self-end hover:scale-110 transition" onClick={logoArsenal}/>
          </div>

          {/* <TeamDetail status={teamStatus}/> */}
        
        </div>

        <div className="text-center">
          <span className="text-xl relative text-red-600 font-semibold border-b-4 border-yellow-500">Skills</span>

          <div className="grid grid-cols-4 gap-4 mt-4">
            <ImageSkills path={"../logo192.png"} name={"HTML"} />
            <ImageSkills path={"../logo192.png"} name={"CSS"} />
            <ImageSkills path={"../logo192.png"} name={"Bootstrap"} />
            <ImageSkills path={"../logo192.png"} name={"Tailwind CSS"} />
            <ImageSkills path={"../logo192.png"} name={"Javascript"} />
            <ImageSkills path={"../logo192.png"} name={"JQuery"} />
            <ImageSkills path={"../logo192.png"} name={"React"} />
            <ImageSkills path={"../logo192.png"} name={"Next.js"} />
          </div>
        </div>
      </div>
    );
  }