const links = document.querySelectorAll(".links")
const contenedorAno = document.querySelector(".contenedor-ano")
const elementosMenuProyectos = document.querySelectorAll(".elementos-menu-proyectos")

// AÑADIR CLASE ACTIVA CLICKANDO MENÚ
links.forEach(link => {
    link.addEventListener("click", añadirActiva)
});


function añadirActiva() {
    links.forEach(link => {
        link.classList.remove("activa")
    });

    this.classList.add("activa")
}

// AÑADIR CLASE ACTIVA HACIENDO SCROLL MENÚ
$(window).scroll(function(){
    if($(document).scrollTop() < ($("#habilidades").offset().top - 300)) { //Si el scrollTop de la ventana es menor o igual que el top de habilidades le pone la clase activa a quien-soy
        links.forEach(link => {
            link.classList.remove("activa")
        });
        links[0].classList.add("activa")
    }

    if($(document).scrollTop() > ($("#habilidades").offset().top - 300)) {
        links.forEach(link => {
            link.classList.remove("activa")
        });
        links[1].classList.add("activa")
    }

    if($(document).scrollTop() >= ($("#proyectos").offset().top - 300)) {
        links.forEach(link => {
            link.classList.remove("activa")
        });
        links[2].classList.add("activa")
    }

    if($(document).scrollTop() >= ($("#contacto").offset().top - 300)) {
        links.forEach(link => {
            link.classList.remove("activa")
        });
        links[3].classList.add("activa")
    }
});

// ANIMACIÓN SUAVE SCROLL ENLACES
$(document).ready(function () {
    $('a').click(function(){
    $('html, body').stop().animate({scrollTop: $($(this).attr('href')).offset().top}, 500);});
});

// BOTON SUBIR ARRIBA ANIMACIÓN APARECER Y DESAPARECER
$(window).scroll(function(){
    if($(this).scrollTop() > 500){
        $('.flecha-subir').fadeIn('fast');
    } else if ($(this).scrollTop() > 100) {
        $('.flecha-subir').fadeOut('fast');
    }
});

//EFECTO FADE DEL MODAL SABER MÁS SOBRE MÍ
$("#fade").modal({
    fadeDuration: 300,
    fadeDelay: 1.50
});

// CAMBIAR AÑO AUTOMÁTICAMENTE
var fecha = new Date();
var anio = fecha.getFullYear();
contenedorAno.innerHTML = anio

//CAMBIAR ACTIVA EN EL MENÚ PROYECTOS
elementosMenuProyectos.forEach(element => {
    element.addEventListener("click", cambiarActiva)
});

function cambiarActiva() {
    elementosMenuProyectos.forEach(element => {
        element.classList.remove("activa")
        this.classList.add("activa")
    });
}

//AJAX PROYECTOS
const lista_menu = $(".proyecto-menu ul")
const video = $(".video")
const github = $(".github")
const website = $(".website")
const titulo = $(".titulo-proyecto")
const puno = $(".puno")
const pdos = $(".pdos")
const tecnologias_proyecto = $(".tecnologias-proyecto")
var objeto_json

$.ajax({
    url: "assets/JS/proyectos.json",
    dataType: "json",
    success: primeraPeticion
})

function primeraPeticion(json) {
    objeto_json = json;
    for (let i = 0; i < json.proyectos.length; i++) {
        if(i == 0) {
            lista_menu.html('<li class="elementos-menu-proyectos activa" id="' + i + '">' + json.proyectos[i].nombre +  '</li>')
            video.attr("src", json.proyectos[i].video)
            github.attr("href", json.proyectos[i].github)
            website.attr("href", json.proyectos[i].website)
            titulo.html(json.proyectos[i].nombre)
            puno.html(json.proyectos[i].descripcion.uno)
            pdos.html(json.proyectos[i].descripcion.dos)
            iconos = json.proyectos[i].iconos
            for (let i = 0; i < iconos.length; i++)  {
                tecnologias_proyecto.html(tecnologias_proyecto.html() + iconos[i])
            }
        }else {
            lista_menu.html(lista_menu.html()+'<li class="elementos-menu-proyectos" id="' + i + '">' + json.proyectos[i].nombre +  '</li>')
        }
        
    }

    const items_menu = $(".proyecto-menu ul li")
    items_menu.click(segundaPeticion)
}

function segundaPeticion() {
    let id_elemento = $(this).attr('id');
    lista_menu.html("")
    for (let i = 0; i < objeto_json.proyectos.length; i++) {
        if(i == id_elemento) {
            lista_menu.html(lista_menu.html()+'<li class="elementos-menu-proyectos activa" id="' + i + '">' + objeto_json.proyectos[i].nombre +  '</li>')
            video.attr("src", objeto_json.proyectos[i].video)
            github.attr("href", objeto_json.proyectos[i].github)
            website.attr("href", objeto_json.proyectos[i].website)
            titulo.html(objeto_json.proyectos[i].nombre)
            puno.html(objeto_json.proyectos[i].descripcion.uno)
            pdos.html(objeto_json.proyectos[i].descripcion.dos)
            tecnologias_proyecto.html("")
            iconos = objeto_json.proyectos[i].iconos
            for (let i = 0; i < iconos.length; i++)  {
                tecnologias_proyecto.html(tecnologias_proyecto.html() + iconos[i])
            }
        }else {
            lista_menu.html(lista_menu.html()+'<li class="elementos-menu-proyectos" id="' + i + '">' + objeto_json.proyectos[i].nombre +  '</li>')
        }
        
    }

    const items_menu = $(".proyecto-menu ul li")
    items_menu.click(segundaPeticion)
}

// VALIDACIÓN FORMULARIO
$.validator.addMethod("formatoEmail", function (value, element) {
    var pattern = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
    return this.optional(element) || pattern.test(value);
});

$(".formulario").validate({
    onkeyup: false,
    rules: {
        email: {
            required: true,
            formatoEmail: true,
            email: true,
        },
        asunto: {
            required: true,
            maxlength: 50,
        },
        mensaje: {
            required: true,
        }
    },
    messages: {
        email: {
            required: "El email es requerido",
            formatoEmail: "Formato de email no válido",
            email: "Formato de email no válido",
        },
        asunto: {
            required: "El asunto es requerido",
            maxlength: "El asunto no puede exceder los 32 caracteres",
        },
        mensaje: {
            required: "El mensaje es requerido",
        }
    },

    errorElement : 'span'
});

// AUTOPLAY DEL VIDEO LAA PRIMERA VEZ
// video.play()

