import React from "react";

const EmptyStateTable = (props) => {
  return (
    <table>
      <tr>
        <td>Image</td>
        <td>{props.image}</td>
        <td>Empty</td>
      </tr>
      <tr>
        <td>Heading</td>
        <td>{props.headingText}</td>
        <td></td>
      </tr>
      <tr>
        <td>Sub-text</td>
        <td>{props.subText}</td>
        <td></td>
      </tr>
      <tr>
        <td>CTA buttons</td>
        <td>{props.buttonsText}</td>
        <td></td>
      </tr>
    </table>
  );
};

export default EmptyStateTable;
