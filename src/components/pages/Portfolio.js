import React from "react";

function Portfolio() {
  return (
    <div>
      <section id="develop" className="projects">
        <div className="flex-row">
          <h2 className="section-title border">Projects</h2>
        </div>

        <div className="project">
          <div className="project-info">
            <div className="project-image">
              <a href="https://i-dont-study-02e1a4235102.herokuapp.com/">
                {" "}
                <img></img>
              </a>
            </div>
            <div className="project-desc">
              <h4>Note Taker</h4>
              <p>
                I Dont Study is a note taking application that allows the user
                to add and delete notes to a database. Everything you write and
                save or delete updates the database that is being used by the
                server.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio