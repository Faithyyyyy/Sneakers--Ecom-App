import mainproduct from "../images/image-product-1.jpg";
import minus from "../images/icon-minus.svg";
import plus from "../images/icon-plus.svg";
import mainproduct2 from "../images/image-product-2.jpg";
import mainproduct3 from "../images/image-product-3.jpg";
import mainproduct4 from "../images/image-product-4.jpg";
// import cart from "../images/icon-cart.svg";
// import Navbar from "./Nav";

export const items = {
  product: "Fall Limited Edition Sneakers",
  price: "125.00",
  id: 1,
};

function Body({ showModal, addItems, productsNo, removeItems, addToCart }) {
  return (
    <>
      <div className="lg:flex justify-between lg:max-w-6xl lg:mt-8 mx-auto ">
        <div className="">
          <img
            src={mainproduct}
            alt=""
            className="pt-pt w-full lg:pt-0 lg:w-pw lg:rounded-2xl lg:h-ph"
            onClick={showModal}
          />
          <div className="hidden lg:flex justify-between mt-5">
            <img
              src={mainproduct}
              alt=""
              className="w-24 h-24 hover:opacity-50 hover:border-2 border-orange rounded-lg"
            />
            <img
              src={mainproduct2}
              alt=""
              className="w-24 h-24 hover:opacity-50 hover:border-2 border-orange rounded-lg"
            />
            <img
              src={mainproduct3}
              alt=""
              className="w-24 h-24 hover:opacity-50 hover:border-2 border-orange rounded-lg"
            />
            <img
              src={mainproduct4}
              alt=""
              className="w-24 h-24 hover:opacity-50 hover:border-2 border-orange rounded-lg"
            />
          </div>
        </div>
        <div className="px-5 max-w-lg mx-auto">
          <h1 className="text-orange text-sm font-semibold py-4 pb-7">
            SNEAKER COMPANY
          </h1>
          <h2 className="font-bold text-3xl md:text-5xl  pb-10">
            {items.product}
          </h2>
          <p className="text-gray text-lg pb-4">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </p>
          <div className="flex lg:flex-col justify-between">
            <div className="flex items-center gap-5">
              <div className="font-bold text-4xl">${items.price}</div>
              <div className="text-orange text-xl bg-orange bg-opacity-40 w-12 h-8 flex justify-center items-center font-semibold rounded">
                50%
              </div>
            </div>
            <div className="font-bold text-lightGray text-xl lg:mt-4 line-through">
              $250
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-6 lg:mt-6">
            <div className="bg-lightGray flex justify-between px-5 py-4 lg:py-0 lg:h-16 items-center lg:w-6/12 rounded mt-10">
              <img
                src={minus}
                alt=""
                className="h-2 hover:opacity-80 pointer-cursor"
                onClick={removeItems}
              />
              <span className="font-bold text-lg">{productsNo}</span>
              <img
                src={plus}
                alt=""
                className="h-4 hover:opacity-80 pointer-cursor"
                onClick={addItems}
              />
            </div>
            <button
              className="bg-orange h-16 self-end rounded flex-grow font-semibold pointer-cursor hover:opacity-80 w-full lg:w-auto text-white"
              onClick={addToCart}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
