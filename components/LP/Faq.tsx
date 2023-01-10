import React from 'react'
import FaqCard from '../FaqCard';
export default function Faq() {
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
        <section className="flex center justify-between center py-32 max-lg:flex-col gap-8 max-lg:items-center max-md:px-8">
        <article className="heading flex-1 w-1/2 lg:max-w-xs border-white self-start  ">
          <h2 className="pb-2 text-4xl text-primary-blue uppercase">FAQ</h2>
        </article>
        <div className="px-8">
          <ol className="list-decimal flex flex-col marker:text-terciary-orange marker:font-bold divide-y divide-terciary-gray-blue divide-solid">
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
      </section>
    
  )
}
