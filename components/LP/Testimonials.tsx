import React, { useRef } from 'react'
import TestimonialCard from "../TestimonialCard";
import CustomSwiper from '../CustomSwiper';
import { SwiperSlide } from 'swiper/react';
import FDC from '/public/FDC.svg';
import { DownArrow } from '../icons';

export default function Testimonials() {
    
    const testimonial = {
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo reiciendis quasi, fugit velit deserunt ex aut nesciunt tempore odit et asperiores non illum nam tempora odio rerum sapiente amet unde.",
        author: "Lorem Ipsum",
        role: "vp de blá blá blá",
    };
    const navPrevButton = useRef<HTMLButtonElement>(null);
    const navNextButton = useRef<HTMLButtonElement>(null);
    return (
        <section className="py-28 bg-white relative overflow-hidden max-md:px-8">
            <div className="relative z-10 ">
                <section className="heading border-secondary-gray-medium max-w-article center">
                    <h2 className="heading-text text-primary-blue">
                        Sua empresa em boa companhia
                    </h2>
                </section>
                <section className="mx-auto max-w-lg py-12 text-primary-gray-dark">
                    <p>
                        Confira os depoimentos de executivos e colaboradores que já
                        participaram de programas empresariais da FDC
                    </p>
                </section>
                <section className="center px-8 relative">
                    <CustomSwiper
                        spaceBetween={16}
                        swiperName="custom"
                        slidesPerView={1}
                        pagination
                        breakpoints={{
                            1024: {
                                width: 1024,
                                slidesPerView: 3
                            },
                            768: {
                                width: 768,
                                slidesPerView: 2,
                            }
                        }}
                        navigation={{
                            prevEl: navPrevButton.current,
                            nextEl: navNextButton.current,
                        }}

                        onBeforeInit={(swiper) => {
                            (swiper.params.navigation.prevEl = navPrevButton.current);
                            (swiper.params.navigation.nextEl = navNextButton.current);
                        }}
                    >
                        <SwiperSlide >
                            <TestimonialCard data={testimonial}></TestimonialCard>
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialCard data={testimonial}></TestimonialCard>
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialCard data={testimonial}></TestimonialCard>
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialCard data={testimonial}></TestimonialCard>
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialCard data={testimonial}></TestimonialCard>
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialCard data={testimonial}></TestimonialCard>
                        </SwiperSlide>
                    </CustomSwiper>
                    <div className="text-primary-blue max-md:hidden">
                        <button
                            className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-1/4 rotate-90"
                            ref={navPrevButton}
                        >
                            <DownArrow className="h-8" />
                        </button>
                        <button
                            ref={navNextButton}
                            className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/4 -rotate-90"
                        >
                            <DownArrow className="h-8" />
                        </button>
                    </div>
                </section>
            </div>
            <div className="absolute -bottom-1/2 left-1/2 -translate-x-1/2">
                <FDC className="h-[634px] text-secondary-gray-medium z-1" />
            </div>
        </section>
    )
}
