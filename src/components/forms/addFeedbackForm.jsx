import React from "react";
import Button from "../buttons";
import { Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { postFeedbackThunk } from "../../redux/slices/feedbackSlice";

const { TextArea } = Input;

const AddFeedbackForm = () => {
  const [form] = Form.useForm();

  const dispatch = useDispatch();
  const handleCommentSubmit = async () => {
    try {
      const values = await form.validateFields();
      const res = await dispatch(postFeedbackThunk(values));
      if (res.type?.endsWith("/fulfilled")) {
        alert("Feedback submitted successfully!");
        form.resetFields();
      } else {
        alert(res.payload?.message || "Feedback submission failed");
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h4 className="text-xl font-semibold text-gray-800 mb-4">
        Submit Your Feedback
      </h4>

      <Form layout="vertical" className="w-full flex-col" form={form}>
        {/* Rating */}
        <Form.Item
          label="Rating"
          name="product_rating"
          rules={[{ required: true, message: "Rate your experience..." }]}
          className="mb-4"
        >
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
        </Form.Item>

        {/* Comment */}
        <Form.Item
          label="Comment"
          name="product_comment"
          rules={[{ required: true, message: "Share your experience..." }]}
          className="mb-4"
        >
          <TextArea placeholder="Share your experience..." />
        </Form.Item>

        {/* Image Upload */}
        <Form.Item
          label="Upload Images (optional)"
          name="product_img"
          className="mb-4"
        >
          <input
            type="file"
            multiple
            accept="image/*"
            className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4
                  file:rounded-lg file:border-0 file:text-sm file:font-semibold
                  file:bg-green-50 file:text-green-600 hover:file:bg-green-100"
          />
        </Form.Item>

        {/* Submit Button */}
        <Button
          btnText="Submit Feedback"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors w-full justify-center"
          onClickHandler={handleCommentSubmit}
        />
      </Form>
    </div>
  );
};

export default AddFeedbackForm;
