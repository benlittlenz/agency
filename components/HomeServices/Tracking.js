import React from 'react';

import TrackSVG from '../../images/TrackSVG'

export default function Tracking() {
    return (
        <section class="pb-20  -mt-24">
            <div class="container mx-auto px-4">
                <div class="flex flex-wrap items-center mt-32">
                    <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
                        <div
                            class="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100"
                        >
                            <i class="fas fa-user-friends text-xl"></i>
                        </div>
                        <h3 class="text-3xl mb-2 font-semibold leading-normal text-center">
                            Keep track of your team and where they've been
              </h3>
                        <p
                            class="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700 text-center"
                        >
                            Are you struggling to keep track of your team's whereabouts? Let *** remove any doubt
                            by picking up your employee's GPS location to keep track of time spent on a job and whether they're
                            one time to make it to the next one.
                        </p>
                        - GPS log history

                        <div className="flex justify-center">
                            <button
                                className="text-pink-500 bg-transparent border border-solid border-pink-500 hover:bg-pink-500 hover:text-white active:bg-pink-600 font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1"
                                type="button"
                                style={{ transition: "all .15s ease" }}>
                                Learn More
                            </button>
                        </div>
                    </div>
                    <div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
                        <TrackSVG />
                    </div>
                </div>
            </div>
        </section>
    )
}