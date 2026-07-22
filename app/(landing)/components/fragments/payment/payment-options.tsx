import CardWithHeader from "@/app/(landing)/layout/CardWithHeader";
import { getAllBank } from "@/app/services/bank.service";
import { FiCreditCard } from "react-icons/fi";

const PaymentList = [
  {
    bank_name: "BCA",
    account_number: "0123182312",
    account_holder: "PT SportOn Digital",
    option: "Bank Transfer",
  },
  {
    bank_name: "Mandiri",
    account_number: "83923912013203123",
    option: "Bank Transfer",
    account_holder: "PT SportOn Digital",
  },
  {
    bank_name: "BTPN",
    account_number: "5238218923",

    account_holder: "PT SportOn Digital",
    option: "Bank Transfer",
  },
];

const PaymentOption = async () => {
  const banks = await getAllBank();
  return (
    <CardWithHeader title="Payment Options">
      <div className="h-[488px] overflow-y-auto">
        {banks.map((item) => (
          <div
            key={item._id}
            className="flex gap-5 border-b border-gray-200 w-full p-5"
          >
            <div className="bg-blue-100 p-4 text-blue-500 h-fit self-center">
              <FiCreditCard size={24} />
            </div>
            <div className="self-center">
              <div className="font-bold">{item.accountName}</div>
              <div className="text-sm">{item.accountNumber}</div>
              <div className="text-sm opacity-60">{item.accountName}</div>
            </div>
            <div className="bg-blue-100 text-xs text-blue-500 ml-auto text-gray-700 h-fit flex self-center px-2 py-1">
              Bank Transfer
            </div>
          </div>
        ))}
      </div>
    </CardWithHeader>
  );
};

export default PaymentOption;
