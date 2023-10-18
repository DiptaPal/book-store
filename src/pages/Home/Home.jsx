import Category from "../../components/Category/Category";
import Heros from "../../components/Hero/Heros";
import NewRelease from "../../components/NewRelease/NewRelease";
import Subscription from "../../components/Subscription/Subscription";

const Home = () => {
    return (
        <div className="dark:bg-gray-500">
            <Heros></Heros>
            <Category></Category>
            <Subscription></Subscription>
            <NewRelease></NewRelease>
        </div>
    );
};

export default Home;