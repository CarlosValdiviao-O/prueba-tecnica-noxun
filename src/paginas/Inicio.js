import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Botones from "../componentes/Botones";
import Publicaciones from "../componentes/Publicaciones";
const Inicio = (props) => {

    const  { publicaciones } = props;
    const { index } = useParams();
    const pagina = +index || 1;
    const [ filtrados, setFiltrados ] = useState(null);

    useEffect(() => {
        if (publicaciones) {
            let aux = [];
            for (let i = (pagina-1)*10; i < pagina*10; i++) {
                aux.push(publicaciones[i]);
            }
            setFiltrados((state) => [...aux])
        }
    }, [publicaciones, index])
    
    if (filtrados)
    return (
        <div className="inicio">
           <Publicaciones publicaciones={filtrados}/>
           <Botones index={pagina} ruta={'/publicaciones'} max={10}/>
        </div>
    )
}

export default Inicio;