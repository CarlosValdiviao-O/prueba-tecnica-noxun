

const Comentario = (props) => {

    const { comentario } = props;
    
    return (
        <div className="comentario">
            <h3 className="author">{comentario.name}</h3>
            <p className="correo">{comentario.email}</p>
            <p className="cuerpo">{comentario.body}</p>
        </div>
    )
}

export default Comentario;