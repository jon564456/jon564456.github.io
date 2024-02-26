import React, { useState } from 'react';

const videosData = [
  {
    titulo: "Video 1",
    descripcion: "Video 1",
    url: "https://www.youtube.com/embed/ugYTDF25_Ww?si=szSdR2QpbA6_Usuv"
  },
  {
    titulo: "Video 2",
    descripcion: "Video 2",
    url: "https://www.youtube.com/embed/WNp6kzKTCCU?si=RtTNfDCgGUC-LhEC"
  },
  {
    titulo: "Video 3",
    descripcion: "Video 3",
    url: "https://www.youtube.com/embed/8Q-OGSG7xzM?si=8kAg2nKKWK1l_1zd"
  }
];

const VideoList = () => {
  const [videos, setVideos] = useState(videosData);
  const [searchTerm, setSearchTerm] = useState('');

  const searchVideos = (term) => {
    const filteredVideos = videosData.filter(video =>
      video.titulo.toLowerCase().includes(term.toLowerCase())
    );
    setVideos(filteredVideos);
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    searchVideos(e.target.value);
  };

  return (
    <div>
      <div class='div-buscador'>
        <span class="fa-solid fa-magnifying-glass"></span>
        <input
          class='buscador'
          type="text"
          placeholder="Teclee su busqueda"
          value={searchTerm}
          onChange={handleInputChange}
        />
      </div>
      <div id="contenedor-video">
        {videos.map(video => {
          return (
            <div class="row"><div class="div-video">
              <iframe width="300" height="200" src={video.url} title={video.titulo} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowedfulscreen="">
              </iframe>
            </div>
              <div class="div-texto">
                <h4>{video.titulo}</h4>
                <div class="div-descripcion">
                  <p>{video.descripcion}</p>
                </div>
              </div>
              <div class="div-icono">
                <span class="fa-regular fa-heart" aria-hidden="true"></span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VideoList;
