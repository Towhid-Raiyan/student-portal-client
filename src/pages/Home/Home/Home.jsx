
import setTitle from "../../../hook/setTitle";
import Banner from "../Banner/Bannner";
import Gallery from "../Gallery/Gallery";
import Reviews from "../Reviews/Reviews";
import Instructor from "../Instructor/Instructor";

const Home = () => {
    setTitle("Home");
    return (
        <div className="dark:bg-slate-800 dark:text-white">
            <Banner></Banner>
            <Instructor></Instructor>
            <Gallery></Gallery>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;