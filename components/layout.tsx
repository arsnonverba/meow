import Head from 'next/head';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import Navbar from './layout/navbar';
import Outro from './layout/outro';
import Foot from './layout/footer';

interface PageMeta {
  title: string;
  description: string;
  cardImage: string;
}

interface Props {
  children: ReactNode;
  meta?: PageMeta;
}

export default function Layout({ children, meta: pageMeta }: Props) {
  const meta = {
    title: 'Meow Magazine',
    description: 'Onomatopoeia of fashion culture.',
    cardImage: '/og.png',
    ...pageMeta
  };
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#9007e0" />
        <meta name="msapplication-TileColor" content="#9007e0" />
        <meta name="theme-color" content="#9007e0" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://meowmag.mx${router.asPath}`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.cardImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@meowmag" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.cardImage} />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Outro />
      <Foot />
    </>
  );
};
