import Layout from "@/components/layout/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Black_Han_Sans, Noto_Sans_KR } from "@next/font/google";
import { cls } from "@/helpers/client/utils";
import { SWRConfig } from "swr";
import { DefaultSeo } from "next-seo";
import SEO from "../seo.config";
import Script from "next/script";

const blackHanSans = Black_Han_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--blackHanSans",
});

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "400", "700", "900"],
  variable: "--notoSansKr",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher: (url: string) => fetch(url).then((res) => res.json()),
      }}
    >
      <DefaultSeo {...SEO} />
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-9595RXCQB5"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: ` window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-3KXXC0YXXF');`,
        }}
      />
      <Layout>
        <Head>
          {/*  <meta name="viewport" content="initial-scale=1.0, width=devide-width" /> */}
        </Head>
        <main className={cls(blackHanSans.variable, notoSansKr.variable)}>
          <Component {...pageProps} />
        </main>
      </Layout>
    </SWRConfig>
  );
}
