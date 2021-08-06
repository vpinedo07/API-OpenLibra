let ejecutar = document.getElementById('ejecutar');
let spinner = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Cargando...';
let categorias = document.getElementById('categorias');

ejecutar.addEventListener('click', function () {
    //alert('Hola mundo!!!');
    let url = 'https://www.etnassoft.com/api/v1/get/?category=' + categorias.value + '&criteria=most_viewed';

    const api = new XMLHttpRequest;

    ejecutar.innerHTML = spinner;
    resultado.innerHTML = '';

    api.open('GET', url, true);
    api.setRequestHeader
    api.send();

    api.onreadystatechange = function () {
        //Verificar si el servidor está disponible con el recurso de la API
        if (this.status === 200 && this.readyState === 4) {
            let datos = JSON.parse(this.response);
            console.log(datos);

            ejecutar.innerHTML = "Procesar";

            let resultado = document.getElementById('resultado');
            //resultado.innerHTML = datos[0].title + " " + datos[0].author;            

            for (let item of datos) {
                resultado.innerHTML += `
                <tr>
                    <td>${item.ID}</td>
                    <td>${item.title}</td>
                    <td>${item.author}</td>
                    <td>${item.language}</td>
                    <td>${item.content_short}</td>
                    <td>
                        <img src='${item.cover}' height='100'>
                    </td>
                </tr>`;
            }
        }
    }

});

document.body.onload = function () {
    //alert();
    let url = 'https://www.etnassoft.com/api/v1/get/?get_categories=all';

    const api = new XMLHttpRequest;

    categorias.innerHTML = '';

    api.open('GET', url, true);
    api.setRequestHeader
    api.send();

    api.onreadystatechange = function () {
        //Verificar si el servidor está disponible con el recurso de la API
        if (this.status === 200 && this.readyState === 4) {
            let datos = JSON.parse(this.response);
            console.log(datos);

            for (let item of datos) {
                categorias.innerHTML += `<option value="${item.nicename}">${item.name}</option>`;
            }
        }
    }
}

