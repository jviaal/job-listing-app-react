import { motion } from "framer-motion";
import styled from "styled-components";

export const HeaderStyle = styled(motion.div)`
  display: block;
  width: 100%;
  height: 156px;
  background-color: hsl(180, 29%, 50%);
  img {
    width: 100%;
    height: 156px;
  }
  .bg-desktop {
    display: none;
    /* height: 156px; */
  }
  @media (min-width: 550px) {
    .bg-mobile {
      display: none;
    }
    .bg-desktop {
      display: block;
    }
  }
  /* @media (min-width: 376px) {
    [class="svgMobile"] {
      display: none;
    }
  }
  @media (min-width: 376px) {
    [class="svgDesktop"] {
      display: block;
    }
  } */
`;
