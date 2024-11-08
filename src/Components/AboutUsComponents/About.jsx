import aboutImage from '../../assets/test-food.jpg';
import astraSig from '../../assets/AstraSig.png'

const About = () => {
    return (
        <div className='container mx-auto block xl:flex items-center justify-center gap-12'>
            <img src={aboutImage} alt="about image" className='object-cover rounded-lg mb-7 xl:mb-0' style={{ minWidth: '50%', height: '400px' }} />
            <div className='text-white'>
                <div className='space-y-7 max-w-1/2 mb-8'>
                    <h1 className='font-oswald text-4xl lg:text-5xl font-bold uppercase'>Good food for your all day good mood</h1>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100"
                        height="12"
                        fill="#FF9D00"
                        version="1.1"
                        viewBox="0 139.474 290.658 11.711"
                        xmlSpace="preserve"
                    >
                        <path fill="#FF9D00" d="M0 139.474H290.658V151.185H0z"></path>
                    </svg>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis hic voluptatem quo. Eius dolorem officiis quas a maiores, necessitatibus nulla! Non harum ullam esse amet dolore dolorum molestias at similique? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                <div className='space-y-2'>
                    <img src={astraSig} alt="Signeture of CEO" className='w-56' />
                    <p>Astra Solution, CEO</p>
                </div>
            </div>
        </div>
    );
};

export default About;