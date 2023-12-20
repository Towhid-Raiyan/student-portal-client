import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import { Typewriter } from "react-simple-typewriter";

const Instructor = () => {

    const [instructor, setInstructor] = useState([]);
    // const [topinstructor, setTopinstructor] = useState([]);
    // console.log(instructor);
    

    useEffect(() => {
        axios
            .get("instructor.json")
            .then((response) => {
                setInstructor(response.data);
                // console.log(response.data);
            })
            .catch((error) => {
                console.error("Error fetching popular instructor:", error);
            });
    }, []);

    return (
        <div className="container mx-auto">
            <h1 className="text-center text-4xl font-bold my-20">
                Course Instructor{" "}
                <span style={{ color: "teal", fontWeight: "bold" }}>
                    <Typewriter
                        className="text-teal-700"
                        words={["Dedicated", "Professional"]}
                        loop={false}
                        cursor
                        cursorStyle="_"
                        typeSpeed={80}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-4">
                {instructor.map((item) => (
                    <Fade key={item._id}>
                        <div className="card bg-base-100 shadow-xl my-10 p-2 dark:bg-slate-400">
                            <figure className="avatar">
                                <div className="w-2/5 rounded-full mx-auto">
                                    <img src={item.image} alt="Shoes" />
                                </div>
                            </figure>
                            <div className="card-body items-center">
                                <h2 className="card-title">{item?.name}</h2>
                                <p className="text-sm text-gray-600">
                                    Total Classes: {item?.classes}
                                </p>
                            </div>
                        </div>
                    </Fade>
                ))}
            </div>
        </div>
    );
};

export default Instructor;