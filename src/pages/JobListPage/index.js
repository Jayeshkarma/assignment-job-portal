import React, { useState } from "react";
import FilterOptions from "../../components/FilterOptions";
import { JobCard } from "../../components/JobCard";
import SearchBar from "../../components/SearchBar";
import { jobsData } from "../../data/jobsData";

//main function
const JobList = () => {
  //defined states
  const [searchQuery, setSearchQuery] = useState("");
  const [filterOption, setFilterOption] = useState("");

  //search filter function
  const filteredJobs = jobsData.filter((job) => {
    // Apply search query filter
    if (
      searchQuery !== "" &&
      !job.title.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }

    return true;
  });

  //sort filter function
  const sortedJobs = filteredJobs.sort((a, b) => {
    // Apply filter option sorting
    if (filterOption === "asc") {
      return new Date(a.postedDate) - new Date(b.postedDate);
    } else if (filterOption === "desc") {
      return new Date(b.postedDate) - new Date(a.postedDate);
    }

    return 0;
  });

  //updating query
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  //updating filter
  const handleFilterChange = (option) => {
    setFilterOption(option);
  };

  return (
    <div className="job-list">
      <h1>Job Portal</h1>
      {/* search component */}
      <SearchBar onSearch={handleSearch} />
      {/* Sorting component */}
      <FilterOptions onFilterChange={handleFilterChange} />
      {/* rendering jobs data with map function */}
      <div className="jobs">
        {sortedJobs?.length > 0 ? (
          sortedJobs.map((job) => <JobCard job={job} key={job.id} />)
        ) : (
          <div className="job-card">
            {searchQuery ? "NO result found" : "Loading"}
          </div>
        )}
      </div>
    </div>
  );
};

export default JobList;
