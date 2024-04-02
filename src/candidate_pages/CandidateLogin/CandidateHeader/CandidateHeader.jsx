import React from "react";
import "./CandidateHeader.css";
import medilogo from "../../../assets/logos/medi-logo.png";
import logout from "../../../assets/logos/Logout.png";
import Reset from "../../../assets/logos/Reset.png";

import { useNavigate } from "react-router-dom";
function CandidateHeader() {
  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.removeItem("Token");
    sessionStorage.removeItem("isLoggedIn");
    navigate("/candidate-login");
  };
  
  return (
    <>
      <div className="admin-header">
        <div>
          <img className="admin-logo" src={medilogo} alt="" />
        </div>
        <div id="logout-btn">
          <button>
            <img src={Reset} />
          </button>
          <button onClick={() => handleLogout()}>
            <img src={logout} />
          </button>
        </div>
      </div>

      {/* <div className="show-dashboard">
    <CandidateDashboard></CandidateDashboard>
  </div> */}
    </>
  );
}

export default CandidateHeader;
