import React, { useState } from 'react';
import Link from 'next/link';
import cx from 'classnames';
import Marquee from 'react-fast-marquee';

export default function outro() {
  return (
    <section
      id="mainlayer"
      className={cx(
        "relative z-10",
        "w-[100vw] h-[100vh]",
        "bg-bg text-black",
      )}
    >
      <div
        id="contenttop"
        className={cx(
          "absolute flex flex-col",
          "my-[6rem] gap-[5rem]",
          "bg-bg font-din text-7xl",
        )}
      >
        <div
          id="marquee"
          className={cx(
            "flex",
            "h-[9rem] w-[100vw] py-[.5rem]",
            "gradient-secondary hidden lg:inline-flex",
          )}
        >
          <Marquee gradient={false} delay={1.5} speed={52} loop={10} pauseOnHover={true}>
            <div className="flex flex-row gap-[10rem]">
            <Link href="#" aria-label="social media" className="hover:underline">
              INSTAGRAM
            </Link>
            <Link href="#" aria-label="social media" className="hover:underline">
              TIKTOK
            </Link>
            <Link href="#" aria-label="social media" className="hover:underline">
              FACEBOOK
            </Link>
            <Link href="#" aria-label="social media" className="hover:underline">
              TWITTER
            </Link>
            <span id="separator" className="w-[3rem]"/>
            </div>
          </Marquee>
        </div>
        <div
          id="marqueemobile"
          className={cx(
            "flex",
            "h-[9rem] w-[100vw] py-[.5rem]",
            "gradient-secondary lg:hidden",
          )}
        >
          <Marquee gradient={false} delay={1.5} speed={52} loop={10} pauseOnHover={true}>
            <div className="flex flex-row gap-[10rem]">
            <Link href="#" aria-label="social media" className="hover:underline">
              INSTAGRAM
            </Link>
            <Link href="#" aria-label="social media" className="hover:underline">
              TIKTOK
            </Link>
            <span id="separator" className="w-[3rem]"/>
            </div>
          </Marquee>
        </div>
        <div
          id="marqueemobiletwo"
          className={cx(
            "flex",
            "h-[9rem] w-[100vw] py-[.5rem]",
            "gradient-secondary lg:hidden",
          )}
        >
          <Marquee gradient={false} delay={1.5} speed={52} loop={10} pauseOnHover={true}>
            <div className="flex flex-row gap-[10rem]">
            <Link href="#" aria-label="social media" className="hover:underline">
              FACEBOOK
            </Link>
            <Link href="#" aria-label="social media" className="hover:underline">
              TWITTER
            </Link>
            <span id="separator" className="w-[3rem]"/>
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
};
