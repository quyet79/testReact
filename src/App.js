import { useState } from "react";

import Header from "./components/admin/header";
import Main from "./components/admin/main";
import Nav from "./components/admin/nav";
import "./styles.css";

export default function App() {
  // const products = [
  //   { id: 1, name: "product 1", price: 500, status: true }, // item
  //   { id: 2, name: "product 2", price: 300, status: false }, // item
  //   { id: 3, name: "product 3", price: 400, status: false } // item
  // ];

  const [products, setProducts] = useState([
    { id: "1", name: "product 1", price: 500, status: true }, // product
    { id: "2", name: "product 2", price: 300, status: false }, // product
    { id: "3", name: "product 3", price: 400, status: false } // product
  ]);
  const onHandleAdd = (id) => {
    const newProducts = products.filter((item) => item.id !== id);
    setProducts(newProducts);
  };
  return (
    <div className="">
      <div>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <Nav></Nav>
            <Main products={products} onAdd={onHandleAdd} />
          </div>
        </div>
      </div>
    </div>
  );
}
