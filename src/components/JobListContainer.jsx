import React from "react";

import { JobListContainerStyle } from "../styles/JobListContainerStyle";
import JobContainer from "./JobContainer";
import { jobListContainer } from "../styles/Variants";

import FilterContainer from "./FilterContainer";
import { AnimatePresence } from "framer-motion";

function JobListContainer({ companyDetails, setFilterBy, filterBy }) {
  return (
    <JobListContainerStyle
      variants={jobListContainer}
      animate="show"
      initial="hide"
    >
      <AnimatePresence>
        {filterBy.data === undefined || filterBy.data.length === 0 ? (
          false
        ) : (
          <FilterContainer filterBy={filterBy} setFilterBy={setFilterBy} />
        )}
      </AnimatePresence>
      {companyDetails && (
        <JobContainer
          companyDetails={companyDetails}
          filterBy={filterBy}
          setFilterBy={setFilterBy}
        />
      )}
    </JobListContainerStyle>
  );
}

export default JobListContainer;
