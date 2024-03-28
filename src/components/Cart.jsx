import itemPic from "../Assets/image-product-1-thumbnail.jpg";
import { FaTrashCan } from "react-icons/fa6";



const Cart = () => {
  
  return (
    <div className="flex flex-col gap-4 w-97 bg-white absolute 
      inset-x-5 top-20 z-20 rounded-lg p-8 font-Kumbhsans font-medium text-gray-500
      lg:w-1/3 lg:inset-x-10 lg:left-auto lg:drop-shadow-2xl">
      <h3 className="text-black font-bold">Cart</h3>
      <div className="w-full border-b-2"></div>
      <div className="flex flex-col gap-3 ">
        <div className="flex items-center justify-between w-full">
          <img className="w-14 h-14 rounded-lg" src={itemPic} alt="" />
          <div className="">
            <p className="text-sm">Fall limited Edition Sneakers</p>
            <p className="flex gap-2">
              <span>$125.00</span>
              <span>x 3</span>
              <span className="text-black font-bold">$375.00</span>
            </p>
          </div>
          <div>
            <FaTrashCan className="fill-gray-500" />
          </div>
        </div>
        <button className="w-full h-14 bg-orange-800 rounded-xl flex justify-center items-center text-white text-lg font-medium">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
