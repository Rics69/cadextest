'use client'

import { Typography } from "antd";
import LoginForm from "./loginform";

const { Title } = Typography;

const Contact = () => {
    return (
        <section className="contact">
            <div className="contact__inner container">
                <Title level={1}>Only CTA on the page</Title>
                <LoginForm />
            </div>
        </section>
    )
}

export default Contact;