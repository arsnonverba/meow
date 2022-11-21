import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import cx from 'classnames';
import Marquee from 'react-fast-marquee';

export default function intro() {
  return (
    <section
      id="main-intro"
      className={cx(
        "relative top-0",
        "w-[100vw] h-[100vh]",
        "bg-bg",
      )}
    >
      <div
        id="content-image"
        className={cx(
          "absolute",
          "w-[100%] h-[100%]",
          "bg-bg",
        )}
      >
        <Image
            src="/beauty.jpg"
            fill
            sizes="100vw"
            alt="meowmag"
            className="object-cover"
        />
      </div>
      <div
        id="content-title"
        className={cx(
          "absolute flex bottom-0 place-content-end",
          "w-[100%] lg:h-[10vh] sm:h-[30vh] h-[20vh]",
          "bg-transparent font-din text-2xl text-uppercase",
        )}
      >
        <div className="flex-row m-[1rem] h-[3rem] bg-bg rounded-sm shadow-md hidden md:inline-flex">
          <div className="bg-black p-[.5rem] text-bg h-[100%] rounded-l-sm">
            fashion
          </div>
          <div className="m-[.5rem]">
            sentirte bien con lo que te pones, el feeling wear de florencia dávalos.
          </div>
        </div>
        <div className="flex flex-row m-[.5rem] h-[3rem] bg-bg rounded-sm shadow-md md:hidden">
          <div className="bg-black p-[.5rem] text-bg h-[100%] rounded-l-sm">
            fashion
          </div>
          <div className="m-[.5rem]">
          <Marquee gradient={false} delay={3} speed={62} loop={5} pauseOnHover={true}>
            sentirte bien con lo que te pones, el feeling wear de florencia dávalos.
          </Marquee>
          </div>
        </div>

      </div>
    </section>
  );
};
