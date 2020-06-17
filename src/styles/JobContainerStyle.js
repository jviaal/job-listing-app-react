import { motion } from "framer-motion";
import styled from "styled-components";

export const JobContainerStyle = styled(motion.div)`
  padding: 1rem;
  background-color: #fff;
  font-weight: 500;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  position: relative;
  .job-logo {
    width: 55px;
    height: 55px;
    position: absolute;
    top: -2rem;
    img {
      width: 100%;
    }
  }
  .job-main-details {
    .job-headline {
      color: #62a3a4;
      display: flex;
      align-content: center;
      margin: 1.1rem 0 0.8rem 0;
      & > div,
      h1 {
        margin-right: 0.5rem;
        display: flex;
        align-items: center;
      }
      .company {
        font-weight: 700;
        font-size: 0.9rem;
      }
      .new,
      .featured {
        padding: 0.5rem 0.8rem 0.2rem 0.8rem;
        border-radius: 50px;
        color: #fff;
        font-size: 0.7rem;
      }
      .new {
        background-color: #62a3a4;
      }
      .featured {
        background-color: hsl(180, 14%, 20%);
      }
    }
    .job-position {
      font-size: 1.1rem;
      font-weight: 700;
      color: hsl(180, 14%, 20%);
      margin-bottom: 0.8rem;
      cursor: pointer;
      :hover {
        color: #62a3a4;
      }
    }
    .job-extra-details {
      display: flex;
      color: hsl(180, 8%, 52%);
      margin-bottom: 1rem;
      font-size: 0.9rem;
      & > div {
        margin-right: 0.5rem;
      }
    }
  }
  .job-skills {
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
    font-size: 0.8rem;
    & > div {
      margin: 0 1rem 1rem 0;
      padding: 0.5rem;
      color: #62a3a4;
      background-color: hsl(180, 31%, 95%);
      border-radius: 5px;
      font-weight: 700;
      transition: background, color 0.8s ease-out;
      cursor: pointer;
      :hover {
        background-color: #62a3a4;
        color: hsl(180, 31%, 95%);
      }
    }
  }
  @media (min-width: 550px) {
    width: 80%;
  }
  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    & > div {
      /* margin-right: 1rem; */
    }
    .job-logo {
      position: static;
      width: 80px;
      height: 80px;
      margin: 0 1.5rem 0 1rem;
    }
    .job-main-details {
      margin-right: 2rem;
    }
    .job-skills {
      margin-left: auto;
    }
    .hr-line {
      display: none;
    }
  }
  @media (min-width: 1250px) {
    .job-skills {
      font-size: 0.9rem;
      & > div {
        margin: 0 1rem 0 0;
      }
    }
  }
`;
