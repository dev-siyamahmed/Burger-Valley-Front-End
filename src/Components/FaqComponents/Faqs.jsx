const faqData = [
    {
        "question": "What are your signature burgers at Burger Valley ?",
        "answer": "Explore our range of unique and flavorful burgers crafted to satisfy your cravings."
    },
    {
        "question": "Do you offer vegetarian or vegan burger options ?",
        "answer": "Discover our delicious vegetarian and vegan burger selections made with fresh, plant-based ingredients."
    },
    {
        "question": "What types of sandwiches do you serve ?",
        "answer": "Dive into our assortment of mouthwatering sandwiches, from classic favorites to specialty creations."
    },
    {
        "question": "Can I customize my burger or sandwich order ?",
        "answer": "Personalize your meal with our wide array of toppings, sauces, and add-ons to create the perfect flavor combination."
    },
    {
        "question": "What pizza varieties do you have on your menu ?",
        "answer": "Indulge in our scrumptious pizzas featuring a variety of toppings, from traditional classics to innovative combinations."
    },
    {
        "question": "Are your pizzas made with fresh ingredients ?",
        "answer": "Enjoy the quality and freshness of our pizzas made with premium ingredients and handcrafted dough for an unforgettable taste experience."
    },
    {
        "question": "Do you offer combo meals or value deals ?",
        "answer": "Take advantage of our combo meals and value deals designed to give you great taste and great value in one satisfying package."
    },
    {
        "question": "What soft drink options do you have available ?",
        "answer": "Quench your thirst with our selection of refreshing soft drinks, including popular sodas and other beverages to complement your meal perfectly."
    }
]

const Faqs = () => {
    return (
        <div className="container mx-auto py-12 text-white">
            <div className="space-y-7 max-w-4xl mx-auto mb-12 text-center flex flex-col items-center justify-center">
                <h1 className='font-oswald text-4xl lg:text-5xl font-bold uppercase'>Frequently asked questions</h1>
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
                <p className="text-neutral-400">Got questions? Get answers! Explore Burger Valley&apos;s FAQ page for quick info on our delicious burgers, sandwiches, pizzas, and drinks. Find out about our specialties, customization options, and more!</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {faqData.map((item, index) => (
                    <div key={index} className="text-white p-6 rounded-lg">
                        <div className="flex items-start justify-start gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-[#FF9D00]">
                                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 0 1-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 0 1-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 0 1-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584ZM12 18a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                            </svg>
                            <h2 className="font-oswald text-[1.7rem] font-semibold uppercase mb-2">{item.question}</h2>
                        </div>
                        <p className="ml-10 xl:ml-12 text-neutral-400">{item.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faqs;