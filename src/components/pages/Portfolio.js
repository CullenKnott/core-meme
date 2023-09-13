import React from "react";
import planner from "../../assets/images/01-planner.png";
import campground from "../../assets/images/campgrounds.png";
import jate from "../../assets/images/JATE.png";
import music from "../../assets/images/music-shoopa.png";
import note from "../../assets/images/note-taker.png";
import weather from "../../assets/images/weather app.png";
import clogger from "../../assets/images/clogger.png";

function Portfolio() {
  return (
    <div>
      <section id="work" className="jobs">
        <div className="flex-row">
          <h2 className="section-title secondary-border">Work</h2>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://music-shoopa-5bb7350c0f7e.herokuapp.com/">
                {" "}
                <img
                  src={music}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Music-Shoopa"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Music shoopa</h4>
              <p>
                A music shop like app that allows you to search for your
                favorite albums from your favorite artist and then add those
                albums to a personal "favorites" or "playlist" list. This app
                uses a single database to store information such as user login,
                session, and favorite songs list.
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://calm-chamber-89299-aa393729ace4.herokuapp.com/">
                {" "}
                <img
                  src={jate}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="J.A.T.E"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>J.A.T.E</h4>
              <p>
                This application is a web based text editor that allows the user
                to create notes and snippets of code without the need for an
                internet connection to then be retrieved for later use. The
                application uses a service worker and Cache API's to allow the
                app to be fully functional without an internet connection.
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://hidden-fortress-97563-4f2b75cdb15f.herokuapp.com/">
                {" "}
                <img
                  src={clogger}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Clogger"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Clogger</h4>
              <p>
                Clogger is a basic CMS-style blog site that allows users to
                create and delete posts on a variety of coding and programming
                related topics. The application utilizes a complete database and
                API that allows the user to save all of their created posts for
                a specific account
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://cullenknott.github.io/campground-center/">
                {" "}
                <img
                  src={campground}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="campground"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Campground Center</h4>
              <p>
                This campground website is designed to provide information about
                campsites within a specific city. The website allows users to
                search for campsites by entering a city name. Upon searching,
                the website displays 10 campsites available in that city.
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://cullenknott.github.io/anchor-man/">
                {" "}
                <img
                  src={weather}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Anchor-man"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Anchor Man</h4>
              <p>
                Anchor-man is a simple, easy to use weather application that
                displays the current weather, 5 day forecast, displays your
                search history. All weather data is collected through a weather
                API and is displayed as information to the user.
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://cullenknott.github.io/cuddly-nook/">
                {" "}
                <img
                  src={planner}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="skeleton-planner"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Skeleton Planner</h4>
              <p>
                Skeleton planner is a bare-bones day planner that allows the
                user to save upcoming events. The planner allows you to write in
                the event, save the event, and will display if the event has
                past, is during the current hour, or in a future hour. The
                planner is formatted for a typical 8 hour work day from 9am to
                5pm.
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://i-dont-study-02e1a4235102.herokuapp.com/">
                {" "}
                <img
                  src={note}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Note-Taker"
                />
              </a>
            </div>
            <div className="job-text">
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

export default Portfolio;
