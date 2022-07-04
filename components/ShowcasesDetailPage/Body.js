export default function Body({ data }) {
    return (
        <section id="article-body">
            <div className="mt-4 flex items-center justify-center">
                <div className="group rounded-md border border-gray-400 px-2 py-[5px] text-gray-400 transition-all duration-300 ease-in-out hover:border-white">
                    <p className="cursor-pointer text-sm capitalize transition-all duration-300 ease-in-out group-hover:text-white">{data.category.name}</p>
                </div>
            </div>
            <div className="mx-5 mt-6 rounded-xl bg-[#1F2937] p-8 md:mx-0">
                <p className="text-gray-300" dangerouslySetInnerHTML={{ __html: data.description }}></p>
            </div>
        </section>
    )
}
