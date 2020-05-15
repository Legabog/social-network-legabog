import React from "react";
import s from "./ProfileInfo.module.css";
import DefaultPhoto from "../../../assets/images/user.png";
import ProfileStatus from "./ProfileStatus";
import "antd/dist/antd.css";
import { Rate } from "antd";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div>
      <div className={s.profile}>
        <div className={s.avatarFrame}>
          <div className={s.avatar}>
            <img
              src={props.profile.photos.large || DefaultPhoto}
              alt="description"
            />
          </div>
          <div className={classes.rateStars}>
            <Rate allowHalf defaultValue={2.5} style={{fontSize: "250%"}}/>
          </div>

          <button
            type="button"
            className="btn btn-primary btn-sm"
            style={{
              width: "250px",
              height: "40px",
              marginLeft: "20px",
              fontSize: "130%",
              marginTop: "20px"
            }}
          >
            Write a message
          </button>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            style={{
              width: "45px",
              height: "40px",
              marginLeft: "5px",
              fontSize: "130%",
              marginTop: "20px"
            }}
          >
            <i className="fas fa-cog"></i>
          </button>
        </div>
        <div className={s.descriptionBlock}>
          <div className={s.info}>
            <div className={s.headerinfo}>
              <h2>
                <strong>{props.profile.fullName || "Нет информации"}</strong>
              </h2>
              <i className="far fa-question-circle"></i>
            </div>
            <p>online</p>

            <ProfileStatus {...props} />
            <hr align="center" width="550" size="3" />
            <h4>Information about me:</h4>
            <li>{props.profile.aboutMe || "Нет информации"} </li>
            <hr />
            <h4>Inforamtion about job:</h4>
            <li>Ищу работу: {props.profile.lookingForAJob ? "да" : "Нет"}</li>
            <li>
              Описание: {props.profile.lookingForAJobDescription || "Нет"}
            </li>
            <hr />
            <h4>Contacts:</h4>
            <li>
              <i className="fab fa-facebook">
                {" "}
                <strong>{props.profile.contacts.facebook || "Нет"}</strong>
              </i>
            </li>
            <li>
              <i className="fas fa-sitemap">
                {" "}
                <strong>{props.profile.contacts.website || "Нет"}</strong>
              </i>
            </li>
            <li>
              <i className="fab fa-vk">
                {" "}
                <strong>{props.profile.contacts.vk || "Нет"}</strong>
              </i>
            </li>
            <li>
              <i className="fab fa-twitter">
                {" "}
                <strong>{props.profile.contacts.twitter || "Нет"}</strong>
              </i>
            </li>
            <li>
              <i className="fab fa-instagram">
                {" "}
                <strong>{props.profile.contacts.instagram || "Нет"}</strong>
              </i>
            </li>
            <li>
              <i className="fab fa-youtube">
                {" "}
                <strong>{props.profile.contacts.youtube || "Нет"}</strong>
              </i>
            </li>
            <li>
              <i className="fab fa-github">
                {" "}
                <strong>{props.profile.contacts.github || "Нет"}</strong>
              </i>
            </li>
            <li>
              <i className="fas fa-link">
                {" "}
                <strong>{props.profile.contacts.mainlink || "Нет"}</strong>
              </i>
            </li>
            <hr />

            <img src={props.captcha} ></img>
            <button onClick={props.getCaptcha}>Click me</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
