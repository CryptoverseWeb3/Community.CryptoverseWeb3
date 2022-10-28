import React from "react";
import { v4 as uuidv4 } from "uuid";
import { ButtonLink } from "../components/Buttons/ButtonElements";
import { blogExamples } from "./Data";
import { useState } from "react";
import "./Blogs.css";
import { SmallCard, BigCard } from "./BlogElements";
import img from "./assets/img.webp";

export default function Blogs() {
  const [active, setActive] = React.useState(0);

  function handleClick(eventId) {
    setActive((currentActive) => (eventId === currentActive ? 0 : eventId));
  }

  const JSXevents = blogExamples.map(function (eventObj) {
    const { id, title, date, author, content, tags } = eventObj;

    if (active === id) {
      return (
        <BigCard className="big" key={uuidv4()} onClick={() => handleClick(id)}>
          <div className="img-and-title">
            <div className="img-div">
              <img src={img} style={{ height: 150, width: 250 }}></img>
            </div>
          
            <div>
              <h1 className="title-big">{title}</h1>
            </div>
          </div>
          <div
            style={{
              textAlign: "center",
              padding: 20,
              fontSize: 18,
              color: "gray",
            }}>{`${author} | ${date}`}</div>
          <div style={{ paddingTop: 10, marginLeft: 60 }}>
            <p
              style={{
                textAlign: "left",
                whiteSpace: "pre-line",
                fontSize: 18,
                color: "whitesmoke",
                width: 400,
              }}>
              {content}
            </p>
          </div>
        </BigCard>
      );
    }

    return (
      <SmallCard
        className="small"
        key={uuidv4()}
        onClick={() => handleClick(id)}>
        <div className="img-div">
          <img src={img} className="im"></img>
        </div>
    
        <div className="title-big">{title}</div>
        <view className="v" />
        <view style={{ textAlign: "center", color: "white" }}>
          <span>
            <br></br>
            {`${author} - ${date}`}
          </span>
        </view>
      </SmallCard>
    );
  });

  return (
    <div className="main-div" key={uuidv4()}>
      {JSXevents}
    </div>
  );
}
