import { motion } from "framer-motion";
import { GrView } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAxios from "../../Hooks/useAxios";
import { Toaster, toast } from 'react-hot-toast';
const MenuCard = ({food}) => {
    const { name,image,price,_id,category,discount,description } = food || {} 
    const instance = useAxios()
    const handleAddToWishlist = async () => {
      // const user_name = currentUser?.name;
      try {
  
        const quantity = 1;
        const wishlistData = {
          //   user_name,
          //   user_email,
          //   owner_email,
          food_id: _id,
          discount,
          name,
          image,
          price,
          category,
          quantity
        };
        console.log(wishlistData);
  
        const res = await instance.post("/api/v1/wishlist", wishlistData);
  
        if (res?.data) {
          toast.success('Successfully Added in the Wishlist!');
        }
      } catch (error) {
        console.error("Error submitting comment:", error);
        toast.error('Error submitting in Wishlist. Please try again later.');
      }
    };
    return (
      <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <div key={_id} className="lg:w-[300px] 2xl:w-[360px] lg:mt-6">
        <div className="p-4 bg-neutral-800 rounded-xl">
          <img
            className="h-[245px] bg-cover mx-auto rounded-xl"
            src={image}
            alt=""
          />
        </div>

        <h5 className="text-xl px-1 py-2 font-semibold text-white font-oswald">
          {name}
        </h5>
        <p className="text-white px-1 text-sm pt-3 font-oswald">{description}</p>

        <div className="flex mt-5 items-center justify-between">
          <span className="text-2xl   text-yellow-500 font-oswald ">
            ${price}
          </span>
          <Link to={`food/${_id}`}>
            <button className="text-white font-bold text-2xl mr-5 mt-3">
              <GrView />
            </button>
          </Link>
        </div>
      </div>
      <div onClick={handleAddToWishlist} className="absolute top-9 right-0 left-3">
        <button className="text-red-500 text-2xl">
          <FaRegHeart />
        </button>
      </div>
      <div><Toaster /></div>
    </motion.div>
    );
};

export default MenuCard;