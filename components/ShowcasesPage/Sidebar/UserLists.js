import Image from "next/image";
import SearchIcon from "../../Icons/SearchIcon";
import Collapse from "../../Ui/Collapse";
import { useQuery } from "react-query";
import FilterContext from "../../../helpers/filter/FilterContext";
import { useContext } from "react";
import Link from "next/link";

export default function UserLists({ initialContri }) {
  const context = useContext(FilterContext);
  const contributorQuery = useQuery("contributors", {
    initialData: initialContri,
  });
  //   const pathname = window.location.pathname;
  return (
    <Collapse
      label={`In Showcase (${contributorQuery.data.length} People)`}
      initialOpen={true}
    >
      <div className="w-full rounded-lg bg-light-dark text-sm shadow-large">
        {/* <div className="relative">
          <SearchIcon className="absolute left-6 h-full text-white" />
          <input
            type="search"
            autoFocus={true}
            onChange={(e) => setSearchKeyword(e.target.value)}
            placeholder="Search..."
            className="w-full border-x-0 border-b border-dashed border-gray-600 bg-light-dark py-3.5 pl-14 pr-6 text-sm text-white focus:border-gray-500 focus:outline-none focus:ring-0"
          />
        </div> */}
        <ul role="listbox" className="py-3">
          {contributorQuery.data?.map((data, index) => (
            <Link href={`/?user_id=${data.id_user}`} key={index}>
              <li
                key={index}
                role="listitem"
                tabIndex={data.id_user}
                //   onClick={() => context.setSearchQuery(data.id_user)}
                className="mb-1 flex cursor-pointer items-center gap-3 py-1.5 px-6 outline-none hover:bg-gray-700 focus:bg-gray-600"
              >
                <div className="relative h-6 w-6 shrink-0 overflow-hidden rounded-full shadow-card">
                  <Image
                    src={data.profile}
                    placeholder="blur"
                    blurDataURL
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                    alt={data.name}
                  />
                </div>
                <span className="text-sm tracking-tight text-white">
                  {data.name}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </Collapse>
  );
}
