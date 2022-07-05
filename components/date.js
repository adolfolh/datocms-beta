import { parseISO, format } from "date-fns";

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return ( 
    <div className="flex flex-row md:flex-col items-center md:items-start">
      <p className="uppercase text-sm">Year</p>
      <time className={"uppercase text-xs opacity-50 md:m-0 ml-2 font-extralight"} dateTime={dateString}>
        {format(date, "yyyy")}
      </time>
    </div>
  );
}
