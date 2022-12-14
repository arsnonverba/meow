import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import cx from 'classnames';
import Marquee from 'react-fast-marquee';

export default function outro() {
  return (
    <section
      id="main-outro"
      className={cx(
        "relative z-10 flex flex-col",
        "w-[100vw] lg:h-[95rem] h-[125rem]",
        "bg-white text-black",
      )}
    >
      <div
        id="contenttop"
        className={cx(
          "relative flex flex-col",
          "my-[3rem] gap-[5rem]",
          "bg-white font-din text-7xl",
        )}
      >
        <div
          id="cat"
          className="flex place-content-center cursor-pointer hover:underline pb-[2rem]"
        >
          READ ALL
        </div>
        <div
          id="ad"
          className="flex mb-[3rem] bg-secondary h-[10rem] w-[50%] mx-auto cursor-pointer"
        >
          ad
        </div>

        <div
          id="marquee"
          className={cx(
            "flex",
            "h-[9rem] w-[100vw] py-[.5rem]",
            "gradient-secondary hidden lg:inline-flex",
          )}
        >
          <Marquee gradient={false} delay={10} speed={90} loop={40} pauseOnHover={true}>
            <div className="flex flex-row gap-[10rem] 3xl:gap-[13rem] 4xl:gap-[15rem]">
            <Link href="#" aria-label="social" className="hover:underline">
              INSTAGRAM
            </Link>
            <Link href="#" aria-label="social" className="hover:underline">
              TIKTOK
            </Link>
            <Link href="#" aria-label="social" className="hover:underline">
              FACEBOOK
            </Link>
            <Link href="#" aria-label="social" className="hover:underline">
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
          <Marquee gradient={false} delay={10} speed={62} loop={60} pauseOnHover={true}>
            <div className="flex flex-row gap-[5rem]">
            <Link href="#" aria-label="social" className="hover:underline">
              INSTAGRAM
            </Link>
            <Link href="#" aria-label="social" className="hover:underline">
              TIKTOK
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
            "gradient-secondary-reverse lg:hidden",
          )}
        >
          <Marquee gradient={false} delay={11} direction="right" speed={62} loop={60} pauseOnHover={true}>
            <div className="flex flex-row gap-[5rem]">
            <Link href="#" aria-label="social media" className="hover:underline">
              FACEBOOK
            </Link>
            <Link href="#" aria-label="social" className="hover:underline">
              TWITTER
            </Link>
            <span id="separator" className="w-[1rem]"/>
            </div>
          </Marquee>
        </div>
      </div>
      <div
        id="content bottom"
        className={cx(
          "relative",
          "w-[100%]",
          "bg-transparent text-black font-basier lg:text-4xl text-2xl text-uppercase tracking-wider",
        )}
      >
        <div
          id="outrotext"
          className={cx(
            "absolute z-20 flex",
            "lg:m-[6rem] m-[1.5rem]",
            "bg-transparent text-black font-basier sm:text-3xl text-xl text-uppercase tracking-wider",
          )}
        >
          <div>
            meowmag?? es una propuesta editorial digital con el objetivo de dar a conocer el lado fresco, inteligente y contempor??neo de la moda nacional e internacional a trav??s del ejercicio period??stico comprometido y creativo. Asimismo, se enriquece con temas de belleza, m??sica, cultura y estilo de vida que reflejan y envuelven al lector en una experiencia din??mica y accesible para ser un referente de lo que est?? pasando justo aqu?? y ahora. Creada completamente en la cdmx, con la colaboraci??n de talentos nacionales e internacionales.
          </div>
        </div>

        <div
          id="watermark"
          className={cx(
            "absolute z-10 flex flex-col",
            "lg:top-[15rem] top-[30rem] 3xl:right-[3rem] lg:right-[2rem] right-0",
          )}
        >
          <div className="relative lg:animate-[heart_1.2s_ease-in]">
            <Image
                src="/heart.svg"
                height={250}
                width={250}
                alt="love"
                className=""
              />
          </div>
          <div className="relative lg:animate-[heart_1s_ease-in-out] right-[13rem]">
            <Image
                src="/heart.svg"
                height={200}
                width={200}
                alt="love"
                className=""
              />
          </div>
          <div className="relative lg:animate-[heart_.8s_ease-in]">
            <Image
                src="/heart.svg"
                height={180}
                width={180}
                alt="love"
                className=""
              />
          </div>

        </div>
      </div>
    </section>
  );
};
