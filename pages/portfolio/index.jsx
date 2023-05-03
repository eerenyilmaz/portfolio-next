import PageHeader from "../../src/components/PageHeader";
import PortfolioPage from "../../src/views/PortfolioPage";

export default function Portfolio() {

    return (
      <div id="portfolio" className="mx-auto max-w-screen-lg h-auto py-20">
        <PageHeader title={"Portfolio"}/>
        <PortfolioPage />
      </div>
    );
  }