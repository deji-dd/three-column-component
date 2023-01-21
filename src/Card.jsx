import { useState } from "react";

function Card(props) {
  let [btnColor, setBtnColor] = useState(props.color);
  return (
    <div className={props.class} style={{ backgroundColor: props.color }}>
      <div className="div-inner mx-auto">
        <div>
          <img alt={props.alt} src={props.img}></img>
        </div>
        <div className="div-title">
          <h1>{props.h1}</h1>
        </div>
        <div className="div-p">
          <p className="my-0">{props.p}</p>
        </div>
        <div className="div-btn">
          <button
            style={{ color: btnColor }}
            className="rounded-pill button"
            onMouseEnter={() => {
              setBtnColor("white");
            }}
            onMouseLeave={() => {
              setBtnColor(props.color);
            }}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
