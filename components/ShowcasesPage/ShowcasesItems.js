/* eslint-disable @next/next/no-img-element */
import truncate from "../../utils/truncate";
import Link from "next/link";
import { useQuery } from "react-query";
import axios from "../../config";
import { useRouter } from "next/router";

export default function ShowcasesItems({
  selectedCategories,
  selectedType,
  searchQuery,
  expandedFilter,
  initialShowcases,
}) {
  const router = useRouter();
  const userId = router.query.user_id;

  const showcasesQuery = useQuery(
    ["showcases", { selectedCategories, selectedType, searchQuery }],
    () =>
      getShowcasesData(selectedCategories, selectedType, searchQuery, userId),
    {
      initialData: initialShowcases,
    }
  );

  const hasFilters = () => {
    return (
      selectedCategories.length > 0 || selectedType !== "" || searchQuery !== ""
    );
  };

  return (
    <section className={expandedFilter ? "col-span-4" : "col-span-3"}>
      <div className="mb-4" id="search-pills">
        <div className="text-lg text-gray-300" id="pill">
          {showcasesQuery.isLoading ? (
            <div className="flex items-center">
              <div className="h-5 w-5 animate-spin rounded-full border-b-4 border-white ease-in-out"></div>
              <span className="ml-3">Loading items</span>
            </div>
          ) : (
            <>{hasFilters() && <>{showcasesQuery.data.length} items</>}</>
          )}
        </div>
      </div>
      <div
        className={
          (expandedFilter ? "md:grid-cols-4" : "md:grid-cols-3") + " grid gap-6"
        }
      >
        {!showcasesQuery.isLoading && (
          <>
            {showcasesQuery.data.map((showcase) => (
              <Link
                href={`/showcases/${showcase.id}`}
                className="bg-dark-600 group rounded-lg"
                key={showcase.id}
              >
                <a className="group">
                  <div className="group inline-center h-[275px] overflow-hidden rounded-lg">
                    <img
                      src={showcase.media}
                      className="ease-[cubic-bezier(0.33, 1, 0.68, 1)]  w-full rounded-lg transition-all duration-[350ms] group-hover:scale-125"
                      alt={showcase.media}
                    />
                  </div>
                      <p className="text-md">{truncate(showcase.title, 60)}</p>
                  <div className="grid grid-cols-2 items-center justify-between p-4">
                    <div>
                      <p className="text-sm">
                        <span className="text-gray-500">by </span>
                        <span className="text-blue-400">
                          {showcase.user.name}
                        </span>
                      </p>
                    </div>
                    <div className="bg-dark-800 justify-self-end rounded-md px-3 py-1 text-sm capitalize text-blue-500">
                      {showcase.type}
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </>
        )}
      </div>
    </section>
  );
}

const getShowcasesData = async (
  selectedCategories = [],
  selectedType = "",
  searchQuery = "",
  userId = null
) => {
  const categoriesString = selectedCategories
    .map((category) => `categories[]=${category}`)
    .join("&");
  const typeString = selectedType ? `&type=${selectedType}` : "";
  const searchString = searchQuery ? `&search=${searchQuery}` : "";
  if (userId) {
    var { data } = await axios.get(
      `/showcases?user_id=${userId}&${categoriesString}${searchString}${typeString}`
    );
  } else {
    var { data } = await axios.get(
      `/showcases?${categoriesString}${searchString}${typeString}`
    );
  }
  return data;
};
