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
        "relative place-content-center grid grid-cols-1 lg:grid-cols-2 gap-[1rem]",
        "w-[100vw] h-[100%]",
        "bg-bg",
      )}
    >
      <div
        id="post"
        className={cx(
          "group cursor-pointer relative flex flex-col m-auto",
          "w-[20rem] md:w-[40rem] lg:w-[40rem] 2xl:w-[50rem] 4xl:w-[60rem]",
          "h-[30rem] md:h-[40rem] lg:h-[30rem] 2xl:h-[40rem] 4xl:h-[50rem]",
          "bg-bg",
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
              "bg-transparent font-basier text-2xl text-uppercase",
            )}
          >
            <div className="flex-row w-[100%] h-[3rem] bg-bg rounded-sm hidden lg:inline-flex">
              <div className="bg-black p-[.5rem] text-bg  h-[100%] w-[100%]">
                andrea zuckerman.
              </div>
            </div>
            <div className="flex flex-row w-[100%] h-[3rem] bg-bg rounded-sm lg:hidden">
              <div className="bg-black p-[.5rem] text-bg h-[100%] w-[100%]">
              <Marquee gradient={false} delay={3} speed={62} loop={5} pauseOnHover={true}>
                andrea zuckerman.
              </Marquee>
              </div>
            </div>
          </div>
        </div>
        <div
          id="content-post"
          className={cx(
            "relative flex flex-col gap-[1rem]",
            "mt-[3rem] mx-[.5rem]",
            "bg-bg font-basier",
          )}
        >
          <div id="content-post-tags" className="font-bold text-primary text-sm text-uppercase">
            activismo, feminismo, riot girl
          </div>
          <div className="group-hover:underline">
            <p className="text-base">
              Un grupo de amigas se reunieron para hacer un divertido STORY de moda que reflejara su amistad en una secuencia divertida, dulce y creativa.
            </p>
          </div>
        </div>
      </div>
<div
        id="post"
        className={cx(
          "group cursor-pointer relative flex flex-col m-auto",
          "w-[20rem] md:w-[40rem] lg:w-[40rem] 2xl:w-[50rem] 4xl:w-[60rem]",
          "h-[30rem] md:h-[40rem] lg:h-[30rem] 2xl:h-[40rem] 4xl:h-[50rem]",
          "bg-bg",
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
              "bg-transparent font-basier text-2xl text-uppercase",
            )}
          >
            <div className="flex-row w-[100%] h-[3rem] bg-bg rounded-sm hidden lg:inline-flex">
              <div className="bg-black p-[.5rem] text-bg  h-[100%] w-[100%]">
                andrea zuckerman.
              </div>
            </div>
            <div className="flex flex-row w-[100%] h-[3rem] bg-bg rounded-sm lg:hidden">
              <div className="bg-black p-[.5rem] text-bg h-[100%] w-[100%]">
              <Marquee gradient={false} delay={3} speed={62} loop={5} pauseOnHover={true}>
                andrea zuckerman.
              </Marquee>
              </div>
            </div>
          </div>
        </div>
        <div
          id="content-post"
          className={cx(
            "relative flex flex-col gap-[1rem]",
            "mt-[3rem] mx-[.5rem]",
            "bg-bg font-basier",
          )}
        >
          <div id="content-post-tags" className="font-bold text-primary text-sm text-uppercase">
            activismo, feminismo, riot girl
          </div>
          <div className="group-hover:underline">
            <p className="text-base">
              Un grupo de amigas se reunieron para hacer un divertido STORY de moda que reflejara su amistad en una secuencia divertida, dulce y creativa.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};
