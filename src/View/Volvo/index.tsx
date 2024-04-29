"use client";
import DesktopVolvo from "./DesktopVolvo";
import useComponentSize from "@/hooks/useComponentSize";
import MobileVolvo from "./MobileVolvo";

const Volvo = ({ data }: { data: VolvoType[] }) => {
  const { ref, width } = useComponentSize();

  return (
    <div ref={ref} className="flex flex-col justify-between ">
      {width > 630 ? <DesktopVolvo data={data} /> : <MobileVolvo data={data} />}
    </div>
  );
};

export default Volvo;
