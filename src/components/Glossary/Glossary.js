import React, { useEffect, useState } from "react";
import {
  DataTable,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  TableContainer,
  TableToolbar,
  TableToolbarSearch,
  Tag
} from "carbon-components-react";
import { useJSONQuery } from "../SVGLibraries/shared/utils/hooks/content/glossary/useJSONQuery";
import { glossaryRow, tagContainer } from "./Glossary.module.scss";

const Glossary = () => {
  const { allGlossaryJson } = useJSONQuery();
  const [terms, setTerms] = useState([]);
  const [viewableItems, setViewableItems] = useState([]);
  const [tagToFilterBy, setTagToFilterBy] = useState("");

  const headers = [
    {
      key: "title",
      header: "Term"
    },
    {
      key: "source",
      header: "Source"
    },
    {
      key: "definition",
      header: "Definition"
    },
    {
      key: "usage",
      header: "Usage guidance"
    },
    {
      key: "compare",
      header: "Related terms"
    },

    {
      key: "used_by",
      header: "Used by"
    },

    {
      key: "last_updated",
      header: "Last updated"
    }
  ];

  const usedByTags = {
    "(Global)": {
      color: "cool-gray"
    },
    "AI Apps": {
      color: "red"
    },
    "Automation": {
      color: "teal"
    },
    "Cloud Paks": {
      color: "green"
    },
    "Data and AI": {
      color: "purple"
    },
    "IBM Cloud": {
      color: "blue"
    },
    "Red Hat": {
      color: "magenta"
    },
    "Security": {
      color: "cyan"
    }
  };

  const filterByTag = (e) => {
    const filtered = terms.filter((row) => row.used_by.includes(e.target.title));
    setViewableItems(filtered);
  };

  const sortTerms = (a, b) => {
    return a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1;
  };

  useEffect(() => {
    allGlossaryJson && setTerms(allGlossaryJson.edges[0].node.terms);
    setViewableItems(allGlossaryJson.edges[0].node.terms.sort(sortTerms));
  }, [terms, allGlossaryJson]);

  return (
    <DataTable
      rows={viewableItems}
      headers={headers}
      isSortable
      render={({ rows, headers, getTableProps, getHeaderProps, getRowProps, onInputChange }) => (
        <TableContainer title="">
          <TableToolbar aria-label="data table toolbar">
            <TableToolbarSearch persistent placeholder="Search" onChange={onInputChange} />
          </TableToolbar>
          <div className={tagContainer}>
            {Object.keys(usedByTags)
              .sort()
              .map((tag, i) => (
                <Tag
                  size="sm"
                  type={usedByTags[tag].color}
                  key={i}
                  filter={tag === tagToFilterBy}
                  onClick={(e) => {
                    setTagToFilterBy(e.target.title);
                    filterByTag(e);
                  }}
                  onClose={(e) => {
                    setTagToFilterBy("");
                    setViewableItems(terms);
                  }}
                >
                  {tag}
                </Tag>
              ))}
          </div>
          <Table {...getTableProps()}>
            <TableHead>
              <TableRow>
                {headers.map((header, headerIndex) => (
                  <TableHeader
                    key={headerIndex}
                    style={{ minWidth: header.header === "Used by" && "7rem" }}
                    {...getHeaderProps({ header })}
                  >
                    {header.header}
                  </TableHeader>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, rowIndex) => (
                <TableRow key={rowIndex} {...getRowProps({ row })} className={glossaryRow}>
                  {row.cells.map((cell, cellIndex) =>
                    cell.id.includes("compare") ? (
                      <TableCell key={cellIndex}>
                        {cell.value.length !== 0 && (
                          <ul>
                            {cell.value.map((value, valueIndex) => {
                              return (
                                <li key={valueIndex}>
                                  <em>{value}</em>
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </TableCell>
                    ) : cell.id.includes("used_by") ? (
                      <TableCell key={cell.id}>
                        {cell.value &&
                          cell.value.length > 0 &&
                          cell.value.map((value, valueIndex) => {
                            return (
                              <Tag key={valueIndex} type={usedByTags[value] && usedByTags[value].color}>
                                {value}
                              </Tag>
                            );
                          })}
                      </TableCell>
                    ) : cell.id.includes("title") ? (
                      <TableCell key={cell.id}>
                        <strong>{cell.value}</strong>
                      </TableCell>
                    ) : cell.id.includes("last_updated") ? (
                      <TableCell key={cell.id}>{cell.value && new Date(cell.value).toLocaleDateString()}</TableCell>
                    ) : (
                      <TableCell key={cell.id}>{cell.value}</TableCell>
                    )
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    />
  );
};

export default Glossary;
