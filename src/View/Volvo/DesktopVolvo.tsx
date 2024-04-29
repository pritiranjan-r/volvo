"use client";
import { useEffect, useRef, useState } from "react";
import VolvoCar from "./VolvoCar";
import Pagination from "./Pagination";
import { useResizeObserver } from "@volvo-cars/react-layout-utils";

const DesktopVolvo = ({ data }: { data: VolvoType[] }) => {
  const { ref, width } = useResizeObserver();
  const limit = 4;
  const totalPages = data?.length / limit;

  //init  pagination
  const [page, setPage] = useState<number>(0);

  //mock pagination records would be here
  //realworld we dont need this
  const [volvoCarsData, setVolvoCarsData] = useState<VolvoType[]>([]);

  useEffect(() => {
    //once we get json data  than we are storing only 4 record
    //for pagination in real world we will only get 4 records from BE

    if (data) {
      setVolvoCarsData(data?.slice(0, limit));
    }
  }, [data]);

  const pageChange = (newPage: number) => {
    //event handler to navigate to next or previous page

    //if newpage is greater than current in it is next page
    //if newpage is lesser than current in it is previous page
    const start = newPage * limit;
    const end = start + limit;
    const filteredRecord = data?.slice(start, end);

    //set filtered records to state and pagination data
    setVolvoCarsData(filteredRecord);
    setPage(newPage);
  };

  return (
    <div className=" m-12 flex flex-col justify-between" ref={ref}>
      <div className="grid grid-cols-4 gap-4">
        {volvoCarsData?.map((volvo) => (
          <VolvoCar {...{ volvo }} key={`desktop-${volvo.id}`} />
        ))}
      </div>
      <Pagination {...{ pageChange, page, totalPages }} />
    </div>
  );
};

export default DesktopVolvo;
