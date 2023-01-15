import hamburger from "../images/icon-menu.svg";
import logo from "../images/logo.svg";
import cart from "../images/icon-cart.svg";
import closeBtn from "../images/icon-close.svg";
import avatar from "../images/image-avatar.png";
import { useState } from "react";
import { items } from "./Body";
import mainproduct from "../images/image-product-1.jpg";
import deleteicon from "../images/icon-delete.svg";

// import Carts from "./Cart";

function Navbar({ productsNo, setProductNo, cartprd, setCartprd }) {
  const [Nav, setNav] = useState("hidden");
  const [emptycart, setemptycart] = useState("hidden");
  const [filledcart, setfilledcart] = useState("hidden");
  const [NavbarOpen, setNavbarOpen] = useState(false);
  const pricesCalc = items.price * productsNo;

  const displaycart = () => {
    console.log(pricesCalc);
    if (productsNo === 0) {
      setemptycart("block");
    } else {
      setCartprd("block");
      setfilledcart("block");
    }
    setNavbarOpen(!NavbarOpen);
  };
  const deleteElement = () => {
    setfilledcart("hidden");
    setProductNo(0);
    setCartprd("hidden");
  };

  // if (productsNo === 0) {
  //   setCartprd("hidden");
  //   setemptycart("block");
  //   setNavbarOpen(!NavbarOpen)

  // } else {
  //   setCartprd("block");
  //   setfilledcart("block");
  // }

  const handleClick = () => {
    return setNav("block");
  };
  const removeClick = () => {
    return setNav("hidden");
  };

  return (
    <>
      <div className="fixed bg-white px-4 py-6 md:pb-0 w-full border-b-2 border-lightGray md:max-w-7xl mx-auto lg:relative ">
        <div className="flex justify-between items-center">
          <div className="flex gap-5 items-start md:gap-10 md:h-16 ">
            <img
              src={hamburger}
              alt=""
              className="md:hidden h-6 w-6"
              onClick={handleClick}
            />
            <img src={logo} alt="logo" className="w-28 h-5" />
            <nav className="hidden md:flex gap-12">
              <p className="font-kumbsans text-gray hover:border-b-4 cursor-pointer border-orange pb-12">
                Collections
              </p>
              <p className="font-kumbsans text-gray hover:border-b-4 cursor-pointer border-orange  ">
                Men
              </p>
              <p className="font-kumbsans text-gray hover:border-b-4 cursor-pointer border-orange">
                Women
              </p>
              <p className="font-kumbsans text-gray hover:border-b-4 cursor-pointer border-orange ">
                About
              </p>
              <p className="font-kumbsans text-gray hover:border-b-4 cursor-pointer border-orange ">
                Contact
              </p>
            </nav>
          </div>
          <div className="flex gap-3 items-start justify-center  md:h-20 md:gap-7 ">
            <div className="relative">
              <img
                src={cart}
                alt="cart"
                className="w-6 h-6 cursor-pointer mt-2"
                onClick={displaycart}
              />
              <div
                className={`w-4 h-4 rounded-borderRadius1 bg-orange flex justify-center absolute -right-0.5 top-0 ${cartprd}`}
              >
                <span className="text-xs text-white">{productsNo}</span>
              </div>
            </div>
            <img
              src={avatar}
              alt="avatar"
              className="w-10 hover:border-2 border-orange rounded-borderRadius cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div
        className={`bg-black h-screen w-full absolute z-10 bg-opacity-50 ${Nav} md:hidden`}
      >
        <div className={` w-4/5 h-screen p-8 bg-white`}>
          <img
            src={closeBtn}
            alt="closee"
            className="mb-9 w-5"
            onClick={removeClick}
          />
          <p className="font-bold mb-12 text-lg hover:border-b-4 border-orange w-14">
            Collections
          </p>
          <p className="font-bold mb-12 text-lg hover:border-b-4 border-orange w-14">
            Men
          </p>
          <p className="font-bold mb-12 text-lg hover:border-b-4 border-orange w-14">
            Women
          </p>
          <p className="font-bold mb-12 text-lg hover:border-b-4 border-orange w-14">
            About
          </p>
          <p className="font-bold mb-12 text-lg hover:border-b-4 border-orange w-14">
            Contact
          </p>
        </div>
      </div>
      <div
        className={` w-80 md:w-96  right-12 top-20 rounded absolute bg-white ${emptycart}  shadow-2xl`}
      >
        <h3 className="text-xl font-bold border-b border-lightGray py-4 px-5">
          Cart
        </h3>
        <div className="flex justify-center">
          <p className="font-bold text-sm text-center my-16 self-center text-gray">
            Your Cart is empty!
          </p>
        </div>
      </div>
      <div
        className={` w-80 md:w-96  font-bold right-12 top-20 rounded absolute bg-white ${filledcart} shadow-2xl`}
      >
        <h3 className="text-xl border-b border-lightGray py-6 px-5 ">cart</h3>
        <div className="flex justify-between px-5 py-6 items-center">
          <div className="w-8 h-8 md:w-12 md:h-12  rounded">
            <img src={mainproduct} alt="prd" className="w-full rounded" />
          </div>
          <div className="">
            <p className="font-normal  text-gray">{items.product}</p>
            <p className="font-normal text-gray">
              ${items.price} × {productsNo}{" "}
              <span className="font-bold text-black">${pricesCalc}</span>
            </p>
          </div>
          <img
            src={deleteicon}
            alt=""
            className="h-5 cursor-pointer"
            onClick={deleteElement}
          />
        </div>
        <div className="px-6 pt-3 pb-6">
          <button className="text-white bg-orange rounded w-full h-12">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
