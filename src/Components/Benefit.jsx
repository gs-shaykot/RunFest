{/* Left Section - Images, in mobile make the image bottom of the content*/ }
import React from "react";
import { Slide, Zoom } from "react-awesome-reveal";

const Benefit = () => {
    return (
        <div className="w-full">
            <div className="container mx-auto py-10 my-0 md:my-10"> {/* px-4 md:px-8 lg:px-16  */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Left Section - Images, in mobile make the image bottom of the content*/}
                    <Slide direction="left">
                        <div className="order-last md:order-first mt-8 md:mt-0 grid grid-cols-2 gap-4">
                            <div
                                className="shadow-lg col-span-2 bg-[url('https://i.ibb.co.com/3sGqj6x/312.jpg')] bg-no-repeat bg-cover bg-center h-96 w-full relative rounded-md  "
                            >
                                <img className="shadow-lg absolute -top-10 right-0 w-52  h-40 border-4 border-white rounded-md" src="https://i.ibb.co.com/LZTh9NR/black-man-doing-stretching-running-urban-background-young-male-exercising-listening-to-music-headpho.webp" alt="" />
                            </div>
                        </div>
                    </Slide>
                    {/* Right Section - Text Content */}
                    <Slide direction="right">
                        <div className="text-center md:text-left">
                            <h5 className="uppercase text-primary font-bold text-base tracking-wide">
                                Why You Should Join Us
                            </h5>
                            <h2 className="text-4xl md:text-5xl font-bebas font-bold my-4 leading-tight">
                                Run unintentionally, and feel the difference
                            </h2>
                            <p className="text-gray-600 mb-6">
                                Join our marathon website to connect with runners, track events, get training tips, and explore a community passionate about health, fitness, and running goals.
                            </p>
                            <div className="grid grid-cols-1 text-start md:grid-cols-2 gap-4">
                                <div className="flex items-center md:items-start gap-3">
                                    <div className="text-primary">
                                        <img src="https://i.ibb.co.com/BNLzfMF/icons8-health-unscreen.gif" alt="" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Be Healthy</h4>
                                        <p className="text-gray-600 text-sm">
                                            Per luctus accumsan dictumst duis orci finibus facilisi.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="text-primary">
                                        <img src="https://i.ibb.co.com/WFT8PSk/icons8-bench-press-unscreen.gif" alt="" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Be Strong</h4>
                                        <p className="text-gray-600 text-sm">
                                            Per luctus accumsan dictumst duis orci finibus facilisi.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="text-primary">
                                        <img className="w-11 h-7" src="https://i.ibb.co.com/zV8Frcb/icons8-run-unscreen.gif" alt="" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Be Faster</h4>
                                        <p className="text-gray-600 text-sm">
                                            Per luctus accumsan dictumst duis orci finibus facilisi.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="text-primary">
                                        <img src="https://i.ibb.co.com/1QL6KF1/icons8-handshake-unscreen.gif" alt="" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Be One of Us</h4>
                                        <p className="text-gray-600 text-sm">
                                            Per luctus accumsan dictumst duis orci finibus facilisi.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slide>
                </div>
            </div>
        </div>
    );
};

export default Benefit;
