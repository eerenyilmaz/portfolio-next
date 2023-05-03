import PostCard from "../components/PostCard"
import PageHeader from "../components/PageHeader";
import About from "./AboutPage";
import Teams from "../../pages/interest";
import Resume from "../../pages/resume";
import Portfolio from "../../pages/portfolio";

export default function HomePage() {
  
  return (
    <div className="flex flex-col mx-auto px-4 md:px-0 bg-light-blue">

      <About />

      <Teams />

      <Resume />

      <Portfolio />

    </div>
  );
}