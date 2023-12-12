import Image from "next/image";
import React from "react";

const FeatureProduct = ({ imgSrc, title, desc }) => {
  return (
    <div>
      <Image
        src={imgSrc}
        width={100}
        height={100}
        alt="features"
        className="mx-auto"
      />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

const Features = () => {
  return (
    <section className="container mx-auto px-5 md:px-16" id="features">
      {/* <span className="service-name text-center">WHATS THE FUNCTION</span> */}
      <h2 className="title text-center">Meet the feature of product</h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 md:gap-5 text-center mt-10 md:mt-20">
        <FeatureProduct
          imgSrc="/features/1.svg"
          title="Self learning courses:"
          desc="Courses prodided in colloboration with top companies which, you can learn at your pace."
        />
        <FeatureProduct
          imgSrc="/features/2.svg"
          title="Professional Certificates:"
          desc="Earn recognized certificates upon program completion, enhancing your credibility in the job market."
        />
        <FeatureProduct
          imgSrc="/features/3.svg"
          title="Lifetime Access to Resources:"
          desc="Enjoy ongoing access to course materials and resources even after program completion."
        />
        <FeatureProduct
          imgSrc="/features/4.svg"
          title="Career Advancement Support:"
          desc="Receive assistance in crafting an impactful resume and preparing for interviews."
        />
      </div>
    </section>
  );
};

export default Features;
