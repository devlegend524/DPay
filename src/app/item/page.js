import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function detail() {
  return (
    <section class="relative pt-28 md:pb-24 pb-16">
      <div class="container">
        <div class="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 gap-[30px]">
          <div class="lg:col-span-5">
            <img src="/assets/images/items/3.gif" class="rounded-md shadow dark:shadow-gray-700" alt=""/>

            <div class="bg-gray-50 dark:bg-slate-800 rounded-md shadow dark:shadow-gray-800 mt-[30px] p-6">
              <div>
                <span class="font-medium text-slate-400 block mb-1">Contract Address</span>
                <a href="/item" class="font-medium text-violet-600 underline block">1fsvtgju51ntgeryimghf6ty7o9n3r3er246</a>
              </div>
              
              <div class="mt-4">
                <span class="font-medium text-slate-400 block mb-1">Token ID</span>
                <span class="font-medium block">458342529342930944</span>
              </div>
              
              <div class="mt-4">
                <span class="font-medium text-slate-400 block mb-1">Blockchain</span>
                <span class="font-medium block">ETH</span>
              </div>
              
              <div class="mt-4">
                <span class="font-medium text-slate-400 block mb-1">Deposit & Withdraw</span>
                <span class="font-medium block">Unsupported</span>
              </div>
            </div>
          </div>

          <div class="lg:col-span-7 lg:ms-8">
            <h5 class="md:text-2xl text-xl font-semibold">Probably A Label #3277</h5>

            <span class="font-medium text-slate-400 block mt-2">From this collection: <a href="creator-profile.html" class="text-violet-600">@FunnyGuy</a></span>
        
            <p class="text-slate-400 mt-4">Hey guys! New exploration about NFT Marketplace Web Design, this time I'm inspired by one of my favorite NFT website called Giglink (with crypto payment)! What do you think?</p>
            <p class="text-slate-400 mt-4">What does it mean? Biomechanics is the study of the structure, function and motion of the mechanical aspects of biological systems, at any level from whole organisms to organs, cells and cell organelles, using the methods of mechanics. Biomechanics is a branch of biophysics.</p>
        
            <div class="mt-4">
                <span class="text-lg font-medium text-slate-400 block">Market Price</span>
                <span class="tmd:text-2xl text-xl font-semibold block mt-2"><i class="mdi mdi-ethereum"></i> 3.5 ETH = $ 4,659.75</span>
            </div>

            <div class="mt-6">
                <a href="javascript:void(0)" data-modal-toggle="NftBid" class="btn rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i class="mdi mdi-gavel"></i> Bid Now</a>
                <a href="javascript:void(0)" data-modal-toggle="NftBuynow" class="btn rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i class="mdi mdi-lightning-bolt"></i> Buy Now</a>
            </div>

            <div class="md:flex p-6 bg-gray-50 dark:bg-slate-800 rounded-lg shadow dark:shadow-gray-700 mt-6">
                <div class="md:w-1/2">
                    <div class="flex items-center">
                        <div class="relative inline-block">
                            <img src="/assets/images/avatar/1.jpg" class="h-16 rounded-md" alt=""/>
                            <i class="mdi mdi-check-decagram text-emerald-600 text-lg absolute -top-2 -end-2"></i>
                        </div>

                        <div class="ms-3">
                            <a href="creator-profile.html" class="font-semibold block hover:text-violet-600">Michael Williams</a>
                            <span class="text-slate-400 text-[16px] block mt-1">Creator</span>
                        </div>
                    </div>
                </div>

                <div class="md:w-1/2 md:mt-0 mt-4">
                    <div class="flex items-center">
                        <div class="relative inline-block">
                            <img src="/assets/images/avatar/1.jpg" class="h-16 rounded-md" alt=""/>
                            <i class="mdi mdi-check-decagram text-emerald-600 text-lg absolute -top-2 -end-2"></i>
                        </div>

                        <div class="ms-3">
                            <a href="creator-profile.html" class="font-semibold block hover:text-violet-600">Michael Williams</a>
                            <span class="text-slate-400 text-[16px] block mt-1">Owner</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 mt-8">
                <ul class="md:w-fit w-full flex-wrap justify-center text-center p-3 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md" id="myTab" data-tabs-toggle="#StarterContent" role="tablist">
                    <li role="presentation" class="md:inline-block block md:w-fit w-full">
                        <button class="px-6 py-2 font-semibold rounded-md w-full transition-all duration-500 ease-in-out" id="wednesday-tab" data-tabs-target="#wednesday" type="button" role="tab" aria-controls="wednesday" aria-selected="true">Bids</button>
                    </li>
                    <li role="presentation" class="md:inline-block block md:w-fit w-full">
                        <button class="px-6 py-2 font-semibold rounded-md w-full transition-all duration-500 ease-in-out" id="thursday-tab" data-tabs-target="#thursday" type="button" role="tab" aria-controls="thursday" aria-selected="false">Activity</button>
                    </li>
                </ul>

                <div id="StarterContent" class="mt-6">
                    <div class="" id="wednesday" role="tabpanel" aria-labelledby="wednesday-tab">
                        <div class="grid grid-cols-1">
                          <div class="flex items-center">
                            <div class="relative inline-block">
                              <img src="/assets/images/items/2.gif" class="h-16 rounded-md" alt=""/>
                              <i class="mdi mdi-check-decagram text-emerald-600 text-lg absolute -top-2 -end-2"></i>
                            </div>

                            <div class="ms-3">
                              <h6 class="font-semibold">2 WETH <span class="text-slate-400">by</span> <a href="/item" class="hover:text-violet-600 duration-500 ease-in-out">0xe849fa28a...ea14</a></h6>
                              <span class="text-slate-400 text-[16px]">6 hours ago</span>
                            </div>
                          </div>

                          <div class="flex items-center mt-4">
                            <div class="relative inline-block">
                              <img src="/assets/images/items/1.jpg" class="h-16 rounded-md" alt=""/>
                              <i class="mdi mdi-check-decagram text-emerald-600 text-lg absolute -top-2 -end-2"></i>
                            </div>

                            <div class="ms-3">
                              <h6 class="font-semibold">0.001 WETH <span class="text-slate-400">by</span> <a href="/item" class="hover:text-violet-600 duration-500 ease-in-out">VOTwear</a></h6>
                              <span class="text-slate-400 text-[16px]">6 hours ago</span>
                            </div>
                          </div>

                          <div class="flex items-center mt-4">
                            <div class="relative inline-block">
                              <img src="/assets/images/items/2.jpg" class="h-16 rounded-md" alt=""/>
                              <i class="mdi mdi-check-decagram text-emerald-600 text-lg absolute -top-2 -end-2"></i>
                            </div>

                            <div class="ms-3">
                              <h6 class="font-semibold">1.225 WETH <span class="text-slate-400">by</span> <a href="/item" class="hover:text-violet-600 duration-500 ease-in-out">PandaOne</a></h6>
                              <span class="text-slate-400 text-[16px]">6 hours ago</span>
                            </div>
                          </div>
                        </div>
                    </div>

                    <div class="hidden" id="thursday" role="tabpanel" aria-labelledby="thursday-tab">
                        <div class="grid grid-cols-1">
                            <div class="flex items-center">
                                <div class="relative inline-block">
                                    <img src="/assets/images/items/1.gif" class="h-20 rounded-md" alt=""/>
                                    <i class="mdi mdi-check-decagram text-emerald-600 text-lg absolute -top-2 -end-2"></i>
                                </div>
                                    
                                <span class="content ms-3">
                                    <a href="/item" class="hover:text-violet-600 font-semibold block">Digital Art Collection</a>
                                    <span class="text-slate-400 block text-[16px] mt-1">Started Following <a href="/item" class="font-semibold hover:text-violet-600">@Panda</a></span>
                                    
                                    <span class="text-slate-400 block text-[16px]">1 hours ago</span>
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
