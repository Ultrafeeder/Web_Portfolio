import React from "react";
import data from "../../data/cards";

const ProjectCards = () => {
  const cards = data;

  return (
    <section className="card-container">
      {cards.map((card) => {
        return (
          <div className="card" key={card.id}>
            <a href={card.path}>
              <section className="card-img">
                <img src={card.img} alt="screenshot" />
              </section>
              <section className="card-title-container">
                <span className="card-title">{card.name}</span>
              </section>
            </a>
          </div>
        );
      })}
    </section>
  );
};

export default ProjectCards;
