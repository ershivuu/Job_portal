import React from "react";
import { Route } from "react-router-dom";
import CandidateAuthGaurd from "../gaurd/CandidateAuthGaurd";
import CandidatePanel from "../candidate_pages/CandidateLogin/CandidatePanel";
import CandidateDashboard from "../candidate_pages/CandidateLogin/CandidateDashboard/CandidateDashboard";
// import  {ApiDataProvider}  from "../candidate_pages/CandidateLogin/ApiDataContext";
// import {ApiDataProvider} from "../context/CandidateContext.js"
import EditPersonalDetails from "../candidate_pages/CandidateLogin/CandidateChildPages/EditPersonalDetails/EditPersonalDetails";

import EditProgramsForm from "../candidate_pages/CandidateLogin/CandidateChildPages/EditProgramsForm/EditProgramsForm";
import EditQualificationForm from "../candidate_pages/CandidateLogin/CandidateChildPages/EditQualificationForm/EditQualificationForm.jsx";
import EditExperience from "../candidate_pages/CandidateLogin/CandidateChildPages/EditExperienceForm/EditExperience.jsx";
import EditResearchForm from "../candidate_pages/CandidateLogin/CandidateChildPages/EditResearchForm/EditResearchForm.jsx";
import EditReference from "../candidate_pages/CandidateLogin/CandidateChildPages/EditReference/EditReference.jsx";
import CurrentOpening from "../admin_pages/CurrentOpening/CurrentOpening.jsx";
import CandidateCurrentopening from "../candidate_pages/CandidateLogin/CandidateChildPages/CandidateCurrentOpening/CandidateCurrentopening.jsx";
import CandidateOrganisedForm from "../candidate_pages/CandidateLogin/CandidateChildPages/EditProgramsForm/SeminarOrganised/CandidateOrganisedForm.jsx";
// import CandidateAttendForm from "../candidate_pages/CandidateLogin/CandidateChildPages/EditProgramsForm/CandidateAttendForm.jsx";
// import CandidateOtherInfoForm from "../candidate_pages/CandidateLogin/CandidateChildPages/EditProgramsForm/CandidateOtherInfoForm.jsx";
// import OtherActivites from "../candidate_pages/CandidateLogin/CandidateChildPages/EditProgramsForm/OtherActivites.jsx";
import OtherActivites from "../candidate_pages/CandidateLogin/CandidateChildPages/EditProgramsForm/OtherActivites.jsx";
import CandidateOtherInfoForm from "../candidate_pages/CandidateLogin/CandidateChildPages/EditProgramsForm/SeminarOtherInfo/CandidateOtherInfoForm.jsx"
import CandidateAttendForm from "../candidate_pages/CandidateLogin/CandidateChildPages/EditProgramsForm/SeminarAttend/CandidateAttendForm.jsx";
import ResearchForm from "../candidate_pages/CandidateLogin/CandidateChildPages/EditResearchForm/CandiateResearchForm/ResearchForm.jsx";
import JournalPublicationForm from "../candidate_pages/CandidateLogin/CandidateChildPages/EditResearchForm/CandidateJournalForm/JournalPublicationForm.jsx";
import ConfrencePublicationForm from "../candidate_pages/CandidateLogin/CandidateChildPages/EditResearchForm/CandidateConfrenceForm/ConfrencePublicationForm.jsx";
import PatentsForm from "../candidate_pages/CandidateLogin/CandidateChildPages/EditResearchForm/CandidatePatentForm/PatentsForm.jsx";
import CopyRightsForm from "../candidate_pages/CandidateLogin/CandidateChildPages/EditResearchForm/CopyrightsForm/CopyRightsForm.jsx";
import ExperienceForm from "../candidate_pages/CandidateLogin/CandidateChildPages/EditExperienceForm/CandidateExperienceForm/ExperienceForm.jsx";
import TotalExperienceForm from "../candidate_pages/CandidateLogin/CandidateChildPages/EditExperienceForm/CandidateTotalExperienceForm.jsx/TotalExperienceForm.jsx";
console.log("inside Candidate-Auth Routes");

const CandidateAuthRoutes = [
  <Route
    path="candidate-dashboard"
    element={<CandidateAuthGaurd component={<CandidateDashboard />} />}
  >
    <Route
      path="personal-details"
      element={<CandidateAuthGaurd component={<EditPersonalDetails />} />}
    />
    <Route
      path="personal-programs"
      element={<CandidateAuthGaurd component={<EditProgramsForm />} />}
    />
    <Route
      path="personal-qualification"
      element={<CandidateAuthGaurd component={<EditQualificationForm />} />}
    />
    <Route
      path="personal-experience"
      element={<CandidateAuthGaurd component={<EditExperience />} />}
    />
    <Route
      path="personal-research"
      element={<CandidateAuthGaurd component={<EditResearchForm />} />}
    />
    <Route
      path="personal-reference"
      element={<CandidateAuthGaurd component={<EditReference />} />}
    />
    {/* <Route
      path="current-opening"
      element={<CandidateAuthGaurd component={<CurrentOpening />} />}
    /> */}
    <Route
      path="current-opening"
      element={<CandidateAuthGaurd component={<CandidateCurrentopening />} />}
    />
    <Route
      path="candidate-organised"
      element={<CandidateAuthGaurd component={<CandidateOrganisedForm />} />}
    />
    <Route
      path="candidate-attend"
      element={<CandidateAuthGaurd component={<CandidateAttendForm />} />}
    />
    <Route
      path="candidate-otherInfo"
      element={<CandidateAuthGaurd component={<CandidateOtherInfoForm />} />}
    />
    <Route
      path="candidate-otheractivites"
      element={<CandidateAuthGaurd component={<OtherActivites />} />}
    />
     <Route
      path="candidate-research"
      element={<CandidateAuthGaurd component={<ResearchForm />} />}
    />
     <Route
      path="candidate-journalPublication"
      element={<CandidateAuthGaurd component={<JournalPublicationForm />} />}
    />
     <Route
      path="candidate-confrencePublication"
      element={<CandidateAuthGaurd component={<ConfrencePublicationForm />} />}
    />
     <Route
      path="candidate-patents"
      element={<CandidateAuthGaurd component={<PatentsForm />} />}
    />
     <Route
      path="candidate-copyrights"
      element={<CandidateAuthGaurd component={<CopyRightsForm />} />}
    />
     <Route
      path="candidate-experience"
      element={<CandidateAuthGaurd component={<ExperienceForm />} />}
    />
     <Route
      path="candidate-totalexperience"
      element={<CandidateAuthGaurd component={<TotalExperienceForm />} />}
    />
  </Route>,
];

export default CandidateAuthRoutes;
