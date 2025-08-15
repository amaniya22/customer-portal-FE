import React from "react";

const CustomerDashboard = () => {
  return (
    <div>
      <h2 className="text-lg font-medium text-gray-700 mb-4">Your Feedbacks</h2>

      <ul className="space-y-3">
        <li className="p-4 bg-gray-50 rounded-lg shadow-sm border border-gray-200">
          <p className="text-gray-800">
            “Great quality products, fast delivery!”
          </p>
          <span className="text-sm text-gray-500">2 days ago</span>
        </li>
        <li className="p-4 bg-gray-50 rounded-lg shadow-sm border border-gray-200">
          <p className="text-gray-800">“Customer service was very helpful.”</p>
          <span className="text-sm text-gray-500">1 week ago</span>
        </li>
      </ul>
    </div>
  );
};

export default CustomerDashboard;
