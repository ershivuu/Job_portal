import React, { useState, useEffect } from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
} from "@mui/material"; // Importing required components from Material-UI

import candidatesApiService from "../../../../candidateService";

function AddCandidateConfrenceForm({ handleCloseConfrenceClick,fetchData,setNotificationOpen,setNotificationMessage,setNotificationSeverity }) {
    const [formData, setFormData] = useState({
        conference_publication_year: "",
        conference_publication_title: "",
        conference_publication_author: "",
        conference_publication_index: "",
        conference_publication_name: "",
        conference_publication_issn: "",
        conference_publication_volume: "",
        conference_publication_issue: "",
    });

    const [formErrors, setFormErrors] = useState({
        conference_publication_year: "",
        conference_publication_title: "",
        conference_publication_author: "",
        conference_publication_index: "",
        conference_publication_name: "",
        conference_publication_issn: "",
        conference_publication_volume: "",
        conference_publication_issue: "",
      });

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({ ...formData, [name]: value });
    //     setFormErrors({ ...formErrors, [name]: "" });
    // };

    const handleChange = (e) => {
        const { name, value } = e.target;
    
        if (name === "conference_publication_year") {
            // Check if the input is a number and has 4 digits
            if (/^\d*$/.test(value) && value.length <= 4) {
                setFormData({ ...formData, [name]: value });
                // Clear the error message if input is valid
                setFormErrors({ ...formErrors, [name]: '' });
            } else {
                // Set an error message for invalid input
                setFormErrors({ ...formErrors, [name]: 'Please enter a valid 4-digit number' });
            }
        } else {
            setFormData({ ...formData, [name]: value });
            setFormErrors({ ...formErrors, [name]: '' });
        }
    };
    
    


    const validateForm = () => {
        let valid = true;
        const newFormErrors = { ...formErrors };
    
        for (const key in formData) {
          if (formData[key].trim() === "") {
            newFormErrors[key] = "This field is required.";
            valid = false;
          }
        }
    
        setFormErrors(newFormErrors);
        return valid;
      };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
          }

          try {
              const response = await candidatesApiService.addCandidateConferancePublications(formData);
              console.log(response.data); 

              if (response) {
                setNotificationMessage(`added successfully`);
                setNotificationSeverity("success");
                setNotificationOpen(true);
                handleCloseConfrenceClick();
                fetchData();
              }
             

            } catch (error) {
              console.error(`Error submitting data: ${error.message}`);

            }
    };

    return (
        <Dialog open={true} PaperProps={{ style: { width: "100%" } }}>
            <DialogTitle className="HS-heading">Add Confrence Publications Form</DialogTitle>
            <DialogContent>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                            <label className="SetLabel-Name">Year</label>
                            <input
                                className="set-input"
                                label="conference_publication_year"
                                type="text"
                                name="conference_publication_year"
                                value={formData.conference_publication_year}
                                onChange={handleChange}
                                fullWidth
                            />
                               {formErrors.conference_publication_year && (
                <span className="error">{formErrors.conference_publication_year}</span>
              )}
                        </div>
                        <div className="col-md-6">
                            <label className="SetLabel-Name">Title</label>
                            <input
                                className="set-input"
                                label="conference_publication_title"
                                type="text"
                                name="conference_publication_title"
                                value={formData.conference_publication_title}
                                onChange={handleChange}
                                fullWidth
                            />
                               {formErrors.conference_publication_title && (
                <span className="error">{formErrors.conference_publication_title}</span>
              )}
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <label className="SetLabel-Name">Author Role/ Inventor</label>
                            <input
                                className="set-input"
                                label="conference_publication_author"
                                type="text"
                                name="conference_publication_author"
                                value={formData.conference_publication_author}
                                onChange={handleChange}
                                fullWidth
                            />
                               {formErrors.conference_publication_author && (
                <span className="error">{formErrors.conference_publication_author}</span>
              )}
                        </div>
                        <div className="col-md-6">
                            <label className="SetLabel-Name">Indexing</label>
                            <input
                                className="set-input"
                                label="conference_publication_index"
                                type="text"
                                name="conference_publication_index"
                                value={formData.conference_publication_index}
                                onChange={handleChange}
                                fullWidth
                            />
                               {formErrors.conference_publication_index && (
                <span className="error">{formErrors.conference_publication_index}</span>
              )}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <label className="SetLabel-Name">Journal Name</label>
                            <input
                                className="set-input"
                                label="conference_publication_name"
                                type="text"
                                name="conference_publication_name"
                                value={formData.conference_publication_name}
                                onChange={handleChange}
                                fullWidth
                            />
                               {formErrors.conference_publication_name && (
                <span className="error">{formErrors.conference_publication_name}</span>
              )}
                        </div>
                        <div className="col-md-6">
                            <label className="SetLabel-Name">ISSN</label>
                            <input
                                className="set-input"
                                label="conference_publication_issn"
                                type="text"
                                name="conference_publication_issn"
                                value={formData.conference_publication_issn}
                                onChange={handleChange}
                                fullWidth
                            />
                               {formErrors.conference_publication_issn && (
                <span className="error">{formErrors.conference_publication_issn}</span>
              )}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <label className="SetLabel-Name">Volume</label>
                            <input
                                className="set-input"
                                label="conference_publication_volume"
                                type="text"
                                name="conference_publication_volume"
                                value={formData.conference_publication_volume}
                                onChange={handleChange}
                                fullWidth
                            />
                               {formErrors.conference_publication_volume && (
                <span className="error">{formErrors.conference_publication_volume}</span>
              )}
                        </div>
                        <div className="col-md-6">
                            <label className="SetLabel-Name">Issue</label>
                            <input
                                className="set-input"
                                label="conference_publication_issue"
                                type="text"
                                name="conference_publication_issue"
                                value={formData.conference_publication_issue}
                                onChange={handleChange}
                                fullWidth
                            />
                               {formErrors.conference_publication_issue && (
                <span className="error">{formErrors.conference_publication_issue}</span>
              )}
                        </div>
                    </div>



                    <DialogActions>
                        <Button variant="contained" color="primary" type="submit" onClick={handleSubmit}>
                            Submit
                        </Button>
                        <Button onClick={handleCloseConfrenceClick}>Cancle</Button>
                    </DialogActions>
                </form>
            </DialogContent>
        </Dialog>
    );
}

export default AddCandidateConfrenceForm;