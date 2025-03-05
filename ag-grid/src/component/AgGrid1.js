import React from 'react'
import { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

function AgGrid1() {
    const [rowData] = useState([
        { name:'John Doe', age: 25 , city: 'NewYork'},
        { name:'Jane Smith', age: 30 , city: 'London'},
        { name:'Kevin Brown', age: 22 , city: 'Paris' }
      ]);
      const [columnDefs] = useState([
        { headerName: 'Name', field: 'name', sortable:true, filter: true },
        { headerName: 'Age', field: 'age', sortable:true, filter: 'agNumberColumnFilter' },
        { headerName: 'City', field: 'city', sortable:true, filter: true }
      ]);
      return (
        <div className='ag-theme-alpine' style={{height:400, width:600}}>
          <AgGridReact rowData={rowData} columnDefs={columnDefs}
          pagination={true} // ✅ 페이지네이션 활성화
          paginationPageSize={2} // ✅ 한 페이지에 2개씩 표시
          paginationPageSizeSelector={[2, 20, 50, 100]} // ✅ 선택 가능한 페이지 크기 목록
          />
    
        </div>
      );
}

export default AgGrid1