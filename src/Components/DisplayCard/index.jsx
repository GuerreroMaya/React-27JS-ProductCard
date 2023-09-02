const DisplayCard = ({ nombre, descripcion, precio, imagen }) => {
  return (
    <div className="col-md-6">
      <div className="card">
        <img src={imagen} className="card-img-top" alt="..." />
        <div className="card-body">
          <h3 className="card-title">{nombre}</h3>
          <p className="card-text">{descripcion}</p>
          <p className="card-text">$ {precio} M.N.</p>
        </div>
      </div>
    </div>
  );
};

export default DisplayCard;
