import React from 'react'
import AgGrid1 from './component/AgGrid1';
import AgGrid2 from './component/AgGrid2';

function App() {
  return (
    <>
    <h3>🗓 AgGrid - 테이블 데이터 화면</h3>
      <AgGrid1 />
    <h3>🗓 AgGrid - 편집 가능한 셀</h3>
      <AgGrid2 />
    </>
  )

}
export default App;
