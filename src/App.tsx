import { usePaymentsForOrder } from "./usePaymentsForOrder";

function App() {
  const { submitPayment, PaymentsForOrder } = usePaymentsForOrder();

  console.log({ submitPayment });

  return (
    <div
      style={{
        width: "70%",
        margin: "0 auto",
        marginTop: "20px",
        textAlign: "center",
      }}
    >
      <PaymentsForOrder />

      <div className="mt-4">
        <button
          onClick={() => submitPayment()}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Click me
        </button>
      </div>
    </div>
  );
}

export default App;
