
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Toaster, toast } from 'react-hot-toast';
import { LuUpload } from "react-icons/lu";
import { MdDeleteOutline } from "react-icons/md";
import useAxios from '../../Hooks/useAxios';

const Add_News = () => {
    const { register, handleSubmit, setValue } = useForm();
    const [loading, setLoading] = useState(false);
    const [images, setImages] = useState([]);
    const [fileNames, setFileNames] = useState([]);
    const [tags, setTags] = useState([]);
    const [formData, setFormData] = useState(null);
    const [paragraphs, setParagraphs] = useState([]);
    const [items, setitems] = useState([]);
    const [subtitles, setSubtitles] = useState([{ subtitle: '', content: '' }]);
    const instance = useAxios()

    useEffect(() => {
        if (formData) {
            setValue("title", formData.title);
            setValue("category", formData.category);
            setTags(formData.tags || []);
            setImages(formData.images || []);
            setParagraphs(formData.description?.paragraphs || []);
            setParagraphs(formData.description?.items || []);
            setSubtitles(formData.description?.subtitles || [{ subtitle: '', content: '' }]);
        }
    }, [formData, setValue]);




    // Subtitles
    const handleSubtitleChange = (e, index, key) => {
        const { value } = e.target;
        setSubtitles(prevSubtitles => {
            const updatedSubtitles = [...prevSubtitles];
            updatedSubtitles[index][key] = value;
            return updatedSubtitles;
        });
    };




    // paragraphs Information 
    const handleKeyDownParagraphs = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const newParagraph = e.target.value.trim();
            if (newParagraph !== '') {
                setParagraphs([...paragraphs, newParagraph]);
                e.target.value = '';
            }
        }
    };

    // paragraphs Information remove

    const removeParagraphs = (indexToRemove) => {
        setParagraphs(paragraphs?.filter((_, index) => index !== indexToRemove));
    };

    // items information
    const handleKeyDownItems = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const newItems = e.target.value.trim();
            if (newItems !== '') {
                setitems([...items, newItems]);
                e.target.value = '';
            }
        }
    };

    // items information remove
    const removeItems = (indexToRemove) => {
        setitems(items?.filter((_, index) => index !== indexToRemove));
    };



    //    tags information
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const newTag = e.target.value.trim();
            if (newTag !== '') {
                setTags([...tags, newTag]);
                e.target.value = '';
            }
        }
    };
    // tags information remove 
    const removeTag = (indexToRemove) => {
        setTags(tags?.filter((_, index) => index !== indexToRemove));
    };



    // multipale image add fn 
    const handleImageChange = (files) => {
        const newImages = [...images];
        const newFileNames = [...fileNames];

        for (let i = 0; i < files.length; i++) {
            newImages.push(URL.createObjectURL(files[i]));
            newFileNames.push(files[i].name);
        }

        setImages(newImages);
        setFileNames(newFileNames);
    };

    // image remove function
    const handleRemoveImage = (index) => {
        const newImages = [...images];
        const newFileNames = [...fileNames];
        newImages.splice(index, 1);
        newFileNames.splice(index, 1);
        setImages(newImages);
        setFileNames(newFileNames);
    };




    // submit function
    const onSubmit = async (data) => {
        try {
            setLoading(true);
            const currentTime = new Date();
            data.publish_date = currentTime.toLocaleString();
            data.images = images;
            data.tags = tags;

            const descriptionData = {
                paragraphs: paragraphs,
                listItems: items,
                subtitles: subtitles.map(sub => ({ subtitle: sub.subtitle, content: sub.content }))
            };
            data.description = descriptionData;

            const {
                conclusion,
                list_title,
                category,
                publish_date,
                description,

            } = data


            console.log(data);

            const newsInformation = {
                publish_date,
                images,
                description,
                conclusion,
                list_title,
                tags,
                category,
                conclusion,
            }

            console.log(newsInformation);

            // Your submission logic here
            const res = await instance.post("/api/v1/news", newsInformation);

            if (res?.data) {

                toast.success('Successfully Post News!');

            }
        } catch (error) {
            console.error("Error submitting comment:", error);
            toast.error('Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto md:mt-4 px-1 bg-black ">
            <h1 className='py-2 text-center text-[#FF9D00] font-oswald lg:text-4xl md:text-xl text-lg font-bold px-4 '> Add News Page </h1>
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
                                {...register("title")}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block md:text-2xl text-white  text-sm font-bold mb-2">
                                Category
                            </label>
                            <select className="w-full px-4 py-2  text-white border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500 " id="category" {...register("category")} required  >
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
                                {tags?.map((tag, index) => (
                                    <div key={index} className="flex items-center bg-gray-900 text-[#FF9D00]  mb-1 rounded-lg px-3 py-1 mr-2 mt-1">
                                        {tag}
                                        <button type="button" className="ml-2 " onClick={() => removeTag(index)}>
                                            &#10005;
                                        </button>
                                    </div>
                                ))}
                                <input
                                    className="w-full px-4 py-2 text-white border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500"
                                    id="tags"
                                    type="text"
                                    placeholder="Tags Names"
                                    onKeyDown={handleKeyDown}
                                />
                            </div>
                        </div>
                        <div className="mb-4 ">
                            <div className="mt-6">
                                <div className=" grid grid-cols-3 md:grid-cols-5 lg:grid-cols-10 items-center mt-2">
                                    {images.map((image, index) => (
                                        <div key={index} className="relative mr-4 mb-4">
                                            <img
                                                src={image}
                                                alt={fileNames[index]}
                                                className="max-h-40 w-auto"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => handleRemoveImage(index)}
                                                className="absolute top-0 right-0 bg-[#FF9D00] text-white p-1 rounded-full"
                                            >
                                                <MdDeleteOutline />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                                <label className="block md:text-2xl text-white  text-sm font-bold mb-2">Upload Image</label>
                                <div
                                    onClick={() => document.querySelector("#image").click()}
                                    className="cursor-pointer mt-4 p-4 border bg-gray-800 rounded-md flex items-center justify-center"
                                >
                                    <LuUpload className="text-3xl text-[#FF9D00] mx-auto"></LuUpload>{" "}
                                    <p className="ml-2"></p>{" "}
                                </div>
                                <input
                                    type="file"
                                    id="image"
                                    accept="image/*"
                                    className="hidden"
                                    multiple
                                    onChange={(e) => handleImageChange(e.target.files)}
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
                                required
                                {...register("conclusion")}
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

                            {subtitles?.map((sub, index) => (
                                <div key={index} className="mb-4">
                                    <label className="block text-white md:text-lg text-sm font-bold mb-2">
                                        Subtitle
                                    </label>
                                    <input
                                        className="w-full px-4 py-2  text-white border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500"
                                        type="text"
                                        placeholder={"Subtitle"}
                                        value={sub.subtitle}
                                        onChange={(e) => handleSubtitleChange(e, index, 'subtitle')}
                                    />
                                    <label className="block text-white md:text-lg text-md font-bold mb-2 mt-2">
                                        Content
                                    </label>
                                    <input
                                        className="w-full px-4 py-2 text-white border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500"
                                        type="text"
                                        placeholder={"Content"}
                                        value={sub.content}
                                        onChange={(e) => handleSubtitleChange(e, index, 'content')}
                                    />

                                </div>
                            ))}


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

                                {items?.map((item, index) => ( // Map through the items array under each list item
                                    <div key={index} className="flex items-center bg-gray-900 text-[#FF9D00] mb-1 rounded-lg px-3 py-1 mr-2 mt-1">
                                        {item}
                                        <button type="button" className="ml-2" onClick={() => removeItems(index)}>
                                            &#10005;
                                        </button>
                                    </div>
                                ))}
                                <textarea
                                    className="w-full h-auto min-h-40 px-4 py-2 text-white border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500"
                                    placeholder="Press Enter to add an item"
                                    onKeyDown={handleKeyDownItems}
                                />
                            </div>

                        </div>



                        <div className="mb-4">

                            {paragraphs?.map((taparagraph, index) => (
                                <div key={index} className="flex items-center bg-gray-900 text-[#FF9D00]  mb-1 rounded-lg px-3 py-1 mr-2 mt-1">
                                    {taparagraph}
                                    <button type="button" className="ml-2 " onClick={() => removeParagraphs(index)}>
                                        &#10005;
                                    </button>
                                </div>
                            ))}
                            <label className="block md:text-2xl text-white md:text-md text-sm font-bold mb-2" htmlFor="description">
                                Paragraphs
                            </label>
                            <textarea
                                className="w-full h-auto md:min-h-60 min-h-40  px-4 py-2 text-white border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500 "
                                id="paragraphs"
                                placeholder="Press Enter to add paragraphs"
                                onKeyDown={handleKeyDownParagraphs}
                            />
                            <div className="text-gray-300 text-sm px-2  mt-1">Press Enter to add paragraphs</div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between mt-2">
                    <button
                        type="submit"
                        className="text-white bg-[#FF9D00] hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-10  mt-4  py-2.5 text-center"
                        disabled={loading}
                    >
                        {loading ? "Posting..." : "Post Now"}
                    </button>
                </div>
            </form>
            <div><Toaster /></div>
        </div>
    );
}

export default Add_News;


