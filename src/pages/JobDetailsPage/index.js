import React from "react";
import "./JobDetailsPage.css";
import { useParams, useNavigate } from "react-router";
import { jobsData } from "../../data/jobsData";
import SimilatJobs from "../../components/siimilarjobs";
// main function
const JobDetailsPage = () => {
  // defined navigaytion using hook
  const navigate = useNavigate();
  //fetching job from params
  const params = useParams();
  const jobId = parseInt(params.id);

  //filtering job
  const job = jobsData.find((job) => job.id === jobId);
  const handleApply = () => {
    alert("job.applied!");
  };

  const handleSave = () => {
    alert("Job saved!");
  };

  return job ? (
    <div className="job-details">
      <div onClick={() => navigate("/")}>Return to List</div>
      <h2 className="job-title">{job.title}</h2>
      <p className="job-description">{job.description}</p>
      <div className="job-info">
        <div className="job-meta">
          <div>
            <span className="info-label">Stipend:</span>
            <span className="info-value">{job?.stipend}</span>
          </div>
          <div className="job-info-item">
            <span className="info-label">Duration:</span>
            <span className="info-value">{job?.duration}</span>
          </div>
          <div className="job-info-item">
            <span className="info-label">Posted Date:</span>
            <span className="info-value">{job?.postedDate}</span>
          </div>
          <div className="job-info-item">
            <span className="info-label">Location:</span>
            <span className="info-value">{job.location}</span>
          </div>
          <div className="job-info-item">
            <span className="info-label">Company:</span>
            <span className="info-value">{job?.company}</span>
          </div>
        </div>
        <div className="job-requirements">
          <h3>Requirements:</h3>
          <p>{job?.requirements}</p>
        </div>
        <div className="job-responsibilities">
          <h3>Responsibilities:</h3>
          <p>{job?.responsibilities}</p>
        </div>
      </div>
      <div className="button-container">
        <button className="apply-button" onClick={handleApply}>
          Apply
        </button>
        <button className="save-button" onClick={handleSave}>
          Save Job
        </button>
      </div>
      <SimilatJobs job={job} />
    </div>
  ) : (
    "Loading"
  );
};

export default JobDetailsPage;
