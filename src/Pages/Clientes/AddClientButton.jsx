import { IoMdPersonAdd } from "react-icons/io";
import AddClientForm from "./AddClientForm";


const AddClientButton = () => {
  const addClientModalID = "addClient"
  return (
    <>
      <button
        className="btn btn-outline"
        onClick={() => document.getElementById(addClientModalID).showModal()}
      >
        <IoMdPersonAdd />
        Cliente
      </button>
      <AddClientForm modalID={addClientModalID} />
    </>
  );
};

export default AddClientButton;
