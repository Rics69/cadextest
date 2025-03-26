'use client'
import { Typography } from "antd";

const { Title } = Typography;

const Hero = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 px-6">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <Title className="text-3xl w-80 font-bold md:text-4xl !font-bold mx-auto md:mx-0">Most important title on the page</Title>
          <p className="text-base max-w-110 mx-auto md:mx-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum ultricies, sem urna convallis metus, vel suscipit nibh lacus tincidunt ante</p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <iframe className="w-full h-56 md:h-72" src="https://www.youtube.com/embed/dQw4w9WgXcQ" allowFullScreen></iframe>
        </div>
      </div>
    </section>
  );
};

export default Hero;