import Image from "next/image";
import bannerImg from "../../public/Images/banner.png";
const Banner = () => {
  return (
    <section className="bg-lightGray  py-6 md:py-10 lg:py-16">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-3">
        {/* Text Content */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex flex-col justify-between md:h-[350px] ">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-darkBlack  leading-tight text-center mb-4 md:my-0">
            Empowering You for a Ebstac Future
          </h1>
          <p className="mt-4 text-lg text-[#757575] font-serif text-justify">
            At Ebstac, we’re not just another eLearning platform; we’re
            your trusted companion on your journey to personal and professional
            growth. We believe that everyone has the potential to thrive, and
            we’re here to provide you with the tools, resources, and support you
            need to unleash your full potential.
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center relative">
          <div className="relative w-[280px] h-[320px] md:w-[340px] md:h-[400px] rounded-[30px] overflow-hidden border-[6px] border-yellow ">
            <Image
              src={bannerImg}
              alt="Ebstac Future"
              layout="fill"
              objectFit="cover"
              className="rounded-[30px]"
            />
          </div>
          <span className="absolute top-2 right-2 w-4 h-4 bg-yellow  rounded-full"></span>
        </div>
      </div>
    </section>
  );
};

export default Banner;
