import Accordion from "../common/accordion";
import Product from "./product";
import Slider from "./slider";
import { useEffect, useRef, useState } from "react";
import "../common/accordion.css";

const Information = (props) => {
  const {
    pictures,
    title,
    description,
    host,
    rating,
    location,
    equipments,
    tags,
  } = props.product;

  const [active, setActive] = useState(false);
  const content = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {}, [height, props.title]);

  function toggleAccordion() {
    setActive(!active);
    setHeight(active ? "0px" : `${content.current.scrollHeight}px`);
  }
  return (
    <div className="infos" key={props.id}>
      <div className="slide">
        <Slider picture={pictures} />
      </div>
      <div className="infoDesc">
        <Product
          title={title}
          location={location}
          tags={tags}
          hostName={host.name}
          hostPicture={host.picture}
          rating={rating}
        />
      </div>
      <div className="infoAccordion">
        <div className="infoAccordionItem">
          <Accordion title="Description" content={description} />
        </div>
        <div className="infoAccordionItem">
          <div className="aboutWrapper">
            <div
              className={`startBox ${active ? "active" : ""}`}
              onClick={toggleAccordion}
            >
              <h1 className="startTitle">Équipements</h1>
              {!active ? (
                <img src="/images/arrowDown.svg" alt="arrowDown" />
              ) : (
                <img src="/images/arrowUp.svg" alt="arrowUp" />
              )}
            </div>
            <div
              ref={content}
              style={{ maxHeight: `${height}` }}
              className="dropBox"
            >
              <ul>
                {equipments.map((equipment, i) => (
                  <li className="dropBody2" key={i}>
                    {equipment}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
