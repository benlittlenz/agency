import React from "react";
import Nav from './Nav'
import Text from './Text'
import Image from './Image'

export default function Footer() {
    return (
        <div>

            <Nav />
            <div class="bg-indigo-900 md:overflow-hidden">
                <div class="px-4 py-20 md:py-4">
                    <div class="md:max-w-6xl md:mx-auto">
                        <div class="md:flex md:flex-wrap">
                            <Text />
                            <Image />
                            
                        </div>
                    </div>
                </div>
                <svg
                    class="fill-current text-white hidden md:block"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                >
                    <path fill-opacity="1" d="M0,224L1440,32L1440,320L0,320Z"></path>
                </svg>
            </div>
        </div>

    )

}