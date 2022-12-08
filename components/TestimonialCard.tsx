import { QuoteIcon } from '../components/icons'
function TestimonialCard() {
    return (
        <article className="p-8 border-2 border-secondary-gray-medium before:block  before:border-2 before:border-terciary-orange before:w-full ">
            <section className="py-8 text-center relative">
                
                <p className='relative'>
                <QuoteIcon className="w-10 absolute -top-3 left-3 -z-10 text-secondary-gray-medium"/>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum facilis magni inventore consequuntur necessitatibus sunt. Obcaecati culpa quis earum quisquam quam. At vitae et error iusto explicabo officiis amet velit?</p>
            </section>
            <span><strong>Lorem Ipsum</strong><br />Vp de linhas de productos Latam</span>
        </article>
    )
}
export default TestimonialCard