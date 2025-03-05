/* 기본 모달 구현 예시 */
// - 모달 열기: showModal 함수를 통해 isModalOpen을 true로 설정
// - 모달 닫기: handleOk 및 handleCancel 함수를 통해 isModalOpen을 false로 설정합니다. okText, cancelText 속성을 통해 버튼 텍스트를 맞춤 설정
// - open : (또는 이전 버전에서는 visible) 속성은 모달의 표시 여부를 제어

import React, { useState } from 'react'
import {Button, Modal} from 'antd';


function Antd1() {
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

export default Antd1