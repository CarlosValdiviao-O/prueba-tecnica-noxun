import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Buscador = (props) => {

    const { filtrarBusqueda } = props;

    const [ valor, setValor ] = useState();

    const navegar = useNavigate();

    const buscar = () => {
        filtrarBusqueda(valor);
        navegar(`/buscar/${valor}/1`)
    }

    return (
        <input onKeyDown={(e) => (e.keyCode === 13) ? buscar() : ''} onChange={(e) => setValor(e.target.value)} 
                placeholder='Buscar...'></input>
    )
}

export default Buscador;