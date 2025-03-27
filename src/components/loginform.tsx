'use client'

import { Form, Input, Button, Typography } from "antd";
import type { FormProps } from 'antd';
import { useState } from "react";

const { TextArea } = Input;
const { Title } = Typography;

type FieldType = {
    username?: string;
    email?: string;
    message?: string;
};

const LoginForm = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [message, setMessage] = useState("");

    const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
            });
    
            console.log(values);
    
            if (response.ok) {
                setMessage(`Спасибо за проявленный интерес, ${values.username}`);
                setFormSubmitted(true);
            } else {
                alert("Ошибка при отправке формы");
            }
        } catch (error) {
            console.error("Ошибка:", error);
            alert("Ошибка сети");
        }
    };

    if (formSubmitted) {
        return (
            <div className="flex justify-center items-center min-h-[400px]">
                <Title level={2} className="text-center">{message}</Title>
            </div>
        );
    }

    return (
        <Form
            name="contact"
            layout="vertical"
            onFinish={onFinish}
            className="space-y-4"
        >
            <Form.Item<FieldType>
                label="Name"
                name="username"
                rules={[{ required: true, message: 'Please input your name!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item<FieldType>
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }]}
            >
                <Input type="email" />
            </Form.Item>

            <Form.Item label="Message" name="message" rules={[{ required: true, message: 'Please input your message!' }]}>
                <TextArea rows={4} />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="w-full">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}

export default LoginForm;