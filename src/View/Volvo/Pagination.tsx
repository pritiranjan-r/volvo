import Image from "next/image";

interface PaginationProps {
  page: number;
  totalPages: number;
  pageChange: (param: number) => void;
}

const Pagination = ({ page, pageChange, totalPages }: PaginationProps) => {
  //adding event handler for keypress events

  const keyPress = (e: React.KeyboardEvent, param: number) => {
    if (e.keyCode === 13 || e.keyCode === 32) {
      pageChange(param);
    }
  };

  return (
    <div className="mt-5">
      <div className="float-right flex gap-1">
        {page > 0 && (
          <span
            onClick={() => pageChange(page - 1)}
            aria-label="Previous Page"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => keyPress(e, page - 1)}
            style={{ display: "inline-block", transform: "rotate(180deg)" }}
          >
            <Image
              priority
              src={"chevron-circled.svg"}
              alt={"previous page"}
              width={30}
              height={30}
            ></Image>
          </span>
        )}

        {page < totalPages - 1 && (
          <span
            aria-label="Next Page"
            role="button"
            tabIndex={0}
            onClick={() => pageChange(page + 1)}
            onKeyDown={(e) => keyPress(e, page + 1)}
          >
            <Image
              priority
              src={"chevron-circled.svg"}
              alt={"previous page"}
              width={30}
              height={30}
            ></Image>
          </span>
        )}
      </div>
    </div>
  );
};

export default Pagination;
