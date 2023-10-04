import { useState, useEffect } from "react";
import SmlText from "./SmlComponents/SmlText";
import Card1 from "./SmlComponents/Card1";
import { CheckList1, CheckList2, Options1 } from "../constants/portalCards";
import Card2 from "./SmlComponents/Card2";

const Background = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll1 = () => {
      const scrollTop = window.scrollY;
      const scrollBreakpoint = 100;
      /*
        scrollTop is how far down from the top the screen has scrolled.
        Alter scrollBreakpoint to adjust how far down the screen you want the event to trigger.
      */
      if (scrollTop > scrollBreakpoint) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll1);

    return () => window.removeEventListener("scroll", handleScroll1);
  }, []);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  {
    /*Rate of scrolling*/
  }
  const parallaxOffset = scrollY * 0.3;

  return (
    <div>
      <section className="h-screen">
        <div
          style={{ transform: `translateY(${parallaxOffset}px)` }}
          className="absolute inset-0 "
        >
          <img
            src="/src/components/Images/back5.jpg"
            alt="Background"
            className="w-full h-[90%] object-cover"
          />
          <div
            className={`absolute top-[22%] left-[52%] transform -translate-x-[55%] bg-transparent text-center z-10`}
          >
            <h1 className="text-5xl font-bold text-white ">
              Provider&apos;s Portal
            </h1>
          </div>
          <div className="absolute top-[32%] left-[40%] transform -translate-x-[25%] bg-red- w-[50rem] text-center z-10">
            {/* Title */}
            <SmlText
              text={`Our mission is to make Providers' lives a little easier by helping
              Homeowners better understand their design, cost and product
              options before they engage with contractors, manufacturers and
              retailers.`}
              size="2"
            />
            <SmlText
              text={`We believe a Homeowner who creates their own design and
              understands the impact on project costs of their decisions will
              be a far better client than a Homeowner who has litle or no
              idea.`}
              size="2"
            />
          </div>
        </div>
      </section>
      <section className="bg-gray-100">
        <div
          className="relative w-[96%] left-[2%] right-[2%] -mt-80 rounded-lg z-10 bg-gray-200"
          style={{
            borderRadius: "irem",
            /* The box shadow profile is for shadow over the grey box ordered in Top - bottom (0, 0, 0) is the RGB*/
            boxShadow:
              "0px -20px 30px rgba(0, 0, 0, 0.6), 0px 20px 30px rgba(0, 0, 0, 0.5), 10px 10px 20px rgba(0, 0, 0, 0), -10px 10px 20px rgba(0, 0, 0, 0)",
          }}
        >
          <section className="flex-col bg-transparent flex items-center justify-center">
            <div
              className={`${
                scrolled
                  ? "bg-white shadow-lg text-indigo-500"
                  : "bg-transparent text-transparent"
              } pt-3 h-80 w-[80%] mt-[6rem] rounded flex justify-center transition duration-300`}
            >
              <div className="mt-16 bg-transparent text-center ">
                <h1 className="p-2 text-4xl font-bold ">
                  Our goal is for Contractors to pre-qualify clients by simply
                  asking:
                </h1>
                <h1 className="pt-8 text-3xl font-bold ">
                  “Have you used RenoPilot to create a design for, or estimate
                  the cost of your project?”
                </h1>
              </div>
            </div>
            <div className="bg-transparent flex h-96 w-[80%] mt-20 justify-between">
              <Card1
                heading="What sort of Provider are you?"
                checklist={CheckList1}
              />
              <Card1
                heading="Which Service do you wish to use?"
                checklist={CheckList2}
              />
              <Card2
                heading="To become a Provider you must"
                checklist={Options1}
              />
            </div>
            <div className="bg-transparent flex h-96 w-[200rem] mt-20 justify-center">
              <Card2
                heading="Already a Provider and want to make changes?"
                checklist={Options1}
              />
            </div>
            <div className="h-40"></div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Background;