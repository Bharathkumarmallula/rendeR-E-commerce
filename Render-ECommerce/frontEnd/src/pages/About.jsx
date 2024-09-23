// eslint-disable-next-line no-unused-vars
import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";


const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[-450px]"
          src={assets.about_img}
          alt=""/>

        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum is simply dummy test of the printing and typesetting
            industry. Lorem Lorem ipsum is simply dummy test of the printing and
            typesetting industry. Lorem
          </p>
          <p>
            E-commerce websites typically display products or services along
            with detailed descriptions, images, prices, and any available
            variations.Each product usually has its own dedicated page with
            relevant information
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            The main mission of an e-commerce app is to make shopping easy and
            provide a unique experience for customers. Here are some things to
            consider when developing an e-commerce app
          </p>
        </div>
      </div>

      <div className="text-4xl py-4 ">
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className="flex flex-xol md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance</b>
          <p className="text-gray-600">Quality in e-commerce refers to the set of activities that ensure that the products and services offered by an online business meet customer expectations</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience</b>
          <p className="text-gray-600">Convenience is a key factor in e-commerce and is a major reason for the growth of online shopping. It can help build loyal customers who will continue to purchase from a brand.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional customer service</b>
          <p className="text-gray-600">CExceptional customer service in ecommerce involves providing a seamless experience that makes customers feel valued and heard.</p>
        </div>
   
      </div>

    </div>

  );
};

export default About;
