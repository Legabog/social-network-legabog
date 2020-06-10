import React from "react";
import classes from "./TrackItem.module.css";
import { useState } from "react";

const TracksItem = (props) => {
  const [disa, setDisa] = useState(0);

  console.log(props);
  return (
    <div className={classes.tracks}>
      {props.tracks.map((e) => {
        return (
          <div
            key={e._id}
            className={classes.item}
            onClick={() => {
              if (disa === 0) {
                props.pushToRecentlyPlayed(
                  props.img,
                  props.title,
                  props.author
                );
              }
            }}
          >
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
