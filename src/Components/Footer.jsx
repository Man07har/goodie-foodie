import React from "react";
import deliveryTruck from "../assets/delivery-truck.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import facebook from "../assets/facebook.png";
function Footer() {
  return (
    <>
      <div className="bg-[#F0F1F7] w-full">
        <div className="flex justify-center items-center">
          <img className=" " src={deliveryTruck} />
          {/* <img
            className="w-[75px] h-[58px] top-[3291px] left-[148px] "
            src={deliveryTruck}
          /> */}
        </div>
        <div className=" m-10">
          <h2 className="text-[#0E2368] text-[15.77px] font-bold">
            Contact Us
          </h2>
          <p>
            Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM
            Market, XYZ-343434
          </p>
          <p>example2020@gmail.com</p>
          <p>(904) 443-0343</p>
        </div>
        <div className="flex flex-col m-10">
          <h2 className=" text-[#0E2368] text-[15.77px] font-bold">More</h2>
          <a>About Us</a>
          <a>Products</a>
          <a>Career</a>
          <a>Contact Us</a>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p>© 2022 Food Truck Example</p>
          <div className="flex m-[10px] ">
            <img className=" m-[10px] " src={instagram} alt="instagram" />

            <img className=" m-[10px] " src={twitter} alt="twitter" />

            <img className=" m-[10px] " src={facebook} alt="facebook" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
