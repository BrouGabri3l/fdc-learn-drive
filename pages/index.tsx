import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Button from "../components/Button";
import {
  AcademyIcon,
  IdeaIcon,
  GraphicIcon,
  PeopleIcon,
  HatIcon,
  DownArrow,
} from "../components/icons";
import Header from "../components/Header";
import { Card } from "../components/Card";
import TestimonialCard, {
  TestimonialCardProps,
} from "../components/TestimonialCard";
import { useRef, useState } from "react";
import FaqCard from "../components/FaqCard";
import FDC from "/public/FDC.svg";
import RightImage from "/public/RightImage.png";
import CenterImage from "/public/CenterImage.png";
import LeftImage from "/public/LeftImage.png";
import EquisAccredited from '/public/EquisAccredited.png'
import FTImage from '/public/FT.png'
import MBA from '/public/MBA.png'
import KV from '/public/KV.png'
import Rectangle1 from '/public/Rectangle21.png'
import Rectangle2 from '/public/Rectangle22.png'
import Rectangle3 from '/public/Rectangle23.png'
import Message from '/public/Message.png'
import Linkedin from '/public/Linkedin.png'
import Instagram from '/public/Instagram.png'
import Youtube from '/public/Youtube.png'
import Facebook from '/public/Facebook.png'
import Twitter from '/public/Twitter.png'
import Spotify from '/public/Spotify.png'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Canvas from "../components/Canvas";

export default function Home() {
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
  const testimonial = {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo reiciendis quasi, fugit velit deserunt ex aut nesciunt tempore odit et asperiores non illum nam tempora odio rerum sapiente amet unde.",
    author: "Lorem Ipsum",
    role: "vp de blá blá blá",
  };
  const faq = {
    title:
      "Como participar do programa Corporate - Learn & Drive para empresas da FDC?",
    children: (
      <>
        <p>
          {" "}
          Para participar do programa, é necessário realizar o cadastro da sua
          empresa e responder à avaliação de maturidade criada por especialistas
          da Fundação Dom Cabral.
        </p>
        <p>
          {" "}
          Após concluí-lo, você receberá o raio-x completo da empresa, dividido
          em 7 dimensões, sendo elas: Liderança & Pessoas, Gestão Estratégica
          dos Negócios, Marketing & Vendas, Finanças, Governança & Compliance,
          Inovação & Transformação Digital e Gestão Estratégica de Supply - com
          uma sugestão de trilha de desenvolvimento elaborada pela FDC
          especialmente para sua organização.
        </p>
      </>
    ),
  };
  // const swiper = useSwiper();
  const navPrevButton = useRef<HTMLButtonElement>(null)
  const navNextButton = useRef<HTMLButtonElement>(null)
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
        <article className="bg-primary-black-blue text-white">
          <div className="center flex max-lg:flex-col py-16 gap-24 justify-around text-3xl">
            <div className="">
              <h1 className="font-black font-nexaSlab uppercase">Corporate Learn & Drive: Sua academia de gestão</h1>
              <h2 className="font-nexaSlab font-light">Para empresas que querem transformar gaps em oportunidades</h2>
              <section className="text-lg pt-6">
                <p>Descubra os gaps do seu negócio com o apoio da FDC e crie trilhas de desenvolvimento específicas para a sua empresa. Com o programa Corporate Learn & Drive, seu time inicia a jornada para o futuro com a melhor escola de negócios da América Latina, cobrindo as principais dimensões necessárias para a evolução dos negócios - é uma verdadeira academia de gestão à sua disposição. A excelência educacional de sempre, em um formato que você nunca viu.</p>
              </section>
              <div className="relative text-2xl mx-6 my-14">
                <p className="before:content-[''] before:absolute before:w-1 before:h-full  before:-left-6 pb-6  before:bg-terciary-orange">
                  Cadastre-se agora mesmo e faça a{" "}
                  <strong>avaliação de maturidade</strong> da sua empresa
                </p>
                <Button theme="secondary">Quero começar agora</Button>
              </div>
            </div>
            <div className="shrink-0 max-w-xl">
              <img src={KV.src} alt="" />
            </div>
          </div>
          {/* <Canvas></Canvas> */}
        </article>
        {/* Seção dos cards */}
        <article className="pt-14 relative overflow-x-clip ">
          <div className="center relative z-10 mb-48">
            {/* //Heading */}
            <article className="pt-12 pb-10 border-y-8 text-center font-nexaSlab max-w-lg lg:max-w-3xl mx-auto border-white">
              <h2 className="pb-2 text-4xl text-primary-blue uppercase">
                Sua empresa é única
              </h2>
              <p className="text-primary-black-blue font-bold">
                {" "}
                É por isso que a jornada dela também tem de ser
              </p>
            </article>
            {/* //card list */}
            <ul className="flex max-md:flex-col max-w-5xl flex-wrap justify-center gap-6 mx-auto pt-12 ">
              <li className="basis-1/3 flex">
                <section className="flex flex-col gap-2 justify-center text-primary-gray-dark">
                  <p>
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
              {/* //cards */}
              {list.map((item, index) => (
                <li className="basis-1/3" key={index}>
                  <Card Icon={item.icon}>{item.text}</Card>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative z-10">
            <img
              src={LeftImage.src}
              alt=""
              className="absolute right-1/2 -translate-x-1/3 opacity-90 -bottom-1/3"
            />
            <img src={CenterImage.src} alt="" className="mx-auto" />
            <img
              src={RightImage.src}
              alt=""
              className="absolute left-1/2 translate-x-8 opacity-90 -top-24"
            />
          </div>
          {/* //FDC background */}
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2">
            <FDC className="h-[634px] text-secondary-gray-medium z-1" />
          </div>
        </article>
        {/*  */}
        <article className="bg-primary-gray-dark relative pt-44 overflow-x-hidden -z-1 text-white">
          <div className="relative z-10">
            <section className="pt-12 pb-10 border-y-8 text-center font-nexaSlab max-w-lg lg:max-w-3xl mx-auto border-[#686366]">
              <h2 className="pb-2 text-4xl text-primary-blue uppercase">
                Sobre a fdc
              </h2>
            </section>
            <section className=" ">
              <div className="max-w-lg mx-auto">
                <p className="py-12">
                  A FDC impulsiona o desenvolvimento das organizações com uma
                  abordagem focada em resultados, inclusão e sustentabilidade para
                  os negócios. Olhamos para a real necessidade, bem como para os
                  desafios e objetivos das organizações e de seus profissionais,
                  contribuindo para o aprimoramento das competências gerenciais e
                  individuais e a melhoria constante da governança, gestão e dos
                  resultados.
                </p>
              </div>
              <section className="flex flex-col gap-y-8 max-w-3xl mx-auto">
                <div className="flex gap-x-6 ">
                  <p className="flex-grow "><strong className="text-2xl px-4 py-2 bg-terciary-orange block font-nexaSlab">+1 Milhão</strong><br />de executivos capacitados em programas</p>
                  <p className="flex-grow"><strong className="text-2xl px-4 py-2 bg-terciary-orange block font-nexaSlab">+700 </strong><br />docentes em notoriedade nacional e internacional</p>
                  <p className="flex-grow"><strong className="text-2xl px-4 py-2 bg-terciary-orange block font-nexaSlab">+900</strong><br />Empresas cliente atendidas por ano</p>
                  <p className="flex-grow"><strong className="text-2xl px-4 py-2 bg-terciary-orange block font-nexaSlab">45 Anos</strong><br />de história de sucesso e liderança</p>
                </div>
                <div className="flex gap-x-6">
                  <p className="flex-grow"><strong className="text-2xl px-4 py-2 bg-terciary-orange block font-nexaSlab">+1 Milhão</strong><br />de executivos capacitados em programas</p>
                  <p className="flex-grow"><strong className="text-2xl px-4 py-2 bg-terciary-orange block font-nexaSlab">+700 </strong><br />docentes em notoriedade nacional e internacional</p>
                  <p className="flex-grow"><strong className="text-2xl px-4 py-2 bg-terciary-orange block font-nexaSlab">+900</strong><br />Empresas cliente atendidas por ano</p>

                </div>
              </section>
              <div className="mx-auto max-w-lg pt-9">
                <span>
                  *Segundo o ranking de Educação Executiva 2022 do Financial Times.
                </span>
              </div>
              <Button
                theme="outline"
                className="text-white outline-white mx-auto mt-10 my-12"
              >
                Conheça Mais
              </Button>
            </section>
            <section className="flex gap-16 items-stretch mx-auto max-w-3xl  px-12 py-14 mb-20  bg-secondary-gray-medium text-primary-gray-dark">
              <div className="flex flex-1 items-end">
                <h3 className="before:content-['']  before:absolute before:w-1/2 before:h-2 before:-top-4 before:bg-terciary-orange relative font-nexaSlab  font">Ranking e Certificações</h3>
              </div>
              <div className="flex gap-6 items-center justify-around">
                <img src={FTImage.src} alt="" className="h-14" />
                <img src={MBA.src} alt="" className="h-10" />
                <img src={EquisAccredited.src} alt="" className="h-16" />
              </div>
            </section>
            <div className="flex ">
              <img src={Rectangle1.src} alt="" className="flex-1" />
              <img src={Rectangle2.src} alt="" className="flex-1" />
              <img src={Rectangle3.src} alt="" className="flex-1" />
            </div>
          </div>
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2">
            <FDC className="h-[634px] text-[#686366] z-1" />
          </div>
        </article>
        <article className="py-28 bg-white relative overflow-hidden">
          <div className="relative z-10">
            <section className="pt-12 pb-10 border-y-8 text-center font-nexaSlab max-w-lg lg:max-w-3xl mx-auto border-secondary-gray-medium">
              <h2 className="pb-2 text-4xl text-primary-blue uppercase">
                Sua empresa em boa companhia
              </h2>
            </section>
            <section className="mx-auto max-w-lg py-12 text-primary-gray-dark">
              <p>Confira os depoimentos de executivos e colaboradores que já participaram de programas empresariais da FDC</p>
            </section>
            <section className="center px-8 relative" >
              <Swiper
                modules={[Navigation, Scrollbar, A11y]}
                spaceBetween={16}
                slidesPerView={3}
                navigation={{
                  prevEl: navPrevButton.current,
                  nextEl: navNextButton.current,
                }}
                onBeforeInit={(swiper) => {
                  swiper.params.navigation.prevEl = navPrevButton.current,
                    swiper.params.navigation.nextEl = navNextButton.current
                }}
              >
                <SwiperSlide className="max-w-sm"><TestimonialCard data={testimonial}></TestimonialCard></SwiperSlide>
                <SwiperSlide className="max-w-sm"><TestimonialCard data={testimonial}></TestimonialCard></SwiperSlide>
                <SwiperSlide className="max-w-sm"><TestimonialCard data={testimonial}></TestimonialCard></SwiperSlide>
                <SwiperSlide className="max-w-sm"><TestimonialCard data={testimonial}></TestimonialCard></SwiperSlide>
                <SwiperSlide className="max-w-sm"><TestimonialCard data={testimonial}></TestimonialCard></SwiperSlide>
                <SwiperSlide className="max-w-sm"><TestimonialCard data={testimonial}></TestimonialCard></SwiperSlide>
              </Swiper>
              <div className="text-primary-blue">
                <button className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-1/2 rotate-90" ref={navPrevButton} ><DownArrow className="h-8" /></button>
                <button ref={navNextButton} className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2 -rotate-90"><DownArrow className="h-8" /></button>
              </div>
            </section>
          </div>
          <div className="absolute -bottom-1/2 left-1/2 -translate-x-1/2">
            <FDC className="h-[634px] text-secondary-gray-medium z-1" />
          </div>
        </article>
        <article className="flex center justify-around center py-32">
          <section className="pt-12 pb-10 border-y-8 text-center font-nexaSlab flex-1 max-w-xs border-white self-start  ">
            <h2 className="pb-2 text-4xl text-primary-blue uppercase">FAQ</h2>
          </section>
          <div>
            <ol className="list-decimal flex flex-col  marker:text-terciary-orange marker:font-bold divide-y divide-terciary-gray-blue divide-solid">
              <li className="pt-6">
                <FaqCard title={faq.title}>{faq.children}</FaqCard>
              </li>
              <li className="pt-6">
                <FaqCard title={faq.title}>{faq.children}</FaqCard>
              </li>
              <li className="pt-6">
                <FaqCard title={faq.title}>{faq.children}</FaqCard>
              </li>
              <li className="pt-6">
                <FaqCard title={faq.title}>{faq.children}</FaqCard>
              </li>
              <li className="pt-6">
                <FaqCard title={faq.title}>{faq.children}</FaqCard>
              </li>
            </ol>
          </div>
        </article>
      </div>
      <article className="bg-primary-black-blue  text-white">
        <section className="center max-w-lg py-32">
          <h2 className="font-nexaSlab text-2xl pb-8">
            Transforme os gaps do seu negócio em oportunidades com a FDC
          </h2>
          <div className="font-nexaSlab relative">
            <p className="before:content-[''] before:absolute before:w-1 before:h-full  before:-left-6 pb-6  before:bg-terciary-orange">
              Cadastre-se agora mesmo e faça a{" "}
              <strong>avaliação de maturidade</strong> da sua empresa
            </p>
            <Button theme="secondary">Quero começar agora</Button>
          </div>
        </section>
      </article>
      {/* <footer className="bg-white">
        <article className="flex  justify-around py-16 items-stretch  divide-x-2 divide-red-500">
          <section className="flex flex-col text-primary-gray-dark gap-4">
            <h4 className="font-black font-nexaSlab">Fale Conosco</h4>
            <a href="tel:0800 941 9200">0800 941 9200</a>
            <a href="mailto:atendimento@fdc.org.br">atendimento@fdc.org.br</a>
          </section>
          <div className="flex gap-4  justify-around py-8">
            <img src={Message.src} alt="" />
            <img src={Linkedin.src} alt="" />
            <img src={Instagram.src} alt="" />
            <img src={Youtube.src} alt="" />
            <img src={Facebook.src} alt="" />
            <img src={Twitter.src} alt="" />
            <img src={Spotify.src} alt="" />
          </div>
          <div className="flex gap-6 items-center">
            <h3 className="font-nexaSlab text-primary-gray-dark font-black max-w-min">Ranking e Certificações</h3>
            <div className="flex gap-6 items-center justify-around">
              <img src={FTImage.src} alt="" className="h-14" />
              <img src={MBA.src} alt="" className="h-10" />
              <img src={EquisAccredited.src} alt="" className="h-16" />
            </div>
          </div>
        </article>
      </footer> */}
    </div>
  );
}