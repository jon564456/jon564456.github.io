var videos = [

    {
        titulo: "Video 1",
        descripcion: "Video 1",
        url: "https://www.youtube.com/embed/ugYTDF25_Ww?si=szSdR2QpbA6_Usuv"
    },

    {
        titulo: "Video 2",
        descripcion: "Video 2",
        url: "https://www.youtube.com/embed/WNp6kzKTCCU?si=RtTNfDCgGUC-LhEC"
    }
    ,
    {
        titulo: "Video 3",
        descripcion: "Video 3",
        url: "https://www.youtube.com/embed/8Q-OGSG7xzM?si=8kAg2nKKWK1l_1zd"
    }

];

const lista = document.getElementById('contenedor-video');
const buscador = document.getElementById('buscador');
var texto_resultado = document.getElementById('texto-resultado')
displayVideos(videos);

function buscarVideos(palabra) {
    var filtrado = videos.filter(video => video.titulo.toLowerCase().includes(palabra.toLowerCase()));
    displayVideos(filtrado);
}

buscador.addEventListener('input', () => {
    buscarVideos(buscador.value);
})

function displayVideos(listaVideo) {
    lista.innerHTML = '';
    listaVideo.forEach(element => {

        var fila = document.createElement('div');
        fila.setAttribute('class', 'row');

        var video = document.createElement('div');
        video.setAttribute('class', 'div-video');

        var iframe = document.createElement('iframe');
        iframe.setAttribute('width', 300);
        iframe.setAttribute('height', 200);
        iframe.setAttribute('src', element.url)
        iframe.setAttribute('title', element.titulo);
        iframe.setAttribute('frameborder', 0);
        iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
        iframe.setAttribute('allowedfulscreen', '')
        video.appendChild(iframe);
        fila.appendChild(video);

        var texto = document.createElement('div');
        texto.setAttribute('class', 'div-texto');


        var h4 = document.createElement('h4');
        h4.innerHTML = element.titulo;
        texto.appendChild(h4);

        var descripcion = document.createElement('div');
        descripcion.setAttribute('class', 'div-descripcion')

        var parrafo = document.createElement('p');
        parrafo.innerHTML = element.descripcion;
        descripcion.appendChild(parrafo);
        texto.appendChild(descripcion);
        fila.appendChild(texto);
        var icono = document.createElement('div');
        icono.setAttribute('class', 'div-icono');

        var span = document.createElement('span');
        span.setAttribute('class', 'fa-regular fa-heart')
        icono.appendChild(span);
        fila.appendChild(icono)

        lista.appendChild(fila);
    });
}

