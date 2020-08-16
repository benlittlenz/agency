import React from 'react';

import TimeSVG from '../../images/TimeSVG'

export default function Time() {
    return (
        <section class="pb-20">
            <div class="container mx-auto px-4">
                <div class="flex flex-wrap items-center mt-32">
                    <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
                        <h3 class="text-3xl mb-2 font-semibold leading-normal text-center">
                            Restore clarity with automated time tracking
              </h3>
                        <p
                            class="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700 text-center"
                        >
                            Are you struggling to keep track of your team's performance across different jobs? 
                            Say "goodbye" to spreadsheet hell and guesswork. Let **** keep track of your business's 
                            time tracking and focus on work that matters.
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
                    <div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
                        <TimeSVG />
                    </div>
                </div>

            </div>
        </section>
    )
}