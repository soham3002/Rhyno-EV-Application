import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const AnimatedSection = styled(motion.div)`
  margin: 40px 0;
`;

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const ScrollAnimation = ({ children }) => {
  return (
    <AnimatedSection
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </AnimatedSection>
  );
};

export default ScrollAnimation;
