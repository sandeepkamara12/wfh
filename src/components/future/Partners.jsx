import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import { partners } from "../../const/constant";

const Partners = () => {

    return (
        <div className="slider-wrapper h-screen bg-navy/10">
            <div className="h-full w-full  flex flex-wrap items-center justify-center flex-col">

                <div className="text-center max-w-xl mx-auto relative z-20">
                    <h2 className="text-3xl text-black md:text-4xl lg:text-5xl mb-6">Our Partners</h2>
                    <p className="mb-4 text-black">We collaborate with trusted partners who share our vision and commitment to excellence. Their expertise and support help us deliver high-quality solutions and create lasting value for our customers.</p>
                </div>
                <Swiper
                    modules={[Navigation, Autoplay]}
                    loop={true}
                    centeredSlides={true}
                    slidesPerView="11"
                    spaceBetween={10}
                    allowTouchMove={false}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    speed={4000}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }}

                    className="swiper-container"
                >
                    {partners.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="text-sm font-medium relative flex flex-wrap items-center justify-center aspect-square">
                                <img src={item.img} alt="" className="w-40 h-auto" />
                                <p>{item.title}</p>
                                <p>{item.location}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Partners