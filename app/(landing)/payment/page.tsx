import PaymentOption from "../components/fragments/payment/payment-options";
import PaymentStep from "../components/fragments/payment/payment-step";

const Payment = () => {
  return (
    <main className="bg-gray-100 min-h-[80vh] py-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-center pt-20 mb-11">Payment</h1>
        <div className="grid grid-cols-2 gap-14">
          <PaymentOption />
          <PaymentStep />
        </div>
      </div>
    </main>
  );
};

export default Payment;
