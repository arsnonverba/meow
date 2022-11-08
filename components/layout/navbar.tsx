import React, { useState } from 'react';
import Link from 'next/Link';
import cx from 'classnames';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';

type Props = unknown;

const navbar = (props: Props) => {
  return (
    <nav
      id="root"
      className={cx(
        "sticky top-0 z-50",
        "w-[100%] h-[3rem]",
        "bg-pink-500",
      )}
    >
      <div
        id="mainlayer"
        className={cx(
          "relative flex flex-row justify-between",
          "h-[100%] mx-[.5rem]",
          "font-din text-2xl tracking-wider",
          "bg-yellow-500",
        )}
      >
        <div
          id="contentleft"
          className={cx(
            "static grid place-content-center",
            "h-[100%] w-[25%] mx-[.5rem]",
            "bg-green-500",
          )}
        >
          <nav id="itemlist" className="flex flex-row gap-[1rem]">
          </nav>
        </div>
        <div
          id="contentcenter"
          className={cx(
            "static grid place-content-center",
            "h-[100%] w-[25%] mx-[.5rem]",
            "bg-green-500",
          )}
        >
          <nav id="itemlist" className="flex flex-row gap-[1rem]">
            <Link id="item1" href="/" aria-label="menu item">
              item
            </Link>
          </nav>
        </div>
        <div
          id="contentright"
          className={cx(
            "static grid place-content-center",
            "h-[100%] w-[25%] mx-[.5rem]",
            "bg-green-500",
          )}
        >
          <nav id="itemlist">

          </nav>
        </div>
      </div>
    </nav>
  );
};
export default navbar;
