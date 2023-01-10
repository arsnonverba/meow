import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import cx from 'classnames';
import Marquee from 'react-fast-marquee';

export default function post() {
  return (
    <section
      id="main-layout-post"
      className={cx(
        "relative place-content-center grid grid-cols-1 lg:grid-cols-2 gap-[3rem]",
        "w-[100vw] h-[100%] py-[3rem]",
        "bg-white",
      )}
    >
      <h1
        id="pick-of-the-month"
        className={cx(
          "lg:w-[50%] w-[100%] mx-auto",
          "lg:col-span-2 flex place-content-center",
          "lg:animate-wiggle font-din text-7xl text-alt/30 py-[2rem]",
        )}
      >
          LATEST
      </h1>
      <div
        id="post"
        className={cx(
          "group cursor-pointer relative flex flex-col m-auto",
          "w-[20rem] sm:w-[40rem] lg:w-[30rem] 2xl:w-[50rem] 4xl:w-[60rem]",
          "h-[35rem] sm:h-[45rem] lg:h-[35rem] 2xl:h-[45rem] 4xl:h-[55rem]",
          "bg-white",
          "lg:hover:scale-105 transition duration-200 ease-in-out",
        )}
      >
        <div
          id="content-image"
          className={cx(
            "relative",
            "w-[100%] h-[100%]",
            "gradient-primary",
          )}
        >
          <Image
            src="/beauty.jpg"
            fill
            sizes="100%"
            alt="postimage"
            className="z-10 object-cover"
          />
          <div
            id="content-image-shadow"
            className={cx(
              "absolute -z-0",
              "w-[100%] h-[100%] md:ml-[1rem] mt-[1rem]",
              "gradient-primary blur-md group-hover:gradient-secondary",
            )}
          >
          </div>
          <div
            id="content-image-title"
            className={cx(
              "absolute z-20 flex bottom-0 place-content-end",
              "w-[100%] h-[10vh]",
              "bg-transparent font-din text-2xl text-uppercase",
            )}
          >
            <div className="flex-row w-[100%] h-[3rem] bg-white rounded-sm">
              <div className="bg-black p-[.5rem] text-bg  h-[100%] w-[100%]">
                culture
              </div>
            </div>
          </div>
        </div>
        <div
          id="content-post"
          className={cx(
            "relative flex flex-col gap-[1rem]",
            "mt-[3rem] mx-[.5rem]",
            "bg-white font-basier",
          )}
        >
          <div className="group-hover:underline">
            <h1 className="text-uppercase pb-[1rem]">
              el feeling wear de andrea zuckerman por la cdmx.
            </h1>
            <p>
              Un grupo de amigas se reunieron para hacer un divertido STORY de moda que reflejara su amistad en una secuencia divertida, dulce y creativa.
            </p>
          </div>
        </div>
      </div>
<div
        id="post"
        className={cx(
          "group cursor-pointer relative flex flex-col m-auto",
          "w-[20rem] sm:w-[40rem] lg:w-[30rem] 2xl:w-[50rem] 4xl:w-[60rem]",
          "h-[35rem] sm:h-[45rem] lg:h-[35rem] 2xl:h-[45rem] 4xl:h-[55rem]",
          "bg-white",
          "lg:hover:scale-105 transition duration-200 ease-in-out",
        )}
      >
        <div
          id="content-image"
          className={cx(
            "relative",
            "w-[100%] h-[100%]",
            "gradient-primary",
          )}
        >
          <Image
            src="/beauty.jpg"
            fill
            sizes="100%"
            alt="postimage"
            className="z-10 object-cover"
          />
          <div
            id="content-image-shadow"
            className={cx(
              "absolute -z-0",
              "w-[100%] h-[100%] md:ml-[1rem] mt-[1rem]",
              "gradient-primary blur-md group-hover:gradient-secondary",
            )}
          >
          </div>
          <div
            id="content-image-title"
            className={cx(
              "absolute z-20 flex bottom-0 place-content-end",
              "w-[100%] h-[10vh]",
              "bg-transparent font-din text-2xl text-uppercase",
            )}
          >
            <div className="flex-row w-[100%] h-[3rem] bg-white rounded-sm">
              <div className="bg-black p-[.5rem] text-bg  h-[100%] w-[100%]">
                culture
              </div>
            </div>
          </div>
        </div>
        <div
          id="content-post"
          className={cx(
            "relative flex flex-col gap-[1rem]",
            "mt-[3rem] mx-[.5rem]",
            "bg-white font-basier",
          )}
        >
          <div className="group-hover:underline">
            <h1 className="text-uppercase pb-[1rem]">
              el feeling wear de andrea zuckerman por la cdmx.
            </h1>
            <p>
              Un grupo de amigas se reunieron para hacer un divertido STORY de moda que reflejara su amistad en una secuencia divertida, dulce y creativa.
            </p>
          </div>
        </div>
      </div>
<div
        id="post"
        className={cx(
          "group cursor-pointer relative flex flex-col m-auto",
          "w-[20rem] sm:w-[40rem] lg:w-[30rem] 2xl:w-[50rem] 4xl:w-[60rem]",
          "h-[35rem] sm:h-[45rem] lg:h-[35rem] 2xl:h-[45rem] 4xl:h-[55rem]",
          "bg-white",
          "lg:hover:scale-105 transition duration-200 ease-in-out",
        )}
      >
        <div
          id="content-image"
          className={cx(
            "relative",
            "w-[100%] h-[100%]",
            "gradient-primary",
          )}
        >
          <Image
            src="/beauty.jpg"
            fill
            sizes="100%"
            alt="postimage"
            className="z-10 object-cover"
          />
          <div
            id="content-image-shadow"
            className={cx(
              "absolute -z-0",
              "w-[100%] h-[100%] md:ml-[1rem] mt-[1rem]",
              "gradient-primary blur-md group-hover:gradient-secondary",
            )}
          >
          </div>
          <div
            id="content-image-title"
            className={cx(
              "absolute z-20 flex bottom-0 place-content-end",
              "w-[100%] h-[10vh]",
              "bg-transparent font-din text-2xl text-uppercase",
            )}
          >
            <div className="flex-row w-[100%] h-[3rem] bg-white rounded-sm">
              <div className="bg-black p-[.5rem] text-bg  h-[100%] w-[100%]">
                culture
              </div>
            </div>
          </div>
        </div>
        <div
          id="content-post"
          className={cx(
            "relative flex flex-col gap-[1rem]",
            "mt-[3rem] mx-[.5rem]",
            "bg-white font-basier",
          )}
        >
          <div className="group-hover:underline">
            <h1 className="text-uppercase pb-[1rem]">
              el feeling wear de andrea zuckerman por la cdmx.
            </h1>
            <p>
              Un grupo de amigas se reunieron para hacer un divertido STORY de moda que reflejara su amistad en una secuencia divertida, dulce y creativa.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};
