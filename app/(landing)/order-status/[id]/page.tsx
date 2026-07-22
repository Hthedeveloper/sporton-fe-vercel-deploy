import OrderConfirmed from "../../components/fragments/order-status/order-confirmed";
import OrderSubmitted from "../../components/fragments/order-status/order-submitted";
import { transactionById } from "@/app/services/transaction.service";
import { TPageProps } from "../../product/[id]/page";
import OrderRejected from "../../components/fragments/order-status/order-rejected";

const OrderStatus = async ({ params }: TPageProps) => {
  const { id } = await params;
  const transaction = await transactionById(id);
  console.log("transaction: ", transaction);

  return (
    <main className="bg-gray-100 min-h-[80vh]">
      <div className="max-w-5xl mx-auto py-20 flex flex-col items-center">
        <h1 className="text-5xl font-bold text-center pt-20 mb-11">
          Order Status
        </h1>
        {transaction.status === 'pending' && <OrderSubmitted />}
        {transaction.status === 'paid' && <OrderConfirmed />}
        {transaction.status === 'paid' && <OrderRejected />}
       
      </div>
    </main>
  );
};

export default OrderStatus;
