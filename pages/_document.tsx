import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <meta
          name="google-site-verification"
          content="vTCDlp5D7b1XCKT3Vf13uDJjGyppqkKgKgifpN2BY9U"
        />
        <meta
          name="naver-site-verification"
          content="382dc40b39a7ceaecde59cedac5d7d0ff49f9bbb"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script type="text/javascript" src="//wcs.naver.net/wcslog.js"></script>
        <script
          id="naver-tag-init"
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              if(!wcs_add) var wcs_add = {};
              wcs_add["wa"] = "16544cce57c76b0";
              if(window.wcs) {
                wcs_do();
              }
            `,
          }}
        ></script>
      </body>
    </Html>
  );
}
