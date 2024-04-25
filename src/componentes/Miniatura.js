import { Link } from "react-router-dom";

const Miniatura = (props) => {
    const { publicacion } = props;

    return (
        <div className="miniatura">
            <Link to={`/publicacion/${publicacion.id}`}>{publicacion.title}</Link>
            <p>{publicacion.body}</p>
        </div>
    )
}

export default Miniatura;