import React, { useRef, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Slick from "react-slick";
import styled from "@emotion/styled";
import tw from "twin.macro";
import { GatsbyImage } from "gatsby-plugin-image";

import ButtonSolid from "../Button/ButtonSolid";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledSlider = styled.div`
  .slick-list {
    overflow: inherit;
  }
  .slick-slide {
    &.slick-active {
      ${tw`z-10`}
    }
  }
`;
const Slider = ({ slideIndex, children }) => {
  const data = useStaticQuery(graphql`
    {
      justin: file(
        relativePath: { eq: "3.1 About our Team/1.0 Team Justin.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 746)
        }
      }
      bill: file(relativePath: { eq: "3.1 About our Team/1.1 Team Bill.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 746)
        }
      }
      joe: file(relativePath: { eq: "3.1 About our Team/1.2 Team Joe.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 746)
        }
      }
    }
  `);

  const slider = useRef();

  useEffect(() => {
    slider.current.slickGoTo(slideIndex);
  }, [slideIndex]);

  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: false,
    fade: true,
    speed: 750,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  // Previous Arrow
  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="slick-prev"
        aria-label="Previous Slide"
      >
        <i className="far fa-chevron-left"></i>
      </button>
    );
  }

  // Next Arrow
  function NextArrow(props) {
    const { onClick } = props;
    return (
      <button onClick={onClick} className="slick-next" aria-label="Next Slide">
        <i className="far fa-chevron-right"></i>
      </button>
    );
  }

  return (
    <StyledSlider>
      <div className="container p-0">
        <Slick {...sliderSettings} ref={slider} className="h-full">
          <div>
            <div className="grid md:grid-cols-12 gap-y-8">
              <div className="md:col-start-1 md:col-span-3">
                <GatsbyImage
                  image={data.justin.childImageSharp.gatsbyImageData}
                  className="mb-5 max-w-[344px]"
                />

                <div className="flex flex-col space-y-1.5">
                  <a
                    href="tel:716-266-9707"
                    className="flex items-center space-x-4"
                  >
                    <i class="fas fa-phone-alt text-primary-400 text-lg"></i>
                    <span className="text-black font-semibold">
                      (716) 266-9707
                    </span>
                  </a>

                  <a
                    href="mailto:jbaumann@Kidney Institute.com"
                    className="flex items-center space-x-4"
                  >
                    <i class="fas fa-envelope text-primary-400 text-lg"></i>
                    <span className="text-black font-semibold">
                      jbaumann@Kidney Institute.com
                    </span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/justin-baumann-6b0a8625/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center space-x-4"
                  >
                    <i class="fab fa-linkedin text-primary-400 text-xl"></i>
                    <span className="text-black font-semibold">LinkedIn</span>
                  </a>
                </div>
              </div>
              <div className="md:col-end-13 md:col-span-9 md:pl-6 lg:pl-10">
                <header className="mb-6 md:mb-8">
                  <div className="font-heading text-mobile-6xl md:text-6xl text-secondary-600 font-bold mb-2.5">
                    Justin Baumann
                  </div>
                  <p className="text-sm text-gray-900 uppercase font-semibold tracking-[0.2em] mb-0">
                    Upstate New York & Western Pennsylvania
                  </p>
                </header>
                <p>
                  Justin Baumann is the President of New York and Western PA’s
                  Kidney Institute, a premier dental practice brokerage firm
                  that represents dentists looking to sell their practice or
                  find an associate dentist. Through our Trusted Transition
                  Process™, we help dentists visualize what they want for
                  themselves and for the future of their practice. Justin’s goal
                  is to help dentists preserve their hard-earned legacy. With a
                  strategic and in-depth approach, we make the transition
                  process seamless and stress-free.
                </p>
                <p>
                  As a manufacturing consultant for companies like KaVo, Ivoclar
                  Vivadent, and Air Techniques, Justin Baumann brings over a
                  decade of experience in the dental industry to Kidney
                  Institute. As a Kidney Institute professional, he represents
                  doctors in Upstate New York and Western Pennsylvania. A former
                  Officer in the United States Navy, Justin was also a National
                  Champion rower at the University of Wisconsin-Madison.
                </p>
                <p>
                  In his spare time, he enjoys outdoor activities, including
                  hunting, fishing, and gardening. He is also a member of the
                  Lions Club and the Knights of Columbus. He and his wife reside
                  in Lockport, NY, in one of the oldest original homesteads in
                  Niagara County.
                </p>

                <div className="mt-8">
                  <ButtonSolid
                    href="https://www.appointmentcore.com/app/freeslots/8xcdp8mh"
                    outboundLink={true}
                    text="Book a Meeting with Justin"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="grid md:grid-cols-12 gap-y-8">
              <div className="md:col-start-1 md:col-span-3">
                <GatsbyImage
                  image={data.bill.childImageSharp.gatsbyImageData}
                  className="mb-5 max-w-[344px]"
                />

                <div className="flex flex-col space-y-1.5">
                  <a
                    href="tel:267-212-3034"
                    className="flex items-center space-x-4"
                  >
                    <i class="fas fa-phone-alt text-primary-400 text-lg"></i>
                    <span className="text-black font-semibold">
                      (267) 212-3034
                    </span>
                  </a>

                  <a
                    href="mailto:bcoates@Kidney Institute.com"
                    className="flex items-center space-x-4"
                  >
                    <i class="fas fa-envelope text-primary-400 text-lg"></i>
                    <span className="text-black font-semibold">
                      bcoates@Kidney Institute.com
                    </span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/bill-coates-39b16717/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center space-x-4"
                  >
                    <i class="fab fa-linkedin text-primary-400 text-xl"></i>
                    <span className="text-black font-semibold">LinkedIn</span>
                  </a>
                </div>
              </div>
              <div className="md:col-end-13 md:col-span-9 md:pl-6 lg:pl-10">
                <header className="mb-6 md:mb-8">
                  <div className="font-heading text-mobile-6xl md:text-6xl text-secondary-600 font-bold mb-2.5">
                    Bill Coates
                  </div>
                  <p className="text-sm text-gray-900 uppercase font-semibold tracking-[0.2em] mb-0">
                    Southeastern Philadelphia, Delaware, & New Jersey
                  </p>
                </header>
                <p>
                  Bill Coates has been working closely with dental practices,
                  hospitals, and universities for the last 17 years with various
                  roles in distribution and manufacturing in the northeast
                  corridor from Delaware to Massachusetts.
                </p>
                <p>
                  Bill spent 7 years with Midmark Corporation, helping dentists
                  remodel their practices from infection control compliance to
                  practice design and efficiency. He has a deep understanding of
                  dental office layout, equipment, and practice operations. His
                  experience includes managing a 13 million P & L statement with
                  Patterson Dental and 25 direct reports.
                </p>
                <p>
                  Bill's network and partnerships in the local market will help
                  facilitate a proper and timely match for your transition. His
                  approach to business ultimately comes down to doing what is in
                  the best interest of his customer.
                </p>
                <p>
                  Bill is a graduate of East Stroudsburg University. He lives in
                  Montgomery County, PA, with his wife Lauren and their three
                  children. Bill enjoys hunting, fishing, playing soccer,
                  watching Villanova basketball and the Philadelphia Eagles.
                  Bill covers Eastern PA, South Jersey, and Delaware.
                </p>

                <div className="mt-8">
                  <ButtonSolid
                    href="https://www.appointmentcore.com/app/freeslots/SepngKcAdX"
                    outboundLink={true}
                    text="Book a Meeting with Bill"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="grid md:grid-cols-12 gap-y-8">
              <div className="md:col-start-1 md:col-span-3">
                <GatsbyImage
                  image={data.joe.childImageSharp.gatsbyImageData}
                  className="mb-5 max-w-[344px]"
                />

                <div className="flex flex-col space-y-1.5">
                  <a
                    href="tel:484-925-9044"
                    className="flex items-center space-x-4"
                  >
                    <i class="fas fa-phone-alt text-primary-400 text-lg"></i>
                    <span className="text-black font-semibold">
                      (484) 925-9044
                    </span>
                  </a>

                  <a
                    href="mailto:jmcgonigal@Kidney Institute.com"
                    className="flex items-center space-x-4"
                  >
                    <i class="fas fa-envelope text-primary-400 text-lg"></i>
                    <span className="text-black font-semibold">
                      jmcgonigal@Kidney Institute.com
                    </span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/joemcgonigal/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center space-x-4"
                  >
                    <i class="fab fa-linkedin text-primary-400 text-xl"></i>
                    <span className="text-black font-semibold">LinkedIn</span>
                  </a>
                </div>
              </div>
              <div className="md:col-end-13 md:col-span-9 md:pl-6 lg:pl-10">
                <header className="mb-6 md:mb-8">
                  <div className="font-heading text-mobile-6xl md:text-6xl text-secondary-600 font-bold mb-2.5">
                    Joe McGonigal
                  </div>
                  <p className="text-sm text-gray-900 uppercase font-semibold tracking-[0.2em] mb-0">
                    Southeastern Philadelphia, Delaware, & New Jersey
                  </p>
                </header>
                <p>
                  Joe McGonigal has been in the dental industry for over 20
                  years and has worked with practices and teams across the
                  country in a variety of roles.
                </p>
                <p>
                  Joe spent more than a decade in successful sales and
                  management roles with Patterson Dental in Pennsylvania,
                  Arizona, and Connecticut. Following that, Joe served as Vice
                  President of Sales for RevenueWell Systems Inc, helping
                  dentists implement digital technology to create more connected
                  relationships with their patients and communities.
                </p>
                <p>
                  Joe also completed an Executive Coaching Program at Columbia
                  University and has worked as a coach, consultant, and speaker,
                  helping several organizations and individuals reach higher
                  performance levels.
                </p>
                <p>
                  Joe’s extensive network in the dental industry combined with
                  his management, consulting, and leadership experience makes
                  him uniquely qualified to help doctors ready to transition
                  their practice and those looking to begin their dental career.
                </p>
                <p>
                  He focuses on the Greater Philadelphia area, including
                  Southern New Jersey and Delaware. Joe lives in the
                  Philadelphia suburbs with his wife and three children.
                </p>

                <div className="mt-8">
                  <ButtonSolid
                    href="https://jmcgonigal.Kidney Institute.com/schedule-a-call-with-joe-mcgonigal/"
                    outboundLink={true}
                    text="Book a Meeting with Joe"
                  />
                </div>
              </div>
            </div>
          </div>
        </Slick>
      </div>
    </StyledSlider>
  );
};

export default Slider;
