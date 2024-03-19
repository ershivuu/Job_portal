import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  input,
} from "@mui/material";
// import close from "../../../assets/logos/close.png";
import close from "../../../../../assets/logos/close.png";
import candidatesApiService from "../../../../candidateService";
function EditOrganisedForm({ filteredItem, handleClose, fetchData }) {
  const [formData, setFormData] = useState({
    name_of_course: "",
    name_of_industry: "",
    name_of_institute: "",
    organise_date_from: "",
    organise_date_to: "",
    participants_number: "",
    sponsered_by: "",
  });
  const [updateField, setUpdateField] = useState({});

  useEffect(() => {
    if (filteredItem) {
      setFormData({
        name_of_course: filteredItem.name_of_course || "",
        name_of_industry: filteredItem.name_of_industry || "",
        name_of_institute: filteredItem.name_of_institute || "",
        organise_date_from: filteredItem.organise_date_from || "",
        organise_date_to: filteredItem.organise_date_to || "",
        participants_number: filteredItem.participants_number || "",
        sponsered_by: filteredItem.sponsered_by || "",
      });
    }
  }, [filteredItem]);

  // const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setFormData({ ...formData, [name]: value });
  //     setUpdateField((prev) => ({ ...prev, [fieldName]: value.toString() }));
  // };

  const handleChange = (fieldName, value, index) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: value,
    }));
    setUpdateField((prevUpdateField) => ({
      ...prevUpdateField,
      [fieldName]: value.toString(),
    }));

    // Console mein changes dikhaane ke liye
    console.log(`Field '${fieldName}' updated to:`, value);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const updatedFormData = {
        ...updateField,
        organised_id: filteredItem.id,
      };

      await candidatesApiService.updateOrganisedForm(updatedFormData);
      fetchData();
      handleClose();
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  const formatDateForInput = (dateString) => {
    const dateObject = new Date(dateString);

    // Check if dateString is empty or dateObject is invalid
    if (!dateString || isNaN(dateObject.getTime())) {
      return ""; // Return an empty string for invalid or empty dates
    }

    const day = dateObject.getDate().toString().padStart(2, "0");
    const month = (dateObject.getMonth() + 1).toString().padStart(2, "0");
    const year = dateObject.getFullYear();

    return `${year}-${month}-${day}`;
  };

  return (
    <>
      <Dialog open={true}>
        <DialogTitle>Edit Organised Form</DialogTitle>
        <DialogContent>
          <form onSubmit={handleUpdate}>
            <input
              label="Name of Course"
              type="text"
              name="name_of_course"
              value={formData.name_of_course}
              onChange={(e) => handleChange("name_of_course", e.target.value)}
              fullWidth
            />
            <input
              label="Name of Industry"
              type="text"
              name="name_of_industry"
              value={formData.name_of_industry}
              onChange={(e) => handleChange("name_of_industry", e.target.value)}
              fullWidth
            />
            <input
              label="Name of Institute"
              type="text"
              name="name_of_institute"
              value={formData.name_of_institute}
              onChange={(e) =>
                handleChange("name_of_institute", e.target.value)
              }
              fullWidth
            />
            <input
              label="Organise Date From"
              type="date"
              name="organise_date_from"
              value={formatDateForInput(formData.organise_date_from)}
              onChange={(e) =>
                handleChange("organise_date_from", e.target.value)
              }
              fullWidth
            />
            <input
              label="Organise Date To"
              type="date"
              name="organise_date_to"
              value={formatDateForInput(formData.organise_date_to)}
              onChange={(e) => handleChange("organise_date_to", e.target.value)}
              fullWidth
            />
            <input
              label="Participants Number"
              type="text"
              name="participants_number"
              value={formData.participants_number}
              onChange={(e) =>
                handleChange("participants_number", e.target.value)
              }
              fullWidth
            />
            <input
              label="Sponsored By"
              type="text"
              name="sponsered_by"
              value={formData.sponsered_by}
              onChange={(e) => handleChange("sponsered_by", e.target.value)}
              fullWidth
            />
            <DialogActions>
              <Button variant="contained" color="primary" type="submit">
                Update
              </Button>
              <Button onClick={handleClose}>Close</Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default EditOrganisedForm;
