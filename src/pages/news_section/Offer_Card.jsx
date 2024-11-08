import React from 'react';


const Offer_Card = () => {
    return (
        <div className='text-white px-2 md:mt-6 mt-1'>
            <div className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center" style={{ backgroundImage: "url('https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/content/fi/art/5feb2c2f49aff.jpeg')", height: '300px', width: "100%" }}>
                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                    <div className="flex h-full items-center justify-center">
                        <div className="text-white">

                            <h2 className="mb-4 text-3xl font-bold uppercase font-oswald lg:tracking-wide"> Get 20 % Discount For Online payment  </h2>

                            <h4 className="mb-6 text-md font-semibold">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora cupiditate, tenetur voluptatum nemo at inventore?</h4>
                            <button
                                type="button"
                                className="rounded  px-7 pb-[8px] pt-[10px] text-xl font-medium leading-normal text-[#FF9D00]  transition duration-150 ease-in-out   hover:bg-opacity-50  dark:hover:bg-opacity-50"
                            >
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </div>



        </div>

    );
};

export default Offer_Card;