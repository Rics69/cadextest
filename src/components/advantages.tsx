'use client'

import Advantage from "./advantage";
import { Typography, Button } from "antd";

const { Title } = Typography;

const Advantages = () => {
    return <section className="advantages">
        <div className="advantages__inner container">
            <Title level={2}>Also very important title</Title>
            <div className="advantages__content">
                <Advantage />
                <Advantage />
                <Advantage />
                <Advantage />
                <Advantage />
                <Advantage />
            </div>
            <Button type="primary">Contact us</Button>
        </div>
    </section>
}

export default Advantages;