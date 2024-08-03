import { Link } from 'react-router-dom';
export const UpdateTipoCuPage = () => {
  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4">
                    <h3 className="text-center text-light my-3">Actualizar el tipo de cuenta</h3>
                    <form action="" method="post">
                        <div className="mb-4">
                            <input type="text" name="codigoTC" id="codigoTC" className="form-control-sm w-100 rounded-pill" placeholder="Código" required />
                        </div>
                        <div className="mb-4">
                            <input type="text" name="tipoCuenta" id="tipoCuenta" className="form-control-sm w-100 rounded-pill" placeholder="Tipo de cuenta" required />
                        </div>
                        <input type="submit" className="btn btn-primary fw-bold me-3 rounded-pill" name="btnActualizar" id="btnActualizar" value="Actualizar" />
                        <Link to={'/tipoCuenta'} className='btn btn-danger rounded-pill'>Cancelar</Link>
                    </form>
                </div>
                <div className="col-4"></div>
            </div>
        </div>
    </>
  )
}
