import Link from "next/link";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import StarHalfRoundedIcon from "@mui/icons-material/StarHalfRounded";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ButtonGroup from "./ButtonGroup";

const Card = ({ star,testimon,name, title, imgSrc }) => {
  return (
    <div className="mx-2 flex flex-col gap-4 select-none cursor-pointer border border-[#4e4e4e31] p-10 rounded-lg hover:shadow-xl transition-all">
      <div className="text-rose-600">
        <StarRoundedIcon />
        <StarRoundedIcon />
        <StarRoundedIcon />
        <StarRoundedIcon />
        {star}
      </div>
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="leading-loose">
        {testimon}
      </p>
      <div className="flex items-center gap-4 mt-5">
        <Image src={imgSrc} width={50} height={50} alt="testimonials" />
        <div>
          <h3 className="font-semibold">{name}</h3>
          {/* <Link
            href="https://github.com/NaseemKhan005"
            target="_blank"
            className="text-rose-600 font-[500]"
          >
            
          </Link> */}
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section
      className="relative container mx-auto px-5 md:px-16 flex flex-col gap-5"
      id="testimonial"
    >
      <div>
        <span className="service-name text-center ">TESTIMONIAL</span>
        <h2 className="title text-center ">Meet Students Satisfaction</h2>
      </div>
      <Carousel {...carouselParams}>
        <div>
          <Card
            star={<StarHalfRoundedIcon />}
            testimon="I entered this internship program with a basic understanding of cloud technologies, 
            and I am leaving with a wealth of knowledge and practical skills. 
            The self-learning courses were engaging, and the tasks challenged me to apply what I learned. 
            I highly recommend this program to anyone looking to kickstart their career in cloud computing"
            title="AWS Cloud Intern"
            name="Raj Kapoor"
            imgSrc="/testimonials/1.png"
          />
        </div>
        <div>
          <Card
            title="Data Analysis Intern"
            testimon="Joining this internship program with a foundational knowledge of data analysis, I can confidently say it has been a transformative experience. 
            The self-learning courses delved deep into statistical methods and data visualization tools, making the learning process engaging and applicable. The hands-on tasks challenged me to analyze real-world datasets, honing my analytical skills."
            imgSrc="/testimonials/2.png"
            name="Maya Reddy"
          />
        </div>
        <div>
          <Card
            star={<StarRoundedIcon />}
            title="Artificial Intelligence Intern"
            testimon="Entering this artificial intelligence internship program with a curiosity for AI, I'm leaving with a profound understanding and hands-on experience that exceeded my expectations. 
            The self-learning courses were intellectually stimulating, covering the breadth of AI concepts. 
            The tasks challenged me to implement machine learning algorithms and work on real AI applications. "
            name="Arjun Sharma"
            imgSrc="/testimonials/3.png"
          />
        </div>
        <div>
          <Card
            star={<StarHalfRoundedIcon />}
            title="UI/UX Intenr"
            testimon="This UI/UX design internship program exceeded my expectations in every way. 
            The self-learning courses equipped me with a solid foundation in design theory, and the tasks pushed me to apply these principles in real-world scenarios.
            I confidently recommend this program to anyone looking to craft meaningful and user-friendly digital experiences"
            imgSrc="/testimonials/4.png"
            name="Arnav Singhania"
          />
        </div>
      </Carousel>
    </section>
  );
};

export default Testimonials;

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
