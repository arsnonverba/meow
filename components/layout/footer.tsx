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
          "bg-bg font-din text-6xl text-center",
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
          "relative flex-col lg:gap-[6rem] gap-[.5rem]",
          "bg-black",
        )}
      >
        <div
          id="logo"
          className={cx(
            "relative",
            "w-[100vw] lg:h-[60vh] h-[30vh]",
          )}
        >
          <Image
            src="/logo.svg"
            fill
            sizes="100vw"
            alt="meowmag"
          />
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
            © MEOW MAGAZINE 2022 ~ todos los derechos reservados · legal
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
