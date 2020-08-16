import React from "react";

export default function Text() {
    return (
        <div class="md:w-1/2 text-center md:text-left md:pt-16">
            <h1
                class="font-bold text-white text-2xl md:text-5xl leading-tight mb-4"
            >
                Simple payment platform for any service
                                </h1>

            <p class="text-indigo-200 md:text-xl md:pr-48">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id
                vitae corrupti asperiores veritatis dolorum, commodi aperiam
                enim.
                                </p>

            <a
                href="#"
                class="mt-6 mb-12 md:mb-0 md:mt-10 inline-block py-3 px-8 text-white bg-red-500 hover:bg-red-600 rounded-lg shadow"
            >Get Started</a
            >
        </div>
    )
}