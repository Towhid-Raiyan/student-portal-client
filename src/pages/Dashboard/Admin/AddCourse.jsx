
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import setTitle from "../../../hook/setTitle";

const AddCourse = () => {
    setTitle("Add Course");
    const token = localStorage.getItem("access-token");
    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;

        // console.log(name);
        const name = form.name.value;
        const instructor = form.instructor?.value;
        const email = form.email?.value;
        const availableSeats = parseInt(form.availableSeats.value);
        const price = parseFloat(form.price.value);
        const status = "pending";
        let image = form.photo.value;
        const newClass = {
            name,
            image,
            instructor,
            email,
            availableSeats,
            price,
            status,
        };
        console.log(newClass);
        saveClassToDatabase(newClass);
        form.reset();
    };
    const saveClassToDatabase = async (newClass) => {
        try {
            await axios.post(
                "https://student-portal-server-ten.vercel.app/api/classes",
                newClass,{
                    headers:{
                        authorization: `bearer ${token}`,
                    },
                }
            );
            console.log("Class saved to the database:", newClass);
            toast.success(`${newClass.name} saved to the database`);
        } catch (error) {
            toast.error("Error saving class to the database:", error);
        }
    };

    return (
        <div className="container mx-auto flex justify-center">
            <ToastContainer />
            <div className="bg-slate-200 p-4 md:p-20 rounded-lg shadow-lg  my-10 w-5/12">
                <div className="text-4xl font-bold text-center mb-10">
                    Add A Course
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Class name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Class name"
                            name="name"
                            className="input input-bordered input-accent"
                        />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Class Image</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Photo Url"
                            name="photo"
                            className="input input-bordered input-accent"
                        />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Instructor Name</span>
                        </label>
                        <input
                            
                            type="text"
                            name="instructor"
                            placeholder="Type here"
                            className="input input-bordered input-accent"
                            
                        />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Instructor Email</span>
                        </label>
                        <input
                            
                            type="text"
                            name="email"
                            placeholder="Type here"
                            className="input input-bordered input-accent"
                            
                        />
                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Available seats</span>
                        </label>
                        <input
                            type="text"
                            name="availableSeats"
                            placeholder="Available seats"
                            className="input input-bordered input-accent"
                        />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input
                            type="text"
                            name="price"
                            placeholder="Price"
                            className="input input-bordered input-accent"
                        />
                    </div>
                    <input
                        type="submit"
                        className="btn bg-teal-700 hover:bg-teal-500 mt-6 w-full  text-white"
                        value="Create Class"
                    />
                </form>
            </div>
        </div>
    );
};

export default AddCourse;