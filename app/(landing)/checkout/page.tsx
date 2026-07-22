"use client";

import { useState } from "react";
import CartItems from "../components/fragments/check-out/cart-items";
import OrderInformation from "../components/fragments/check-out/order-information";
import { CustomerInfo, useCartStore } from "@/app/hooks/use-store";
import { useRouter } from "next/navigation";

const CheckOut = () => {
  const { push } = useRouter();
  const { customerInfo, setCustomerInfo } = useCartStore();
  const [formData, setFormData] = useState<CustomerInfo>({
    customerName: "",
    customerContact: null,
    customerAddress: "",
  });

  const handlePayment = () => {
    if (
      !formData.customerName ||
      !formData.customerContact ||
      !formData.customerAddress
    ) {
      alert("Please fill all fields");
      return;
    }
    setCustomerInfo(formData);
    push("/payment");
  };

  return (
    <main className="bg-gray-100 min-h-[80vh] pt-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-center pt-20 mb-11">
          Check Out Now
        </h1>
        <div className="grid grid-cols-2 gap-14">
          <OrderInformation formData={formData} setFormData={setFormData} />
          <CartItems handlePayment={handlePayment} />
          <p>{JSON.stringify(customerInfo)}</p>
        </div>
      </div>
    </main>
  );
};

export default CheckOut;
