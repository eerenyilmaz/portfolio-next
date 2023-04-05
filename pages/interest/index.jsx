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
      <div className="mx-auto max-w-screen-md">
        <PageHeader title={"Interests"}/>

        <div className="mb-20">
          <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-red-600 relative inline-block mb-10">
            <span className="text-2xl relative text-white">Teams Supported</span>
          </span>

          <div className="flex flex-row justify-between gap-x-1 mb-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/79/Galatasaray_4_Sterne_Logo.svg" width={100} className="self-start cursor-pointer hover:scale-110 transition" onClick={logoGS}/>

            <img src="https://upload.wikimedia.org/wikipedia/tr/9/92/Arsenal_Football_Club.png" width={100} className="self-end cursor-pointer hover:scale-110 transition" onClick={logoArsenal}/>
          </div>

          <TeamDetail status={teamStatus}/>
        
          
        </div>

        <div className="">
          <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-red-600 relative inline-block mb-10">
            <span className="text-2xl relative text-white">Skills</span>
          </span>

          <div className="grid grid-cols-4 gap-4">
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