import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";

const Gallery = () => {
    useEffect(() => {
        AOS.init({
            duration: 400,
        });
        AOS.refresh();
    }, []);

    return (
        <div className="mb-16 container mx-auto">
            <h1 className="text-center text-4xl font-bold my-20">
                Graduation Gallery{" "}
                <span style={{ color: "teal", fontWeight: "bold" }}>
                    <Typewriter
                        className="text-teal-700"
                        words={["Enroll Now", "Don't Delay"]}
                        loop={false}
                        cursor
                        cursorStyle="_"
                        typeSpeed={80}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </span>
            </h1>
            <div className="px-5 py-2 ">
                <div className="-m-1 flex flex-wrap md:-m-2 ">
                    <div className="flex w-1/2 flex-wrap ">
                        <div className="w-1/2 p-1 md:p-3 " data-aos="zoom-in">
                            <img
                                alt="gallery"
                                className=" block h-full w-full rounded-lg object-cover object-center transition duration-300 ease-in-out hover:scale-105"
                                src="https://i.ibb.co/bvRwtwQ/cambridge.jpg"
                            />
                        </div>
                        <div className="w-1/2 p-1 md:p-3" data-aos="zoom-in">
                            <img
                                alt="gallery"
                                className=" block h-full w-full rounded-lg object-cover object-center transition duration-300 ease-in-out hover:scale-105"
                                src="https://i.ibb.co/Y0JP0Fz/oxford2.webp"
                            />
                            
                        </div>
                        <div className="w-full p-1 md:p-4 4 " data-aos="fade-up">
                            <img
                                alt="gallery"
                                className=" block h-full w-full rounded-lg object-cover object-center transition duration-300 ease-in-out hover:scale-105"
                                src="https://i.ibb.co/w0pSJ5Y/harvard2.jpg"
                            />
                            
                        </div>
                    </div>
                    <div className="flex w-1/2 flex-wrap" data-aos="fade-left">
                        <div className="w-full p-1 md:p-4 4 ">
                            <img
                                alt="gallery"
                                className=" block h-full w-full rounded-lg object-cover object-center transition duration-300 ease-in-out hover:scale-105"
                                src="https://i.ibb.co/Xkcg407/mit2.jpg"
                            />
                        </div>
                        <div className="w-1/2 p-1 md:p-3 " data-aos="fade-up">
                            <img
                                alt="gallery"
                                className=" block h-full w-full rounded-lg object-cover object-center transition duration-300 ease-in-out hover:scale-105"
                                src="https://i.ibb.co/6JwThPJ/waterloo.jpg"
                            />
                        </div>
                        <div className="w-1/2 p-1 md:p-3 " data-aos="fade-left">
                            <img
                                alt="gallery"
                                className=" block h-full w-full rounded-lg object-cover object-center transition duration-300 ease-in-out hover:scale-105 "
                                src="https://i.ibb.co/PT84mBj/toronto.jpg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;