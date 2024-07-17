import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { Link, NavLink } from 'react-router-dom';

export const MenuNavegacion = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon text-light"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarToggleExternalContent" data-bs-theme="dark">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to={'/'} href="#" className="nav-link text-light fw-bold">Inicio</Link>
              </li>
              <li className="nav-item dropdown bg-dark">
                <Link className="nav-link text-light dropdown-toggle" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false">
                  Contabilidad
                </Link>
                <ul className="dropdown-menu">
                  <li><NavLink to='/tipoCuenta' className="dropdown-item nav-link">Tipo de Cuenta</NavLink></li>
                  <li><NavLink to='/cuenta' className="dropdown-item nav-link">Cuenta</NavLink></li>
                  <li><NavLink to='/asiento' className="dropdown-item nav-link">Asiento Contable</NavLink></li>
                  <li><NavLink to='/balance' className="dropdown-item nav-link">Balance</NavLink></li>
                  <li><NavLink to='/estadoResultado' className="dropdown-item nav-link">Estado de resultado</NavLink></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a href="#" className="nav-link text-light dropdown-toggle" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false">
                  Activos
                </a>
                <ul className="dropdown-menu">
                  <li><NavLink className="dropdown-item">Tipo de Activo</NavLink></li>
                  <li><NavLink className="dropdown-item">Activo</NavLink></li>
                  <li><NavLink className="dropdown-item">lista3</NavLink></li>
                  <li><NavLink className="dropdown-item">lista</NavLink></li>
                  <li><NavLink className="dropdown-item">lista</NavLink></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a href="#" className="nav-link text-light dropdown-toggle" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false">
                  Nomina
                </a>
                <ul className="dropdown-menu">
                  <li><NavLink className="dropdown-item">ITEM 1</NavLink></li>
                  <li><NavLink className="dropdown-item">ITEM 2</NavLink></li>
                  <li><NavLink className="dropdown-item">ITEM 3</NavLink></li>
                  <li><NavLink className="dropdown-item">ITEM 3</NavLink></li>
                  <li><NavLink className="dropdown-item">ITEM 5</NavLink></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a href="#" className="nav-link text-light dropdown-toggle" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false">
                  Selección
                </a>
                <ul className="dropdown-menu">
                  <li><NavLink className="dropdown-item">ITEM 1</NavLink></li>
                  <li><NavLink className="dropdown-item">ITEM 2</NavLink></li>
                  <li><NavLink className="dropdown-item">ITEM 3</NavLink></li>
                  <li><NavLink className="dropdown-item">ITEM 3</NavLink></li>
                  <li><NavLink className="dropdown-item">ITEM 5</NavLink></li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="d-flex text-end text-light">
            <span>
              <a href="#" className=" text-light" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Cerrar Sesión"><PowerSettingsNewIcon  sx={{ color: 'white', fontSize: 35  }} ></PowerSettingsNewIcon></a>
            </span>
          </div>
        </div>
      </nav>
    </>
  )
}
