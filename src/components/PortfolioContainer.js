import React, { useState } from "react";
import NavTabs from "./NavTabs";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";


export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <header className="px-1">
        <div>
          <h1>Cullen Knott</h1>
        </div>
        <div>
        <NavTabs
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
        </div>
      </header>
      <div>
        {renderPage()}
      </div>
    </div>
  );
}
