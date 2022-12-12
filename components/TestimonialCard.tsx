import { QuoteIcon } from '../components/icons'
export interface TestimonialCardProps {
    data: {
        text: String,
        author: String,
        role: String
    }
}
function TestimonialCard(props: TestimonialCardProps) {
    const { data } = props
    return (
        <article className="p-8 border-2 border-secondary-gray-medium before:block  before:border-2 before:border-terciary-orange before:w-full ">
            <section className="py-8 text-center relative">

                <p className='relative'>
                    <QuoteIcon className="w-10 absolute -top-3 left-3 -z-10 text-secondary-gray-medium" />
                    {data.text}</p>
            </section>
            <span><strong>{data.author}</strong><br />{data.role}</span>
        </article>
    )
}
export default TestimonialCard