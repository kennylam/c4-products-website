import React, { useState } from "react";
import { motion } from "framer-motion";
import ActionBar from "../ActionBar";
import { svgCardVariants } from "../shared/variants";

import {
  svgCard,
  svgCardDark,
  svgCardInside,
  svgImage,
  triggerText,
  triggerTextDark,
  flexContainer,
} from "../Pictogram/Pictogram.module.scss";

const SvgCard = ({
  title,
  image,
  containerIsVisible,
  index: i,
  alt,
  siteMetadata,
  theme,
}) => {
  const [isActionBarVisible, setIsActionBarVisible] = useState(false);
  return (
    <motion.li
      custom={i}
      animate="visible"
      variants={svgCardVariants}
      onMouseEnter={() => setIsActionBarVisible(true)}
      onMouseLeave={() => setIsActionBarVisible(false)}
      className={theme === "dark" ? `${svgCard} ${svgCardDark}` : svgCard}
    >
      <motion.div className={svgCardInside}>
        <span
          className={
            theme === "dark" ? `${triggerText} ${triggerTextDark}` : triggerText
          }
        >
          {title}
        </span>
        <div className={flexContainer}>
          <img
            className={svgImage}
            src={image}
            alt={alt}
            data-testid={`${theme}-img-test`}
          />
        </div>
        {containerIsVisible && (
          <ActionBar
            title={title}
            source={image}
            isActionBarVisible={isActionBarVisible}
            setIsActionBarVisible={setIsActionBarVisible}
            theme={theme}
          />
        )}
      </motion.div>
    </motion.li>
  );
};

export default SvgCard;
