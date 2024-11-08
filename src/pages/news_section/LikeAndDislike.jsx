import useAxios from '../../Hooks/useAxios';
import { GrLike, GrDislike } from "react-icons/gr";
import React, { useEffect, useState } from 'react';

const LikeAndDislike = ({ newsData }) => {

    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [likeColor, setLikeColor] = useState('blue');
    const [dislikeColor, setDislikeColor] = useState('blue');
    const [isLiked, setIsLiked] = useState(false);
    const [isDisliked, setIsDisliked] = useState(false);

    const instance = useAxios()

    useEffect(() => {
        setLikes(newsData?.likes || 0);
        setDislikes(newsData?.dislikes || 0);
    }, [newsData]);

    const handleLike = async () => {
        if (!isLiked) {
            setLikes((prevLikes) => prevLikes + 1);
            setLikeColor('blue');
            setIsLiked(true);

            if (isDisliked) {
                setDislikes((prevDislikes) => prevDislikes - 1);
                setDislikeColor('blue');
                setIsDisliked(false);
            }

            try {
                await instance.patch(`/api/v1/news/${newsData._id}`, { likes: likes + 1 });
            } catch (error) {
                console.error('Error updating likes count:', error);
            }
        } else {
            setLikes((prevLikes) => prevLikes - 1);
            setLikeColor('blue');
            setIsLiked(false);

            try {
                await instance.patch(`/api/v1/news/${newsData._id}`, { likes: likes - 1 });
            } catch (error) {
                console.error('Error updating likes count:', error);
            }
        }
    };

    const handleDislike = async () => {
        if (!isDisliked) {
            setDislikes((prevDislikes) => prevDislikes + 1);
            setDislikeColor('red');
            setIsDisliked(true);

            if (isLiked) {
                setLikes((prevLikes) => prevLikes - 1);
                setLikeColor('blue');
                setIsLiked(false);
            }

            try {
                await instance.patch(`/api/v1/news/${newsData._id}`, { dislikes: dislikes + 1 });
            } catch (error) {
                console.error('Error updating dislikes count:', error);
            }
        } else {
            setDislikes((prevDislikes) => prevDislikes - 1);
            setDislikeColor('blue');
            setIsDisliked(false);

            try {
                await instance.patch(`/api/v1/news/${newsData._id}`, { dislikes: dislikes - 1 });
            } catch (error) {
                console.error('Error updating dislikes count:', error);
            }
        }
    };

    return (
        <>
            <div>
                <div className='flex gap-10 items-center mt-4 md:mt-0 lg:mt-0 '>
                    <p>{likes}</p>
                    <p>{dislikes}</p>
                </div>
                <div className='flex items-center gap-6 mt-2 '>
                    <button onClick={handleLike} type="button" className={`text-${likeColor}-700 border border-${likeColor}-700 bg-${likeColor}-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-${likeColor}-600 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-${likeColor}-500 dark:text-${likeColor}-700 dark:hover:text-white dark:focus:ring-${likeColor}-800 dark:hover:bg-${likeColor}-700`}>
                        <GrLike className='md:w-4 md:h-4 w-3 h-3'></GrLike>
                    </button>

                    <button onClick={handleDislike} type="button" className={`text-${dislikeColor}-700 border border-${dislikeColor}-700 hover:bg-${dislikeColor}-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-${dislikeColor}-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-${dislikeColor}-500 dark:text-${dislikeColor}-500 dark:hover:text-white dark:focus:ring-${dislikeColor}-800 dark:hover:bg-${dislikeColor}-500`}>
                        <GrDislike className={`md:w-4 md:h-4 w-3 h-3 text-${likeColor}-700 `}></GrDislike>
                    </button>
                </div>
            </div>
        </>
    );
};

export default LikeAndDislike;
