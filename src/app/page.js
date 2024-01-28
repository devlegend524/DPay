import Image from "next/image";
import BestCreatorsAndSellers from "@/components/ui/BestCreatorsAndSellers";

export default function Home() {
  return (
    <div className="relative pt-24 overflow-hidden">
      <div className="container-fluid relative">
        <div className="grid grid-cols-1">
          <div className="slider relative overflow-hidden m-auto mb-4 before:content-[''] before:absolute before:top-0 before:start-0 before:z-2 after:content-[''] after:absolute after:top-0 after:end-0 after:z-2">
            <div className="slide-track flex items-center">
              <div className="slide h-auto md:w-[360px] w-72 mx-2">
                <div className="group relative overflow-hidden rounded-lg shadow dark:shadow-gray-800">
                  <img
                    src="/assets/images/blog/01.jpg"
                    className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500"
                    alt=""
                  />

                  <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                    <a
                      href="item-detail.html"
                      className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"
                    >
                      <i className="mdi mdi-gavel"></i> Bid Now
                    </a>
                  </div>
                </div>
              </div>

              <div className="slide h-auto md:w-[360px] w-72 mx-2">
                <div className="group relative overflow-hidden rounded-lg shadow dark:shadow-gray-800">
                  <img
                    src="/assets/images/blog/03.jpg"
                    className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500"
                    alt=""
                  />

                  <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                    <a
                      href="item-detail.html"
                      className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"
                    >
                      <i className="mdi mdi-gavel"></i> Bid Now
                    </a>
                  </div>
                </div>
              </div>

              <div className="slide h-auto md:w-[360px] w-72 mx-2">
                <div className="group relative overflow-hidden rounded-lg shadow dark:shadow-gray-800">
                  <img
                    src="/assets/images/blog/05.jpg"
                    className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500"
                    alt=""
                  />

                  <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                    <a
                      href="item-detail.html"
                      className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"
                    >
                      <i className="mdi mdi-gavel"></i> Bid Now
                    </a>
                  </div>
                </div>
              </div>

              <div className="slide h-auto md:w-[360px] w-72 mx-2">
                <div className="group relative overflow-hidden rounded-lg shadow dark:shadow-gray-800">
                  <img
                    src="/assets/images/blog/07.jpg"
                    className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500"
                    alt=""
                  />

                  <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                    <a
                      href="item-detail.html"
                      className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"
                    >
                      <i className="mdi mdi-gavel"></i> Bid Now
                    </a>
                  </div>
                </div>
              </div>

              <div className="slide h-auto md:w-[360px] w-72 mx-2">
                <div className="group relative overflow-hidden rounded-lg shadow dark:shadow-gray-800">
                  <img
                    src="/assets/images/blog/09.jpg"
                    className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500"
                    alt=""
                  />

                  <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                    <a
                      href="item-detail.html"
                      className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"
                    >
                      <i className="mdi mdi-gavel"></i> Bid Now
                    </a>
                  </div>
                </div>
              </div>

              <div className="slide h-auto md:w-[360px] w-72 mx-2">
                <div className="group relative overflow-hidden rounded-lg shadow dark:shadow-gray-800">
                  <img
                    src="/assets/images/blog/11.jpg"
                    className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500"
                    alt=""
                  />

                  <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                    <a
                      href="item-detail.html"
                      className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"
                    >
                      <i className="mdi mdi-gavel"></i> Bid Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="slide h-auto md:w-[360px] w-72 mx-2">
                <div className="group relative overflow-hidden rounded-lg shadow dark:shadow-gray-800">
                  <img
                    src="/assets/images/blog/12.jpg"
                    className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500"
                    alt=""
                  />

                  <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                    <a
                      href="item-detail.html"
                      className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"
                    >
                      <i className="mdi mdi-gavel"></i> Bid Now
                    </a>
                  </div>
                </div>
              </div>

              <div className="slide h-auto md:w-[360px] w-72 mx-2">
                <div className="group relative overflow-hidden rounded-lg shadow dark:shadow-gray-800">
                  <img
                    src="/assets/images/blog/14.jpg"
                    className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500"
                    alt=""
                  />

                  <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                    <a
                      href="item-detail.html"
                      className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"
                    >
                      <i className="mdi mdi-gavel"></i> Bid Now
                    </a>
                  </div>
                </div>
              </div>

              <div className="slide h-auto md:w-[360px] w-72 mx-2">
                <div className="group relative overflow-hidden rounded-lg shadow dark:shadow-gray-800">
                  <img
                    src="/assets/images/blog/16.jpg"
                    className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500"
                    alt=""
                  />

                  <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                    <a
                      href="item-detail.html"
                      className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"
                    >
                      <i className="mdi mdi-gavel"></i> Bid Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="slide h-auto md:w-[360px] w-72 mx-2">
                <div className="group relative overflow-hidden rounded-lg shadow dark:shadow-gray-800">
                  <img
                    src="/assets/images/blog/18.jpg"
                    className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500"
                    alt=""
                  />

                  <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                    <a
                      href="item-detail.html"
                      className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"
                    >
                      <i className="mdi mdi-gavel"></i> Bid Now
                    </a>
                  </div>
                </div>
              </div>

              <div className="slide h-auto md:w-[360px] w-72 mx-2">
                <div className="group relative overflow-hidden rounded-lg shadow dark:shadow-gray-800">
                  <img
                    src="/assets/images/blog/20.jpg"
                    className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500"
                    alt=""
                  />

                  <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                    <a
                      href="item-detail.html"
                      className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"
                    >
                      <i className="mdi mdi-gavel"></i> Bid Now
                    </a>
                  </div>
                </div>
              </div>

              <div className="slide h-auto md:w-[360px] w-72 mx-2">
                <div className="group relative overflow-hidden rounded-lg shadow dark:shadow-gray-800">
                  <img
                    src="/assets/images/blog/22.jpg"
                    className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500"
                    alt=""
                  />

                  <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                    <a
                      href="item-detail.html"
                      className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"
                    >
                      <i className="mdi mdi-gavel"></i> Bid Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="slide h-auto md:w-[360px] w-72 mx-2">
                <div className="group relative overflow-hidden rounded-lg shadow dark:shadow-gray-800">
                  <img
                    src="/assets/images/blog/24.jpg"
                    className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500"
                    alt=""
                  />

                  <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                    <a
                      href="item-detail.html"
                      className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"
                    >
                      <i className="mdi mdi-gavel"></i> Bid Now
                    </a>
                  </div>
                </div>
              </div>

              <div className="slide h-auto md:w-[360px] w-72 mx-2">
                <div className="group relative overflow-hidden rounded-lg shadow dark:shadow-gray-800">
                  <img
                    src="/assets/images/blog/26.jpg"
                    className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500"
                    alt=""
                  />

                  <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                    <a
                      href="item-detail.html"
                      className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"
                    >
                      <i className="mdi mdi-gavel"></i> Bid Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="slider2 relative overflow-hidden m-auto before:content-[''] before:absolute before:top-0 before:start-0 before:z-2 after:content-[''] after:absolute after:top-0 after:end-0 after:z-2">
            <div className="slide-track flex items-center">
              <div className="slide h-auto md:w-[360px] w-72 mx-2">
                <div className="group relative overflow-hidden rounded-lg shadow dark:shadow-gray-800">
                  <img
                    src="/assets/images/blog/02.jpg"
                    className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500"
                    alt=""
                  />

                  <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                    <a
                      href="item-detail.html"
                      className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"
                    >
                      <i className="mdi mdi-gavel"></i> Bid Now
                    </a>
                  </div>
                </div>
              </div>

              <div className="slide h-auto md:w-[360px] w-72 mx-2">
                <div className="group relative overflow-hidden rounded-lg shadow dark:shadow-gray-800">
                  <img
                    src="/assets/images/blog/04.jpg"
                    className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500"
                    alt=""
                  />

                  <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                    <a
                      href="item-detail.html"
                      className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"
                    >
                      <i className="mdi mdi-gavel"></i> Bid Now
                    </a>
                  </div>
                </div>
              </div>

              <div className="slide h-auto md:w-[360px] w-72 mx-2">
                <div className="group relative overflow-hidden rounded-lg shadow dark:shadow-gray-800">
                  <img
                    src="/assets/images/blog/06.jpg"
                    className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500"
                    alt=""
                  />

                  <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                    <a
                      href="item-detail.html"
                      className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"
                    >
                      <i className="mdi mdi-gavel"></i> Bid Now
                    </a>
                  </div>
                </div>
              </div>

              <div className="slide h-auto md:w-[360px] w-72 mx-2">
                <div className="group relative overflow-hidden rounded-lg shadow dark:shadow-gray-800">
                  <img
                    src="/assets/images/blog/08.jpg"
                    className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500"
                    alt=""
                  />

                  <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                    <a
                      href="item-detail.html"
                      className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"
                    >
                      <i className="mdi mdi-gavel"></i> Bid Now
                    </a>
                  </div>
                </div>
              </div>

              <div className="slide h-auto md:w-[360px] w-72 mx-2">
                <div className="group relative overflow-hidden rounded-lg shadow dark:shadow-gray-800">
                  <img
                    src="/assets/images/blog/10.jpg"
                    className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500"
                    alt=""
                  />

                  <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                    <a
                      href="item-detail.html"
                      className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"
                    >
                      <i className="mdi mdi-gavel"></i> Bid Now
                    </a>
                  </div>
                </div>
              </div>

              <div className="slide h-auto md:w-[360px] w-72 mx-2">
                <div className="group relative overflow-hidden rounded-lg shadow dark:shadow-gray-800">
                  <img
                    src="/assets/images/blog/13.jpg"
                    className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500"
                    alt=""
                  />

                  <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                    <a
                      href="item-detail.html"
                      className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"
                    >
                      <i className="mdi mdi-gavel"></i> Bid Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="slide h-auto md:w-[360px] w-72 mx-2">
                <div className="group relative overflow-hidden rounded-lg shadow dark:shadow-gray-800">
                  <img
                    src="/assets/images/blog/15.jpg"
                    className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500"
                    alt=""
                  />

                  <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                    <a
                      href="item-detail.html"
                      className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"
                    >
                      <i className="mdi mdi-gavel"></i> Bid Now
                    </a>
                  </div>
                </div>
              </div>

              <div className="slide h-auto md:w-[360px] w-72 mx-2">
                <div className="group relative overflow-hidden rounded-lg shadow dark:shadow-gray-800">
                  <img
                    src="/assets/images/blog/17.jpg"
                    className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500"
                    alt=""
                  />

                  <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                    <a
                      href="item-detail.html"
                      className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"
                    >
                      <i className="mdi mdi-gavel"></i> Bid Now
                    </a>
                  </div>
                </div>
              </div>

              <div className="slide h-auto md:w-[360px] w-72 mx-2">
                <div className="group relative overflow-hidden rounded-lg shadow dark:shadow-gray-800">
                  <img
                    src="/assets/images/blog/19.jpg"
                    className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500"
                    alt=""
                  />

                  <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                    <a
                      href="item-detail.html"
                      className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"
                    >
                      <i className="mdi mdi-gavel"></i> Bid Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="slide h-auto md:w-[360px] w-72 mx-2">
                <div className="group relative overflow-hidden rounded-lg shadow dark:shadow-gray-800">
                  <img
                    src="/assets/images/blog/21.jpg"
                    className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500"
                    alt=""
                  />

                  <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                    <a
                      href="item-detail.html"
                      className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"
                    >
                      <i className="mdi mdi-gavel"></i> Bid Now
                    </a>
                  </div>
                </div>
              </div>

              <div className="slide h-auto md:w-[360px] w-72 mx-2">
                <div className="group relative overflow-hidden rounded-lg shadow dark:shadow-gray-800">
                  <img
                    src="/assets/images/blog/23.jpg"
                    className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500"
                    alt=""
                  />

                  <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                    <a
                      href="item-detail.html"
                      className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"
                    >
                      <i className="mdi mdi-gavel"></i> Bid Now
                    </a>
                  </div>
                </div>
              </div>

              <div className="slide h-auto md:w-[360px] w-72 mx-2">
                <div className="group relative overflow-hidden rounded-lg shadow dark:shadow-gray-800">
                  <img
                    src="/assets/images/blog/25.jpg"
                    className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500"
                    alt=""
                  />

                  <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                    <a
                      href="item-detail.html"
                      className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"
                    >
                      <i className="mdi mdi-gavel"></i> Bid Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="slide h-auto md:w-[360px] w-72 mx-2">
                <div className="group relative overflow-hidden rounded-lg shadow dark:shadow-gray-800">
                  <img
                    src="/assets/images/blog/01.jpg"
                    className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500"
                    alt=""
                  />

                  <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                    <a
                      href="item-detail.html"
                      className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"
                    >
                      <i className="mdi mdi-gavel"></i> Bid Now
                    </a>
                  </div>
                </div>
              </div>

              <div className="slide h-auto md:w-[360px] w-72 mx-2">
                <div className="group relative overflow-hidden rounded-lg shadow dark:shadow-gray-800">
                  <img
                    src="/assets/images/blog/05.jpg"
                    className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500"
                    alt=""
                  />

                  <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                    <a
                      href="item-detail.html"
                      className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"
                    >
                      <i className="mdi mdi-gavel"></i> Bid Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BestCreatorsAndSellers/>


    </div>
  );
}
