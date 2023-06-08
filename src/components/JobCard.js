import { useNavigate } from "react-router";

export const JobCard = ({ job }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`jobs/${job?.id}`);
      }}
      className="job-card"
    >
      <h2>{job.title}</h2>
      <p className="job-description">{job.description}</p>
      <div className="job-info">
        <div className="job-tags">
          {job.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <div>
          <p>
            <strong>Stipend:</strong> {job.stipend}
          </p>
          <p>
            <strong>Duration:</strong> {job.duration}
          </p>
        </div>
      </div>
    </div>
  );
};
