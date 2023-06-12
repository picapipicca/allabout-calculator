import React, { useState, useEffect } from "react";
import Button from "./atoms/button";

interface PaginationProps {
  items: number;
  currentPage: number;
  pageSize?: number;
  pageBlockSize?: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
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
      <nav className="flex justify-center items-center m-4">
        <Button
          buttonType="text"
           extraClass="hover:bg-gray-100 rounded-lg w-fit aspect-square px-0"
          disabled={!pagination.isPrevPage}
          clickHandler={() => onPageChange(pagination.firstPage - 1)}
        >
          &lt;
        </Button>
        {pagination.pageCount.map((i: number) => (
          <Button
          buttonType="text"
          extraClass={`hover:bg-gray-100 rounded-lg w-fit aspect-square px-0 ${
              currentPage === i
                ? "border-2 border-[#07498f] text-primary-500 hover:bg-transparent"
                : ""
            }`}
            clickHandler={() => onPageChange(i)}
            key={i + 1}
          >
            {i}
          </Button>
        ))}
        <Button
         extraClass="hover:bg-gray-100 rounded-lg w-fit px-0 aspect-square"
          buttonType="text"
          clickHandler={() => onPageChange(pagination.lastPage + 1)}
          disabled={!pagination.isNextPage}
        >
          &gt;
        </Button>
      </nav>
    </>
  );
};

export default Pagination;
