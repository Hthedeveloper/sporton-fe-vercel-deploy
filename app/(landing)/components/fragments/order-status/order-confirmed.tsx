import Image from "next/image";

const OrderConfirmed = () => {
  return (
    <div className="bg-white w-[641px] h-[392px] p-16 flex flex-col justify-center items-center">
      {/* Icon */}
      <div className="w-[117px] h-[117px] bg-green-100 rounded-full relative">
        <Image
          height={74}
          width={74}
          src="/order/flowbite_badge-check-solid.svg"
          alt="submitted"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      {/* Text */}
      <h2 className="text-2xl font-bold text-center mt-6">
        Order Confirmed !!
      </h2>
      <p className="text-center mt-3 max-w-md">
        We have received your payment, and your order is currently processed by
        our staff, just wait until your favorite sportswear arrive in your home.
        We will contact you in Whatsapp for further shipping updates.
      </p>
    </div>
  );
};

export default OrderConfirmed;
