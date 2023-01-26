import { useEffect, useRef, useState } from "react";

import "./accordion.css";

function Accordion(props) {
  const [active, setActive] = useState(false);
  const content = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
  }, [height, props.title]);

  function toggleAccordion() {
    setActive(!active);
    setHeight(active ? "0px" : `${content.current.scrollHeight}px`);
  }

  return (
    <div className="aboutWrapper">
      <div
        className={`startBox ${active ? "active" : ""}`}
        onClick={toggleAccordion}
      >
        <h1 className="startTitle">{props.title}</h1>
        {
          !active
          ? <img src="/images/arrowDown.svg" alt="arrowDown" />
          : <img src="/images/arrowUp.svg" alt="arrowUp" />
        }
      </div>
      <div ref={content} style={{ maxHeight: `${height}` }} className="dropBox">
        <p className="dropBody">{props.content}</p>
      </div>
    </div>
  );
}

export default Accordion;
