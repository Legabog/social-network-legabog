import React from "react";
import classes from "../Dialogs.module.css";
import { NavLink } from "react-router-dom";
import * as axios from "axios";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div
      className={classes.dialogsItems + " " + classes.active}
      onClick={() =>
        axios.post("/musicalbums/create-musicalbum", {
          title: "На Человека",
          author: "SALUKI",
          albumcoverUrl:
            "https://lh3.googleusercontent.com/9BFKF8BX5eFJRmCnrSICMbUYzCXc6gb_Wd0BBliI11SnDNpQS1HWrvqlqV909Sbz8RAWeJilaLeiP6wr=w544-h544-l90-rj",
          tracks: [
            {
              title: "Вторник",
              trackUrl: "No url",
            },
            {
              title: "Вкус Твоих Слёз",
              trackUrl: "No url",
            },
            {
              title: "Кома",
              trackUrl: "No url",
            },
            {
              title: "0,33",
              trackUrl: "No url",
            },
            {
              title: "На Человека",
              trackUrl: "No url",
            },
            {
              title: "Лёд",
              trackUrl: "No url",
            },
            {
              title: "777",
              trackUrl: "No url",
            },
          ],
        })
      }
    >
      <img src={props.imgpath} alt="description" />
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;
