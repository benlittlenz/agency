import Layout from '@components/Layout'
import PostList from '@components/PostList'

import getPosts from '@utils/getPosts'
import Footer from '../components/Footer'
import MainHomeSection from '../components/MainHomeSection'
import HomeServices from '../components/HomeServices'


const Index = ({ posts, title, description, ...props }) => {
  return (
    <div>
      <main>
        {/* <div
          class="relative pt-16 pb-32 flex content-center items-center justify-center"
          //style="min-height: 75vh;"
          style={{minHeight: '75vh'}}
        >
          <div
            class="absolute top-0 w-full h-full bg-center bg-cover"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1267&amp;q=80")'}}
            //style='background-image: url("https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1267&amp;q=80");'
          >
            <span
              id="blackOverlay"
              class="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div class="container relative mx-auto">
            <div class="items-center flex flex-wrap">
              <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div class="pr-12">
                  <h1 class="text-white font-semibold text-5xl">
                    Everything you need to manage your projects and your staff
                </h1>
                  <p class="mt-4 text-lg text-gray-300">
                    Learn how **** can help improve your business's processes easier and more organized.
                </p>
                </div>
              </div>
            </div>
          </div>
          <div
            class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            //style="height: 70px; transform: translateZ(0px);"
            style={{height: '70px', transform: `translateZ(0px)`}}
          >
            <svg
              class="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                class="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div> */}



        <MainHomeSection />

        <div className="flex content-center justify-center">
          
          <div className="">

            <div className="">
              <h1 className="text-sm font-bold leading-normal mt-0 text-red-600 uppercase">
                Overview
            </h1>

              <h1
                className="text-4xl font-extrabold font-normal leading-normal tracking-wider mt-0 mb-4 text-gray-800"
              >Everything you need to manage your projects and your staff</h1>
            </div>
            
            <div className="w-3/6">
              <p className="text-lg font-semibold font-normal leading-normal tracking-wide mt-0 text-gray-700">
                ***** helps trades and service businesses organize and automate their operations, from scheduling jobs and time tracking to creating purchase orders and invoicing.

              
            </p>

            <p className="text-lg font-semibold font-normal mt-4 leading-normal tracking-wide mt-0 text-gray-700">
              **** sets your business up with a pre-built CRM that is then customized to fit your business along with an intuitive mobile app supporting 
                a wide range of tasks and features.
            </p>
            </div>
            
          </div>

        </div>

        <HomeServices />

        <section class="pb-20 relative block bg-gray-900">
          <div
            class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            //style="height: 80px; transform: translateZ(0px);"
            style={{ height: '80px', transform: `translateZ(0px)` }}
          >
            <svg
              class="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                class="text-gray-900 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
          <div class="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div class="flex flex-wrap text-center justify-center">
              <div class="w-full lg:w-6/12 px-4">
                <h2 class="text-4xl font-semibold text-white">Build something</h2>
                <p class="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                  Put the potentially record low maximum sea ice extent tihs year
                  down to low ice. According to the National Oceanic and
                  Atmospheric Administration, Ted, Scambos.
              </p>
              </div>
            </div>
            <div class="flex flex-wrap mt-12 justify-center">
              <div class="w-full lg:w-3/12 px-4 text-center">
                <div
                  class="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
                >
                  <i class="fas fa-medal text-xl"></i>
                </div>
                <h6 class="text-xl mt-5 font-semibold text-white">
                  Excelent Services
              </h6>
                <p class="mt-2 mb-4 text-gray-500">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
              </p>
              </div>
              <div class="w-full lg:w-3/12 px-4 text-center">
                <div
                  class="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
                >
                  <i class="fas fa-poll text-xl"></i>
                </div>
                <h5 class="text-xl mt-5 font-semibold text-white">
                  Grow your market
              </h5>
                <p class="mt-2 mb-4 text-gray-500">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
              </p>
              </div>
              <div class="w-full lg:w-3/12 px-4 text-center">
                <div
                  class="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
                >
                  <i class="fas fa-lightbulb text-xl"></i>
                </div>
                <h5 class="text-xl mt-5 font-semibold text-white">Launch time</h5>
                <p class="mt-2 mb-4 text-gray-500">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
              </p>
              </div>
            </div>
          </div>
        </section>
        <section class="relative block py-24 lg:pt-0 bg-gray-900">
          <div class="container mx-auto px-4">
            <div class="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div class="w-full lg:w-6/12 px-4">
                <div
                  class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300"
                >
                  <div class="flex-auto p-5 lg:p-10">
                    <h4 class="text-2xl font-semibold">Contact Us</h4>
                    <p class="leading-relaxed mt-1 mb-4 text-gray-600">
                      Complete this form and we will get back to you in 24 hours.
                  </p>
                    <div class="relative w-full mb-3 mt-8">
                      <label
                        class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        for="full-name"
                      >Full Name</label
                      ><input
                        type="text"
                        class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                        placeholder="Full Name"
                      //style="transition: all 0.15s ease 0s;"
                      />
                    </div>
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        for="email"
                      >Email</label
                      ><input
                        type="email"
                        class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                        placeholder="Email"
                      //style="transition: all 0.15s ease 0s;"
                      />
                    </div>
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        for="message"
                      >Message</label
                      ><textarea
                        rows="4"
                        cols="80"
                        class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                        placeholder="Type a message..."
                      ></textarea>
                    </div>
                    <div class="text-center mt-6">
                      <button
                        class="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      //style="transition: all 0.15s ease 0s;"
                      >
                        Send Message
                    </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Index

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  const posts = ((context) => {
    return getPosts(context)
  })(require.context('../posts', true, /\.md$/))

  return {
    props: {
      posts,
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}
