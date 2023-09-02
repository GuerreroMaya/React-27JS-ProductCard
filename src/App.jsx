import './App.css'
import { useState } from 'react'
import DisplayCard from './Components/DisplayCard';

function App() {
  const [cardInfo, setCardInfo] = useState({
    nombre: '',
    descripcion: '',
    precio: '',
    imagen: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCardInfo({
      ...cardInfo,
      [name]: value
    });
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Información del Producto</h5>
              <input
                type="text"
                name="nombre"
                className="form-control mb-3"
                placeholder="Nombre"
                onChange={handleInputChange}
              />
              <textarea
                name="descripcion"
                className="form-control mb-3"
                placeholder="Descripción"
                onChange={handleInputChange}
              ></textarea>
              <input
                type="number"
                name="precio"
                className="form-control mb-3"
                placeholder="Precio"
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="imagen"
                className="form-control mb-3"
                placeholder="URL de la imagen"
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        <DisplayCard 
          nombre={cardInfo.nombre}
          descripcion={cardInfo.descripcion}
          precio={cardInfo.precio}
          imagen={cardInfo.imagen}
        />
      </div>
    </div>
  );
}

export default App;