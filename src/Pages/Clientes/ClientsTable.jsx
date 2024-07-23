import { React, useState } from "react";
import EditClientForm from "./EditClientForm";
import TableRow from "./TableRow";

const ClientsTable = () => {
  const [selectedClientInfo, setSelectedClientInfo] = useState("");
  const clientsInfo = {
    cliente1: {
      id: "1",
      nombre: "Juan Pérez",
      telefono: "1234567890",
      email: "juan.perez@example.com",
      credito: "5000",
      premios: "100",
      balance: "2500",
    },
    cliente2: {
      id: "2",
      nombre: "María Gómez",
      telefono: "0987654321",
      email: "maria.gomez@example.com",
      credito: "3000",
      premios: "50",
      balance: "1000",
    },
    cliente3: {
      id: "3",
      nombre: "Pedro Rodríguez",
      telefono: "5555555555",
      email: "pedro.rodriguez@example.com",
      credito: "7000",
      premios: "150",
      balance: "4000",
    },
    cliente4: {
      id: "4",
      nombre: "Ana Sánchez",
      telefono: "1111111111",
      email: "ana.sanchez@example.com",
      credito: "4000",
      premios: "75",
      balance: "1500",
    },
    cliente5: {
      id: "5",
      nombre: "Luis Fernández",
      telefono: "2222222222",
      email: "luis.fernandez@example.com",
      credito: "6000",
      premios: "120",
      balance: "3000",
    },
    cliente6: {
      id: "6",
      nombre: "Sofía Ramírez",
      telefono: "3333333333",
      email: "sofia.ramirez@example.com",
      credito: "2500",
      premios: "30",
      balance: "800",
    },
    cliente7: {
      id: "7",
      nombre: "Carlos Jiménez",
      telefono: "4444444444",
      email: "carlos.jimenez@example.com",
      credito: "5500",
      premios: "90",
      balance: "2200",
    },
  };

  return (
    <>
      <div className="overflow-x-auto bg-neutral">
        <table className="table table-xs table-pin-rows table-pin-cols">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Telefono</th>
              <th>Email</th>
              <th>Credito</th>
              <th>Premios</th>
              <th>Balance</th>
              <th>Editar</th>
            </tr>
          </thead>
          <tbody>
            {Object.values(clientsInfo).map((client, index) => (
              <TableRow
                clientInfo={client}
                key={index}
                setSelectedClientInfo={setSelectedClientInfo}
              />
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Telefono</th>
              <th>Email</th>
              <th>Credito</th>
              <th>Premios</th>
              <th>Balance</th>
              <th>Editar</th>
            </tr>
          </tfoot>
        </table>
        <EditClientForm clientInfo={selectedClientInfo} />
      </div>
    </>
  );
};

export default ClientsTable;
