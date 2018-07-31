document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  //var instances = M.Sidenav.init(elems, options);
});

// Initialize collapsible (uncomment the lines below if you use the dropdown variation)
// var collapsibleElem = document.querySelector('.collapsible');
// var collapsibleInstance = M.Collapsible.init(collapsibleElem, options);

// Or with jQuery

$(document).ready(function(){
  $('.sidenav').sidenav();
});

//Eliminar el documento de Wall e ingresaer en este mismo documento la logica que existia en el wall.js













// Eliminar de aqui en adelante
///////////////////

///////////////////

// // iniciando comentarios y funciones 
// const compartir = document.getElementById("guardar");// boton para que se publique el comentario 
// const prublicacion = document.getElementById("printComments");
// let mensaje = document.getElementById("comentario").value;
// var db = firebase.firestore();

// compartir.addEventListener("click", publicando);

//  const publicando  =()=>{
// 	 console.log(publicando)
//  	if(mensaje !== ""){
// 	// agrega a la base de datos los comentarios que se vayan creando
// 	db.collection("users").add({
// 		mensajes: mensaje
// 	})
// 	.then(function(docRef){
// 		console.log("Doctument written with ID: ", docRef.id);	
// 	})
// 	.cath(function(error){
// 		console.error("Error adding document: ", error);
// 	});
// 	} else{
// 		alert("Ingresa tu comentario");
// 	}
// }


// //para poder leer y pintar los datos 
// var paint = document.getElementById("mensaje").value;
// //LLAMA DB (INICIACION DE FIRESTORE) EN NUESTRO CASO LA COLECCIÓN ES USUARIO
// //se susutituye .get para que este mostrando los datos en tiempo real
// db.collection("users").onSnapshot((querySnapshot) => {
//     getcomentario.innerHTML="";
//     //FOR EACHE SE REPIETIRA EN CADA DOCUMENTO DE USER
//     querySnapshot.forEach((doc) => {
//         //SE PINTARA EL ID Y LO QUE CONTIENE
//         console.log(`${doc.id} => ${doc.data().first}`);
//         getcomentario.innerHTML += `
//         <section>
//         <div>${doc.data().first}</div>
//         <!--Por cada boton que se crea contiene los datos-->
//         <button class="btn btn-danger" onclick="eliminar('${doc.id}')">Elimar</button>
//         <button class="btn btn-warning" onclick="editar('${doc.id}', '${doc.data().first}')">Editar</button>
//         </section>
//         `
//     });
// });


// //borrar datos
// const eliminar = (id) => {
//     db.collection("users").doc(id).delete().then(function() {
//         console.log("Document successfully deleted!");
//     }).catch(function(error) {
//         console.error("Error removing document: ", error);
//     });
// }


// //editar datos

// const editar = (id,comentario) =>{

//     document.getElementById("mensaje").value = comentario ;
//     //el boton con este id"guardar" se modificara su texto html a editar
//     let boton = document.getElementById("guardar");
//     boton.innerHTML = "Editar";
//     //Al presionar el boton q dice editar c correra la sig funcion
//     boton.onclick() = function(){ 
//         var washingtonRef = db.collection("users").doc(id);
//         // Set the "capital" field of the city 'DC'
//     var comentario = document.getElementById("mensaje").value;
//     return washingtonRef.update({
//         first: comentario,
       
//     })
//     .then(function() {
//         console.log("Document successfully updated!");
//         boton.innerHTML = "Guardar";
//     })
//     .catch(function(error) {
//         // The document probably doesn't exist.
//         console.error("Error updating document: ", error);
//     });
//     }
         
// }