import React from "react";
import classes from "./PlayList.module.css";

const PlayList = (props) => {
  return (
    <div className={classes.playList} >
      <img src={props.img} alt="description" />
      <div className={classes.description}>
      <h3>{props.name}</h3>      
      </div>
      <i className="fas fa-chevron-right"></i>
      
      <hr/>
    </div>
  );
};

export default PlayList;
