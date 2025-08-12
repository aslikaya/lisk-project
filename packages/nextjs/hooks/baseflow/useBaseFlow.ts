import { useState } from "react";
import { parseUnits } from "viem";
import { useScaffoldContractRead, useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

export function useBaseFlow() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Contract write hooks
  const { writeAsync: createInvoiceAsync, isMining: isCreatingInvoice } = useScaffoldContractWrite({
    contractName: "BaseFlowImplementation",
    functionName: "createInvoice",
    args: [undefined, undefined, undefined, undefined],
  });

  const { writeAsync: payInvoiceAsync, isMining: isPayingInvoice } = useScaffoldContractWrite({
    contractName: "BaseFlowImplementation",
    functionName: "payInvoice",
    args: [undefined],
  });

  const { writeAsync: updateInventoryAsync, isMining: isUpdatingInventory } = useScaffoldContractWrite({
    contractName: "BaseFlowImplementation",
    functionName: "updateInventory",
    args: [undefined, undefined, undefined],
  });

  // Wrapper functions to match BaseFlow's original API
  const createInvoice = async (customer: string, amount: string, dueDate: number, metadata: string) => {
    try {
      setLoading(true);
      setError(null);

      // Parse amount as USDC (6 decimals)
      const result = await createInvoiceAsync({
        args: [customer, parseUnits(amount, 6), BigInt(dueDate), metadata],
      });

      return result;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to create invoice";
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const payInvoice = async (invoiceId: string) => {
    try {
      setLoading(true);
      setError(null);

      const result = await payInvoiceAsync({
        args: [invoiceId as `0x${string}`],
      });

      return result;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to pay invoice";
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateInventory = async (itemId: string, quantity: number, price: string) => {
    try {
      setLoading(true);
      setError(null);

      const result = await updateInventoryAsync({
        args: [itemId, BigInt(quantity), parseUnits(price, 6)],
      });

      return result;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to update inventory";
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    // Write functions
    createInvoice,
    payInvoice,
    updateInventory,

    // Loading states
    loading: loading || isCreatingInvoice || isPayingInvoice || isUpdatingInventory,
    isCreatingInvoice,
    isPayingInvoice,
    isUpdatingInventory,

    // Error state
    error,
  };
}

// Hook for reading invoice data
export function useInvoiceData(invoiceId?: string) {
  const { data: invoice, isLoading } = useScaffoldContractRead({
    contractName: "BaseFlowImplementation",
    functionName: "invoices",
    args: [invoiceId as `0x${string}` | undefined],
  });

  return {
    invoice,
    isLoading,
  };
}

// Hook for reading inventory data
export function useInventoryData(merchant?: string, itemId?: string) {
  const { data: inventory, isLoading } = useScaffoldContractRead({
    contractName: "BaseFlowImplementation",
    functionName: "getInventory",
    args: [merchant as string | undefined, itemId as string | undefined],
  });

  return {
    inventory,
    isLoading,
  };
}
