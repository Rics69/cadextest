import { Typography, Button } from "antd";

const { Title } = Typography;

const Proposal = () => {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <div className="container mx-auto">
        <Title level={3} className="text-2xl">Less important title</Title>
        <Button type="primary" className="mt-4 !px-12" href="/contacts">Contact us</Button>
      </div>
    </section>
  );
};

export default Proposal;