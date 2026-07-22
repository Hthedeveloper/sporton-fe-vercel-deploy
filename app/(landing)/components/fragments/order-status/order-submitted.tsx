"use client"

import { FiRefreshCw } from "react-icons/fi";
import Button from "../../elements/Button";
import Image from "next/image";

const OrderSubmitted = () => {
  const reloadOrderStatus = () => {
    window.location.reload();
  };

  return (
    <div className="bg-white w-[641px] h-[456px] p-16 flex flex-col justify-center items-center">
      {/* Icon */}
      <div className="w-[117px] h-[117px] bg-blue-100 rounded-full relative">
        <Image
          height={74}
          width={74}
          src="/order/mynaui_cart-check-solid.svg"
          alt="submitted"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      {/* Text */}
      <h2 className="text-2xl font-bold text-center mt-6">
        Order Submitted !!
      </h2>
      <p className="text-center mt-3 max-w-md">
        Your Order is recorded in our system, we are still confirming the
        payment status, please wait and your order status will be updated in
        less than 12 hours.
      </p>

      <Button variant="dark" className="w-[411px] h-[54px] mt-[33px]" onClick={reloadOrderStatus}>
        <FiRefreshCw size={18} />
        Refresh Order Status
      </Button>
    </div>
  );
};

export default OrderSubmitted;
