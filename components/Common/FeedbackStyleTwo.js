import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

const FeedbackStyleTwo = () => {
    return (
        <>
            <div className="feedback-area ptb-80">
                <div className="container">
                    <div className="section-title">
                        <h2>What users Saying</h2>
                        <div className="bar"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className="testimonials-slides-box">
                        <Swiper
                            pagination={{
                                clickable: true,
                            }}
                            autoplay={{
                                delay: 6000,
                                pauseOnMouseEnter: true,
                            }}
                            modules={[Pagination, Autoplay]}
                            className="testimonials-slides"
                        >
                            <SwiperSlide>
                                <div className="single-feedback-item">
                                    <div className="client-info align-items-center">
                                        <div className="image">
                                            <img 
                                                src="/images/client-image/client1.jpg"
                                                alt="image"
                                            />
                                        </div>

                                        <div className="title">
                                            <h3>Steve Lucy</h3>
                                            <span>Lead Developer at Envato</span>
                                        </div>
                                    </div>

                                    <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="single-feedback-item">
                                    <div className="client-info align-items-center">
                                        <div className="image">
                                            <img 
                                                src="/images/client-image/client2.jpg"
                                                alt="image"
                                            />
                                        </div>

                                        <div className="title">
                                            <h3>David Luiz</h3>
                                            <span>Lead Developer at Envato</span>
                                        </div>
                                    </div>

                                    <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="single-feedback-item">
                                    <div className="client-info align-items-center">
                                        <div className="image">
                                            <img 
                                                src="/images/client-image/client3.jpg"
                                                alt="image"
                                            />
                                        </div>

                                        <div className="title">
                                            <h3>Marta Smith</h3>
                                            <span>Lead Developer at Envato</span>
                                        </div>
                                    </div>

                                    <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>

                {/* Shape Images */}
                <div className="shape1">
                    <img src="/images/shape1.png" alt="shape" />
                </div>   
            </div>
        </>
    );
}

export default FeedbackStyleTwo;
