import React from "react";
import headshot from "../../assets/head_shot.JPG";

const Headshot = () => {
  return (
    <>
      <section className="portfolio-intro">
        <section className="portfolio-img">
          <img src={headshot} alt="my face" />
        </section>
        <section className="portfolio-bio">
          <article className="bio-contents">
            <p>
              With a passionate drive to build applications that scale on
              demand, I combine a background in illustration with full-stack
              development. My role is to remain flexible and wear many hats, as
              is the nature of full-stack developement, and I aim to expand my
              skill set to fit into the new roles regularly arising in the tech
              industry.
            </p>
          </article>
        </section>
        <section className="bio-github">
          <a
            className="portfolio-github"
            href="https://github.com/Ultrafeeder?tab=repositories"
            target="_new"
          >
            <span>View github</span>
          </a>
        </section>
      </section>
    </>
  );
};

export default Headshot;
