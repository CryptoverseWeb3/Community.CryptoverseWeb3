import React from "react";
import { v4 as uuidv4 } from "uuid";
import { ButtonLink } from "../components/Buttons/ButtonElements";
import { eventExamples } from "./Data";
import { useState } from "react";
import "./Events.css";
import { SmallCard, BigCard } from "./EventElements";

export default function Events() {
  const [active, setActive] = React.useState(0);
  function handleClick(eventId) {
    setActive((currentActive) => (eventId === currentActive ? 0 : eventId));
  }

  const JSXevents = eventExamples.map(function (eventObj) {
    const { id, title, date, backgroundImg, description } = eventObj;

    if (active === id) {
      return (
        <BigCard className="big" key={uuidv4()} onClick={() => handleClick(id)}>
          <div className="img-and-title">
            <div className="img-div">
              <img src={backgroundImg}></img>
            </div>
            <div>
              <h1 className="title-big">{title}</h1>
            </div>
          </div>
          <div className="content">
            <div className="date">{date}</div>

            <div className="description">
              <ul>
                {description.map((item) => {
                  return <li key={uuidv4()}>{item}</li>;
                })}
              </ul>
            </div>
          </div>
        </BigCard>
      );
    }
    return (
      <SmallCard
        className="small"
        key={uuidv4()}
        onClick={() => handleClick(id)}
      >
        <div>
          <h1>{`${date} - ${title}`}</h1>
        </div>
        <div className="img-div">
          <img src={backgroundImg}></img>
        </div>
      </SmallCard>
    );
  });

  return (
    <div className="main-div" key={uuidv4()}>
      {JSXevents}
    </div>
  );
}
