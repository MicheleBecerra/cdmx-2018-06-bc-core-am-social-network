
firebase.initializeApp(config);
console.log("firebase activo");
//Introducir los metodos del DOM
const txtEmail = document.getElementById("email");
const txtPassword = document.getElementById("password");
const login = document.getElementById("btnLogin");
const signUp = document.getElementById("btnSign");
const logout = document.getElementById("btnLogout");

// Se agrega el evento click para el boton LogIn
//Pasando de Login a Profile



login.addEventListener("click", e => {
    console.log("entro login");
//Obteniendo e-mail y password
    const email= txtEmail.value;
    const password = txtPassword.value;
    const auth = firebase.auth();
    
// Se entra con Sign In
  window.location.assign("https://rociomatias05.github.io/DataLabo-2da-entrega/dashboard/src/index.html")

    const promise = auth.signInWithEmailAndPassword(email, password);
    promise.catch(e => console.log(e.message)
   
);
    location.href("index.html");
    });
    
// Se agrega el evento click para el boton SignUp
signUp.addEventListener("click", e =>{
    console.log("entro SingUp");
//Creando usuarios con el btnSignUp

    const email= txtEmail.value;
    const password = txtPassword.value;
    const auth = firebase.auth();
    alert("Registro exitoso, Bienvenida!");
    //window.location.assign("https://rociomatias05.github.io/DataLabo-2da-entrega/dashboard/src/index.html")

//mandamos los valores de email y password como parámetros al método createUserEmailAndPassword
    const promise = auth.createUserWithEmailAndPassword(email, password);
    promise.catch(e => console.log(e.message)
    location.href("index.html")
  );

  
    // logout.addEventListener("click", h =>{
    //   firebase.auth().signOut();
    // });
    

    // firebase.auth.onAuthStateChanged(firebaseUser =>{
    //     if(firebaseUser){
    //         console.log(firebaseUser);
    //         logout.classList.remove("hide");
    //     }else{
    //         console.log("not logged");
    //         logout.classList.add("hide");
    //     }
    // });    
});
