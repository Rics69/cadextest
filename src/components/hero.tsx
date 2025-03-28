'use client'
import { Typography } from "antd";

const { Title } = Typography;

const Hero = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 px-6">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <Title className="text-3xl w-80 font-bold md:text-4xl !font-bold mx-auto md:mx-0">
            Most important title on the page
          </Title>
          <p className="text-base max-w-110 mx-auto md:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum ultricies, sem urna convallis metus, vel suscipit nibh lacus tincidunt ante
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-full" style={{ paddingBottom: '56.25%', height: 0 }}>
            <iframe 
              src="https://player.vimeo.com/video/1070245033?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
              title="Rick Astley - Never Gonna Give You Up"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;