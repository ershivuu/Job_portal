import React, { useState, useEffect } from "react";
import adminApiService from "../../adminApiService";
import updatebtn from "../../../assets/logos/update.png"
import deletebtn from "../../../assets/logos/delete.png"
import close from "../../../assets/logos/close.png" 
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Notification from "../../../Notification/Notification";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
function VisitorsReports() {
    const [visitorData, setVisitorData] = useState([]);
    const [notificationOpen, setNotificationOpen] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState("");
    const [notificationSeverity, setNotificationSeverity] = useState("success");
    const [selectedVisitor, setSelectedVisitor] = useState(null);
    const [updateModalOpen, setUpdateModalOpen] = useState(false);
    const [isAttend, setIsAttend] = useState(false);
    const [isClose, setIsClose] = useState(false);
    const [deleteVisiotrId, setDeleteVisitorId] = useState(null);
    const [updateData, setUpdateData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        contact_1: "",
        message: "",
        action_discription: "",
        is_attend: false,
        is_close: false,
        assign_to: false,
    });
    const [updateNewField, setUpdateNewField] = useState({});
    const fetchVisitorData = async () => {
        try {
            const response = await adminApiService.getVisitor();
           
            setVisitorData(response);
        } catch (error) {
            console.error("Error fetching visitor details:", error);
        }
    };
    useEffect(() => {
        fetchVisitorData();
    }, []);
    const handleCloseUpdateModal = () => {
        setUpdateModalOpen(false);
    };
    
    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "700",
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 4,
    };
    const handleSelectPostForUpdate = (visitorId) => {
        const selectedVisitor = visitorData.find((visitor) => visitor.id === visitorId);
        console.log("selectedVisitor>>>>>", selectedVisitor)
        setSelectedVisitor(selectedVisitor);
        setUpdateData(selectedVisitor);
        setIsAttend(selectedVisitor.is_attend)
        setIsClose(selectedVisitor.is_close)
        setUpdateModalOpen(true);
    };
    const handleCheckboxChange = (fieldName, value) => {
        let updatedValue = !value;
        setUpdateData((prevValues) => ({
            ...prevValues,
            [fieldName]: updatedValue,
        }));

        switch (fieldName) {
            case "is_attend":
                setIsAttend(updatedValue);
                // console.log("is_attend:", updatedValue);
                setUpdateNewField((prevValues) => ({
                    ...prevValues,
                    [fieldName]: updatedValue,
                }));
                break;
            case "is_close":
                setIsClose(updatedValue);
                // console.log("is_close:", updatedValue);
                setUpdateNewField((prevValues) => ({
                    ...prevValues,
                    [fieldName]: updatedValue,
                }));
                break; 
            default:
                break;
        }
    };
    const formatDateForInput = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    };
    const handleChange = (fieldName, value) => {
        console.log("handlefild", fieldName, value, updateNewField);
        setUpdateNewField((prev) => ({ ...prev, [fieldName]: value.toString() }));
        setUpdateData((prev) => ({ ...prev, [fieldName]: value.toString() }));
    };
    const handleUpdateVisitor = async () => {
        console.log("visitor id", updateData.id)
        const newFormData = {
            ...updateNewField,
            visitor_id: updateData.id,
        }
        try {
            const response = await adminApiService.updateVisitor(newFormData);
            console.log("Updated Visitor:", response);
            setNotificationMessage("Updated Successfully.");
            setNotificationSeverity("success");
            setNotificationOpen(true);
            fetchVisitorData();
            setUpdateModalOpen(false);
        } catch (error) {
            console.error("Error updating visitor:", error);
            setNotificationMessage("Error Update Changes.");
            setNotificationSeverity("error");
            setNotificationOpen(true);
        }
    };
    const handleDeleteClick = async (visitorId) => {        
        setDeleteVisitorId(visitorId);
      };
    const handleConfirmDelete = async () => {        
        try {          
            await adminApiService.removeVisitor(deleteVisiotrId);    
            setVisitorData(
              visitorData.filter((visitor) => visitor.id !== deleteVisiotrId)
            );            
            setNotificationMessage("Deleted Successfully.");
            setNotificationSeverity("success");
            setNotificationOpen(true);
          
        } catch (error) {
        //   console.error("Error deleting job profile:", error);          
          setNotificationMessage("Failed to delete job profile. Please try again!");
            setNotificationSeverity("error");
            setNotificationOpen(true);
        } finally {
            setDeleteVisitorId(null);
          }
      };
    return (
        <>
 <Notification
        open={notificationOpen}
        handleClose={() => setNotificationOpen(false)}
        alertMessage={notificationMessage}
        alertSeverity={notificationSeverity}
      />
            <div className="admin-list">
                <div className="master-table ">
                    <p className="SCA-heading">Visitors Report</p>
                    <div className="table-responsive ">
                        <table className="table table-responsive">
                            <thead style={{ color: "rgba(0, 0, 0, 0.63)" }}>
                                <tr>
                                    <th scope="col">S.No.</th>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Message</th>
                                    <th scope="col">Assign-To</th>
                                    <th scope="col">Is-Attend</th>
                                    <th scope="col">Is-Close</th>
                                    <th scope="col">Comments</th>
                                    <th scope="col">Visiting Date</th>
                                    <th scope="col">Edit</th>
                                    <th scope="col">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {visitorData.map((visitor, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{visitor.first_name}</td>
                                        <td>{visitor.last_name}</td>
                                        <td>{visitor.email}</td>
                                        <td>{visitor.contact_1}</td>
                                        <td>{visitor.message}</td>
                                        <td>{visitor.assign_to || "-"}</td>
                                        <td>{visitor.is_attend ? "Yes" : "No"}</td>
                                        <td>{visitor.is_close ? "Yes" : "No"}</td>
                                        <td>{visitor.action_discription || "-"}</td>
                                        <td>{new Date(visitor.createdAt).toLocaleDateString()}</td>
                                        <td>
                                            <button
                                                type="button"
                                                id="table-btns"
                                                onClick={() => handleSelectPostForUpdate(visitor.id)}
                                            >
                                                <img className="up-del-btn" src={updatebtn} alt="" />
                                            </button>
                                        </td>
                                        <td>
                                            <button
                                                type="button"
                                                id="table-btns"
                                                onClick={() => handleDeleteClick(visitor.id)}
                                            >
                                                <img className="up-del-btn" src={deletebtn} alt="" />
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
                                                alt=""
                                            />
                                            <div className="row">
                                                <div className="col-6">
                                                    <label className="AC-SetLabel-Name" htmlFor="First Name">
                                                        First Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="Ac-set-input"
                                                        id=""
                                                        name="first_name"
                                                        placeholder="First Name"
                                                        value={selectedVisitor ? selectedVisitor.first_name : ''}

                                                    />
                                                </div>
                                                <div className="col-6">
                                                    <label className="AC-SetLabel-Name" htmlFor="Last Name">
                                                        Last Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="Ac-set-input"
                                                        id=""
                                                        name="last_name"
                                                        placeholder="Last Name"
                                                        value={selectedVisitor ? selectedVisitor.last_name : ''}

                                                    />
                                                </div>
                                            </div>


                                            <div className="row">
                                                <div className="col-6">
                                                    <label className="AC-SetLabel-Name" htmlFor="Email">
                                                        Email
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="Ac-set-input"
                                                        id=""
                                                        name="email"
                                                        placeholder="Email"
                                                        value={selectedVisitor ? selectedVisitor.email : ''}

                                                    />
                                                </div>
                                                <div className="col-6">
                                                    <label className="AC-SetLabel-Name" htmlFor="Contact">
                                                        Contact
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="Ac-set-input"
                                                        id=""
                                                        name="contact_1"
                                                        placeholder="Contact"
                                                        value={selectedVisitor ? selectedVisitor.contact_1 : ''}

                                                    />
                                                </div>
                                            </div>


                                            <div className="row">
                                                <div className="col-6">
                                                    <label className="AC-SetLabel-Name" htmlFor="Message">
                                                        Message
                                                    </label>
                                                    <textarea
                                                        type="text"
                                                        className="Ac-set-input"
                                                        id=""
                                                        name="message"
                                                        placeholder="Message"
                                                        value={selectedVisitor ? selectedVisitor.message : ''}

                                                    />
                                                </div>
                                                <div className="col-6">
                                                    <label className="AC-SetLabel-Name" htmlFor="createdAt">
                                                        createdAt
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="Ac-set-input"
                                                        id=""
                                                        name="createdAt"
                                                        placeholder="createdAt"
                                                        value={formatDateForInput(selectedVisitor ? selectedVisitor.createdAt : '')}
                                                    // onChange={(e) =>
                                                    //     handleChange(
                                                    //       "createdAt",
                                                    //       e.target.value
                                                    //     )
                                                    //   }
                                                    />

                                                </div>
                                            </div>

                                            <div className="row">

                                                <div className="col-6">
                                                    <label className="AC-SetLabel-Name" htmlFor="Comments">
                                                        Comments
                                                    </label>
                                                    <textarea
                                                        type="text"
                                                        className="Ac-set-input"
                                                        id=""
                                                        name="action_discription"
                                                        placeholder="Comments"
                                                        value={updateData ? updateData.action_discription : ''}
                                                        onChange={(e) =>
                                                            handleChange(
                                                                "action_discription",
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                </div>
                                                <div className="col-6">
                                                    <label className="AC-SetLabel-Name" htmlFor="Allotted">
                                                        Allotted
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="Ac-set-input"
                                                        id=""
                                                        name="assign_to"
                                                        placeholder="Allotted "
                                                        value={updateData ? updateData.assign_to : ''}
                                                        onChange={(e) =>
                                                            handleChange(
                                                                "assign_to",
                                                                e.target.value
                                                            )
                                                        }
                                                    />

                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-6">
                                                    <p>Is Attend</p>
                                                    <label className="switch">
                                                        <input
                                                            type="checkbox"
                                                            id="checkbox3"
                                                            name="is_attend"
                                                            checked={isAttend}
                                                            onChange={() =>
                                                                handleCheckboxChange(
                                                                    "is_attend",
                                                                    isAttend
                                                                )
                                                            }

                                                        />
                                                        <span className="slider round"></span>
                                                    </label>
                                                </div>
                                                <div className="col-6">
                                                    <p>Is Close</p>
                                                    <label  className="switch">
                                                        <input
                                                            type="checkbox"
                                                            id="checkbox3"
                                                            name="is_close"
                                                            checked={isClose}
                                                            onChange={() =>
                                                                handleCheckboxChange(
                                                                    "is_close",
                                                                    isClose
                                                                )
                                                            }
                                                        />
                                                        <span className="slider round"></span>
                                                    </label>
                                                </div>
                                                {/* <div className="col-4">
                                                    <p>assign_to</p>
                                                    <label className="switch">
                                                        <input
                                                            type="checkbox"
                                                            id="checkbox3"
                                                            name="assign_to"
                                                            checked={assignTo}
                                                            onChange={() =>
                                                                handleCheckboxChange(
                                                                  "assign_to",
                                                                  assignTo
                                                                )
                                                              }
                                                        />
                                                        <span className="slider round"></span>
                                                    </label>
                                                </div> */}


                                            </div>

                                            <button
                                                id="set-btn"
                                                type="button"
                                                onClick={handleUpdateVisitor}
                                            >
                                                UPDATE NOW
                                            </button>
                                        </form>
                                    </Box>
                                </Modal>

                                <Dialog open={deleteVisiotrId !== null} onClose={() => setDeleteVisitorId(null)}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          Are you sure you want to delete this item?
        </DialogContent>
        <DialogActions>
        <Button variant="contained" color="primary" onClick={handleConfirmDelete} >Delete</Button>
          <Button onClick={() => setDeleteVisitorId(null)}>Cancel</Button>
        </DialogActions>
      </Dialog>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default VisitorsReports;
