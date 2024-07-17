import { Navigate, Route, Routes } from "react-router-dom"
import {MenuNavegacion} from "./components/MenuNavegacion"
import {HomePage} from "./pages/HomePage"
import { TipoCuentaPage } from "./pages/TipoCuentaPage"
import { CuentaPage } from "./pages/CuentaPage"
import { AsientoPage } from "./pages/AsientoPage"
import { BalancePage } from "./pages/BalancePage"
import { EstadoResultadoPage } from "./pages/EstadoResultadoPage"

export const AppProyecto = () => {
  return (
    <>
      <MenuNavegacion></MenuNavegacion>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/tipoCuenta" element={<TipoCuentaPage></TipoCuentaPage>}></Route>
        <Route path="/cuenta" element={<CuentaPage></CuentaPage>}></Route>
        <Route path="/asiento" element={<AsientoPage></AsientoPage>}></Route>
        <Route path="/balance" element={<BalancePage></BalancePage>}></Route>
        <Route path="/estadoResultado" element={<EstadoResultadoPage></EstadoResultadoPage>}></Route>
        <Route path="/*" element={<Navigate to='/'/>}></Route>
      </Routes>
    </>
  );
};
