import Image from "next/image";
import bannerImg from "../../public/Images/banner.png";
const Banner = () => {
  return (
    <section className="bg-[#f6f9ff] py-0 md:py-16">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-3">
        {/* Text Content */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex flex-col justify-between h-[350px] ">
          <h1 className="text-4xl md:text-5xl font-bold text-[#151E4D] leading-tight text-center">
            Empowering You for a Thriving Future
          </h1>
          <p className="mt-4 text-lg text-[#151E4D] font-serif">
            At ThrivingSkill, we’re not just another eLearning platform; we’re
            your trusted companion on your journey to personal and professional
            growth. We believe that everyone has the potential to thrive, and
            we’re here to provide you with the tools, resources, and support you
            need to unleash your full potential.
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center relative">
          <div className="relative w-[280px] h-[320px] md:w-[340px] md:h-[400px] rounded-[30px] overflow-hidden border-[6px] border-[#1F3B66]">
            <Image
              src={bannerImg}
              alt="Thriving Future"
              layout="fill"
              objectFit="cover"
              className="rounded-[30px]"
            />
          </div>
          <span className="absolute top-2 right-2 w-4 h-4 bg-[#1F3B66] rounded-full"></span>
        </div>
      </div>
    </section>
  );
};

export default Banner;
