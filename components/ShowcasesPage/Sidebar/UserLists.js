import Image from "next/image"
import SearchIcon from "../../Icons/SearchIcon"
import Collapse from "../../Ui/collapse"

// Dummy userLists data
export const userLists = [
    {
        id: 1,
        name: "John Doe",
        profile_picture: "/img/something.png",
    },
    {
        id: 2,
        name: "Richard",
        profile_picture: "/img/something.png",
    },
    {
        id: 3,
        name: "Jennifer",
        profile_picture: "/img/something.png",
    },
]

export default function UserLists() {
    return (
        <Collapse label="User" initialOpen={true}>
            <div className="w-full rounded-lg bg-light-dark text-sm shadow-large">
                <div className="relative">
                    <SearchIcon className="absolute left-6 h-full text-white" />
                    <input
                        type="search"
                        autoFocus={true}
                        onChange={(e) => setSearchKeyword(e.target.value)}
                        placeholder="Search..."
                        className="w-full border-x-0 border-b border-dashed border-gray-600 bg-light-dark py-3.5 pl-14 pr-6 text-sm text-white focus:border-gray-500 focus:outline-none focus:ring-0"
                    />
                </div>
                <ul role="listbox" className="py-3">
                    {userLists.length > 0 ? (
                        userLists.map((user, index) => (
                            <li
                                key={index}
                                role="listitem"
                                tabIndex={index}
                                onClick={() => handleSelectedUser(user.id)}
                                className="mb-1 flex cursor-pointer items-center gap-3 py-1.5 px-6 outline-none hover:bg-gray-700 focus:bg-gray-600"
                            >
                                <div className="relative h-6 w-6 shrink-0 overflow-hidden rounded-full shadow-card">
                                    <Image src={user.profile_picture} placeholder="blur" blurDataURL layout="fill" objectFit="cover" className="rounded-full" alt={user.name} />
                                </div>
                                <span className="text-sm tracking-tight text-white">{user.name}</span>
                            </li>
                        ))
                    ) : (
                        <li className="px-6 py-5 text-center">
                            <h3 className="mb-2 text-sm text-white">Ops! not found</h3>
                        </li>
                    )}
                </ul>
            </div>
        </Collapse>
    )
}
