//imprimir el titulo del documento
console.log("El titulo de esta pagina es: ", document.title);

//guardar el contenido de la id "titulo principal" en una variable.
let titulo = document.querySelector("#titulo_principal");
console.log(titulo);

//extrer el contenido de la etiqueta
console.log(titulo.textContent);

//editar el texto
titulo.textContent = "Editado desde JavaScript";
titulo.style.color = " rgb(82, 82, 122)";
titulo.style.backgroundColor = "aliceblue";
titulo.style.fontSiza = "1.5rem";

//agregar texto sin borrar lo anterior
titulo.textContent = titulo.textContent + " Texto nuevo";
titulo.textContent += " Otro texto nuevo";

//titulo.innerHTML = "Hola";

let parrafo = document.querySelector("#parrafo_principal");
parrafo.innerHTML += " Nuevo texto <i> Pero este texto esta en cursivas </i>";
//parrafo.innerHTML += "Nuevo";

let caja1 = document.querySelector("#caja1");
caja1.innerHTML += "<p> Poducto muestra: $1200 </p>";

//caja1.classList.add("aprobado");

/*
let presupuesto = prompt("Introduce tu presupuesto");
if(presupuesto >= 1200){
    caja1.classList.add("aprobado");
} else {
    caja1.classList.add("no_aprobado");
}
    */

const bodega = [
    { nombre: "Producto 1", precio: 100, stock: 3 },
    { nombre: "Producto 2", precio: 200, stock: 0 },
    { nombre: "Producto 3", precio: 350, stock: 6 },
    { nombre: "Producto 4", precio: 1000, stock: 2 },
    { nombre: "Producto 5", precio: 450, stock: 1 }
];

let caja = document.querySelector(".caja_vacia");

bodega.forEach(item => {
    let clase_color = "";
    if (item.stock > 0) {
        clase_color = "aprobado";
    } else {
        clase_color = "no_aprobado";
    }


    caja.innerHTML += `
    <div class = "caja_producto ${clase_color}">
    <H2> Producto: ${item.nombre}</H2>
    <p> Precio: $${item.precio}</p>
    <p> Stock: ${item.stock}</p>

   </div>
  `;
});