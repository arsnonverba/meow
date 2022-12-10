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
        "relative flex flex-col place-content-center",
        "w-[100%] lg:h-[65rem] h-[50rem]",
        "bg-bg",
      )}
    >
      <h1
        id="meow-pick"
        className={cx(
          "lg:w-[50%] w-[100%] h-[5rem] pt-[2rem] mx-auto flex place-content-center",
          "lg:animate-wiggle",
          "font-din text-7xl text-primary/30",
        )}
      >
        MEOW PICK
      </h1>
      <div
        id="post"
        className={cx(
          "group cursor-pointer relative flex flex-col m-auto",
          "w-[20rem] sm:w-[40rem] lg:w-[60rem] 2xl:w-[70rem] 4xl:w-[80rem]",
          "h-[35rem] sm:h-[45rem] lg:h-[45rem] 2xl:h-[55rem] 4xl:h-[65rem]",
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
            id="content-image-category"
            className={cx(
              "absolute z-20 flex bottom-0 place-content-end",
              "w-[100%] h-[10vh]",
              "bg-transparent font-din text-2xl text-uppercase",
            )}
          >
            <div className="flex-row w-[100%] h-[3rem] bg-bg rounded-sm">
              <div className="bg-black p-[.5rem] text-bg  h-[100%] w-[100%]">
                story
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
          <div className="group-hover:underline">
            <h1 className="text-uppercase pb-[1rem]">
              andrea zuckerman.
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
