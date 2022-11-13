import React, { useState, Fragment } from 'react';
import Link from 'next/link';
import cx from 'classnames';
import { Menu, Transition } from '@headlessui/react';

export default function navbar() {
  return (
    <nav
      id="root"
      className={cx(
        "sticky top-0 z-50",
        "w-[100%] h-[3rem]",
        "bg-pink-500",
      )}
    >
      <div
        id="mainlayer"
        className={cx(
          "relative flex flex-row justify-between",
          "h-[100%] mx-[.5rem]",
          "font-din text-2xl tracking-wider",
          "bg-yellow-500",
        )}
      >
        <div
          id="contentleft"
          className={cx(
            "static",
            "h-[100%] w-[25%] my-[.5rem]",
            "text-black",
          )}
        >
          <nav
            id="itemlist"
            className={cx(
              "relative flex",
              " md:w-[28rem] w-[15rem] h-[100%]",
              " bg-white bg-watermark bg-right-bottom bg-no-repeat rounded-sm shadow-md",
            )}
          >
            <Menu as="section" className="relative flex mx-[.5rem]">
              <Menu.Button  className="group flex w-full mx-[.25rem] mt-[.5rem]">
                <div className="z-40">READ</div>
                <div
                  className={cx(
                    "-ml-[3rem] w-[3.3rem] h-[80%]",
                    "text-transparent rounded-sm shadow-sm group-hover:bg-alt group-hover:animate-fadein",
                  )}
                >
                </div>
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="transform opacity-100 scale-100"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-200"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
              <Menu.Items
                className={cx(
                  "absolute grid content-center",
                  "md:w-[28rem] w-[10rem] h-[7rem] mt-[2.9rem] -ml-[.5rem] origin-top",
                  "bg-white rounded-sm rounded-t-none shadow-md",
                  "focus:outline-none",
                )}
              >
                <div className="flex flex-row justify-between list-none">
                  <li className="animate-fadeinright">
                    <ul>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          href="/"
                          className={`${
                            active ? 'text-violet-100' : 'text-gray-900'
                          } group flex w-full items-center mx-[1rem]`}
                        >
                          CATEGORY
                        </Link>
                      )}
                    </Menu.Item>
                    </ul>
                    <ul>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          href="/"
                          className={`${
                            active ? 'text-violet-100' : 'text-gray-900'
                          } group flex w-full items-center mx-[1rem]`}
                        >
                          CATEGORY 2
                        </Link>
                      )}
                    </Menu.Item>
                    </ul>
                    </li>
                    <li className="animate-fadeinright">
                    <ul>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          href="/"
                          className={`${
                            active ? 'text-violet-100' : 'text-gray-900'
                          } group flex w-full items-center mx-[1rem]`}
                        >
                          CATEGORY
                        </Link>
                      )}
                    </Menu.Item>
                    </ul>
                    <ul>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          href="/"
                          className={`${
                            active ? 'text-violet-100' : 'text-gray-900'
                          } group flex w-full items-center mx-[1rem]`}
                        >
                          CATEGORY 2
                        </Link>
                      )}
                    </Menu.Item>
                    </ul>
                    </li>
                    <div className="bg-red-900 mx-[1rem]">adadad</div>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
            <Menu as="section" className="relative flex md:mx-[.5rem] mx-0">
              <Menu.Button
                className={cx(
                  "group flex",
                  "w-full mx-[.25rem] mt-[.5rem]",
                  "md:inline-flex hidden",
                )}
              >
                <div className="z-40">FOLLOW</div>
                <span
                  className={cx(
                    "-ml-[4.5rem] w-[4.8rem] h-[80%]",
                    "text-transparent rounded-sm shadow-sm group-hover:bg-alt group-hover:animate-fadein",

                  )}
                >
                </span>
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-100 scale-100"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
              <Menu.Items
                className={cx(
                  "absolute grid content-center",
                  "md:w-[28rem] w-[15rem] h-[7rem] mt-[2.9rem] -ml-[5.03rem] origin-top",
                  "bg-white rounded-sm rounded-t-none shadow-md",
                  "focus:outline-none",
                )}
              >
                <div className="flex flex-row justify-between list-none">
                  <li className="animate-fadeinright">
                    <ul>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          href="/"
                          className={`${
                            active ? 'text-violet-100' : 'text-gray-900'
                          } group flex w-full items-center mx-[1rem]`}
                        >
                          TWITTER
                        </Link>
                      )}
                    </Menu.Item>
                    </ul>
                    <ul>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          href="/"
                          className={`${
                            active ? 'text-violet-100' : 'text-gray-900'
                          } group flex w-full items-center mx-[1rem]`}
                        >
                          FACEBOOK
                        </Link>
                      )}
                    </Menu.Item>
                    </ul>
                    </li>
                    <li className="animate-fadeinright">
                    <ul>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          href="/"
                          className={`${
                            active ? 'text-violet-100' : 'text-gray-900'
                          } group flex w-full items-center mx-[1rem]`}
                        >
                          TIKTOK
                        </Link>
                      )}
                    </Menu.Item>
                    </ul>
                    <ul>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          href="/"
                          className={`${
                            active ? 'text-violet-100' : 'text-gray-900'
                          } group flex w-full items-center mx-[1rem]`}
                        >
                         INSTAGRAM
                        </Link>
                      )}
                    </Menu.Item>
                    </ul>
                    </li>
                    <div className="bg-red-900 mx-[1rem]">adadad</div>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
            <Menu as="section" className="relative flex md:mx-[.5rem] mx-0">
              <Menu.Button
                className={cx(
                  "group flex",
                  "w-full mx-[.25rem] mt-[.5rem]",
                  "md:inline-flex hidden",
                )}
              >
                <div className="z-40">MANIFESTO</div>
                <div
                  className={cx(
                    "-ml-[6.1rem] w-[6.4rem] h-[80%]",
                    "text-transparent rounded-sm shadow-sm group-hover:bg-alt group-hover:animate-fadein",
                  )}
                >
                </div>
              </Menu.Button>
            </Menu>
            <Menu as="section" className="relative flex mx-[.5rem]">
              <Menu.Button id="mobile-menu" className="group flex w-full mx-[.25rem] mt-[.5rem]">
                <div className="z-40">MENU</div>
                <div
                  className={cx(
                    "-ml-[3.2rem] w-[3.5rem] h-[80%]",
                    "text-transparent rounded-sm shadow-sm group-hover:bg-alt group-hover:animate-fadein",
                  )}
                >
                </div>
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="transform opacity-50 scale-300"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-200"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
              <Menu.Items
                className={cx(
                  "fixed top-0 left-0 z-50",
                  "w-[100vw] h-[100vh] origin-top overflow-auto",
                  "bg-alt rounded-sm rounded-t-none shadow-md",
                  "focus:outline-none",
                )}
              >
                <div
                  id="mainsublayer"
                  className={cx(
                    "relative flex flex-row justify-end",
                    "h-[3rem] mx-[.5rem]",
                    "font-din text-2xl tracking-wider",
                    "bg-transparent",
                  )}
                >
                  <div
                    id="contentright"
                    className={cx(
                      "relative flex justify-end",
                      "h-[100%] w-[13%] my-[.5rem]",
                      "text-black",
                    )}
                  >
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          href="#"
                          className={`${
                            active ? 'text-violet-500 transition ease-in-out duration-200' : 'text-gray-900'
                          } group font-basier font-bold flex items-center mx-[1rem]`}
                        >
                          X
                        </Link>
                      )}
                    </Menu.Item>
                  </div>
                </div>
                <div className="h-[140%] w-[100%] grid place-content-center">
                  <div className="flex flex-col gap-[2rem] list-none">
                    <li className="flex flex-col gap-[2rem] text-7xl animate-fadeinright">
                      <ul>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href="#"
                              className={`${
                                active ? 'text-violet-100' : 'text-gray-900'
                              } group flex w-full items-center mx-[1rem]`}
                            >
                              FOLLOW
                            </Link>
                          )}
                        </Menu.Item>
                      </ul>
                      <ul>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href="/"
                              className={`${
                                active ? 'text-violet-100' : 'text-gray-900'
                              } group flex w-full items-center mx-[1rem]`}
                            >
                              MANIFESTO
                            </Link>
                          )}
                        </Menu.Item>
                      </ul>
                      <ul>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href="#"
                              className={`${
                                active ? 'text-violet-100' : 'text-gray-900'
                              } group flex w-full items-center mx-[1rem]`}
                            >
                              CLOSE
                            </Link>
                          )}
                        </Menu.Item>
                      </ul>

                    </li>
                    <div className="bg-secondary w-[300px] h-[300px] mx-[1rem]">
                      ad
                    </div>
                  </div>
                </div>
              </Menu.Items>
              </Transition>
            </Menu>
          </nav>
        </div>
        <div
          id="contentcenter"
          className={cx(
            "static grid place-content-center",
            "h-[100%] w-[25%]",
            "bg-green-500",
          )}
        >
          <nav id="itemlist" className="flex flex-row gap-[1rem]">
            <Link href="/">
              item
            </Link>
          </nav>
        </div>
        <div
          id="contentright"
          className={cx(
            "static grid place-content-center",
            "h-[100%] w-[25%]",
            "bg-green-500",
          )}
        >
          <nav id="itemlist">

          </nav>
        </div>
      </div>
    </nav>
  );
};
