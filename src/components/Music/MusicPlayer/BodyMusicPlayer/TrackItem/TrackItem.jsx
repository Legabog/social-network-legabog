import React from "react";
import classes from "./TrackItem.module.css";

const TracksItem = (props) => {
  return (
    <div className={classes.tracks}>
      {props.tracks.map((e) => {
        return (
          <div key={e._id} className={classes.item}>
            <div className={classes.description}>
              <h6>{e.title}</h6>
              <i className="fas fa-ellipsis-h"></i>
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default TracksItem;
