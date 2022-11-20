import React, { useState } from 'react';
import Image from 'next/image';
import cx from 'classnames';

export default function loading() {
  return (
    <section
      id="main-loading"
      className="fixed z-50 top-0 w-[100vw] h-[100vh] bg-bg"
    >
      <div
        id="content"
        className={cx(
          "relative flex place-content-center",
          "m-[1rem]",
        )}
      >
        <div
          id="outro-logo"
          className={cx(
            "absolute z-20",
            "mt-[40vh]",
          )}
        >
          <div className="relative animate-[fadein_2s_ease-in]">
            <Image
                src="/logo.svg"
                height={600}
                width={600}
                alt="love"
                className=""
              />
          </div>
        </div>
        <div
          id="hearts"
          className={cx(
            "absolute z-10 flex flex-col place-content-center",
            "4xl:top-[20vh] 4xl:right-[35vw]",
            "3xl:top-[15vh] 3xl:right-[33vw]",
            "top-[10vh] right-[30vw] hidden lg:inline-flex",
          )}
        >
          <div className="relative animate-[heart_1.2s_ease-in]">
            <Image
                src="/heart.svg"
                height={300}
                width={300}
                alt="love"
                className=""
              />
          </div>
          <div className="relative animate-[heart_1s_ease-in-out] right-[13rem]">
            <Image
                src="/heart.svg"
                height={250}
                width={250}
                alt="love"
                className=""
              />
          </div>
          <div className="relative animate-[heart_.8s_ease-in]">
            <Image
                src="/heart.svg"
                height={200}
                width={200}
                alt="love"
                className=""
              />
          </div>
        </div>
        <div
          id="hearts"
          className={cx(
            "absolute z-10 flex flex-col place-content-center",
            "top-[20vh] right-[5vw] lg:hidden",
          )}
        >
          <div className="relative animate-[heart_1.2s_ease-in]">
            <Image
                src="/heart.svg"
                height={180}
                width={180}
                alt="love"
                className=""
              />
          </div>
          <div className="relative animate-[heart_1s_ease-in-out] right-[8rem]">
            <Image
                src="/heart.svg"
                height={150}
                width={150}
                alt="love"
                className=""
              />
          </div>
          <div className="relative animate-[heart_.8s_ease-in]">
            <Image
                src="/heart.svg"
                height={100}
                width={100}
                alt="love"
                className=""
              />
          </div>
        </div>
      </div>
    </section>
  );
};
