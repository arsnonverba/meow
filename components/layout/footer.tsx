import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import cx from 'classnames';

export default function footer() {
  return (
    <section
      id="main-footer"
      className={cx(
        "relative z-10",
        "w-[100vw] h-[100vh]",
        "bg-bg text-black",
      )}
    >
      <div
        id="contenttop"
        className={cx(
          "relative flex-col lg:gap-[6rem] gap-[.5rem]",
          "w-[100%] py-[4rem]",
          "bg-bg font-din lg:text-7xl text-6xl text-center",
        )}
      >
        <div className="flex flex-col gap-[3rem]">
          <Link href="#" aria-label="manifest" className="hover:text-alt transition duration-200 ease-in-out">
            MANIFESTO
            </Link>
          <Link href="mailto:hello@meowmag.mx" aria-label="mail" className="hover:text-alt transition duration-200 ease-in-out">
            ESCRÍBENOS
          </Link>
          <Link href="mailto:contacto@meowmag.mx" aria-label="mail" className="hover:text-alt transition duration-200 ease-in-out">
            MANDA AMOR
          </Link>
          <Link href="#main-intro" aria-label="social" className="hover:text-alt transition duration-200 ease-in-out">
            TOP
          </Link>
        </div>
      </div>
      <div
        id="contentbottom"
        className={cx(
          "relative lg:gap-[6rem] gap-[.5rem]",
          "bg-black",
        )}
      >
        <div
          id="logo-image"
          className={cx(
            "relative mx-auto",
            "xl:w-[70rem] lg:w-[50rem] sm:w-[30rem] w-[20rem]",
            "xl:h-[25rem] lg:h-[20rem] sm:h-[15rem] h-[12rem]",
            "bg-transparent",
          )}
        >
          <div
            id="content-image"
            className={cx(
              "relative",
              "w-[100%] h-[100%]",
              "",
            )}
          >
            <Image
              src="/logo.svg"
              fill
              sizes="100%"
              alt="meow-logo"
              className="object-fill"
            />
          </div>
        </div>

        <div
          id="footer"
          className={cx(
            "relative place-content-center",
            "p-[1rem]",
            "text-center lg:text-base text-xs text-uppercase text-primary tracking-wider",
          )}
        >
          <p>
            © MEOW MAGAZINE 2023 ~ todos los derechos reservados · legal
          <a
            href="https://luis.gl"
            className={cx(
              "flex place-content-center",
              "gap-[.2rem] p-[.7rem]",
              "hover:animate-spin",
            )}
          >
            <span>
              <Image
                src="/luisgl.svg"
                height={16}
                width={16}
                alt="luis.gl"
              />
            </span>
          </a>
          </p>
        </div>
      </div>
    </section>
  );
};
