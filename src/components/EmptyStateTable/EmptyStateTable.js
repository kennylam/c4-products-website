import React from "react";
import {
  cell,
  cellImage,
  cellSubText,
  cellCta,
} from "./EmptyStateTable.module.scss";

const EmptyStateTable = ({ image, alt, headingText, subText, buttonsText }) => {
  return (
    <table>
      <tr>
        <td className={cell}>Image</td>
        <td className={cell}>
          <img
            className={cellImage}
            src={require(`../../pages/patterns/empty-state/images${image}`)}
            alt={alt}
          />
        </td>
        <td className={cell}></td>
      </tr>
      <tr>
        <td className={cell}>Heading</td>
        <td className={cell}>
          <span>{headingText}</span>
        </td>
        <td className={cell}></td>
      </tr>
      <tr>
        <td className={cell}>Sub-text</td>
        <td className={cell}>
          <span className={cellSubText}>{subText}</span>
        </td>
        <td className={cell}></td>
      </tr>
      <tr>
        <td className={cell}>CTA buttons</td>
        <td className={cell}>
          <span className={cellCta}>{buttonsText}</span>
        </td>
        <td className={cell}></td>
      </tr>
    </table>
  );
};

export default EmptyStateTable;
