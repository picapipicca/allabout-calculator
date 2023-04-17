import Input from "@/components/atoms/input";
import Footer from "@/components/layout/footer";
import { NextPage } from "next";

const Bmi: NextPage = () => {
  return (
    <div className="max-h-max h-full bg-white">
      <div className="min-h-[calc(100vh-61px)] mx-auto min-w-[295px] px-10 sm:px-20 pt-24">
        <header>
            <h1 className="title-clip-path absolute m-[-1px] grid h-[1px] w-[1px] items-center gap-2.5 overflow-hidden">비만도 계산기</h1>
        </header>
        <main>
            <section className="mx-auto h-[40vh] sm:h-fit grid grid-rows-4 grid-flow-col bg-gray-100 sm:w-[55vw] sm:flex py-6 px-6 space-y-4 sm:space-y-0 sm:justify-between items-center">
                <div className="row-span-1 grid grid-cols-3 sm:flex sm:w-[15vw] items-center sm:pr-8 min-h-[7vh] sm:min-h-[60px]">
                    <h3 className="text-lg pr-4 col-span-1">성별</h3>
                    <button className="col-start-2 sm:w-1/3 border-r-0 border bg-white hover:bg-primary-500 hover:text-white h-full sm:min-h-[60px]">남</button>
                    <button className="sm:w-1/3 border bg-white hover:bg-primary-500 hover:text-white h-full sm:min-h-[60px]">여</button>
                </div>
                <div className="row-span-1 grid grid-cols-3 sm:flex sm:w-[15vw] items-center pb-2 sm:pb-0">
                    <h3 className="text-lg pr-4 col-span-1">키</h3>
                    <div className="col-span-2 sm:w-2/3">
                    <Input type="number" rightInnerLabel="cm" max={250}/>
                    </div>
                </div>
                <div className="row-span-1 grid grid-cols-3 sm:flex sm:w-[15vw] items-center">
                    <h3 className="text-lg pr-4 col-span-1">몸무게</h3>
                    <div className="col-span-2 sm:w-2/3">
                    <Input type="number" rightInnerLabel="kg" max={500}/>
                    </div>
                </div>
                <button className="border border-blue-700 w-full sm:w-[8vw] sm:ml-8 bg-primary-500 hover:bg-primary-600 text-white min-h-[5vh] sm:min-h-[60px]">확인하기</button>
            </section>
        </main>
      </div>
      <Footer/>
    </div>
  );
};

export default Bmi;
