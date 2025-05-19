"use client";
import { ITEMS_PER_PAGE } from "@/lib/settings";
import { useRouter } from "next/navigation";

const Pagination = ({ page, count }: { page: number; count: number }) => {
  const pageCount = Math.ceil(count / ITEMS_PER_PAGE);
  const router = useRouter();
  const changePage = (newPage: number) => {
    const params = new URLSearchParams(window.location.search);
    params.set("page", newPage.toString());
    router.push(`${window.location.pathname}?${params}`);
  };
  return (
    <div className="flex justify-between items-center text-gray-500 p-4">
      <button
        disabled={page === 1 || pageCount !== 1}
        className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => changePage(page - 1)}
      >
        Prev
      </button>
      <div className="flex items-center gap-2 text-sm">
        {Array.from({ length: pageCount }, (_, index) => {
          const pageIndex = index + 1;
          return (
            <button
              key={pageIndex}
              className={`${
                pageIndex === page ? "bg-lamaSky" : ""
              } px-2 py-1 rounded-full flex items-center justify-center `}
              onClick={() => changePage(pageIndex)}
            >
              {pageIndex}
            </button>
          );
        })}
      </div>
      <button
        disabled={page === pageCount || pageCount !== 1}
        className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => changePage(page + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
