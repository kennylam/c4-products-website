import React from "react";
import {
  DataTable,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  Row,
} from "carbon-components-react";
import DownloadAssetCard from "../DownloadAssetCard";
import emptyStateBrightImages from "../shared/data/pages/empty-state/master-files/bright-theme/images";
import {
  useJSONQuery,
  useBrightImageQuery,
} from "../shared/utils/hooks/empty-state/bright-theme";

import {
  resourceCardContainer,
  emptyStateTypeContainer,
  emptyStateTitle,
  tableHeader
} from "./EmptyStateType.module.scss";

const EmptyStateTypes = () => {
  const { allEmptyStateResourcesJson, site } = useJSONQuery();
  const { files } = useBrightImageQuery();

  return (
    <>
      {allEmptyStateResourcesJson.edges.map(({ node }) => {
        const findImage = emptyStateBrightImages.find(
          (image) => image.title === node.title
        );

        const headers = [
          {
            key: "section",
            header: "Section",
          },
          {
            key: "text",
            header: "Text or Guidance",
          },
        ];

        return (
          <div className={emptyStateTypeContainer} key={node.id}>
            <h3 className={emptyStateTitle}>{node.title}</h3>
            <p>{node.details}</p>
            <Row className={`resource-card-group ${resourceCardContainer}`}>
              {node.sources && (
                <DownloadAssetCard
                  alt={node.alt}
                  image={findImage.images.bright}
                  files={files}
                  iconSize="large"
                  source={node.sources.bright}
                  site={site}
                  title={node.title}
                />
              )}
              {node.sources && (
                <DownloadAssetCard
                  color="dark"
                  alt={node.alt}
                  image={findImage.images.dark}
                  files={files}
                  iconSize="large"
                  source={node.sources.dark}
                  site={site}
                  title={node.title}
                />
              )}
            </Row>
            {node.tableData && (
              <DataTable rows={node.tableData} headers={headers}>
                {({
                  rows,
                  headers,
                  getTableProps,
                  getHeaderProps,
                  getRowProps,
                }) => (
                  <Table {...getTableProps()}>
                    <TableHead>
                      <TableRow>
                        {headers.map((header) => (
                          <TableHeader
                            {...getHeaderProps({ header })}
                            className={tableHeader}
                          >
                            {header.header}
                          </TableHeader>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow {...getRowProps({ row })}>
                          {row.cells.map((cell) => (
                            <TableCell key={cell.id}>{cell.value}</TableCell>
                          ))}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </DataTable>
            )}
          </div>
        );
      })}
    </>
  );
};

export default EmptyStateTypes;
