/* 기본 모달 구현 예시 */
import React from "react";
import { useState } from "react";
import { Button, Modal } from "antd";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  }
  const handleOk = () => {
    console.log('확인 버튼 클릭!');
    setIsModalOpen(false);
  } 
  const handleCancel = () => {
    console.log('취소 버튼 클릭!');
    setIsModalOpen(false);
  }
  
  return (
    <div>
      <Button type="primary" onClick={showModal}>
        모달열기
      </Button>
      <Modal title="안녕하세요!😄" open={isModalOpen}
      onOk={handleOk} onCancel={handleCancel}
      onText="확인" cancelText="취소">
        <p>이곳에 중요한 내용이나 액션을 넣을 수 있습니다.</p>
      </Modal>
    </div>
  );
}

export default App;
