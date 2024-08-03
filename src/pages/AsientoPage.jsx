export const AsientoPage = () => {
  return (
    <>
      <div className="container mb-5">
        <h3 className="text-center mb-2">Asientos contables</h3>
        <form className="row gy-2 gx-3 align-items-center">
          
          <div className="col-sm-2 mx-2 mb-3">
            <div className="input-group">
              <div className="input-group-text">N°</div>
              <input
                type="text"
                className="form-control text-end"
                id="nAsiento"
                name="nAsiento"
                value="0001"
                disabled
              />
            </div>
          </div>
          <div className="col-sm-2 mx-2 mb-3">
            <div className="input-group">
              <input
                type="date"
                className="form-control"
                id="fecha"
                name="fecha"
              />
            </div>
          </div>
          <div className="col-sm-3 mx-2 mb-3">
            <select className="form-select" id="codCuenta" name="codCuenta">
              <option selected >------<br /> Código Cuenta <br/>------</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="col-sm-4 mx-2 mb-3">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="detalle"
                name="detalle"
                placeholder="Detalle"
              />
            </div>
          </div>
          <div className="col-auto mx-2 mb-3">
            <div className="input-group">
              <div className="input-group-text">DEBE</div>
              <input
                type="text"
                className="form-control text-end"
                id="Debe"
                name="Debe"
                value="0"
              />
            </div>
          </div>
          <div className="col-auto mx-2 mb-3">
            <div className="input-group">
              <div className="input-group-text">HABER</div>
              <input
                type="text"
                className="form-control text-end"
                id="haber"
                name="haber"
                value="0"
              />
            </div>
          </div>
          <div className="col-auto mx-2 mb-3">
            <button type="submit" className="btn btn-primary rounded-pill">
              Generar Asiento
            </button>
          </div>
        </form>
      </div>
      <div className="container">
        <table className="table table-sm table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">N°</th>
              <th scope="col">Fecha</th>
              <th scope="col">Código Cuenta</th>
              <th scope="col">Cuenta</th>
              <th scope="col">Detalle</th>
              <th scope="col">DEBE</th>
              <th scope="col">HABER</th>
            </tr>
          </thead>
          <tbody >
            <tr>
              <th>1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
