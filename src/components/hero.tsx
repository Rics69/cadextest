'use client'
import { Typography } from "antd";

const { Title, Text } = Typography;

const Hero = () => {
  return <section className="hero">
    <div className="hero__inner container">
      <div className="hero__content">
        <Title>Most important title on the page</Title>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum ultricies, sem urna convallis metus, vel suscipit nibh lacus tincidunt ante</Text>
      </div>
      <div className="hero__video">
        <video src="https://www.youtube.com/watch?v=dQw4w9WgXcQ" autoPlay muted loop playsInline></video>
      </div>
    </div>
  </section>
};

export default Hero;