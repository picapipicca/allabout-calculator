import Footer from "@/components/layout/footer";
import Graph from "@/components/payTax/graph";
import { NextPage } from "next";
import { useState } from "react";
import { NextSeo } from "next-seo";
import Copy from "@/components/icons/copy";
import Button from "@/components/atoms/button";

const CharacterCalculator: NextPage = () => {
  const [text, setText] = useState<string>("");
  const textTrim = text.replace(/\s| /gi, "").length;
  const getBytes = (text: string) => {
    let character;
    let charBytes = 0;
    for (let i = 0; i < text.length; i += 1) {
      character = text.charAt(i);
      if (escape(character).length > 4) charBytes += 2;
      else charBytes += 1;
    }
    return { charBytes };
  };
  const { charBytes } = getBytes(text);
  const copy = async () => {
    await navigator.clipboard.writeText(text);
    alert("복사되었습니다.");
  };
  return (
    <>
      <div className="max-h-max h-full bg-white">
        <NextSeo
          title="글자수 세기"
          description="입력한 글자의 개수를 바로 확인하여 이력서 및 자기 소개서의 글자수를 맞춰보세요."
          canonical="https://allcalculator.shop/character"
          additionalLinkTags={[
            {
              rel: "icon",
              href: "/favicon.ico",
            },
            {
              rel: "manifest",
              href: "/site.webmanifest",
            },
          ]}
          additionalMetaTags={[
            {
              name: "keywords",
              content:
                "글자수 세기,글자수,글자수 제한,이력서, 자기소개서, 취업 이력서",
            },
            {
              httpEquiv: "x-ua-compatible",
              content: "IE=edge; chrome=1",
            },
          ]}
          openGraph={{
            type: "website",
            locale: "ko_KR",
            url: "https://allcalculator.shop/character",
            site_name: "올 어바웃 계산기",
            title: "글자수 세기",
            description:
              "입력한 글자의 개수를 바로 확인하여 이력서 및 자기 소개서의 글자수를 맞춰보세요.",
            images: [
              {
                url: "/home-og-image.jpeg",
                width: 1200,
                height: 630,
                alt: "Count Character Og Image Alt",
              },
            ],
          }}
        />
        <div className="min-h-[calc(100vh-61px)] mx-auto min-w-[295px] px-10 sm:px-20 pt-24">
          <header>
            <h1 className="title-clip-path absolute m-[-1px] grid h-[1px] w-[1px] items-center gap-2.5 overflow-hidden font-Black">
              글자수 세기
            </h1>
          </header>

          <Button
            clickHandler={copy}
            disabled={!text}
            buttonType="default"
            extraClass="mb-3 rounded-md float-right"
            size="md"
          >
            <Copy />
            &nbsp; 전체 복사
          </Button>
          <main>
            <section>
              <textarea
                id="text-calculator-area"
                placeholder="글자수를 세고 싶은 내용을 입력하세요."
                className="w-full h-64 p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
                rows={8}
                cols={40}
                onChange={(e) => {
                  setText(e.target.value);
                }}
              ></textarea>
              <div className="py-2 pt-6 space-y-2">
                <p className="text-lg">
                  공백 포함 &nbsp;{" "}
                  <span className="font-bold text-primary-600">
                    {text.length}
                  </span>
                  &nbsp; 자 | {charBytes} byte
                </p>
                <p className="text-lg font-notoSans">
                  공백 제외 &nbsp;{" "}
                  <span className="font-bold text-[#bb3e64]">{textTrim}</span>{" "}
                  &nbsp;자 | {charBytes - (text.length - textTrim)} byte
                </p>
              </div>
            </section>
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default CharacterCalculator;
