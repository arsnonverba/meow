import type { ReactElement } from 'react';
import Layout from '../components/layout';
import type { NextPageWithLayout } from './_app';
import cx from 'classnames';
import Categories from '../components/main/categories';

const Page: NextPageWithLayout = () => {
  return (
    <section
      id="mainlayer"
      className={cx(
        "relative z-10 flex place-content-center",
        "w-[100vw] lg:h-[75vh] h-[65rem]",
        "bg-bg text-black",
      )}
    >
      <Categories />
    </section>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>{page}</Layout>
  )
}

export default Page
