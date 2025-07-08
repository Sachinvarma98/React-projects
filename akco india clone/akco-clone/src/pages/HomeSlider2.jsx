import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeSlider2 = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    Response: true,

  };
  return (
    <>
      <div className="w-5/6 h-fit m-auto mt-20 mb-10 " >
        <div className="m-5 h-full">
          <Slider {...settings}>
            {anotherData.map((d) => (
              <div className="bg-white h-fit text-black rounded-xl lg:col-span-3 md:col-span-3 sm:col-span-2 ">
                <div className=" flex justify-center h-56 m-2 items-center">
                  <img src={d.img1} alt="" className="h-full w-full " />
                </div>

                <div className="flex flex-col justify-center items-center gap-4 p-4">
                  <p className="text-2xl font-semibold "> {d.name} </p>
                  <p className='text-xl'> {d.details} </p>
                  <button className='bg-red-600 p-1 pl-5 pr-5 rounded-xl hover:bg-red-800'> Read More </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  )
}

const anotherData = [
  {
    img1: `/images/home/slider-2/slider1.webp`,
    name: `Form 27EQ: TCS on Luxury Goods and Collectibles`,
    details: `Discover the CBDT's latest amendment to Form 27EQ, introducing 1% TCS on luxary goods and collectibles like wristwatches, yachts, and art pieces from April 2025. Learn
     compliance tips and implications.`,
  },
  {
    img1: `/images/home/slider-2/slider2.webp`,
    name: `TDS & TCS in Budget 2025: What's New?`,
    details: `Budget 2025 introduces major updates in TDS and TCS regulations. Experts higher threshold limits and a reduced compliance burden for taxpayers. This article breaks down the
     key changes and what they mean for you.`,
  },
  {
    img1: `/images/home/slider-2/slider3.webp`,
    name: `TDS Rates FY 2025-26: Latest Chart, Limits and Exemptions.`,
    details: `Tax Deducted at Source (TDS) plays a crucial role in tax compliance for businesses and individuals. This guide covers the latest TDS 
    rates for FY 2025-2026 (AY 2026-27), Including all applicable amendments from the Union Budget 2025. Stay updated to ensure accurate tex planning and compliance with the latest tax laws.`
  },
  {
    img1: `/images/home/slider-2/slider4.webp`,
    name: `Budget 2025 Direct and Indirect Tax Changes`,
    details: `Budget 2025 brings major direct and indirect tax changes, including revised income tax rates, new tax reform, investment incentives, and simplification measures. Explore key 
    updates on tas administration, socio-economic benifits, and their impact on individuals and businesses with expert insights and analysis.`
  },
  {
    img1: `/images/home/slider-2/slider5.webp`,
    name: `LLP vs Company: Which is Better for Ease of Doing Bussiness in India?`,
    details: `Choosing the right bussiness structure, wheather an LLP or a company, isi vital for aligning with bussiness goals. Companies, with a longer history in India, offer widespread 
     recognisation, while LLPs, introduced in 2008, bring flexibility.`
  },
  {
    img1: `/images/home/slider-2/slider6.webp`,
    name: `Understanding New Capital gain Tax post Budget 2024`,
    details: `Understanding the recent Capital Gain Tax changes post-Budget 2024 is crucial for investors and taxpayers. This blog breaks down the modifications effective from July 23,2024, to guide your financial planning.`
  },
  {
    img1: `/images/home/slider-2/slider7.webp`,
    name: `Last date to file ITR-U for AY 2022-23 is 31.03.2025`,
    details: `The ITR-U or Income Tax Return-Updated, allows correction of errors or omissions in previous ITRs and can be filed within two years from the end of the relevent assessment year.`
  },
  {
    img1: `/images/home/slider-2/slider8.webp`,
    name: `Key Highlights of Union Budget 2024`,
    details: `The Budget 2024 brings significant changes in direct and indirect taxes to foster economic growth and public welfare. Key highlights include tax reforms to provide relief to taxpayers, support domestic industries, and streamline compliance regulations. Click to know more...`
  },
  {
    img1: `/images/home/slider-2/slider9.webp`,
    name: `Disclosure of Foreign Assets & Income in ITR`,
    details: `The disclosure of foreign assets and income in ITR is a key requirement under the Income Tax Act, 1961. Schedule FA nececssitates detailing all foreign assets. Clear any confusion with our FAQs.`
  },
  {
    img1: `/images/home/slider-2/slider10.webp`,
    name: `Changes on e-filling portal and Common issues while filling ITR`,
    details: `In this blog, we discuss the changes on e-filling portal and common issues while filing ITR including Up-dation of ITR Forms for AY 2024-2025 and so on...`
  },

]

export default HomeSlider2