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
    <article className="bg-primary-black-blue relative text-white max-md:px-8 overflow-hidden ">
          <div className="max-w-[1366px] center flex max-lg:flex-col pt-16 xl:gap-[107px] max-xl:px-6 pl-16 pr-6 text-3xl">
            <section className="leading-heading text-heading z-10">
              <h1 className="font-black font-nexaSlab uppercase">
                Corporate Learn & Drive: Sua academia de gestão
              </h1>
              <h2 className="font-nexaSlab font-light">
                Para empresas que querem transformar gaps em oportunidades
              </h2>
              <div className="text-lg leading-[25.2px] pt-6">
                <p>
                  Descubra os gaps do seu negócio com o apoio da FDC e crie
                  trilhas de desenvolvimento específicas para a sua empresa. Com
                  o programa Corporate Learn & Drive, seu time inicia a jornada
                  para o futuro com a melhor escola de negócios da América
                  Latina, cobrindo as principais dimensões necessárias para a
                  evolução dos negócios - é uma verdadeira academia de gestão à
                  sua disposição. A excelência educacional de sempre, em um
                  formato que você nunca viu.
                </p>
              </div>
              <section className="relative text-2xl leading-paragraph mx-8 my-[60px] max-lg:hidden">
                <p className="before:content-[''] before:absolute before:w-1 before:h-full  before:-left-8 pb-6  before:bg-terciary-orange">
                  Cadastre-se e faça a{" "}
                  <strong>avaliação de maturidade</strong> da sua empresa <strong>gratuitamente.</strong>
                </p>
                <Button theme="secondary">Quero começar agora</Button>
              </section>
            </section>
            <figure className="shrink-0 z-10 max-w-xl self-center">
              <img src={KV.src} alt="" className="" />
            </figure>
            <section className="relative text-2xl leading-paragraph mx-8 my-[60px] lg:hidden">
              <p className="before:content-[''] before:absolute before:w-1 before:h-full  before:-left-8 pb-6  before:bg-terciary-orange">
                Cadastre-se e faça a{" "}
                <strong>avaliação de maturidade</strong> da sua empresa <strong>gratuitamente.</strong>
              </p>
              <Button theme="secondary">Quero começar agora</Button>
            </section>
          </div>
          <div className="w-full h-full absolute bottom-0">
            <AnimatedCanvas pointColor="rgba(42,159,188,0.75)" lineColor="rgba(42,159,188,0.75)" />
          </div>
          <section className="pb-44 animate-bounce max-lg:hidden w-full">
            <button className="w-6 mx-auto block">
              <NextIcon className="text-terciary-orange rotate-90" />
            </button>
          </section>
          <section className="absolute bottom-0 w-full">
            <BottomFigure className="" />
          </section>
        </article>
  )
}
