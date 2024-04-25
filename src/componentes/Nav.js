import { Link } from "react-router-dom";
import Buscador from "./Buscador";

const Nav = (props) => {

    const { filtrarBusqueda } = props;
    return (
        <nav>
            <Link to={'/'}>Inicio</Link>
            <Buscador filtrarBusqueda={filtrarBusqueda}/>
        </nav>
    )
}

export default Nav;