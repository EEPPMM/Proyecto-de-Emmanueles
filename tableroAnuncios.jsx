import React, { useState } from 'react';
import './TableroAnuncios.css';

const TableroAnuncios = () => {
  const [anuncios, setAnuncios] = useState([
    {
      title: 'Nuevo Evento de Tecnología',
      description: 'No te pierdas el evento el próximo sábado en el centro de convenciones.',
    },
    {
      title: 'Reunión de Trabajo',
      description: 'Se realizará una reunión importante el lunes a las 10:00 AM.',
    },
  ]);

  const [nuevoTitulo, setNuevoTitulo] = useState('');
  const [nuevaDescripcion, setNuevaDescripcion] = useState('');

  const [comentarios, setComentarios] = useState([]);
  const [nuevoComentario, setNuevoComentario] = useState('');

  const agregarAnuncio = () => {
    if (nuevoTitulo && nuevaDescripcion) {
      const nuevoAnuncio = {
        title: nuevoTitulo,
        description: nuevaDescripcion,
      };
      setAnuncios([...anuncios, nuevoAnuncio]);
      setNuevoTitulo(''); // Limpiar el campo de título
      setNuevaDescripcion(''); // Limpiar el campo de descripción
    } else {
      alert('Por favor, completa ambos campos.'); // Mensaje de advertencia
    }
  };

  const agregarComentario = () => {
    if (nuevoComentario) {
      setComentarios([...comentarios, nuevoComentario]);
      setNuevoComentario(''); // Limpiar el campo de comentario
    } else {
      alert('Por favor, escribe un comentario.'); // Mensaje de advertencia
    }
  };

  return (
    <div>
      <div className="tablero">
        <h1>Tablero de Anuncios</h1>
        <h2>Últimos Anuncios</h2>
        {anuncios.map((anuncio, index) => (
          <div className="anuncio" key={index}>
            <h3>{anuncio.title}</h3>
            <p>{anuncio.description}</p>
          </div>
        ))}

        <div className="formulario">
          <input
            type="text"
            placeholder="Título del anuncio"
            value={nuevoTitulo}
            onChange={(e) => setNuevoTitulo(e.target.value)}
          />
          <textarea
            placeholder="Descripción del anuncio"
            value={nuevaDescripcion}
            onChange={(e) => setNuevaDescripcion(e.target.value)}
          />
          <button className='btnAgregarAnuncio' onClick={agregarAnuncio}>
            Agregar Anuncio
          </button>
        </div>
      </div>

      <div className="comentarios">
        <h2>Comentarios</h2>
        <div className="formulario">
          <input
            type="text"
            placeholder="Escribe tu comentario"
            value={nuevoComentario}
            onChange={(e) => setNuevoComentario(e.target.value)}
          />
        </div>
        <button className='btnAgregarComment' onClick={agregarComentario}>
          Agregar Comentario
        </button>
        <div className="lista-comentarios">
          {comentarios.map((comentario, index) => (
            <div className="comentario" key={index}>
              {comentario}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TableroAnuncios;