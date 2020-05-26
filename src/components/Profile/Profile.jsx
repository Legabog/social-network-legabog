import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import classes from "./Profile.module.css";
import Preloader from ".././common/Preloader/Preloader";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div className={classes.profile}>
      <div>
        <ProfileInfo {...props} />
      </div>

      <div className={classes.posts}>
        <MyPostsContainer />
      </div>
    </div>
  );
};

export default Profile;
