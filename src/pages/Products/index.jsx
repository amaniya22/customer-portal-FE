import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsThunk } from "../../redux/slices/productSlice";
import { Card } from "antd";

const Products = () => {
  const dispatch = useDispatch();
  const { products, status, error } = useSelector(
    (state) => state.products || {}
  );

  useEffect(() => {
    const getProdData = async () => {
      const res = await dispatch(getAllProductsThunk());
      return res.data;
    };

    getProdData();
  }, [dispatch]);

  if (status === "loading") return <p>Loading products...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <div className="products-pg-container h-auto min-h-screen w-screen flex items-center bg-white">
      <p className="text-black">Products</p>
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        products.map((product) => (
          <Card key={product.product_id}>
            <p>{product.product_name}</p>
          </Card>
        ))
      )}
    </div>
  );
};

export default Products;
