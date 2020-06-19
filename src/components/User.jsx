import React from "react";
import Details from "./Details";

const User = props => {
  return (
    <div className="user " key={props.id}>
      <a className="user__name" href={props.url}>{props.title}</a>
      <img src={props.img_url} alt="Github avatar" />
      <Details details={props.details} />
    </div>
  );
};
export default User;