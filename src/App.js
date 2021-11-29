import React, { useEffect } from "react";
import "./styles.css";
import ProductCard from "./components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { uploadProduct, getContentSlots } from "./actions";
import { images } from "./data";

export default function App() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product?.products);
  const contentSlots = useSelector((state) => state.product?.contentSlots);

  useEffect(() => {
    dispatch(uploadProduct(images));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getContentSlots());
  }, [dispatch]);

  return (
    <div className="App">
      <div>
        {(products || []).map((product, index) => (
          <div>
            <h1 style={{ display: "flex", justifyContent: "flex-start" }}>
              Product # {index + 1}
            </h1>
            <ProductCard
              product={product}
              contentSlots={contentSlots}
              key={index}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
