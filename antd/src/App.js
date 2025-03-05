import React from "react";
import './App.css';
import Antd1 from "./components/Antd1";
import Antd2 from "./components/Antd2";
import Antd3 from "./components/Antd3";


function App() {
  return (
    <div class="container">
      <h3>🧠 기본 Modal 구현</h3>
      <Antd1 />
      <h3>🧠 Modal 내부에 Form 사용하기</h3>
      <Antd2 />
      <h3>🧠 Modal 내부에 Form 사용하기</h3>
      <Antd3 />
    </div>
  );
}

export default App;
