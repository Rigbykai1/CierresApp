import { Routes, Route } from "react-router-dom";
import Inicio from "./Inicio/Inicio"
import Clientes from "./Clientes/Clientes";
import Creditos from "./Creditos/Creditos"
import Venta from "./Venta/Venta"
import Reportes from "./Reportes/Reportes"
import Caja from "./Caja/Caja"
import Sinpe from "./Sinpe/Sinpe"

const AppRouter = () => {
    return (
        <Routes>
            <Route index="/" element={<Inicio />} />
            <Route path="/Inicio" element={<Inicio />} />
            <Route path="/Clientes" element={<Clientes />} />
            <Route path="/Creditos" element={<Creditos />} />
            <Route path="/Venta" element={<Venta />} />
            <Route path="/Reportes" element={<Reportes />} />
            <Route path="/Caja" element={<Caja />} />
            <Route path="/Sinpe" element={<Sinpe />} />
        </Routes>
    );
};

export default AppRouter;