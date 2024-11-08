
import { FaCheck } from 'react-icons/fa6';
import News_Features from './News_Features';
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useLoaderData } from 'react-router-dom';
import useGetAllNews from '../../Hooks/userGetAllnews';
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from 'react-share';
import LikeAndDislike from './LikeAndDislike';
import CommentPage from './CommentPage';
import RightSide from './RightSide';


const News_Details = () => {

    const currentPageURL = "burgervalley.com"
    const [allNewsData] = useGetAllNews()
    console.log(allNewsData);


    const newsData = useLoaderData()
    const { _id } = newsData;
    console.log(_id);


    return (
        <>
            <div className="lg:flex px-1 md:px-2 lg:px-1 py-1 lg:py-2 bg-black ">

                {/* left side  */}
                <div className="container mx-auto w-full  flex flex-col items-center  rounded-lg shadow  px-1 md:px-1 lg:px-1">


                    {/* title image  */}
                    <img className="object-cover w-full rounded-t-lg md:h-[400px] h-[250px] " src={newsData?.image} alt="" />

                    <div className='text-white px-1 md:px-2 lg:px-4 py-1 lg:py-2'>

                        <div className=' py-4'>
                            {/* title and description and other info */}
                            <h5 className="mb-2  md:text-2xl lg:text-4xl text-xl font-bold tracking-tight text-white  dark:text-white font-oswald md:py-4   "> {newsData?.title} </h5>

                            {
                                newsData?.description?.paragraphs?.map((paragraph, index) => <p key={index} className='md:py-1 py-1 text-sm text-white md:text-md  lg:text-lg  ' >
                                    {paragraph}
                                </p>)
                            }


                            <h3 className='text-white  uppercase font-bold text-2xl lg:mt-6 md:mt-4 mt-2 font-oswald   '> content writer for website  </h3>
                        </div>


                        {/* description image  */}

                        <div className='grid grid-cols-2 gap-2 md:gap-3 mlg:gap-5 lg:mt-6 md:mt-4 mt-2 mb-4'>
                            <div>
                                <img className='rounded-lg lg:h-[400px] md:h-[350px] w-full ' src="https://img.freepik.com/premium-photo/amazing-delicious-cheese-burger_727939-299.jpg" alt="" />
                            </div>
                            <div>
                                <img className='rounded-lg lg:h-[400px] md:h-[350px] w-full ' src="https://img.freepik.com/premium-photo/amazing-delicious-cheese-burger_727939-299.jpg" alt="" />
                            </div>

                        </div>

                        {/* description  */}
                        <div className='text-white py-2 md:py-3 lg:py-4 mb-10 '>
                            <p>Indulge in the timeless taste of our Classic Cheeseburger, where juicy, flame-grilled beef meets the creamy richness of melted cheddar cheese, all nestled between two perfectly toasted sesame seed buns. Every bite is a symphony of flavor, with the savory meat complemented by crisp lettuce, ripe tomatoes, crunchy pickles, and a dollop of our signature tangy burger sauce. Satisfy your cravings with this iconic American favorite, crafted with quality ingredients and served with a side of golden, crispy fries. Dive into a world of deliciousness with our Classic Cheeseburger today!</p>
                        </div>



                        {/* list item */}
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:gap-3 lg:gap-5 gap-1 '>

                            <div>
                                <h1 className='flex items-center gap-2 '> <span><FaCheck className='text-[#FF9D00] '></FaCheck></span> Lorem, ipsum dolor sit amet consectetur  quis.</h1>
                            </div>
                            <div>
                                <h1 className='flex items-center gap-2 '> <span><FaCheck className='text-[#FF9D00] '></FaCheck></span> Lorem, ipsum dolor sit amet consectetur  quis.</h1>
                            </div>
                            <div>
                                <h1 className='flex items-center gap-2 '> <span><FaCheck className='text-[#FF9D00] '></FaCheck></span> Lorem, ipsum dolor sit amet consectetur  quis.</h1>
                            </div>
                            <div>
                                <h1 className='flex items-center gap-2 '> <span><FaCheck className='text-[#FF9D00] '></FaCheck></span> Lorem, ipsum dolor sit amet consectetur  quis.</h1>
                            </div>
                            <div>
                                <h1 className='flex items-center gap-2 '> <span><FaCheck className='text-[#FF9D00] '></FaCheck></span> Lorem, ipsum dolor sit amet consectetur  quis.</h1>
                            </div>
                            <div>
                                <h1 className='flex items-center gap-2 '> <span><FaCheck className='text-[#FF9D00] '></FaCheck></span> Lorem, ipsum dolor sit amet consectetur  quis.</h1>
                            </div>
                            <div>
                                <h1 className='flex items-center gap-2 '> <span><FaCheck className='text-[#FF9D00] '></FaCheck></span> Lorem, ipsum dolor sit amet consectetur  quis.</h1>
                            </div>

                        </div>


                        {/*conclusion  */}
                        {newsData?.description?.conclusion ? (
                            <p className='my-10 text-sm md:text-md lg:text-lg '>{newsData?.description?.conclusion}</p>
                        ) : (
                            <p className=''>Conclusion not available</p>
                        )}

                        {/* tag and like and share section  */}
                        <div className='md:flex items-center justify-between'>
                            {/* tag  */}
                            <div className='md:flex items-center  md:gap-[110px] '>
                                <div className='flex items-center gap-2 font-oswald lg:tracking-wide'>
                                    <h1> Tags : </h1>
                                    {newsData?.tags?.map((tag, index) => (
                                        <div key={index}>
                                            <h1 className='text-[#FF9D00] text-sm md:text-md '> {tag},</h1>
                                        </div>
                                    ))}

                                </div>

                                <LikeAndDislike newsData={newsData}></LikeAndDislike>


                            </div>

                            {/* share now icon  */}
                            <div className='flex items-center md:gap-6  gap-3 md:mt-0 mt-6 '>
                                <h1 className='text-sm md:text-md lg:text-lg font-oswald lg:tracking-wide'> Share Now : </h1>
                                <FacebookShareButton
                                    url={currentPageURL}
                                    quote='Please Share This Post'
                                    hashtag='#BurgerValley'
                                >
                                    <button className='md:text-xl lg:text-2xl text-[#FF9D00]'> <FaFacebook></FaFacebook>  </button>
                                </FacebookShareButton>

                                <LinkedinShareButton
                                    url={currentPageURL}
                                    quote='Please Share This Post'
                                    hashtag='#BurgerValley'
                                >
                                    <button className='md:text-xl lg:text-2xl text-[#FF9D00]'> <FaLinkedin ></FaLinkedin>  </button>
                                </LinkedinShareButton>


                                <TwitterShareButton
                                    url={currentPageURL}
                                    quote='Please Share This Post'
                                    hashtag='#BurgerValley'
                                >
                                    <button className='md:text-xl lg:text-2xl text-[#FF9D00]'> <FaTwitter ></FaTwitter>  </button>
                                </TwitterShareButton>
                            </div>

                        </div>

                        <div className='border-b-2 md:my-8 lg:my-10 my-4 border-gray-500 '></div>


                        <div className='font-oswald lg:tracking-wide '>
                            <h1 className='text-2xl font-bold py-4 '> Leave  Reply </h1>
                            <p className='mb-6'> Please Share Your Opinio Now  .</p>
                           <CommentPage  newsData={newsData}></CommentPage>

                        </div>

                    </div>
                </div>

                {/* right side  */}
                <div className=" lg:block lg:w-5/12 px-2  text-white font-oswald lg:tracking-wide">
                    <News_Features allNewsData={allNewsData} />
                    <RightSide></RightSide>
                </div>
            </div>
        </>
    );
};

export default News_Details;