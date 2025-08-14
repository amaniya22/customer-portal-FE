import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsThunk } from "../../redux/slices/productSlice";
import { Card, Tooltip } from "antd";
import { PortaImages } from "../../assets/img";

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

  // To convert byte data of saved product image that was saved in db after conversion to bytea[]
  const buffertoString = (buffer) => {
    return String.fromCharCode(...buffer.data);
  };

  return (
    <div className="products-pg-container h-auto min-h-screen flex flex-col items-start bg-white">
      <p className="text-black m-2 products-pg-title">Review Our Products</p>
      <div className="flex gap-4 flex-wrap mx-2">
        {products.length === 0 ? (
          <p>No products found.</p>
        ) : (
          products.map((product) => {
            const images = product.product_images.map((prodImg) =>
              buffertoString(prodImg)
            );

            return (
              <Card key={product.product_id} className="product-card cursor-pointer">
                <div>
                  <img
                    src={images[0] || PortaImages.ProductImages.PlaceholderProdImg}
                    alt="product-image"
                    onError={(e) => e.target.src = PortaImages.ProductImages.PlaceholderProdImg}
                    className="rounded-md mb-4"
                  />
                </div>
                <div className="mx-3">
                  <div className="mb-2 leading-6">
                    <p className="prod-name">{product.product_name}</p>
                    <Tooltip title={product.product_descp}>
                      <p className="truncate">{product.product_descp}</p>
                    </Tooltip>
                  </div>
                  <div className="flex justify-between">
                    <p>⭐ {product.product_avg_rating}</p>
                    <p>{product.product_price}</p>
                  </div>
                </div>
              </Card>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Products;
