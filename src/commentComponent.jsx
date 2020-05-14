import React from "react";
import faker from "faker";

const componentDetail = (props) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img src={faker.image.avatar()} alt="avatar" />
      </a>
      <div className="content">
        <a href="/" className="author">
        {props.name}
        </a>
        <div className="metadata">
          <span className="data">{props.date}</span>
        </div>
     <div className="text">{props.comment}</div>
      </div>
    </div>
  );
};
export default componentDetail;
