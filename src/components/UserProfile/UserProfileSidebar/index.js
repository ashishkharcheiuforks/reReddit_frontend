import React from "react";

import "./styles.css";
import { Link } from "react-router-dom";
import { USER_PROFILE_URL } from "../../../urls";
import { MdCake, MdStars } from "react-icons/md";

const UserProfileSidebar = props => {
  const { username } = props;

  const karma = 10235642;
  const cakeday = "May 16th";
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
                {cakeday}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileSidebar;
