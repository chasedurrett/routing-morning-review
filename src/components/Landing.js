import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="landing">
      <h1>
        everyone is in the conference room <br />
        who would like to meet?
      </h1>
      <Link to="/meet-me/michael/scott">michael scott</Link>
      <Link to="/meet-me/dwight/shrute">dwight shrute</Link>
      <Link to="/meet-me/jim/halpert">jim halpert</Link>
    </div>
  );
}
export default Landing;
