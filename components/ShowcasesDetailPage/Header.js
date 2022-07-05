/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"
import "swiper/css"
import "swiper/css/lazy"
import "swiper/css/pagination"
import "swiper/css/navigation"
import Link from "next/link"

export default function Header({ data }) {
    return (
        <header>
            <div className="mx-4 md:mx-0">
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                >
                    {data.media.all.map((media) => (
                        <SwiperSlide key={media.id}>
                            <img src={media.url} alt="himatif" className="swiper-lazy m rounded-xl" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="mt-12 text-center">
                <h2 className="mx-5 text-4xl font-semibold md:mx-48 md:text-5xl">{data.title}</h2>
            </div>
            <div className="mt-8 flex flex-col items-center justify-center md:flex-row md:space-x-4">
                <img className="w-12" src={data.user.profile_picture ? data.user.profile_picture : "/images/HighFive.png"} alt="" />
                <Link href={`/showcases/user/${data.user.id}`} className="font-medium md:text-lg">
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
                                <span className="text-xs uppercase text-gray-400 transition-all duration-300 ease-in-out group-hover:text-white">Code</span>
                            </span>
                        </a>
                    )}
                    {data.report.file_url && (
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
                                <span className="text-xs uppercase text-gray-400 transition-all duration-300 ease-in-out group-hover:text-green-400">Report</span>
                            </span>
                        </a>
                    )}
                </div>
            </div>
        </header>
    )
}
