import React, { useState, Fragment } from 'react';
import Link from 'next/Link';
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
          <nav id="itemlist" className="relative w-[24rem] h-[100%] flex bg-white rounded-sm shadow-md">
            <Menu as="section" className="relative flex mx-[.5rem]">
              <Menu.Button className="group flex w-full mx-[.25rem] mt-[.5rem]">
                <div className="z-40">READ</div>
                <div
                  className={cx(
                    "bg-red-400 -ml-[3rem] w-[3.3rem] h-[80%]",
                    "text-transparent rounded-sm shadow-sm group-hover:bg-violet-800 group-hover:animate-fadein",
                  )}
                >
                </div>
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
                  "w-[24rem] h-[7rem] mt-[2.9rem] -ml-[.5rem] origin-top",
                  "bg-white rounded-sm rounded-t-none shadow-md",
                  "focus:outline-none",
                )}
              >
                <div className="flex flex-row justify-between list-none">
                  <li>
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
                    <li>
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
            <Menu as="section" className="relative flex mx-[.5rem]">
              <Menu.Button className="group flex w-full mx-[.25rem] mt-[.5rem]">
                <div className="z-40">FOLLOW</div>
                <div
                  className={cx(
                    "bg-red-400 -ml-[4.5rem] w-[4.8rem] h-[80%]",
                    "text-transparent rounded-sm shadow-sm group-hover:bg-violet-800 group-hover:animate-fadein",
                  )}
                >
                </div>
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
                  "w-[24rem] h-[7rem] mt-[2.9rem] -ml-[5.03rem] origin-top",
                  "bg-white rounded-sm rounded-t-none shadow-md",
                  "focus:outline-none",
                )}
              >
                <div className="flex flex-row justify-between list-none">
                  <li>
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
                    <li>
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
            <Menu as="section" className="relative flex mx-[.5rem]">
              <Menu.Button className="group flex w-full mx-[.25rem] mt-[.5rem]">
                <div className="z-40">MANIFESTO</div>
                <div
                  className={cx(
                    "bg-red-500 -ml-[6.1rem] w-[6.4rem] h-[80%]",
                    "text-transparent rounded-sm shadow-sm group-hover:bg-violet-800 group-hover:animate-fadein",
                  )}
                >
                </div>
              </Menu.Button>
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
