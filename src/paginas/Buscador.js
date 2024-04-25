import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Botones from "../componentes/Botones";
import Publicaciones from "../componentes/Publicaciones";
const Buscador = (props) => {

    const  { publicaciones } = props;
    const { index, busqueda } = useParams();
    const [ filtrados, setFiltrados ] = useState(null);

    useEffect(() => {
        if (publicaciones) {
            let aux = [];
            let maxInd = index*10;
            if (maxInd > publicaciones.length)
                maxInd = publicaciones.length
            for (let i = (index-1)*10; i < maxInd; i++) {
                aux.push(publicaciones[i]);
            }
            setFiltrados((state) => [...aux])
        }
    }, [publicaciones, index])
    
    if (filtrados)
    return (
        <div className="buscador">
            <h2>{`Resultados de busqueda de ${busqueda}:`}</h2>
            <Publicaciones publicaciones={filtrados}/>
            <Botones index={index} ruta={`/buscar/${busqueda}`} max={Math.floor((publicaciones.length/10))+1}/>
        </div>
    )
}

export default Buscador;