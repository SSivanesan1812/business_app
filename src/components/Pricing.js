"use client";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Link from "next/link";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ButtonGroup from "./ButtonGroup";

const Plan = ({ title }) => {
  return (
    <div className="flex items-center gap-2">
      <CheckCircleIcon className="text-rose-600 text-xl" />
      <span>{title}</span>
    </div>
  );
};

const PricingCard = ({ name, title, price, btnText, trail,feature1,feature2,feature3,feature4 }) => {
  return (
    <div className="mx-2 md:mx-3 cursor-pointer p-10 transition-all hover:shadow-lg flex flex-col gap-12 rounded-3xl border-neutral-200 border">
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold capitalize">{name}</h2>
        <span className="text-neutral-500">{title}</span>
      </div>
      <div className="flex flex-col gap-5">
        <Plan title={feature1} />
        <Plan title={feature2} />
        <Plan title={feature3} />
        <Plan title={feature4} />
      </div>
      <div className="mx-auto">
        <h2 class="text-4xl text-center leading-none flex items-center pb-4 mb-4">
          <span>Rs.{price}</span>
          {/* <span class="text-lg ml-1 font-normal text-neutral-500">
            /Monthly
          </span> */}
        </h2>
        <button className="w-fit capitalize text-base hover:bg-rose-600 hover:shadow-md hover:shadow-rose-600 hover:border-2 border-2 border-transparent py-3 px-6 text-white bg-rose-600 hover:border-rose-600 hover:text-white rounded-full">
        <Link href={"https://forms.gle/fWWVytVaNyzsAf6V9"} target="_blank">
          {btnText}
          </Link>
        </button>
        <span className="block text-rose-600 mt-5 font-semibold animate-bounce cursor-pointer">
          {trail}
        </span>
      </div>
      
    </div>
  );
};

const Pricing = () => {
  const [plan, setPlan] = useState("Internship");
  return (
    <section
      className="relative container mx-auto px-5 md:px-16 flex flex-col gap-5"
      id="pricing"
    >
      <div>
        <span className="service-name text-center ">PROGRAMS</span>
        <h2 className="title text-center ">Choose your preferred domain</h2>
      </div>

      <div className="relative transition-all flex gap-1 mx-auto w-fit bg-slate-100 p-2 rounded-full">
        <div
          className={`${
            plan === "Internship" ? "left-2" : "left-[150px] w-[128px]"
          } transition-all duration-500 absolute top-[.37rem] h-[55px] w-[138px] rounded-full bg-rose-600`}
        ></div>
        <button
          onClick={() => setPlan("Internship")}
          className={`
          ${plan === "Internship" ? "text-white" : "text-rose-600"}
          z-[1] capitalize text-base hover:border-2 border-2 border-transparent py-3 px-5 hover:border-rose-600 rounded-full`}
        >
          Internship&nbsp;
        </button>
        <button
          onClick={() => setPlan("Course")}
          className={`
          ${plan === "Course" ? "text-white" : "text-rose-600"}
          z-[1] capitalize text-base hover:border-2 border-2 border-transparent py-3 px-5 hover:border-rose-600 rounded-full`}
        >
          &nbsp;&nbsp; Course&nbsp; 
        </button>
      </div>

      {plan === "Internship" ? (
        <Carousel {...carouselParams}>
          <PricingCard
            name="Data Analysis Intenship"
            title="For 1 months"
            price="299"
            btnText="Register Now"
            trail="On Completetion get internship completion certificate"
            feature1="Practicial Skills"
            feature2="Comprehensive Curriculum"
            feature3="Industry-aligned content"
            feature4="Flexible and accessible"
          />
          <PricingCard
            name="Artficial Intelligence Internship"
            title="For 1 months"
            price="299"
            btnText="Register Now"
            trail="On Completetion get internship completion certificate"
            feature1="Foundational Knowledge"
            feature2="Hands-on Experience"
            feature3="Career Preparation:"
            feature4="Flexible Learning"
          />
          <PricingCard
            name="AWS Cloud Internship"
            title="For 1 months"
            price="299"
            btnText="Register Now"
            trail="On Completetion get internship completion certificate"
            feature1="Solid Foundation"
            feature2="Expert-led Content"
            feature3="Hands-on Experience"
            feature4="Flexible Learning"
          />
          <div className="relative">
            {/* <span className="absolute -top-1 left-10 bg-rose-600 text-white px-2 py-1 rounded-md">
              Suggested
            </span> */}
            <PricingCard
              name="UI/UX Internship"
              title="For 1 months"
              price="299"
              btnText="Register Now"
              trail="On Completetion get internship completion certificate"
              feature1="Human-centered Design"
            feature2="Practical Skills"
            feature3="User Interface (UI) and User Interaction (UI) Design"
            feature4="Flexible Learning"
            />
          </div>
        </Carousel>
      ) : (
        <Carousel {...carouselParams}>
          <PricingCard
            name="Data Analysis"
            title="For Data Enthusiasists"
            price="199"
            btnText="Register Now"
            trail="On Completetion get Course completion certificate"
            feature1="Practicial Skills"
            feature2="Comprehensive Curriculum"
            feature3="Industry-aligned content"
            feature4="Flexible and accessible"
          />
          <PricingCard
            name="Artficial Intelligence"
            title="For AI Enthusiasists"
            price="199"
            btnText="Register Now"
            trail="On Completetion get Course completion certificate"
            feature1="Foundational Knowledge"
            feature2="Hands-on Experience"
            feature3="Career Preparation:"
            feature4="Flexible Learning"
          />
          <PricingCard
            name="UI/UX"
            title="For Front-end Enthusiasists"
            price="199"
            btnText="Register Now"
            trail="On Completetion get Course completion certificate"
            feature1="Human-centered Design"
          feature2="Practical Skills"
          feature3="User Interface (UI) and User Interaction (UI) Design"
          feature4="Flexible Learning"
          />
          <div className="relative">
            {/* <span className="absolute -top-1 left-10 bg-rose-600 text-white px-2 py-1 rounded-md">
              Suggested
            </span> */}
            <PricingCard
              name="AWS Cloud "
              title="For Cloud Enthusiasists"
              price="199"
              btnText="Register Now"
              trail="On Completetion get Course completion certificate"
              feature1="Solid Foundation"
              feature2="Expert-led Content"
              feature3="Hands-on Experience"
              feature4="Flexible Learning"
            />
          </div>
        </Carousel>
      )}
    </section>
  );
};

export default Pricing;

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const carouselParams = {
  additionalTransfrom: 0,
  arrows: false,
  autoPLaySpeed: 3000,
  centerMode: false,
  className: "",
  containerClass: "carousel-container",
  customButtonGroup: <ButtonGroup />,
  dotListClass: "",
  draggable: true,
  focusOnSelect: false,
  infinite: true,
  itemClass: "",
  keyBoardControl: true,
  minimumTouchDrag: 80,
  renderButtonGroupOutside: true,
  renderDotsOutside: false,
  responsive: responsive,
  showDots: false,
  sliderClass: "",
  slidesToSlide: 1,
};
