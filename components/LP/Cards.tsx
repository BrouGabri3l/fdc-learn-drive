import React from 'react'
import CustomSwiper from '../CustomSwiper'
import AnimatedCanvas from '../AnimatedCanvas'
import { Card } from '../Card'
import FDC from "public/FDC.svg";
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
import { SwiperSlide } from "swiper/react";
export default function Cards() {
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

  return (
    <section className="pt-16 lg:pt-14 relative overflow-x-clip  mx-auto">
      <div className="center px-6 relative z-10 md:px-8 lg:max-w-article">
        {/* //Heading */}
        <article className="heading border-white ">
          <h2 className="heading-text font-light  text-primary-blue">
            Sua empresa é única
          </h2>
          <p className="text-primary-black-blue  font-bold leading-6 text-base px-2 pt-1 sm:text-lg">
            {" "}
            É por isso que a jornada dela também tem de ser
          </p>
        </article>
      </div>
      {/* //card list */}
      <ul className="mx-auto pt-10 mb-36 pl-6 md:px-8 lg:max-w-article ">
        <div className="block md:hidden pb-10 pr-6">
          <li>
            <article className="flex flex-col gap-2 justify-center text-primary-gray-dark leading-[22.4px]">
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
            </article>
          </li>
        </div>
        <div className='pl-6'>
          <CustomSwiper
            slidesPerView={1.1}
            swiperName="custom"
            spaceBetween={24}
            createElements={true}
            breakpoints={{
              768: {
                grid: { fill: 'row', rows: 3 },
                slidesPerView: 2,
              },
            }}
          >

            {/* //cards */}
            <SwiperSlide className="hidden md:block">
              <li >
                <article className="flex flex-col gap-2 justify-center text-primary-gray-dark leading-[22.4px]">
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
                </article>
              </li>
            </SwiperSlide>
            {list.map((item, index) => (
              <SwiperSlide>
                <li className="h-full" key={index}>
                  <Card Icon={item.icon}>{item.text}</Card>
                </li>
              </SwiperSlide>
            ))}

          </CustomSwiper>
        </div>
      </ul>
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2">
        <FDC className="h-[634px] text-secondary-gray-medium z-1" />
      </div>
      <div className="relative pt-44 md:pt-0">
        <div>
          <img
            src={LeftImage.src}
            alt=""
            className="absolute  sm:right-1/2  bottom-1/4 z-50 lg:-translate-x-1/3 max-w-sm md:max-w-full opacity-90 sm:-bottom-1/3"
          />
          <img src={CenterImage.src} alt="" className="mx-auto " />
          <img
            src={RightImage.src}
            alt=""
            className="absolute sm:left-1/2 -translate-x-1/4 opacity-90 bottom-1/4 left-1/3 z-10 sm:-top-24"
          />
        </div>
        <div className="absolute bottom-0 w-full h-full">
          <AnimatedCanvas pointColor="rgba(42,159,188,0.75)" lineColor="rgba(42,159,188,0.75)" pointQuantity="10" connectDistance="600" />
        </div>
      </div>
    </section >
  )
}
