document.querySelector('#btn_create').addEventListener('click', ()=>{

    var div_header = document.createElement('div');
    div_header.innerHTML = "<h1>DOM</h1> <img src='./img/logo.svg' width='150px' height='150px'> <div id='contenido'><a href='https://www.google.com/?hl=es' target='_blank' id='contenido_h' class='alert'>Inicio</a><a href='https://www.google.com/?hl=es' target='_blank' class='alert'>Sobre Nostros</a></div>";
    div_header.style = "background: black; display:flex; color: white; align-items: center;justify-content: space-between; height: 8vh; padding: 5px;";
    document.getElementById('contenido_header').appendChild(div_header);

    var div_main = document.createElement('div');
    div_main.innerHTML = "<h1>Main</h1> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iure temporibus pariatur adipisci sunt. Odit aliquid ipsa, beatae consequatur deleniti sint doloremque in officia officiis ea laborum earum totam blanditiis.</p><h3>Pagina creada por</h3><h2>Roberto Carlos Noguera Cordoba</h2><img src='./img/logo.svg' width='1000px' height='500px'>";
    div_main.style = "background: #699FFA; text-align: center; height: 72vh; padding: 5px;";
    document.getElementById('contenido_main').appendChild(div_main);

    var div_footer = document.createElement('div');
    div_footer.innerHTML = "<h4 id='div_h1'>Contactanos</h4> <div id='contenido'><p id='contenido_h'>(+57) 320 769 9910</p><p>Calle 64 norte Bella Vista manzana D</p></div>";
    div_footer.style = "background: black; display:flex; color: white; align-items: center; justify-content: end; padding: 5px; height: 10vh;";
    document.getElementById('contenido_footer').appendChild(div_footer);

});

