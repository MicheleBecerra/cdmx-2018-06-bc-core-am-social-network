firebase.initializeApp({
  apiKey: "AIzaSyB90dz8cu4Yk3lfkAcryi4B8PWM8lIlP8A",
  authDomain: "ux-community.firebaseapp.com",
  projectId: "ux-community",
});

var db = firebase.firestore();

function compartir(){

	console.log("entra el boton");
	//let mensajes = document.getElementById("comentario").value;
	
	db.collection("users").add({// agregando id
    	first: mensajes
    
	})// si se agrega correctamente 
	.then(function(docRef) {
	    console.log("Document written with ID: ", docRef.id);
	})// si se agrega erroneo
	.catch(function(error) {
	    console.error("Error adding document: ", error);
	});
}

//pintando los datos
 
 let pintar = document.getElementById("printComments").value;
 db.collection("users").onSnapshot((querySnapshot) =>{
 	printComments.innerHTML="";
 	querySnapshot.forEach((doc)=>{
 		console.log(`${doc.id} => ${doc.data().first}`);
 		printComments.innerHTML+=`
        <section>
        <div>${doc.data().first}</div>
        <!--Por cada boton que se crea contiene los datos-->
        <button class="btn btn-danger" onclick="eliminar('${doc.id}')">Elimar</button>
        <button class="btn btn-warning" onclick="editar('${doc.id}', '${doc.data().first}')">Editar</button>
        </section>
        `
 	});
 });

 const eliminar = (id) => {
    db.collection("users").doc(id).delete().then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
}

const editar = (id,comentario) =>{

    document.getElementById("comentario").value = comentario ;
    //el boton con este id"guardar" se modificara su texto html a editar
    let boton = document.getElementById("botonCompartir");
    boton.innerHTML = "Editar";
    //Al presionar el boton q dice editar c correra la sig funcion
    boton.onclick() = function(){ 
        var washingtonRef = db.collection("users").doc(id);
        // Set the "capital" field of the city 'DC'
    var comentario = document.getElementById("comentario").value;
    return washingtonRef.update({
        first: comentario,
       
    })
    .then(function() {
        console.log("Document successfully updated!");
        boton.innerHTML = "Guardar";
    })
    .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });
    }
         
}

