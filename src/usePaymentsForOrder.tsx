import { useCallback, useRef } from "react";
import TestComponent from "./TestComponent";

export const usePaymentsForOrder = () => {
  const handleSubmitRef = useRef<() => void>(() => {});

  const setSubmitPaymentFn = (fn: () => void) => {
    handleSubmitRef.current = fn;
  };

  console.log({ check1: handleSubmitRef });

  return {
    submitPayment: () => handleSubmitRef.current(),
    PaymentsForOrder: useCallback(
      () => <TestComponent setSubmitPaymentFn={setSubmitPaymentFn} />,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      []
    ),
  };
};
