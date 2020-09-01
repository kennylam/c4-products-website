import React from "react";
import styles from "./OneColTable.module.scss";

const OneColTable = (props) => {
  return (
    <table className={styles.table}>
      <tr>
        <th className={styles.cell}>
          <span className={styles.cellheader}>{props.header}</span>
        </th>
      </tr>
      <tr>
        <td className={styles.cell}>{props.row1}</td>
      </tr>
      <tr>
        <td className={styles.cell}>{props.row2}</td>
      </tr>
    </table>
  );
};

export default OneColTable;
