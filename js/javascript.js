document.querySelector("#btn").addEventListener("click",cargarDatos());

function cargarDatos(){
    
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET','datos.json',true);

    xhttp.send();

    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){

            let canciones = JSON.parse(this.responseText);

            let cancion = document.querySelector("#song");
            cancion.innerHTML = "";

            var top3 = canciones.sort(function(a, b) {
                return a.reproducciones < b.reproducciones ? 1 : -1;
                })
                .slice(0, 3);


            for (let item of top3){


                cancion.innerHTML +=`
                <tr>
               <div class="col py-2 m-0">${item.nombre}</div></th>
                <div class="col py-2 m-0"><audio src="canciones/${item.ruta}"controls height="50%"></audio></div></th>
                </tr>
                `
            }
        }
    }
}
