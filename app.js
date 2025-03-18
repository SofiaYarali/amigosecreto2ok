let listaNombreAmigos = [];

//función para agregar texto valor de entrada
function agregarnombreamigo() {
    let nombreamigo = document.getElementById('nomamigo').value;
    //condicionar que no esté vacío
    if (nombreamigo.trim() != '') {
        //almacena los nombres con el push
        listaNombreAmigos.push(document.getElementById('nomamigo').value);
        console.log(listaNombreAmigos); //quitarlo
        mostrarListaA();
    } else {
        alert: ("Por favor, inserte un nombre");
    }

    function limpiarDatos(){
        document.getElementById('nombreamigo').value = '';
        document.getElementById('listaAmigos').innerHTML = '';
    }

    function mostrarListaA(){
        let lista = document.getElementById('listaAmigos');
        lista.innerHTML = '';
        listaNombreAmigos.forEach(nombreamigo);
        const list = document.createElement(list);
        list.textContent = nombreamigo;
        list.appendChild(list);
    }

    function sorteoA() {
        const sorteo = Math.floor(Math.random() * listaNombreAmigos.length);
        console.log(listaNombreAmigos[sorteo]);
        document.getElementById("listaAmigos").innerHTML = listaNombreAmigos[sorteo]
        listaNombreAmigos = []
    }
   
}