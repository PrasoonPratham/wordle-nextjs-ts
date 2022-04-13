import type { NextPage } from "next";
import { list } from "../constants/list";

const Home: NextPage = () => {
    return (
        <>
            {list.map((element) => (
                <h1 key={1}>{element}</h1>
            ))}
        </>
    );
};

export default Home;
