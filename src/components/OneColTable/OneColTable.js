import React from "react";
import { table, cell, cellHeader } from "./OneColTable.module.scss";

const OneColTable = ({ header, row1, row2 }) => {
  return (
    <table className={table}>
      <tr>
        <th className={cell}>
          <span className={cellHeader}>{header}</span>
        </th>
      </tr>
      <tr>
        <td className={cell}>{row1}</td>
      </tr>
      <tr>
        <td className={cell}>{row2}</td>
      </tr>
    </table>
  );
};

export default OneColTable;
