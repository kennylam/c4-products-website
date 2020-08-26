// These are the reusable motion variants from framer motion
export const svgCardVariants = {
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * .06
    }
  }),
  hidden: { 
    opacity: 0,
    y: 25
  }
};

export const searchVariants = {
  hidden: {
    opacity: 0,
    width: '0'
  },
  visible: {
    opacity: 1,
    width: '100%',
    transition: {
      delay: .1
    }
  },
}

export const pictogramVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.05
    }
  }
};