import Button from "@/components/atoms/button";
import LongArrowRight from "@/components/icons/longArrowRight";
import Image from "next/image";
import Link from "next/link";

const Custom404 = () => {
  return (
    <>
      <div className="max-h-max min-h-screen bg-white pt-16">
        <div className="mx-auto min-w-[295px] max-w-[80%] items-center justify-center md:max-w-lg">
          <div className="mt-20 mx-auto w-auto h-auto">
            <Image
              src={"/404.png"}
              alt="404-image"
              width={200}
              height={400}
              className="mx-auto"
              priority
            />
          </div>
          <div className="rounded-lg group sm:flex sm:justify-between py-4 justify-center sm:mt-5 h-full w-full items-center whitespace-nowrap bg-primary-100 pl-8 pr-2 hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-primary-700">
            <h1 className="font-notoSans text-2xl font-bold text-black">
              잘못된 경로입니다!
            </h1>
            <Link href="/">
              <Button buttonType="text" extraClass="mt-2 sm:mt-0 sm:pr-4 flex group-hover:text-primary-600 space-x-3 items-center font-bold">
                <span>홈으로 가기 </span>
                <LongArrowRight />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Custom404;
