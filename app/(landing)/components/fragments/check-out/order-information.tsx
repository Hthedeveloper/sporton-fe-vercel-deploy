"use client"

import CardWithHeader from "@/app/(landing)/layout/CardWithHeader";
import { CustomerInfo } from "@/app/hooks/use-store";

type TOrderInformationProps = {
  formData: CustomerInfo;
  setFormData: React.Dispatch<React.SetStateAction<CustomerInfo>>
}

const OrderInformation = ({formData, setFormData}: TOrderInformationProps) => {

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <CardWithHeader title="Order Information">
      <div className="p-5">
        <div className="input-group">
          <label htmlFor="customerName">Full Name</label>
          <input
            name="customerName"
            type="text"
            placeholder="Type your fullname"
            id="customerName"
            onChange={handleInputChange}
            value={formData.customerName}
          />
        </div>
        <div className="input-group">
          <label htmlFor="customerContact">WhatsApp Number</label>
          <input
            name="customerContact"
            type="number"
            placeholder="+62xx-xxxx"
            id="customerContact"
            onChange={handleInputChange}
            value={formData.customerContact ?? ""}
          />
        </div>
        <div className="input-group">
          <label htmlFor="customerAddress">Shipping Address</label>
          <textarea
            name="customerAddress"
            placeholder="Type your shipping address"
            id="customerAddress"
            rows={7}
            onChange={handleInputChange}
            value={formData.customerAddress}
          />
        </div>
      </div>
    </CardWithHeader>
  );
};

export default OrderInformation;
