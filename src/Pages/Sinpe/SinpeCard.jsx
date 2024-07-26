import { FaSearch } from "react-icons/fa";
import { FaColonSign } from "react-icons/fa6";

const SimpleTransactionCard = (props) => {
  const { transaction, setTransactionInfo, modalID } = props;

  const handleModal = () => {
    setTransactionInfo(transaction);
  }

  return (
    <div className="card card-side bg-neutral/80 shadow-xl px-4 text-primary">
      <div className="card-body p-4">
        <h2 className="card-title text-base-content">{transaction.cliente}</h2>
        <h4 className="text-sm font-light">{transaction.tipo}</h4>
        <p className="flex items-center">
          <FaColonSign />
          {transaction.monto}
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline btn-primary" onClick={() => {
            document.getElementById(modalID).showModal()
            handleModal()
          }}>
            <FaSearch className="size-6 px-1" />
            Transacción
          </button>
        </div>
      </div>
    </div>
  );
};

export default SimpleTransactionCard;
