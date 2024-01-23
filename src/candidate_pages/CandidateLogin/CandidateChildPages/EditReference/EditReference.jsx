import React from 'react'
import "./EditReference.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";
import { faPen } from '@fortawesome/free-solid-svg-icons';

function EditReference() {

  const handleFileChange = async (event) => {
    const file = event.target.files[0];

    if (file) {
      try {
        let formData = new FormData();
        formData.append('candidate_cv', file);

        let accessToken = localStorage.getItem('Token');
        accessToken = JSON.parse(accessToken);
        console.log("accessToken", accessToken.token);

        let response = await fetch('http://192.168.1.8:8090/v1/api/candidates/upload_cv', {
          method: 'PUT',
          body: formData,
          headers: {
            'access-token': accessToken.token,
          },
        });

        if (response.ok) {
          const responseData = await response.json();
          console.log('Resume upload successful:', responseData);
          // Handle success, e.g., update state or show a success message
        } else {
          console.error('Resume upload failed:', response.status, response.statusText);
          // Handle error, e.g., show an error message to the user
        }
      } catch (error) {
        console.error('Error uploading resume:', error.message);
        // Handle other errors that may occur during the request
      }
    }
  };


  return (
    <>
    <form id='myForm'>
    <div className="container" style={{marginTop:"90px", paddingLeft:"50px"}}>
      <div>
        <div>
          <h5 className="UD-heading">Reference &nbsp; <FontAwesomeIcon   className="edit-pen-icon" icon={faPen} /></h5>
          <p className="UD-subheading">
            Please fill your information so we can get in touch with you.
          </p>
        </div>

        <div style={{ marginTop: "40px" }}>
          <h5 className="UD-heading">
            Where Did You Hear About Medi-Caps University From ?
          </h5>
          <p className="UD-subheading">
            Friend/ facebook/ Instagram/ LinkedIn/ Faculty Members at
            Medi-Caps
          </p>

          <input
            style={{ width: "95%" }}
            className="UD-set-input"
            type="text"
            placeholder=""
            name=""
            id=""
            required
          ></input>
        </div>

        {/* First Reference*/}

        <div>
          <p className="HS-heading"> First Reference </p>
        </div>

        <div className="row" style={{ marginTop: "-30px" }}>
          <div className="col-md-4">
            {/* Name */}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span></span>Name 
              </label>
              <input
                className="UD-set-input"
                type="text"
                placeholder="Enter  Name "
                name=""
                id=""
              
              ></input>
              <FontAwesomeIcon className="UD-set-icon" icon={faUser} />
            </div>
          </div>

          <div className="col-md-4">
            {/* Organization */}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span></span>Organization
              </label>
              <input
                className="UD-set-input"
                type="text"
                placeholder=" "
                name=""
                id=""
              
              ></input>
            </div>
          </div>

          <div className="col-md-4">
            {/* Position*/}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span></span>Position
              
              </label>
              <input
                className="UD-set-input"
                type="text"
                placeholder=" "
                name=""
                id=""
                
              ></input>
            </div>
          </div>
        </div>

        <div className="row">
        <div className="col-md-4">
            {/* Email */}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span>*</span>Email
              </label>
              <input
                className="UD-set-input"
                type="email"
                placeholder="Email address"
                name=""
                id=""
               
                required
              ></input>
              <FontAwesomeIcon className="UD-set-icon" icon={faEnvelope} />
            </div>
          </div>

          <div className="col-md-4">
            {/* Phone No. */}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span>*</span>Phone Number
              </label>
              <input
                className="UD-set-input"
                type="tel"
                placeholder="(123) 456 - 7890 "
                name=""
                id=""
                
                required
              ></input>
              <FontAwesomeIcon className="UD-set-icon" icon={faMobile} />
            </div>
          </div>

          
        </div>

        

        {/* Second Reference*/}

        <div>
          <p className="HS-heading">Second Reference</p>
        </div>

        <div className="row" style={{ marginTop: "-30px" }}>
          <div className="col-md-4">
            {/* Name */}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span></span>Name 
              </label>
              <input
                className="UD-set-input"
                type="text"
                placeholder="Enter  Name "
                name=""
                id=""
             
              ></input>
              <FontAwesomeIcon className="UD-set-icon" icon={faUser} />
            </div>
          </div>

          <div className="col-md-4">
            {/* Organization */}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span></span>Organization
              </label>
              <input
                className="UD-set-input"
                type="text"
                placeholder=" "
                name=""
                id=""
                
              ></input>
            </div>
          </div>

          <div className="col-md-4">
            {/* Position*/}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span></span>Position
              
              </label>
              <input
                className="UD-set-input"
                type="text"
                placeholder=" "
                name=""
                id=""
               
              ></input>
            </div>
          </div>
        </div>

        <div className="row">
        <div className="col-md-4">
            {/* Email */}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span>*</span>Email
              </label>
              <input
                className="UD-set-input"
                type="email"
                placeholder="Email address"
                name=""
                id=""
               
                required
              ></input>
              <FontAwesomeIcon className="UD-set-icon" icon={faEnvelope} />
            </div>
          </div>

          <div className="col-md-4">
            {/* Phone No. */}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span>*</span>Phone Number
              </label>
              <input
                className="UD-set-input"
                type="tel"
                placeholder="(123) 456 - 7890 "
                name=""
                id=""
                
                required
              ></input>
              <FontAwesomeIcon className="UD-set-icon" icon={faMobile} />
            </div>
          </div>

          
        </div>

        

        <div className="row"  style={{ marginTop: "-30px" }}>
        <div className="col-md-12">
            {/* Statement of Purpose*/}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span></span>Statement of Purpose
              </label>
              <input
                className="UD-set-input"
                type="text"
                placeholder=""
                name=""
                id=""
              
              ></input>
            
            </div>
          </div> 
        </div>


 {/* Upload Resume*/}

 <div>
          <p className="HS-heading">Upload Resume</p>
        </div>

        <div className="uploadfile-section">
        <label className="SetLabel-Name">
          <span>*</span>Upload your Resume:
        </label>
        <p className="uploadresume-subheading">
          To upload your resume here:(maximum size 2MB, PDF, DOC and DOCX
          format only)
        </p>
        <input
          className="set-choosefile-input"
          type="file"
          placeholder="00 (i.e Years.Months)"
          name="candidate_cv"
          id=""
          onChange={handleFileChange}
          required
        ></input>
      </div>

      <div>
        <span className="set-checkbox-span">
          {" "}
          <input
            className="set-checkbox"
            type="checkbox"
            id=""
            name=""
            
          />
          &nbsp; I confirm that the information provided here are true to my knowledge
        </span>
      </div>
      <div>
  <button className="savebtn" type="button">Save Changes</button>
</div>
      </div>
    </div>
    </form>
  </>
  )
}

export default EditReference