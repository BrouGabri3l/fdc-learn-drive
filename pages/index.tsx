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
import { useState } from "react";
import FaqCard from "../components/FaqCard";
import FDC from "/public/FDC.svg";
import RightImage from "/public/RightImage.png";
import CenterImage from "/public/CenterImage.png";
import LeftImage from "/public/LeftImage.png";
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
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
        {/* Seção dos cards */}
        <article className="pt-14 relative overflow-hidden">
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
              className="absolute right-1/2 -translate-x-1/3 -bottom-1/3"
            />
            <img src={CenterImage.src} alt="" className="mx-auto" />
            <img
              src={RightImage.src}
              alt=""
              className="absolute left-1/2 translate-x-8 -top-24"
            />
          </div>
          {/* //FDC background */}
          <span className="absolute bottom-1 left-1/2 -translate-x-1/2">
            <FDC className="h-[634px] text-secondary-gray-medium z-1" />
          </span>
        </article>
        {/*  */}
        <article className="bg-primary-gray-dark pt-44 text-white">
          <section className="pt-12 pb-10 border-y-8 text-center font-nexaSlab max-w-lg lg:max-w-3xl mx-auto border-[#686366]">
            <h2 className="pb-2 text-4xl text-primary-blue uppercase">
              Sobre a fdc
            </h2>
          </section>
          <div className="mx-auto max-w-lg">
            <p className="py-12">
              A FDC impulsiona o desenvolvimento das organizações com uma
              abordagem focada em resultados, inclusão e sustentabilidade para
              os negócios. Olhamos para a real necessidade, bem como para os
              desafios e objetivos das organizações e de seus profissionais,
              contribuindo para o aprimoramento das competências gerenciais e
              individuais e a melhoria constante da governança, gestão e dos
              resultados.
            </p>
            <span>
              *Segundo o ranking de Educação Executiva 2022 do Financial Times.
            </span>
            <Button
              theme="outline"
              className="text-white outline-white mx-auto mt-10 my-12"
            >
              Conheça Mais
            </Button>
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
        <TestimonialCard data={testimonial}></TestimonialCard>
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
      <footer></footer>
    </div>
  );
}
