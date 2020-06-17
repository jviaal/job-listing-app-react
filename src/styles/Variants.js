export const jobListContainer = {
  show: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
  hide: {
    opacity: 0,
  },
};

export const filterContainer = {
  show: {
    scale: 1,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  hide: {
    scale: 0,
    y: 50,
    opacity: 0,
  },
};

export const jobContainer = {
  show: {
    y: 0,
    opacity: 1,
  },
  hide: {
    y: 50,
    opacity: 0,
  },
  hover: {
    scale: 1.025,
  },
};

export const delayHalfSecond = {
  show: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
  hide: {
    opacity: 0,
  },
};

export const scale = {
  show: {
    scale: 1,
    transition: {},
  },
  hide: {
    scale: 0,
  },
};
