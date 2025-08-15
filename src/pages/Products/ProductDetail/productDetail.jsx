import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductById } from "../../../redux/slices/productSlice";
import { Carousel } from "antd";
import { PortaImages } from "../../../assets/img";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { productSelected, status, error } = useSelector(
    (state) => state.products || {}
  );

  useEffect(() => {
    if (id) {
      dispatch(getProductById(id));
    }
  }, [dispatch, id]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>{error}</p>;

  if (!productSelected) return <p>Product not found</p>;

  const buffertoString = (buffer) => {
    return String.fromCharCode(...buffer.data);
  };

  return (
    <div className="products-detail-container min-h-screen w-screen bg-gray-50 py-12 px-6">
      <div
        id={productSelected.product_id}
        className="flex gap-12 max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden"
      >
        <div className="w-1/2 p-6 bg-gray-100 flex items-center justify-center">
          <Carousel autoplay arrows className="w-full max-w-md">
            {productSelected.product_images.map((img, index) => (
              <div key={index} className="flex justify-center">
                <img
                  src={
                    buffertoString(img) ||
                    PortaImages.ProductImages.PlaceholderProdImg
                  }
                  alt="product-image"
                  onError={(e) =>
                    (e.target.src =
                      PortaImages.ProductImages.PlaceholderProdImg)
                  }
                  className="rounded-lg object-cover h-[400px] w-full shadow-md"
                />
              </div>
            ))}
          </Carousel>
        </div>

        <div className="w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {productSelected.product_name}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            {productSelected.product_descp}
          </p>
          <p className="text-2xl font-semibold text-green-600 mb-8">
            {productSelected.product_price}
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            ⭐ {productSelected.product_avg_rating}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
