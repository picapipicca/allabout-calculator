import Layout from "@/components/layout/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Black_Han_Sans, Noto_Sans_KR } from "@next/font/google";
import { cls } from "@/helpers/utils";

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
    <Layout>
      <Head>
        {/* <title></title>
        <meta name="naver-site-verification" content="2a38d93696d0a16b1f97da7c83abe46194d8cf40" />
        <meta name="description" content="Income tax calculator 2023 - salary after tax"/>
        <meta name="viewport" content="initial-scale=1.0, width=devide-width" /> */}
      </Head>
      <main className={cls(blackHanSans.variable, notoSansKr.variable)}>
        <Component {...pageProps} />
      </main>
    </Layout>
  );
}
