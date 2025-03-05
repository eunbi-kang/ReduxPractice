/* 🔥 모달 내부에 Form을 사용한 예시 */
//    - 폼 검증: form.validateFields()를 통해 입력값 검증 수행
//    - 메시지 표시: message.success를 통해 폼 제출 성공 시 알림을 띄움
//    - 폼 초기화 : form.resetFields()를 사용하여 폼을 초기화

import React, { useState } from 'react'
import { Form, Button, Modal, message, Input } from "antd"
import colors from '../styles/colors';

function Antd2() {
    const showModal = () => {
        setIsModalOpen(true);
    };
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm();

    const handleOk = () => {
        form.validateFields()
            .then(values => {
                console.log('폼 값:', values);
                message.success('폼 제출 성공!');
                form.resetFields();
                setIsModalOpen(false);
            })
            .catch(info => {
                console.error('폼 제출 실패:', info);
            });
    };

    const handleCancel = () => {
        console.log('모달 닫기');
        setIsModalOpen(false);
    };
    return (
        <div>
            <Button style={{ backgroundColor: colors.success, color: "#fff" }}
                type="primary"
                onClick={showModal}>
                폼 모달 열기
            </Button>
            <Modal title="폼 입력하기"
                open={isModalOpen}
                footer={[<Button style={{ backgroundColor: colors.success, color: "#fff" }} key="submit" type="primary" onClick={handleOk}>저장</Button>,
                <Button key="cancel" onClick={handleCancel}>취소</Button>]}
                onCancel={handleCancel}
            >
                <Form form={form} layout="vertical" name="userForm">
                    <Form.Item
                        name="name"
                        label="이름"
                        rules={[{ required: true, message: '이름을 입력해주세요.' }]}>
                        <Input placeholder='이름을 입력하세요.' />
                    </Form.Item>
                    <Form.Item
                        name="email" label="이메일" rules={[{ required: true, message: '이메일을 입력해주세요.' },
                        { type: 'email', message: '유효한 이메일 주소를 입력해주세요.' }]}>
                        <Input placeholder='이메일을 입력하세요.' />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}

export default Antd2