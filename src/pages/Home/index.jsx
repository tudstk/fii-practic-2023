import { fetchAllMemes } from "../../services/api";

function Home() {
    fetchAllMemes();
    return <h1>Home</h1>;
}

export default Home;
