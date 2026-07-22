import Image from "next/image";
import { FiAlertCircle } from "react-icons/fi";

const OrderRejected = () => {
  return (
    <div className="bg-white w-[641px] h-[392x] p-16 flex flex-col justify-center items-center">
      {/* Icon */}
      <div className="h-20 w-20 bg-primary-light rounded-full mx-auto p-3 flex justify-center items-center text-primary mb-5">
        <FiAlertCircle size={42} />
      </div>

      {/* Text */}
      <h2 className="text-2xl font-bold text-center mt-6">Order Rejected!!</h2>
      <p className="text-center mt-3 max-w-md">
        I'm sorry your order rejected because your payment proof is invalid
      </p>
    </div>
  );
};


export default OrderRejected