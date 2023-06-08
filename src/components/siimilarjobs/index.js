import React from "react";
import { jobsData } from "../../data/jobsData";
import "./SimilatJobs.css";

const SimilatJobs = ({ job }) => {
  // Function to find similar jobs based on tags
  const findSimilarJobs = (currentJob, allJobs) => {
    const similarJobs = allJobs.filter((job) => {
      // Check if the current job and the iterated job have at least one matching tag
      const commonTags = job.tags.filter((tag) =>
        currentJob.tags.includes(tag)
      );

      // Check if the current job and the iterated job have a matching title
      const isTitleMatch =
        currentJob.title.toLowerCase() === job.title.toLowerCase();

      // Return true if there is at least one matching tag or a matching title
      return commonTags.length > 0 || isTitleMatch;
    });

    return similarJobs;
  };

  // Find similar jobs based on the current job's tags
  const similarJobs = findSimilarJobs(job, jobsData);

  return (
    <div className="similar-jobs">
      <h3>Similar Jobs</h3>
      <div className="job-list">
        {similarJobs.map((job, index) => (
          <div className="job-card" key={index}>
            <h4 className="job-title">{job.title}</h4>
            <p className="job-company">{job.company}</p>
            <div className="job-tags">
              {job.tags.map((tag, tagIndex) => (
                <span className="job-tag" key={tagIndex}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilatJobs;
