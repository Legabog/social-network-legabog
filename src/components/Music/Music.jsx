import React from "react";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import classes from "./Music.module.css";
import Emoji from "../common/EmojiList/EmojiList";
import SimpleSlider from "../common/Slider/Slider";

const Music = (props) => {
  return (
    <div className={classes.mainMusic}>
      <audio controls />
      <Emoji/>
      <div style={{"width":"300px" }}>
      <SimpleSlider/>
      </div>
      
    </div>
  );
};

export default withAuthRedirect(Music);
