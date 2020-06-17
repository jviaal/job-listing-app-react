import { motion } from "framer-motion";
import styled from "styled-components";

export const JobListContainerStyle = styled(motion.main)`
  padding: 2rem 1.5rem 1.5rem 1.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
  & > div {
    margin: 1.5rem 0 1rem 0;
  }
  /* &:first-child {
    margin: 2.5rem 0 1rem 0 !important;
  }
  .filter-container + div {
    margin: 2.5rem 0 1rem 0;
  } */
  .highlight {
    border-left: 5px solid #62a3a4;
  }
  /* background-color: blue; */
`;
