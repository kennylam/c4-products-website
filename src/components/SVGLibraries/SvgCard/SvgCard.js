import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ActionBar from '../ActionBar';
import { svgCardVariants } from '../shared/variants';

import { 
  svgCard, 
  svgCardInside, 
  svgImage, 
  triggerText, 
  flexContainer 
} from '../Pictogram/Pictogram.module.scss';

const SvgCard = ({title, image, containerIsVisible, index: i, alt, siteMetadata}) => {
  const [isActionBarVisible, setIsActionBarVisible] = useState(false);
  return (
    <motion.li
      custom={i}  
      animate="visible" 
      variants={svgCardVariants}
      onMouseEnter={() => setIsActionBarVisible(true)}
      onMouseLeave={() => setIsActionBarVisible(false)}
      className={svgCard}>
      <motion.div 
        className={svgCardInside} 
        >
        <span className={triggerText}>{title}</span>
        <div className={flexContainer}>
          <img className={svgImage} src={image} alt={alt} />
        </div>
        {
          containerIsVisible && 
          <ActionBar
            title={title}
            source={image}
            isActionBarVisible={isActionBarVisible}
            setIsActionBarVisible={setIsActionBarVisible}
          />
        }
      </motion.div>
    </motion.li>
  )
}

export default SvgCard;


