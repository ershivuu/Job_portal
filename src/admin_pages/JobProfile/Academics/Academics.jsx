import React, { useState, useEffect } from "react";
import "./Academics.css";
import Header from "../../../components/Header/Header";
import Footers from "../../../components/Footer/Footers";
import Accordion from "react-bootstrap/Accordion";
import adminApiService from "../../adminApiService";

function Academics() {
  const [activeKey, setActiveKey] = useState(null);
  const [department, setDepartment] = useState([]);
  const [jobCategories, setJobCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [jobprofileData, setJobprofileData] = useState([]);

  const fetchJobCategories = async () => {
    try {
      const response = await adminApiService.getJobCategories();
      setJobCategories(response.data);
    } catch (error) {
      console.error("Error fetching job categories:", error);
    }
  };

  const fetchDepartments = async () => {
    try {
      const response = await adminApiService.getDepartments();
      console.log("fhkjans", response.data);
      setDepartment(response.data);
    } catch (error) {
      console.error("Error fetching departments:", error);
    }
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleDepartmentChange = (e) => {
    setSelectedDepartment(e.target.value);
  };

  const fetchData = async () => {
    try {
      const response = await adminApiService.getJobProfileByCnD(
        selectedCategory,
        selectedDepartment
      );
      console.log("API response:", response.jobprofileData);
      setJobprofileData(response.jobprofileData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchDepartments();
    fetchJobCategories();
  }, []);

  useEffect(() => {
    fetchData();
  }, [selectedCategory, selectedDepartment]);

  const handleAccordionToggle = (eventKey) => {
    setActiveKey(eventKey === activeKey ? null : eventKey);
  };
  const sections = [
    {
      depart_name: department.dept_name,
    },
  ];
  return (
    <>
      <Header></Header>

      <div className="apply-for-dean">
        <div className="post-name">
          <p>DEAN</p>
        </div>
        <div></div>
        <div></div>
        <div className="apply-btn-jp">
          <button type="button">
            <a href="/apply-now">Apply Now</a>
          </button>
        </div>
      </div>
      <div className="courses">
        <p>
          Engineering | Management | Computer Applications Journalism | Film
          Production | Pharmacy | Physiotherapy | Hotel Management | Design |
          Education| Law | Multimedia & Animation | Physical Education |
          Sciences | Fashion | Research & Development | Polytechnic
        </p>
      </div>

      <div className="jd-dropdown">
        <Accordion activeKey={activeKey} onSelect={handleAccordionToggle}>
          {sections.map((item, index) => (
            <Accordion.Item key={index} eventKey={index.toString()}>
              <Accordion.Header>{item.depart_name}</Accordion.Header>
              <Accordion.Body>
                <div className="jd-table">
                  <div className="drp-table table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">Designation</th>
                          <th scope="col">Qualification</th>
                          <th scope="col">Experience</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">Asistant Professor</th>
                          <td>
                            BE/B Tech and ME/M Tech in relevant subject with
                            First Class or equivalent either in BE /B Tech or
                            ME/M Tech
                          </td>
                          <td>
                            Minimum of 5 years' experience in teaching and/or
                            research and/or industry of which at least 2 years
                            shall be post PhD is desirable
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">Asistant Professor</th>
                          <td>
                            BE/B Tech and ME/M Tech in relevant subject with
                            First Class or equivalent either in BE /B Tech or
                            ME/M Tech
                          </td>
                          <td>
                            Minimum of 5 years' experience in teaching and/or
                            research and/or industry of which at least 2 years
                            shall be post PhD is desirable
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">Asistant Professor</th>
                          <td>
                            BE/B Tech and ME/M Tech in relevant subject with
                            First Class or equivalent either in BE /B Tech or
                            ME/M Tech
                          </td>
                          <td>
                            Minimum of 5 years' experience in teaching and/or
                            research and/or industry of which at least 2 years
                            shall be post PhD is desirable
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>

      {/* <div className="my-table table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Designation</th>
              <th scope="col">Qualification and experience</th>
              <th scope="col">Highly desirable</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Dean</th>
              <td>
                Qualification and experience as for the post of Professor in
                relevant discipline
              </td>
              <td>
                <p>
                  Distinguished academicians, prominent scientist, experienced
                  corporate professionals with:
                </p>
                <ul>
                  <li>
                    Experience in leading Indian/ foreign
                    institutions/universities.
                  </li>
                  <li>
                    Notable achievements in management and leadership in
                    planning and organizing academic, research, industry and/or
                    professional activities.
                  </li>
                  <li>
                    Notable achievement and a proven Institutions building
                    ability.
                  </li>
                  <li>
                    High quality research achievements in terms of Published
                    work, such as research papers, patents filed / obtained,
                    books and / or technical reports;
                  </li>
                  <li>
                    Experience of guiding the project work / dissertation of PG
                    /Research Students or supervising R&D projects in industry;
                  </li>
                  <li>
                    Capacity to undertake / lead sponsored R&D consultancy and
                    related activities.
                  </li>
                  <p>Experience at similar capacity is desirable</p>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="table-dropdown">
        <details>
          <summary id="my-dropdown">
            Computer Science & Engineering / IT
          </summary>
          <div className="drp-table table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Designation</th>
                  <th scope="col">Qualification</th>
                  <th scope="col">Experience</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Asistant Professor</th>
                  <td>
                    BE/B Tech and ME/M Tech in relevant subject with First Class
                    or equivalent either in BE /B Tech or ME/M Tech
                  </td>
                  <td>
                    <p>
                      Minimum of 5 years' experience in teaching and/or research
                      and/or industry of which at least 2 years shall be post
                      PhD is desirable
                    </p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Asistant Professor</th>
                  <td>
                    BE/B Tech and ME/M Tech in relevant subject with First Class
                    or equivalent either in BE /B Tech or ME/M Tech
                  </td>
                  <td>
                    <p>
                      Minimum of 5 years' experience in teaching and/or research
                      and/or industry of which at least 2 years shall be post
                      PhD is desirable
                    </p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Asistant Professor</th>
                  <td>
                    BE/B Tech and ME/M Tech in relevant subject with First Class
                    or equivalent either in BE /B Tech or ME/M Tech
                  </td>
                  <td>
                    <p>
                      Minimum of 5 years' experience in teaching and/or research
                      and/or industry of which at least 2 years shall be post
                      PhD is desirable
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </details>
      </div>
      <div className="table-dropdown">
        <details>
          <summary id="my-dropdown">
            Computer Science & Engineering / IT
          </summary>
          <div className="drp-table table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Designation</th>
                  <th scope="col">Qualification</th>
                  <th scope="col">Experience</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Asistant Professor</th>
                  <td>
                    BE/B Tech and ME/M Tech in relevant subject with First Class
                    or equivalent either in BE /B Tech or ME/M Tech
                  </td>
                  <td>
                    <p>
                      Minimum of 5 years' experience in teaching and/or research
                      and/or industry of which at least 2 years shall be post
                      PhD is desirable
                    </p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Asistant Professor</th>
                  <td>
                    BE/B Tech and ME/M Tech in relevant subject with First Class
                    or equivalent either in BE /B Tech or ME/M Tech
                  </td>
                  <td>
                    <p>
                      Minimum of 5 years' experience in teaching and/or research
                      and/or industry of which at least 2 years shall be post
                      PhD is desirable
                    </p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Asistant Professor</th>
                  <td>
                    BE/B Tech and ME/M Tech in relevant subject with First Class
                    or equivalent either in BE /B Tech or ME/M Tech
                  </td>
                  <td>
                    <p>
                      Minimum of 5 years' experience in teaching and/or research
                      and/or industry of which at least 2 years shall be post
                      PhD is desirable
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </details>
      </div>
    */}
      <Footers></Footers>
    </>
  );
}

export default Academics;
