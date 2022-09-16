import React from "react";
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
    TableToolbarContent, 
    TableToolbarSearch
} from 'carbon-components-react';
import { CSVLink } from "react-csv";
import { Download16 } from '@carbon/icons-react';
import { businessUnits } from "../../Visualization/TooltipChart/animation-data"
import { tableDownload, tableDownloadIcon } from "./PatternAdoptionModal.module.scss";

const PatternAdoptionTable = (title) => {
    const headers = [
        {
            key: 'businessUnit',
            header: 'Business Unit',
        },
        {
            key: 'productName',
            header: 'Product Name'
        },
        { 
            key: 'numberOfComponents',
            header: 'Number of Components',
        },
    ];

    const rows = React.useMemo(() => [], []);
    Object.keys(businessUnits).map(function(unit) {
        Object.keys(businessUnits[unit]["products"]).map(function(product) {
            rows.push(
                {
                    id: product,
                    businessUnit : unit,
                    productName : businessUnits[unit]["products"][product].productName,
                    numberOfComponents : businessUnits[unit]["products"][product].numberOfComponents
                }
            );
            return null
        }) 
        return null
    });

    const csv_headers = ['ID', 'Business Unit', 'Product Name', 'Number of Components'];
    const csv_data = React.useMemo(() => {
        return rows.map((d) => Object.values(d));
    }, [rows]);
    const tableAriaLabel = `Download ${Object.values(title)[0]} Table`;

    return (
        <DataTable rows={rows} headers={headers} isSortable>
            {({ rows, headers, getTableProps, getHeaderProps, getRowProps, onInputChange }) => (
                <TableContainer >
                    <TableToolbar>
                        <TableToolbarContent>
                            <TableToolbarSearch onChange={onInputChange} />
                            <CSVLink 
                                data={csv_data} 
                                headers={csv_headers}
                                filename={Object.values(title)[0].replace(/ /g,"_")}
                                target="_blank"
                                className={tableDownload}
                                aria-label={tableAriaLabel}>
                                <Download16 className={tableDownloadIcon} aria-hidden="true"/>
                            </CSVLink>
                        </TableToolbarContent>
                    </TableToolbar>
                    <Table {...getTableProps()}>
                        <TableHead>
                            <TableRow>
                                {headers.map((header) => (
                                    <TableHeader {...getHeaderProps({ header })}>
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
                </TableContainer>
            )}
        </DataTable>
    );  
}

export default PatternAdoptionTable;