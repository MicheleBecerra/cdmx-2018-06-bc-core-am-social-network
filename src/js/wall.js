// Con esto se inicializa Nube de firestore a través de Firebase*/
console.log('LIGANDO correctamente el doc wall.js al doc. profile.HTML');

const taskInput = document.getElementById('new-task');
const addButton = document.getElementsByTagName('Button')[0];
const inCompletedTaskList = document.getElementById('incomplete-tasks');
const completedTaskList = document.getElementById('completed-tasks');

let refTask;

const init = () => {
  addButton.addEventListener('click', sendTaskFirebase);
    refTask = firebase.database().ref().child('tasks');
  getTaskOfFirebase();
}

const createNewTaskElement = (taskString) => {
  // console.log(taskString);
  //Creando los elementos
  const listItem = document.createElement('li');
  const checkbox = document.createElement('input'); //checkbox
  const label = document.createElement('label');
  const editInput = document.createElement('input'); // Texto a editar
  const editButton = document.createElement('button');
  const deleteButton = document.createElement('button');

  checkbox.type = 'checkbox';
  editInput.type = 'text';

  editButton.innerHTML = 'Edit &#9998;';
  editButton.className = 'edit';
  deleteButton.innerHTML = 'Delete &#x1F5D1;';
  deleteButton.className = 'delete';

  label.innerHTML = taskString;

  listItem.appendChild(checkbox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);

  return listItem;
}


const addTask = (key, taskCollection) => {
  // console.log('key: ', key , ' taskCollection: ', taskCollection);
  // console.log(taskCollection.contenidoTask);
  const listItem = createNewTaskElement(taskCollection.contenidoTask);
  listItem.setAttribute('data-keytask', key);
  // console.log(listItem);
  if (taskCollection.status == 'completed') {
    listItem.querySelector('input[type=checkbox]').setAttribute('checked',true);
    completedTaskList.appendChild(listItem);
  } else {
    // listItem.querySelector('input[type=checkbox]').setAttribute('checked',false);
    inCompletedTaskList.appendChild(listItem);
  }

  bindTaskEvents(listItem, taskCompleted)
}

const editTask = () => {
  const listItem = event.target.parentNode;
  const keyListItem = event.target.parentNode.dataset.keytask;
  const editInput = listItem.querySelector('input[type=text]')
  const label  = listItem.querySelector('label');
  const editButton = event.target;
  const containsClass = listItem.classList.contains('editMode');

  const refTaskToEdit = refTask.child(keyListItem);
  refTaskToEdit.once('value', (snapshot) => {
    const data = snapshot.val();

    if (containsClass) {
      console.log(containsClass, listItem);
      refTaskToEdit.update({
        contenidoTask: editInput.value
      })
      editButton.innerHTML = 'Edit ';
      listItem.classList.remove('editMode');
      editInput.value = '';
    } else {
      console.log(containsClass, listItem)
      editButton.innerHTML = 'Save ';
      editInput.value = data.contenidoTask;
      listItem.classList.add('editMode')
    }
  })
}

const deleteTask = () => {
  const keyListItem = event.target.parentNode.dataset.keytask;
  const refTaskToDelete = refTask.child(keyListItem);
  refTaskToDelete.remove();
}

const getTaskOfFirebase = () => {
  refTask.on('value', (snapshot) => {
    inCompletedTaskList.innerHTML = '';
    completedTaskList.innerHTML = '';
    const data = snapshot.val()
    for (var key in data) {
      addTask(key, data[key])
    }
  })
}

const sendTaskFirebase = () => {
  refTask.push({
    contenidoTask : taskInput.value,
    status : 'incomplete'
  });
  taskInput.value = '';
}

window.onload = init




  
  
  /*let db = firebase.firestore();

  const boton = document.getElementById('botonCompartir');
  
  boton.addEventListener('click', event => {
    // console.log('holi');
    let text = document.getElementById('myTextarea');
    // console.log(text);
  
    let texto = text.value;
  
    if (texto === '') {
      alert('Por favor ingresa un mensaje.');
    } else {
      //   construir nuevo objeto de fecha y convertirlo a un string UTC para pintarlo de manera estandard
      const yearDateTime = new Date().toUTCString();
      // console.log(yearDateTime);
  
  
      // CRUD
      // Aquí se agrega un objeto a la coleccion "comments" del firestore
      // el "add" agrega un id único en automatico
      db.collection('comments').add({
        dateTime: yearDateTime,
        comment: texto
      })
        // luego, 
        .then(function(docRef) {
          console.log('Document written with ID: ', docRef.id);
          // con esto se reinician los input despues con el "click", o sea, una vez que se haya guardado el dato, va a generar un string vacio
          text.value = '';
        })
        .catch(function(error) {
          console.error('Error adding document: ', error);
        });
    }
  });
  
  
  let container = document.getElementById('container');
  // Aquí lee los documentos de la coleccion "comments" y el querySnapshot se repitirá por cada comment por el forEach
  // onSnapshot=agente de escucha--> actualización en tiempo real
  db.collection('comments').onSnapshot((querySnapshot) => {
    container.innerHTML = '';
    querySnapshot.forEach((doc) => {
      // console.log(`${doc.id} => ${doc.data().comment}`);
  
      // 
  
      container.innerHTML += `<div class="card">
                                    <div class="contenidoC">
                                      <p>${doc.data().dateTime}</p>
                                      <p>${doc.data().comment}</p>
                                      <button class="btn like"><i class="fas fa-gem"></i></button>
                                      <button class="btn compartir"><i class="fas fa-share"></i></button>
                                      <button class="btn editar" onclick="edit('${doc.data().comment}')"><i class="fas fa-edit"></i></button>
                                      <button class="btn guardar"><i class="fas fa-save"></i></button>
                                      <button class="btn borrar" onclick="eliminate('${doc.id}')"><i class="fas fa-trash-alt"></i></button>
                                    </div>
                                  </div>`;
    });
  });
  // Para borrar documentos de la coleccion en tiempo real:
  
  function eliminate(id) {
    db.collection('comments').doc(id).delete().then(function() {
      console.log('Document successfully deleted!');
    }).catch(function(error) {
      console.error('Error removing document: ', error);
    });
  }
  
  // Para editar documentos de la coleccion en tiempo real:
  function edit(texto) {
    document.getElementById('comentario').value = texto;
    let inputRef = db.collection('comments').doc(id);
    return inputRef.update({
      comment: texto
    }).then(function() {
      console.log('Document successfully updated!');
    }).catch(function(error) {
      // The document probably doesn't exist.
      console.error('Error updating document: ', error);
    });
  };
  
  

//Declarando las variables a utilizar

//const db = firebase.firestore();
const publicar = () => {
    firebase.auth().onAuthStateChanged(user =>{
        if(user) {
            document. getElementById(botonCompartir).addEventListener("click", 
            event => {
            event.preventDefault();
        const contenidoPublicaiones = document.getElementById('myTextarea').value;
        let datePublications = `${new Date()}`;
        db.collection('publicaciones').add({
            contenido: contenidoPublicaiones,
            user: user.displayName,
            fecha: datePublications
    }).then(result =>{
        console.log('publicacion');
    }).catch(error => {
        console.log('Error');
    });
    writePublications();
    });
    } else{
        location.href = ('profile.html')
    }
})
}
    const writePublications = () => {
    const publicaciones = db.collection('publicaciones').get()
    .then(response => {
        let result = '';
        result += `<div>${Element.data().contenido}</div>
        <div> Publicado por: ${element.data().user}</div>`
    })
    document.getElementById('lista').innerHTML = result ;
    }*/
