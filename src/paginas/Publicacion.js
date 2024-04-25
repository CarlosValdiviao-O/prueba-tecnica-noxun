import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Comentario from "../componentes/Comentario";

const Publicacion = (props) => {

    const { conseguirData } = props;
    const { id } = useParams();

    const [ publicacion, setPublicacion ] = useState(null);
    const [ comentarios, setComentarios ] = useState(null)

    useEffect(() => {
        const auxPublicacion = async () => {
            let data = await conseguirData(`posts/${id}`);
            setPublicacion(data);
            console.log(data);
        } 
        const auxComentarios = async () => {
            let data = await conseguirData(`posts/${id}/comments`);
            setComentarios((state) => [...data]);
            console.log(data);
        }
        auxPublicacion();
        auxComentarios(); 
    }, [id])

    if (comentarios && publicacion)
    return (
        <div className="publicacion">
            <div className="info">
                <h1 className="titulo">{publicacion.title}</h1>
                <Link to={`/usuario/${publicacion.userId}`}>{'Usuario' + publicacion.userId}</Link>
                <p className="cuerpo">{publicacion.body}</p>
            </div>
            <div className="comentarios">
                <h3>Comentarios</h3>
                {
                    comentarios.map((comentario, index) => {
                        return(
                            <Comentario comentario={comentario} key={index}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Publicacion;