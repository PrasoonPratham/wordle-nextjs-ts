import type { NextPage } from "next";
import { list } from "../constants/list";

const Home: NextPage = () => {
    return (
        <>
            {/* component */}
            <div className="w-full max-w-screen-xl mx-auto px-6">
                <div className="flex justify-center p-4 px-3 py-10">
                    <div className="w-full max-w-md">
                        <div className="bg-white shadow-md rounded-lg px-3 py-2 mb-4">
                            <div className="block text-gray-700 text-lg font-semibold py-2 px-2">
                                Need some help? Wordle List is here 😄
                            </div>
                            <div className="flex items-center bg-gray-200 rounded-md">
                                <div className="pl-2">
                                    <svg
                                        className="fill-current text-gray-500 w-6 h-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            className="heroicon-ui"
                                            d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                                        />
                                    </svg>
                                </div>
                                <input
                                    className="w-full rounded-md bg-gray-200 text-gray-700 leading-tight focus:outline-none py-2 px-2"
                                    id="search"
                                    type="text"
                                    placeholder="Search for wordle words"
                                />
                            </div>
                            {list.map((element) => (
                                <h1 key={1}>
                                    <div className="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
                                        <div className="flex-grow font-medium px-2">
                                            {element}
                                        </div>
                                    </div>
                                </h1>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
