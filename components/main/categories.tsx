import React, { useState } from 'react';
import Link from 'next/link';
import cx from 'classnames';
import Marquee from 'react-fast-marquee';

export default function categories() {
  return (
    <section
      id="main-intro"
      className={cx(
        "relative z-10 flex flex-col",
        "w-[100vw] 4xl:h-[60vh] xl:h-[75vh] h-[65rem]",
        "bg-bg text-black",
      )}
    >
      <div
        id="content"
        className={cx(
          "absolute flex flex-col",
          "py-[8rem] gap-[5rem]",
          "bg-bg font-din text-7xl",
        )}
      >
        <div
          id="marquee"
          className={cx(
            "flex",
            "h-[9rem] w-[100vw] py-[.5rem]",
            "gradient-primary hidden xl:inline-flex",
          )}
        >
          <Marquee gradient={false} delay={6} speed={90} loop={40} pauseOnHover={true}>
            <div className="flex flex-row gap-[9rem] 3xl:gap-[13rem] 4xl:gap-[15rem]">
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
            "gradient-primary-reverse hidden xl:inline-flex",
          )}
        >
          <Marquee gradient={false} delay={5} speed={95} direction="right" loop={40} pauseOnHover={true}>
            <div className="flex flex-row gap-[18rem] 3xl:gap-[13rem] 4xl:gap-[15rem]">
            <Link href="#" aria-label="social media" className="hover:underline">
              PLAY ME
            </Link>
            <Link href="#" aria-label="social media" className="hover:underline">
              THINK
            </Link>
            <Link href="#" aria-label="social media" className="hover:underline">
              TRAVEL
            </Link>
            <span id="separator" className="w-[1rem] 3xl:w-0"/>
            </div>
          </Marquee>
        </div>
        <div
          id="marqueemobile"
          className={cx(
            "flex",
            "h-[9rem] w-[100vw] py-[.5rem]",
            "gradient-primary xl:hidden",
          )}
        >
          <Marquee gradient={false} delay={3} speed={62} loop={60} pauseOnHover={true}>
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
            "gradient-primary-reverse xl:hidden",
          )}
        >
          <Marquee gradient={false} delay={2} speed={62} direction="right" loop={60} pauseOnHover={true}>
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
            "gradient-primary xl:hidden",
          )}
        >
          <Marquee gradient={false} delay={5} speed={62} direction="left" loop={60} pauseOnHover={true}>
            <div className="flex flex-row gap-[10rem]">
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
            "gradient-primary-reverse xl:hidden",
          )}
        >
          <Marquee gradient={false} delay={3} speed={62} direction="right" loop={60} pauseOnHover={true}>
            <div className="flex flex-row gap-[10rem]">
            <Link href="#" aria-label="social media" className="hover:underline">
              THINK
            </Link>
            <Link href="#" aria-label="social media" className="hover:underline">
              TRAVEL
            </Link>
            <span id="separator" className="w-[1rem]"/>
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
};
