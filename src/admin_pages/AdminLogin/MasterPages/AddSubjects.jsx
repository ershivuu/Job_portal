import React, { useState, useEffect } from "react";
import "./Master.css";
import updatebtn from "../../../assets/logos/update.png";
import deletebtn from "../../../assets/logos/delete.png";
import axios from "axios";
// import { BASE_URL } from "../../../config/config";
import { ADMIN_BASE_URL } from "../../../config/config";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import close from "../../../assets/logos/close.png";
import adminApiService from "../../adminApiService";

function AddSubjects() {
  const [subject, setSubject] = useState([]);
  const [newSubject, setNewSubjectName] = useState("");
  const [editingSubjectId, setEditingSubjectId] = useState(null);
  const [newSubjectType, setNewSubjectType] = useState("");
  const [newSubjectDescription, setNewSubjectDescription] = useState("");
  const [editingSubject, setEditingSubject] = useState(null);
  const [open, setOpen] = React.useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [newCategory, setNewCategory] = useState("");

  useEffect(() => {
    fetchData();

  }, []);


  // const fetchData = () => {
  //   axios
  //     .get(`${ADMIN_BASE_URL}/subjectMaster`)
  //     .then((response) => {        
  //       setSubject(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // };


  const fetchData = () => {
   adminApiService.fetchSubjects()
      .then((data) => {
       
        setSubject(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleAdd = () => {    
   adminApiService.addSubject(newSubject, newSubjectType, newSubjectDescription)
      .then((response) => {
        setSubject([...subject, response]);
        setNewSubjectName("");
        setOpen(false);
        fetchData();
      })
      .catch((error) => {
        console.error(error);
      });
  };



  const handleUpdate = (subject) => {

    setEditingSubject(subject);
    setNewSubjectName(subject.subject_name);
    setNewSubjectType(subject.subject_type);
    setNewSubjectDescription(subject.description);
    setUpdateModalOpen(true);
  };



  const handleSubmitUpdate = () => {
 adminApiService.updateSubject(newSubject, editingSubject, newSubjectType, newSubjectDescription)
    .then((response) => {
      const updatedSubjects = subject.map((subj) =>
        subj.id === editingSubject.id ? response : subj
      );
      setSubject(updatedSubjects);
      setEditingSubject(null);
      setNewSubjectName("");
      setNewSubjectType("");
      setNewSubjectDescription("");
      setUpdateModalOpen(false);
      fetchData();
    })
    .catch((error) => {
      console.error(error);
    });
};


const handleDelete = (id) => {
  const isConfirmed = window.confirm("Are you sure you want to delete this subject?");
  if (isConfirmed) {
   adminApiService.deleteSubject(id)
      .then(() => {
        setSubject(subject.filter((subj) => subj.id !== id));
      })
      .catch((error) => {
        console.error(error);
      });
  }
};



  const handleSelectPostForUpdate = (categoryId) => {
    setSelectedCategoryId(categoryId);
    const category = categories.find((cat) => cat.id === categoryId);
    setSelectedCategory(category);
    setUpdateModalOpen(true);
  };

  const handleSelectCategory = (event) => {
    setSelectedCategoryId(event.target.value);
    const category = categories.find((cat) => cat.id === event.target.value);
    setSelectedCategory(category);
  };

  const handleCloseUpdateModal = () => {
    setUpdateModalOpen(false);
    setSelectedCategoryId("");
    setSelectedCategory(null);
    setNewCategory("");
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="container-1">
        <div className="new-opening-btn">
          <button onClick={() => setOpen(true)}>Add Subject</button>
        </div>
        <Modal
          open={open}
          onClose={handleCloseModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <form>
              <img
                onClick={handleCloseModal}
                className="Ad-close-btn"
                src={close}
              />
              <label
                style={{ marginTop: "20px" }}
                className="AC-SetLabel-Name"
                htmlFor="SubjectName"
              >
                Add Subject Name
              </label>
              <input
                type="text"
                id="SubjectName"
                className="Ac-set-input"
                placeholder="Add Your Subject Name"
                value={newSubject}
                onChange={(e) => setNewSubjectName(e.target.value)}
              />
              <label className="AC-SetLabel-Name" htmlFor="SubjectType">
                Add Subject Type
              </label>
              <input
                type="text"
                id="SubjectType"
                className="Ac-set-input"
                placeholder="Add Subject Type"
                value={newSubjectType}
                onChange={(e) => setNewSubjectType(e.target.value)}
              />
              <label className="AC-SetLabel-Name" htmlFor="SubjectDescription">
                Add Subject Description
              </label>
              <input
                type="text"
                className="Ac-set-input"
                id="SubjectDescription"
                placeholder="Add Description"
                value={newSubjectDescription}
                onChange={(e) => setNewSubjectDescription(e.target.value)}
              />

              <button id="set-btn" type="button" onClick={handleAdd}>
                ADD
              </button>
            </form>
          </Box>
        </Modal>
      </div>


<div className="admin-list">
<div className="master-table ">
        <p className="SCA-heading">CURRENT SUBJECTS AVAILABLE</p>
        <div className="table-responsive fixe-table">
          <table className="table table-responsive">
            <thead style={{ color: "rgba(0, 0, 0, 0.63)" }} className="thead">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">SUBJECT NAME</th>
                <th scope="col">SUBJECT TYPE</th>
                <th scope="col">UPDATE</th>
                <th scope="col">DELETE</th>
              </tr>
            </thead>
            <tbody>
              {subject.map((subject, index) => (
                <tr key={subject.id}>
                  <td>{index + 1}</td>
                  <td>{subject.subject_name}</td>
                  <td>{subject.subject_type}</td>
                  <td>
                    <button
                      id="table-btns"
                      onClick={() => handleUpdate(subject)}
                    >
                      <img src={updatebtn} className="up-del-btn" alt="" />
                    </button>

                  </td>
                  <td>
                    <button
                      id="table-btns"
                      onClick={() => handleDelete(subject.id)}
                    >
                      <img src={deletebtn} className="up-del-btn" alt="" />
                    </button>
                  </td>
                </tr>
              ))}
              <Modal
                open={updateModalOpen}
                onClose={handleCloseUpdateModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <form>
                    <img
                      onClick={handleCloseUpdateModal}
                      className="postapplied-close-btn"
                      src={close}
                    />
                    <label
                      className="AC-SetLabel-Name"
                      htmlFor="SubjectName"
                    >
                      Add Subject Name
                    </label>
                    <input
                      type="text"
                      id="SubjectName"
                      className="Ac-set-input"
                      placeholder="Add Your Subject Name"
                      value={newSubject}
                      onChange={(e) => setNewSubjectName(e.target.value)}
                    />
                    <label
                      className="AC-SetLabel-Name"
                      htmlFor="SubjectType"
                    >
                      Add Subject Type
                    </label>
                    <input
                      type="text"
                      id="SubjectType"
                      className="Ac-set-input"
                      placeholder="Add Subject Type"
                      value={newSubjectType}
                      onChange={(e) => setNewSubjectType(e.target.value)}
                    />
                    <label
                      className="AC-SetLabel-Name"
                      htmlFor="SubjectDescription"
                    >
                      Add Subject Description
                    </label>
                    <input
                      type="text"
                      className="Ac-set-input"
                      id="SubjectDescription"
                      placeholder="Add Description"
                      value={newSubjectDescription}
                      onChange={(e) =>
                        setNewSubjectDescription(e.target.value)
                      }
                    />

                    <button
                      id="set-btn"
                      type="button"
                      onClick={handleSubmitUpdate}
                    >
                      UPDATE
                    </button>
                  </form>
                </Box>
              </Modal>
            </tbody>
          </table>
        </div>
      </div>
</div>
     
    </>
  );
}

export default AddSubjects;
