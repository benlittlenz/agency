import React from 'react';

import PaperlessSVG from '../../images/PaperlessSVG'

export default function Paperless() {
    return (
        <section class="relative py-20">
            <div
                class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
                //style="height: 80px; transform: translateZ(0px);"
                style={{ height: '80px', transform: `translateZ(0px)` }}
            >
            </div>
            <div class="container mx-auto px-4">
                <div class="items-center flex flex-wrap">
                    <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
                        <PaperlessSVG />
                    </div>
                    <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
                        <div class="md:pr-12">
                            <div
                                class="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300"
                            >
                                <i class="fas fa-rocket text-xl"></i>
                            </div>
                            <h3 class="text-3xl font-semibold">Digitize your paperwork</h3>
                            <p class="mt-4 text-lg leading-relaxed text-gray-600 text-center">
                                Are you tired of storing important documents that take up too much space and 
                                Fill out your important documents on site on any mobile device generating an output document
                                that can be sent to a client or stored in a database.
                </p>

                            <div className="flex justify-center">
                                <button
                                    className="text-pink-500 bg-transparent border border-solid border-pink-500 hover:bg-pink-500 hover:text-white active:bg-pink-600 font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1"
                                    type="button"
                                    style={{ transition: "all .15s ease" }}>
                                    Learn More
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
