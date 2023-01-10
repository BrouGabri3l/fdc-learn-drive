import React, { PropsWithChildren } from 'react'
import { Swiper, SwiperProps } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Grid } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"
import "swiper/css/scrollbar";
import "swiper/css/grid";

interface CustomSwiperProps extends SwiperProps {
    swiperName: string;
}
export default function CustomSwiper({ children, swiperName, ...props }: PropsWithChildren<CustomSwiperProps>) {
    return (
        <Swiper {...props}
            modules={[Navigation, Pagination, Scrollbar, A11y, Grid]}
            autoHeight={false}
            pagination={{
                bulletClass: `swiper-bullet-${swiperName}`,
                bulletActiveClass: `swiper-bullet-${swiperName}-active`,
                el: `.swiper-${swiperName}`
            }}>
            {children}
            <div className={`swiper-${swiperName}`}></div>
        </Swiper>
    )
}
