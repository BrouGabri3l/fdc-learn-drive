import React, { PropsWithChildren } from 'react'
import { A11y, Grid, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperProps } from 'swiper/react'
import { SwiperEvents, SwiperModule, SwiperOptions } from 'swiper/types'
interface CustomSwiperProps extends SwiperProps {
    swiperName: string;
}
export default function CustomSwiper({ children, swiperName, ...props }: PropsWithChildren<CustomSwiperProps>) {
    return (
        <Swiper {...props}
            autoHeight={false}
            pagination={{
                bulletClass: `swiper-bullet-${swiperName}`,
                bulletActiveClass: `swiper-bullet-${swiperName}-active`,
                el:`.swiper-${swiperName}`
            }}>
            {children}
            <div className={`swiper-${swiperName}`}></div>
        </Swiper>   
    )
}
