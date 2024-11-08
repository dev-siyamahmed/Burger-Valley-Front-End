import About from "../../Components/AboutUsComponents/About";
import Stats from "../../Components/AboutUsComponents/Stats";
import Story from "../../Components/AboutUsComponents/Story";



const AboutUs = () => {
    return (
        <div className="divide-y divide-neutral-800">
            <div className="bg-black flex items-center justify-center py-10">
                <p className="text-3xl font-bold text-white">Page Banner Coming Soon</p>
            </div>
            <div className="mt-10 pt-20">
                <About />
            </div>
            <div className="mt-20 pt-20">
                <Stats />
            </div>
            <div className="mt-20">
                <Story />
            </div>
        </div>
    );
};

export default AboutUs;