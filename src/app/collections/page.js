import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdApps } from "react-icons/io";


export default function page() {
  return (
    <section className="relative md:pb-24 pb-16 mt-56">
            <div className="container z-1">
                <div className="grid grid-cols-1">
                    <form className="p-6 bg-white dark:bg-slate-900 rounded-xl shadow dark:shadow-gray-700">
                        <div className="registration-form text-dark text-start">
                            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-6">
                                <div>
                                    <label className="form-label font-medium dark:text-white">Search:</label>
                                    <div className="filter-search-form relative filter-border mt-2">
                                        <CiSearch className="icons"/>
                                        <input name="name" type="text" id="job-keyword" className="form-input w-full filter-input-box bg-gray-50 dark:bg-slate-800 border-0 focus:ring-transparent" placeholder="Search your keaywords" />
                                    </div>
                                </div>
    
                                <div>
                                    <label htmlFor="choices-catagory" className="form-label font-medium dark:text-white">Categories:</label>
                                    <div className="filter-search-form relative filter-border mt-2">
                                      <IoMdApps className="icons" />
                                      <select className="form-select z-2" data-trigger name="choices-catagory" id="choices-catagory" aria-label="Default select example">
                                          <option>Art</option>
                                          <option>Music</option>
                                          <option>Domain Names</option>
                                          <option>Virtual World</option>
                                          <option>Trading Cards</option>
                                          <option>Sports</option>
                                      </select>
                                    </div>
                                </div>
                            
                                <div>
                                    <label htmlFor="choices-min-price" className="form-label font-medium dark:text-white">Items:</label>
                                    <div className="filter-search-form relative filter-border mt-2">
                                        <i className="uil uil-clock icons"></i>
                                        <select className="form-select" data-trigger name="choices-min-price" id="choices-min-price" aria-label="Default select example">
                                            <option>Buy Now</option>
                                            <option>Auctions</option>
                                            <option>Offers</option>
                                        </select>
                                    </div>
                                </div>
                            
                                <div>
                                    <label htmlFor="choices-max-price" className="form-label font-medium dark:text-white">Sort By:</label>
                                    <div className="filter-search-form relative mt-2">
                                        <i className="uil uil-star icons"></i>
                                        <select className="form-select" data-trigger name="choices-max-price" id="choices-max-price" aria-label="Default select example">
                                            <option>Top Rated</option>
                                            <option>Lower Rated</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div className="container mt-16">
                <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
                    <div className="group relative overflow-hidden p-2 rounded-lg bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:shadow-md dark:shadow-md hover:dark:shadow-gray-700 transition-all duration-500 hover:-mt-2 h-fit">
                        <div className="relative overflow-hidden">
                            <div className="relative overflow-hidden rounded-lg">
                                <img src="/assets/images/items/1.jpg" className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500" alt="" />
                            </div>

                            <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                                <a href="/item" className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i className="mdi mdi-lightning-bolt"></i> Buy Now</a>                                
                            </div>

                            <div className="absolute top-2 end-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                <a href="javascript:void(0)" className="btn btn-icon btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i className="mdi mdi-plus"></i></a>
                            </div>
                        </div>

                        <div className="mt-3">
                            <div className="flex items-center">
                                <img src="/assets/images/avatar/1.jpg" className="rounded-full h-8 w-8" alt="" />
                                <a href="creator-profile.html" className="ms-2 text-[15px] font-medium text-slate-400 hover:text-violet-600">@StreetBoy</a>
                            </div>

                            <div className="my-3">
                                <a href="/item" className="font-semibold hover:text-violet-600">Genuine Undead #3902</a>
                            </div>

                            <div className="flex justify-between p-2 bg-gray-50 dark:bg-slate-800 rounded-lg shadow dark:shadow-gray-700">
                                <div>
                                    <span className="text-[16px] font-medium text-slate-400 block">Price</span>
                                    <span className="text-[16px] font-semibold block"><i className="mdi mdi-ethereum"></i> 3.5 ETH</span>
                                </div>
                                
                                <div>
                                    <span className="text-[16px] font-medium text-slate-400 block">Highest Bid</span>
                                    <span className="text-[16px] font-semibold block"><i className="mdi mdi-ethereum"></i> 3.55 ETH</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="group relative overflow-hidden p-2 rounded-lg bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:shadow-md dark:shadow-md hover:dark:shadow-gray-700 transition-all duration-500 hover:-mt-2 h-fit">
                        <div className="relative overflow-hidden">
                            <div className="relative overflow-hidden rounded-lg">
                                <img src="/assets/images/items/2.gif" className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500" alt="" />
                            </div>
                            
                            <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                                <a href="/item" className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i className="mdi mdi-lightning-bolt"></i> Buy Now</a>                                
                            </div>

                            <div className="absolute top-2 end-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                <a href="javascript:void(0)" className="btn btn-icon btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i className="mdi mdi-plus"></i></a>
                            </div>

                            <div className="absolute bottom-2 start-0 end-0 mx-auto text-center bg-gradient-to-r from-violet-600 to-red-600 text-white inline-table text-lg px-3 rounded-full">
                                <i className="uil uil-clock align-middle me-1"></i> <small id="auction-item-1" className="font-bold"></small>
                            </div>
                        </div>

                        <div className="mt-3">
                            <div className="flex items-center">
                                <img src="/assets/images/avatar/2.jpg" className="rounded-full h-8 w-8" alt="" />
                                <a href="creator-profile.html" className="ms-2 text-[15px] font-medium text-slate-400 hover:text-violet-600">@CutieGirl</a>
                            </div>

                            <div className="my-3">
                                <a href="/item" className="font-semibold hover:text-violet-600">Windchime #768</a>
                            </div>

                            <div className="flex justify-between p-2 bg-gray-50 dark:bg-slate-800 rounded-lg shadow dark:shadow-gray-700">
                                <div>
                                    <span className="text-[16px] font-medium text-slate-400 block">Price</span>
                                    <span className="text-[16px] font-semibold block"><i className="mdi mdi-ethereum"></i> 3.5 ETH</span>
                                </div>
                                
                                <div>
                                    <span className="text-[16px] font-medium text-slate-400 block">Highest Bid</span>
                                    <span className="text-[16px] font-semibold block"><i className="mdi mdi-ethereum"></i> 3.55 ETH</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="group relative overflow-hidden p-2 rounded-lg bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:shadow-md dark:shadow-md hover:dark:shadow-gray-700 transition-all duration-500 hover:-mt-2 h-fit">
                        <div className="relative overflow-hidden">
                            <div className="relative overflow-hidden rounded-lg">
                                <img src="/assets/images/items/2.jpg" className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500" alt="" />
                            </div>
                            
                            <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                                <a href="/item" className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i className="mdi mdi-lightning-bolt"></i> Buy Now</a>                                
                            </div>

                            <div className="absolute top-2 end-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                <a href="javascript:void(0)" className="btn btn-icon btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i className="mdi mdi-plus"></i></a>
                            </div>
                        </div>

                        <div className="mt-3">
                            <div className="flex items-center">
                                <img src="/assets/images/items/3.gif" className="rounded-full h-8 w-8" alt="" />
                                <a href="creator-profile.html" className="ms-2 text-[15px] font-medium text-slate-400 hover:text-violet-600">@ButterFly</a>
                            </div>

                            <div className="my-3">
                                <a href="/item" className="font-semibold hover:text-violet-600">Probably A Label #3277</a>
                            </div>

                            <div className="flex justify-between p-2 bg-gray-50 dark:bg-slate-800 rounded-lg shadow dark:shadow-gray-700">
                                <div>
                                    <span className="text-[16px] font-medium text-slate-400 block">Price</span>
                                    <span className="text-[16px] font-semibold block"><i className="mdi mdi-ethereum"></i> 3.5 ETH</span>
                                </div>
                                
                                <div>
                                    <span className="text-[16px] font-medium text-slate-400 block">Highest Bid</span>
                                    <span className="text-[16px] font-semibold block"><i className="mdi mdi-ethereum"></i> 3.55 ETH</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="group relative overflow-hidden p-2 rounded-lg bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:shadow-md dark:shadow-md hover:dark:shadow-gray-700 transition-all duration-500 hover:-mt-2 h-fit">
                        <div className="relative overflow-hidden">
                            <div className="relative overflow-hidden rounded-lg">
                                <img src="/assets/images/items/3.jpg" className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500" alt="" />
                            </div>
                            
                            <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                                <a href="/item" className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i className="mdi mdi-lightning-bolt"></i> Buy Now</a>                                
                            </div>

                            <div className="absolute top-2 end-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                <a href="javascript:void(0)" className="btn btn-icon btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i className="mdi mdi-plus"></i></a>
                            </div>
                        </div>

                        <div className="mt-3">
                            <div className="flex items-center">
                                <img src="/assets/images/avatar/3.jpg" className="rounded-full h-8 w-8" alt="" />
                                <a href="creator-profile.html" className="ms-2 text-[15px] font-medium text-slate-400 hover:text-violet-600">@NorseQueen</a>
                            </div>

                            <div className="my-3">
                                <a href="/item" className="font-semibold hover:text-violet-600">Probably A Label #1711</a>
                            </div>

                            <div className="flex justify-between p-2 bg-gray-50 dark:bg-slate-800 rounded-lg shadow dark:shadow-gray-700">
                                <div>
                                    <span className="text-[16px] font-medium text-slate-400 block">Price</span>
                                    <span className="text-[16px] font-semibold block"><i className="mdi mdi-ethereum"></i> 3.5 ETH</span>
                                </div>
                                
                                <div>
                                    <span className="text-[16px] font-medium text-slate-400 block">Highest Bid</span>
                                    <span className="text-[16px] font-semibold block"><i className="mdi mdi-ethereum"></i> 3.55 ETH</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="group relative overflow-hidden p-2 rounded-lg bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:shadow-md dark:shadow-md hover:dark:shadow-gray-700 transition-all duration-500 hover:-mt-2 h-fit">
                        <div className="relative overflow-hidden">
                            <div className="relative overflow-hidden rounded-lg">
                                <img src="/assets/images/items/3.gif" className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500" alt="" />
                            </div>
                            
                            <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                                <a href="/item" className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i className="mdi mdi-lightning-bolt"></i> Buy Now</a>                                
                            </div>

                            <div className="absolute top-2 end-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                <a href="javascript:void(0)" className="btn btn-icon btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i className="mdi mdi-plus"></i></a>
                            </div>
                        </div>

                        <div className="mt-3">
                            <div className="flex items-center">
                                <img src="/assets/images/avatar/4.jpg" className="rounded-full h-8 w-8" alt="" />
                                <a href="creator-profile.html" className="ms-2 text-[15px] font-medium text-slate-400 hover:text-violet-600">@BigBull</a>
                            </div>

                            <div className="my-3">
                                <a href="/item" className="font-semibold hover:text-violet-600">Shibuya Scramble Punks</a>
                            </div>

                            <div className="flex justify-between p-2 bg-gray-50 dark:bg-slate-800 rounded-lg shadow dark:shadow-gray-700">
                                <div>
                                    <span className="text-[16px] font-medium text-slate-400 block">Price</span>
                                    <span className="text-[16px] font-semibold block"><i className="mdi mdi-ethereum"></i> 3.5 ETH</span>
                                </div>
                                
                                <div>
                                    <span className="text-[16px] font-medium text-slate-400 block">Highest Bid</span>
                                    <span className="text-[16px] font-semibold block"><i className="mdi mdi-ethereum"></i> 3.55 ETH</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="group relative overflow-hidden p-2 rounded-lg bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:shadow-md dark:shadow-md hover:dark:shadow-gray-700 transition-all duration-500 hover:-mt-2 h-fit">
                        <div className="relative overflow-hidden">
                            <div className="relative overflow-hidden rounded-lg">
                                <img src="/assets/images/items/4.jpg" className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500" alt="" />
                            </div>
                            
                            <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                                <a href="/item" className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i className="mdi mdi-lightning-bolt"></i> Buy Now</a>                                
                            </div>

                            <div className="absolute top-2 end-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                <a href="javascript:void(0)" className="btn btn-icon btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i className="mdi mdi-plus"></i></a>
                            </div>
                        </div>

                        <div className="mt-3">
                            <div className="flex items-center">
                                <img src="/assets/images/avatar/5.jpg" className="rounded-full h-8 w-8" alt="" />
                                <a href="creator-profile.html" className="ms-2 text-[15px] font-medium text-slate-400 hover:text-violet-600">@Angel</a>
                            </div>

                            <div className="my-3">
                                <a href="/item" className="font-semibold hover:text-violet-600">Probably A Label #650</a>
                            </div>

                            <div className="flex justify-between p-2 bg-gray-50 dark:bg-slate-800 rounded-lg shadow dark:shadow-gray-700">
                                <div>
                                    <span className="text-[16px] font-medium text-slate-400 block">Price</span>
                                    <span className="text-[16px] font-semibold block"><i className="mdi mdi-ethereum"></i> 3.5 ETH</span>
                                </div>
                                
                                <div>
                                    <span className="text-[16px] font-medium text-slate-400 block">Highest Bid</span>
                                    <span className="text-[16px] font-semibold block"><i className="mdi mdi-ethereum"></i> 3.55 ETH</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="group relative overflow-hidden p-2 rounded-lg bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:shadow-md dark:shadow-md hover:dark:shadow-gray-700 transition-all duration-500 hover:-mt-2 h-fit">
                        <div className="relative overflow-hidden">
                            <div className="relative overflow-hidden rounded-lg">
                                <img src="/assets/images/items/5.jpg" className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500" alt="" />
                            </div>
                            
                            <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                                <a href="/item" className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i className="mdi mdi-lightning-bolt"></i> Buy Now</a>                                
                            </div>

                            <div className="absolute top-2 end-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                <a href="javascript:void(0)" className="btn btn-icon btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i className="mdi mdi-plus"></i></a>
                            </div>

                            <div className="absolute bottom-2 start-0 end-0 mx-auto text-center bg-gradient-to-r from-violet-600 to-red-600 text-white inline-table text-lg px-3 rounded-full">
                                <i className="uil uil-clock align-middle me-1"></i> <small id="auction-item-5" className="font-bold"></small>
                            </div>
                        </div>

                        <div className="mt-3">
                            <div className="flex items-center">
                                <img src="/assets/images/avatar/6.jpg" className="rounded-full h-8 w-8" alt="" />
                                <a href="creator-profile.html" className="ms-2 text-[15px] font-medium text-slate-400 hover:text-violet-600">@CrazyAnyone</a>
                            </div>

                            <div className="my-3">
                                <a href="/item" className="font-semibold hover:text-violet-600">Looki#0147</a>
                            </div>

                            <div className="flex justify-between p-2 bg-gray-50 dark:bg-slate-800 rounded-lg shadow dark:shadow-gray-700">
                                <div>
                                    <span className="text-[16px] font-medium text-slate-400 block">Price</span>
                                    <span className="text-[16px] font-semibold block"><i className="mdi mdi-ethereum"></i> 3.5 ETH</span>
                                </div>
                                
                                <div>
                                    <span className="text-[16px] font-medium text-slate-400 block">Highest Bid</span>
                                    <span className="text-[16px] font-semibold block"><i className="mdi mdi-ethereum"></i> 3.55 ETH</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="group relative overflow-hidden p-2 rounded-lg bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:shadow-md dark:shadow-md hover:dark:shadow-gray-700 transition-all duration-500 hover:-mt-2 h-fit">
                        <div className="relative overflow-hidden">
                            <div className="relative overflow-hidden rounded-lg">
                                <img src="/assets/images/items/6.jpg" className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500" alt="" />
                            </div>
                            
                            <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                                <a href="/item" className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i className="mdi mdi-lightning-bolt"></i> Buy Now</a>                                
                            </div>

                            <div className="absolute top-2 end-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                <a href="javascript:void(0)" className="btn btn-icon btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i className="mdi mdi-plus"></i></a>
                            </div>
                        </div>

                        <div className="mt-3">
                            <div className="flex items-center">
                                <img src="/assets/images/items/5.gif" className="rounded-full h-8 w-8" alt="" />
                                <a href="creator-profile.html" className="ms-2 text-[15px] font-medium text-slate-400 hover:text-violet-600">@Princess</a>
                            </div>

                            <div className="my-3">
                                <a href="/item" className="font-semibold hover:text-violet-600">Poob #285</a>
                            </div>

                            <div className="flex justify-between p-2 bg-gray-50 dark:bg-slate-800 rounded-lg shadow dark:shadow-gray-700">
                                <div>
                                    <span className="text-[16px] font-medium text-slate-400 block">Price</span>
                                    <span className="text-[16px] font-semibold block"><i className="mdi mdi-ethereum"></i> 3.5 ETH</span>
                                </div>
                                
                                <div>
                                    <span className="text-[16px] font-medium text-slate-400 block">Highest Bid</span>
                                    <span className="text-[16px] font-semibold block"><i className="mdi mdi-ethereum"></i> 3.55 ETH</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="group relative overflow-hidden p-2 rounded-lg bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:shadow-md dark:shadow-md hover:dark:shadow-gray-700 transition-all duration-500 hover:-mt-2 h-fit">
                        <div className="relative overflow-hidden">
                            <div className="relative overflow-hidden rounded-lg">
                                <img src="/assets/images/items/8.jpg" className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500" alt="" />
                            </div>
                            
                            <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                                <a href="/item" className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i className="mdi mdi-lightning-bolt"></i> Buy Now</a>                                
                            </div>

                            <div className="absolute top-2 end-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                <a href="javascript:void(0)" className="btn btn-icon btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i className="mdi mdi-plus"></i></a>
                            </div>
                        </div>

                        <div className="mt-3">
                            <div className="flex items-center">
                                <img src="/assets/images/avatar/7.jpg" className="rounded-full h-8 w-8" alt="" />
                                <a href="creator-profile.html" className="ms-2 text-[15px] font-medium text-slate-400 hover:text-violet-600">@LooserBad</a>
                            </div>

                            <div className="my-3">
                                <a href="/item" className="font-semibold hover:text-violet-600">Umber Arrow</a>
                            </div>

                            <div className="flex justify-between p-2 bg-gray-50 dark:bg-slate-800 rounded-lg shadow dark:shadow-gray-700">
                                <div>
                                    <span className="text-[16px] font-medium text-slate-400 block">Price</span>
                                    <span className="text-[16px] font-semibold block"><i className="mdi mdi-ethereum"></i> 3.5 ETH</span>
                                </div>
                                
                                <div>
                                    <span className="text-[16px] font-medium text-slate-400 block">Highest Bid</span>
                                    <span className="text-[16px] font-semibold block"><i className="mdi mdi-ethereum"></i> 3.55 ETH</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="group relative overflow-hidden p-2 rounded-lg bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:shadow-md dark:shadow-md hover:dark:shadow-gray-700 transition-all duration-500 hover:-mt-2 h-fit">
                        <div className="relative overflow-hidden">
                            <div className="relative overflow-hidden rounded-lg">
                                <img src="/assets/images/items/4.gif" className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500" alt="" />
                            </div>
                            
                            <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                                <a href="/item" className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i className="mdi mdi-lightning-bolt"></i> Buy Now</a>                                
                            </div>

                            <div className="absolute top-2 end-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                <a href="javascript:void(0)" className="btn btn-icon btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i className="mdi mdi-plus"></i></a>
                            </div>
                        </div>

                        <div className="mt-3">
                            <div className="flex items-center">
                                <img src="/assets/images/items/5.gif" className="rounded-full h-8 w-8" alt="" />
                                <a href="creator-profile.html" className="ms-2 text-[15px] font-medium text-slate-400 hover:text-violet-600">@Princess</a>
                            </div>

                            <div className="my-3">
                                <a href="/item" className="font-semibold hover:text-violet-600">Gloam Druid</a>
                            </div>

                            <div className="flex justify-between p-2 bg-gray-50 dark:bg-slate-800 rounded-lg shadow dark:shadow-gray-700">
                                <div>
                                    <span className="text-[16px] font-medium text-slate-400 block">Price</span>
                                    <span className="text-[16px] font-semibold block"><i className="mdi mdi-ethereum"></i> 3.5 ETH</span>
                                </div>
                                
                                <div>
                                    <span className="text-[16px] font-medium text-slate-400 block">Highest Bid</span>
                                    <span className="text-[16px] font-semibold block"><i className="mdi mdi-ethereum"></i> 3.55 ETH</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="group relative overflow-hidden p-2 rounded-lg bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:shadow-md dark:shadow-md hover:dark:shadow-gray-700 transition-all duration-500 hover:-mt-2 h-fit">
                        <div className="relative overflow-hidden">
                            <div className="relative overflow-hidden rounded-lg">
                                <img src="/assets/images/items/5.gif" className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500" alt="" />
                            </div>
                            
                            <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                                <a href="/item" className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i className="mdi mdi-lightning-bolt"></i> Buy Now</a>                                
                            </div>

                            <div className="absolute top-2 end-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                <a href="javascript:void(0)" className="btn btn-icon btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i className="mdi mdi-plus"></i></a>
                            </div>
                        </div>

                        <div className="mt-3">
                            <div className="flex items-center">
                                <img src="/assets/images/avatar/8.jpg" className="rounded-full h-8 w-8" alt="" />
                                <a href="creator-profile.html" className="ms-2 text-[15px] font-medium text-slate-400 hover:text-violet-600">@PandaOne</a>
                            </div>

                            <div className="my-3">
                                <a href="/item" className="font-semibold hover:text-violet-600">Azuki #7421</a>
                            </div>

                            <div className="flex justify-between p-2 bg-gray-50 dark:bg-slate-800 rounded-lg shadow dark:shadow-gray-700">
                                <div>
                                    <span className="text-[16px] font-medium text-slate-400 block">Price</span>
                                    <span className="text-[16px] font-semibold block"><i className="mdi mdi-ethereum"></i> 3.5 ETH</span>
                                </div>
                                
                                <div>
                                    <span className="text-[16px] font-medium text-slate-400 block">Highest Bid</span>
                                    <span className="text-[16px] font-semibold block"><i className="mdi mdi-ethereum"></i> 3.55 ETH</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="group relative overflow-hidden p-2 rounded-lg bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:shadow-md dark:shadow-md hover:dark:shadow-gray-700 transition-all duration-500 hover:-mt-2 h-fit">
                        <div className="relative overflow-hidden">
                            <div className="relative overflow-hidden rounded-lg">
                                <img src="/assets/images/items/9.jpg" className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500" alt="" />
                            </div>
                            
                            <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                                <a href="/item" className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i className="mdi mdi-lightning-bolt"></i> Buy Now</a>                                
                            </div>

                            <div className="absolute top-2 end-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                <a href="javascript:void(0)" className="btn btn-icon btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i className="mdi mdi-plus"></i></a>
                            </div>
                        </div>

                        <div className="mt-3">
                            <div className="flex items-center">
                                <img src="/assets/images/items/2.gif" className="rounded-full h-8 w-8" alt=""/>
                                <a href="creator-profile.html" className="ms-2 text-[15px] font-medium text-slate-400 hover:text-violet-600">@FunnyGuy</a>
                            </div>

                            <div className="my-3">
                                <a href="/item" className="font-semibold hover:text-violet-600">Wolf-Cult Vanguard</a>
                            </div>

                            <div className="flex justify-between p-2 bg-gray-50 dark:bg-slate-800 rounded-lg shadow dark:shadow-gray-700">
                                <div>
                                    <span className="text-[16px] font-medium text-slate-400 block">Price</span>
                                    <span className="text-[16px] font-semibold block"><i className="mdi mdi-ethereum"></i> 3.5 ETH</span>
                                </div>
                                
                                <div>
                                    <span className="text-[16px] font-medium text-slate-400 block">Highest Bid</span>
                                    <span className="text-[16px] font-semibold block"><i className="mdi mdi-ethereum"></i> 3.55 ETH</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
                    <div className="md:col-span-12 text-center">
                        <nav>
                            <ul className="inline-flex items-center -space-x-px">
                                <li>
                                    <a href="explore-one.html#" className="w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 bg-white dark:bg-slate-900 hover:text-white shadow-sm dark:shadow-gray-700 hover:border-violet-600 dark:hover:border-violet-600 hover:bg-violet-600 dark:hover:bg-violet-600">
                                        <i className="uil uil-angle-left text-[20px]"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="explore-one.html#" className="w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 hover:text-white bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700 hover:border-violet-600 dark:hover:border-violet-600 hover:bg-violet-600 dark:hover:bg-violet-600">1</a>
                                </li>
                                <li>
                                    <a href="explore-one.html#" className="w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 hover:text-white bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700 hover:border-violet-600 dark:hover:border-violet-600 hover:bg-violet-600 dark:hover:bg-violet-600">2</a>
                                </li>
                                <li>
                                    <a href="explore-one.html#" aria-current="page" className="z-10 w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-white bg-violet-600 shadow-sm dark:shadow-gray-700">3</a>
                                </li>
                                <li>
                                    <a href="explore-one.html#" className="w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 hover:text-white bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700 hover:border-violet-600 dark:hover:border-violet-600 hover:bg-violet-600 dark:hover:bg-violet-600">4</a>
                                </li>
                                <li>
                                    <a href="explore-one.html#" className="w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 bg-white dark:bg-slate-900 hover:text-white shadow-sm dark:shadow-gray-700 hover:border-violet-600 dark:hover:border-violet-600 hover:bg-violet-600 dark:hover:bg-violet-600">
                                        <i className="uil uil-angle-right text-[20px]"></i>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
  );
}
