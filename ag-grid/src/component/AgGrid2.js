import React, { useState } from 'react'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

function AgGrid2() {
  const [rowData] = useState([
    { name: 'John Doe', age: 25, city: 'NewYork' },
    { name: 'Jane Smith', age: 30, city: 'London' },
    { name: 'Kevin Brown', age: 22, city: 'Paris' }
  ]);
  const [columnDefs] = useState([
    { headerName: 'Name', field: 'name', filter: true, editable: true },
    { headerName: 'Age', field: 'age', filter: 'agNumberColumnFilter', editable: true },
    { headerName: 'City', field: 'city', filter: true, editable: true }
  ]);

  const onCellValueChanged = (params) => {
    console.log('Cell value Changed', params.data);
  };
  return (
    <div className='ag-theme-alpine' style={{ height: 400, width: 600 }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        onCellValueChanged={onCellValueChanged} />
    </div>
  )
}

export default AgGrid2