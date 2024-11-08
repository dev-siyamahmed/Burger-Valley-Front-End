import { LiaHamburgerSolid } from "react-icons/lia";
import { BsShopWindow } from "react-icons/bs";
import { WiStars } from "react-icons/wi";



const stats = () => {
    return (
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 items-center justify-center gap-10 ">
            <div className="w-full rounded-lg bg-[#171717] p-8 flex flex-col items-center justify-center">
                <div className="h-12">
                    <span className="text-6xl text-[#FF9D00] mb-2"><WiStars /></span>
                </div>
                <div className="my-2">
                    <h2 className="font-oswald text-4xl font-bold text-[#FF9D00]"><span className="text-white">15</span> <span style={{ verticalAlign: 'super' }}>+</span> </h2>
                </div>
                <div>
                    <p className="mt-2 font-sans text-base font-medium text-gray-500">Years Experience</p>
                </div>
            </div>

            <div className="w-full rounded-lg bg-[#171717] p-8 flex flex-col items-center justify-center">
                <div className="h-12">
                    <span className="text-6xl text-[#FF9D00] mb-2"><LiaHamburgerSolid /></span>
                </div>
                <div className="my-2">
                    <h2 className="font-oswald text-4xl font-bold text-[#FF9D00]"><span className="text-white">90</span> <span style={{ verticalAlign: 'super' }}>+</span> </h2>
                </div>

                <div>
                    <p className="mt-2 font-sans text-base font-medium text-gray-500">Menu Variants</p>
                </div>
            </div>

            <div className="w-full rounded-lg bg-[#171717] p-8 flex flex-col items-center justify-center">
                <div className="h-12">
                    <span className="text-5xl text-[#FF9D00] mb-2"><BsShopWindow /></span>
                </div>
                <div className="my-2">
                    <h2 className="font-oswald text-4xl font-bold text-[#FF9D00]"><span className="text-white">24</span> <span style={{ verticalAlign: 'super' }}>+</span> </h2>
                </div>

                <div>
                    <p className="mt-2 font-sans text-base font-medium text-gray-500 ">Restaurant Branch</p>
                </div>
            </div>
        </div>
    );
};

export default stats;