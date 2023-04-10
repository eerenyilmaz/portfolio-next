import PageHeader from "../components/PageHeader";

export default function About() {

  return (
    <div className="mx-auto max-w-screen-md mb-20">
      <PageHeader title={"About"}/>
      
      <div className="flex flex-row">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br />
          <br />
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>

          <img src="../logo192.png" width={200}/>
      </div>
    </div>
  );
}