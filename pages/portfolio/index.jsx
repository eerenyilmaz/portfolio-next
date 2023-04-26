import PageHeader from "../../src/components/PageHeader";
import PortfolioPage from "../../src/views/PortfolioPage";

export default function Portfolio() {

    return (
      <div className="max-w-screen-md">
        <PageHeader title={"Portfolio"}/>
        <PortfolioPage />
      </div>
    );
  }