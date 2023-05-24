import React, { useState ,useEffect} from "react";

interface PaginationProps {
  items: number;
  currentPage: number;
  pageSize?: number;
  pageBlockSize?: number;
  onPageChange: (page: number) => void;
}

const  Pagination = ({
  items, 
  currentPage = 1,
  pageSize = 15,
  pageBlockSize = 8,
  onPageChange,
}: PaginationProps) => {
  const [pagination, setPagination] = useState<{
    isPrevPage: boolean;
    isNextPage: boolean;
    pageCount: number[];
    firstPage: number;
    lastPage: number;
  }>({
    isPrevPage: false,
    isNextPage: false,
    pageCount: [],
    firstPage: 0,
    lastPage: 0,
  });

  const handlePageChange = (currentPage: number) => {
    const numPages = Math.ceil(items / pageSize);
    let firstPage, lastPage;

    if (currentPage % pageBlockSize === 0 && currentPage >= pageBlockSize) {
      firstPage = Math.ceil(
        currentPage - (currentPage % pageBlockSize) - pageBlockSize + 1
      );
      lastPage = Math.ceil(currentPage - (currentPage % pageBlockSize));
    } else {
      firstPage = Math.ceil(currentPage - (currentPage % pageBlockSize) + 1);
      lastPage = Math.ceil(
        currentPage - (currentPage % pageBlockSize) + pageBlockSize
      );
    }

    let isNextPage = true;
    let isPrevPage = true;

    if (lastPage >= numPages) {
      lastPage = numPages;
      isNextPage = false;
    }

    if (firstPage === 1) {
      isPrevPage = false;
    }

    if (numPages < pageBlockSize) {
      isNextPage = false;
    }

    const pageCount: number[] = [];

    for (let i: number = firstPage; i <= lastPage; i++) {
      pageCount.push(i);
    }

    setPagination({
      isPrevPage,
      isNextPage,
      pageCount,
      firstPage,
      lastPage,
    });
  };
  useEffect(() => {
    handlePageChange(currentPage);
  }, [currentPage]);
  return (
    <>
      <nav className="flex justify-center items-center gap-1 m-4">
        <button
          className="aria-checked:bg-pink-500 aria-checked:font-bold aria-checked:cursor-pointer aria-checked:-translate-y-0 border-none rounded-lg p-2 m-0 bg-black text-white text-sm hover:bg-red-50 cursor-pointer -translate-y-[2px] disabled:bg-gray-200 disabled:cursor-not-allowed"
          onClick={() => onPageChange(pagination.firstPage - 1)}
          disabled={!pagination.isPrevPage}
        >
          &lt;
        </button>
        {pagination.pageCount.map((i: number) => (
          <button
            className={`${
              currentPage === i
                ? "bg-primary-500"
                : "bg-black hover:bg-stone-300 hover:text-red-500"
            } aria-checked:bg-pink-500 aria-checked:font-bold aria-checked:cursor-pointer aria-checked:-translate-y-0 border-none rounded-lg p-2 m-0 text-white text-sm cursor-pointer -translate-y-[2px] disabled:bg-opa disabled:cursor-not-allowed disabled:-translate-y-0`}
            key={i + 1}
            onClick={() => onPageChange(i)}
            aria-current="page"
          >
            {i}
          </button>
        ))}
        <button
          className="aria-checked:bg-pink-500 aria-checked:font-bold aria-checked:cursor-pointer aria-checked:-translate-y-0 border-none rounded-lg p-2 m-0 bg-black text-white text-sm hover:bg-stone-300 hover:text-black cursor-pointer -translate-y-[2px] disabled:bg-gray-200 disabled:cursor-not-allowed"
          onClick={() => onPageChange(pagination.lastPage + 1)}
          disabled={!pagination.isNextPage}
        >
          &gt;
        </button>
      </nav>
    </>
  );
};

export default Pagination;
