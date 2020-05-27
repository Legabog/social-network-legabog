import React from "react";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import classes from "./Music.module.css";
import MusicPlayer from "../common/MusicPlayer/MusicPlayer";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

// const useStyles = makeStyles({
//   root: {
//     flexGrow: 1,
//     maxWidth: 500,
//   },
// });

const Music = (props) => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <MusicPlayer />
      <div className={classes.mainMusic}>
        <Paper square className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="primary"
      >
        <Tab label="My playlist"/>
        <Tab label="Albums" aria-label="favorite" />
        <Tab label="Recomendation" aria-label="person" />
      </Tabs>
    </Paper>
        <div className={classes.player}></div>
      </div>
    </div>
  );
};

export default withAuthRedirect(Music);
