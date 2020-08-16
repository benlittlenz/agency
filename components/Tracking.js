import React from 'react';

import TrackSVG from '../images/TrackSVG'

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
                        <TrackSVG />
                    </div>
                </div>
            </div>
        </section>
    )
}