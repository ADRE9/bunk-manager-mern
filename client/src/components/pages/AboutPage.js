import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = (props) => {

  const containerVariants = {
    hidden: {
      opacity: 0,
      x:100
    },
    visible: {
      opacity: 1,
      x:0,
      transition: {
        delay:0.5,
        duration:0.5
      }
    },
    exit: {
      x: "-100vw",
      transition:{ease:"easeInOut"}
    }
  }
    
  return (
    <motion.div variants={containerVariants}
    initial="hidden"
    animate="visible"
    exit="exit">
      About Page
    </motion.div>
  )
}

export default AboutPage
