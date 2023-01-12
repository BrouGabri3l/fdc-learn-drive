import { PropsWithChildren, useState } from "react";
import { DownArrow } from "./icons";

export interface FaqCardProps {
    title: String,
}

export default function FaqCard(props: PropsWithChildren<FaqCardProps>) {
    const { title, children } = props
    const [isOpen, setIsOpen] = useState(false)
    const handleOpen = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <div className="card-faq">
                <button className="btn-faq" onClick={handleOpen}>
                    <h3 className="text-primary-gray-dark leading-paragraph">{title}</h3>
                    <DownArrow className={`h-8 ${isOpen && "rotate-180"} text-primary-blue flex-shrink-0`} />
                </button>
                <span className={`${!isOpen ? "hidden" : ""} inline-block max-w-xl text-primary-gray-dark`}>
                    {children}
                </span>
            </div>

        </>
    )
}