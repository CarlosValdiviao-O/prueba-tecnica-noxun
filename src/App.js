import { Route, Routes, HashRouter, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import './componentes/App.css';
import Inicio from "./paginas/Inicio";
import Publicacion from "./paginas/Publicacion";
import Usuario from "./paginas/Usuario";
import Nav from "./componentes/Nav";
import Buscador from "./paginas/Buscador";

function App() {

  const [ publicaciones, setPublicaciones ] = useState(null);
  const [ filtrados , setFiltrados ] = useState(null);

  useEffect(() => {
    const aux = async () => {
      let data = await conseguirData('posts');
      setPublicaciones(data);
    } 
    aux();        
  }, []);

  const conseguirData = async (ruta) => {
    let res = await fetch(`https://jsonplaceholder.typicode.com/${ruta}`);
    return res.json();
  }

  const filtrarBusqueda = (valor) => {
    let aux = [];
    for (let i = 0; i < 100; i++) {
      let { title, body } = publicaciones[i];
      if (title.includes(valor) || body.includes(valor))
        aux.push(publicaciones[i]);
    }
    setFiltrados(aux);
  }

  return (
    <HashRouter basename="/">
      <div>
        <Nav filtrarBusqueda={filtrarBusqueda}/>
        <div className="contenedor">
          <Routes>
          <Route path="/" element={<Inicio publicaciones={publicaciones} />} />
            <Route path="/publicaciones/:index" element={<Inicio publicaciones={publicaciones} />} />
            <Route path="/publicacion/:id" element={<Publicacion conseguirData={conseguirData}/>} />
            <Route path="/usuario/:id" element={<Usuario conseguirData={conseguirData} />} />
            <Route path="/buscar/:busqueda/:index" element={<Buscador publicaciones={filtrados}/>}/>
          </Routes>  
        </div>
      </div>
    </HashRouter>
  );
}

export default App;

