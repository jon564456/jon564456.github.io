const selectpais = document.getElementById("select-pais");
const selectEstado = document.getElementById("select-estado");
const selectMunicipio = document.getElementById("select-municipio");
const selectLocalidad = document.getElementById("select-localidad");
const btnEnviar = document.getElementById("btn-enviar");
const paises = [
    {
        nombre: "Mexico",
        estados: [
            {
                nombre: "Hidalgo",
                municipio: [
                    {
                        nombre: "Tula de Allende",
                        localidades: [
                            {
                                nombre: "San Marcos",
                            },
                            {
                                nombre: "Zaragoza",
                            },
                            {
                                nombre: "Damu",
                            },
                        ],
                    },
                    {
                        nombre: "Mixquiahuala",
                        localidades: [
                            {
                                nombre: "Calvario",
                            },
                            {
                                nombre: "Centro",
                            },
                            {
                                nombre: "Centro de abastos",
                            },
                        ],
                    },
                    {
                        nombre: "Tezontepec",
                        localidades: [
                            {
                                nombre: "Huitel",
                            },
                            {
                                nombre: "San Isidro",
                            },
                            {
                                nombre: "La palma",
                            },
                        ],
                    },
                ],
            },
            {
                nombre: "Estado de México",
                municipio: [
                    {
                        nombre: "Toluca",
                        localidades: [
                            {
                                nombre: "San Lorenzo",
                            },
                            {
                                nombre: "Santa Ana",
                            },
                            {
                                nombre: "San Mateo",
                            },
                        ],
                    },
                    {
                        nombre: "Ecatepec",
                        localidades: [
                            {
                                nombre: "San Cristóbal",
                            },
                            {
                                nombre: "Santa Clara",
                            },
                            {
                                nombre: "San Francisco",
                            },
                        ],
                    },
                    {
                        nombre: "Naucalpan",
                        localidades: [
                            {
                                nombre: "San Agustín",
                            },
                            {
                                nombre: "Santa Rosa",
                            },
                            {
                                nombre: "San Gabriel",
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        nombre: "Estados Unidos",
        estados: [
            {
                nombre: "California",
                municipio: [
                    {
                        nombre: "Los Angeles",
                        localidades: [
                            {
                                nombre: "Downtown",
                            },
                            {
                                nombre: "Hollywood",
                            },
                            {
                                nombre: "Santa Monica",
                            },
                        ],
                    },
                    {
                        nombre: "San Francisco",
                        localidades: [
                            {
                                nombre: "Financial District",
                            },
                            {
                                nombre: "Chinatown",
                            },
                            {
                                nombre: "Fisherman's Wharf",
                            },
                        ],
                    },
                    {
                        nombre: "San Diego",
                        localidades: [
                            {
                                nombre: "Gaslamp Quarter",
                            },
                            {
                                nombre: "Balboa Park",
                            },
                            {
                                nombre: "La Jolla",
                            },
                        ],
                    },
                ],
            },
            {
                nombre: "Texas",
                municipio: [
                    {
                        nombre: "Houston",
                        localidades: [
                            {
                                nombre: "Downtown",
                            },
                            {
                                nombre: "Montrose",
                            },
                            {
                                nombre: "The Woodlands",
                            },
                        ],
                    },
                    {
                        nombre: "Austin",
                        localidades: [
                            {
                                nombre: "Downtown",
                            },
                            {
                                nombre: "South Congress",
                            },
                            {
                                nombre: "Zilker Park",
                            },
                        ],
                    },
                    {
                        nombre: "Dallas",
                        localidades: [
                            {
                                nombre: "Downtown",
                            },
                            {
                                nombre: "Deep Ellum",
                            },
                            {
                                nombre: "Uptown",
                            },
                        ],
                    },
                ],
            },
        ],
    },
];

var estados = Array();
var municipios = Array();
var localidades = Array();

function cargarPaises() {
    selectpais.innerHTML = '<option>Seleccione una opción</option>';
    paises.forEach((pais) => {
        var option = document.createElement("option");
        option.value = pais.nombre;
        option.innerText = pais.nombre;
        selectpais.appendChild(option);
    });
}

function cargarEstados() {
    selectEstado.innerHTML = '<option>Seleccione una opción</option>';
    var opcion = selectpais.value;
    paises.forEach(pais => {
        if (pais.nombre === opcion) {
            estados = pais.estados;
            this.estados.forEach((estado) => {
                var option = document.createElement("option");
                option.value = estado.nombre;
                option.innerText = estado.nombre;
                selectEstado.appendChild(option);
            });
        }
    });
}


function cargarMunicipio() {
    selectMunicipio.innerHTML = '<option>Seleccione una opción</option>';
    var opcion = selectEstado.value;
    estados.forEach(estado => {
        if (estado.nombre === opcion) {
            municipios = estado.municipio
            municipios.forEach(municipio => {
                var option = document.createElement("option");
                option.value = municipio.nombre;
                option.innerText = municipio.nombre;
                selectMunicipio.appendChild(option);
            });
        }
    });
}

function cargarLocalidad() {
    selectLocalidad.innerHTML = '<option>Seleccione una opción</option>';
    var opcion = selectMunicipio.value;
    municipios.forEach(municipio => {
        if (municipio.nombre === opcion) {
            municipio.localidades.forEach(localidad => {
                var option = document.createElement("option");
                option.value = localidad.nombre
                option.innerText = localidad.nombre
                selectLocalidad.appendChild(option);
            });
        }
    })

}

function mostrar() {
    const mensaje = "País: " + selectpais.value +
        "\n Estado: " + selectEstado.value +
        "\n Municipio: " + selectMunicipio.value +
        "\n Localidad: " + selectLocalidad.value;
    var parrafo = document.createElement('p');
    parrafo.innerHTML = mensaje;
    var formulario = document.getElementById('contenedor-formulario');
    formulario.replaceWith(parrafo);
}
selectEstado.innerHTML = '<option>Seleccione una opción</option>';
selectMunicipio.innerHTML = '<option>Seleccione una opción</option>';
selectLocalidad.innerHTML = '<option>Seleccione una opción</option>';

//Cargamos los paises
cargarPaises();

selectpais.addEventListener("change", () => {
    cargarEstados();
});

selectEstado.addEventListener("change", () => {
    cargarMunicipio();
});

selectMunicipio.addEventListener("change", () => {
    cargarLocalidad();
});

btnEnviar.addEventListener("click", () => {
    mostrar();
})