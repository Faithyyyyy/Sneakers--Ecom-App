import Navbar from "./component/Nav";
import Body from "./component/Body";
import Modal from "./component/modal";
import "./App.css";
import { useState } from "react";

function App() {
  const [modal, setModal] = useState("hidden");
  const [productsNo, setProductNo] = useState(0);
  const [cartprd, setCartprd] = useState("hidden");

  const showModal = () => {
    setModal("block");
  };
  const addItems = () => {
    setProductNo(productsNo + 1);
  };
  const removeItems = () => {
    if (productsNo > 0) {
      setProductNo(productsNo - 1);
    }
  };
  const addToCart = () => {
    if (productsNo > 0) {
      setCartprd("block");
    }
  };
  return (
    <div className="font-kumbsans  ">
      <Modal modal={modal} setModal={setModal} />
      <Navbar
        productsNo={productsNo}
        setProductNo={setProductNo}
        cartprd={cartprd}
        setCartprd={setCartprd}
      />
      <Body
        showModal={showModal}
        addItems={addItems}
        productsNo={productsNo}
        removeItems={removeItems}
        addToCart={addToCart}
      />
    </div>
  );
}

export default App;
