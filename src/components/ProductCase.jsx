import { FaShoppingCart } from "react-icons/fa";

const ProductCase = () => {
  return (
    <div className="w-full h-2/5 flex flex-col items-start gap-1 p-5">
      <h3 className="uppercase text-base tracking-wider font-bold text-orange-500 font-Kumbhsans lg:text-xl">
        sneaker company
      </h3>
      <h1 className="w-2/3 text-2xl font-bold text-black font-Kumbhsans lg:text-4xl lg:mb-8">
        Fall Limited Edition Sneakes
      </h1>
      <p className="font-Kumbhsans text-gray-600 lg:mb-8">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a druable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>

      <div className="w-full flex flex-col gap-3 font-Kumbhsans lg:gap-10">
        <div className="w-full h-12 rounded-xl flex justify-between items-center font-bold text-2xl lg:w-1/3 lg:flex-col lg:items-start lg:gap-2">
          <div className="flex flex-row items-center gap-3">
            <div className="font-extrabold">$125.00</div>
            <div className="bg-orange-100 rounded-md text-orange-800 text-sm p-1">
              50%
            </div>
          </div>
          <div className="line-through text-gray-300 text-lg">$250.00</div>
      </div>

        <div className="lg:flex lg:flex-shrink lg:gap-4">
          <div className="w-full h-14 bg-gray-100 rounded-xl flex items-center justify-between px-6 font-bold text-xl">
            <span className="text-xl font-extrabold text-orange-800">-</span>
            <span>0</span>
            <span className="text-xl font-extrabold text-orange-800">+</span>
          </div>
          <button className="w-full h-14 bg-orange-800 rounded-xl flex justify-center items-center">
            <FaShoppingCart className="w-10 h-4 fill-gray-300" />
            <p className="text-xm font-bold text-white">Add to cart</p>
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProductCase;
