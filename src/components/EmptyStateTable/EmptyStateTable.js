import React from "react";
import styles from "./EmptyStateTable.module.scss";

const EmptyStateTable = (props) => {
  return (
    <table>
      <tr>
        <td className={styles.cell}>Image</td>
        <td className={styles.cell}>
          <img
            className={styles.cellimage}
            src={require(`../../pages/patterns/empty-state/images${props.image}`)}
            alt={props.alt}
          />
        </td>
        <td className={styles.cell}></td>
      </tr>
      <tr>
        <td className={styles.cell}>Heading</td>
        <td className={styles.cell}>
          <span className={styles.cellheading}>{props.headingText}</span>
        </td>
        <td className={styles.cell}></td>
      </tr>
      <tr>
        <td className={styles.cell}>Sub-text</td>
        <td className={styles.cell}>
          <span className={styles.cellsubtext}>{props.subText}</span>
        </td>
        <td className={styles.cell}></td>
      </tr>
      <tr>
        <td className={styles.cell}>CTA buttons</td>
        <td className={styles.cell}>
          <span className={styles.cellCTA}>{props.buttonsText}</span>
        </td>
        <td className={styles.cell}></td>
      </tr>
    </table>
  );
};

export default EmptyStateTable;
