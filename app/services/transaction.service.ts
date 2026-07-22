import { fetchAPI } from "@/app/lib/api";
import { Transaction } from "@/app/types";

export const transactionCheckout = async (
  form: FormData,
): Promise<Transaction> => {
  return await fetchAPI<Transaction>("/transactions/checkout", {
    method: "POST",
    body: form,
  });
};

export const transactionById = async (id: string): Promise<Transaction> => {
  return await fetchAPI<Transaction>(`/transactions/${id}`);
};
