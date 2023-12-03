import Image from "next/image";

// const WorkCard = ({ num, title }) => {
//   return (
//     <div className="w-[90%] sm:w-4/5 mx-auto md:mx-0 md:w-full flex flex-col md:gap-5 gap-3 text-center md:text-left">
//       <span className="md:mx-0 mx-auto text-3xl w-fit font-bold text-blue-800 bg-white rounded-full py-4 px-4">
//         {num}
//       </span>
//       <h2 className="text-xl font-semibold leading-relaxed">{title}</h2>
//       <p className="leading-loose">
//         Get your blood tests delivered at home collect a sample from the your
//         blood tests.
//       </p>
//     </div>
//   );
// };

const Work = () => {
  return (
    <section className="w-full bg-rose-500 text-white bg-[url('/work/workbg.png')] bg-cover bg-no-repeat bg-center">
      <div className="flex flex-col gap-10 lg:gap-16 container mx-auto md:px-16 px-5 py-12 sm:py-20 md:py-36">
        <div>
          <span className="uppercase block font-semibold text-sm tracking-widest text-center text-rose-200">
            WHATS THE FUNCTION
          </span>
          <h2 className="text-2xl sm:text-4xl font-semibold my-3 text-center ">
            Steps for successfully completing the internship 
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-5">
          <div className="relative">


          <div className="w-[90%] sm:w-4/5 mx-auto md:mx-0 md:w-full flex flex-col md:gap-5 gap-3 text-center md:text-left">
      <span className="md:mx-0 mx-auto text-3xl w-fit font-bold text-blue-800 bg-white rounded-full py-4 px-4">
        {"01"}
      </span>
      <h2 className="text-xl font-semibold leading-relaxed">{"Internship Registration"}</h2>
      <p className="leading-loose">
      Register by clicking the 'Register' button above. Once you've clicked the button, you'll be directed to a Google form. 
      Please fill out the form with the required information and submit it. 
      We'll be in touch with you shortly.
      </p>
    </div>
            
            
            <Image
              src={"/work/arrow.svg"}
              width={210}
              height={300}
              alt="arrow"
              className="hidden absolute top-2 left-[4.5rem] xl:block"
            />
          </div>

          <div className="relative">
            
            
          <div className="w-[90%] sm:w-4/5 mx-auto md:mx-0 md:w-full flex flex-col md:gap-5 gap-3 text-center md:text-left">
      <span className="md:mx-0 mx-auto text-3xl w-fit font-bold text-blue-800 bg-white rounded-full py-4 px-4">
        {"02"}
      </span>
      <h2 className="text-xl font-semibold leading-relaxed">{"Complete learning Path"}</h2>
      <p className="leading-loose">
      We will provide you with the learning path and schedule for the respective program you have chosen. 
      Please ensure to complete the assigned learning path and tasks. 
      </p>
    </div>
            
            
            <Image
              src={"/work/arrow.svg"}
              width={205}
              height={300}
              alt="arrow"
              className="hidden absolute top-7 left-[4.8rem] xl:block rotate"
            />
          </div>
          <div className="relative">
            
            
          <div className="w-[90%] sm:w-4/5 mx-auto md:mx-0 md:w-full flex flex-col md:gap-5 gap-3 text-center md:text-left">
      <span className="md:mx-0 mx-auto text-3xl w-fit font-bold text-blue-800 bg-white rounded-full py-4 px-4">
        {"03"}
      </span>
      <h2 className="text-xl font-semibold leading-relaxed">{"Upload badges and tasks"}</h2>
      <p className="leading-loose">
        We will provide you with the submission form at the end of the internship. 
        Kindly Upload the finished tasks and badges obtained from the learning paths in the respective form.

      </p>
    </div>
            
            
            
            <Image
              src={"/work/arrow.svg"}
              width={205}
              height={300}
              alt="arrow"
              className="hidden absolute top-2 left-[4.7rem] xl:block"
            />
          </div>
          
          
          <div className="w-[90%] sm:w-4/5 mx-auto md:mx-0 md:w-full flex flex-col md:gap-5 gap-3 text-center md:text-left">
      <span className="md:mx-0 mx-auto text-3xl w-fit font-bold text-blue-800 bg-white rounded-full py-4 px-4">
        {"04"}
      </span>
      <h2 className="text-xl font-semibold leading-relaxed">{"Recieve Certification"}</h2>
      <p className="leading-loose">
      After reviewing the submitted tasks and badges, we will issue the internship and training certificates.
      </p>
    </div>
        
        
        
        </div>
      </div>
    </section>
  );
};

export default Work;
