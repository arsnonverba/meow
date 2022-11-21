import type { ReactElement } from 'react';
import Layout from '../components/layout';
import type { NextPageWithLayout } from './_app';
import cx from 'classnames';
import Intro from '../components/main/intro';
import Categories from '../components/main/categories';

const Page: NextPageWithLayout = () => {
  return (
    <div
      id="mainlayer"
      className={cx(
        "relative z-10",
        "w-[100%] h-[100%]",
        "bg-bg text-black",
      )}
    >
      <Intro />
      <Categories />
    </div>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>{page}</Layout>
  )
}

export default Page
