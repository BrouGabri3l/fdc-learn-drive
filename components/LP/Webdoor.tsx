import React from 'react'
import AnimatedCanvas from '../AnimatedCanvas'
import Button from '../Button'
import KV from "/public/KV.png";
import {
  NextIcon,
  BottomFigure
} from "../icons";

export default function Webdoor() {
  return (
    <section className="text-white overflow-hidden">
      <div className='bg-primary-black-blue relative md:px-8'>
        <div className="max-w-[1366px] center flex max-lg:flex-col items-center lg-items-start gap-3 pt-8 sm:pt-16 xl:gap-[104px] max-xl:px-6 pl-16 pr-6 text-3xl">
          <article className="sm:leading-heading leading-paragraph text-2xl sm:text-heading  z-10">
            <h1 className="font-black font-nexaSlab uppercase pr-14">
              Corporate Learn & Drive: Sua academia de gestão
            </h1>
            <h2 className="font-nexaSlab font-light">
              Para empresas que querem transformar gaps em oportunidades
            </h2>
            <div className="sm:text-lg text-base leading-[22.04px] sm:leading-[25.2px] pt-4">
              <p>
                Descubra os gaps do seu negócio com o apoio da FDC e crie
                <strong> trilhas de desenvolvimento específicas</strong> para a sua empresa. Com
                o programa Corporate Learn & Drive, seu time inicia a jornada
                para o futuro com a <strong>
                  melhor escola de negócios da América
                  Latina
                </strong>, cobrindo as principais dimensões necessárias para a
                evolução dos negócios - é uma verdadeira academia de gestão à
                sua disposição. <strong>
                  A excelência educacional de sempre, em um
                  formato que você nunca viu.
                </strong>
              </p>
            </div>
            <article className="relative text-2xl leading-paragraph mx-8 sm:my-[60px] max-lg:hidden">
              <p className="before:content-[''] before:absolute before:w-1 before:h-full  before:-left-8 pb-6  before:bg-terciary-orange">
                Cadastre-se e faça a{" "}
                <strong>avaliação de maturidade</strong> da sua empresa <strong>gratuitamente.</strong>
              </p>
              <Button theme="secondary">Quero começar agora</Button>
            </article>
          </article>
          <figure className="shrink-0 z-10 max-w-xl pb-40 ">
            <img src={KV.src} alt="" className="" />
          </figure>
        </div>
        <div className="w-full h-full absolute bottom-0">
          <AnimatedCanvas pointColor="rgba(42,159,188,0.75)" lineColor="rgba(42,159,188,0.75)" />
        </div>
        <article className="pb-32 max-lg:hidden w-full">
          <button className="w-6 h-6 mx-auto block animate-bounce ">
            <NextIcon className="text-terciary-orange rotate-90 absolute h-full -translate-y-1/2" />
          </button>
        </article>
        <article className="absolute bottom-0 md:min-w-full max-md:translate-x-11 right-0 max-md:-right-1/4 min-w-[1390px]">
          <BottomFigure className="" />
        </article>
      </div>
      <article className="relative text-base leading-[22.4px] mx-8 pl-4 lg:hidden -mt-20   md:mt-10 text-primary-black-blue">
        <p className="before:content-[''] before:absolute before:w-1 before:h-full before:-left-8 before:mx-6 pb-6 before:bg-terciary-orange">
          Cadastre-se e faça a{" "}
          <strong>avaliação de maturidade</strong> da sua empresa <strong>gratuitamente.</strong>
        </p>
        <Button theme="secondary" className="w-full">Quero começar agora</Button>
      </article>
    </section>
  )
}
