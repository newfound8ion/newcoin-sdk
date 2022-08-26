import { getNameForTransaction, priceForCurrency } from "../utils";
import { EosioActionObject, NCTransferTokenTransactionActionsParams } from "../types";

export function getTransferTokensActions(
  params: NCTransferTokenTransactionActionsParams
): EosioActionObject[] {
  const {
    accountName,
    requestPermission = "active",
    to,
    currency,
    contract,
    amount,
    decimals,
    memo,
  } = params;

  if (!accountName || !to || !currency || !contract) {
    throw new Error("Missing required params");
  }

  return [
    {
      account: contract,
      name: "transfer",
      authorization: [
        {
          actor: getNameForTransaction(accountName),
          permission: requestPermission,
        },
      ],
      data: {
        from: getNameForTransaction(accountName),
        to: getNameForTransaction(to),
        quantity: priceForCurrency(amount, currency, decimals),
        memo: memo || "",
      },
    },
  ];
}
