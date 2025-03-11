import React from 'react';
import './TableroAnuncios.css';

const TableroAnuncios = () => {
  return (
    <div className="tablero">
      <h1>Tablero de Anuncios</h1>
      <h2>Últimos Anuncios</h2>
      <div className="anuncio">
        <h3>Nuevo Evento de Tecnología</h3>
        <p>No te pierdas el evento el próximo sábado en el centro de convenciones.</p>
      </div>
      <div className="anuncio">
        <h3>Reunión de Trabajo</h3>
        <p>Se realizará una reunión importante el lunes a las 10:00 AM.</p>
      </div>
    </div>
  );
}

export default TableroAnuncios;
