import React, { useEffect, useRef, useState } from "react";

interface TestComponentProps {
  setSubmitPaymentFn: (fn: () => void) => void;
}

export default function TestComponent({
  setSubmitPaymentFn,
}: TestComponentProps) {
  const [value, setValue] = useState("");
  const valueRef = useRef(value);

  useEffect(() => {
    valueRef.current = value;
  }, [value]);

  const handleSubmit = () => {
    console.log("hehhe: ", valueRef.current);
  };

  useEffect(() => {
    console.log({ check3: setSubmitPaymentFn });
    setSubmitPaymentFn(handleSubmit);
  }, [setSubmitPaymentFn]);

  return (
    <input
      type="text"
      placeholder="Enter something"
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        console.log({ text: value });
      }}
      className="w-full p-2 border rounded"
    />
  );
}
