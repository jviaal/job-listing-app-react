import { motion } from "framer-motion";
import styled from "styled-components";

export const FilterContainerStyle = styled(motion.div)`
  position: absolute;
  padding: 1rem;
  top: -125px;
  width: 100%;
  z-index: 2;
  & > div {
    display: flex;
    flex-wrap: wrap;
    background-color: #fff;
    padding: 1rem;
    border-radius: 5px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    width: 100%;
    & > .filter-btn-container {
      display: flex;
      flex-wrap: wrap;
      margin: 0.5rem;
      background-color: hsl(180, 31%, 95%);
      border-radius: 5px;
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
      & > div {
        font-size: 0.9rem;
        font-weight: 700;
        padding: 0.75rem 0.5rem 0.5rem 0.5rem;
      }
      .close-btn {
        color: #fff;
        background-color: hsl(181, 27%, 51%);
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        cursor: pointer;
        transition: 0.3s background-color;
        :hover {
          background-color: hsl(180, 14%, 20%);
        }
      }
    }
    .filter-clear-container {
      width: 20%;
      margin-left: auto;
      display: flex;
      align-items: center;
      div {
        color: hsl(180, 8%, 52%);
        padding: 0.5rem;
        width: 100%;
        outline: none;
        border: none;
        text-align: right;
        span {
          cursor: pointer;
          font-weight: 700;
          font-size: 0.9rem;
          :hover {
            color: hsl(181, 27%, 51%);
            text-decoration: underline;
          }
        }
      }
    }
  }
  @media (min-width: 550px) {
    width: 80%;
    top: -100px;
    & > div {
      .filter-clear-container {
        width: 20%;
        margin-left: auto;
        display: flex;
        align-items: center;
        div {
          width: 100%;
          text-align: right;
        }
      }
    }
  }
`;
