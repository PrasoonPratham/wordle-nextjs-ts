import type { NextPage } from "next";
import { list } from "./list";

const Home: NextPage = () => {
    return (
        <>
            {list.map((element) => (
                <h1>{element}</h1>
            ))}
        </>
    );
};

export default Home;
