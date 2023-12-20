import axios from "axios";
import { useQuery } from "react-query";
import { FadeLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import setTitle from "../../../hook/setTitle";

const ManageUsers = () => {
    const token = localStorage.getItem("access-token");
    setTitle("Enrolled Users");
    const {
        data: tqData = [],
        isLoading,
        refetch,
        error,
    } = useQuery({
        queryFn: async () => {
            const data = await axios(`https://student-portal-server-ten.vercel.app/enrolledUser`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem(
                        "access-token"
                    )}`,
                },
            });
            // console.log({ fromTQ: data });
            return data?.data;
        },
        queryKey: ["users"],
    });

    if (isLoading)
        return (
            <div className="h-[600px] flex items-center justify-center">
                <FadeLoader color="#36d7b7" />
            </div>
        );

    if (error) return "An error has occurred: " + error.message;
    // console.log(tqData);



    return (
        <div>
            <ToastContainer></ToastContainer>
            <h1 className="text-4xl font-bold my-10 text-center">Enrolled Users</h1>
            <div className="overflow-x-auto w-9/12 mx-auto">
                <table className="table">
                    {/* head */}
                    <thead className="text-lg font-semibold">
                        <tr>
                            <th></th>
                            <th>Course Name</th>
                            <th>User Email</th>
                            <th>Instructor Name</th>
                            <th>Available Seat</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tqData.map((data, index) => (
                            <tr key={data._id} className="hover">
                                <th>{index + 1}</th>
                                <td>{data.course.name}</td>
                                <td>{data.email}</td>
                                <td>{data.course.instructor}</td>
                                <td>{data.course.availableSeats}</td>
                                
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;