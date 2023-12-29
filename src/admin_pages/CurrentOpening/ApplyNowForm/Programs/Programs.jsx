import React from 'react'
import "./Programs.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";


function Programs() {
  return (
    <>
    <div className="container">
      <div>
        <div>
          <h5 className="UD-heading">Seminars/Short Term Courses/Summer Schools/Winter Schools</h5>
          <p className="UD-subheading">
            Please fill your information so we can get in touch with you.
          </p>
        </div>

  

        {/* Organized*/}

        <div>
          <p className="HS-heading">Organized</p>
        </div>

        <div className="row" style={{ marginTop: "-30px" }}>
          <div className="col-md-4">
            {/* Date From*/}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span></span>Date From
              </label>
              <input
                className="UD-set-input"
                type="date"
                placeholder="MM/DD/YYYY "
                name=""
                id=""
                required
              ></input>
            </div>
          </div>

          <div className="col-md-4">
            {/* Date To */}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span></span>Date To
              </label>
              <input
                className="UD-set-input"
                type="date"
                placeholder=" MM/DD/YYYY"
                name=""
                id=""
                required
              ></input>
            </div>
          </div>

          <div className="col-md-4">
            {/* Name of the Course*/}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span></span>Name of the Course
                <button type="button" className="plus-button">+</button>
              </label>
              <input
                className="UD-set-input"
                type="text"
                placeholder=" "
                name=""
                id=""
                required
              ></input>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            {/* Sponsored By*/}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span></span>Sponsored By
              </label>
              <input
                className="UD-set-input"
                type="text"
                placeholder=" "
                name=""
                id=""
                required
              ></input>
            </div>
          </div>

          <div className="col-md-4">
            {/* No. of Participants */}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span></span>No. of Participants
              </label>
              <input
                className="UD-set-input"
                type="text"
                placeholder=" "
                name=""
                id=""
                required
              ></input>
            </div>
          </div>

          <div className="col-md-4">
            {/* From Institutes*/}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span></span>From Institutes
              </label>
              <input
                className="UD-set-input"
                type="text"
                placeholder=" "
                name=""
                id=""
                required
              ></input>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            {/* From Industry*/}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span></span>From Industry
              </label>
              <input
                className="UD-set-input"
                type="text"
                placeholder=" "
                name=""
                id=""
                required
              ></input>
            </div>
          </div>

        
        </div>

          {/* Attended*/}

          <div>
          <p className="HS-heading">Attended</p>
        </div>

        <div className="row" style={{ marginTop: "-30px" }}>
          <div className="col-md-4">
            {/* Date From*/}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span></span>Date From
              </label>
              <input
                className="UD-set-input"
                type="date"
                placeholder="MM/DD/YYYY "
                name=""
                id=""
                required
              ></input>
            </div>
          </div>

          <div className="col-md-4">
            {/* Date To */}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span></span>Date To
              </label>
              <input
                className="UD-set-input"
                type="date"
                placeholder=" MM/DD/YYYY"
                name=""
                id=""
                required
              ></input>
            </div>
          </div>

          <div className="col-md-4">
            {/* Name of the Course*/}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span></span>Name of the Course
                <button type="button" className="plus-button">+</button>
              </label>
              <input
                className="UD-set-input"
                type="text"
                placeholder=" "
                name=""
                id=""
                required
              ></input>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            {/* Sponsored By Institute/Industry*/}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span></span>Sponsored By Institute/Industry
              </label>
              <input
                className="UD-set-input"
                type="text"
                placeholder=" "
                name=""
                id=""
                required
              ></input>
            </div>
          </div>


        </div>

 {/* Other Information*/}

 <div>
          <p className="HS-heading">Other Information</p>
        </div>

        <div className="row" style={{ marginTop: "-30px" }}>
          <div className="col-md-12">
            {/* Membership of Professional Bodies*/}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span></span>Membership of Professional Bodies
              </label>
              <input
              style={{width:"95%"}}
                className="UD-set-input"
                type="text"
                placeholder=""
                name=""
                id=""
                required
              ></input>
            </div>
          </div>


        </div>

        <div className="row" style={{ marginTop: "-30px" }}>
          <div className="col-md-12">
            {/* Membership of University/Institute/Industry Bodies*/}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span></span>Membership of University/Institute/Industry Bodies
              </label>
              <input
              style={{width:"95%"}}
                className="UD-set-input"
                type="text"
                placeholder=""
                name=""
                id=""
                required
              ></input>
            </div>
          </div>


        </div>


          {/* Attended*/}

          <div>
          <p className="HS-heading">Attended</p>
        </div>

        <div className="row" style={{ marginTop: "-30px" }}>
          <div className="col-md-4">
            {/* Date From*/}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span></span>Date From
              </label>
              <input
                className="UD-set-input"
                type="date"
                placeholder="MM/DD/YYYY "
                name=""
                id=""
                required
              ></input>
            </div>
          </div>

          <div className="col-md-4">
            {/* Date To */}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span></span>Date To
              </label>
              <input
                className="UD-set-input"
                type="date"
                placeholder=" MM/DD/YYYY"
                name=""
                id=""
                required
              ></input>
            </div>
          </div>

          <div className="col-md-4">
            {/* Position Held*/}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span></span>Position Held
            
              </label>
              <input
                className="UD-set-input"
                type="text"
                placeholder=" "
                name=""
                id=""
                required
              ></input>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            {/* Contribution*/}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span></span>Contribution
              </label>
              <input
                className="UD-set-input"
                type="text"
                placeholder=" "
                name=""
                id=""
                required
              ></input>
            </div>
          </div>

          <div className="row" style={{ marginTop: "-30px" }}>
          <div className="col-md-12">
            {/* Membership of Professional Bodies*/}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span></span>Membership of Professional Bodies
              </label>
              <input
              style={{width:"95%"}}
                className="UD-set-input"
                type="text"
                placeholder=""
                name=""
                id=""
                required
              ></input>
            </div>
          </div>


        </div>

        <div className="row" style={{ marginTop: "-30px" }}>
          <div className="col-md-12">
            {/* Membership of University/Institute/Industry Bodies*/}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span></span>Membership of University/Institute/Industry Bodies
              </label>
              <input
              style={{width:"95%"}}
                className="UD-set-input"
                type="text"
                placeholder=""
                name=""
                id=""
                required
              ></input>
            </div>
          </div>


        </div>

        <div className="row" style={{ marginTop: "-30px" }}>
          <div className="col-md-12">
            {/* Membership of Professional Bodies*/}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span></span>Membership of Professional Bodies
              </label>
              <input
              style={{width:"95%"}}
                className="UD-set-input"
                type="text"
                placeholder=""
                name=""
                id=""
                required
              ></input>
            </div>
          </div>


        </div>

        <div className="row" style={{ marginTop: "-30px" }}>
          <div className="col-md-12">
            {/* Membership of University/Institute/Industry Bodies*/}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span></span>Membership of University/Institute/Industry Bodies
              </label>
              <input
              style={{width:"95%"}}
                className="UD-set-input"
                type="text"
                placeholder=""
                name=""
                id=""
                required
              ></input>
            </div>
          </div>


        </div>


        </div>


       

       
      </div>
    </div>
  </>
  )
}

export default Programs