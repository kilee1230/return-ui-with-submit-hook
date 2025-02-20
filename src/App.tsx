import { usePaymentsForOrder } from "./usePaymentsForOrder";

function App() {
  const { submitPayment, PaymentsForOrder } = usePaymentsForOrder();

  console.log({ submitPayment });

  return (
    <div className="w-7/10 mx-auto mt-5 text-center">
      <PaymentsForOrder />

      <div className="mt-4">
        <button
          onClick={() => submitPayment()}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
        >
          Click me
        </button>
      </div>
    </div>
  );
}

export default App;
