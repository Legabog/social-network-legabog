import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={classes.item}>
      <div className={classes.description}>
        <img src="https://s01.geekpic.net/di-JX2ZZP.jpeg" alt="description" />
        <h6>legabog</h6>
      </div>

      <div className={classes.likes}>
        <h4>{props.message}</h4>
        <i className="far fa-heart"></i>
        <span>  {props.likes}</span>
      </div>
    </div>
  );
};

export default Post;
