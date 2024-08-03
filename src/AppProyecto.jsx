import { Navigate, Route, Routes } from "react-router-dom"
import {MenuNavegacion} from "./components/MenuNavegacion"
import {HomePage} from "./pages/HomePage"
import { TipoCuentaPage } from "./pages/TipoCuentaPage"
import { CuentaPage } from "./pages/CuentaPage"
import { AsientoPage } from "./pages/AsientoPage"
import { BalancePage } from "./pages/BalancePage"
import { EstadoResultadoPage } from "./pages/EstadoResultadoPage"
import { UpdateTipoCuPage } from "./pages/UpdateTipoCuPage"
import { UpdateCuentaPage } from "./pages/UpdateCuentaPage"
import { TipoActivoPage } from "./pages/TipoActivoPage"
import { ActivoPage } from "./pages/ActivoPage"
import { DepreciacionPage } from "./pages/DepreciacionPage"
import { RepActivo1Page } from "./pages/RepActivo1Page"
import { RepActivo2Page } from "./pages/RepActivo2Page"

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
        <Route path="/updateTipoCuenta" element={<UpdateTipoCuPage></UpdateTipoCuPage>}></Route>
        <Route path="/updateCuenta" element={<UpdateCuentaPage></UpdateCuentaPage>}></Route>
        <Route path="/tipoActivo" element={<TipoActivoPage></TipoActivoPage>}></Route>
        <Route path="/activo" element={<ActivoPage></ActivoPage>}></Route>
        <Route path="/depreciacion" element={<DepreciacionPage></DepreciacionPage>}></Route>
        <Route path="/reporteActivos1" element={<RepActivo1Page></RepActivo1Page>}></Route>
        <Route path="/reporteActivos2" element={<RepActivo2Page></RepActivo2Page>}></Route>
        <Route path="/*" element={<Navigate to='/'/>}></Route>
      </Routes>
    </>
  )
}
