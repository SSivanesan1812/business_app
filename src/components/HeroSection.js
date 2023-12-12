import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      className="text-center flex flex-col gap-10 sm:gap-20 items-center justify-center h-full mt-28 sm:mt-32 md:mt-44"
      id="home"
    >
      <div className="md:w-2/3 lg:w-1/2 container px-5 md:px-16 mx-auto">
        <h1 className="capitalize flex flex-col gap-2 md:gap-5 text-3xl sm:text-4xl md:text-[3.2rem] 2xl:text-6xl font-bold">
          <p>Get Industry Standard Training </p>
          
        </h1>
        <br/>
        <h1 className="capitalize flex flex-col gap-2 md:gap-5 text-2xl sm:text-3xl md:text-[2.2rem] 1xl:text-3xl font-bold">
          <p>and Earn Professional Internship Certificates!</p>
        </h1>
        <p className="text-lg leading-normal sm:leading-loose my-4 md:my-6">
        Welcome to RindhaEduTech , your gateway to professional growth. 
        Our mission is to provide impactful training and internship experiences, equipping you with the skills and knowledge needed for a successful career.
         Join us and take the first step towards unlocking your full potential.
        </p>
        <div className="flex justify-center gap-10">
        <button className="md:text-base text-sm hover:border-2 border-2 border-transparent font-semibold py-3 px-8 md:px-10 text-white bg-rose-600 hover:border-rose-600 hover:bg-transparent hover:text-rose-600 rounded-full">
          <Link href="#pricing" >
            Explore the programs
          </Link>
        </button>
        <button className="md:text-base text-sm hover:border-2 border-2 border-transparent font-semibold py-3 px-8 md:px-10 text-white bg-rose-600 hover:border-rose-600 hover:bg-transparent hover:text-rose-600 rounded-full">
          <Link href="https://forms.gle/fWWVytVaNyzsAf6V9" target="_blank">
            Register for Internship
          </Link>
        </button>
        </div>
      </div>
      {/* <div className="w-full relative">
        <div className="before:w-full before:h-full before:absolute before:top-0 before:left-0 before:bg-[url('/herobg1.png')] before:bg-left-bottom before:bg-contain before:bg-no-repeat before:-z-50 after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-[url('/herobg2.png')] after:bg-right after:bg-contain after:bg-no-repeat after:-z-50">
          <Image
            src={"/hero.webp"}
            width={1100}
            height={500}
            alt="hero Image"
            className="object-contain mx-auto"
          />
        </div>
      </div> */}
    </section>
  );
};

export default HeroSection;
