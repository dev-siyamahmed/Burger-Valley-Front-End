import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { useState } from "react";

import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useAxios from "../../Hooks/useAxios";
const MenuDetails = () => {

  const param = useParams();
  const [quantity, setQuantity] = useState(1);
  const [favorite, setFavorite] = useState(false);
  const { data: product = {} } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const res = await instance.get(`/api/v1/products/${param?.id}`);
      return res.data;
    },
  });
  const { name, image, _id, price, category, discount,ingredients,description } = product;
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
        quantity,
      };
      console.log(wishlistData);

      const res = await instance.post("/api/v1/wishlist", wishlistData);

      if (res?.data) {
        toast.success("Successfully Added in the Wishlist!");
      }
    } catch (error) {
      console.error("Error submitting comment:", error);
      toast.error("Error submitting in Wishlist. Please try again later.");
    }
  };

  const handleAddToCart = async () => {
    const food_id = _id;
    try {
    const addCart = {
      food_id,
      unit_price: price,
      total_price: price * quantity,
      quantity,
      discount,
      image,
      name,
      category,
    };
    console.log(addCart);
    const res = await instance.post("/api/v1/myCarts", addCart);

    if (res?.data) {
      toast.success("Successfully Added in the Cart!");
    }
  } catch (error) {
    console.error("Error submitting comment:", error);
    toast.error("Error adding in add to cart. Please try again later.");
  }
  };

  return (
    <div className="mx-auto lg:p-12 2xl:ml-40">
      <div className="flex flex-col md:flex-row">
        <div className="2xl:ml-32 2xl:mt-16  md:mt-28">
          <img className="h-[450px] bg-cover  rounded-xl" src={image} alt="" />
        </div>

        {/* Second half */}
        <div className="w-full md:w-1/2 p-10">
          <h2 className="text-3xl font-Oswald text-white font-semibold">{name}</h2>

          <h2 className="text-yellow-500 font-oswald text-xl font-medium my-1">
            Food Price: $ {price}
          </h2>
          <h2 className="text-yellow-500 font-oswald text-xl font-medium my-1">
            Total Price: $ {price * quantity}
          </h2>
          <hr className="my-5" />
          <p className="text-gray-500 mb-3 text-lg font-oswald">{description}</p>

          <hr className="my-5" />
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr>
                  <th className="py-2 px-4 font-oswald bg-yellow-200 text-left text-yellow-800 uppercase font-semibold">
                    Ingredients
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y font-oswald divide-gray-200">
                {ingredients?.map((ingredient, index) => (
                  <tr key={index}>
                    <td className="py-2 px-5 text-white">{ingredient}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex md:flex-col lg:flex-row md:items-start lg:items-center text-yellow-500 gap-1 my-5">
            <div className="flex items-center gap-3">
              <h3>Quantity</h3>
              <div className="flex items-center">
                <button
                  onClick={() => {
                    if (quantity > 1) {
                      setQuantity(quantity - 1);
                    }
                  }}
                  className="border-2  border-black p-2"
                >
                  <FaMinus />
                </button>
                <p className="mx-2 ">{quantity}</p>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="border-2 font-oswald border-black p-2"
                >
                  <FaPlus />
                </button>
              </div>
            </div>
          </div>
          <button
            onClick={handleAddToCart}
            className="bg-red-500 text-white font-oswald mb-3 rounded-lg md:p-3 lg:px-10 "
          >
            Add Food
          </button>
          <button
            className="text-yellow-500 flex items-center gap-2"
            onClick={handleAddToWishlist}
          >
            <FaRegHeart className={`${favorite ? "text-red-500" : ""} `} />
            Add to Wishlist
          </button>

          <p className="text-white mt-3 font-oswald">SKU : Food-Collections</p>
          <p className="text-white font-oswald">Category : {category}</p>
        </div>
      </div>
     
    </div>
  );
};

export default MenuDetails;
