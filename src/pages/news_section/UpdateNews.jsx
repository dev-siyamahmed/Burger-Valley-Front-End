import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Toaster, toast } from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';
import useAxios from '../../Hooks/useAxios';

const UpdateNews = () => {
    const newsData = useLoaderData()
    console.log(newsData);
    const navigate = useNavigate()
    const instance = useAxios()
    const { register, handleSubmit, setValue } = useForm();
    const [loading, setLoading] = useState(false);
    const [tags, setTags] = useState([]);

    const { _id, title, category, conclusion, description, } = newsData || {}
    const { paragraphs, subtitles } = description || {};


    useEffect(() => {

        if (newsData && newsData.tags) {
            const tagsString = newsData.tags.join(', ');
            setValue('tags', tagsString);
            setTags(newsData.tags);
            if (paragraphs) {
                setValue('description.paragraphs', paragraphs.join('\n'));
            }
            subtitles?.forEach((sub, index) => {
                setValue(`description.subtitles[${index}].subtitle`, sub.subtitle);
                setValue(`description.subtitles[${index}].content`, sub.content);
            });
        }
    }, [newsData, setValue, paragraphs, subtitles]);

    const onSubmit = async (data) => {

        setLoading(true);
        try {
            const updatedNews = {
                ...newsData,
                ...data,
            };

            console.log(" news data ", newsData);

            await instance.patch(`/api/v1/news/${_id}`, updatedNews);

            toast.success("News data updated successfully!");
            navigate('/news')
            
        } catch (error) {
            console.error("Error updating news data:", error);
            toast.error("Please Try Again!");
        }
        setLoading(false);
    };






    return (
        <div className='text-white'>
            <div className="container mx-auto md:mt-4 px-1 bg-black ">
                <h1 className='py-2 text-center text-[#FF9D00] font-oswald lg:text-4xl md:text-xl text-lg font-bold px-4 '> News Update Now </h1>
                <form onSubmit={handleSubmit(onSubmit)} className=" shadow-md rounded px-4 pt-4 pb-8 mb-4">
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                        <div className='bg-gray-800 px-2 lg:py-6  rounded-md'>
                            <div className='border-b border-gray-500 py-2 '>
                                <label className="block md:text-2xl text-white  text-lg font-bold mb-1" htmlFor="description">
                                    Input Area
                                </label>
                            </div>
                            <div className="mb-4 pt-2 ">
                                <label className="block md:text-2xl  text-white  text-sm font-bold mb-2" htmlFor="title">
                                    Title
                                </label>
                                <input
                                    className="w-full px-4 py-2 text-white border rounded-lg bg-gray-800  focus:outline-none focus:border-blue-500"
                                    id="title"
                                    type="text"
                                    placeholder="Title"
                                    required
                                    defaultValue={title}
                                    {...register("title")}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block md:text-2xl text-white  text-sm font-bold mb-2">
                                    Category
                                </label>
                                <select className="w-full px-4 py-2  text-white border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500 " id="category" {...register("category")} defaultValue={category} required  >
                                    <option value="" className='text-gray-200'> Category Selected </option>
                                    <option value="burger">Burger</option>
                                    <option value="snack">Snack </option>
                                    <option value="beverage">Beverage </option>
                                </select>
                            </div>
                            <div>
                                <label className="block md:text-2xl text-gray-200 text-sm font-bold mb-2" htmlFor="tags">
                                    Tags (Enter separated)
                                </label>
                                <div className="flex flex-wrap">

                                    <input
                                        className="w-full px-4 py-2 text-white border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500"
                                        id="tags"
                                        type="text"
                                        placeholder="Tags Names"
                                        value={tags.join(', ')} // Convert array to string separated by comma
                                        onChange={(e) => setTags(e.target.value.split(', '))} // Convert string to array on change

                                    />
                                </div>
                            </div>
                            <div className="mb-4 ">
                                <div className="mt-6">
                                    <div className=" grid grid-cols-3 md:grid-cols-5 lg:grid-cols-10 items-center mt-2">

                                    </div>
                                    <label className="block md:text-2xl text-white  text-sm font-bold mb-2">Upload Image</label>

                                    <input
                                        type="file"
                                        id="image"
                                        accept="image/*"
                                        className="hidden"
                                        multiple

                                    />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block md:text-2xl text-white  text-sm font-bold mb-2" htmlFor="description">
                                    Conclusion
                                </label>
                                <textarea
                                    className="w-full h-auto md:min-h-60 min-h-32   px-4 py-2 text-white border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500 "
                                    id="conclusion"
                                    placeholder="Conclusion"

                                    {...register("conclusion")}
                                    defaultValue={conclusion}
                                />
                            </div>
                        </div>


                        <div className='bg-gray-800 px-2 rounded-md lg:py-6'>
                            <div className='border-b border-gray-500 py-2'>
                                <label className="block md:text-2xl text-white  text-lg font-bold mb-1 " htmlFor="description">
                                    Description
                                </label>
                            </div>


                            <label className="block md:text-2xl text-white  text-lg font-bold mt-2" htmlFor="description">
                                Subtitles
                            </label>
                            <div className="mb-4 border-gray-400 border px-3 py-2 lg:py-6 md:mt-4 rounded  lg:mt-4 ">

                                <label className="block text-white md:text-lg text-sm font-bold mb-2">
                                    Subtitle
                                </label>
                                <div>
                                    {subtitles?.map((sub, index) => (
                                        <div key={index}>

                                            <input
                                                className="w-full px-4 py-2  text-white border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500"
                                                type="text"
                                                placeholder={"Subtitle"}
                                                defaultValue={sub.subtitle}
                                                {...register(`description.subtitles[${index}].subtitle`)}
                                            />
                                            <label className="block text-white md:text-lg text-md font-bold mb-2 mt-2">
                                                Content
                                            </label>
                                            <input
                                                className="w-full px-4 py-2 text-white border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500"
                                                type="text"
                                                placeholder={"Content"}
                                                defaultValue={sub.content}
                                                {...register(`description.subtitles[${index}].content`)}
                                            />
                                        </div>
                                    ))}
                                </div>


                            </div>


                            <label className="block md:text-2xl text-white  text-lg font-bold  mt-4 " htmlFor="description">
                                List Items
                            </label>
                            <div className="mb-4 border-gray-400 border px-3 lg:py-6 py-2 md:mt-4 rounded  lg:mt-6 ">
                                <div>
                                    <div className="mb-4">
                                        <label className="block text-white md:text-lg text-sm font-bold mb-2">
                                            List Title
                                        </label>
                                        <input
                                            className="w-full px-4 py-2 text-white border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500"
                                            type="text"
                                            placeholder="List Title"
                                            {...register("list_title")}

                                        />
                                    </div>
                                </div>


                                <div>
                                    <label className="block text-white md:text-lg text-sm font-bold mb-2">
                                        Items
                                    </label>

                                    <textarea
                                        className="w-full h-auto min-h-40 px-4 py-2 text-white border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500"
                                        placeholder="Press Enter to add an item"
                                    // onKeyDown={handleKeyDownItems}
                                    />
                                </div>

                            </div>



                            <div className="mb-4">

                                <label className="block md:text-2xl text-white md:text-md text-sm font-bold mb-2" htmlFor="description">
                                    Paragraphs
                                </label>
                                <textarea
                                    className="w-full h-auto md:min-h-60 min-h-40  px-4 py-2 text-white border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500 "
                                    id="paragraphs"
                                    placeholder="Press Enter to add paragraphs"
                                    defaultValue={paragraphs?.join('\n')} 
                                    {...register("description.paragraphs")} 

                                />

                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                        <button
                            type="submit"
                            className="text-white bg-[#FF9D00] hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-10  mt-4  py-2.5 text-center"
                            disabled={loading}
                        >
                            {loading ? "Updateing..." : "Update Now"}
                        </button>
                    </div>
                </form>
                <div><Toaster /></div>
            </div>
        </div>
    );
};

export default UpdateNews;