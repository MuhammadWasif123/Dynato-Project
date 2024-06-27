"use client"
import Image from "next/image";
import { useEffect } from "react";
import "./LogoSlider.css"
import Logo1 from "../../../../public/logo1.png";
import Logo2 from "../../../../public/logo4.png";
import Logo3 from "../../../../public/logo2.png";
import Logo4 from "../../../../public/logo5.png";
import Logo5 from "../../../../public/logo6.png";
import Logo6 from "../../../../public/logo7.png";


const LogoSlider = () => {
  return (
    <div className="logo-slider">
      <h2 className="title heading mb-6">Our Digital Partners</h2>
      <div className="marquee">
        <div className="marquee-content">
          <Image src={Logo1} alt="logo1" className="mr-6 h-[81px]" />
          <Image src={Logo2} alt="logo2" className="h-[81px] mx-6" />
          <Image src={Logo3} alt="logo3" className="h-[81px] mx-6" />
          <Image src={Logo4} alt="logo4" className="h-[81px] mx-6" />
          <Image src={Logo5} alt="logo5" className="h-[81px] mx-6" />
          <Image src={Logo6} alt="logo6" className="h-[81px] mx-6" />
          {/* Duplicate the logos for continuous effect */}
          <Image src={Logo1} alt="logo1" className="h-[81px] mx-6" />
          <Image src={Logo2} alt="logo2" className="h-[81px] mx-6" />
          <Image src={Logo3} alt="logo3" className="h-[81px] mx-6" />
          <Image src={Logo4} alt="logo4" className="h-[81px] mx-6" />
          <Image src={Logo5} alt="logo5" className="h-[81px] mx-6" />
          <Image src={Logo6} alt="logo6" className="h-[81px] mx-6" />
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;
