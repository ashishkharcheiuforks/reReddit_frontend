import React from "react";
import PropTypes from "prop-types";

import "./styles.css";
import { Link } from "react-router-dom";
import { USER_PROFILE_URL } from "../../../urls";
import { MdCake, MdStars } from "react-icons/md";

const UserProfileSidebar = props => {
  const { username, cakeDay, karma } = props;

  return (
    <div className="up-sidebar-content">
      <div className="up-information-sidebar">
        <div id="top-color" />
        <div id="up-info-contents">
          <h2>{username}</h2>
          <Link to={USER_PROFILE_URL(username)}>{`u/${username}`}</Link>
          <div id="up-karma-cakeday">
            <div id="up-karma">
              <p>Karma</p>
              <p>
                <MdStars id="up-info-icon" />
                {karma}
              </p>
            </div>
            <div id="up-cakeday">
              <p>Cakeday</p>
              <p>
                <MdCake id="up-info-icon" />
                {cakeDay}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

UserProfileSidebar.propTypes = {
  username: PropTypes.string,
  cakeDay: PropTypes.string,
  karma: PropTypes.number
};

export default UserProfileSidebar;
