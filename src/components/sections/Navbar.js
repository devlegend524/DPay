import React from "react";

export default function Navbar() {
  return (
    <nav id="topnav" className="defaultscroll is-sticky">
      <div className="container">
        <a className="logo ps-0" href="index.html">
          <img
            src="/assets/images/logo-icon-28.png"
            className="inline-block sm:hidden"
            alt=""
          />
          <div className="sm:block hidden">
            <img
              src="/assets/images/logo-dark.png"
              className="inline-block dark:hidden h-7"
              alt=""
            />
            <img
              src="/assets/images/logo-white.png"
              className="hidden dark:inline-block h-7"
              alt=""
            />
          </div>
        </a>
        <div className="menu-extras">
          <div className="menu-item">
            <a className="navbar-toggle" id="isToggle" onClick="toggleMenu()">
              <div className="lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </a>
          </div>
        </div>
        <ul className="buy-button list-none mb-0">
          <li className="inline-block mb-0">
            <div className="form-icon relative">
              <i className="uil uil-search text-lg absolute top-1/2 -translate-y-1/2 start-3"></i>
              <input
                type="text"
                className="form-input sm:w-44 w-28 ps-10 py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-3xl outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 bg-white"
                name="s"
                id="searchItem"
                placeholder="Search..."
              />
            </div>
          </li>

          <li className="inline-block ps-1 mb-0">
            <a
              id="connectWallet"
              className="btn btn-icon rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"
            >
              <i className="uil uil-wallet"></i>
            </a>
          </li>

          <li className="dropdown inline-block relative ps-1">
            <button
              data-dropdown-toggle="dropdown"
              className="dropdown-toggle btn btn-icon rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white inline-flex"
              type="button"
            >
              <img
                src="/assets/images/client/05.jpg"
                className="rounded-full"
                alt=""
              />
            </button>

            <div
              className="dropdown-menu absolute end-0 m-0 mt-4 z-10 w-48 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 hidden"
              onClick="event.stopPropagation();"
            >
              <div className="relative">
                <div className="py-8 bg-gradient-to-tr from-violet-600 to-red-600"></div>
                <div className="absolute px-4 -bottom-7 start-0">
                  <div className="flex items-end">
                    <img
                      src="/assets/images/client/05.jpg"
                      className="rounded-full w-10 h-w-10 shadow dark:shadow-gray-700"
                      alt=""
                    />

                    <span className="font-semibold text-[15px] ms-1">
                      Jenny Jimenez
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-10 px-4">
                <h5 className="font-semibold text-[15px]">Wallet:</h5>
                <div className="flex items-center justify-between">
                  <span className="text-[13px] text-slate-400">
                    qhut0...hfteh45
                  </span>
                  <a href="index-five.html" className="text-violet-600">
                    <i className="uil uil-copy"></i>
                  </a>
                </div>
              </div>

              <div className="mt-4 px-4">
                <h5 className="text-[15px]">
                  Balance:{" "}
                  <span className="text-violet-600 font-semibold">
                    0.00045ETH
                  </span>
                </h5>
              </div>

              <ul className="py-2 text-start">
                <li>
                  <a
                    href="creator-profile.html"
                    className="block text-[14px] font-semibold py-1.5 px-4 hover:text-violet-600"
                  >
                    <i className="uil uil-user text-[16px] align-middle me-1"></i>{" "}
                    Profile
                  </a>
                </li>
                <li>
                  <a
                    href="creator-profile-edit.html"
                    className="block text-[14px] font-semibold py-1.5 px-4 hover:text-violet-600"
                  >
                    <i className="uil uil-setting text-[16px] align-middle me-1"></i>{" "}
                    Settings
                  </a>
                </li>
                <li className="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                <li>
                  <a
                    href="login.html"
                    className="block text-[14px] font-semibold py-1.5 px-4 hover:text-violet-600"
                  >
                    <i className="uil uil-sign-out-alt text-[16px] align-middle me-1"></i>{" "}
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <div id="navigation">
          <ul className="navigation-menu justify-end">
            <li className="has-submenu parent-menu-item">
              <a href="javascript:void(0)">Home</a>
              <span className="menu-arrow"></span>
              <ul className="submenu">
                <li>
                  <a href="index.html" className="sub-menu-item">
                    Home One
                  </a>
                </li>
                <li>
                  <a href="index-two.html" className="sub-menu-item">
                    Home Two
                  </a>
                </li>
                <li>
                  <a href="index-three.html" className="sub-menu-item">
                    Home Three
                  </a>
                </li>
                <li>
                  <a href="index-four.html" className="sub-menu-item">
                    Home Four{" "}
                    <span className="bg-gray-50 dark:bg-slate-800 text-[10px] shadow shadow-gray-300 dark:shadow-gray-700 font-bold px-2.5 py-0.5 rounded h-5 ms-1">
                      Light
                    </span>
                  </a>
                </li>
                <li>
                  <a href="index-five.html" className="sub-menu-item">
                    Home Five{" "}
                    <span className="bg-gray-50 dark:bg-slate-800 text-[10px] shadow shadow-gray-300 dark:shadow-gray-700 font-bold px-2.5 py-0.5 rounded h-5 ms-1">
                      Light
                    </span>
                  </a>
                </li>
                <li>
                  <a href="index-six.html" className="sub-menu-item">
                    Home Six{" "}
                    <span className="bg-gray-50 dark:bg-slate-800 text-[10px] shadow shadow-gray-300 dark:shadow-gray-700 font-bold px-2.5 py-0.5 rounded h-5 ms-1">
                      Light
                    </span>
                  </a>
                </li>
                <li>
                  <a href="index-seven.html" className="sub-menu-item">
                    Home Seven
                  </a>
                </li>
                <li>
                  <a href="index-eight.html" className="sub-menu-item">
                    Home Eight{" "}
                    <span className="bg-gray-50 dark:bg-slate-800 text-[10px] shadow shadow-gray-300 dark:shadow-gray-700 font-bold px-2.5 py-0.5 rounded h-5 ms-1">
                      Light
                    </span>
                  </a>
                </li>
                <li>
                  <a href="index-nine.html" className="sub-menu-item">
                    Home Nine
                  </a>
                </li>
                <li>
                  <a href="index-ten.html" className="sub-menu-item">
                    Home Ten{" "}
                    <span className="bg-gray-50 dark:bg-slate-800 text-[10px] shadow shadow-gray-300 dark:shadow-gray-700 font-bold px-2.5 py-0.5 rounded h-5 ms-1">
                      Light
                    </span>
                  </a>
                </li>
              </ul>
            </li>

            <li className="has-submenu parent-parent-menu-item">
              <a href="javascript:void(0)">Explore</a>
              <span className="menu-arrow"></span>
              <ul className="submenu">
                <li>
                  <a href="explore-one.html" className="sub-menu-item">
                    {" "}
                    Explore One
                  </a>
                </li>
                <li>
                  <a href="explore-two.html" className="sub-menu-item">
                    {" "}
                    Explore Two
                  </a>
                </li>
                <li>
                  <a href="explore-three.html" className="sub-menu-item">
                    {" "}
                    Explore Three
                  </a>
                </li>
                <li>
                  <a href="auction.html" className="sub-menu-item">
                    Live Auction
                  </a>
                </li>
                <li>
                  <a href="item-detail.html" className="sub-menu-item">
                    {" "}
                    Item Detail
                  </a>
                </li>
                <li>
                  <a href="activity.html" className="sub-menu-item">
                    {" "}
                    Activities
                  </a>
                </li>
                <li>
                  <a href="collections.html" className="sub-menu-item">
                    Collections
                  </a>
                </li>
                <li>
                  <a href="upload-work.html" className="sub-menu-item">
                    Upload Works
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a href="wallet.html" className="sub-menu-item">
                Wallet
              </a>
            </li>

            <li className="has-submenu parent-parent-menu-item">
              <a href="javascript:void(0)">Pages</a>
              <span className="menu-arrow"></span>
              <ul className="submenu">
                <li>
                  <a href="aboutus.html" className="sub-menu-item">
                    About Us
                  </a>
                </li>
                <li className="has-submenu parent-menu-item">
                  <a href="javascript:void(0)"> Creator </a>
                  <span className="submenu-arrow"></span>
                  <ul className="submenu">
                    <li>
                      <a href="creators.html" className="sub-menu-item">
                        {" "}
                        Creators
                      </a>
                    </li>
                    <li>
                      <a href="creator-profile.html" className="sub-menu-item">
                        {" "}
                        Creator Profile
                      </a>
                    </li>
                    <li>
                      <a
                        href="creator-profile-edit.html"
                        className="sub-menu-item"
                      >
                        {" "}
                        Profile Edit
                      </a>
                    </li>
                    <li>
                      <a href="become-creator.html" className="sub-menu-item">
                        {" "}
                        Become Creator
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu parent-menu-item">
                  <a href="javascript:void(0)"> Blog </a>
                  <span className="submenu-arrow"></span>
                  <ul className="submenu">
                    <li>
                      <a href="blogs.html" className="sub-menu-item">
                        {" "}
                        Blogs
                      </a>
                    </li>
                    <li>
                      <a href="blog-detail.html" className="sub-menu-item">
                        {" "}
                        Blog Detail
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu parent-menu-item">
                  <a href="javascript:void(0)"> Auth Pages </a>
                  <span className="submenu-arrow"></span>
                  <ul className="submenu">
                    <li>
                      <a href="login.html" className="sub-menu-item">
                        {" "}
                        Login
                      </a>
                    </li>
                    <li>
                      <a href="signup.html" className="sub-menu-item">
                        {" "}
                        Signup
                      </a>
                    </li>
                    <li>
                      <a href="reset-password.html" className="sub-menu-item">
                        {" "}
                        Forgot Password
                      </a>
                    </li>
                    <li>
                      <a href="lock-screen.html" className="sub-menu-item">
                        {" "}
                        Lock Screen
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu parent-menu-item">
                  <a href="javascript:void(0)"> Special </a>
                  <span className="submenu-arrow"></span>
                  <ul className="submenu">
                    <li>
                      <a href="comingsoon.html" className="sub-menu-item">
                        {" "}
                        Coming Soon
                      </a>
                    </li>
                    <li>
                      <a href="maintenance.html" className="sub-menu-item">
                        {" "}
                        Maintenance
                      </a>
                    </li>
                    <li>
                      <a href="error.html" className="sub-menu-item">
                        {" "}
                        404!
                      </a>
                    </li>
                    <li>
                      <a href="thankyou.html" className="sub-menu-item">
                        {" "}
                        Thank you
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu parent-menu-item">
                  <a href="javascript:void(0)"> Help Center </a>
                  <span className="submenu-arrow"></span>
                  <ul className="submenu">
                    <li>
                      <a
                        href="helpcenter-overview.html"
                        className="sub-menu-item"
                      >
                        {" "}
                        Overview
                      </a>
                    </li>
                    <li>
                      <a href="helpcenter-faqs.html" className="sub-menu-item">
                        {" "}
                        FAQs
                      </a>
                    </li>
                    <li>
                      <a
                        href="helpcenter-guides.html"
                        className="sub-menu-item"
                      >
                        {" "}
                        Guides
                      </a>
                    </li>
                    <li>
                      <a
                        href="helpcenter-support.html"
                        className="sub-menu-item"
                      >
                        {" "}
                        Support
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="terms.html" className="sub-menu-item">
                    Terms Policy
                  </a>
                </li>
                <li>
                  <a href="privacy.html" className="sub-menu-item">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a href="contact.html" className="sub-menu-item">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
