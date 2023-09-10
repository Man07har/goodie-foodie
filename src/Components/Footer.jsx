import React from "react";
import deliveryTruck from "../assets/delivery-truck.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import facebook from "../assets/facebook.png";
function Footer() {
  return (
    <>
      <footer className="bg-[#F0F1F7] w-full py-12 flex flex-col md:flex-row justify-around px-12">
        <div className="flex justify-center items-center">
          <img className="md:w-[13vw] " src={deliveryTruck} />
          {/* <img
            className="w-[75px] h-[58px] top-[3291px] left-[148px] "
            src={deliveryTruck}
          /> */}
        </div>
        <div className=" m-10 md:w-48">
          <h2 className="text-navy text-[15.77px] font-bold py-2">
            Contact Us
          </h2>
          <p>
            Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM
            Market, XYZ-343434
          </p>
          <p>example2020@gmail.com</p>
          <p>(904) 443-0343</p>
        </div>
        <div className="flex flex-col m-10 ">
          <h2 className=" text-navy text-[15.77px] font-bold  py-2">More</h2>
          <a>About Us</a>
          <a>Products</a>
          <a>Career</a>
          <a>Contact Us</a>
        </div>
        <div className="flex flex-col  items-center justify-between m-10">
          <p className="md:order-last">© 2022 Food Truck Example</p>
          <div>
            <h2 className="hidden md:block text-navy text-[15.77px] font-bold  py-2">
              Social links
            </h2>
            <div className="flex m-[10px] ">
              <img className=" m-[10px] " src={instagram} alt="instagram" />

              <img className=" m-[10px] " src={twitter} alt="twitter" />

              <img className=" m-[10px] " src={facebook} alt="facebook" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
