import { Typography, Button } from "antd"
import Advantage from "./advantage"
const { Title } = Typography;

const Advantages = () => {
    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-6">
                <Title level={2} className="text-4xl text-center mb-6 font-bold !font-bold !text-4xl">Also very important title</Title>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Advantage />
                    <Advantage />
                    <Advantage />
                    <Advantage />
                    <Advantage />
                    <Advantage />
                </div>
                <div className="flex justify-center">
                    <Button type="primary" className="mt-6 !px-12" href="/contacts">Contact us</Button>
                </div>
            </div>
        </section>
    );
};

export default Advantages;