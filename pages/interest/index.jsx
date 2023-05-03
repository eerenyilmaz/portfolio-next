import PageHeader from "../../src/components/PageHeader";
import TeamDetail from "../../src/components/TeamDetail";
import ImageSkills from "../../src/components/SkillsImage";
import { useState } from "react";

export default function Teams() {

    return (
      <div id="interests" className="mx-auto max-w-screen-lg h-auto py-20">

        <div className="text-center">
          <span className="text-xl relative color-blue font-semibold border-b-4 border-blue-200">Skills</span>

          <div className="grid grid-cols-3 md:grid-cols-8 gap-4 mt-4">
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