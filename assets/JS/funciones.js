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
const lista_menu_select = $("#proyecto-menu-item")
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
            if($(window).width() <= 425) {
                lista_menu_select.html(lista_menu_select.html()+'<option selected id="' + i + '">' + objeto_json.proyectos[i].nombre +  '</option>')  
            }else {
                lista_menu.html(lista_menu.html()+'<li class="elementos-menu-proyectos activa" id="' + i + '">' + objeto_json.proyectos[i].nombre +  '</li>')
            }
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
            if($(window).width() <= 425) {
                lista_menu_select.html(lista_menu_select.html()+'<option id="' + i + '">' + objeto_json.proyectos[i].nombre +  '</option>')
            }else {
                lista_menu.html(lista_menu.html()+'<li class="elementos-menu-proyectos" id="' + i + '">' + json.proyectos[i].nombre +  '</li>')
            }
        }
        
    }

    if($(window).width() <= 425) {
        lista_menu_select.change(segundaPeticion)
    }else {
        const items_menu = $(".proyecto-menu ul li")
        items_menu.click(segundaPeticion)
    }
    
}

function segundaPeticion() {
    let id_elemento
    if($(window).width() <= 425) {
        id_elemento = $('#proyecto-menu-item option:selected').attr('id')
        lista_menu_select.html('')
    }
    else {
        id_elemento = $(this).attr('id')
        lista_menu.html("")
    }

    for (let i = 0; i < objeto_json.proyectos.length; i++) {
        if(i == id_elemento) {
            if($(window).width() <= 425) {
                lista_menu_select.html(lista_menu_select.html()+'<option selected id="' + i + '">' + objeto_json.proyectos[i].nombre +  '</option>')
            }else {
                lista_menu.html(lista_menu.html()+'<li class="elementos-menu-proyectos activa" id="' + i + '">' + objeto_json.proyectos[i].nombre +  '</li>')
            }

            
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
            if($(window).width() <= 425) {
                lista_menu_select.html(lista_menu_select.html()+'<option id="' + i + '">' + objeto_json.proyectos[i].nombre +  '</option>')
            }
            else {
                lista_menu.html(lista_menu.html()+'<li class="elementos-menu-proyectos" id="' + i + '">' + objeto_json.proyectos[i].nombre +  '</li>')
            }
        }
        
    }

    if($(window).width() <= 425) {
        lista_menu_select.change(segundaPeticion)
    }else {
        const items_menu = $(".proyecto-menu ul li")
        items_menu.click(segundaPeticion)
    }
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
            required: "<i class='fas fa-exclamation-circle'></i> El email es requerido",
            formatoEmail: "<i class='fas fa-exclamation-circle'></i> Formato de email no válido",
            email: "<i class='fas fa-exclamation-circle'></i> Formato de email no válido",
        },
        asunto: {
            required: "<i class='fas fa-exclamation-circle'></i> El asunto es requerido",
            maxlength: "<i class='fas fa-exclamation-circle'></i> El asunto no puede exceder los 32 caracteres",
        },
        mensaje: {
            required: "<i class='fas fa-exclamation-circle'></i> El mensaje es requerido",
        }
    },

    errorElement : 'span'
});

//DESPLEGAR MENÚ EN RESPONSIVE
const hamburguesa = $(".hamburguesa")
const menu = $(".menu")
const cerrar_menu = $(".cerrar_menu")
const contenido = $(".contenido")
hamburguesa.click(desplegarMenu)
cerrar_menu.click(ocultarMenu)
if($(window).width() <= "768") {
    contenido.click(ocultarMenu)
    links.forEach(link => {
        link.addEventListener("click", ocultarMenu)
    });
}

function desplegarMenu() {
    if($(window).width() <= 768) {
        menu.css("left", "0")
        hamburguesa.css("display", "none")
        cerrar_menu.css("display", "flex")
        menu.css("transition", "all .3s ease")
    }
}
function ocultarMenu() {
    if($(window).width() <= 768) {
        menu.css("left", "-30%")
        hamburguesa.css("display", "flex")
        cerrar_menu.css("display", "none")
        menu.css("transition", "all .3s ease")
    }
    if($(window).width() <= 425) {
        menu.css("left", "-100%")
        hamburguesa.css("display", "flex")
        cerrar_menu.css("display", "none")
        menu.css("transition", "all .3s ease")
    }

}


// COLOREAR LABEL EN EL FOCUS DE LOS INPUTS
const inputs = $(".input")
const labels = $(".label")

inputs.focus(colorearLabel)
inputs.blur(descolorearLabel)

function colorearLabel() {
    let input = $(this)
    let id = input.parent().attr("id")
    $("#" + id + " label").css("background-color", "#112236")
    $("#" + id + " label").css("color", "white")
    $("#" + id + " label").css("transition", "all .1s ease")
}

function descolorearLabel() {
    let input = $(this)
    let id = input.parent().attr("id")
    $("#" + id + " label").css("background-color", "white")
    $("#" + id + " label").css("color", "#112236")
    $("#" + id + " label").css("transition", "all .1s ease")
}

// ANIMACION ELEMENTO BAJAR
const letras_bajar = $(".bajar")

function animacionBajar() {
    letras_bajar.animate({'bottom': '22%'}, {
        duration: 500,
        complete: function() {
            letras_bajar.animate({bottom: '20%'}, {
                duration: 500, 
                complete: animacionBajar})
        }
    })
};

animacionBajar()

// MENU DESPLEGABLE PROYECTOS


