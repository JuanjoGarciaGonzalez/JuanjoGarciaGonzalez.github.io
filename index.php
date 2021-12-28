<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Porfolio - Juanjo García González</title>
    <!-- FONT AWESOME -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <!-- JQUERY -->
    <script src="assets/JS/jquery-3.6.0.min.js"></script>
    <!-- jQuery Modal -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.css" />
    <!-- ESTILOS PROPIOS -->
    <link rel="stylesheet" href="assets/CSS/estilos.css">
    <!-- FUNCIONES PROPIAS -->
    <script src="assets/JS/funciones.js" defer></script>
    <!-- FAVICON -->
    <link rel="apple-touch-icon" sizes="180x180" href="assets/Images/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="assets/Images/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="assets/Images/favicon-16x16.png">
    <link rel="manifest" href="assets/Images/site.webmanifest">
</head>
<body>
    <!-- MENÚ -->
    <div class="menu">

        <div class="logo">
            <!-- <img src="assets/Images/logo.png" alt="Logo"> -->
            <i class="fas fa-code"></i>
            <p class="nombre">Juanjo García</p>
            <p class="apellido">González</p>
        </div>

        <nav class="navegacion">
            <ul>
                <li><a href="#quien-soy" class="activa links">Quién soy</a></li>
                <li><a href="#habilidades" class="links">Habilidades</a></li>
                <li><a href="#proyectos" class="links">Proyectos</a></li>
                <li><a href="#contacto" class="links">Contacto</a></li>
                <li><a href="assets/JuanjoGarcíaGonzález-CV.pdf" download="JuanjoGarcíaGonzález-CV" target="_blank" class="descargar-cv">Descargar CV</a></li>
            </ul>
        </nav>

        <div class="rrss">
            <a href="https://www.linkedin.com/in/juanjo-kora-016a58229/" title="Mi Linkedin" target="_blank"><i class="fab fa-linkedin-in"></i></a>
            <a href="https://github.com/JuanjoGarciaGonzalez" title="Mi Github" target="_blank"><i class="fab fa-github"></i></a>
            <a href="https://www.twitter.com" title="Mi Twitter" target="_blank"><i class="fab fa-twitter"></i></a>
        </div>
    </div>

    <!-- CONTENIDO -->
    <main class="contenido">
        <section class="quien-soy" id="quien-soy">
            <!-- <div style="height: 150px; overflow: hidden;" class="svg-quien-soy-1"><svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;"><path d="M64.61,-155.41 C-35.83,44.91 394.74,210.70 586.62,52.80 L500.00,0.00 L0.00,0.00 Z" style="stroke: none; fill: #112236;"></path></svg></div> -->
            <div class="ubicacion">
                <i class="fas fa-globe-europe"></i>
                <span>Lasarte-Oria (Gipuzkoa)</span>
            </div>
            <h1>¡Hola!<br>Me llamo Juanjo<br> y soy Desarrollador Web</h1>
            <p>He realizado este porfolio desde 0 con el fin de mostrar mis proyectos y habilidades para conseguir llegar a las empresas. Siéntete libre de navegar en esta web y de contactárme si lo deseas.</p>
            <a href="#modalSobreMi" rel="modal:open" id="mas-sobre-mi"><i class="fas fa-info-circle"></i> Más sobre mí</a>
            <div id="modalSobreMi" class="modal">
                <div class="modalSobreMi">
                    <div class="imagen-modal">
                        <img src="assets/Images/perfil.png" alt="Foto de perfil">
                    </div>
                    <div class="texto-modal">
                        <p style="color: #436280; background-color: #dbe4ed;">Vivo en Lasarte-Oria (San Sebastián) y he estudiado un certificado de profesionalidad de Desarrollo de Aplicaciones Web. He aprendido nociones medias de Frontend y Backend. Además practico bastante por mi cuenta ya que me gusta lo que hago. Antes de esto yo estudié un grado medio de Administración de Sistemas dónde me adentré en el mundo de los ordenadores.</p>
    
                        <p style="color: #436280; background-color: #dbe4ed">Me gustaría trabajar de Desarrollador e ir aprendiendo poco a poco más en profundidad este mundo maravilloso y extenso.</p>
                    </div>
                </div>
              </div>
            <div style="height: 150px; overflow: hidden;" class="svg-quien-soy-2"><svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;"><path d="M0.00,49.98 C300.51,263.00 336.62,-42.91 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style="stroke: none; fill: #112236;"></path></svg></div>
        </section>

        <section class="habilidades" id="habilidades">
            <div style="height: 150px; overflow: hidden;" class="sbg-habilidades-1"><svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;"><path d="M0.00,49.98 C149.99,150.00 271.49,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" style="stroke: none; fill: #112236;"></path></svg></div>
            <h2>Habilidades</h2>
            <p>Conjunto de tecnologías con las que he trabajado/trabajo</p>
            <div class="grid-habilidades">
                <div class="imagen-grid" id="1">
                    <img src="assets/Images/html.png" alt="Logo HTML">
                    <div class="texto-habilidades">
                        <p>Primera tecnología que aprendí. Me siento bastante cómodo trabajando en HTML, aplicando semántica y generando la estructura de las páginas web.</p>
                    </div>
                </div>

                <div class="imagen-grid" id="2">
                    <img src="assets/Images/css.png" alt="Logo CSS">
                    <div class="texto-habilidades">
                        <p>Uso Flexbox y Grid para posicionar, estilos modernos y animaciones.</p>
                    </div>
                </div>

                <div class="imagen-grid" id="3">
                    <img src="assets/Images/js.png" alt="Logo JS">
                    <div class="texto-habilidades">
                        <p>Mi primer lenguaje de programación. Capturar elementos, eventos, funciones... Y, por supuesto, ajax.</p>
                    </div>
                </div>

                <div class="imagen-grid" id="4">
                    <img src="assets/Images/bootstrap.svg" alt="Logo Bootstrap">
                    <div class="texto-habilidades">
                        <p>Uso esporádico para layouts simples o componentes.</p>
                    </div>
                </div>


                <div class="imagen-grid" id="5">
                    <img src="assets/Images/jquery.png" alt="Logo JQuery">
                    <div class="texto-habilidades">
                        <p>He realizado varios proyectos con esta librería y me siento cómodo trabajando con ella o combinándola con JS.</p>
                    </div>
                </div>

                <div class="imagen-grid" id="6">
                    <img src="assets/Images/php.png" alt="Logo PHP">
                    <div class="texto-habilidades">
                        <p>Aprendí back-end con este lenguaje. Tratar datos de formularios, validación, cruds...</p>
                    </div>
                </div>

                <div class="imagen-grid" id="7">
                    <img src="assets/Images/laravel.png" alt="Logo Laravel">
                    <div class="texto-habilidades">
                        <p>He aprendido a hacer cruds con Laravel y a manejar el MVC con soltura.</p>
                    </div>
                </div>

                <div class="imagen-grid" id="8">
                    <img src="assets/Images/sql.png" alt="Logo SQL">
                    <div class="texto-habilidades">
                        <p>Comandos esenciales, relaciones, gestión de BBDD y uso en la terminal.</p>
                    </div>
                </div>

                <div class="imagen-grid">
                    <img src="assets/Images/git.png" alt="Logo Git">
                    <div class="texto-habilidades">
                        <p>Controlo las versiones de mis proyectos y me facilita bastante la gestión de mis archivos.</p>
                    </div>
                </div>

                <div class="imagen-grid">
                    <img src="assets/Images/github.png" alt="Logo GitHub">
                    <div class="texto-habilidades">
                        <p>Aquí subo todos los proyectos que tienen importancia para mí.</p>
                    </div>
                </div>

                <div class="imagen-grid">
                    <img src="assets/Images/xampp.png" alt="Logo Xampp">
                    <div class="texto-habilidades">
                        <p>Es la suite de servicios locales que más he usado.</p>
                    </div>
                </div>

                <div class="imagen-grid">
                    <img src="assets/Images/laragon.png" alt="Logo Laragon">
                    <div class="texto-habilidades">
                        <p>Esta suite la uso sobretodo para proyectos Laravel.</p>
                    </div>
                </div>
            </div>
            <div style="height: 150px; overflow: hidden;" class="svg-habilidades-2"><svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;"><path d="M0.00,49.98 C300.51,263.00 336.62,-42.91 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style="stroke: none; fill: #112236;"></path></svg></div>
        </section>

        <section class="proyectos" id="proyectos">
            <div style="height: 150px; overflow: hidden;" class="sbg-proyectos-1"><svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;"><path d="M0.00,49.98 C149.99,150.00 271.49,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" style="stroke: none; fill: #112236;"></path></svg></div>
            <h2>Proyectos</h2>
            <p>Proyectos que he realizado tanto en clase como por mi cuenta</p>
            <div class="proyecto">
                <div class="proyecto-menu">
                    <ul>
                        
                    </ul>
                </div>

                <div class="proyecto-contenido">
                    <div class="proyecto-contenido-imagen">
                        <div class="multimedia-proyecto">
                            <iframe src="" frameborder="0" class="video" sandbox></iframe>
                        </div>
                        
                        <div class="links-proyecto">
                            <a href="" class="github" target="_blank"><i class="fab fa-github"></i><span>Ir al repositorio de GitHub</span></a>
                            <a href="" class="website" target="_blank"><i class="fas fa-link"></i><span>Ir a la website</span></a>
                        </div>
                    </div>

                    <div class="proyecto-contenido-descripcion">
                        <div class="texto">
                            <h2 class="titulo-proyecto"></h2>

                            <div class="p">
                                <p class="puno"></p>
                                <p class="pdos"></p>
                            </div>
                        </div>
                        
                        <div class="tecnologias-proyecto">

                        </div>

                    </div>
                </div>
            </div>
            <div style="height: 150px; overflow: hidden;" class="svg-proyectos-2"><svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;"><path d="M0.00,49.98 C300.51,263.00 336.62,-42.91 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style="stroke: none; fill: #112236;"></path></svg></div>
        </section>

        <section class="contacto" id="contacto">
            <div style="height: 150px; overflow: hidden;" class="sbg-contacto-1"><svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;"><path d="M0.00,49.98 C149.99,150.00 271.49,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" style="stroke: none; fill: #112236;"></path></svg></div>
            <h2>Contacto</h2>
            <p>Hazme llegar un email con tu pregunta o sugerencia</p>
            <form action="assets/PHP/email.php" class="formulario" method="post">
                <input type="email" name="email" placeholder="Dirección de correo electrónico" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Dirección de correo electrónico'">
                <input type="text" name="asunto" placeholder="Asunto" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Asunto'">
                <textarea name="mensaje" cols="30" rows="10" placeholder="Mensaje" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Mensaje'"></textarea>
                <input type="submit" value="Enviar">
            </form>

            <!-- <div class="correcto">
                ¡Error enviando el email!
            </div> -->
        </section>

        <!-- FOOTER -->
        <footer class="footer">
            <p>Realizado por Juanjo García Gonzalez &copy; Copyright <span class="contenedor-ano"></span></p>
        </footer>

        <!-- FLECHA SUBIR -->
        <a href="#quien-soy" title="Ir arriba" class="flecha-subir" id="flecha-subir"><i class="fas fa-arrow-alt-circle-up"></i></a>
    </main>

</body>
</html>