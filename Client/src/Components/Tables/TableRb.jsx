import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Box,
  TableContainer,
  Paper,
  Typography,
} from "@mui/material";

const TableRb = ({ tableHeaders, tableBodyData,TableDataRow,onDelete,onUpdate }) => {
  const tableStyle = {
    TableHeadRow: {
      backgroundColor: "#F3F5F9",
      display: "table-header-group",
    },
    TableCellHead: {
      fontSize: "14px",
      fontWeight: 600,
      padding: "16px 20px",
      color: "rgb(43, 52, 69)",
    },
    tableHeadSpan: {
      color: "#2B3445",
    },
  };
  const TableHeadSpan = ({ Text }) => {
    return (
      <Typography component={"span"} variant={"para"}>
        {Text}
      </Typography>
    );
  };

 
   return (
    <Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead sx={tableStyle.TableHeadRow}>
            <TableRow>
              {tableHeaders?.map((tableData) => {
                return (
                  <TableCell
                    key={tableData}
                    sx={tableStyle.TableCellHead}
                    align="left"
                  >
                    <TableHeadSpan Text={tableData} />
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
              { tableBodyData && tableBodyData?.map((data) => {
                return <TableDataRow onDelete={onDelete} onUpdate={onUpdate} key={data.id} data={data}/>
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TableRb;
