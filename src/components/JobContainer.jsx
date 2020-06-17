import React from "react";
import { JobContainerStyle } from "../styles/JobContainerStyle";

import Languages from "./Languages";
import Tools from "./Tools";

import { jobContainer, scale, delayHalfSecond } from "../styles/Variants";
import { motion } from "framer-motion";

function JobContainer({ companyDetails, setFilterBy, filterBy }) {
  // Adding Filter Value on State
  const addFilterValue = (e) => {
    const filterData = e.target.innerText;
    let temp = [];
    if (filterBy.data === undefined) {
      temp.push(filterData);
      setFilterBy({ ...filterBy, data: temp });
    } else {
      if (filterBy.data.includes(filterData)) {
      } else {
        filterBy.data.map((data) => temp.push(data));
        temp.push(filterData);
        setFilterBy({ ...filterBy, data: temp });
      }
    }
  };
  return (
    <>
      {companyDetails.map((companyDetail) => (
        <JobContainerStyle
          variants={jobContainer}
          whileHover="hover"
          key={companyDetail.id}
          className={
            companyDetail.new === true && companyDetail.featured === true
              ? "highlight"
              : ""
          }
          transformTemplate={(props, transform) =>
            transform.replace(" translateZ(0)", "")
          }
          exit="hide"
        >
          <div className="job-logo">
            <img
              src={`../images${companyDetail.logo}`}
              alt={`${companyDetail.company}-Logo`}
            />
          </div>
          <div className="job-main-details">
            <motion.div variants={delayHalfSecond} className="job-headline">
              <h1 className="company">{companyDetail.company}</h1>
              {companyDetail.new && (
                <motion.div variants={scale} className="new">
                  NEW!
                </motion.div>
              )}
              {companyDetail.featured && (
                <motion.div variants={scale} className="featured">
                  FEATURED
                </motion.div>
              )}
            </motion.div>
            <div className="job-position">{companyDetail.position}</div>
            <div className="job-extra-details">
              <div className="post-time">{companyDetail.postedAt} </div>
              <div className="wort-type"> • {companyDetail.contract}</div>
              <div className="location"> • {companyDetail.location}</div>
            </div>
          </div>
          <hr className="hr-line" />
          <div className="job-skills">
            <div onClick={(e) => addFilterValue(e)} className="role">
              {companyDetail.role}
            </div>
            <div onClick={(e) => addFilterValue(e)} className="level">
              {companyDetail.level}
            </div>
            <Languages
              addFilterValue={addFilterValue}
              languages={companyDetail.languages}
            />
            <Tools
              addFilterValue={addFilterValue}
              tools={companyDetail.tools}
            />
          </div>
        </JobContainerStyle>
      ))}
    </>
  );
}

export default JobContainer;
