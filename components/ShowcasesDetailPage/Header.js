/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";

export default function Header({ data }) {
  return (
    <header>
      <div className="mx-auto md:mx-0 ">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
        >
          {data.media.all.map((media) => (
            <SwiperSlide key={media.id}>
              <img
                src={media.url}
                
                alt="himatif"
                className="swiper-lazy  mx-auto rounded-xl max-h-[500px]"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="mt-12 text-center">
        <h2 className="mx-5 text-4xl font-semibold md:mx-48 md:text-5xl">
          {data.title}
        </h2>
      </div>
      <div className="mt-8 flex flex-col items-center justify-center md:flex-row md:space-x-4">
        <img
          className="w-12"
          src={
            data.user.profile_picture
              ? data.user.profile_picture
              : "/images/HighFive.png"
          }
          alt=""
        />
        <Link
          href={`/showcases/user/${data.user.id}`}
          className="font-medium md:text-lg"
        >
          {data.user.name}
        </Link>
        <span className="text-gray-400">&middot;</span>
        <div className="flex items-center space-x-2">
          {data.github_url && (
            <a
              href={data.github_url}
              target="_blank"
              rel="noreferrer"
              className="group rounded-md border border-gray-400 px-3 py-1 transition-all duration-300 ease-in-out hover:border-white"
            >
              <span className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400 transition-all duration-300 ease-in-out group-hover:text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-xs uppercase text-gray-400 transition-all duration-300 ease-in-out group-hover:text-white">
                  Code
                </span>
              </span>
            </a>
          )}
          {data.youtube_url && (
            <a
              href={data.youtube_url}
              target="_blank"
              rel="noreferrer"
              className="group rounded-md border border-gray-400 px-3 py-1 transition-all duration-300 ease-in-out hover:border-white"
            >
              <span className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400 transition-all duration-300 ease-in-out group-hover:text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-xs uppercase text-gray-400 transition-all duration-300 ease-in-out group-hover:text-white">
                  Youtube
                </span>
              </span>
            </a>
          )}
          {data.other_file && (
            <a
              href={data.other_file}
              target="_blank"
              rel="noreferrer"
              className="group rounded-md border border-gray-400 px-3 py-1 transition-all duration-300 ease-in-out hover:border-green-400"
            >
              <span className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400 transition-all duration-300 ease-in-out group-hover:text-green-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    className="uim-primary"
                    d="M6.00018,19.79588L9,14.59863h12l-3.00005,5.19725H6.00018z"
                  />
                  <path
                    className="uim-quaternary"
                    d="M15.00018,14.59863H21L15.00018,4.20412H9L15.00018,14.59863z"
                  />
                  <path
                    className="uim-tertiary"
                    d="M3,14.59863l3.00018,5.19725L12,9.40138L9,4.20412L3,14.59863z"
                  />
                </svg>
                <span className="text-xs uppercase text-gray-400 transition-all duration-300 ease-in-out group-hover:text-green-400">
                  Other File
                </span>
              </span>
            </a>
          )}
          {data.report.file_id && (
            <a
              href={data.report.file_url}
              target="_blank"
              rel="noreferrer"
              className="group rounded-md border border-gray-400 px-3 py-1 transition-all duration-300 ease-in-out hover:border-green-400"
            >
              <span className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400 transition-all duration-300 ease-in-out group-hover:text-green-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-xs uppercase text-gray-400 transition-all duration-300 ease-in-out group-hover:text-green-400">
                  Report
                </span>
              </span>
            </a>
          )}
        </div>
      </div>
    </header>
  );
}
