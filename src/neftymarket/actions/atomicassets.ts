import { EosioActionObject } from "@newcoin-foundation/newcoin.pool-js";
import { TransferTokenTransactionActionsParams } from "../types";
import { getNameForTransaction, priceForCurrency } from "../utils";

export function getTransferTokensActions(
  params: TransferTokenTransactionActionsParams
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
