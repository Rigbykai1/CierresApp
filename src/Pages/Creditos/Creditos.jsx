import { IoIosAddCircleOutline } from "react-icons/io";
import AddCreditForm from "./AddCreditForm";
import SimpleTransactionCard from "../../Components/Cards/SimpleTransactionCard";
const Creditos = () => {
  const transactions = {
    transaction1: {
      cliente: "Humberto",
      sorteo: "Tica noche",
      monto: 200,
    },
    transaction2: {
      cliente: "Bismarck",
      sorteo: "Nica 9",
      monto: 2000,
    },
  };
  return (
    <>
      <div className="flex gap-3 pb-3">
        <button
          className="btn btn-outline btn-primary-content"
          onClick={() => document.getElementById("EditClient").showModal()}
        >
          <IoIosAddCircleOutline className="size-8" />
          Crédito
        </button>
        <AddCreditForm />
      </div>
      <div className="flex flex-wrap gap-3 justify-evenly md:justify-start">
        {Object.values(transactions).map((transaction, index) => (
          <SimpleTransactionCard
            key={index}
            title={transaction.cliente}
            subtitle={transaction.sorteo}
            amount={transaction.monto}
          />
        ))}
      </div>
    </>
  );
};

export default Creditos;
