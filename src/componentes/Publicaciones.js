import Miniatura from "./Miniatura";

const Publicaciones = (props) => {
     const { publicaciones } = props;

     return (
        <div className="publicaciones">
            {publicaciones.map((publicacion, index) => {
                return (
                    <Miniatura publicacion={publicacion} key={index}/>                
                )
            })}
        </div>
     )
}

export default Publicaciones;