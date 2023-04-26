const AmountSkeleton = () => {
    return (
      <div className="mx-auto max-w-xl md:max-w-2xl">
        <div className="mx-auto mt-8 min-w-[295px] max-w-[80%] items-center md:max-w-lg pt-5 pr-2">
          <div className="animate-pulse py-2 mb-2 text-lg font-semibold opacity-50">
            {" "}
            연봉 0,000만원의 실수령액은
          </div>
          <div className="mx-auto bg-[#495057] px-5 py-5 text-white shadow">
            <div className="animate-pulse space-y-4">
              <div className="flex justify-between">
                <div className="h-7 w-7 rounded-full bg-slate-200" />
                <div className="h-7 w-48 rounded bg-slate-200" />
              </div>
  
              <div className="flex-1 space-y-2 border-t-2 border-gray-500 py-1 pt-3 ">
                <div className="space-y-3 pt-2">
                  <div className="grid grid-cols-6 gap-4">
                    <div className="col-span-2 h-3 rounded bg-slate-200"></div>
                    <div className="col-span-3 col-start-4 h-3 rounded bg-slate-200"></div>
                  </div>
                  <div className="grid grid-cols-6 gap-4">
                    <div className="col-span-1 h-3 rounded bg-slate-200"></div>
                    <div className="col-span-2 col-start-5 h-3 rounded bg-slate-200"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <div className="flex-1 border-gray-500 py-1 px-5 pt-3 animate-pulse ">
            <div className="pt-2">
              <div className="grid grid-cols-6 gap-2">
                <div className="col-span-4 h-3 rounded bg-slate-200" />
                <div className="col-span-6 h-3 rounded bg-slate-200"></div>
                <div className="col-span-3 h-3 rounded bg-slate-200"></div>
                <div className="col-span-5 h-3 rounded bg-slate-200"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default AmountSkeleton;
  