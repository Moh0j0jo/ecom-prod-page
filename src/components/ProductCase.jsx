import { FaShoppingCart } from "react-icons/fa";

const ProductCase = () => {
  return (
    <div className="w-full h-1/2 flex flex-col items-start gap-1 p-5">
      <h3 className="uppercase text-base tracking-wider font-bold text-orange-500">
        sneaker company
      </h3>
      <h1 className="text-3xl font-bold text-black">
        Fal Limited Edition Sneakes
      </h1>
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a druable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>

      <div className="w-full flex flex-col gap-3">
        <div className="w-full h-12 rounded-xl flex justify-between items-center">
          <span>$125.00</span>
          <span>50%</span>
          <span className="line-through">$250.00</span>
        </div>
        <div className="w-full h-14 bg-gray-100 rounded-xl flex items-center justify-between px-6">
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
  );
};

export default ProductCase;
