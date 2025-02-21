import { useEffect, useState } from "react";

interface TestComponentProps {
  setSubmitPaymentFn: (fn: () => void) => void;
}

export default function TestComponent({
  setSubmitPaymentFn,
}: TestComponentProps) {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    console.log("hehhe: ", value);
  };

  useEffect(() => {
    console.log({ check3: setSubmitPaymentFn });
    setSubmitPaymentFn(handleSubmit);
  }, [setSubmitPaymentFn, handleSubmit]);

  return (
    <div className="bg-red-500 p-5">
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
    </div>
  );
}
