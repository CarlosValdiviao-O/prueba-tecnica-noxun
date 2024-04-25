import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Publicaciones from "../componentes/Publicaciones";

const Usuario = (props) => {

    const { conseguirData } = props;
    const { id } = useParams();

    const [ publicaciones, setPublicaciones ] = useState(null)

    useEffect(() => {
        const aux = async () => {
            let data = await conseguirData(`users/${id}/posts`);
            setPublicaciones((state) => [...data]);
            console.log(data);
        }
        aux();
    }, [id])

    if (publicaciones)
    return (
        <div className="usuario">
            <h2>{`Publicaciones de Usuario${id}:`}</h2>
            <Publicaciones publicaciones={publicaciones}/>
        </div>
    )
}

export default Usuario;