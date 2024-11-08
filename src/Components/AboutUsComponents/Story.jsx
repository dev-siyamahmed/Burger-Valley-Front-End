import story1 from '../../assets/story1.jpg'
import story2 from '../../assets/story2.jpg'

const Story = () => {
    return (
        <section className="bg-black text-white">
            <div className="gap-16 items-center py-8 px-4 mx-auto container lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="sm:text-lg space-y-7">
                    <h2 className="font-oswald text-4xl lg:text-5xl font-bold uppercase">Our Story</h2>
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
                    <p className="mb-4">At Burger Valley, we&apos;re not just about burgers - we&apos;re about crafting unforgettable dining experiences. Our journey began with a passion for delivering the juiciest, most flavorful burgers in town.</p>
                    <p className="mb-4">But we didn&apos;t stop there. We believe in offering a diverse range of culinary delights to satisfy every craving. From crispy fries to mouthwatering sandwiches, our menu is crafted with care to please every palate.</p>
                    <p className="mb-4">As a family-owned establishment, Burger Valley is deeply rooted in the community. We take pride in sourcing our ingredients locally whenever possible, supporting local farmers and businesses while ensuring the freshest, highest-quality ingredients for our customers.</p>
                    <p className="mb-4">At Burger Valley, we understand that dining out is more than just a meal—it&apos;s an experience. That&apos;s why we strive to create a warm and welcoming atmosphere where friends and families can gather, share delicious food, and create lasting memories together. Whether you&apos;re celebrating a special occasion or simply craving a satisfying meal, Burger Valley is your destination for wholesome, flavorful cuisine.</p>
                    <p>With a commitment to quality ingredients and exceptional service, we invite you to join us on a culinary adventure at Burger Valley.</p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                    <img className="w-full rounded-lg" src={story1} alt="Burger Valley Image 1" />
                    <img className="mt-4 w-full lg:mt-10 rounded-lg" src={story2} alt="Burger Valley Image 2" />
                </div>
            </div>
        </section>
    );
};

export default Story;