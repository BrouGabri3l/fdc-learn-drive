import React from 'react'
import CustomSwiper from '../CustomSwiper'
import InfoCard from '../InfoCard'
import Button from '../Button'
import {SwiperSlide} from "swiper/react";
import EquisAccredited from "/public/EquisAccredited.png";
import FTImage from "/public/FT.png";
import MBA from "/public/MBA.png";
import Rectangle1 from "/public/Rectangle21.png";
import Rectangle2 from "/public/Rectangle22.png";
import Rectangle3 from "/public/Rectangle23.png";
import FDC from '/public/FDC.svg'
export default function About() {
  return (
    <section className="bg-primary-gray-dark relative pt-44 overflow-x-hidden -z-1 text-white ">
          <div className="relative z-10 max-md:px-8 lg:max-w-article center">
            <article className="heading border-[#686366]">
              <h2 className="heading-text text-primary-blue uppercase font-light">
                Sobre a fdc
              </h2>
            </article>
            <article className="">
              <div className="max-w-lg mx-auto">
                <p className="py-12">
                  A FDC impulsiona o desenvolvimento das organizações com uma
                  abordagem focada em resultados, inclusão e sustentabilidade
                  para os negócios. Olhamos para a real necessidade, bem como
                  para os desafios e objetivos das organizações e de seus
                  profissionais, contribuindo para o aprimoramento das
                  competências gerenciais e individuais e a melhoria constante
                  da governança, gestão e dos resultados.
                </p>
              </div>
              <article className="flex flex-col gap-y-8 max-w-3xl mx-auto ">
                <div className="flex gap-6 max-lg:flex-col-reverse max-lg:px-8">
                  <InfoCard strongColor="bg-terciary-orange" className="flex-grow" strongText="45 Anos">de história de sucesso e liderança</InfoCard>
                  <InfoCard strongColor="bg-terciary-orange" className="flex-grow" strongText="1 Milhão">de executivos capacitados em programas</InfoCard>
                  <InfoCard strongColor="bg-terciary-orange" className="flex-grow" strongText="700">docentes com notoriedade nacional e internacional</InfoCard>
                  <InfoCard strongColor="bg-terciary-orange" className="flex-grow" strongText="900">empresas cliente
                    atendidas por ano</InfoCard>
                </div>
                <div className="flex gap-6 max-lg:flex-col max-lg:px-8">
                  <InfoCard strongColor="bg-terciary-orange" className="" strongText="+37 mil">executivos participantes por ano</InfoCard>
                  <InfoCard strongColor="bg-terciary-orange" className="" strongText="1ª em Educação">Executiva na América Latina há 15 anos consecutivos*</InfoCard>
                  <InfoCard strongColor="bg-terciary-orange" className="" strongText="9ª melhor">escola de negócios do mundo*</InfoCard>
                </div>
              </article>
              <div className="mx-auto max-w-lg pt-9">
                <span>
                  *Segundo o ranking de Educação Executiva 2022 do Financial
                  Times.
                </span>
              </div>
              <Button
                theme="outline"
                className="text-white outline-white mx-auto mt-10 my-12"
              >
                Conheça Mais
              </Button>
            </article>
            <article className="flex gap-16 items-stretch max-lg:flex-col mx-auto max-w-3xl  px-12 py-14 mb-20  bg-white text-primary-gray-dark">
              <div className="flex flex-1 items-end self-center">
                <h3 className="before:content-['']  before:absolute before:w-1/2 before:h-2 before:-top-4 before:bg-terciary-orange relative font-nexaSlab  font">
                  Ranking e Certificações
                </h3>
              </div>
              <div className="flex gap-6 items-center max-lg:flex-col justify-around">
                <img src={FTImage.src} alt="" className="h-14" />
                <img src={MBA.src} alt="" className="h-10" />
                <img src={EquisAccredited.src} alt="" className="h-16" />
              </div>
            </article>
          </div>
          <CustomSwiper
            spaceBetween={0}
            swiperName="custom-inside"
            pagination
            breakpoints={{
              768: {
                spaceBetween: 0,
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              <div className="flex-1">
                <img src={Rectangle1.src} alt="" className="w-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Rectangle2.src} alt="" className="w-full" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Rectangle3.src} alt="" className="w-full" />
            </SwiperSlide>
          </CustomSwiper>

          <div className="absolute bottom-1 left-1/2">
            <FDC className="h-[634px] text-[#686366] z-1" />
          </div>
        </section>
  )
}
