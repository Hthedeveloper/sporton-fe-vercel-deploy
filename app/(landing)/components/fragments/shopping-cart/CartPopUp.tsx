import priceFormatter from "@/app/utils/price-formatter";
import Image from "next/image";
import Button from "../../elements/Button";
import { FiArrowRight, FiTrash2 } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/app/hooks/use-store";
import { getImageUrl } from "@/app/lib/api";



const CartPopUp = () => {
  const { push } = useRouter();
  const { items, removeItem } = useCartStore();

  console.log(items);
  const TotalPrice = items.reduce(
    (total, item) => total + item.price * item.qty,
    0,
  );
  return (
    <div className="absolute bg-white right-0 top-16 shadow-xl shadow-black/10 border border-gray-200 w-[360px] z-10">
      <div className="p-4 border-b border-gray-200 font-bold text-center">
        Shpping Cart
      </div>
      {items.length ? (
        items.map((item, index) => (
          <div className="border-b border-gray-200 p-4 flex gap-3" key={index}>
            <div className="bg-primary-light aspect-square w-16 flex justify-center items-center">
              <Image
                src={getImageUrl(item.imageUrl)}
                width={63}
                height={63}
                alt={item.name}
                className="aspect-square object-contain"
              />
            </div>
            <div className="self-center">
              <div className="text-sm font-medium">{item.name}</div>
              <div className="flex gap-3">
                <div>{item.qty}x</div>
                <div className="text-primary">{priceFormatter(item.price)}</div>
              </div>
            </div>
            <Button
              size="small"
              variant="ghost"
              className="w-7 h-7 !p-0 self-center ml-auto"
              onClick={() => removeItem(item._id)}
            >
              <FiTrash2 />
            </Button>
          </div>
        ))
      ) : (
        <div className="text-center py-5 opacity-50">
          You shopping cart is empty
        </div>
      )}
      <div className="border-t border-gray-200 p-4">
        <div className="flex justify-between font-semibold">
          <div className="text-sm">Total</div>
          <div className="text-xs text-primary">
            {priceFormatter(TotalPrice)}
          </div>
        </div>
        <Button
          variant="dark"
          size="small"
          className="w-full mt-4"
          onClick={() => push("/checkout")}
        >
          Check Out Now
          <FiArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default CartPopUp;
