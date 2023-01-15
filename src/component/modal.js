import mainproduct from "../images/image-product-1.jpg";
import mainproduct2 from "../images/image-product-2.jpg";
import mainproduct3 from "../images/image-product-3.jpg";
import mainproduct4 from "../images/image-product-4.jpg";

function Modal({ modal, setModal }) {
  const hideModal = () => {
    setModal("hidden");
  };

  return (
    <>
      {/* MODAL */}
      <div
        className={`w-screen h-screen absolute bg-black z-50 bg-opacity-70 ${modal}`}
      >
        <div className=" flex justify-center items-center flex-col mt-24">
          <i
            className=" text-white text-2xl fa fa-close absolute right-right top-16 cursor-pointer hover:text-orange"
            onClick={hideModal}
          />
          <div className="relative">
            <img
              src={mainproduct}
              alt=""
              className="pt-pt w-full lg:pt-0 lg:w-pw lg:rounded-2xl lg:h-ph"
            />
          </div>
          <div className="hidden lg:flex gap-4 mt-5">
            <img
              src={mainproduct}
              alt=""
              className="w-24 h-24  hover:border-2 border-orange rounded-lg"
            />
            <img
              src={mainproduct2}
              alt=""
              className="w-24 h-24  hover:border-2 border-orange rounded-lg"
            />
            <img
              src={mainproduct3}
              alt=""
              className="w-24 h-24  hover:border-2 border-orange rounded-lg"
            />
            <img
              src={mainproduct4}
              alt=""
              className="w-24 h-24  hover:border-2 border-orange rounded-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
