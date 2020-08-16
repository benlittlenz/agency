import React from 'react';

import TimeSVG from '../images/TimeSVG'

export default function Services() {
    return (
        <section class="pb-20  -mt-24">
            <div class="container mx-auto px-4">
                <div class="flex flex-wrap">
                    <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                        <div
                            class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
                        >
                            <div class="px-4 py-5 flex-auto">
                                <div
                                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400"
                                >
                                    <i class="fas fa-award"></i>
                                </div>
                                <h6 class="text-xl font-semibold">Mobile Applications</h6>
                                <p class="mt-2 mb-4 text-gray-600">
                                    Divide details about your product or agency work into parts.
                                    A paragraph describing a feature will be enough.
                  </p>
                            </div>
                        </div>
                    </div>
                    <div class="w-full md:w-4/12 px-4 text-center">
                        <div
                            class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
                        >
                            <div class="px-4 py-5 flex-auto">
                                <div
                                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400"
                                >
                                    <i class="fas fa-retweet"></i>
                                </div>
                                    <h6 class="text-xl font-semibold">Business Automation</h6>
                                <p class="mt-2 mb-4 text-gray-600">
                                    Keep you user engaged by providing meaningful information.
                                    Remember that by this time, the user is curious.
                  </p>
                            </div>
                        </div>
                    </div>
                    <div class="pt-6 w-full md:w-4/12 px-4 text-center">
                        <div
                            class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
                        >
                            <div class="px-4 py-5 flex-auto">
                                <div
                                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400"
                                >
                                    <i class="fas fa-fingerprint"></i>
                                </div>
                                <h6 class="text-xl font-semibold">Web Applications</h6>
                                <p class="mt-2 mb-4 text-gray-600">
                                    Write a few lines about each one. A paragraph describing a
                                    feature will be enough. Keep you user engaged!
                  </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-wrap items-center mt-32">
                    <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
                        <div
                            class="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100"
                        >
                            <i class="fas fa-user-friends text-xl"></i>
                        </div>
                        <h3 class="text-3xl mb-2 font-semibold leading-normal text-center">
                            Restore clarity with automated time tracking
              </h3>
                        <p
                            class="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700"
                        >
                            Are you struggling to keep track of your team's performance across different jobs? 
                            Say "goodbye" to spreadsheet hell and guesswork. Let **** keep track of your business's 
                            time tracking and focus on work that matters.
              </p>
                    </div>
                    <div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
                        {/* <div
                            class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg"
                        > */}
                        <TimeSVG />
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}