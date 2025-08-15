import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductById } from "../../../redux/slices/productSlice";
import { PortalImages } from "../../../assets/img";
import Button from "../../../components/buttons";

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

  // const buffertoString = (buf) => {
  //   if (!buf) return null;
  //   return `data:image/jpeg;base64,${Buffer.from(buf).toString("base64")}`;
  // };

  // const productImages = productSelected?.product_images || [];

  return (
    <div className="products-detail-container min-h-screen bg-gray-50 py-12 px-6">
      <div
        id={productSelected.product_id}
        className="flex gap-12 max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden"
      >
        <div className="w-1/2 p-6 bg-gray-100 flex items-start justify-center">
          {/* {productImages.length === 0 ? (
            <img
              src={PortalImages.ProductImages.PlaceholderProdImg}
              alt="placeholder"
              className="rounded-lg object-cover h-[400px] w-full shadow-md"
            />
          ) : (
            <Carousel autoplay arrows className="w-full max-w-md" dots={false}>
              {productImages.map((img, index) => (
                <div key={index} className="flex justify-center">
                  <img
                    src={buffertoString(img)}
                    alt="product-image"
                    onError={(e) =>
                      (e.target.src =
                        PortalImages.ProductImages.PlaceholderProdImg)
                    }
                    className="rounded-lg object-cover h-[400px] w-full shadow-md"
                  />
                </div>
              ))}
            </Carousel>
          )} */}
          <img
            src={PortalImages.ProductImages.PlaceholderProdImg}
            alt="placeholder"
            className="rounded-lg object-cover h-[400px] w-full shadow-md"
          />
        </div>

        <div className="w-1/2 p-8 flex flex-col justify-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {productSelected.product_name}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {productSelected.product_descp}
            </p>
            <p className="text-2xl font-semibold text-green-600 mb-8">
              {productSelected.product_price}
            </p>
          </div>

          {/* Feedback Section */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Customer Feedback
            </h3>

            {/* Overall Rating */}
            <div className="flex items-center mb-6 gap-4">
              <div className="flex items-center gap-1 text-yellow-500">
                <span>⭐</span>
                <span>{productSelected.product_avg_rating}</span>
              </div>
              {/* <p className="text-gray-600">Based on 24 reviews</p> */}
            </div>

            {/* Individual Feedback Cards */}
            {/* <div className="flex flex-col gap-4">
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-semibold text-gray-800">John Doe</p>
                  <p className="text-yellow-500">⭐ 5</p>
                </div>
                <p className="text-gray-600 text-sm mb-2">
                  Amazing product! Highly recommend.
                </p>
                <div className="flex gap-2">
                  <img
                    src="/images/review1.jpg"
                    alt="feedback-img"
                    className="h-16 w-16 object-cover rounded-md"
                  />
                  <img
                    src="/images/review2.jpg"
                    alt="feedback-img"
                    className="h-16 w-16 object-cover rounded-md"
                  />
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-semibold text-gray-800">Jane Smith</p>
                  <p className="text-yellow-500">⭐ 4</p>
                </div>
                <p className="text-gray-600 text-sm mb-2">
                  Good quality, but delivery was slow.
                </p>
                <div className="flex gap-2">
                  <img
                    src="/images/review3.jpg"
                    alt="feedback-img"
                    className="h-16 w-16 object-cover rounded-md"
                  />
                </div>
              </div>
            </div> */}

            {/* Submit Feedback Section */}
            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                Submit Your Feedback
              </h4>

              {/* Rating */}
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Rating</label>
                <div className="flex gap-1 text-2xl cursor-pointer">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className="hover:text-yellow-500 text-gray-400 transition-colors"
                    >
                      ⭐
                    </span>
                  ))}
                </div>
              </div>

              {/* Comment */}
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Comment</label>
                <textarea
                  placeholder="Share your experience..."
                  className="w-full border rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                  rows={4}
                ></textarea>
              </div>

              {/* Image Upload */}
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">
                  Upload Images (optional)
                </label>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4
                  file:rounded-lg file:border-0 file:text-sm file:font-semibold
                  file:bg-green-50 file:text-green-600 hover:file:bg-green-100"
                />
              </div>

              {/* Submit Button */}
              <Button
                btnText="Submit Feedback"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors w-full justify-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
