import React, { useState, useEffect } from "react";

const Search = () => {
  const [jobRoles, setJobRoles] = useState([]);
  const [jobTypes, setJobTypes] = useState([]);
  const [locations, setLocations] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          "https://www.arbeitnow.com/api/job-board-api"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        // Extract unique Job Roles (using job title for simplicity - can be refined)
        const rolesSet = new Set(data.data.map((job) => job.title));
        setJobRoles(Array.from(rolesSet));

        // Extract unique Job Types
        const typesSet = new Set(data.data.map((job) => job.job_type));
        setJobTypes(Array.from(typesSet));

        // Extract unique Locations
        const locationsSet = new Set(data.data.map((job) => job.location));
        setLocations(Array.from(locationsSet));

        // Basic Experience extraction -  (This is a simplification, refine based on API data if available)
        const experienceLevels = [
          "Fresher",
          "Junior Level",
          "Mid Level",
          "Senior Level",
        ];
        setExperiences(experienceLevels); // Using predefined experience levels as API doesn't directly provide them
      } catch (e) {
        setError(e);
        console.error("Could not fetch data", e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="flex justify-center">Loading options...</div>; // Simple loading state
  }

  if (error) {
    return (
      <div className="flex justify-center text-red-500">
        Error: Could not load options.
      </div>
    ); // Simple error state
  }

  return (
    <div className="flex gap-4 my-10 justify-center px-10">
      {/* Job Role Select */}
      <select
        defaultValue=""
        className="w-64 py-3 pl-4 bg-zinc-300 font-semibold rounded-md"
      >
        <option value="" disabled hidden>
          Job Role
        </option>
        {jobRoles.map((role) => (
          <option key={role} value={role}>
            {role}
          </option>
        ))}
      </select>

      {/* Job Type Select */}
      <select
        defaultValue=""
        className="w-64 py-3 pl-4 bg-zinc-300 font-semibold rounded-md"
      >
        <option value="" disabled hidden>
          Job Type
        </option>
        {jobTypes.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>

      {/* Location Select */}
      <select
        defaultValue=""
        className="w-64 py-3 pl-4 bg-zinc-300 font-semibold rounded-md"
      >
        <option value="" disabled hidden>
          Location
        </option>
        {locations.map((location) => (
          <option key={location} value={location}>
            {location}
          </option>
        ))}
      </select>

      {/* Experience Select */}
      <select
        defaultValue=""
        className="w-64 py-3 pl-4 bg-zinc-300 font-semibold rounded-md"
      >
        <option value="" disabled hidden>
          Experience
        </option>
        {experiences.map((experience) => (
          <option key={experience} value={experience}>
            {experience}
          </option>
        ))}
      </select>

      <button className="w-64 bg-blue-600 text-white font-bold py-3 rounded-md">
        Search
      </button>
    </div>
  );
};

export default Search;
