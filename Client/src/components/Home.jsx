import { useState, useEffect } from "react";

const Background = () => {
  const [scrollY, setScrollY] = useState(0);

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
    <div className="mb-40">
      <section className="h-screen">
        <div
          style={{ transform: `translateY(${parallaxOffset}px)` }}
          className="absolute inset-0 "
        >
          <video
            src="/video4.mp4"
            loop
            autoPlay
            className="w-full h-[90%] object-cover bg-homeColor/80"
          />
          <div
            className={`absolute top-[32%] left-[52%] transform -translate-x-[55%] bg-transparent text-center z-10`}
          >
            <h1 className="drop-shadow-2 text-2xl md:text-5xl font-bold text-white font-outline-">
              ONE-STOP-SHOP FOR HOMEOWNERS, PROVIDERS & DIY-ERs
            </h1>
          </div>
        </div>
      </section>
      <section className=" md:translate-y-0 -translate-y-96">
        <div
          className="relative w-[96%] left-[2%] right-[2%] -mt-80 h-screen rounded-lg z-10 mb-11 bg-white"
          style={{
            borderRadius: "irem",
            /* The box shadow profile is for shadow over the grey box ordered in Top - bottom (0, 0, 0) is the RGB*/
            boxShadow:
              "0px -20px 30px rgba(0, 0, 0, 0.6), 0px 20px 30px rgba(0, 0, 0, 0.5), 10px 10px 20px rgba(0, 0, 0, 0), -10px 10px 20px rgba(0, 0, 0, 0)",
          }}
        ></div>
      </section>
    </div>
  );
};

export default Background;
