import { FaSearch } from "react-icons/fa";
import { FaColonSign } from "react-icons/fa6";

const SimpleTransactionCard = (props) => {
  const { title, subtitle, amount } = props;

  return (
    <div className="card card-side bg-primary-content/90 shadow-xl px-4 text-primary">
      <div className="card-body p-4">
        <h2 className="card-title text-base-content">{title}</h2>
        <h4 className="text-sm font-light">{subtitle}</h4>
        <p className="flex items-center">
          <FaColonSign />
          {amount}
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline btn-primary">
            <FaSearch className="size-6 px-1" />
            Transacción
          </button>
        </div>
      </div>
    </div>
  );
};

export default SimpleTransactionCard;
