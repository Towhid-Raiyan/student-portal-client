import { Typewriter } from "react-simple-typewriter";

const Reviews = () => {
    return (
        <div className="mb-20">
            <h1 className="text-center text-4xl font-bold my-20">
                Students{" "}
                <span style={{ color: "teal", fontWeight: "bold" }}>
                    <Typewriter
                        className="text-teal-700"
                        words={["Feedback", "Suggestion"]}
                        loop={false}
                        cursor
                        cursorStyle="_"
                        typeSpeed={80}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </span>
            </h1>
            <div className="grid gap-10 text-center md:grid-cols-3">
                    <div>
                        <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
                            <div className="h-28 overflow-hidden rounded-t-lg bg-[#0d9383]"></div>
                            <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                                <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" />
                            </div>
                            <div className="p-6">
                                <h4 className="mb-4 text-2xl font-semibold">
                                    Maria Smantha
                                </h4>
                                <hr />
                                <p className="mt-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        className="inline-block h-7 w-7 pr-2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                                    </svg>
                                    User-friendly and efficient! My student portal simplifies academic tasks. Easy access to grades and resources enhances productivity.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* <!--Second Testimonial--> */}
                    <div>
                        <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
                            <div className="h-28 overflow-hidden rounded-t-lg bg-[#0f939f]"></div>
                            <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                                <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp" />
                            </div>
                            <div className="p-6">
                                <h4 className="mb-4 text-2xl font-semibold">
                                    Lisa Cudrow
                                </h4>
                                <hr />
                                <p className="mt-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        className="inline-block h-7 w-7 pr-2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                                    </svg>
                                    Fantastic student portal! Streamlined navigation, quick updates. It's my go-to for assignments and class info. Impressive design!
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* <!--Third Testimonial--> */}
                    <div>
                        <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
                            <div className="h-28 overflow-hidden rounded-t-lg bg-[#117095]"></div>
                            <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                                <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp" />
                            </div>
                            <div className="p-6">
                                <h4 className="mb-4 text-2xl font-semibold">
                                    John Smith
                                </h4>
                                <hr />
                                <p className="mt-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        className="inline-block h-7 w-7 pr-2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                                    </svg>
                                    Love my new student portal! Simplifies everything. Grades, collaboration in one place. A must-have for students!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Reviews;