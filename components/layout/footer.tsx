import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import cx from 'classnames';

export default function footer() {
  return (
    <section
      id="main-footer"
      className={cx(
        "relative z-10 flex flex-col",
        "w-[100vw] lg:h-[100%]",
        "bg-bg text-black",
      )}
    >
      <div
        id="contenttop"
        className={cx(
          "relative flex place-content-center",
          "my-[6rem]",
          "bg-bg font-din text-7xl text-center",
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
          "relative flex flex-col gap-[5rem]",
          "bg-black",
        )}
      >
        <div
          id="logo"
          className={cx(
            "flex place-content-center",
            "lg:mt-[10rem] mt-[5rem] m-[1rem]",
          )}
        >
          <Image
            src="/logo.svg"
            height={1300}
            width={1300}
            alt="meowmag"
          />
        </div>
        <div
          id="footer"
          className={cx(
            "flex place-content-center",
            "m-[1rem]",
            "text-center lg:text-lg text-sm text-uppercase text-primary tracking-wider",
          )}
        >
          © 2022 · meow magazine · todos los derechos reservados · legal ·  obra:luisgl
        </div>
      </div>
    </section>
  );
};
