import React, { useState } from 'react';
import Link from 'next/link';
import cx from 'classnames';
import Marquee from 'react-fast-marquee';

export default function outro() {
  return (
    <section
      id="mainlayer"
      className={cx(
        "absolute z-10 flex flex-col",
        "w-[100vw] lg:h-[70rem] h-[105rem]",
        "bg-bg text-black",
      )}
    >
      <div
        id="contenttop"
        className={cx(
          "relative flex flex-col",
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
          <Marquee gradient={false} delay={10} speed={90} loop={10} pauseOnHover={true}>
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
          <Marquee gradient={false} delay={10} speed={62} loop={10} pauseOnHover={true}>
            <div className="flex flex-row gap-[5rem]">
            <Link href="#" aria-label="social media" className="hover:underline">
              INSTAGRAM
            </Link>
            <Link href="#" aria-label="social media" className="hover:underline">
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
          <Marquee gradient={false} delay={12} direction="right" speed={62} loop={10} pauseOnHover={true}>
            <div className="flex flex-row gap-[5rem]">
            <Link href="#" aria-label="social media" className="hover:underline">
              FACEBOOK
            </Link>
            <Link href="#" aria-label="social media" className="hover:underline">
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
          "relative flex",
          "lg:m-[6rem] m-[1.5rem]",
          "bg-transparent text-black font-basier lg:text-4xl text-2xl text-uppercase tracking-wider",
        )}
      >
        <div>
          meowmag© es una propuesta editorial digital con el objetivo de dar a conocer el lado fresco, inteligente y contemporáneo de la moda nacional e internacional a través del ejercicio periodístico comprometido y creativo. Asimismo, se enriquece con temas de belleza, música, cultura y estilo de vida que reflejan y envuelven al lector en una experiencia dinámica y accesible para ser un referente de lo que está pasando justo aquí y ahora. Creada completamente en la cdmx, con la colaboración de talentos nacionales e internacionales.
        </div>
      </div>
    </section>
  );
};
