import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getProfile, getProfileStatus, updateProfileStatus, changeStatusHandler } from "../../redux/profile-reducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 7341;
    }
    this.props.getProfile(userId);
    this.props.getProfileStatus(userId);
  }

  render() {
    return (
      <div>
        <Profile {...this.props} />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profileReducer.profile,
  status: state.profileReducer.profileStatus
});

export default compose(
  connect(mapStateToProps, { 
    getProfile,
    getProfileStatus,
    updateProfileStatus,
    changeStatusHandler }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
