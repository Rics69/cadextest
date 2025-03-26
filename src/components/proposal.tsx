'use client'
import { Typography, Button } from "antd";

const { Title } = Typography;

const Proposal = () => {
  return <section className="proposal">
    <div className="proposal__inner container">
      <Title level={3}>Less important title</Title>
      <Button type="primary">Contact us</Button>
    </div>
  </section>;
};

export default Proposal;