export const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transiton: { duration: 0.8 }
  }
};

/* <motion.div 
  variants={fadeIn}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
> */