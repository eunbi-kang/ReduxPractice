/* 🔥 다양한 모달 사용방법 */
//  - 기본 모달은 Modal 컴포넌트를 사용하여 구현가능
//  - 폼과의 결합을 통해 입력값을 받아 처리가능
//  - 간편 모달 (Modal.info, Modal.confirm 등)을 사용하면 메시지 모달을 빠르게 띄울 수 있음
//  - Modal은 다양한 사용자 액션(확인, 취소, 폼 검증 등)을 처리할 수 있는 유연한 API를 제공

import React from 'react';
import { Button, Modal } from 'antd';
import colors from '../styles/colors';

function Antd3() {

    const showInfo = () => {
        Modal.info({
            title: '정보',
            content: '이것은 정보 메세지 샬라샬라',
        });
    };

    const showConfirm = () => {
        Modal.confirm({
            title: '정말 삭제하시겠습니까?',
            content: '삭제한 데이터는 복구할 수 없습니다.',
            okText: '예',
            cancelText: '아니오',
            footer: (_, {OkBtn, CancelBtn})=> [<OkBtn key="ok"/>, <CancelBtn key="cancel" />], // 버튼 순서 변경
            onOk() {
                console.log('삭제 확인');
            },
            onCancel() {
                console.log('삭제 취소');
            },
        });
    }


    return (
        <div>
            <Button  style={{ backgroundColor: colors.danger, color: "#fff",marginRight:"1rem" }} onClick={showInfo}>정보 모달</Button>
            <Button danger onClick={showConfirm} >
                확인 모달
            </Button>
        </div>
    )
}

export default Antd3