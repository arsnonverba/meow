import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import cx from 'classnames';

export default function intro() {
  return (
    <section
      id="main-intro"
      className={cx(
        "relative",
        "w-[100vw] h-[100vh]",
        "bg-bg",
      )}
    >
      <div
        id="content-image"
        className={cx(
          "absolute flex place-content-center",
          "w-[100%] h-[100%]",
          "bg-bg",
        )}
      >
        <Image
            src="/beauty.jpg"
            fill
            sizes
            alt="meowmag"
          />
      </div>
      <div
        id="content-title"
        className={cx(
          "absolute flex",
          "w-[100%] h-[100%]",
          "bg-transparent font-din text-2xl text-uppercase",
        )}
      >
        <div className="bg-secondary">
          lalala
        </div>
      </div>
    </section>
  );
};
