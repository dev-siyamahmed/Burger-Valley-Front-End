import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Toaster, toast } from 'react-hot-toast';
import useAxios from '../../Hooks/useAxios';


const CommentPage = ({ newsData }) => {

    const { _id } = newsData || {}

    const { register, handleSubmit } = useForm();
    const [loading, setLoading] = useState(false);
    const instance = useAxios()

    const onSubmit = async (data) => {
        try {
            setLoading(true); // Set loading state to true
            const currentTime = new Date();
            data.publish_date = currentTime.toLocaleString();

            const {
                comment,
                username,
                userEmail,
                websiteLink,
                publish_date,
            } = data;

            const comments = {
                comment,
                username,
                userEmail,
                websiteLink,
                publish_date,
                news_id: _id
            };

            console.log(comments);

            const res = await instance.post("/api/v1/news", comments);

            if (res?.data) {
                toast.success('Successfully Comments!');
            }
        } catch (error) {
            console.error("Error submitting comment:", error);
            toast.error('Error submitting comment. Please try again later.');
        } finally {
            setLoading(false);
        }
    };



    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className=" mx-auto">


                <div className="mb-5">
                    <div className='flex items-center gap-2'>
                        <label className="block mb-2 text-sm font-medium text-white">Your Commitments </label>
                        <span className='text-[#FF9D00] text-2xl '>*</span>
                    </div>
                    <textarea className="bg-gray-900 text-gray-200 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="" cols="30" rows="10" placeholder="Commitments" required
                        {...register("comment")}
                    >

                    </textarea>


                </div>

                {/* user name  */}
                <div className="mb-5">
                    <div className='flex items-center gap-2'>
                        <label className="block mb-2 text-sm font-medium text-white">Your Name</label>
                        <span className='text-[#FF9D00] text-2xl '>*</span>
                    </div>
                    <input
                        required
                        {...register("username")}
                        type="text" className="bg-gray-900 text-gray-200 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="User Name" />
                </div>

                {/* user email */}
                <div className="mb-5">
                    <div className='flex items-center gap-2'>
                        <label className="block mb-2 text-sm font-medium text-white">Your Email</label>
                        <span className='text-[#FF9D00] text-2xl '>*</span>
                    </div>
                    <input
                        required
                        {...register("userEmail")}
                        type="email" id="email" className="bg-gray-900 text-gray-200 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="user@gmail.com" />
                </div>

                {/* user web site  */}
                <div className="mb-5">
                    <label htmlFor="" className="block mb-2 text-sm font-mediumd text-white">Your Web Site</label>
                    <input

                        {...register("websiteLink")}
                        type="text" className="bg-gray-900 border border-gray-300 text-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Website Link" />
                </div>


                <div className="flex items-start mb-5">
                    <div className="flex items-center h-5">
                        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                    </div>
                    <label className="ms-2 text-sm font-medium text-gray-100 dark:text-gray-200">Remember me</label>

                </div>

                <button
                    type="submit"
                    className="text-white bg-[#FF9D00] hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                    disabled={loading} // Disable button while loading
                >
                    {loading ? "Posting..." : "Post Comment"} {/* Change button text based on loading state */}
                </button>


                <div><Toaster /></div>
            </form></>
    );
};

export default CommentPage;