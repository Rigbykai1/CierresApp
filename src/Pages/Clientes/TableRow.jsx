import React from "react";
import { FaEdit } from "react-icons/fa";

const TableRow = (props) => {
  const { clientInfo, setSelectedClientInfo } = props;

  const handleModal = () => {
    setSelectedClientInfo(clientInfo);
  };
  return (
    <tr>
      <th>{clientInfo.id}</th>
      <td>{clientInfo.nombre}</td>
      <td>{clientInfo.telefono}</td>
      <td>{clientInfo.email}</td>
      <td>{clientInfo.credito}</td>
      <td>{clientInfo.premios}</td>
      <td>{clientInfo.balance}</td>
      <td>
        <button
          className="btn btn-outline"
          onClick={() => {
            document.getElementById("EditClientModal").showModal();
            handleModal();
          }}
        >
          <FaEdit />
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
