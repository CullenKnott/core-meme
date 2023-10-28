import React from "react";

const projects = [
  {
    id: 0,
    title: "Left on Scene",
    img: "/images/scene.png",
    description:
      "Left on Scene is a Fullstack MERN project that utilizes MongoDB, Express, React, and Node, as well as GraphQl as the API to allow the front-end to communicate with the back-end. The application itself is a user-friendly platform designed for movie enthusiasts. Discover and explore an extensive database of films across various genres. Users can search for their favoritemovies, read insightful reviews, and contribute their own critiques.",
    repo: "https://github.com/jrsr5599/project-3",
    live: "https://project-3-left-on-scene-ace080aff4c2.herokuapp.com/",
  },
  {
    id: 1,
    title: "Music Shoopa",
    img: "/images/music-shoopa.png",
    description: "A music shop like app that allows you to search for your favorite albums from your favorite artist and then add those albums to a personal 'favorites' or 'playlist' list. This app uses a single database to store information such as user login, session, and favorite songs list.",
    repo: "https://github.com/jrsr5599/Project-2",
    live: "https://music-shoopa-5bb7350c0f7e.herokuapp.com/",
  },
  {
    id: 2,
    title: "J.A.T.E",
    img: "/images/JATE.png",
    description: "This application is a web based text editor that allows the user to create notes and snippets of code without the need for an internet connection to then be retrieved for later use. The application uses a service worker and Cache API's to allow the app to be fully functional without an internet connection.",
    repo: "https://github.com/CullenKnott/ignorant-text",
    live: "https://calm-chamber-89299-aa393729ace4.herokuapp.com/",
  },
  {
    id: 3,
    title: "Clogger",
    img: "/images/clogger.png",
    description: "Clogger is a basic CMS-style blog site that allows users to create and delete posts on a variety of coding and programming related topics. The application utilizes a complete database and API that allows the user to save all of their created posts for a specific account.",
    repo: "https://github.com/CullenKnott/clogger",
    live: "https://hidden-fortress-97563-4f2b75cdb15f.herokuapp.com/",
  },
  {
    id: 4,
    title: "Campground Center",
    img: "/images/campgrounds.png",
    description: "This campground website is designed to provide information about campsites within a specific city. The website allows users to search for campsites by entering a city name. Upon searching, the website displays 10 campsites available in that city.",
    repo: "https://github.com/CullenKnott/campground-center",
    live: "https://cullenknott.github.io/campground-center/",
  },
  {
    id: 5,
    title: "Anchor Man",
    img: "/images/weather app.png",
    description: "Anchor-man is a simple, easy to use weather application that displays the current weather, 5 day forecast, displays your search history. All weather data is collected through a weather API and is displayed as information to the user.",
    repo: "https://github.com/CullenKnott/anchor-man",
    live: "https://cullenknott.github.io/anchor-man/",
  },
  {
    id: 6,
    title: "Skeleton-Planner",
    img: "/images/01-planner.png",
    description: "Skeleton planner is a bare-bones day planner that allows the user to save upcoming events. The planner allows you to write in the event, save the event, and will display if the event has past, is during the current hour, or in a future hour. The planner is formatted for a typical 8 hour work day from 9am to 5pm.",
    repo: "https://github.com/CullenKnott/cuddly-nook",
    live: "https://cullenknott.github.io/cuddly-nook/",
  },
  {
    id: 7,
    title: "Note-Taker",
    img: "/images/note-taker.png",
    description: "Note-Taker is a note taking application that allows the user to add and delete notes to a database. Everything you write and save or delete updates the database that is being used by the server.",
    repo: "https://github.com/CullenKnott/i-dont-study",
    live: "https://i-dont-study-02e1a4235102.herokuapp.com/",
  },
];

function Portfolio() {
  return (
    <div>
      <section id="work" className="jobs">
        <div className="flex-row">
          <h2 className="section-title secondary-border">Portfolio</h2>
        </div>

        {projects.map((project) => (
          <div className="job">
            <div className="job-info">
              <div className="job-img">
                <a href={project.live} target="_blank" rel="noreferrer">
                  {" "}
                  <img
                    src={process.env.PUBLIC_URL + project.img}
                    className="my-2"
                    style={{ width: "100%" }}
                    alt="img-placeholder"
                  />
                </a>
              </div>
              <div className="job-text">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <div className="buttons">
                  <div className="links siteBtn">
                    <a href={project.live} target="_blank" rel="noreferrer">
                      Live Website
                    </a>
                  </div>
                  <div className="links repoBtn">
                    <a href={project.repo} target="_blank" rel="noreferrer">
                      {" "}
                      Repository
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Portfolio;
