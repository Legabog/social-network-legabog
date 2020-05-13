import React from "react";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import classes from "./Music.module.css";

const Music = (props) => {
  return (
    <div className={classes.mainMusic}>
      <audio controls />
    </div>
    
  );
};

export default withAuthRedirect(Music);
