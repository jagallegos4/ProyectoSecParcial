import { Link } from 'react-router-dom';
export const UpdateCuentaPage = () => {
  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4">
                    <h3 className="text-center text-light my-3">Actualizar Cuenta</h3>
                    <form action="" method="post">
                        <div className="mb-4">
                            <input type="text" name="codigoCuenta" id="codigoCuenta" className="form-control-sm w-100" placeholder="Código" required/>
                        </div>
                        <div className="mb-4">
                            <input type="text" name="cuenta" id="cuenta" className="form-control-sm w-100" placeholder="Nombre de la cuenta" required/>
                        </div>
                        <div className="mb-4">
                            <select name="idTipoCuenta" id="idTipoCuenta" className="form-select-sm fw-bold text-center w-100" required>
                            <option value="" disabled selected hidden className="form-select-sm text-center">--Tipo de cuenta--</option>
                            </select>
                        </div>
                        <input type="submit" className="btn btn-primary fw-bold me-3" name="btnActualizar" id="btnActualizar" value="Actualizar"/>
                        <Link to={'/cuenta'} className='btn btn-danger'>Cancelar</Link>
                    </form>
                </div>
                <div className="col-4"></div>
            </div>
        </div>
    </>
  )
}
