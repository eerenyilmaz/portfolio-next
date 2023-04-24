import PostCard from "../components/PostCard"
import PageHeader from "../components/PageHeader";
import About from "./AboutPage";
import Teams from "../../pages/interest";
import Resume from "../../pages/resume";

export default function HomePage() {
  
  return (
    <div className="flex flex-col mx-auto max-w-screen-md">

      <About />

      <Teams />

      <Resume />

      {/* <div className="grid grid-cols-3 gap-4">
        <PostCard header={"Header 1"} id={0} description={"Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."}/>
        <PostCard header={"Header 2"} id={1} description={"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"}/>
        <PostCard header={"Header 3"} id={2} description={"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}/>
        <PostCard header={"Header 4"} id={3} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}/>
        <PostCard header={"Header 5"} id={4} description={"Here are the biggest enterprise technology acquisitions of 2021 so far."}/>

      </div> */}

    </div>
  );
}