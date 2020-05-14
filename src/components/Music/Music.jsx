import React from "react";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import classes from "./Music.module.css";
import Emoji from "../common/EmojiList/EmojiList";

const Music = (props) => {
  return (
    <div className={classes.mainMusic}>
      <audio controls />
      <Emoji/>
    </div>
  );
};

export default withAuthRedirect(Music);
