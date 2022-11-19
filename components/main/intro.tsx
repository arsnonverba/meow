import React, { useState } from 'react';
import Link from 'next/link';
import cx from 'classnames';
import Marquee from 'react-fast-marquee';

export default function outro() {
  return (
    <section
      id="mainlayer"
      className={cx(
        "relative z-10 flex flex-col",
        "w-[100vw] h-[100vh]",
        "bg-bg text-black",
      )}
    >
      <div
        id="content"
        className={cx(
          "absolute flex flex-col",
          "my-[8rem] gap-[5rem]",
          "bg-bg font-din text-7xl",
        )}
      >
        <div
          id="marquee"
          className={cx(
            "flex",
            "h-[9rem] w-[100vw] py-[.5rem]",
            "gradient-primary hidden lg:inline-flex",
          )}
        >
          <Marquee gradient={false} delay={6} speed={90} loop={5} pauseOnHover={true}>
            <div className="flex flex-row gap-[10rem]">
            <Link href="#" aria-label="social media" className="hover:underline">
              STORIES
            </Link>
            <Link href="#" aria-label="social media" className="hover:underline">
              FASHION
            </Link>
            <Link href="#" aria-label="social media" className="hover:underline">
              BEAUTY
            </Link>
            <Link href="#" aria-label="social media" className="hover:underline">
              CULTURE
            </Link>
            </div>
          </Marquee>
        </div>
        <div
          id="marqueetwo"
          className={cx(
            "flex",
            "h-[9rem] w-[100vw] py-[.5rem]",
            "gradient-primary-reverse hidden lg:inline-flex",
          )}
        >
          <Marquee gradient={false} delay={5} speed={90} direction="right" loop={5} pauseOnHover={true}>
            <div className="flex flex-row gap-[10rem]">
            <Link href="#" aria-label="social media" className="hover:underline">
              HIGHLIGHTS
            </Link>
            <Link href="#" aria-label="social media" className="hover:underline">
              PLAY ME
            </Link>
            <Link href="#" aria-label="social media" className="hover:underline">
              THINK
            </Link>
            <Link href="#" aria-label="social media" className="hover:underline">
              TRAVEL SERIES
            </Link>
            <span id="separator" className="w-[1rem]"/>
            </div>
          </Marquee>
        </div>
        <div
          id="marqueemobile"
          className={cx(
            "flex",
            "h-[9rem] w-[100vw] py-[.5rem]",
            "gradient-primary lg:hidden",
          )}
        >
          <Marquee gradient={false} delay={3} speed={62} loop={10} pauseOnHover={true}>
            <div className="flex flex-row gap-[10rem]">
            <Link href="#" aria-label="social media" className="hover:underline">
              STORIES
            </Link>
            <Link href="#" aria-label="social media" className="hover:underline">
              FASHION
            </Link>
            <span id="separator" className="w-[1rem]"/>
            </div>
          </Marquee>
        </div>
        <div
          id="marqueemobile"
          className={cx(
            "flex",
            "h-[9rem] w-[100vw] py-[.5rem]",
            "gradient-primary-reverse lg:hidden",
          )}
        >
          <Marquee gradient={false} delay={2} speed={62} direction="right" loop={10} pauseOnHover={true}>
            <div className="flex flex-row gap-[10rem]">
            <Link href="#" aria-label="social media" className="hover:underline">
              BEAUTY
            </Link>
            <Link href="#" aria-label="social media" className="hover:underline">
              CULTURE
            </Link>
            <span id="separator" className="w-[1rem]"/>
            </div>
          </Marquee>
        </div>
        <div
          id="marqueemobiletwo"
          className={cx(
            "flex",
            "h-[9rem] w-[100vw] py-[.5rem]",
            "gradient-primary lg:hidden",
          )}
        >
          <Marquee gradient={false} delay={5} speed={62} direction="left" loop={10} pauseOnHover={true}>
            <div className="flex flex-row gap-[10rem]">
            <Link href="#" aria-label="social media" className="hover:underline">
              HIGHLIGHTS
            </Link>
            <Link href="#" aria-label="social media" className="hover:underline">
              PLAY ME
            </Link>
            <span id="separator" className="w-[1rem]"/>
            </div>
          </Marquee>
        </div>
        <div
          id="marqueemobilethree"
          className={cx(
            "flex",
            "h-[9rem] w-[100vw] py-[.5rem]",
            "gradient-primary-reverse lg:hidden",
          )}
        >
          <Marquee gradient={false} delay={3} speed={62} direction="right" loop={10} pauseOnHover={true}>
            <div className="flex flex-row gap-[10rem]">
            <Link href="#" aria-label="social media" className="hover:underline">
              THINK
            </Link>
            <Link href="#" aria-label="social media" className="hover:underline">
              TRAVEL SERIES
            </Link>
            <span id="separator" className="w-[1rem]"/>
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
};
