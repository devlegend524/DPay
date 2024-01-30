import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function detail() {
  return (
    <section className="relative pt-28 md:pb-24 pb-16">
      <div className="container">
        <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 gap-[30px]">
          <div className="lg:col-span-5">
            <img src="/assets/images/items/3.gif" className="rounded-md shadow dark:shadow-gray-700" alt=""/>

            <div className="bg-gray-50 dark:bg-slate-800 rounded-md shadow dark:shadow-gray-800 mt-[30px] p-6">
              <div>
                <span className="font-medium text-slate-400 block mb-1">Contract Address</span>
                <a href="/item" className="font-medium text-violet-600 underline block">1fsvtgju51ntgeryimghf6ty7o9n3r3er246</a>
              </div>
              
              <div className="mt-4">
                <span className="font-medium text-slate-400 block mb-1">Token ID</span>
                <span className="font-medium block">458342529342930944</span>
              </div>
              
              <div className="mt-4">
                <span className="font-medium text-slate-400 block mb-1">Blockchain</span>
                <span className="font-medium block">ETH</span>
              </div>
              
              <div className="mt-4">
                <span className="font-medium text-slate-400 block mb-1">Deposit & Withdraw</span>
                <span className="font-medium block">Unsupported</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 lg:ms-8">
            <h5 className="md:text-2xl text-xl font-semibold">Probably A Label #3277</h5>

            <span className="font-medium text-slate-400 block mt-2">From this collection: <a href="creator-profile.html" className="text-violet-600">@FunnyGuy</a></span>
        
            <p className="text-slate-400 mt-4">Hey guys! New exploration about NFT Marketplace Web Design, this time I'm inspired by one of my favorite NFT website called Giglink (with crypto payment)! What do you think?</p>
            <p className="text-slate-400 mt-4">What does it mean? Biomechanics is the study of the structure, function and motion of the mechanical aspects of biological systems, at any level from whole organisms to organs, cells and cell organelles, using the methods of mechanics. Biomechanics is a branch of biophysics.</p>
        
            <div className="mt-4">
                <span className="text-lg font-medium text-slate-400 block">Market Price</span>
                <span className="tmd:text-2xl text-xl font-semibold block mt-2"><i className="mdi mdi-ethereum"></i> 3.5 ETH = $ 4,659.75</span>
            </div>

            <div className="mt-6">
                <a href="/" data-modal-toggle="NftBid" className="btn rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i className="mdi mdi-gavel"></i> Bid Now</a>
                <a href="/" data-modal-toggle="NftBuynow" className="btn rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i className="mdi mdi-lightning-bolt"></i> Buy Now</a>
            </div>

            <div className="md:flex p-6 bg-gray-50 dark:bg-slate-800 rounded-lg shadow dark:shadow-gray-700 mt-6">
                <div className="md:w-1/2">
                    <div className="flex items-center">
                        <div className="relative inline-block">
                            <img src="/assets/images/avatar/1.jpg" className="h-16 rounded-md" alt=""/>
                            <i className="mdi mdi-check-decagram text-emerald-600 text-lg absolute -top-2 -end-2"></i>
                        </div>

                        <div className="ms-3">
                            <a href="creator-profile.html" className="font-semibold block hover:text-violet-600">Michael Williams</a>
                            <span className="text-slate-400 text-[16px] block mt-1">Creator</span>
                        </div>
                    </div>
                </div>

                <div className="md:w-1/2 md:mt-0 mt-4">
                    <div className="flex items-center">
                        <div className="relative inline-block">
                            <img src="/assets/images/avatar/1.jpg" className="h-16 rounded-md" alt=""/>
                            <i className="mdi mdi-check-decagram text-emerald-600 text-lg absolute -top-2 -end-2"></i>
                        </div>

                        <div className="ms-3">
                            <a href="creator-profile.html" className="font-semibold block hover:text-violet-600">Michael Williams</a>
                            <span className="text-slate-400 text-[16px] block mt-1">Owner</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 mt-8">
                <ul className="md:w-fit w-full flex-wrap justify-center text-center p-3 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md" id="myTab" data-tabs-toggle="#StarterContent" role="tablist">
                    <li role="presentation" className="md:inline-block block md:w-fit w-full">
                        <button className="px-6 py-2 font-semibold rounded-md w-full transition-all duration-500 ease-in-out" id="wednesday-tab" data-tabs-target="#wednesday" type="button" role="tab" aria-controls="wednesday" aria-selected="true">Bids</button>
                    </li>
                    <li role="presentation" className="md:inline-block block md:w-fit w-full">
                        <button className="px-6 py-2 font-semibold rounded-md w-full transition-all duration-500 ease-in-out" id="thursday-tab" data-tabs-target="#thursday" type="button" role="tab" aria-controls="thursday" aria-selected="false">Activity</button>
                    </li>
                </ul>

                <div id="StarterContent" className="mt-6">
                    <div className="" id="wednesday" role="tabpanel" aria-labelledby="wednesday-tab">
                        <div className="grid grid-cols-1">
                          <div className="flex items-center">
                            <div className="relative inline-block">
                              <img src="/assets/images/items/2.gif" className="h-16 rounded-md" alt=""/>
                              <i className="mdi mdi-check-decagram text-emerald-600 text-lg absolute -top-2 -end-2"></i>
                            </div>

                            <div className="ms-3">
                              <h6 className="font-semibold">2 WETH <span className="text-slate-400">by</span> <a href="/item" className="hover:text-violet-600 duration-500 ease-in-out">0xe849fa28a...ea14</a></h6>
                              <span className="text-slate-400 text-[16px]">6 hours ago</span>
                            </div>
                          </div>

                          <div className="flex items-center mt-4">
                            <div className="relative inline-block">
                              <img src="/assets/images/items/1.jpg" className="h-16 rounded-md" alt=""/>
                              <i className="mdi mdi-check-decagram text-emerald-600 text-lg absolute -top-2 -end-2"></i>
                            </div>

                            <div className="ms-3">
                              <h6 className="font-semibold">0.001 WETH <span className="text-slate-400">by</span> <a href="/item" className="hover:text-violet-600 duration-500 ease-in-out">VOTwear</a></h6>
                              <span className="text-slate-400 text-[16px]">6 hours ago</span>
                            </div>
                          </div>

                          <div className="flex items-center mt-4">
                            <div className="relative inline-block">
                              <img src="/assets/images/items/2.jpg" className="h-16 rounded-md" alt=""/>
                              <i className="mdi mdi-check-decagram text-emerald-600 text-lg absolute -top-2 -end-2"></i>
                            </div>

                            <div className="ms-3">
                              <h6 className="font-semibold">1.225 WETH <span className="text-slate-400">by</span> <a href="/item" className="hover:text-violet-600 duration-500 ease-in-out">PandaOne</a></h6>
                              <span className="text-slate-400 text-[16px]">6 hours ago</span>
                            </div>
                          </div>
                        </div>
                    </div>

                    <div className="hidden" id="thursday" role="tabpanel" aria-labelledby="thursday-tab">
                        <div className="grid grid-cols-1">
                            <div className="flex items-center">
                                <div className="relative inline-block">
                                    <img src="/assets/images/items/1.gif" className="h-20 rounded-md" alt=""/>
                                    <i className="mdi mdi-check-decagram text-emerald-600 text-lg absolute -top-2 -end-2"></i>
                                </div>
                                    
                                <span className="content ms-3">
                                    <a href="/item" className="hover:text-violet-600 font-semibold block">Digital Art Collection</a>
                                    <span className="text-slate-400 block text-[16px] mt-1">Started Following <a href="/item" className="font-semibold hover:text-violet-600">@Panda</a></span>
                                    
                                    <span className="text-slate-400 block text-[16px]">1 hours ago</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
