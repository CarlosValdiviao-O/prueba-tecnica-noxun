import { Link } from "react-router-dom";

const Botones = (props) => {
    const { index, ruta, max } = props;

    return (
        <div className="botones">
            {
                (index > 1) ? 
                    <Link to={`${ruta}/${+index-1}`} className='izq'>{'<'}</Link>
                    :
                    <div className="oculto">{'<'}</div>
            }
            <p>{index}</p>
            {        
                (max > index) ?
                    <Link to={`${ruta}/${+index+1}`} className='der'>{'>'}</Link>
                    :
                    <div className="oculto">{'>'}</div>
            }
        </div>
    )
}

export default Botones;