import Lottie from 'react-lottie';
import { Link} from 'react-router-dom';
import animationData from "../../assets/lottie/404.json";
import setTitle from '../../hook/setTitle';
const Errorpage = () => {
    setTitle('404');
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <section className="">
            <div className="flex justify-center items-center">
                <div className="">
                    <h2 className="text-2xl font-bold my-5 py-5">
                        <Lottie options={defaultOptions} height={600} width={600} />
                        
                    </h2>
                    <div className='my-3 pb-5 flex justify-center items-center font-bold text-3xl '>
                        <Link
                            to="/"
                            className=" text-decoration-none  text-orange-600"
                        >
                            Back to homepage
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Errorpage;