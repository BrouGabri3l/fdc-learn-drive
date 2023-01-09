import React from 'react'
import CustomSwiper from '../CustomSwiper'
import AnimatedCanvas from '../AnimatedCanvas'
import Card from '../Card'
import {FDC} from "public/FDC.svg";
import RightImage from "/public/RightImage.png";
import CenterImage from "/public/CenterImage.png";
import LeftImage from "/public/LeftImage.png";
import {
    AcademyIcon,
    IdeaIcon,
    GraphicIcon,
    PeopleIcon,
    HatIcon,
  } from "../icons";
import { Navigation, Pagination, Scrollbar, A11y, Grid } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"
import "swiper/css/scrollbar";
import "swiper/css/grid";
const list = [
    {
      text: (
        <>
          <strong>Learn</strong>: mais de <strong>220 módulos</strong>,
          distribuídos em 7 dimensões empresariais
        </>
      ),
      icon: AcademyIcon,
    },
    {
      text: (
        <>
          <strong>Drive</strong>: transposição do conhecimento para a prática,
          com <strong>metodologia exclusiva FDC</strong>
        </>
      ),
      icon: IdeaIcon,
    },
    {
      text: (
        <>
          <strong>Relatórios gerenciais</strong> para acompanhar o engajamento
          do time
        </>
      ),
      icon: GraphicIcon,
    },
    {
      text: (
        <>
          Desenvolvimento <strong>Blended Learning,</strong> com turmas de até
          30 pessoas
        </>
      ),
      icon: PeopleIcon,
    },
    {
      text: (
        <>
          Conteúdos exclusivos, seguindo o padrão de{" "}
          <strong>excelência da FDC</strong>
        </>
      ),
      icon: HatIcon,
    },
  ];

export default function Cards() {
  return (

    <article className="pt-14 relative overflow-x-clip  mx-auto">
          <div className="center relative z-10 max-md:px-8 lg:max-w-article">
            {/* //Heading */}
            <section className="heading border-white ">
              <h2 className="heading-text text-[40px] font-light  text-primary-blue">
                Sua empresa é única
              </h2>
              <p className="text-primary-black-blue font-bold leading-6 text-lg">
                {" "}
                É por isso que a jornada dela também tem de ser
              </p>
            </section>
          </div>
          {/* //card list */}
          <ul className="mx-auto pt-12 mb-48 max-md:pl-12 md:px-8 lg:max-w-article">
            <CustomSwiper
              modules={[Navigation, Pagination, Scrollbar, A11y, Grid]}
              slidesPerView={1.1}
              swiperName="custom"
              spaceBetween={24}
              breakpoints={{
                768: {
                  grid: { fill: 'row', rows: 3 },
                  slidesPerView: 2,
                },

              }}
            >
              <SwiperSlide>
                <li className="basis-1/3 flex ">
                  <section className="flex flex-col gap-2 justify-center text-primary-gray-dark leading-[22.4px]">
                    <p className="mb-2">
                      Avaliamos as <strong>lacunas do seu negócio</strong> para
                      sugerir os conteúdos que precisam ser trabalhados e isso faz
                      toda a diferença.
                    </p>
                    <p>
                      Seu time ainda pode adicionar módulos de interesse de acordo
                      com a cultura e as necessidades pontuais da organização,
                      formando uma <strong> grade curricular flexível.</strong>
                    </p>
                  </section>
                </li>
              </SwiperSlide>
              {/* //cards */}
              {list.map((item, index) => (
                <SwiperSlide>
                  <li className="basis-1/3 h-full" key={index}>
                    <Card Icon={item.icon}>{item.text}</Card>
                  </li>
                </SwiperSlide>
              ))}

            </CustomSwiper>
          </ul>
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2">
            <FDC className="h-[634px] text-secondary-gray-medium z-1" />
          </div>
          <div className="relative max-sm:pt-48">
            <div>
              <img
                src={LeftImage.src}
                alt=""
                className="absolute right-1/2 max-md:right-1/4 max-sm:left-1/4 max-sm:bottom-1/3 z-50 -translate-x-1/3 opacity-90 -bottom-1/3"
              />
              <img src={CenterImage.src} alt="" className="mx-auto " />
              <img
                src={RightImage.src}
                alt=""
                className="absolute left-1/2 translate-x-8 opacity-90 max-sm:top-1/4 max-sm:-left-5 z-10 -top-24"
              />
            </div>
            <div className="absolute bottom-0 w-full h-full">
              <AnimatedCanvas pointColor="rgba(42,159,188,0.75)" lineColor="rgba(42,159,188,0.75)" pointQuantity="10" connectDistance="600" />
            </div>
          </div>
        </article>
    )
}
