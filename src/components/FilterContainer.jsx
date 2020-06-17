import React from "react";
// STYLES
import { FilterContainerStyle } from "../styles/FilterContainerStyle";
import { filterContainer } from "../styles/Variants";

import { motion, AnimatePresence } from "framer-motion";

function FilterContainer({ filterBy, setFilterBy }) {
  // Removing Filter Value
  const removeFilter = (e) => {
    const filterValue = e.target.parentElement.firstChild.innerText;
    const temp = filterBy.data;
    const filterValueIndex = filterBy.data.indexOf(filterValue);
    temp.splice(filterValueIndex, 1);
    setFilterBy({ ...filterBy, data: temp });
  };
  return (
    <FilterContainerStyle
      variants={filterContainer}
      animate="show"
      initial="hide"
      exit="hide"
      className="filter-container"
    >
      <div>
        <AnimatePresence>
          {filterBy.data.map((data) => (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="filter-btn-container"
              key={data}
            >
              <div>{data}</div>
              <div className="close-btn" onClick={(e) => removeFilter(e)}>
                X
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        <div className="filter-clear-container">
          <div>
            <span onClick={() => setFilterBy([])}>Clear</span>
          </div>
        </div>
      </div>
    </FilterContainerStyle>
  );
}

export default FilterContainer;
