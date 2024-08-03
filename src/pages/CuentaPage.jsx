import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import { NavLink, Link } from 'react-router-dom';
import { TCuentasSelect } from '../components/TCuentasSelect';

export const CuentaPage = () => {
  return (
    <>
      <div className="container">
        <h2 className="text-center my-3">Cuentas Contables</h2>
        <div className="row">
          <div className="col-md-5">
            <h4 className="mb-4">Nueva Cuenta</h4>
            <form action="" method="post">
              <div className="mb-4">
                <input type="text" name="codigoCuenta" id="codigoCuenta" className="form-control-sm w-50" placeholder="Código" required/>
              </div>
              <div className="mb-4">
                <input type="text" name="cuenta" id="cuenta" className="form-control-sm w-50" placeholder="Nombre" required/>
              </div>
              <div className="mb-4 w-50">
                <TCuentasSelect/>
                {/* <select name="idTipoCuenta" id="idTipoCuenta" className="form-select-sm text-center fw-bold w-50" required>
                <option value="" disabled selected hidden className="form-select-sm text-center">--Tipo de cuenta--</option>
                </select> */}
              </div>
              <input type="submit" className="btn btn-primary fw-bold rounded-pill" name="btnGuardar" id="btnGuardar" value="Guardar"/>
            </form>
          </div>
          
          <div className="col-md-7 d-md-block d-none">
            <h4 className="mb-4 ">Lista del tipo de cuentas</h4>
            <form className="d-flex mb-4" role="search">
              <input className="form-control-sm me-3 w-50" type="search" placeholder="Buscar" aria-label="Search"/>
              <button className="btn btn-success rounded-pill " type="submit">Buscar</button>
            </form>
            <table className="table table-dark table-striped">
            <thead>
              <tr>
                <th scope="col">Código</th>
                <th scope="col">Cuenta</th>
                <th scope="col">Tipo de Cuenta</th>
                <th scope="col">Editar</th>
                <th scope="col">Eliminar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td></td>
                <td></td>
                <td><NavLink className='btn btn-warning text-light' title="Editar" to='/updateCuenta'><BorderColorIcon sx={{  fontSize: 20  }}></BorderColorIcon></NavLink></td>
                <td><Link className='btn btn-danger' title="Eliminar" to='/tipoCuenta'><DeleteIcon sx={{  fontSize: 20  }}></DeleteIcon></Link></td>
              </tr>
            </tbody>
            </table>

          </div>
  
        </div>
      </div>
    </>
  )
}
