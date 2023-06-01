import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const DataGridWrapper = ({ rows, columns, processRowUpdate }) => {
  return (
    <div>
      <DataGrid
        rows={rows}
        columns={columns}
        processRowUpdate={processRowUpdate}
        sx={{ background: "#fff" }}
        showCellVerticalBorder={true}
        showColumnVerticalBorder={true}
        rowHeight={50}
      />
    </div>
  );
};

export default DataGridWrapper;
